import { GraduationCap, Sparkles } from "lucide-react";

export default function HeroHeader() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-600/20 via-fuchsia-500/10 to-transparent pointer-events-none" />
      <div className="mx-auto max-w-6xl px-6 py-16 sm:py-20">
        <div className="flex items-center gap-3 text-violet-600 dark:text-violet-400">
          <Sparkles className="h-5 w-5" />
          <span className="text-sm font-semibold tracking-wide uppercase">Study Assistant</span>
        </div>
        <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Turn any document into clear study notes
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          Upload PDFs, Word, PowerPoint, or text files. Get a clean summary, key points, a simple
          Explain Like I’m 12 version, and a quiz to test yourself.
        </p>
        <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/70 dark:bg-white/10 px-5 py-2 shadow-sm ring-1 ring-black/5 backdrop-blur">
          <GraduationCap className="h-5 w-5 text-violet-600" />
          <span className="text-sm text-gray-700 dark:text-gray-200">Doc, PDF, PPT, TXT supported</span>
        </div>
      </div>
    </header>
  );
}
