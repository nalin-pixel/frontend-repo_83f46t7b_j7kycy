import React from 'react';
import { BookOpen, Sparkles } from 'lucide-react';

export default function HeroHeader() {
  return (
    <header className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50" />
      <div className="relative mx-auto max-w-5xl px-6 py-14">
        <div className="flex items-center gap-3 text-indigo-600">
          <BookOpen className="h-6 w-6" />
          <span className="font-semibold tracking-wide">Study Clarity</span>
        </div>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Summarize and understand your studies with clarity
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-gray-600">
          Drop in notes from a PDF or add a YouTube link, paste the transcript or your own notes, and get a
          clean summary, key points, and practice questions.
        </p>
        <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-indigo-600/10 px-4 py-2 text-sm text-indigo-700">
          <Sparkles className="h-4 w-4" />
          <span>Optimized for quick revision and deeper understanding</span>
        </div>
      </div>
    </header>
  );
}
