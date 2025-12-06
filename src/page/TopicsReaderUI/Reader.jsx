import { BookOpen, Copy } from "lucide-react";
import { useState } from "react";

export default function Reader({ subTopic }) {
  const [copied, setCopied] = useState(false);

  const copyCode = () => {
    navigator.clipboard.writeText(subTopic.code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <aside className="w-full p-4 border-l border-[#1a1f2e]">
      <div className="bg-[#141A26] rounded-2xl p-5 overflow-auto h-full">
        {!subTopic ? (
          <div className="h-full flex flex-col items-center justify-center text-gray-400">
            <BookOpen size={48} />
            <div className="mt-4 font-semibold">Select a topic to start</div>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold">{subTopic.name}</h2>

            <p className="mt-3 text-gray-300 leading-relaxed">
              {subTopic.content}
            </p>

            {/* 🔥 CODE BOX */}
            {subTopic.code && (
              <div className="mt-6 bg-[#0D1117] p-4 rounded-lg border border-[#1e2638] relative">
                <button
                  onClick={copyCode}
                  className="absolute top-2 right-2 bg-[#1e293b] px-3 py-1 rounded text-xs hover:bg-[#334155] transition flex items-center gap-1"
                >
                  <Copy size={14} />
                  {copied ? "Copied!" : "Copy"}
                </button>

                <pre className="text-sm text-gray-200 overflow-x-auto whitespace-pre-wrap">
                  {`${subTopic.code}`}
                </pre>
              </div>
            )}
          </>
        )}
      </div>
    </aside>
  );
}
