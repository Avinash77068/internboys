import { useState } from "react";
import DATA from "../../components/data/AllTopic";
import TopicList from "./TopicList";
import Sidebar from "./Sidebar";
import Reader from "./Reader";

const SAMPLE_TOPICS = Object.keys(DATA);

export default function TopicsApp() {
  const [selectedTopic, setSelectedTopic] = useState(SAMPLE_TOPICS[0]);
  const [selectedSubTopic, setSelectedSubTopic] = useState(DATA[SAMPLE_TOPICS[0]][0]);

  return (
    <div className=" justify-between w-full flex flex-row bg-[#0B0E14] text-gray-100">
      <Sidebar
        topics={SAMPLE_TOPICS}
        selectedTopic={selectedTopic}
        onTopicSelect={(topic) => {
          setSelectedTopic(topic);
          setSelectedSubTopic(null);
        }}
      />

      <TopicList
        selectedTopic={selectedTopic}
        lessons={DATA[selectedTopic]}
        onLessonSelect={(sub) => setSelectedSubTopic(sub)}
      />

      <Reader subTopic={selectedSubTopic} />
    </div>
  );
}
