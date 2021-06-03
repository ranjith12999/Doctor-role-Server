const express = require("express");

const router = express.Router();
const taskData = require("../server/db/models/task");
const patientFormData = require("../server/db/models/patientForm");
const medicationFormData = require("../server/db/models/medicationData");
const scheduledEventData = require("../server/db/models/ScheduledData");
const patientIDData = require("../server/db/models/patientId");

router.get("/task", (req, res) => {
  taskData
    .find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.post("/patientFormData", (req, res) => {
  console.log("Body:", req.body);
  const data = req.body;

  const newFormData = new patientFormData(data);

  newFormData.save((error) => {
    if (error) {
      res.status(500).json({
        msg: "internal routing problem",
      });
    } else {
      res.json({
        msg: "patient form data is saved",
      });
    }
  });
});

router.post("/currentEvent", (req, res) => {
  console.log("Body:", req.body);
  const DID = req.body.doctor_id;
  console.log("did", DID);
  const data = req.body;
  const eventData = new scheduledEventData(data);
  scheduledEventData.estimatedDocumentCount(function (err, count) {
    if (!err && count != 0) {
      console.log("db not empty");
      scheduledEventData
        .find({ doctor_id: DID })
        .then((oldData) => {
          console.log("function", oldData);
          if (oldData.length === 0) {
            eventData.save((error) => {
              if (error) {
                res.status(500).json({
                  msg: "internal routing problem",
                });
              } else {
                res.json({
                  msg: "event data is saved",
                });
              }
            });
          } else {
            console.log("old Datatata");
            const did = oldData[0].doctor_id;
            const array = eventData;
            console.log("entered old", array);
            scheduledEventData
              .replaceOne(
                { doctor_id: did },
                {
                  doctor_id: array.doctor_id,
                  eventData: array.eventData,
                  createdBy: array.createdBy,
                  updatedBy: array.updatedBy,
                  createdAt: oldData.createdAt,
                  updatedAt: array.updatedAt,
                }
              )
              .then(() => {
                console.log("updated successful");
              });
          }
        })
        .catch((error) => {
          console.log("error", error);
        });
    } else {
      eventData.save((error) => {
        if (error) {
          res.status(500).json({
            msg: "internal routing problem",
          });
        } else {
          res.json({
            msg: "event data is saved",
          });
        }
      });
    }
  });
});
router.get("/getCurrentEvent", (req, res) => {
  scheduledEventData
    .find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.post("/medicationData", (req, res) => {
  console.log("Body:", req.body);
  const data = req.body;
  const newFormData = new medicationFormData(data);
  newFormData.save((error) => {
    if (error) {
      res.status(500).json({
        msg: "internal routing problem",
      });
    } else {
      res.json({
        msg: "patient form data is saved",
      });
    }
  });
});

router.post("/cutPending", (req, res) => {
  console.log("Body:", req.body);
  const data = req.body.appointmentId;
  taskData
    .deleteOne({ sourceId: data })
    .then(() => {
      console.log("removed successfully");
    })
    .catch(() => {
      console.log("removed error");
    });
  console.log("f", taskData.find({}));
});

router.get("/getCompletedData", (req, res) => {
  medicationFormData
    .find({})
    .then((data) => {
      console.log("Data:", data);
      res.json(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
});

router.post("/currentPatientId", (req, res) => {
  const data = req.body;
  console.log("patient ID", data);
  router.get("/currentPatientData", (req, res) => {
    console.log("lastData", data);
    medicationFormData
      .find(data)
      .then((data) => {
        console.log("PatientData:", data);
        res.json(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });

  router.get("/currentPatientOtherData", (req, res) => {
    patientFormData
      .find(data)
      .then((data) => {
        console.log("PatientOtherData:", data);
        res.json(data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  });
});

module.exports = router;
