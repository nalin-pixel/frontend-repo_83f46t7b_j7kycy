import React, { useState } from 'react';
import { Link as LinkIcon, FileText, Scissors } from 'lucide-react';

export default function InputPanel({ onProcess }) {
  const [mode, setMode] = useState('text');
  const [text, setText] = useState('');
  const [youtubeUrl, setYoutubeUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = mode === 'text' ? { text } : { url: youtubeUrl };
    onProcess({ mode, ...payload });
  };

  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="grid gap-6 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => setMode('text')}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
              mode === 'text'
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <FileText className="h-4 w-4" /> Paste Notes
          </button>
          <button
            type="button"
            onClick={() => setMode('youtube')}
            className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${
              mode === 'youtube'
                ? 'border-indigo-600 bg-indigo-50 text-indigo-700'
                : 'border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
          >
            <LinkIcon className="h-4 w-4" /> YouTube Link
          </button>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          {mode === 'text' ? (
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Paste transcript or notes here..."
              className="min-h-[160px] w-full rounded-xl border border-gray-200 bg-white p-4 text-gray-800 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          ) : (
            <input
              type="url"
              value={youtubeUrl}
              onChange={(e) => setYoutubeUrl(e.target.value)}
              placeholder="https://www.youtube.com/watch?v=..."
              className="w-full rounded-xl border border-gray-200 bg-white p-4 text-gray-800 placeholder:text-gray-400 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            />
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Scissors className="h-4 w-4" />
              Summaries are concise with clear sectioning
            </div>
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            >
              Generate Summary
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
