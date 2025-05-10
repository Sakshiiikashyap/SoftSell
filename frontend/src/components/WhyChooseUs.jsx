import { ShieldCheck, Clock, Smile, DollarSign } from 'lucide-react'

const features = [
  { icon: <ShieldCheck />, title: 'Secure Transactions', desc: 'Your data and deals are fully protected.' },
  { icon: <Clock />, title: 'Quick Processing', desc: 'Get your payment processed in under 24 hours.' },
  { icon: <Smile />, title: 'Trusted by Users', desc: 'Rated 4.9/5 by thousands of happy sellers.' },
  { icon: <DollarSign />, title: 'Best Value', desc: 'We offer the highest returns for your software licenses.' },
]

const WhyChooseUs = () => {
  return (
    <section className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((item, idx) => (
          <div key={idx} className="bg-gray-100 p-6 rounded-xl shadow">
            <div className="text-blue-600 mb-4 flex justify-center">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChooseUs