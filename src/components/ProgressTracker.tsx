import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Target, BookOpen, Image, Calendar } from "lucide-react";

interface ProgressTrackerProps {
  level: number;
  xp: number;
  maxXp: number;
  questionsAnswered: number;
  imagesAnalyzed: number;
  daysActive: number;
}

export function ProgressTracker({ 
  level, 
  xp, 
  maxXp, 
  questionsAnswered, 
  imagesAnalyzed, 
  daysActive 
}: ProgressTrackerProps) {
  const xpPercentage = (xp / maxXp) * 100;

  return (
    <div className="space-y-4">
      <h3 className="mb-4">📊 Progresso</h3>
      
      <Card className="p-4 shadow-sm space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm">Nível {level}</span>
          </div>
          <span className="text-xs text-gray-500">{xp}/{maxXp} XP</span>
        </div>
        <Progress value={xpPercentage} className="h-2" />
      </Card>

      <Card className="p-4 shadow-sm">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-500" />
              <span className="text-sm text-gray-600">Perguntas</span>
            </div>
            <span className="font-medium">{questionsAnswered}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-gray-600">Imagens</span>
            </div>
            <span className="font-medium">{imagesAnalyzed}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-500" />
              <span className="text-sm text-gray-600">Dias ativos</span>
            </div>
            <span className="font-medium">{daysActive}</span>
          </div>
        </div>
      </Card>
    </div>
  );
}
