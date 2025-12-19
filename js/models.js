/**
 * AIRace - AI Models & Tools Data
 * Breakthrough AI models and specialized tools tracking
 */

const AI_MODELS = {
    // Scientific AI
    scientific: [
        {
            id: 'alphafold',
            name: 'AlphaFold',
            company: 'Google DeepMind',
            category: 'Scientific',
            icon: '🧬',
            description: 'Revolutionary protein structure prediction system that has predicted structures for nearly all known proteins.',
            releaseDate: '2020-11',
            latestVersion: 'AlphaFold 3',
            metrics: {
                accuracy: '98%',
                impact: '200M+ structures',
                citations: '15,000+'
            },
            capabilities: ['Protein Folding', 'Drug Discovery', 'Molecular Modeling'],
            breakthrough: 'Solved 50-year protein folding problem'
        },
        {
            id: 'alphageometry',
            name: 'AlphaGeometry',
            company: 'Google DeepMind',
            category: 'Scientific',
            icon: '📐',
            description: 'AI system that solves complex geometry problems at International Mathematical Olympiad level.',
            releaseDate: '2024-01',
            latestVersion: '1.0',
            metrics: {
                accuracy: '83%',
                impact: 'IMO Gold Level',
                problems: '25/30 solved'
            },
            capabilities: ['Geometric Reasoning', 'Theorem Proving', 'Mathematical Logic'],
            breakthrough: 'First AI to reach IMO gold medal standard'
        },
        {
            id: 'medpalm',
            name: 'Med-PaLM',
            company: 'Google DeepMind',
            category: 'Scientific',
            icon: '🏥',
            description: 'Medical AI that achieves expert-level performance on medical licensing exams.',
            releaseDate: '2023-03',
            latestVersion: 'Med-PaLM 2',
            metrics: {
                accuracy: '86.5%',
                impact: 'USMLE Expert',
                domains: '6 medical'
            },
            capabilities: ['Medical Diagnosis', 'Clinical Reasoning', 'Health Q&A'],
            breakthrough: 'First AI to pass USMLE at expert level'
        },
        {
            id: 'graphcast',
            name: 'GraphCast',
            company: 'Google DeepMind',
            category: 'Scientific',
            icon: '🌤️',
            description: 'AI weather forecasting system that outperforms traditional numerical methods.',
            releaseDate: '2023-11',
            latestVersion: '1.0',
            metrics: {
                accuracy: '10-day forecast',
                speed: '< 1 minute',
                improvement: '90% vs HRES'
            },
            capabilities: ['Weather Prediction', 'Climate Modeling', 'Extreme Events'],
            breakthrough: '10-day forecasts in under a minute'
        }
    ],

    // Large Language Models
    language: [
        {
            id: 'gpt4',
            name: 'GPT-4o',
            company: 'OpenAI',
            category: 'Language',
            icon: '🧠',
            description: 'Flagship multimodal model with advanced reasoning, vision, and audio capabilities.',
            releaseDate: '2024-05',
            latestVersion: 'GPT-4o',
            metrics: {
                parameters: '~1.8T',
                context: '128K tokens',
                languages: '50+'
            },
            capabilities: ['Text Generation', 'Vision', 'Audio', 'Reasoning', 'Coding'],
            breakthrough: 'Native multimodal understanding'
        },
        {
            id: 'claude',
            name: 'Claude 3.5',
            company: 'Anthropic',
            category: 'Language',
            icon: '🎭',
            description: 'Constitutional AI with industry-leading safety and nuanced understanding.',
            releaseDate: '2024-06',
            latestVersion: 'Claude 3.5 Sonnet',
            metrics: {
                context: '200K tokens',
                safety: 'Constitutional AI',
                coding: '#1 SWE-bench'
            },
            capabilities: ['Long Context', 'Safe AI', 'Analysis', 'Coding', 'Vision'],
            breakthrough: 'Highest coding benchmark scores'
        },
        {
            id: 'gemini',
            name: 'Gemini 2.0',
            company: 'Google DeepMind',
            category: 'Language',
            icon: '♊',
            description: 'Natively multimodal model with state-of-the-art reasoning and agentic capabilities.',
            releaseDate: '2024-12',
            latestVersion: 'Gemini 2.0 Flash',
            metrics: {
                modalities: '5+',
                context: '2M tokens',
                speed: 'Flash tier'
            },
            capabilities: ['Multimodal', 'Long Context', 'Code', 'Math', 'Agents'],
            breakthrough: '2 million token context window'
        },
        {
            id: 'llama',
            name: 'Llama 3.2',
            company: 'Meta AI',
            category: 'Language',
            icon: '🦙',
            description: 'Open-source model family with vision capabilities and on-device variants.',
            releaseDate: '2024-09',
            latestVersion: '3.2 90B Vision',
            metrics: {
                parameters: '1B-90B',
                license: 'Open Source',
                downloads: '350M+'
            },
            capabilities: ['Open Source', 'Vision', 'On-device', 'Fine-tuning'],
            breakthrough: 'Best open-source vision model'
        },
        {
            id: 'o1',
            name: 'o1',
            company: 'OpenAI',
            category: 'Language',
            icon: '🔮',
            description: 'Reasoning model that thinks before responding, excelling at complex problem-solving.',
            releaseDate: '2024-12',
            latestVersion: 'o1',
            metrics: {
                reasoning: 'Chain of Thought',
                math: '#1 AIME',
                coding: '#1 Codeforces'
            },
            capabilities: ['Deep Reasoning', 'Mathematics', 'Science', 'Coding'],
            breakthrough: 'Human PhD-level reasoning'
        }
    ],

    // Creative AI
    creative: [
        {
            id: 'dalle',
            name: 'DALL-E 3',
            company: 'OpenAI',
            category: 'Creative',
            icon: '🎨',
            description: 'Text-to-image model with exceptional prompt following and text rendering.',
            releaseDate: '2023-10',
            latestVersion: 'DALL-E 3',
            metrics: {
                resolution: 'Up to 1024x1792',
                textRendering: 'Best in class',
                safety: 'Built-in moderation'
            },
            capabilities: ['Image Generation', 'Text Rendering', 'Style Control'],
            breakthrough: 'Accurate text in images'
        },
        {
            id: 'sora',
            name: 'Sora',
            company: 'OpenAI',
            category: 'Creative',
            icon: '🎬',
            description: 'Text-to-video model capable of generating realistic, minute-long videos.',
            releaseDate: '2024-02',
            latestVersion: 'Sora',
            metrics: {
                duration: 'Up to 60s',
                resolution: '1080p',
                physics: 'Realistic'
            },
            capabilities: ['Video Generation', 'Physics Simulation', 'Storytelling'],
            breakthrough: 'First coherent long-form video AI'
        },
        {
            id: 'midjourney',
            name: 'Midjourney',
            company: 'Midjourney',
            category: 'Creative',
            icon: '✨',
            description: 'Industry-leading aesthetic image generation with distinctive artistic style.',
            releaseDate: '2022-07',
            latestVersion: 'V6.1',
            metrics: {
                users: '16M+',
                images: '1B+ generated',
                style: 'Premium quality'
            },
            capabilities: ['Artistic Generation', 'Style Transfer', 'Upscaling'],
            breakthrough: 'Most aesthetically pleasing outputs'
        },
        {
            id: 'stable-diffusion',
            name: 'Stable Diffusion 3',
            company: 'Stability AI',
            category: 'Creative',
            icon: '🌀',
            description: 'Open-source image generation model with Diffusion Transformer architecture.',
            releaseDate: '2024-03',
            latestVersion: 'SD3.5 Large',
            metrics: {
                parameters: '8B',
                license: 'Open weights',
                textRendering: 'Improved'
            },
            capabilities: ['Open Source', 'Local Generation', 'Fine-tuning'],
            breakthrough: 'Best open-source image model'
        },
        {
            id: 'runway',
            name: 'Gen-3 Alpha',
            company: 'Runway',
            category: 'Creative',
            icon: '🎥',
            description: 'Professional video generation with fine-grained control for filmmakers.',
            releaseDate: '2024-06',
            latestVersion: 'Gen-3 Alpha Turbo',
            metrics: {
                duration: '10s clips',
                control: 'Motion brush',
                quality: 'Broadcast ready'
            },
            capabilities: ['Video Generation', 'Motion Control', 'Professional Tools'],
            breakthrough: 'Production-ready video AI'
        }
    ],

    // Code AI
    code: [
        {
            id: 'copilot',
            name: 'GitHub Copilot',
            company: 'Microsoft/GitHub',
            category: 'Code',
            icon: '🤖',
            description: 'AI pair programmer integrated into VS Code and popular IDEs.',
            releaseDate: '2021-06',
            latestVersion: 'Copilot X',
            metrics: {
                users: '1.3M+ paid',
                acceptance: '30% suggestions',
                languages: '60+'
            },
            capabilities: ['Code Completion', 'Chat', 'Documentation', 'Testing'],
            breakthrough: 'First mainstream AI coding assistant'
        },
        {
            id: 'cursor',
            name: 'Cursor',
            company: 'Cursor',
            category: 'Code',
            icon: '⚡',
            description: 'AI-first code editor built for pair programming with AI.',
            releaseDate: '2023-03',
            latestVersion: '0.40+',
            metrics: {
                users: '500K+',
                codebase: 'Full context',
                speed: 'Sub-second'
            },
            capabilities: ['Full Codebase Context', 'Multi-file Edits', 'Chat'],
            breakthrough: 'Codebase-aware AI editing'
        },
        {
            id: 'alphacode',
            name: 'AlphaCode 2',
            company: 'Google DeepMind',
            category: 'Code',
            icon: '💻',
            description: 'Competitive programming AI that ranks in top 15% of human contestants.',
            releaseDate: '2023-12',
            latestVersion: 'AlphaCode 2',
            metrics: {
                ranking: 'Top 15%',
                problems: 'Codeforces level',
                languages: 'Python, C++'
            },
            capabilities: ['Competitive Programming', 'Algorithm Design', 'Problem Solving'],
            breakthrough: 'Expert-level competitive coding'
        },
        {
            id: 'devin',
            name: 'Devin',
            company: 'Cognition',
            category: 'Code',
            icon: '👨‍💻',
            description: 'Fully autonomous AI software engineer capable of complex coding tasks.',
            releaseDate: '2024-03',
            latestVersion: '1.0',
            metrics: {
                autonomy: 'Full projects',
                swebench: '13.86%',
                tools: 'Browser, Terminal'
            },
            capabilities: ['Autonomous Coding', 'Debugging', 'Full Stack'],
            breakthrough: 'First autonomous AI engineer'
        }
    ],

    // Robotics & Hardware
    robotics: [
        {
            id: 'figure',
            name: 'Figure 02',
            company: 'Figure AI',
            category: 'Robotics',
            icon: '🤖',
            description: 'General-purpose humanoid robot with OpenAI language integration.',
            releaseDate: '2024-08',
            latestVersion: 'Figure 02',
            metrics: {
                dof: '50+',
                speed: '1.2 m/s',
                payload: '20 kg'
            },
            capabilities: ['Manipulation', 'Locomotion', 'Natural Language'],
            breakthrough: 'Commercial humanoid with AI brain'
        },
        {
            id: 'optimus',
            name: 'Optimus Gen 2',
            company: 'Tesla',
            category: 'Robotics',
            icon: '⚡',
            description: "Tesla's humanoid robot designed for manufacturing and household tasks.",
            releaseDate: '2023-12',
            latestVersion: 'Gen 2',
            metrics: {
                weight: '57 kg',
                speed: '1.3 m/s',
                hands: '22 DOF'
            },
            capabilities: ['Factory Work', 'Object Manipulation', 'Walking'],
            breakthrough: 'Production-designed humanoid'
        }
    ]
};

// Model categories for filtering
const MODEL_CATEGORIES = [
    { id: 'all', name: 'All Models', icon: '🌐' },
    { id: 'scientific', name: 'Scientific AI', icon: '🧬' },
    { id: 'language', name: 'Language Models', icon: '🧠' },
    { id: 'creative', name: 'Creative AI', icon: '🎨' },
    { id: 'code', name: 'Code AI', icon: '💻' },
    { id: 'robotics', name: 'Robotics', icon: '🤖' }
];

// Get all models as flat array
function getAllModels() {
    return Object.values(AI_MODELS).flat();
}

// Get models by category
function getModelsByCategory(category) {
    if (category === 'all') return getAllModels();
    return AI_MODELS[category] || [];
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AI_MODELS, MODEL_CATEGORIES, getAllModels, getModelsByCategory };
}
