"use client";

import { useState } from "react";

export default function FAQSection() {
  const faqs = [
    {
      question: "How long does it take to set up?",
      answer: "Less than 48 hours. We handle everything from configuring the AI with your business knowledge to setting up the call forwarding and testing the SMS routing.",
    },
    {
      question: "Will it sound like a generic robot?",
      answer: "No. The AI uses advanced, conversational voice models. It speaks naturally, pauses appropriately, and can handle complex, multi-turn conversations without frustrating your callers.",
    },
    {
      question: "How do I get notified about a lead?",
      answer: "The moment a call ends, the AI instantly sends you a text message and an email with a summary of the call, including their name, phone number, and exactly what they need.",
    },
    {
      question: "Do I have to change my phone number?",
      answer: "No. You keep your existing business number. We provide you with a dedicated AI line, and you simply set up 'Conditional Call Forwarding' (when busy or unanswered) to route missed calls to the AI.",
    },
    {
      question: "What if the caller asks a question the AI doesn't know?",
      answer: "The AI is programmed to handle uncertainty gracefully. If it doesn't know the answer, it will politely inform the caller that it doesn't have that specific information, take down their details, and assure them a human will follow up shortly.",
    },
  ];

  return (
    <section className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-24">
      <div className="text-center mb-16">
        <h2 className="text-white text-3xl md:text-5xl font-black leading-tight">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <FAQItem key={index} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-slate-800 bg-slate-900 rounded-xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <span className="text-white font-bold sm:text-lg">{question}</span>
        <span className={`text-red-500 transform transition-transform duration-300 ml-4 flex-shrink-0 ${isOpen ? "rotate-45" : ""}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      
      <div 
        className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-48 pb-6 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-slate-400 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  );
}
