import { useState } from "react";
import { ChatArea } from "./ChatArea";
import { ProfileSidebar } from "./ProfileSidebar";
import { RewardsSidebar } from "./RewardsSidebar";
import { ChatMessage, UserProfile, Reward, Tip } from "./mockData";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu, Camera, Award } from "lucide-react";
import { ImageUpload } from "./ImageUpload";
import { Toaster } from "./ui/sonner";

interface MobileLayoutProps {
  user: UserProfile;
  messages: ChatMessage[];
  rewards: Reward[];
  tips: Tip[];
  onSendMessage: (content: string, image?: string) => void;
  isProcessing?: boolean;
  imagesAnalyzed: number;
}

export function MobileLayout({ user, messages, rewards, tips, onSendMessage, isProcessing, imagesAnalyzed }: MobileLayoutProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleSendWithImage = (content: string, image?: string) => {
    onSendMessage(content, image || selectedImage || undefined);
    setSelectedImage(null);
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col" style={{ backgroundColor: '#F6FBF7' }}>
        {/* Mobile Header */}
        <div className="bg-white border-b border-gray-200 p-4 shadow-sm flex items-center justify-between">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-80 p-0">
              <ProfileSidebar user={user} />
            </SheetContent>
          </Sheet>

          <h1 className="text-lg">ChatEduGame</h1>

          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="ghost">
                <Award className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <RewardsSidebar rewards={rewards} tips={tips} />
            </SheetContent>
          </Sheet>
        </div>

        {/* Image Upload Area */}
        <div className="p-4 bg-white border-b border-gray-200">
          <ImageUpload 
            onImageSelect={setSelectedImage}
            selectedImage={selectedImage}
          />
        </div>

        {/* Chat Area */}
        <div className="flex-1 min-h-0">
          <ChatArea 
            messages={messages} 
            onSendMessage={handleSendWithImage}
            showImageUpload={false}
            isProcessing={isProcessing}
          />
        </div>

        {/* Floating Camera Button */}
        <div className="fixed bottom-24 right-6 z-50">
          <Button
            size="icon"
            className="w-14 h-14 rounded-full shadow-lg"
            style={{ backgroundColor: '#2AA85A' }}
            onClick={() => {
              const input = document.querySelector('input[type="file"]') as HTMLInputElement;
              input?.click();
            }}
          >
            <Camera className="w-6 h-6" />
          </Button>
        </div>
      </div>
      <Toaster />
    </>
  );
}
