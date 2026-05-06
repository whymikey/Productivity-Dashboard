import Avatar from "../assets/avatar.jpg";

const Header = ({ handleClickForm, onClose, setTheme, theme, habits }) => {
  const level = 1;
  const xp = habits.reduce((sum, habit) => sum + habit.xp, 0);
  const xpMax = 1000;
  const progress = Math.round((xp / xpMax) * 100);

  return (
    <div className="mb-8">
      <div className="w-full flex justify-between mb-6 gap-6">
        <div>
          <h1 className="text-4xl leading-tight text-[var(--heading-color)]">
            Productivity Dashboard
          </h1>
          <p className="text-[16px] text-[var(--heading-subtitle-color)]">
            Track your progress and level up your skills
          </p>
        </div>

        <div className="flex flex-col items-center gap-3 md:flex-row md:items-center">
          <button
            onClick={handleClickForm}
            className="flex items-center justify-center w-[7em] h-[3em] text-base font-medium bg-[oklch(55.8%_0.288_302.321)] text-white rounded-[10px] transition hover:brightness-110
  "
          >
            + Add Skill
          </button>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className={`flex justify-center items-center w-[7em] h-[3em] sm:w-14 sm:h-12 border border-black/10 rounded-lg bg-[var(--btn-background-color)] transition ${theme === "dark" ? "hover:bg-[var(--card--fill-progress-color)]" : "hover:bg-gray-100"} hover:shadow-md`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              stroke="var(--svg-stroke)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-sun"
            >
              <circle cx="12" cy="12" r="4"></circle>
              <path d="M12 2v2"></path>
              <path d="M12 20v2"></path>
              <path d="m4.93 4.93 1.41 1.41"></path>
              <path d="m17.66 17.66 1.41 1.41"></path>
              <path d="M2 12h2"></path>
              <path d="M20 12h2"></path>
              <path d="m6.34 17.66-1.41 1.41"></path>
              <path d="m19.07 4.93-1.41 1.41"></path>
            </svg>
          </button>
        </div>
      </div>

      <div className="shadow-md p-6 flex items-center gap-5">
        <div className="flex flex-col items-center gap-3">
          <div
            className="w-[120px] h-[120px] rounded-full p-[6px] flex items-center justify-center relative"
            style={{
              background: `conic-gradient(#D05CE3 ${progress}%, #e5e7eb 0)`,
            }}
          >
            <img
              src={Avatar}
              alt="Avatar"
              className="w-full h-full rounded-full object-cover bg-white"
            />
            <span className="absolute bottom-[-3px] right-[-3px] w-8 h-8 rounded-full bg-[#ff00c8] text-white flex items-center justify-center font-bold text-[0.95rem] border-2 border-white shadow">
              {level}
            </span>
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between mb-2">
            <h2 className="text-xl font-semibold text-[var(--heading-color)]">
              Why
            </h2>

            <div className="flex items-center gap-1.5 md:gap-2 text-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500 "
              >
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>
              <span className="text-[var(--heading-color)] text-base md:text-lg">
                7 day streak
              </span>
            </div>
          </div>

          <p className="text-sm mb-2 text-[var(--heading-color)]">
            Level 1 <span className="text-gray-400">•</span>{" "}
            <span className="text-[#E58BF0] font-semibold">{xp} XP</span>
          </p>

          <div className="flex justify-between text-xs text-[var(--card-subtitle-color)] mb-2">
            <p>
              {xp} / {xpMax}
            </p>
            <span>Next level: 2</span>
          </div>

          <div className="w-full h-[10px] rounded-full bg-gray-200 overflow-hidden">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#d05ce3] to-[#ff3fb0] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
