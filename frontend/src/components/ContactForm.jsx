import React, { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (Object.values(form).some(v => !v)) {
      alert('Please fill in all fields');
    } else {
      alert('Message sent!');
    }
  };

  return (
    <section className="py-20 px-6">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow space-y-4">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Name" required className="w-full border p-3 rounded" />
        <input name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full border p-3 rounded" />
        <input name="company" value={form.company} onChange={handleChange} placeholder="Company" required className="w-full border p-3 rounded" />
        <select name="license" value={form.license} onChange={handleChange} required className="w-full border p-3 rounded">
          <option value="">Select License Type</option>
          <option>Microsoft Office</option>
          <option>Adobe Suite</option>
          <option>Antivirus</option>
          <option>Other</option>
        </select>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Your Message" rows="4" className="w-full border p-3 rounded" required></textarea>
        <button type="submit" className="w-full bg-indigo-600 text-white font-semibold py-3 rounded hover:bg-indigo-700">Submit</button>
      </form>
    </section>
  );
}
