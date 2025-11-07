import React from 'react';
import { Upload, Wand2, ListChecks } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    {
      title: 'Add content',
      desc: 'Paste notes or provide a YouTube link (transcript recommended for best results).',
      Icon: Upload,
    },
    {
      title: 'Generate',
      desc: 'We process your text and extract a clean summary, key points, and practice questions.',
      Icon: Wand2,
    },
    {
      title: 'Review & retain',
      desc: 'Skim the summary, scan the bullets, and test yourself with a quick quiz.',
      Icon: ListChecks,
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <h2 className="mb-6 text-center text-2xl font-bold text-gray-900">How it works</h2>
      <div className="grid gap-6 sm:grid-cols-3">
        {steps.map(({ title, desc, Icon }) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-700">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="mt-2 text-sm text-gray-600">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
