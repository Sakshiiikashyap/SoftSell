import { Upload, DollarSign, CheckCircle } from 'lucide-react'

const steps = [
  { icon: <Upload />, title: 'Upload License', desc: 'Submit your license details securely.' },
  { icon: <DollarSign />, title: 'Get Valuation', desc: 'We assess the worth within hours.' },
  { icon: <CheckCircle />, title: 'Get Paid', desc: 'Receive payment instantly via preferred method.' },
]

const HowItWorks = () => {
  return (
    <section className="py-16 px-6 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-10">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {steps.map((step, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow">
            <div className="text-blue-600 mb-4 flex justify-center">{step.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorks
