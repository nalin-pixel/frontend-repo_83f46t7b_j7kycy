import { Upload, FileText, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Upload,
      title: "Upload any doc",
      desc: "PDF, Word, PowerPoint, or paste a YouTube link.",
    },
    {
      icon: FileText,
      title: "We extract content",
      desc: "Text is safely extracted from your file or transcript.",
    },
    {
      icon: Sparkles,
      title: "Learn faster",
      desc: "Get summaries, key points, ELI12, and Q&A practice.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
        How it works
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {steps.map((s, idx) => {
          const Icon = s.icon;
          return (
            <div
              key={idx}
              className="rounded-2xl border border-gray-200 dark:border-white/10 bg-white/70 dark:bg-white/5 p-6 shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-violet-100 dark:bg-violet-500/20 flex items-center justify-center mb-4">
                <Icon className="w-5 h-5 text-violet-700 dark:text-violet-300" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white">{s.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{s.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
