// Simulated AI Service for Educational Content Recognition

export interface ImageAnalysis {
  mainSubject: string;
  detectedObjects: string[];
  educationalTopic: string;
  suggestedQuestions: string[];
  explanation: string;
}

// Simulated Computer Vision - recognizes educational content in images
export function analyzeImage(imageData: string): ImageAnalysis {
  // In production, this would call a real CV API like OpenAI Vision, Google Vision, etc.
  
  // Simulate different types of educational content based on image characteristics
  const randomType = Math.floor(Math.random() * 6);
  
  const analyses: ImageAnalysis[] = [
    {
      mainSubject: "Caneca de Café",
      detectedObjects: ["caneca", "cerâmica", "alça", "bebida quente"],
      educationalTopic: "Objetos do Cotidiano - Utensílios",
      suggestedQuestions: [
        "Como uma caneca é feita?",
        "Por que canecas são feitas de cerâmica?",
        "Qual a diferença entre caneca e xícara?"
      ],
      explanation: "Isso é uma caneca de café! Ela é tipicamente usada para guardar bebidas quentes como café ou chá. As canecas geralmente têm uma alça lateral para facilitar o manuseio de bebidas quentes e são feitas de materiais que retêm o calor, como cerâmica, porcelana ou até vidro. A forma cilíndrica ajuda a manter a temperatura da bebida por mais tempo."
    },
    {
      mainSubject: "Fotossíntese",
      detectedObjects: ["folha", "diagrama", "cloroplasto", "luz solar"],
      educationalTopic: "Biologia - Processos Celulares",
      suggestedQuestions: [
        "Como funciona a fotossíntese?",
        "Qual a importância da clorofila?",
        "Quais são os produtos da fotossíntese?"
      ],
      explanation: "Detectei um diagrama sobre fotossíntese! Este é o processo fundamental pelo qual as plantas convertem luz solar em energia química. A imagem mostra os componentes principais: cloroplastos (onde ocorre o processo), luz solar (fonte de energia), CO₂ (dióxido de carbono do ar) e H₂O (água do solo). O processo produz glicose (açúcar) e libera O₂ (oxigênio) que respiramos."
    },
    {
      mainSubject: "Teorema de Pitágoras",
      detectedObjects: ["triângulo", "ângulo reto", "fórmula", "catetos"],
      educationalTopic: "Matemática - Geometria",
      suggestedQuestions: [
        "Como usar o teorema de Pitágoras?",
        "O que são catetos e hipotenusa?",
        "Quando aplicar este teorema?"
      ],
      explanation: "Identifiquei um problema de geometria envolvendo o Teorema de Pitágoras! Este teorema estabelece que em um triângulo retângulo, o quadrado da hipotenusa é igual à soma dos quadrados dos catetos: a² + b² = c². É fundamental para calcular distâncias e resolver problemas de geometria plana e espacial."
    },
    {
      mainSubject: "Sistema Solar",
      detectedObjects: ["planetas", "sol", "órbitas", "sistema planetário"],
      educationalTopic: "Astronomia - Sistema Solar",
      suggestedQuestions: [
        "Quantos planetas existem no sistema solar?",
        "Qual a ordem dos planetas?",
        "Por que Plutão não é mais considerado planeta?"
      ],
      explanation: "Reconheci uma ilustração do Sistema Solar! Nosso sistema solar é composto pelo Sol (uma estrela) e 8 planetas principais: Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano e Netuno. Os planetas orbitam o Sol devido à força gravitacional, e cada um tem características únicas quanto a tamanho, composição e atmosfera."
    },
    {
      mainSubject: "Ciclo da Água",
      detectedObjects: ["evaporação", "condensação", "precipitação", "nuvens"],
      educationalTopic: "Ciências - Ciclos Naturais",
      suggestedQuestions: [
        "Como funciona o ciclo da água?",
        "O que é evaporação?",
        "Por que chove?"
      ],
      explanation: "Detectei um diagrama do Ciclo da Água! Este ciclo contínuo mostra como a água circula entre oceanos, atmosfera e terra. As principais etapas são: Evaporação (água vira vapor), Condensação (vapor forma nuvens), Precipitação (chuva/neve cai) e Infiltração (água volta ao solo). Este ciclo é essencial para a vida na Terra!"
    },
    {
      mainSubject: "Célula Animal",
      detectedObjects: ["núcleo", "mitocôndria", "membrana", "citoplasma"],
      educationalTopic: "Biologia - Citologia",
      suggestedQuestions: [
        "Quais são as organelas da célula?",
        "Qual a função do núcleo?",
        "Diferença entre célula animal e vegetal?"
      ],
      explanation: "Identifiquei um diagrama de célula animal! As células são as unidades básicas da vida. Principais organelas: Núcleo (contém DNA), Mitocôndrias (produzem energia), Membrana Plasmática (controla entrada/saída), Citoplasma (líquido interno) e Retículo Endoplasmático (síntese de proteínas). Cada organela tem função específica essencial para a sobrevivência celular."
    }
  ];

  return analyses[randomType];
}

