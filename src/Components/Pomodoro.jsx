import { useState, useEffect, use } from "react";

const Pomodoro = ({ activeHabit, onFinish }) => {
  const totalTime = 0.1 * 60;
  const [time, setTime] = useState(0.1 * 60);
  const [isRunning, setIsRunning] = useState(false);

  const circumference = 2 * Math.PI * 100;
  const progress = time / totalTime;
  const dashoffset = circumference * progress;

  useEffect(() => {
    let interval = null;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);


  useEffect(() => {
    if (time === 0 && isRunning) {
      setIsRunning(false)
      if (activeHabit) {
        onFinish(activeHabit.id, 25)
        setTime(totalTime)
      }
    }
  }, [time, isRunning])

  function handleStart() {
    if (!activeHabit) return;
    setIsRunning(true);
  }

  function handlePause() {
    setIsRunning(false);
  }

  function handleReset() {
    setIsRunning(false);
    setTime(25 * 60);
  }

  return (
    <div
      className="
      h-full bg-[var(--btn-background-color)] rounded-xl shadow-md 
      p-10 flex flex-col gap-6 justify-center
      transition-all duration-200
    "
    >
      <h2 className="text-2xl font-semibold text-[var(--heading-color)]">
        Pomodoro Timer
      </h2>

      <p className="text-[var(--heading-subtitle-color)]">
        Training: {activeHabit ? activeHabit.name : ""}
      </p>

      <div className="flex justify-center">
        <div className="relative w-[220px] h-[220px]">
          <svg viewBox="0 0 220 220" className="w-full h-full -rotate-90">
            <circle
              cx="110"
              cy="110"
              r="100"
              stroke="#f3f4f6"
              strokeWidth="12"
              fill="none"
            />
            <circle
              cx="110"
              cy="110"
              r="100"
              stroke="#8b5cf6"
              strokeWidth="12"
              fill="none"
              strokeDasharray={circumference}
              strokeDashoffset={dashoffset}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-4xl font-bold text-[var(--heading-color)]">
              {Math.floor(time / 60)}:{String(time % 60).padStart(2, "0")}
            </p>
            <p className="text-sm tracking-widest text-[var(--heading-subtitle-color)]">
              FOCUS TIME
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-around gap-4 mt-4">
        <button
          onClick={() => setIsRunning(!isRunning)}
          className="
            flex-1 py-3 rounded-lg text-white font-medium
            bg-[oklch(55.8%_0.288_302.321)]
            hover:brightness-110 transition
          "
        >
          {isRunning ? "Stop" : "Start"}
        </button>

        <button
          onClick={() => {
            setIsRunning(false);
            setTime(totalTime);
          }}
          className="
            px-4 py-3 rounded-lg
            border border-black/10
            bg-[var(--reset-btn-color)]
            text-[var(--heading-color)]
            hover:bg-gray-100 transition 
            hover:text-black
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-rotate-ccw"
          >
            <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path>
            <path d="M3 3v5h5"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;
