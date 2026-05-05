import HabitElement from "./HabitElement";
import Pomodoro from "./Pomodoro";
const HabitsList = ({ habits, onSelect, activeHabit, onFinish, onDelete }) => {
  return (
    <div
      className="grid gap-6 mt-8 grid-cols-1sm:grid-cols-2 lg:grid-cols-3"
    >
      {habits.map((habit) => (
        <HabitElement key={habit.id} habit={habit} onSelect={onSelect} onDelete={onDelete}/>
      ))}
      <div className="lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-4 lg:sticky lg:top-5 justify-self-center self-center w-full h-full">
        <Pomodoro activeHabit={activeHabit} onFinish={onFinish}/>
      </div>
    </div>
  );
};

export default HabitsList;
