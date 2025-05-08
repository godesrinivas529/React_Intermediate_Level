import React, { useState } from "react";
import CountdownTimer from "./CountdownTimer";

const TimerMain = () => {
  const [timers, setTimers] = useState([]);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");

  const addTimer = () => {
    if (!title || !category || !duration) return alert("Fill all fields!");
    setTimers([...timers, { id: Date.now(), title, category, duration: parseInt(duration) }]);
    setTitle(""); setCategory(""); setDuration("");
  };

  const removeTimer = (id) => {
    setTimers(timers.filter((timer) => timer.id !== id));
  };

  return (
    <div className="container" >
      <h2>Event Countdown Timers</h2>
      <div className="inputContainer">
        <input className="input" type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <input className="input" type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
        <input className="input" type="number" placeholder="Time (secs)" value={duration} onChange={(e) => setDuration(e.target.value)} />
        <button className="button" onClick={addTimer}>Add Timer</button>
      </div>

      <div className="timerContainer">
        {timers.map((timer) => (
          <CountdownTimer key={timer.id} {...timer} removeTimer={removeTimer} />
        ))}
      </div>
    </div>
  );
};

export default TimerMain;