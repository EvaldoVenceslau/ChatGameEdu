import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ScrollArea } from "./ui/scroll-area";
import { ProgressTracker } from "./ProgressTracker";
import { Reward, Tip, UserProfile } from "./mockData";
import { Lock, Lightbulb } from "lucide-react";

interface RewardsSidebarProps {
  rewards: Reward[];
  tips: Tip[];
  user: UserProfile;
  imagesAnalyzed: number;
}

export function RewardsSidebar({ rewards, tips, user, imagesAnalyzed }: RewardsSidebarProps) {
  return (
    <div className="w-full h-full bg-white p-6">
      <ScrollArea className="h-full">
        <div className="space-y-6">
          <div>
            <h3 className="mb-4 flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-amber-500" />
              Dicas
            </h3>
            <div className="space-y-3">
              {tips.slice(0, 2).map((tip) => (
                <Card key={tip.id} className="p-4 shadow-sm bg-amber-50 border-amber-200">
                  <h4 className="text-sm mb-2">{tip.title}</h4>
                  <p className="text-xs text-gray-700">{tip.content}</p>
                </Card>
              ))}
            </div>
          </div>

          <ProgressTracker 
            level={user.level}
            xp={user.xp}
            maxXp={user.maxXp}
            questionsAnswered={user.totalQuestions}
            imagesAnalyzed={imagesAnalyzed}
            daysActive={user.streak}
          />
          <div>
            <h3 className="mb-4">🏆 Conquistas</h3>
            <div className="space-y-3">
              {rewards.map((reward) => (
                <Card
                  key={reward.id}
                  className={`p-4 shadow-sm ${
                    reward.unlocked 
                      ? 'bg-white' 
                      : 'bg-gray-50 border-gray-200 opacity-60'
                  }`}
                  style={reward.unlocked ? { borderColor: '#2AA85A' } : {}}
                >
                  <div className="flex items-start gap-3">
                    <div className={`text-2xl ${!reward.unlocked && 'grayscale'}`}>
                      {reward.unlocked ? reward.icon : <Lock className="w-6 h-6 text-gray-400" />}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm">{reward.title}</h4>
                        {reward.unlocked && (
                          <Badge className="text-xs" style={{ backgroundColor: 'rgba(42, 168, 90, 0.15)', color: '#2AA85A' }}>
                            +{reward.points}
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs text-gray-600">{reward.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-4">💡 Dicas de Aprendizado</h3>
            <div className="space-y-3">
              {tips.map((tip) => (
                <Card key={tip.id} className="p-4 shadow-sm bg-emerald-50 border-emerald-200">
                  <h4 className="text-sm mb-2">{tip.title}</h4>
                  <p className="text-xs text-gray-700">{tip.content}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );
}
