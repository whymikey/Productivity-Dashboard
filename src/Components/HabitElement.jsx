const HabitElement = ({ habit, onSelect, onDelete }) => {
  const progressPercent = habit.progress || 0;

  return (
    <div
      onClick={() => onSelect(habit)}
      className="
        bg-[var(--btn-background-color)]
        shadow-md rounded-xl p-6
        flex flex-col gap-6
        transition-all duration-200
        hover:-translate-y-1 hover:shadow-lg
        cursor-pointer
      "
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex items-center gap-3">
          <div className="text-3xl min-w-[48px] flex items-center justify-center">
            {habit.icon}
          </div>

          <div className="flex flex-col gap-1">
            <h3 className="text-base font-semibold text-[var(--heading-color)]">
              {habit.name}
            </h3>
            <p className="text-sm text-[var(--heading-subtitle-color)]">
              level {habit.level}
            </p>
          </div>
        </div>

        <span className="text-[var(--heading-color)] text-sm font-medium whitespace-nowrap">
          {100 - habit.xp} XP
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete(habit.id);
          }}
          className="
    text-gray-400 hover:text-red-500 
    transition p-1 rounded-full hover:bg-gray-200
  "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <div>
        <div className="flex justify-between mb-2 text-sm text-[var(--card-subtitle-color)]">
          <span>{progressPercent} / 100 XP</span>
          <span>{habit.progress} %</span>
        </div>

        <div className="w-full h-2 bg-[var(--card--fill-progress-color)] rounded-md overflow-hidden">
          <div
            className="h-full rounded-md transition-all duration-300"
            style={{
              width: `${progressPercent}%`,
              background: habit.color,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HabitElement;
