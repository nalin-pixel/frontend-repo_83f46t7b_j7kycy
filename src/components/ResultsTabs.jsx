import React, { useState } from 'react';

function TabButton({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md px-3 py-2 text-sm font-medium ${
        active ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
      }`}
    >
      {label}
    </button>
  );
}

export default function ResultsTabs({ result }) {
  const [tab, setTab] = useState('summary');

  if (!result) {
    return (
      <section className="mx-auto max-w-5xl px-6">
        <div className="mt-8 rounded-2xl border border-dashed border-gray-300 bg-white p-8 text-center text-gray-500">
          Your summary will appear here after processing.
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-6">
      <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-4 flex gap-2">
          <TabButton label="Summary" active={tab === 'summary'} onClick={() => setTab('summary')} />
          <TabButton label="Key Points" active={tab === 'bullets'} onClick={() => setTab('bullets')} />
          <TabButton label="Explain Like I'm 12" active={tab === 'eli12'} onClick={() => setTab('eli12')} />
          <TabButton label="Quiz" active={tab === 'quiz'} onClick={() => setTab('quiz')} />
        </div>

        {tab === 'summary' && (
          <div className="prose max-w-none prose-headings:mt-6 prose-headings:font-semibold prose-p:leading-relaxed">
            <h3>Summary</h3>
            <p>{result.summary}</p>
          </div>
        )}

        {tab === 'bullets' && (
          <div>
            <h3 className="mb-3 text-lg font-semibold">Key Points</h3>
            <ul className="list-disc space-y-2 pl-5 text-gray-700">
              {result.bullets.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>
        )}

        {tab === 'eli12' && (
          <div>
            <h3 className="mb-3 text-lg font-semibold">Explain Like I'm 12</h3>
            <p className="leading-relaxed text-gray-700">{result.eli12}</p>
          </div>
        )}

        {tab === 'quiz' && (
          <div>
            <h3 className="mb-3 text-lg font-semibold">Quick Quiz</h3>
            <ol className="list-decimal space-y-2 pl-5 text-gray-700">
              {result.quiz.map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ol>
          </div>
        )}
      </div>
    </section>
  );
}
