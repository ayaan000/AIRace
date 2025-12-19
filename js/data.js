/**
 * AIRace - Company Data
 * Comprehensive data for AI companies tracking - Updated Dec 2025
 */

const COMPANIES = [
  {
    id: 'openai',
    name: 'OpenAI',
    tagline: 'Creating safe AGI that benefits humanity',
    founded: 2015,
    headquarters: 'San Francisco, CA',
    ceo: 'Sam Altman',
    employees: 5200,
    focus: ['AGI Systems', 'Reasoning Agents', 'Multimodal Reality'],
    products: ['GPT-5', 'Sora 2.0', 'Operator', 'Voice Engine'],
    valuation: 450000000000, // $450B
    funding: 25000000000, // $25B
    investors: ['Microsoft', 'Thrive Capital', 'SoftBank', 'MGX'],
    agiProgress: 88,
    stockSymbol: null, // Private
    stockPrice: null,
    logoColor: '#10a37f',
    capabilities: {
      nlp: 98,
      vision: 96,
      reasoning: 97,
      coding: 98,
      creativity: 94,
      multimodal: 98
    }
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    tagline: 'AI Safety Company',
    founded: 2021,
    headquarters: 'San Francisco, CA',
    ceo: 'Dario Amodei',
    employees: 2100,
    focus: ['Constitutional AI', 'Model Interpretability', 'Long Context'],
    products: ['Claude 4 Opus', 'Claude 4.5 Sonnet', 'Claude Enterprise'],
    valuation: 120000000000, // $120B
    funding: 18000000000, // $18B
    investors: ['Amazon', 'Google', 'Salesforce', 'Menlo'],
    agiProgress: 84,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#d4a27f',
    capabilities: {
      nlp: 97,
      vision: 90,
      reasoning: 96,
      coding: 95,
      creativity: 88,
      multimodal: 85
    }
  },
  {
    id: 'deepmind',
    name: 'Google DeepMind',
    tagline: 'Solve Intelligence, Advance Science',
    founded: 2010,
    headquarters: 'London, UK',
    ceo: 'Demis Hassabis',
    employees: 4500,
    focus: ['Scientific Discovery', 'Autonomous Agents', 'Robotics'],
    products: ['Gemini 3.0', 'AlphaFold 4', 'AlphaCode 3', 'Gnome'],
    valuation: null, // Alphabet subsidiary
    funding: null,
    investors: ['Alphabet'],
    agiProgress: 89,
    stockSymbol: 'GOOGL',
    stockPrice: 245.80,
    stockChange: 3.45,
    logoColor: '#4285f4',
    capabilities: {
      nlp: 96,
      vision: 95,
      reasoning: 97,
      coding: 94,
      creativity: 88,
      multimodal: 99
    }
  },
  {
    id: 'meta',
    name: 'Meta AI',
    tagline: 'Open AI Research for Everyone',
    founded: 2013,
    headquarters: 'Menlo Park, CA',
    ceo: 'Yann LeCun',
    employees: 4000,
    focus: ['Open Source AGI', 'World Models', 'Video Understanding'],
    products: ['Llama 5', 'V-JEPA 2', 'Meta Ray-Ban 3'],
    valuation: null, // Meta subsidiary
    funding: null,
    investors: ['Meta Platforms'],
    agiProgress: 79,
    stockSymbol: 'META',
    stockPrice: 845.20,
    stockChange: -1.25,
    logoColor: '#0866ff',
    capabilities: {
      nlp: 92,
      vision: 96,
      reasoning: 85,
      coding: 88,
      creativity: 85,
      multimodal: 92
    }
  },
  {
    id: 'xai',
    name: 'xAI',
    tagline: 'Understand the Universe',
    founded: 2023,
    headquarters: 'Memphis, TN',
    ceo: 'Elon Musk',
    employees: 1200,
    focus: ['Supercomputing', 'Truth-seeking AI', 'Real-time Logic'],
    products: ['Grok-4', 'Colossus Supercluster'],
    valuation: 95000000000, // $95B
    funding: 15000000000, // $15B
    investors: ['Valor Equity', 'Vy Capital', 'a16z', 'Sequoia'],
    agiProgress: 75,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#ffffff',
    capabilities: {
      nlp: 90,
      vision: 85,
      reasoning: 90,
      coding: 88,
      creativity: 82,
      multimodal: 85
    }
  },
  {
    id: 'microsoft',
    name: 'Microsoft AI',
    tagline: 'Empowering Every Person and Organization',
    founded: 1975,
    headquarters: 'Redmond, WA',
    ceo: 'Satya Nadella',
    employees: 235000,
    focus: ['Enterprise Agents', 'Copilot Workspace', 'Quantum AI'],
    products: ['Copilot Pro', 'Azure AI Agent Service', 'Phi-5'],
    valuation: null, // Public
    funding: null,
    investors: ['Public'],
    agiProgress: 78,
    stockSymbol: 'MSFT',
    stockPrice: 560.45,
    stockChange: 1.15,
    logoColor: '#00a4ef',
    capabilities: {
      nlp: 90,
      vision: 88,
      reasoning: 86,
      coding: 95,
      creativity: 80,
      multimodal: 88
    }
  },
  {
    id: 'nvidia',
    name: 'NVIDIA AI',
    tagline: 'Powering the AI Revolution',
    founded: 1993,
    headquarters: 'Santa Clara, CA',
    ceo: 'Jensen Huang',
    employees: 42000,
    focus: ['Physical AI', 'Digital Twins', 'Edge Robotics'],
    products: ['Rubin GPU', 'Project GR00T', 'Cosmos'],
    valuation: null, // Public
    funding: null,
    investors: ['Public'],
    agiProgress: 65,
    stockSymbol: 'NVDA',
    stockPrice: 185.50,
    stockChange: 4.12,
    logoColor: '#76b900',
    capabilities: {
      nlp: 70,
      vision: 92,
      reasoning: 60,
      coding: 80,
      creativity: 65,
      multimodal: 80
    }
  },
  {
    id: 'amazon',
    name: 'Amazon AI',
    tagline: 'Machine Learning for Everyone',
    founded: 1994,
    headquarters: 'Seattle, WA',
    ceo: 'Andy Jassy',
    employees: 1600000,
    focus: ['Cloud Agents', 'Robotics', 'Shopping AI'],
    products: ['Olympus 2', 'Alexa Agent', 'AWS Bedrock Agents'],
    valuation: null,
    funding: null,
    investors: ['Public'],
    agiProgress: 68,
    stockSymbol: 'AMZN',
    stockPrice: 280.15,
    stockChange: 0.55,
    logoColor: '#ff9900',
    capabilities: {
      nlp: 85,
      vision: 82,
      reasoning: 80,
      coding: 85,
      creativity: 70,
      multimodal: 80
    }
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    tagline: 'Frontier AI, Made in Europe',
    founded: 2023,
    headquarters: 'Paris, France',
    ceo: 'Arthur Mensch',
    employees: 250,
    focus: ['Efficient Frontier', 'Edge AI', 'Sovereign AI'],
    products: ['Mistral Magnum', 'Pixtral Large', 'Codestral 2'],
    valuation: 15000000000, // $15B
    funding: 3000000000, // $3B
    investors: ['a16z', 'Lightspeed', 'Microsoft', 'NVIDIA'],
    agiProgress: 64,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#f54a00',
    capabilities: {
      nlp: 90,
      vision: 80,
      reasoning: 85,
      coding: 90,
      creativity: 75,
      multimodal: 80
    }
  },
  {
    id: 'ssi',
    name: 'Safe Superintelligence',
    tagline: 'Building Safe Superintelligence',
    founded: 2024,
    headquarters: 'Palo Alto, CA',
    ceo: 'Ilya Sutskever',
    employees: 150,
    focus: ['Safety Verification', 'Superalignment', 'Pure Research'],
    products: ['SSI Core'],
    valuation: 8000000000, // $8B
    funding: 1000000000, // $1B
    investors: ['NFDG', 'Sequoia', 'DST Global'],
    agiProgress: 60,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#ffff00',
    capabilities: {
      nlp: 88,
      vision: 60,
      reasoning: 95,
      coding: 85,
      creativity: 40,
      multimodal: 50
    }
  }
];