// Simulated NLP - generates educational responses
export function generateEducationalResponse(question: string, context?: ImageAnalysis): string {
  const questionLower = question.toLowerCase();
  
  // If there's image context, use it
  if (context) {
    if (questionLower.includes('como') || questionLower.includes('explica') || questionLower.includes('funciona')) {
      return generateDetailedExplanation(context);
    }
    if (questionLower.includes('por que') || questionLower.includes('porque')) {
      return generateWhyExplanation(context);
    }
    if (questionLower.includes('exemplo')) {
      return generateExample(context);
    }
    if (questionLower.includes('resumo') || questionLower.includes('resumir')) {
      return generateSummary(context);
    }
  }
  
  // General educational responses
  if (questionLower.includes('matemática') || questionLower.includes('matematica')) {
    return "Matemática é a ciência dos números, formas e padrões! Posso te ajudar com álgebra, geometria, cálculo, estatística e muito mais. Que tópico específico você gostaria de explorar? Pode também enviar uma foto de um exercício!";
  }
  
  if (questionLower.includes('física') || questionLower.includes('fisica')) {
    return "Física estuda as leis fundamentais do universo! Desde movimento e energia até eletromagnetismo e física quântica. Tem alguma dúvida específica ou quer que eu explique algum conceito? Envie uma imagem se tiver um problema para resolver!";
  }
  
  if (questionLower.includes('química') || questionLower.includes('quimica')) {
    return "Química é fascinante! Ela estuda a matéria, suas propriedades e transformações. Posso explicar sobre átomos, ligações químicas, reações, tabela periódica e muito mais. O que você gostaria de aprender hoje?";
  }
  
  if (questionLower.includes('biologia')) {
    return "Biologia é o estudo da vida em todas as suas formas! Desde células microscópicas até ecossistemas complexos. Posso te ajudar com genética, evolução, ecologia, anatomia e muito mais. Tem algum tópico específico em mente?";
  }
  
  if (questionLower.includes('história') || questionLower.includes('historia')) {
    return "História nos ajuda a entender o presente através do passado! Posso explicar sobre civilizações antigas, períodos históricos, eventos importantes e personagens que moldaram o mundo. Que época ou evento te interessa?";
  }
  
  if (questionLower.includes('geografia')) {
    return "Geografia estuda a Terra e suas características! Desde formações geológicas até clima, população e cultura. Posso explicar sobre continentes, países, relevo, clima e muito mais. Qual aspecto da geografia você quer explorar?";
  }
  
  // Generic response
  return "Excelente pergunta! Estou aqui para te ajudar a aprender. Pode me fazer perguntas sobre qualquer matéria: Matemática, Física, Química, Biologia, História, Geografia e muito mais. Também posso analisar imagens de livros, lições de casa ou diagramas educacionais. Como posso te ajudar especificamente?";
}

function generateDetailedExplanation(context: ImageAnalysis): string {
  return `Vou te explicar sobre ${context.mainSubject} em detalhes:\n\n${context.explanation}\n\n**Conceitos Chave:**\n${context.detectedObjects.map(obj => `• ${obj.charAt(0).toUpperCase() + obj.slice(1)}`).join('\n')}\n\nTem alguma parte específica que você gostaria que eu aprofundasse mais?`;
}

