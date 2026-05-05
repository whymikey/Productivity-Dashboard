import { useState } from "react";

const Form = ({ onClose, onAdd }) => {
  const [name, setName] = useState("");
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  return (
    <div className="w-[420px] bg-[var(--card-background-color)] p-6 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] flex flex-col gap-5 animate-[popup_0.25s_ease]">
      <div className="flex justify-between items-center">
        <h3 className="text-[20px] font-semibold text-[var(--heading-color)]">Add New Skill</h3>
        <button
          onClick={onClose}
          className="text-[20px] px-2 py-1 rounded-md hover:bg-gray-100 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-x"
          >
            <path d="M18 6 6 18"></path>
            <path d="m6 6 12 12"></path>
          </svg>
        </button>
      </div>

      <p className="text-sm font-medium text-[var(--heading-subtitle-color)]">Skill Name</p>
      <input
        type="text"
        placeholder="e.g., Meditation, Reading, Coding"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-3 rounded-xl border border-gray-300 text-[var(--heading-color)] text-[15px] outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-300"
      />

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-600">Choose Icon</p>
        <div className="grid grid-cols-6 gap-2">
          {["📘", "💪", "🎵", "❤️", "🎯", "📷"].map((icon) => (
            <button
              key={icon}
              onClick={() => setSelectedIcon(icon)}
              className={`w-12 h-12 rounded-xl border-2 flex items-center justify-center text-[22px] cursor-pointer bg-[var(--card-background-color)] transition
                ${
                  selectedIcon === icon
                    ? "border-blue-500 "
                    : "border-transparent  hover:bg-[var(--btn-background-color)]"
                }`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-600">Choose Color</p>
        <div className="grid grid-cols-6 gap-2">
          {[
            "#FF6B6B",
            "#FFD93D",
            "#6BCB77",
            "#4D96FF",
            "#9D4EDD",
            "#FF8E3C",
          ].map((color) => (
            <span
              key={color}
              onClick={() => setSelectedColor(color)}
              style={{ background: color }}
              className={`w-9 h-9 rounded-full cursor-pointer border-2 transition transform hover:scale-110
                ${
                  selectedColor === color
                    ? "border-black"
                    : "border-transparent"
                }`}
            ></span>
          ))}
        </div>
      </div>

      <div className="flex justify-end gap-3 mt-2">
        <button
          onClick={onClose}
          className="px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 transition font-medium"
        >
          Cancel
        </button>

        <button
          onClick={() => {
            if (!name || !selectedIcon || !selectedColor) return;
            onAdd({
              id: Date.now(),
              name,
              progress: 0,
              level: 0,
              xp: 0,
              color: selectedColor,
              icon: selectedIcon,
            });
            onClose();
          }}
          className="px-4 py-2 rounded-xl bg-blue-500 text-white hover:bg-blue-600 transition font-medium"
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default Form;