// Stock ticker data (simulated real-time Dec 2025)
const STOCK_DATA = [
  { symbol: 'NVDA', name: 'NVIDIA', price: 185.50, change: 4.12, changePercent: 2.27 },
  { symbol: 'MSFT', name: 'Microsoft', price: 560.45, change: 1.15, changePercent: 0.21 },
  { symbol: 'GOOGL', name: 'Alphabet', price: 245.80, change: 3.45, changePercent: 1.42 },
  { symbol: 'META', name: 'Meta', price: 845.20, change: -1.25, changePercent: -0.15 },
  { symbol: 'AMZN', name: 'Amazon', price: 280.15, change: 0.55, changePercent: 0.20 },
  { symbol: 'TSM', name: 'TSMC', price: 245.10, change: 5.60, changePercent: 2.34 },
  { symbol: 'AVGO', name: 'Broadcom', price: 2150.30, change: 12.45, changePercent: 0.58 },
  { symbol: 'ORCL', name: 'Oracle', price: 210.80, change: -0.50, changePercent: -0.24 },
  { symbol: 'AMD', name: 'AMD', price: 195.40, change: 6.20, changePercent: 3.28 },
  { symbol: 'PLTR', name: 'Palantir', price: 68.45, change: 1.20, changePercent: 1.78 }
];

