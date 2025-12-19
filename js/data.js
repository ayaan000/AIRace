/**
 * AIRace - Company Data
 * Comprehensive data for AI companies tracking
 */

const COMPANIES = [
  {
    id: 'openai',
    name: 'OpenAI',
    tagline: 'Creating safe AGI that benefits humanity',
    founded: 2015,
    headquarters: 'San Francisco, CA',
    ceo: 'Sam Altman',
    employees: 3500,
    focus: ['Large Language Models', 'Multimodal AI', 'Reasoning'],
    products: ['GPT-4o', 'ChatGPT', 'DALL-E 3', 'Sora', 'Codex'],
    valuation: 157000000000, // $157B
    funding: 13300000000, // $13.3B
    investors: ['Microsoft', 'Thrive Capital', 'Khosla Ventures', 'SoftBank'],
    agiProgress: 78,
    stockSymbol: null, // Private
    stockPrice: null,
    logoColor: '#10a37f',
    capabilities: {
      nlp: 95,
      vision: 88,
      reasoning: 90,
      coding: 92,
      creativity: 85,
      multimodal: 90
    }
  },
  {
    id: 'anthropic',
    name: 'Anthropic',
    tagline: 'AI Safety Company',
    founded: 2021,
    headquarters: 'San Francisco, CA',
    ceo: 'Dario Amodei',
    employees: 1000,
    focus: ['Constitutional AI', 'Safety Research', 'Large Language Models'],
    products: ['Claude 3.5', 'Claude Pro', 'Claude API'],
    valuation: 61000000000, // $61B
    funding: 9700000000, // $9.7B
    investors: ['Google', 'Spark Capital', 'Salesforce Ventures', 'Amazon'],
    agiProgress: 72,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#d4a27f',
    capabilities: {
      nlp: 93,
      vision: 82,
      reasoning: 92,
      coding: 88,
      creativity: 80,
      multimodal: 78
    }
  },
  {
    id: 'deepmind',
    name: 'Google DeepMind',
    tagline: 'Solve Intelligence, Advance Science',
    founded: 2010,
    headquarters: 'London, UK',
    ceo: 'Demis Hassabis',
    employees: 3000,
    focus: ['Scientific AI', 'Reinforcement Learning', 'Protein Folding'],
    products: ['Gemini', 'AlphaFold', 'AlphaCode', 'AlphaGeometry', 'Veo'],
    valuation: null, // Alphabet subsidiary
    funding: null,
    investors: ['Alphabet'],
    agiProgress: 82,
    stockSymbol: 'GOOGL',
    stockPrice: 192.45,
    stockChange: 1.23,
    logoColor: '#4285f4',
    capabilities: {
      nlp: 92,
      vision: 90,
      reasoning: 95,
      coding: 90,
      creativity: 82,
      multimodal: 93
    }
  },
  {
    id: 'meta',
    name: 'Meta AI',
    tagline: 'Open AI Research for Everyone',
    founded: 2013,
    headquarters: 'Menlo Park, CA',
    ceo: 'Yann LeCun',
    employees: 2500,
    focus: ['Open Source AI', 'Computer Vision', 'Language Models'],
    products: ['Llama 3.2', 'ImageBind', 'Segment Anything', 'Code Llama'],
    valuation: null, // Meta subsidiary
    funding: null,
    investors: ['Meta Platforms'],
    agiProgress: 68,
    stockSymbol: 'META',
    stockPrice: 612.77,
    stockChange: -0.45,
    logoColor: '#0866ff',
    capabilities: {
      nlp: 88,
      vision: 92,
      reasoning: 78,
      coding: 82,
      creativity: 75,
      multimodal: 88
    }
  },
  {
    id: 'xai',
    name: 'xAI',
    tagline: 'Understand the Universe',
    founded: 2023,
    headquarters: 'Palo Alto, CA',
    ceo: 'Elon Musk',
    employees: 500,
    focus: ['Truth-seeking AI', 'Real-time Knowledge', 'Reasoning'],
    products: ['Grok-2', 'Grok API'],
    valuation: 50000000000, // $50B
    funding: 6000000000, // $6B
    investors: ['Valor Equity', 'Vy Capital', 'a16z', 'Sequoia'],
    agiProgress: 58,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#ffffff',
    capabilities: {
      nlp: 85,
      vision: 78,
      reasoning: 82,
      coding: 80,
      creativity: 75,
      multimodal: 75
    }
  },
  {
    id: 'microsoft',
    name: 'Microsoft AI',
    tagline: 'Empowering Every Person and Organization',
    founded: 1975,
    headquarters: 'Redmond, WA',
    ceo: 'Satya Nadella',
    employees: 220000,
    focus: ['Enterprise AI', 'Copilot Integration', 'Cloud AI'],
    products: ['Copilot', 'Azure AI', 'Bing Chat', 'GitHub Copilot'],
    valuation: null, // Public
    funding: null,
    investors: ['Public'],
    agiProgress: 65,
    stockSymbol: 'MSFT',
    stockPrice: 448.29,
    stockChange: 0.87,
    logoColor: '#00a4ef',
    capabilities: {
      nlp: 85,
      vision: 82,
      reasoning: 80,
      coding: 90,
      creativity: 75,
      multimodal: 82
    }
  },
  {
    id: 'nvidia',
    name: 'NVIDIA AI',
    tagline: 'Powering the AI Revolution',
    founded: 1993,
    headquarters: 'Santa Clara, CA',
    ceo: 'Jensen Huang',
    employees: 30000,
    focus: ['AI Hardware', 'GPU Computing', 'Autonomous Systems'],
    products: ['H100', 'Blackwell', 'CUDA', 'Omniverse', 'DGX Cloud'],
    valuation: null, // Public
    funding: null,
    investors: ['Public'],
    agiProgress: 55,
    stockSymbol: 'NVDA',
    stockPrice: 134.25,
    stockChange: 2.34,
    logoColor: '#76b900',
    capabilities: {
      nlp: 60,
      vision: 75,
      reasoning: 55,
      coding: 70,
      creativity: 50,
      multimodal: 65
    }
  },
  {
    id: 'amazon',
    name: 'Amazon AI',
    tagline: 'Machine Learning for Everyone',
    founded: 1994,
    headquarters: 'Seattle, WA',
    ceo: 'Andy Jassy',
    employees: 1500000,
    focus: ['Cloud AI', 'Voice AI', 'Retail AI'],
    products: ['Alexa', 'AWS Bedrock', 'SageMaker', 'Titan'],
    valuation: null,
    funding: null,
    investors: ['Public'],
    agiProgress: 52,
    stockSymbol: 'AMZN',
    stockPrice: 227.03,
    stockChange: -0.92,
    logoColor: '#ff9900',
    capabilities: {
      nlp: 78,
      vision: 75,
      reasoning: 72,
      coding: 75,
      creativity: 65,
      multimodal: 72
    }
  },
  {
    id: 'mistral',
    name: 'Mistral AI',
    tagline: 'Frontier AI, Made in Europe',
    founded: 2023,
    headquarters: 'Paris, France',
    ceo: 'Arthur Mensch',
    employees: 60,
    focus: ['Efficient Models', 'Open Source', 'Enterprise AI'],
    products: ['Mistral Large', 'Mixtral', 'Le Chat', 'Pixtral'],
    valuation: 6000000000, // $6B
    funding: 1100000000, // $1.1B
    investors: ['a16z', 'Lightspeed', 'Microsoft', 'NVIDIA'],
    agiProgress: 48,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#f54a00',
    capabilities: {
      nlp: 85,
      vision: 72,
      reasoning: 80,
      coding: 82,
      creativity: 70,
      multimodal: 70
    }
  },
  {
    id: 'cohere',
    name: 'Cohere',
    tagline: 'Enterprise AI for Everyone',
    founded: 2019,
    headquarters: 'Toronto, Canada',
    ceo: 'Aidan Gomez',
    employees: 400,
    focus: ['Enterprise NLP', 'RAG', 'Embeddings'],
    products: ['Command R+', 'Embed', 'Rerank', 'Coral'],
    valuation: 5500000000, // $5.5B
    funding: 970000000, // $970M
    investors: ['NVIDIA', 'Oracle', 'Salesforce'],
    agiProgress: 42,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#d18ee2',
    capabilities: {
      nlp: 88,
      vision: 50,
      reasoning: 75,
      coding: 70,
      creativity: 65,
      multimodal: 55
    }
  },
  {
    id: 'inflection',
    name: 'Inflection AI',
    tagline: 'Personal AI for Everyone',
    founded: 2022,
    headquarters: 'Palo Alto, CA',
    ceo: 'Sean White',
    employees: 200,
    focus: ['Personal AI', 'Conversational AI', 'Empathy'],
    products: ['Pi'],
    valuation: 4000000000, // $4B
    funding: 1500000000, // $1.5B
    investors: ['Microsoft', 'Reid Hoffman', 'Bill Gates'],
    agiProgress: 38,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#00c7b7',
    capabilities: {
      nlp: 82,
      vision: 45,
      reasoning: 70,
      coding: 55,
      creativity: 75,
      multimodal: 50
    }
  },
  {
    id: 'stability',
    name: 'Stability AI',
    tagline: 'AI by the People, for the People',
    founded: 2019,
    headquarters: 'London, UK',
    ceo: 'Prem Akkaraju',
    employees: 250,
    focus: ['Open Source AI', 'Image Generation', 'Audio AI'],
    products: ['Stable Diffusion 3', 'Stable Audio', 'Stable Video'],
    valuation: 1000000000, // $1B
    funding: 250000000, // $250M
    investors: ['Coatue', 'Lightspeed'],
    agiProgress: 35,
    stockSymbol: null,
    stockPrice: null,
    logoColor: '#a855f7',
    capabilities: {
      nlp: 55,
      vision: 92,
      reasoning: 45,
      coding: 40,
      creativity: 95,
      multimodal: 78
    }
  }
];

