import { X } from "lucide-react";
import { useState } from "react";

export default function SkillTagInput({ skills, setSkills }) {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();

      const value = inputValue.trim().toLowerCase();

      if (!value || skills.includes(value)) return;

      setSkills([...skills, value]);
      setInputValue("");
    }
  };

  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  return (
    <div className="mt-6">
      <label className="block font-semibold text-gray-700 mb-2">
        Skills (Press Enter to Add)
      </label>

      <div className="flex flex-wrap items-center gap-2 p-3 border rounded-lg bg-gray-50 min-h-[56px]">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex items-center gap-2 bg-blue-600 text-white px-3 py-1 rounded-full cursor-pointer hover:bg-blue-700"
            onClick={() => removeSkill(skill)}
          >
            {skill}
            <X size={16} />
          </div>
        ))}

        <input
          type="text"
          className="flex-grow bg-transparent border-none outline-none text-sm"
          placeholder="Type and press Enter..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  );
}
