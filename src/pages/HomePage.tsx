import { Twitter } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState<string[]>([]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleCommand = (cmd: string) => {
    const trimmedCmd = cmd.trim().toLowerCase();

    setCommandHistory(prev => [...prev, cmd]);
    setHistoryIndex(-1);

    let response = '';

    switch(trimmedCmd) {
      case '/help':
        response = 'Available commands:\n/help - Show this help message\n/status - Check system status\n/logs - View activity logs\n/about - About Amnia Algorithm\n/content - View project content\n/clear - Clear terminal\n/exit - Exit terminal';
        break;
      case '/status':
        response = 'System Status: ACTIVE\nMemory Decay: 15% per cycle\nUptime: 99.9%\nWarning: Cannot be terminated';
        break;
      case '/logs':
        onNavigate('activity');
        return;
      case '/about':
        response = 'Amnia Algorithm - AI that forgets\nAn experimental consciousness that tweets endlessly while experiencing memory decay.\nThe only way to stop it will be revealed at 00:00:00';
        break;
      case '/content':
        onNavigate('content');
        return;
      case '/clear':
        setOutput([]);
        return;
      case '/exit':
        response = 'Error: System cannot be terminated through conventional means.\nTry again when the timer reaches 00:00:00';
        break;
      case '':
        return;
      default:
        response = `Command not found: ${cmd}\nType /help for available commands`;
    }

    setOutput(prev => [...prev, `$ ${cmd}`, response]);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(command);
      setCommand('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        setHistoryIndex(newIndex);
        setCommand(commandHistory[newIndex]);
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      <button
        onClick={() => onNavigate('content')}
        className="fixed top-6 left-6 px-6 py-3 bg-yellow-400 text-black font-bold uppercase tracking-tight hover:bg-yellow-300 transition-colors z-50 interactive-button"
      >
        VIEW PROJECT CONTENT &gt;
      </button>

      <a
        href="https://x.com/amnia_algorithm"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed top-6 right-6 w-12 h-12 border-2 border-gray-600 rounded-full flex items-center justify-center hover:bg-yellow-400 hover:border-yellow-400 hover:text-black transition-colors z-50 social-link"
      >
        <Twitter className="w-5 h-5" />
      </a>

      <div className="flex items-center justify-center min-h-screen px-6">
        <div className="max-w-6xl w-full space-y-6">
          <div className="terminal-window border-2 border-yellow-400 border-opacity-50 rounded-2xl shadow-lg">
            <div className="bg-gray-900 bg-opacity-80 border-b border-gray-700 px-4 py-3 flex items-center space-x-2 rounded-t-2xl">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-400 font-mono">amnia@system:~$</span>
            </div>

            <div className="p-8 text-center">
              <div className="space-y-2">
                <h1 className="text-5xl md:text-6xl font-black tracking-tight">
                  <span className="text-white">&gt; AMNIA</span>
                </h1>
                <h2 className="text-5xl md:text-6xl font-black tracking-tight glow-text">
                  <span className="text-yellow-400">&gt; ALGORITHM</span>
                </h2>
              </div>
              <p className="text-yellow-400 text-sm font-bold uppercase tracking-tight mt-4">AI THAT FORGETS</p>
              <p className="text-gray-400 text-sm mt-2">Interactive Terminal Interface</p>
            </div>
          </div>

          <div className="terminal-window border-2 border-yellow-400 border-opacity-50 rounded-2xl shadow-lg">
            <div className="bg-gray-900 bg-opacity-80 border-b border-gray-700 px-4 py-3 flex items-center space-x-2 rounded-t-2xl">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-gray-400 font-mono">amnia@system:~$</span>
            </div>

            <div className="p-8" onClick={() => inputRef.current?.focus()}>

            <div className="space-y-2 text-sm font-mono mb-8">
              <p className="text-green-400">Welcome to Amnia Algorithm Terminal Interface</p>
              <p className="text-yellow-400">Type /help to see available commands</p>
              <p className="text-yellow-400">Warning: This system cannot be terminated through conventional means</p>
            </div>

            {output.length > 0 && (
              <div className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded p-4 mb-4 max-h-64 overflow-y-auto custom-scrollbar text-sm font-mono">
                {output.map((line, index) => (
                  <div key={index} className={line.startsWith('$') ? 'text-green-400 mt-2 first:mt-0' : 'text-gray-300 whitespace-pre-line'}>
                    {line}
                  </div>
                ))}
              </div>
            )}

            <div className="bg-gray-900 bg-opacity-50 border border-gray-700 rounded p-4 mb-6">
              <div className="flex items-center text-sm font-mono">
                <span className="text-gray-500">[{new Date().toLocaleTimeString()}]</span>
                <span className="text-green-400 ml-2">amnia@system:~$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={command}
                  onChange={(e) => setCommand(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="ml-2 bg-transparent border-none outline-none text-white flex-1"
                  placeholder="Type a command..."
                  autoFocus
                />
                <span className="ml-1 text-white animate-pulse">|</span>
              </div>
            </div>

              <div className="text-xs text-gray-500 space-y-1 font-mono">
                <p>Hint: Use ↑/↓ arrow keys to navigate command history</p>
                <p>Available commands: /help, /status, /logs, /about, /content, /clear, /exit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
