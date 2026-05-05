import { useEffect, useState } from "react";
import { useTheme } from "./Components/SwitchTheme";
import Header from "./Components/Header";
import HabitsList from "./Components/HabitsList";
import habitsArray from "./data/data";
import Form from "./Components/Form";
import Pomodoro from "./Components/Pomodoro";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });
  const [form, setForm] = useState(false);
  const [activeHabit, setActiveHabit] = useState(null);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const saved = localStorage.getItem("habits");
    if (saved) setHabits(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  function addHabit(newHabit) {
    setHabits([...habits, newHabit]);
  }

  function handleClickForm() {
    setForm(true);
  }

  function handleCloseForm() {
    setForm(false);
  }

  function handleDeleteHabit(id) {
    const newArray = habits.filter((habit) => habit.id !== id)
    setHabits(newArray)
  }

  function addXp(id, amount) {
    console.log("addXp called with:", amount);
    setHabits(
      habits.map((habit) => {
        if (habit.id === id) {
          let newXp = habit.xp + amount;
          let newLevel = habit.level;
          let newProgress = Math.min(Math.round((newXp / 100) * 100), 100);

          if (newXp >= 100) {
            newLevel += 1;
            newXp = newXp - 100;
            newProgress = Math.round((newXp / 100) * 100);
          }

          return {
            ...habit,
            xp: newXp,
            level: newLevel,
            progress: newProgress,
          };
        }
        return habit;
      }),
    );
  }

  return (
    <div className="min-h-screen bg-[var(--bg-color)] p-8 max-w-[1100px] mx-auto">
      <Header
        handleClickForm={() => setForm(true)}
        setTheme={setTheme}
        theme={theme}
        habits={habits}
      />

      <HabitsList
        habits={habits}
        onSelect={setActiveHabit}
        activeHabit={activeHabit}
        onFinish={addXp}
        onDelete={handleDeleteHabit}
      />

      {form && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-[9999]"
          onClick={() => setForm(false)}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <Form onClose={() => setForm(false)} onAdd={addHabit} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
