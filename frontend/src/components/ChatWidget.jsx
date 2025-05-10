import React from 'react';

export default function ChatWidget() {
  return (
    <div className="fixed bottom-5 right-5">
      <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition">
        💬 Chat
      </button>
    </div>
  );
}

import { useState } from 'react';

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([{ from: 'ai', text: 'Hi! How can I help you?' }]);
  const [input, setInput] = useState('');

  const askBot = (q) => {
    const botReply = q.toLowerCase().includes('license')
      ? 'To sell, just upload your license and we’ll get you a quote!'
      : 'Try asking about selling or support!';
    setMessages([...messages, { from: 'user', text: q }, { from: 'ai', text: botReply }]);
    setInput('');
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <button onClick={() => setOpen(!open)} className="bg-indigo-600 text-white p-3 rounded-full">
        💬
      </button>
      {open && (
        <div className="w-72 bg-white shadow-lg rounded-lg p-4 mt-2 max-h-96 overflow-y-auto space-y-2">
          {messages.map((m, i) => (
            <div key={i} className={`text-sm ${m.from === 'ai' ? 'text-left' : 'text-right'}`}>
              <span className={`${m.from === 'ai' ? 'bg-gray-200' : 'bg-indigo-100'} p-2 rounded`}>
                {m.text}
              </span>
            </div>
          ))}
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && askBot(input)}
            placeholder="Ask something..."
            className="w-full p-2 border rounded mt-2"
          />
        </div>
      )}
    </div>
  );
}
