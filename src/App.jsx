import { useState } from "react";
import HeroHeader from "./components/HeroHeader";
import UploadPanel from "./components/UploadPanel";
import ResultsTabs from "./components/ResultsTabs";
import HowItWorks from "./components/HowItWorks";

function mockProcess({ sourceType, name, content, url }) {
  // Very simple mock: build structured results from the provided text or link
  const base =
    sourceType === "link"
      ? `Transcript from: ${url}\n\nThis video explains core ideas in a friendly way.`
      : (content || "").slice(0, 1200) || "Sample lesson about ecosystems, energy flow, and food chains.";

  const summary = `In short: ${base.substring(0, 250)}...\n\nIt covers the main concepts and why they matter.`;
  const keypoints = [
    "Main idea identified and restated simply.",
    "Important definitions highlighted.",
    "Examples to connect ideas to real life.",
    "Takeaways you can remember quickly.",
  ];
  const eli12 = `Imagine explaining to a friend in middle school: ${base.substring(0, 180)}...`;
  const qna = [
    { q: "What is the central topic?", a: "It explains the key idea and how parts connect." },
    { q: "Why is this important?", a: "It helps you understand the bigger picture and apply it." },
    { q: "Give one example from the content.", a: "An everyday situation that illustrates the concept." },
    { q: "How could you use this knowledge?", a: "To solve a small problem or make a better decision." },
  ];

  return { summary, keypoints, eli12, qna };
}

export default function App() {
  const [result, setResult] = useState(null);

  const handleProcess = async (payload) => {
    // For now we simulate processing on the client.
    const data = mockProcess(payload);
    setResult(data);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-violet-50/40 dark:from-[#0b0b10] dark:to-[#0b0b10] text-gray-900 dark:text-white">
      <HeroHeader />
      <UploadPanel onProcess={handleProcess} />
      <ResultsTabs result={result} />
      <HowItWorks />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-sm text-gray-500">
        Built for students. Future updates will support backend processing, better summaries, and saved study sessions.
      </footer>
    </div>
  );
}
