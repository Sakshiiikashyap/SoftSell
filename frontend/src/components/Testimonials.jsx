import React from 'react';

const testimonials = [
  { quote: 'SoftSell helped us sell unused licenses with ease. Very professional team!', name: 'Alice Johnson', role: 'CTO', company: 'Techify' },
  { quote: 'Excellent service and super fast payment. Highly recommend.', name: 'Mark Lee', role: 'Operations Head', company: 'ByteWorks' }
];

export default function Testimonials() {
  return (
    <section className="bg-indigo-50 py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Customer Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {testimonials.map((t, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <p className="mb-4 italic">"{t.quote}"</p>
            <p className="font-semibold">{t.name}, {t.role} - {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
