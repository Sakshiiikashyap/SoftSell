import React from 'react';

const steps = [
  { icon: '📤', title: 'Upload License', desc: 'Provide your software license details.' },
  { icon: '💼', title: 'Get Valuation', desc: 'Receive a fair and fast market quote.' },
  { icon: '💸', title: 'Get Paid', desc: 'Transfer the license and receive payment instantly.' }
];

export default function HowItWorks() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 text-indigo-600">How It Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {steps.map((step, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
            <div className="text-5xl mb-4">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}