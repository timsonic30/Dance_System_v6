"use client";
import { useState, useEffect, useRef } from "react";
import InstructorShowcase from "./carousel";
import DanceInstructorProfile from "./danceInstructorProfile";

export default function TutorShowcase() {
  const [data, setData] = useState("");

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3030/danceclass/tutor");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const res = await response.json();
      setData(res)      
    } catch (err) {
      console.error("Error fetching tutor data:", err);
    }
  };


  useEffect(() => {
    getData()
  }, []);

  return (
    <div>
      <DanceInstructorProfile data={data}/>
      <InstructorShowcase data={data} />
    </div>
  );
}
