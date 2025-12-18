import React, { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send } from "lucide-react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm Aung Min Ko's assistant. How can I help you today?",
      isBot: true,
    },
  ]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const faq = [
    {
      q: "What is your tech stack?",
      a: "I specialize in PHP/Laravel, Node.js/Express/Adonis.js and still learning React.",
    },
    {
      q: "Are you available for hire?",
      a: "Yes! I'm currently looking for Junior Web Developer roles.",
    },
    {
      q: "How can I contact you?",
      a: "You can reach me via the Contact section or email at aungminko.dev@gmail.com",
    },
    {
      q: "Where are you based?",
      a: "I'm currently based in Yangon, Myanmar and open to remote or on-site work.",
    },
    {
      q: "Can I see your CV?",
      a: "Sure! You can download my latest resume right here: 👇",
      isDownload: true,
    },
  ];

  const handleQuestionClick = (question, answer, isDownload = false) => {
    setMessages((prev) => [...prev, { text: question, isBot: false }]);

    setTimeout(() => {
      const botMsg = {
        text: answer,
        isBot: true,
        link: isDownload ? "/Aung_Min_Ko_CV.pdf" : null,
      };
      setMessages((prev) => [...prev, botMsg]);
    }, 600);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-sky-500 hover:bg-sky-600 text-white p-4 rounded-full shadow-2xl transition-all transform hover:scale-110"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300">
          {/* Header */}
          <div className="bg-sky-500 p-4 text-white font-bold flex justify-between items-center">
            <span>Portfolio Assistant</span>
          </div>

          {/* Messages Area */}
          <div className="h-96 overflow-y-auto p-4 space-y-4 bg-slate-950">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.isBot ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                    msg.isBot
                      ? "bg-slate-800 text-white"
                      : "bg-sky-500 text-white"
                  }`}
                >
                  {msg.text}
                  {msg.link && (
                    <a
                      href={msg.link}
                      download
                      className="block mt-2 bg-emerald-500 hover:bg-emerald-600 text-white text-center py-2 px-4 rounded-lg font-bold transition-colors"
                    >
                      📄 Download My CV
                    </a>
                  )}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Questions */}
          <div className="p-3 bg-slate-900 border-t border-slate-800">
            <p className="text-xs text-slate-500 mb-2">Suggested Questions:</p>
            <div className="flex flex-wrap gap-2">
              {faq.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    handleQuestionClick(item.q, item.a, item.isDownload)
                  }
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-sky-400 px-3 py-1 rounded-full border border-sky-900/30 transition-colors"
                >
                  {item.q}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
