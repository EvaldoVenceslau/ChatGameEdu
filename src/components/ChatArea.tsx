import { useState, useRef, useEffect } from "react";
import { ScrollArea } from "./ui/scroll-area";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { ChatMessage as ChatMessageComponent } from "./ChatMessage";
import { ImageUpload } from "./ImageUpload";
import { LoadingIndicator } from "./LoadingIndicator";
import { ChatMessage } from "./mockData";
import { Send, Image as ImageIcon, Sparkles } from "lucide-react";

interface ChatAreaProps {
  messages: ChatMessage[];
  onSendMessage: (content: string, image?: string) => void;
  showImageUpload?: boolean;
  isProcessing?: boolean;
}

export function ChatArea({ messages, onSendMessage, showImageUpload = true, isProcessing = false }: ChatAreaProps) {
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showUploadArea, setShowUploadArea] = useState(false);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
    }
  }, [messages, isProcessing]);

  const handleSend = () => {
    if (input.trim() || selectedImage) {
      onSendMessage(input, selectedImage || undefined);
      setInput("");
      setSelectedImage(null);
      setShowUploadArea(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: '#2AA85A' }}>
            <span className="text-white">🤖</span>
          </div>
          <div>
            <h3 className="text-lg">Tutor IA</h3>
            <p className="text-xs text-gray-500">Sempre aqui para te ajudar a aprender</p>
          </div>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-4xl mx-auto" ref={scrollContainerRef}>
          {messages.map((message) => (
            <ChatMessageComponent key={message.id} message={message} />
          ))}
          {isProcessing && (
            <div className="flex gap-3 justify-start">
              <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#2AA85A' }}>
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                <LoadingIndicator />
              </div>
            </div>
          )}
        </div>
      </ScrollArea>

      <div className="bg-white border-t border-gray-200 p-4 space-y-3 shadow-sm">
        {showImageUpload && showUploadArea && (
          <ImageUpload 
            onImageSelect={setSelectedImage}
            selectedImage={selectedImage}
          />
        )}
        
        <div className="flex gap-2 max-w-4xl mx-auto">
          {showImageUpload && (
            <Button
              size="icon"
              variant="outline"
              className="flex-shrink-0"
              onClick={() => setShowUploadArea(!showUploadArea)}
            >
              <ImageIcon className="w-5 h-5" />
            </Button>
          )}
          <Input
            placeholder="Me pergunte qualquer coisa..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            className="flex-1 rounded-full bg-gray-100 border-gray-200"
          />
          <Button 
            size="icon"
            className="flex-shrink-0 rounded-full"
            style={{ backgroundColor: '#2AA85A' }}
            onClick={handleSend}
          >
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </div>
  );
}
