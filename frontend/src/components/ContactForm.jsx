import { useState } from 'react'

const ContactForm = () => {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' })
  const [errors, setErrors] = useState({})

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const validate = () => {
    const errs = {}
    if (!form.name) errs.name = 'Name is required'
    if (!form.email || !/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Valid email required'
    if (!form.company) errs.company = 'Company is required'
    if (!form.license) errs.license = 'Please select a license type'
    if (!form.message) errs.message = 'Message is required'
    return errs
  }

  const handleSubmit = e => {
    e.preventDefault()
    const validationErrors = validate()
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
    } else {
      setErrors({})
      alert('Form submitted!')
    }
  }

  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold mb-10 text-center">Contact Us</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto grid gap-4">
        <input name="name" placeholder="Name" className="border p-3 rounded" value={form.name} onChange={handleChange} />
        {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

        <input name="email" placeholder="Email" className="border p-3 rounded" value={form.email} onChange={handleChange} />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

        <input name="company" placeholder="Company" className="border p-3 rounded" value={form.company} onChange={handleChange} />
        {errors.company && <span className="text-red-500 text-sm">{errors.company}</span>}

        <select name="license" className="border p-3 rounded" value={form.license} onChange={handleChange}>
          <option value="">Select License Type</option>
          <option value="Windows">Windows</option>
          <option value="Office 365">Office 365</option>
          <option value="Adobe">Adobe</option>
          <option value="Other">Other</option>
        </select>
        {errors.license && <span className="text-red-500 text-sm">{errors.license}</span>}

        <textarea name="message" placeholder="Message" className="border p-3 rounded" value={form.message} onChange={handleChange} />
        {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}

        <button type="submit" className="bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700">Submit</button>
      </form>
    </section>
  )
}

export default ContactForm

