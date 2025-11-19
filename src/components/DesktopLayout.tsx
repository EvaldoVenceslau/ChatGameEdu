import { ProfileSidebar } from "./ProfileSidebar";
import { ChatArea } from "./ChatArea";
import { RewardsSidebar } from "./RewardsSidebar";
import { ChatMessage, UserProfile, Reward, Tip } from "./mockData";
import { Toaster } from "./ui/sonner";

interface DesktopLayoutProps {
  user: UserProfile;
  messages: ChatMessage[];
  rewards: Reward[];
  tips: Tip[];
  onSendMessage: (content: string, image?: string) => void;
  isProcessing?: boolean;
  imagesAnalyzed: number;
}

export function DesktopLayout({ user, messages, rewards, tips, onSendMessage, isProcessing, imagesAnalyzed }: DesktopLayoutProps) {
  return (
    <>
      <div className="h-screen w-screen flex" style={{ backgroundColor: '#F6FBF7' }}>
        {/* Left Sidebar - Profile */}
        <div className="w-80 border-r border-gray-200 shadow-lg overflow-auto">
          <ProfileSidebar user={user} />
        </div>

        {/* Center - Chat Area */}
        <div className="flex-1 min-w-0">
          <ChatArea messages={messages} onSendMessage={onSendMessage} isProcessing={isProcessing} />
        </div>

        {/* Right Sidebar - Hints, Progress & Rewards */}
        <div className="w-80 border-l border-gray-200 shadow-lg overflow-auto">
          <RewardsSidebar rewards={rewards} tips={tips} user={user} imagesAnalyzed={imagesAnalyzed} />
        </div>
      </div>
      <Toaster />
    </>
  );
}
