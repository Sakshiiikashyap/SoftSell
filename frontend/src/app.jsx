import React from 'react';

function App() {
  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
      {/* Hero Section */}
      <section className="bg-indigo-600 text-white py-24 text-center shadow-lg rounded-b-3xl">
        <h1 className="text-5xl font-extrabold mb-4">Turn Unused Licenses into Profit</h1>
        <p className="text-xl mb-6">SoftSell lets you securely and quickly sell your software licenses.</p>
        <button className="bg-white text-indigo-600 font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-gray-200 transition">
          Sell My Licenses
        </button>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-10 text-indigo-600">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            { icon: "📤", title: "Upload License", desc: "Provide your software license details." },
            { icon: "💼", title: "Get Valuation", desc: "Receive a fair and fast market quote." },
            { icon: "💸", title: "Get Paid", desc: "Transfer the license and receive payment instantly." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Why Choose SoftSell?</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: "🔐", title: "Trusted & Secure", desc: "Top-grade encryption and verified transactions." },
            { icon: "⚡", title: "Fast Turnaround", desc: "Speedy process from quote to payout." },
            { icon: "💰", title: "Best Prices", desc: "Get the highest value for your licenses." },
            { icon: "🙋‍♂️", title: "Support Anytime", desc: "We’re here 24/7 to help you." }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <div className="text-4xl mb-2">{item.icon}</div>
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-indigo-50 py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Customer Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="mb-4 italic">
              "SoftSell helped us sell unused licenses with ease. Very professional team!"
            </p>
            <p className="font-semibold">Alice Johnson, CTO - Techify</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <p className="mb-4 italic">
              "Excellent service and super fast payment. Highly recommend."
            </p>
            <p className="font-semibold">Mark Lee, Operations Head - ByteWorks</p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 px-6">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Contact Us</h2>
        <form className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow space-y-4">
          <input type="text" placeholder="Name" required className="w-full border p-3 rounded" />
          <input type="email" placeholder="Email" required className="w-full border p-3 rounded" />
          <input type="text" placeholder="Company" required className="w-full border p-3 rounded" />
          <select required className="w-full border p-3 rounded">
            <option value="">Select License Type</option>
            <option>Microsoft Office</option>
            <option>Adobe Suite</option>
            <option>Antivirus</option>
            <option>Other</option>
          </select>
          <textarea placeholder="Your Message" rows="4" className="w-full border p-3 rounded" required></textarea>
          <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded hover:bg-indigo-700">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;



