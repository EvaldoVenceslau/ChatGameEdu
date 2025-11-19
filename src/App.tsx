import { useState, useEffect } from "react";
import { DesktopLayout } from "./components/DesktopLayout";
import { MobileLayout } from "./components/MobileLayout";
import { mockUser, mockMessages, mockRewards, mockTips, ChatMessage, UserProfile, Reward } from "./components/mockData";
import { analyzeImage, generateEducationalResponse, calculateXP, checkAchievements, ImageAnalysis } from "./components/aiService";
import { toast } from "sonner@2.0.3";

export default function App() {
  const [messages, setMessages] = useState<ChatMessage[]>(mockMessages);
  const [isMobile, setIsMobile] = useState(false);
  const [user, setUser] = useState<UserProfile>(mockUser);
  const [rewards, setRewards] = useState<Reward[]>(mockRewards);
  const [imageContext, setImageContext] = useState<ImageAnalysis | null>(null);
  const [conversationHistory, setConversationHistory] = useState<string[]>([]);
  const [isProcessing, setIsProcessing] = useState(false);
  const [stats, setStats] = useState({
    totalQuestions: mockUser.totalQuestions,
    imagesUploaded: 0,
    streak: mockUser.streak,
    level: mockUser.level
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const addXP = (amount: number) => {
    setUser(prev => {
      const newXP = prev.xp + amount;
      const newLevel = Math.floor(newXP / 1000) + 1;
      const leveledUp = newLevel > prev.level;
      
      if (leveledUp) {
        toast.success(`🎉 Parabéns! Você subiu para o nível ${newLevel}!`);
      }
      
      return {
        ...prev,
        xp: newXP % 1000,
        level: newLevel,
        totalQuestions: prev.totalQuestions + 1
      };
    });
  };

  const unlockAchievement = (achievementTitle: string) => {
    setRewards(prev => 
      prev.map(reward => 
        reward.title === achievementTitle && !reward.unlocked
          ? { ...reward, unlocked: true }
          : reward
      )
    );
    
    const achievement = rewards.find(r => r.title === achievementTitle);
    if (achievement && !achievement.unlocked) {
      toast.success(`🏆 Nova conquista desbloqueada: ${achievementTitle}!`, {
        description: achievement.description
      });
    }
  };

  const handleSendMessage = (content: string, image?: string) => {
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      type: 'user',
      content,
      image,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);

    // Update conversation history
    setConversationHistory(prev => [...prev, content]);

    // Process message type for XP calculation
    let messageType: 'question' | 'image' | 'followup' = 'question';
    
    if (image) {
      messageType = 'image';
      setStats(prev => ({ ...prev, imagesUploaded: prev.imagesUploaded + 1 }));
    } else if (conversationHistory.length > 0 && imageContext) {
      messageType = 'followup';
    }

    // Calculate and add XP
    const xpGained = calculateXP(messageType);
    addXP(xpGained);

    // Show XP notification
    toast.success(`+${xpGained} XP`, {
      description: messageType === 'image' ? 'Imagem enviada!' : messageType === 'followup' ? 'Pergunta de acompanhamento!' : 'Pergunta feita!'
    });

    // Simulate AI processing with typing indicator
    setIsProcessing(true);
    
    setTimeout(() => {
      let aiResponse = "";
      let newImageContext: ImageAnalysis | null = null;

      // Computer Vision: Analyze image if present
      if (image) {
        newImageContext = analyzeImage(image);
        setImageContext(newImageContext);
        
        aiResponse = `🔍 **Análise da Imagem Concluída!**\n\n${newImageContext.explanation}\n\n**Perguntas sugeridas:**\n${newImageContext.suggestedQuestions.map((q, i) => `${i + 1}. ${q}`).join('\n')}\n\nFique à vontade para perguntar qualquer coisa sobre o que identifiquei!`;
      } 
      // NLP: Generate response based on question and context
      else {
        aiResponse = generateEducationalResponse(content, imageContext || undefined);
      }

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        type: 'ai',
        content: aiResponse,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, aiMessage]);
      setIsProcessing(false);

      // Check for new achievements
      const newStats = {
        totalQuestions: stats.totalQuestions + 1,
        imagesUploaded: stats.imagesUploaded + (image ? 1 : 0),
        streak: stats.streak,
        level: user.level
      };
      
      setStats(newStats);
      
      const newAchievements = checkAchievements(newStats);
      newAchievements.forEach(achievement => {
        setTimeout(() => unlockAchievement(achievement), 500);
      });
      
    }, 1200); // Simulate processing time
  };

  return isMobile ? (
    <MobileLayout
      user={user}
      messages={messages}
      rewards={rewards}
      tips={mockTips}
      onSendMessage={handleSendMessage}
      isProcessing={isProcessing}
      imagesAnalyzed={stats.imagesUploaded}
    />
  ) : (
    <DesktopLayout
      user={user}
      messages={messages}
      rewards={rewards}
      tips={mockTips}
      onSendMessage={handleSendMessage}
      isProcessing={isProcessing}
      imagesAnalyzed={stats.imagesUploaded}
    />
  );
}
