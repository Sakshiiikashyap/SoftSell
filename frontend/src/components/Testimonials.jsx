const testimonials = [
  { name: 'Jane Doe', role: 'IT Manager', company: 'TechBridge Inc.', quote: 'SoftSell helped us quickly monetize unused software — super smooth experience!' },
  { name: 'John Smith', role: 'Operations Lead', company: 'CloudNova', quote: 'Fast, reliable, and excellent customer support. Highly recommended!' },
]

const Testimonials = () => {
  return (
    <section className="py-16 px-6 bg-blue-50 text-center">
      <h2 className="text-3xl font-bold mb-10">Customer Testimonials</h2>
      <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white p-6 rounded-xl shadow">
            <p className="italic mb-4">“{t.quote}”</p>
            <p className="font-semibold">{t.name}</p>
            <p className="text-sm text-gray-500">{t.role}, {t.company}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Testimonials
