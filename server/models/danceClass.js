const mongoose = require("mongoose");
const { Schema } = mongoose;

//課程collection部份
const danceClassSchema = new Schema({
  code: String,
  type: {
    type: String,
    enum: [
      "Regular Class",
      "Pop Up Class",
      "Workshop Class",
      "Showcase Class",
      "Other Class",
    ],
  },
  style: {
    type: String,
    enum: ["Heels Dance", "Chair Dance", "Jazz Funk", "Twerk", "Hip Hop", "House", "Poping", "Locking", "Girls Hip Hop", "Urban", 'Conternporary', 'Waacking', 'K-pop', 'Breaking'],
  },
  teacher: String,
  vacancy: String,
  status:{ type: String, enum: ["招收中", "已取消", "額滿"] },
  level: { type: String, enum: ["beginner", "Open style"] },
  date: { type: Date },
  startTime: { type: String },
  endTime: { type: String },
  description: String,
  price: { type: Number },
  lessonDuration: [{ type: Date }],
  room: { type: String, enum: ["Room X", "Room L", "Room XL"] },
  performanceDay: { type: Date }, 
  img:{ type: String },
  createdAt: { type: Date, default: Date.now },
});
const DanceClass = mongoose.model("DanceClass", danceClassSchema);

module.exports = DanceClass;

// 建立object及save到mongodb的範例
// const newDanceClass = new DanceClass({
//   code: "DC001",
//   type: "Workshop Class",
//   style: "Jazz Funk",
//   teacher: "Ms. Emily Wong",
//   vacancy: "10",
//   status: "Open",
//   level: "beginner",
//   date: new Date("2025-03-20"),
//   startTime: "15:00",
//   endTime: "16:30",
//   description: "An energetic workshop to explore the basics of Jazz Funk. Perfect for beginners who want to groove and express themselves.",
//   price: 200, // in your currency
//   lessonDuration: [new Date("2025-03-20T15:00:00"), new Date("2025-03-20T16:30:00")],
//   room: "Room L",
//   performanceDay: new Date("2025-03-25"),
//   img: "jazz_funk_workshop.jpg",
//   createdAt: new Date(), // Defaults to the current date/time
// });

// newDanceClass
//   .save()
//   .then((savedDoc) => {
//     console.log("儲存完畢, 資料是:");
//     console.log(savedDoc);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
