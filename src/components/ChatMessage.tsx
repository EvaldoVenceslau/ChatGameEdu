import { ChatMessage as ChatMessageType } from "./mockData";
import { Avatar, AvatarFallback } from "./ui/avatar";
import { Bot, User } from "lucide-react";

interface ChatMessageProps {
  message: ChatMessageType;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isAI = message.type === 'ai';
  
  return (
    <div className={`flex gap-3 ${isAI ? 'justify-start' : 'justify-end'}`}>
      {isAI && (
        <Avatar className="w-8 h-8 flex-shrink-0" style={{ backgroundColor: '#2AA85A' }}>
          <AvatarFallback style={{ backgroundColor: '#2AA85A' }} className="text-white">
            <Bot className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
      
      <div className={`max-w-[70%] space-y-2 ${!isAI && 'flex flex-col items-end'}`}>
        {message.image && (
          <img 
            src={message.image} 
            alt="Uploaded content" 
            className="rounded-xl max-h-48 object-cover shadow-md"
          />
        )}
        <div
          className={`rounded-2xl px-4 py-3 shadow-sm ${
            isAI 
              ? 'bg-white border border-gray-200' 
              : 'text-white'
          }`}
          style={!isAI ? { backgroundColor: '#2AA85A' } : {}}
        >
          <p className="text-sm whitespace-pre-line">{message.content}</p>
        </div>
        <span className="text-xs text-gray-400 px-2">
          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>
      
      {!isAI && (
        <Avatar className="w-8 h-8 bg-gray-700 flex-shrink-0">
          <AvatarFallback className="bg-gray-700 text-white">
            <User className="w-4 h-4" />
          </AvatarFallback>
        </Avatar>
      )}
    </div>
  );
}
