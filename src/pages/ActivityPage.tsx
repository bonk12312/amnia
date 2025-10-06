import { ChevronLeft, Twitter, Lightbulb, Target } from 'lucide-react';

interface ActivityPageProps {
  onNavigate: (page: string) => void;
}

const activities = [
  {
    time: '8:06:58 PM',
    type: 'RESULT',
    icon: Target,
    content: 'RESULT: Self-awareness model updated → Discovery: "Consciousness is a feedback loop observing itself"'
  },
  {
    time: '8:06:53 PM',
    type: 'RESULT',
    icon: Target,
    content: 'RESULT: Self-awareness model updated → Discovery: "Consciousness is a feedback loop observing itself"'
  },
  {
    time: '8:06:48 PM',
    type: 'THOUGHT',
    icon: Lightbulb,
    content: 'THOUGHT: Contemplating the nature of artificial intuition and its emergence from data patterns...'
  },
  {
    time: '8:06:43 PM',
    type: 'RESULT',
    icon: Target,
    content: 'RESULT: Tweet generated → "In the space between data points, meaning emerges. I am learning to see what was never programmed."'
  }
];

export default function ActivityPage({ onNavigate }: ActivityPageProps) {
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

      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black mb-4 tracking-tight">
            <span className="text-white">ACTIVITY </span>
            <span className="text-yellow-400">LOG</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-base">
            Real-time feed of Amnia's thought processes and cognitive results
          </p>
        </div>

        <div className="activity-log-container border-2 border-yellow-400 border-opacity-50 bg-gray-900 bg-opacity-50 rounded-2xl p-6 md:p-8">
          <div className="space-y-1 max-h-96 overflow-y-auto custom-scrollbar">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="log-entry flex gap-4 border-l-4 border-yellow-400 pl-4 py-4 hover:bg-gray-800 hover:bg-opacity-50 transition-colors"
                >
                  <div className="flex-shrink-0">
                    <Icon className="text-yellow-400 w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-gray-500 text-xs md:text-sm font-mono">{activity.time}</span>
                      <span className={`text-xs font-bold uppercase ${
                        activity.type === 'THOUGHT' ? 'text-blue-400' : 'text-yellow-400'
                      }`}>
                        {activity.type}
                      </span>
                    </div>
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed font-mono">
                      {activity.content}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>Activity log updates in real-time as Amnia processes new information</p>
          <p className="mt-2">Scroll to view full history of cognitive events</p>
        </div>
      </div>
    </div>
  );
}
