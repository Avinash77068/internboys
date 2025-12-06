import { Search } from "lucide-react";

export default function Sidebar({ topics, selectedTopic, onTopicSelect }) {
  return (
    <aside className="w-full border-r border-[#1a1f2e] p-4 hidden md:block">
      <div className="flex items-center gap-2 bg-[#131722] rounded-md px-3 py-2">
        <Search size={16} />
        <input
          placeholder="Search topics..."
          className="bg-transparent outline-none text-sm w-full"
        />
      </div>

      <h4 className="text-xs text-gray-400 uppercase mt-4 mb-2">Topics</h4>

      <div className="space-y-2 max-h-[65vh] overflow-y-auto pr-2">
        {topics.map((title) => (
          <div
            key={title}
            onClick={() => onTopicSelect(title)}
            className={`p-2 rounded-md cursor-pointer hover:bg-[#1a2133] transition ${
              selectedTopic === title
                ? "bg-blue-600/20 border border-blue-500"
                : ""
            }`}
          >
            <div className="font-medium text-sm">{title}</div>
            <div className="text-xs text-gray-400">Click to explore</div>
          </div>
        ))}
      </div>
    </aside>
  );
}
