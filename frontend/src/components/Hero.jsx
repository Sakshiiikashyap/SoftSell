import React from 'react';

export default function Hero() {
  return (
    <section className="bg-indigo-600 text-white py-24 text-center shadow-lg rounded-b-3xl">
      <h1 className="text-5xl font-extrabold mb-4">Turn Unused Licenses into Profit</h1>
      <p className="text-xl mb-6">SoftSell lets you securely and quickly sell your software licenses.</p>
      <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">Sell My Licenses</button>
    </section>
  );
}