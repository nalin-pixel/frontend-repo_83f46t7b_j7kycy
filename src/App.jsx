import React, { useState } from 'react';
import HeroHeader from './components/HeroHeader';
import InputPanel from './components/InputPanel';
import ResultsTabs from './components/ResultsTabs';
import HowItWorks from './components/HowItWorks';

// Since the backend is not specified here, we'll do client-side mock processing
// to demonstrate the layout and UX. This can be wired to an API later.
function mockProcess({ mode, text = '', url = '' }) {
  const base = text || (url ? `Transcript from ${url}` : '');
  const clean = base.trim().replace(/\s+/g, ' ');
  const summary = clean
    ? `This content discusses: ${clean.slice(0, 180)}${clean.length > 180 ? '…' : ''}`
    : 'No content provided.';

  const bullets = clean
    ? [
        'Main idea identified and explained simply.',
        'Important terms highlighted with brief definitions.',
        'Examples included to reinforce concepts.',
        'Actionable takeaways for quick revision.',
      ]
    : ['Paste some text or add a link to get started.'];

  const eli12 = clean
    ? 'Imagine explaining this to a friend. In simple words: it is about understanding big ideas by breaking them into smaller, friendly pieces.'
    : 'Nothing to explain yet — add content above.';

  const quiz = clean
    ? [
        'What is the main idea of the content? ',
        'Name one key term and define it in your own words.',
        'Give one example that supports the main idea.',
        'What is one takeaway you can apply right now?',
      ]
    : ['Add content to generate practice questions.'];

  return { summary, bullets, eli12, quiz };
}

export default function App() {
  const [result, setResult] = useState(null);

  const handleProcess = (payload) => {
    const out = mockProcess(payload);
    setResult(out);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-indigo-50/40">
      <HeroHeader />
      <main className="space-y-8 pb-16">
        <InputPanel onProcess={handleProcess} />
        <ResultsTabs result={result} />
        <HowItWorks />
      </main>
      <footer className="border-t bg-white/60 py-6 text-center text-sm text-gray-500">
        Built for students who want clarity, not clutter.
      </footer>
    </div>
  );
}
