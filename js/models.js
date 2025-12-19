/**
 * AIRace - AI Models & Tools Data
 * Breakthrough AI models and specialized tools tracking - Updated Dec 2025
 */

const AI_MODELS = {
    // Scientific AI
    scientific: [
        {
            id: 'alphafold',
            name: 'AlphaFold 4',
            company: 'Google DeepMind',
            category: 'Scientific',
            icon: '🧬',
            description: 'Universal biomolecular prediction including unified DNA/RNA/Ligand support.',
            releaseDate: '2025-05',
            latestVersion: 'AlphaFold 4',
            metrics: {
                accuracy: '99.2%',
                impact: 'Full Cell Sim',
                citations: '25,000+'
            },
            capabilities: ['Whole Cell Modeling', 'Drug Interaction', 'Dynamics'],
            breakthrough: 'First dynamic simulation of complex cellular machinery'
        },
        {
            id: 'gnome',
            name: 'Gnome',
            company: 'Google DeepMind',
            category: 'Scientific',
            icon: '🧪',
            description: 'General purpose materials discovery agent that autonomously runs wet-lab experiments.',
            releaseDate: '2025-12',
            latestVersion: '1.0',
            metrics: {
                discoveries: '4 Crystals',
                autonomy: 'Level 4',
                efficiency: '1000x human'
            },
            capabilities: ['Material Science', 'Lab Automation', 'Synthesis Planning'],
            breakthrough: 'Autonomous discovery of stable materials'
        },
        {
            id: 'biomistral',
            name: 'BioMistral 2',
            company: 'Mistral AI',
            category: 'Scientific',
            icon: '⚕️',
            description: 'Open-weights medical foundation model optimized for clinical edge deployment.',
            releaseDate: '2025-08',
            latestVersion: '2.0',
            metrics: {
                usmle: '92.5%',
                context: '1M tokens',
                size: '14B params'
            },
            capabilities: ['Clinical Notes', 'Diagnosis Support', 'Edge Run'],
            breakthrough: 'Expert medical reasoning on laptop GPU'
        }
    ],

    // Large Language Models
    language: [
        {
            id: 'gpt5',
            name: 'GPT-5',
            company: 'OpenAI',
            category: 'Language',
            icon: '🧠',
            description: 'The first "Ph.D. level" general intelligence with deep reasoning and agentic persistence.',
            releaseDate: '2025-12',
            latestVersion: 'GPT-5',
            metrics: {
                parameters: 'Unknown',
                swebench: '95%',
                iq: '145 (est)'
            },
            capabilities: ['Deep Research', 'Autonomous Coding', 'Long-horizon Planning'],
            breakthrough: 'Reliable agentic behavior for days'
        },
        {
            id: 'claude4',
            name: 'Claude 4',
            company: 'Anthropic',
            category: 'Language',
            icon: '🎭',
            description: 'Opus-tier model with "Character" training for unprecedented nuance and writing quality.',
            releaseDate: '2025-11',
            latestVersion: 'Claude 4 Opus',
            metrics: {
                context: '2M tokens',
                hallucination: '<1%',
                writing: 'Pro Author'
            },
            capabilities: ['Novel Writing', 'Legal Analysis', 'Complex Coding'],
            breakthrough: 'Near-zero hallucination on diverse facts'
        },
        {
            id: 'gemini3',
            name: 'Gemini 3.0',
            company: 'Google DeepMind',
            category: 'Language',
            icon: '♊',
            description: 'Native omnipresent multimodal model integrating Search, YouTube, and Workspace.',
            releaseDate: '2025-09',
            latestVersion: 'Gemini 3.0 Ultra',
            metrics: {
                modalities: 'Any-to-Any',
                context: '10M tokens',
                latency: 'Real-time'
            },
            capabilities: ['Real-time Voice/Video', 'Personal Context', 'Action Execution'],
            breakthrough: '10M token context with <50ms latency'
        },
        {
            id: 'llama5',
            name: 'Llama 5',
            company: 'Meta AI',
            category: 'Language',
            icon: '🦙',
            description: 'Massive 405B dense model released as open weights, matching previous closed frontiers.',
            releaseDate: '2025-10',
            latestVersion: '405B Instruct',
            metrics: {
                parameters: '405B',
                license: 'Open Weights',
                tokens: '128K'
            },
            capabilities: ['Open Research', 'Distillation', 'Enterprise Hosting'],
            breakthrough: 'SOTA performance in open weights'
        }
    ],

    // Creative AI
    creative: [
        {
            id: 'sora2',
            name: 'Sora 2.0',
            company: 'OpenAI',
            category: 'Creative',
            icon: '🎬',
            description: 'Full-length movie generation with consistent characters and audio.',
            releaseDate: '2025-11',
            latestVersion: '2.0',
            metrics: {
                duration: '5 minutes',
                resolution: '4K',
                audio: 'Lip-sync'
            },
            capabilities: ['Movie Gen', 'Sound Design', 'Character Consistency'],
            breakthrough: 'Coherent 5-minute narratives'
        },
        {
            id: 'veo2',
            name: 'Veo 2',
            company: 'Google DeepMind',
            category: 'Creative',
            icon: '🎥',
            description: 'High-fidelity 1080p video generation integrated into YouTube creators studio.',
            releaseDate: '2025-06',
            latestVersion: '2.0',
            metrics: {
                speed: 'Real-time',
                control: 'Director Mode',
                resolution: '1080p60'
            },
            capabilities: ['Video Editing', 'In-painting', 'Style Transfer'],
            breakthrough: 'Real-time video generation'
        },
        {
            id: 'midjourney7',
            name: 'Midjourney v7',
            company: 'Midjourney',
            category: 'Creative',
            icon: '✨',
            description: 'Hyper-realistic photography and 3D model generation with perfect text.',
            releaseDate: '2025-08',
            latestVersion: 'v7',
            metrics: {
                detail: 'Macro lens',
                '3d': 'OBJ export',
                text: 'Perfect'
            },
            capabilities: ['3D Assets', 'Texture Gen', 'hyper-realism'],
            breakthrough: 'Indistinguishable from reality'
        }
    ],

    // Code AI
    code: [
        {
            id: 'operator',
            name: 'Operator',
            company: 'OpenAI',
            category: 'Code',
            icon: '👨‍💻',
            description: 'Autonomous computer-using agent that can perform end-to-end dev work.',
            releaseDate: '2025-01',
            latestVersion: 'Pro',
            metrics: {
                success: '95% tasks',
                context: 'Desktop',
                security: 'Sandboxed'
            },
            capabilities: ['Browser Use', 'Terminal', 'App Control', 'Coding'],
            breakthrough: 'Reliable computer use'
        },
        {
            id: 'copilot-workspace',
            name: 'Copilot Workspace',
            company: 'GitHub',
            category: 'Code',
            icon: '🤖',
            description: 'AI-native developer environment where specs turn into PRs automatically.',
            releaseDate: '2025-04',
            latestVersion: 'GA',
            metrics: {
                adoption: '5M devs',
                speed: '10x faster',
                reviews: 'Auto-fix'
            },
            capabilities: ['Issue-to-PR', 'System Design', 'Auto-Review'],
            breakthrough: 'Spec-driven development'
        },
        {
            id: 'devin2',
            name: 'Devin 2.0',
            company: 'Cognition',
            category: 'Code',
            icon: '⚡',
            description: 'Second-generation AI engineer that collaborates in Slack and joins meetings.',
            releaseDate: '2025-09',
            latestVersion: '2.0',
            metrics: {
                swebench: '82%',
                collab: 'Voice/Text',
                memory: 'Infinite'
            },
            capabilities: ['Team Collab', 'Architecture', 'Maintenance'],
            breakthrough: 'AI that acts as a teammate'
        }
    ],

    // Robotics & Hardware
    robotics: [
        {
            id: 'optimus-gen3',
            name: 'Optimus Gen 3',
            company: 'Tesla',
            category: 'Robotics',
            icon: '🤖',
            description: 'Mass-producible humanoid robot working in Gigafactories autonomously.',
            releaseDate: '2025-11',
            latestVersion: 'Gen 3',
            metrics: {
                price: '<$25k',
                battery: '8 hours',
                dof: 'Full Hand'
            },
            capabilities: ['Assembly', 'Household', 'Navigation'],
            breakthrough: 'First commercial deployment at scale'
        },
        {
            id: 'gr00t',
            name: 'Project GR00T',
            company: 'NVIDIA',
            category: 'Robotics',
            icon: '🦾',
            description: 'Foundation model for humanoid robot learning and simulation.',
            releaseDate: '2025-03',
            latestVersion: 'v1.0',
            metrics: {
                sim: '1M hrs/day',
                transfer: 'Zero-shot',
                robots: 'Universal'
            },
            capabilities: ['Sim-to-Real', 'Imitation Learning', 'Universal Control'],
            breakthrough: 'General purpose robot brain'
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