// News items (Late 2025 Context)
const NEWS_ITEMS = [
  {
    id: 1,
    title: 'OpenAI GPT-5 Achieves Human-Level Performance on SWE-bench Verified',
    excerpt: 'The long-awaited GPT-5 model solves 95% of software engineering tasks autonomously, marking a pivotal moment in AI agents.',
    source: 'The Verge',
    date: '2025-12-15',
    category: 'Release',
    company: 'openai'
  },
  {
    id: 2,
    title: 'Google DeepMind Reveals "Gnome" - The First General Purpose Science Agent',
    excerpt: 'Gnome has successfully discovered 4 new stable crystals and proposed a novel longevity drug candidate in its first week online.',
    source: 'Nature',
    date: '2025-12-12',
    category: 'Research',
    company: 'deepmind'
  },
  {
    id: 3,
    title: 'Anthropic Launches Claude 4 Opus with 2M Token Output Context',
    excerpt: 'New architecture allows Claude to write entire books or large codebases in a single shot with near-perfect coherence.',
    source: 'TechCrunch',
    date: '2025-11-28',
    category: 'Release',
    company: 'anthropic'
  },
  {
    id: 4,
    title: 'Meta Llama 5 405B Released as Open Weights',
    excerpt: 'Zuckerberg doubles down on open source AGI, releasing a model that benchmarks above early 2025 proprietary frontiers.',
    source: 'Wired',
    date: '2025-11-15',
    category: 'Release',
    company: 'meta'
  },
  {
    id: 5,
    title: 'xAI Colossus Cluster Reaches 200k H200 GPUs',
    excerpt: "The world's largest AI training cluster goes online in Memphis, aiming to train Grok-5 over the next 3 months.",
    source: 'Bloomberg',
    date: '2025-10-30',
    category: 'Hardware',
    company: 'xai'
  },
  {
    id: 6,
    title: 'NVIDIA Rubin Architecture Smashes Inference Records',
    excerpt: 'New chips offer 10x energy efficiency for agentic workloads, enabling persistent AI companions on local devices.',
    source: 'AnandTech',
    date: '2025-10-15',
    category: 'Hardware',
    company: 'nvidia'
  }
];

// Timeline events (Updated for 2025)
const TIMELINE_EVENTS = [
  { date: '2025-12', title: 'GPT-5 Release', company: 'OpenAI', type: 'release' },
  { date: '2025-11', title: 'Claude 4 Opus', company: 'Anthropic', type: 'release' },
  { date: '2025-10', title: 'Llama 5 (405B)', company: 'Meta', type: 'release' },
  { date: '2025-09', title: 'Gemini 3.0', company: 'DeepMind', type: 'release' },
  { date: '2025-08', title: 'Sora Public Access', company: 'OpenAI', type: 'product' },
  { date: '2025-06', title: 'Ilya Announces SSI Core', company: 'SSI', type: 'announcement' },
  { date: '2025-05', title: 'AlphaFold 4', company: 'DeepMind', type: 'research' },
  { date: '2025-03', title: 'Grok-3', company: 'xAI', type: 'release' },
  { date: '2024-12', title: 'GPT-4o / o1 Full', company: 'OpenAI', type: 'release' },
  { date: '2024-11', title: 'Claude 3.5 Sonnet', company: 'Anthropic', type: 'release' }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANIES, STOCK_DATA, NEWS_ITEMS, TIMELINE_EVENTS };
}
