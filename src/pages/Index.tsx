
import { ChatInterface } from '@/components/ChatInterface';
import { FloatingElements } from '@/components/FloatingElements';

export default function Index() {
  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      <FloatingElements />
      <div className="relative z-10 w-full">
        <ChatInterface />
      </div>
    </div>
  );
}