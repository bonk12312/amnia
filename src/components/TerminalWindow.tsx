import { ReactNode } from 'react';

interface TerminalWindowProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export default function TerminalWindow({ title, children, className = '' }: TerminalWindowProps) {
  return (
    <div className={`border-2 border-yellow-500 bg-black ${className}`}>
      <div className="flex items-center gap-2 px-4 py-2 border-b border-yellow-500">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-gray-400 text-sm ml-2">{title}</span>
      </div>
      <div className="p-6">
        {children}
      </div>
    </div>
  );
}