// Stock ticker data (simulated real-time)
const STOCK_DATA = [
  { symbol: 'NVDA', name: 'NVIDIA', price: 134.25, change: 2.34, changePercent: 1.77 },
  { symbol: 'MSFT', name: 'Microsoft', price: 448.29, change: 0.87, changePercent: 0.19 },
  { symbol: 'GOOGL', name: 'Alphabet', price: 192.45, change: 1.23, changePercent: 0.64 },
  { symbol: 'META', name: 'Meta', price: 612.77, change: -0.45, changePercent: -0.07 },
  { symbol: 'AMZN', name: 'Amazon', price: 227.03, change: -0.92, changePercent: -0.40 },
  { symbol: 'TSM', name: 'TSMC', price: 193.82, change: 3.21, changePercent: 1.68 },
  { symbol: 'ORCL', name: 'Oracle', price: 170.45, change: 1.56, changePercent: 0.92 },
  { symbol: 'IBM', name: 'IBM', price: 223.17, change: -1.23, changePercent: -0.55 },
  { symbol: 'AMD', name: 'AMD', price: 119.82, change: 2.87, changePercent: 2.45 },
  { symbol: 'INTC', name: 'Intel', price: 20.14, change: -0.34, changePercent: -1.66 }
];

// News items
const NEWS_ITEMS = [
  {
    id: 1,
    title: 'OpenAI Releases Full o1 Reasoning Model with Enhanced Capabilities',
    excerpt: 'The new o1 model shows significant improvements in complex reasoning tasks, mathematics, and scientific analysis.',
    source: 'TechCrunch',
    date: '2024-12-18',
    category: 'Release',
    company: 'openai'
  },
  {
    id: 2,
    title: 'DeepMind AlphaFold 3 Expands to Model Drug Interactions',
    excerpt: 'Latest version can now predict how proteins interact with drugs, DNA, and other molecules with unprecedented accuracy.',
    source: 'Nature',
    date: '2024-12-17',
    category: 'Research',
    company: 'deepmind'
  },
  {
    id: 3,
    title: 'Anthropic Claude 3.5 Achieves New Benchmark Records',
    excerpt: 'Claude 3.5 Sonnet outperforms competitors in multiple benchmarks while maintaining safety standards.',
    source: 'The Verge',
    date: '2024-12-16',
    category: 'Benchmark',
    company: 'anthropic'
  },
  {
    id: 4,
    title: 'xAI Secures $6B in New Funding Round',
    excerpt: "Elon Musk's AI venture valued at $50 billion following latest investment round led by a16z and Sequoia.",
    source: 'Bloomberg',
    date: '2024-12-15',
    category: 'Funding',
    company: 'xai'
  },
  {
    id: 5,
    title: 'Meta Releases Llama 3.2 with Vision Capabilities',
    excerpt: 'Open-source model now supports multimodal inputs, challenging proprietary alternatives.',
    source: 'Wired',
    date: '2024-12-14',
    category: 'Release',
    company: 'meta'
  },
  {
    id: 6,
    title: 'NVIDIA Announces Blackwell Ultra for 2025',
    excerpt: 'Next-generation AI chip promises 4x performance improvement for training large language models.',
    source: 'Reuters',
    date: '2024-12-13',
    category: 'Hardware',
    company: 'nvidia'
  }
];

// Timeline events
const TIMELINE_EVENTS = [
  { date: '2024-12', title: 'OpenAI o1 Full Release', company: 'OpenAI', type: 'release' },
  { date: '2024-11', title: 'Gemini 2.0 Announced', company: 'DeepMind', type: 'announcement' },
  { date: '2024-10', title: 'Claude 3.5 Launch', company: 'Anthropic', type: 'release' },
  { date: '2024-09', title: 'Llama 3.2 Open Source', company: 'Meta', type: 'release' },
  { date: '2024-08', title: 'Grok-2 Integration', company: 'xAI', type: 'release' },
  { date: '2024-06', title: 'GPT-4o Multimodal', company: 'OpenAI', type: 'release' },
  { date: '2024-05', title: 'AlphaFold 3 Published', company: 'DeepMind', type: 'research' },
  { date: '2024-03', title: 'Claude 3 Family', company: 'Anthropic', type: 'release' },
  { date: '2024-02', title: 'Sora Video Model', company: 'OpenAI', type: 'announcement' },
  { date: '2024-01', title: 'Gemini Ultra Launch', company: 'DeepMind', type: 'release' }
];

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { COMPANIES, STOCK_DATA, NEWS_ITEMS, TIMELINE_EVENTS };
}
