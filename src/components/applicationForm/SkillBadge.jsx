// SkillBadge.jsx
export default function SkillBadge({ skill, onRemove }) {
  return (
    <span className="flex items-center gap-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
      {skill}
      <button
        onClick={() => onRemove(skill)}
        className="text-red-500 hover:text-red-700 font-bold"
      >
        ×
      </button>
    </span>
  );
}