function generateWhyExplanation(context: ImageAnalysis): string {
  const whyExplanations: Record<string, string> = {
    "Fotossíntese": "A fotossíntese é crucial porque: 1) Produz o oxigênio que respiramos, 2) É a base da cadeia alimentar (plantas são produtores), 3) Remove CO₂ da atmosfera, ajudando a regular o clima. Sem fotossíntese, a vida como conhecemos não existiria!",
    "Teorema de Pitágoras": "O Teorema de Pitágoras é importante porque nos permite calcular distâncias em situações práticas - desde construção civil até navegação GPS! Ele é a base para trigonometria e geometria analítica, fundamentais em engenharia e física.",
    "Sistema Solar": "Estudar o Sistema Solar nos ajuda a entender nossa origem e lugar no universo. Além disso, conhecer os planetas e suas características pode nos ajudar a encontrar vida extraterrestre e até planejar futuras missões espaciais!",
    "Ciclo da Água": "O Ciclo da Água é essencial para a vida porque distribui água doce pelo planeta, regula temperatura e clima, e permite que a água seja constantemente purificada. Compreendê-lo nos ajuda a gerenciar recursos hídricos e prever fenômenos climáticos.",
    "Célula Animal": "Entender as células é fundamental porque todos os seres vivos são formados por elas! Conhecer suas organelas nos ajuda a compreender doenças, desenvolver medicamentos e entender como nosso corpo funciona no nível mais básico."
  };
  
  return whyExplanations[context.mainSubject] || `Ótima pergunta sobre ${context.mainSubject}! Este tópico é importante porque está relacionado a ${context.educationalTopic}. ${context.explanation}`;
}

function generateExample(context: ImageAnalysis): string {
  const examples: Record<string, string> = {
    "Caneca de Café": "**Exemplo Prático:** Quando você derrama café quente em uma caneca de cerâmica, a parede espessa do material absorve e retém o calor gradualmente. A alça permanece mais fria porque é mais fina e tem menos contato direto com o líquido quente. Por isso você pode segurar a alça confortavelmente enquanto o café permanece quente! ☕",
    "Fotossíntese": "**Exemplo Prático:** Imagine uma planta em seu jardim. Durante o dia, ela absorve luz solar através das folhas. Usando essa energia, combina CO₂ do ar com água do solo para produzir glicose (seu alimento) e libera oxigênio. É como uma fábrica natural movida a energia solar! 🌱☀️",
    "Teorema de Pitágoras": "**Exemplo Prático:** Você quer saber se sua TV de 50 polegadas cabe em um espaço de parede. A TV tem 44 pol de largura e 25 pol de altura. Usando a² + b² = c²: 44² + 25² = 1936 + 625 = 2561, √2561 ≈ 50,6 pol na diagonal. Cabe sim! 📺",
    "Sistema Solar": "**Exemplo Prático:** Se o Sol fosse do tamanho de uma bola de basquete, a Terra seria um grão de ervilha a 26 metros de distância, e Netuno estaria a 800 metros! Isso mostra as distâncias incríveis no espaço. 🌍🪐",
    "Ciclo da Água": "**Exemplo Prático:** Quando você ferve água para macarrão, vê o ciclo em ação! A água evapora (vapor sobe), condensa na tampa fria (gotículas) e 'chove' de volta na panela. O mesmo acontece na natureza em escala gigantesca! 💧☁️",
    "Célula Animal": "**Exemplo Prático:** Pense na célula como uma cidade. O núcleo é a prefeitura (comando central), mitocôndrias são usinas de energia, a membrana é a muralha da cidade, e o citoplasma são as ruas onde tudo acontece. Cada organela tem seu trabalho! 🏙️"
  };
  
  return examples[context.mainSubject] || `Aqui está um exemplo relacionado a ${context.mainSubject}: ${context.explanation}`;
}

function generateSummary(context: ImageAnalysis): string {
  return `📚 **Resumo sobre ${context.mainSubject}:**\n\n${context.explanation}\n\n**Tópico:** ${context.educationalTopic}\n**Elementos principais:** ${context.detectedObjects.join(', ')}\n\nPara aprofundar, você pode me perguntar: "${context.suggestedQuestions[0]}"`;
}

// Game mechanics - XP and achievements
export function calculateXP(messageType: 'question' | 'image' | 'followup'): number {
  const xpValues = {
    question: 10,
    image: 25,
    followup: 15
  };
  return xpValues[messageType];
}

export function checkAchievements(stats: {
  totalQuestions: number;
  imagesUploaded: number;
  streak: number;
  level: number;
}): string[] {
  const newAchievements: string[] = [];
  
  if (stats.totalQuestions === 10) newAchievements.push('Aprendiz Rápido');
  if (stats.totalQuestions === 50) newAchievements.push('Curioso Insaciável');
  if (stats.imagesUploaded === 5) newAchievements.push('Expert em Fotos');
  if (stats.imagesUploaded === 20) newAchievements.push('Mestre Visual');
  if (stats.streak === 7) newAchievements.push('Guerreiro da Semana');
  if (stats.streak === 30) newAchievements.push('Dedicação Total');
  if (stats.level === 15) newAchievements.push('Mestre do Conhecimento');
  if (stats.level === 25) newAchievements.push('Sábio Supremo');
  
  return newAchievements;
}
