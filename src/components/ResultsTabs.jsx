import { useState } from "react";
import { ListChecks, BookOpen, Star, HelpCircle } from "lucide-react";

export default function ResultsTabs({ result }) {
  const tabs = [
    { key: "summary", label: "Summary", icon: BookOpen },
    { key: "keypoints", label: "Key Points", icon: ListChecks },
    { key: "eli12", label: "Explain Like I'm 12", icon: Star },
    { key: "qna", label: "Q&A Practice", icon: HelpCircle },
  ];
  const [active, setActive] = useState("summary");

  if (!result) return null;

  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="mt-8 rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur p-6 shadow-sm">
        <div className="flex flex-wrap gap-2 mb-4">
          {tabs.map((t) => {
            const Icon = t.icon;
            const isActive = active === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setActive(t.key)}
                className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-violet-600 text-white shadow"
                    : "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-200"
                }`}
              >
                <Icon className="w-4 h-4" /> {t.label}
              </button>
            );
          })}
        </div>

        <div className="prose dark:prose-invert max-w-none">
          {active === "summary" && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Summary</h3>
              <p className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap">{result.summary}</p>
            </div>
          )}

          {active === "keypoints" && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Key Points</h3>
              <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-200">
                {result.keypoints?.map((k, idx) => (
                  <li key={idx}>{k}</li>
                ))}
              </ul>
            </div>
          )}

          {active === "eli12" && (
            <div>
              <h3 className="text-xl font-semibold mb-2">Explain Like I'm 12</h3>
              <p className="text-gray-700 dark:text-gray-200 whitespace-pre-wrap">{result.eli12}</p>
            </div>
          )}

          {active === "qna" && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Q&A Practice</h3>
              <div className="grid gap-4 md:grid-cols-2">
                {result.qna?.map((q, i) => (
                  <QnaCard key={i} item={q} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function QnaCard({ item }) {
  const [show, setShow] = useState(false);
  return (
    <div className="rounded-xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-4 shadow-sm">
      <p className="font-medium text-gray-900 dark:text-gray-100">{item.q}</p>
      <button
        className="mt-3 text-sm text-violet-700 dark:text-violet-300 underline"
        onClick={() => setShow((s) => !s)}
      >
        {show ? "Hide answer" : "Show answer"}
      </button>
      {show && (
        <p className="mt-2 text-gray-700 dark:text-gray-200 whitespace-pre-wrap">{item.a}</p>
      )}
    </div>
  );
}
