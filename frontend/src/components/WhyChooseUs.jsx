import React from 'react';

const benefits = [
  { icon: '🔐', title: 'Trusted & Secure', desc: 'Top-grade encryption and verified transactions.' },
  { icon: '⚡', title: 'Fast Turnaround', desc: 'Speedy process from quote to payout.' },
  { icon: '💰', title: 'Best Prices', desc: 'Get the highest value for your licenses.' },
  { icon: '🙋‍♂️', title: 'Support Anytime', desc: 'We’re here 24/7 to help you.' }
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Why Choose SoftSell?</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {benefits.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <div className="text-4xl mb-2">{item.icon}</div>
            <h4 className="font-bold mb-1">{item.title}</h4>
            <p className="text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}