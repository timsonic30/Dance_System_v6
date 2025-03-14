//抓出工具
const express = require("express");
const router = express.Router();
const DanceClass = require("../models/danceClass");
const Teacher = require("../models/teacher")

//交給前端class資料
router.get("/", async (req, res, next) => {
  try {
    let classData = await DanceClass.find({}).exec();
    console.log(classData);
    return res.send({ classData });
  } catch (e) {
    return res.send(e);
  }
});

//====20250313 start==============================
router.get("/classCreate", async (req, res, next) => {
  try {
    let classData = await DanceClass.findOne().exec();
    return res.send({ classData });
  } catch (e) {
    return res.send(e);
  }
});

// 返回collection的schema結構
router.get("/schema", (req, res, next) => {
  const schema = DanceClass.schema.paths;
  res.send({ schema });
});

//從前端到來的資料, 放入danceClass collection中
router.post("/classCreate", async (req, res, next) => {
  const {
    code, type, style, teacher, vacancy, status, level, date, startTime, endTime, description, price, lessonDuration, room, performanceDay, img
  } = req.body;

  const newDanceClass = new DanceClass({
    code, type, style, teacher, vacancy, status, level, date, startTime, endTime, description, price, lessonDuration, room, performanceDay, img
  });

  newDanceClass
    .save()
    .then((savedDoc) => {
      console.log("儲存完畢, 資料是:");
      console.log(savedDoc);
      res.send({ response: "ok" });
    })
    .catch((e) => {
      console.log(e);
    });
});

//=======20250314================================
router.get('/roomRental', (req, res, next) => { })
//======20250314=15:00=取出DB的schema做form==========
router.get('/teacherDataEntry', (req,res,next)=>{
  const schema = Teacher.schema.paths;
  res.send({ schema });
})
//======將teacher的資料輸入DB=====================
router.post('/teacherDataEntry', (req,res,next)=>{
  //console.log(req.body)
  const {    username, nickname, email, phone, password, dateOfBirth, description, style, instagram, profilePic
  } = req.body;

  const newTeacher = new Teacher({
    username, nickname, email, phone, password, dateOfBirth, description, style, instagram, profilePic
  });

  newTeacher
    .save()
    .then((savedDoc) => {
      console.log("儲存完畢, 資料是:");
      console.log(savedDoc);
      res.send({ response: "ok" });
    })
    .catch((e) => {
      console.log(e);
    });
})
//=======向teacher collection取出資料, 放入頁面=====
router.get("/tutor", async(req, res, next) => {     
  console.log('this is call')
  try {
    console.log('this is try')
    let Teachers = await Teacher.find()    
    console.log(Teachers)    
    return res.send({ Teachers });
  } catch (e) {
    console.error("Error during database operation:", e.message);
    return res.status(500).send({ error: e.message });
  }
});


//export此module到index.js
//index.js要用const danceClass = require("./routes/danceClass");接收
//index.js要用app.use("/danceClass", danceclass);將request轉過來
module.exports = router;
