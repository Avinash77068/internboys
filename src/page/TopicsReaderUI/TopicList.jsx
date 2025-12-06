import { Circle, CheckCircle2 } from "lucide-react";

export default function TopicList({
  selectedLesson,
  selectedTopic,
  lessons,
  onLessonSelect,
}) {
  return (
    <main className="flex flex-col w-full p-6">
      <h2 className="text-2xl font-bold mb-4">{selectedTopic}</h2>

      <div className="space-y-3 scrollbar-hidden scrollbar-hide max-w-[40vw] max-h-[50vh] overflow-y-auto pr-2">
        {lessons.map((sub, i) => {
          const isSelected = selectedLesson?.name === sub.name;

          return (
            <div
              key={i}
              onClick={() => onLessonSelect(sub)}
              className={`cursor-pointer p-4 flex items-center gap-3 rounded-xl border duration-200
                ${
                  isSelected
                    ? "border-blue-500 bg-blue-500/10"
                    : "border-[#1b2333] hover:border-blue-500 hover:bg-[#111620]"
                }
              `}
            >
              {/* RADIO / CHECK ICON */}
              {isSelected ? (
                <CheckCircle2 size={20} className="text-blue-400" />
              ) : (
                <Circle size={20} className="text-gray-500" />
              )}

              <div className="font-semibold text-sm">{sub.name}</div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
