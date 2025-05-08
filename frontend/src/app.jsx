import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import ChatWidget from './components/ChatWidget';

export default function App() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <ChatWidget />
    </main>
  );
}

const [dark, setDark] = useState(false);
<main className={dark ? 'dark' : ''}>
  <button onClick={() => setDark(!dark)} className="fixed top-5 right-5 z-50">
    {dark ? '🌞' : '🌙'}
  </button>
  <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    ...
  </div>
</main>
