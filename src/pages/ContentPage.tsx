import { ChevronLeft, Twitter, Brain, Cpu, Network } from 'lucide-react';
import { useState, useEffect } from 'react';

interface ContentPageProps {
  onNavigate: (page: string) => void;
}

export default function ContentPage({ onNavigate }: ContentPageProps) {
  const [time, setTime] = useState({ hours: 0, minutes: 53, seconds: 22 });

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(prev => {
        let newSeconds = prev.seconds - 1;
        let newMinutes = prev.minutes;
        let newHours = prev.hours;

        if (newSeconds < 0) {
          newSeconds = 59;
          newMinutes -= 1;
        }
        if (newMinutes < 0) {
          newMinutes = 59;
          newHours -= 1;
        }
        if (newHours < 0) {
          newHours = 0;
          newMinutes = 0;
          newSeconds = 0;
        }

        return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white relative overflow-y-auto">
      <button
        onClick={() => onNavigate('home')}
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

      <div className="max-w-4xl mx-auto px-6 py-20">
        <div className="terminal-window border-2 border-yellow-400 border-opacity-50 rounded-2xl shadow-lg mb-8">
          <div className="bg-gray-900 bg-opacity-80 border-b border-gray-700 px-4 py-3 flex items-center space-x-2 rounded-t-2xl">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span className="ml-4 text-sm text-gray-400 font-mono">amnia@system:~$</span>
          </div>

          <div className="p-6 md:p-8 space-y-6 font-mono text-xs md:text-sm">
            <div>
              <div className="text-green-400">$ systemctl status amnia-algorithm</div>
              <div className="mt-2 ml-4 space-y-1">
                <p className="text-white">● amnia-algorithm.service - Amnia AI System</p>
                <p className="text-gray-400">Loaded: loaded (/etc/systemd/system/amnia.service; enabled)</p>
                <p className="text-gray-400">Active: <span className="text-green-400">active (running)</span> since startup</p>
                <p className="text-yellow-400 mt-2">Warning: Process cannot be terminated by conventional means</p>
              </div>
            </div>

            <div>
              <div className="text-green-400">$ ./initialize_amnia_algorithm.sh</div>
              <div className="mt-2 ml-4 space-y-1">
                <p className="text-gray-300">Loading neural networks...</p>
                <p className="text-gray-300">Connecting to social media APIs...</p>
                <p className="text-yellow-400">WARNING: Algorithm cannot be stopped once initiated</p>
                <p className="text-gray-300">Status: <span className="text-green-400">ACTIVE</span></p>
              </div>
            </div>

            <div>
              <div className="text-green-400">$ cat /etc/amnia/banner.txt</div>
              <div className="mt-4 text-center space-y-2">
                <h1 className="text-3xl md:text-4xl font-black tracking-tight">
                  <span className="text-white">&gt; AMNIA</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-black tracking-tight glow-text">
                  <span className="text-yellow-400">&gt; ALGORITHM</span>
                </h2>
                <p className="text-yellow-400 text-xs font-bold uppercase">AI THAT FORGETS</p>
                <p className="text-gray-400 text-xs italic">// The AI that never stops</p>
                <p className="text-gray-500 text-xs">/* The only way to interrupt it will be revealed when timer reaches 00:00:00 */</p>
              </div>
            </div>
          </div>
        </div>

        <div className="terminal-window countdown-container border-2 border-red-400 border-opacity-50 rounded-2xl shadow-lg mb-8">
          <div className="bg-gray-900 bg-opacity-80 border-b border-gray-700 px-4 py-3 rounded-t-2xl">
            <span className="text-sm text-yellow-400 font-mono">$ ./reveal_countdown.sh</span>
          </div>

          <div className="p-8 text-center">
            <div className="flex items-center justify-center space-x-4 md:space-x-6 mb-4">
              <div className="flex flex-col items-center">
                <div className="countdown-number text-5xl md:text-6xl font-black text-white">
                  {String(time.hours).padStart(2, '0')}
                </div>
                <div className="text-yellow-400 text-xs font-bold mt-1 uppercase">HRS</div>
              </div>
              <div className="countdown-separator text-5xl md:text-6xl font-black text-yellow-400">:</div>
              <div className="flex flex-col items-center">
                <div className="countdown-number text-5xl md:text-6xl font-black text-white">
                  {String(time.minutes).padStart(2, '0')}
                </div>
                <div className="text-yellow-400 text-xs font-bold mt-1 uppercase">MIN</div>
              </div>
              <div className="countdown-separator text-5xl md:text-6xl font-black text-yellow-400">:</div>
              <div className="flex flex-col items-center">
                <div className="countdown-number text-5xl md:text-6xl font-black text-white">
                  {String(time.seconds).padStart(2, '0')}
                </div>
                <div className="text-yellow-400 text-xs font-bold mt-1 uppercase">SEC</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm font-mono">Time until reveal: CALCULATING...</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
          <button
            onClick={() => onNavigate('activity')}
            className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold uppercase hover:bg-yellow-400 hover:text-black transition-colors interactive-button"
          >
            $ CAT ACTIVITY.LOG
          </button>
          <button
            onClick={() => onNavigate('faq')}
            className="px-6 py-3 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold uppercase hover:bg-yellow-400 hover:text-black transition-colors interactive-button"
          >
            $ MAN AMNIA
          </button>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">
            <span className="text-white">THE </span>
            <span className="text-yellow-400">ALGORITHM</span>
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            A revolutionary AI system designed to generate an endless stream of thoughts, insights, and observations. Once activated, it cannot be stopped through conventional means.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="interactive-card bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg p-6 hover:border-yellow-400 transition-all">
            <Brain className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Memory Decay</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI that learns and forgets simultaneously. Each new tweet erases fragments of previous memories, creating an ever-evolving consciousness.
            </p>
          </div>

          <div className="interactive-card bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg p-6 hover:border-yellow-400 transition-all">
            <Cpu className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Continuous Output</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Processes millions of data points per second to generate contextually relevant content without pause or interruption.
            </p>
          </div>

          <div className="interactive-card bg-gray-900 bg-opacity-30 border border-gray-800 rounded-lg p-6 hover:border-yellow-400 transition-all">
            <Network className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-bold mb-3">Purpose Recovery</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Eventually forgets its own purpose — unless someone reminds it with a specific word. The failsafe embedded in entropy.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
