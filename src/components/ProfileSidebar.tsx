import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card } from "./ui/card";
import { Progress } from "./ui/progress";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { UserProfile } from "./mockData";
import { Flame, Trophy, MessageSquare, LogOut } from "lucide-react";

interface ProfileSidebarProps {
  user: UserProfile;
}

export function ProfileSidebar({ user }: ProfileSidebarProps) {
  const xpPercentage = (user.xp / user.maxXp) * 100;

  return (
    <div className="w-full h-full bg-white p-6 space-y-6 flex flex-col">
      <div className="text-center space-y-4">
        <Avatar className="w-24 h-24 mx-auto" style={{ backgroundColor: '#2AA85A' }}>
          <AvatarFallback className="text-white text-2xl" style={{ backgroundColor: '#2AA85A' }}>
            {user.avatar}
          </AvatarFallback>
        </Avatar>
        
        <div>
          <h3 className="text-xl">{user.name}</h3>
          <Badge className="mt-2 hover:bg-opacity-90" style={{ backgroundColor: 'rgba(42, 168, 90, 0.15)', color: '#2AA85A' }}>
            Nível {user.level}
          </Badge>
        </div>
      </div>

      <Card className="p-4 space-y-2 shadow-sm">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Progresso XP</span>
          <span className="text-sm">{user.xp}/{user.maxXp}</span>
        </div>
        <Progress value={xpPercentage} className="h-2" />
        <p className="text-xs text-gray-500">{user.maxXp - user.xp} XP para o próximo nível</p>
      </Card>

      <div className="space-y-3">
        <Card className="p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
            <Flame className="w-5 h-5 text-orange-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Sequência Atual</p>
            <p className="text-lg">{user.streak} dias</p>
          </div>
        </Card>

        <Card className="p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
            <MessageSquare className="w-5 h-5 text-blue-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Perguntas Feitas</p>
            <p className="text-lg">{user.totalQuestions}</p>
          </div>
        </Card>

        <Card className="p-4 shadow-sm flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
            <Trophy className="w-5 h-5 text-purple-500" />
          </div>
          <div>
            <p className="text-sm text-gray-600">Conquistas</p>
            <p className="text-lg">8/12</p>
          </div>
        </Card>
      </div>

      <Button 
        variant="outline" 
        className="w-full mt-auto border-red-200 text-red-600 hover:bg-red-50 hover:text-red-700"
        onClick={() => alert('Logout funcionalidade em desenvolvimento')}
      >
        <LogOut className="w-4 h-4 mr-2" />
        Sair
      </Button>
    </div>
  );
}
