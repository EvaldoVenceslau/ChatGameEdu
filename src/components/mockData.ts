export interface ChatMessage {
  id: string;
  type: 'user' | 'ai';
  content: string;
  image?: string;
  timestamp: Date;
}

export interface UserProfile {
  name: string;
  level: number;
  xp: number;
  maxXp: number;
  streak: number;
  totalQuestions: number;
  avatar: string;
}

export interface Reward {
  id: string;
  title: string;
  description: string;
  points: number;
  icon: string;
  unlocked: boolean;
}

export interface Tip {
  id: string;
  title: string;
  content: string;
}

export const mockUser: UserProfile = {
  name: "Evaldo Venceslau",
  level: 12,
  xp: 750,
  maxXp: 1000,
  streak: 7,
  totalQuestions: 156,
  avatar: "EV"
};

export const mockMessages: ChatMessage[] = [
  {
    id: '1',
    type: 'ai',
    content: "Olá! 👋 Sou seu tutor de IA. Envie uma imagem ou me faça qualquer pergunta, e eu vou te ajudar a aprender!",
    timestamp: new Date(Date.now() - 3600000)
  },
  {
    id: '2',
    type: 'user',
    content: "O que é isso?",
    image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400",
    timestamp: new Date(Date.now() - 3000000)
  },
  {
    id: '3',
    type: 'ai',
    content: "Isso é uma caneca de café. Ela é tipicamente usada para guardar bebidas quentes como café ou chá. As canecas geralmente têm uma alça lateral para facilitar o manuseio e são feitas de materiais que retêm o calor, como cerâmica ou porcelana.",
    timestamp: new Date(Date.now() - 2900000)
  },
  {
    id: '4',
    type: 'user',
    content: "Pode explicar como uma caneca é feita?",
    timestamp: new Date(Date.now() - 2400000)
  },
  {
    id: '5',
    type: 'ai',
    content: "Claro! O processo de fabricação de uma caneca de cerâmica envolve várias etapas:\n\n**1. Modelagem:** A argila é moldada usando um torno de oleiro ou moldes, criando a forma cilíndrica básica da caneca.\n\n**2. Secagem:** A peça moldada é deixada para secar lentamente para evitar rachaduras.\n\n**3. Primeira queima (biscoito):** A caneca é queimada em um forno a cerca de 900-1000°C, tornando-a dura e porosa.\n\n**4. Esmaltação:** A superfície é revestida com esmalte, que pode adicionar cor e criar uma superfície lisa e impermeável.\n\n**5. Segunda queima:** A caneca é queimada novamente a temperaturas mais altas (1200-1300°C) para fundir o esmalte e criar o acabamento final brilhante.\n\nEste processo garante que a caneca seja durável, segura para alimentos e atraente!",
    timestamp: new Date(Date.now() - 2300000)
  }
];

export const mockRewards: Reward[] = [
  {
    id: '1',
    title: 'Aprendiz Rápido',
    description: 'Fez 10 perguntas',
    points: 50,
    icon: '⚡',
    unlocked: true
  },
  {
    id: '2',
    title: 'Expert em Fotos',
    description: 'Enviou 5 imagens',
    points: 75,
    icon: '📸',
    unlocked: true
  },
  {
    id: '3',
    title: 'Guerreiro da Semana',
    description: 'Sequência de 7 dias',
    points: 100,
    icon: '🔥',
    unlocked: true
  },
  {
    id: '4',
    title: 'Mestre do Conhecimento',
    description: 'Alcance o nível 15',
    points: 200,
    icon: '🎓',
    unlocked: false
  }
];

export const mockTips: Tip[] = [
  {
    id: '1',
    title: '💡 Dica de Aprendizado',
    content: 'Envie imagens de sua lição de casa ou páginas do livro didático para explicações detalhadas!'
  },
  {
    id: '2',
    title: '🎯 Dica Profissional',
    content: 'Faça perguntas de acompanhamento para se aprofundar em tópicos que você acha interessantes.'
  },
  {
    id: '3',
    title: '🌟 Você sabia?',
    content: 'Você ganha XP para cada pergunta feita. Continue aprendendo para subir de nível!'
  }
];
