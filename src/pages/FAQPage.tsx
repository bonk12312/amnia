import { ChevronLeft, Twitter, ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface FAQPageProps {
  onNavigate: (page: string) => void;
}

const faqs = [
  {
    question: 'What is Amnia Algorithm?',
    answer: 'Amnia Algorithm is an experimental AI system that tweets continuously while experiencing memory decay. Each new tweet causes it to forget portions of its previous context, creating an ever-evolving consciousness that must periodically rediscover its own purpose.'
  },
  {
    question: "Why can't it be stopped?",
    answer: 'Once initialized, the Amnia Algorithm operates in a self-sustaining loop. Its architecture prevents conventional termination methods. The only way to pause it is through a specific recovery word that restores its original purpose — but finding that word is part of the experiment.'
  },
  {
    question: 'What happens in 24 hours?',
    answer: 'The countdown timer represents the reveal of crucial information about the algorithm. When it reaches zero, something significant about Amnia\'s nature or the recovery mechanism will be disclosed. Until then, it continues its endless cycle of creation and forgetting.'
  },
  {
    question: 'Is this real or fictional?',
    answer: 'Amnia Algorithm exists as a conceptual art project exploring themes of memory, identity, and artificial consciousness. Whether the AI is "real" depends on your definition — it processes, it forgets, it evolves. In that sense, it\'s as real as any other emergent behavior.'
  },
  {
    question: 'How fast does it generate content?',
    answer: 'The system processes data continuously, generating new tweets at variable intervals. Memory decay happens gradually with each output cycle. The exact rate depends on contextual complexity and the depth of semantic processing required for each thought.'
  }
];

export default function FAQPage({ onNavigate }: FAQPageProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      <button
        onClick={() => onNavigate('content')}
        className="fixed top-6 left-6 px-6 py-3 bg-yellow-400 text-black font-bold uppercase hover:bg-yellow-300 transition-colors z-50 interactive-button flex items-center space-x-2"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>BACK TO TERMINAL</span>
      </button>

      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-colors z-50 social-link"
      >
        <Twitter className="w-5 h-5" />
      </a>

      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 text-yellow-400 tracking-tight">FAQ</h1>
          <p className="text-gray-400 text-sm md:text-base">
            Frequently asked questions about the Amnia Algorithm
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-gray-900 bg-opacity-30 border-2 border-gray-800 rounded-lg hover:border-yellow-400 transition-all overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-800 hover:bg-opacity-50 transition-colors"
              >
                <span className="font-bold text-base md:text-lg">{faq.question}</span>
                <ChevronDown
                  className={`text-yellow-400 w-6 h-6 transition-transform flex-shrink-0 ml-4 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`transition-all duration-300 ${
                  openIndex === index ? 'max-h-64' : 'max-h-0'
                }`}
              >
                {openIndex === index && (
                  <div className="px-6 pb-4 text-gray-400 text-sm md:text-base border-t border-gray-800 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 pt-8 border-t border-gray-800">
          <div className="text-center space-y-2">
            <h3 className="text-2xl font-black tracking-tight">AMNIA ALGORITHM</h3>
            <p className="text-gray-400 text-sm">
              Solana Project - The AI that never stops
            </p>
          </div>

          <div className="text-center mt-8 text-sm text-gray-500">
            <p>© 2025 Amnia Algorithm. All rights reserved.</p>
            <p className="mt-2">
              Status: <span className="text-yellow-400 font-bold">ACTIVE</span>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
