export const categories = [
  { id: 'all', name: 'All Tools', icon: 'Grid3x3' },
  { id: 'writing', name: 'Writing', icon: 'PenTool' },
  { id: 'presentation', name: 'Presentation', icon: 'Presentation' },
  { id: 'design', name: 'Design', icon: 'Palette' },
  { id: 'video', name: 'Video', icon: 'Video' },
  { id: 'productivity', name: 'Productivity', icon: 'Zap' },
  { id: 'code', name: 'Code', icon: 'Code' },
  { id: 'marketing', name: 'Marketing', icon: 'TrendingUp' },
  { id: 'research', name: 'Research', icon: 'BookOpen' }
];

export const aiTools = [
  // Writing Tools
  {
    id: 1,
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for writing, brainstorming, and answering questions with natural conversations.',
    category: 'writing',
    tags: ['Content Creation', 'Writing', 'Chatbot'],
    pricing: 'Freemium',
    url: 'https://chat.openai.com',
    featured: true
  },
  {
    id: 2,
    name: 'Jasper AI',
    description: 'AI writing assistant for creating marketing copy, blog posts, and social media content quickly.',
    category: 'writing',
    tags: ['Copywriting', 'Marketing', 'Content'],
    pricing: 'Paid',
    url: 'https://jasper.ai',
    featured: false
  },
  {
    id: 3,
    name: 'Grammarly',
    description: 'AI-powered writing assistant that helps with grammar, spelling, and style improvements.',
    category: 'writing',
    tags: ['Grammar', 'Editing', 'Writing'],
    pricing: 'Freemium',
    url: 'https://grammarly.com',
    featured: false
  },
  {
    id: 4,
    name: 'Copy.ai',
    description: 'Generate marketing copy, product descriptions, and blog posts with AI assistance.',
    category: 'writing',
    tags: ['Copywriting', 'Marketing', 'Content'],
    pricing: 'Freemium',
    url: 'https://copy.ai',
    featured: false
  },
  {
    id: 5,
    name: 'QuillBot',
    description: 'AI-powered paraphrasing and summarization tool for rewriting and improving text.',
    category: 'writing',
    tags: ['Paraphrasing', 'Summarization', 'Writing'],
    pricing: 'Freemium',
    url: 'https://quillbot.com',
    featured: false
  },

  // Presentation Tools
  {
    id: 6,
    name: 'Gamma',
    description: 'Create beautiful presentations, documents, and websites with AI in seconds.',
    category: 'presentation',
    tags: ['Presentations', 'Design', 'Slides'],
    pricing: 'Freemium',
    url: 'https://gamma.app',
    featured: true
  },
  {
    id: 7,
    name: 'Beautiful.ai',
    description: 'AI-powered presentation software that designs slides automatically as you add content.',
    category: 'presentation',
    tags: ['Presentations', 'Design', 'Slides'],
    pricing: 'Paid',
    url: 'https://beautiful.ai',
    featured: false
  },
  {
    id: 8,
    name: 'Tome',
    description: 'AI storytelling format for creating immersive presentations and narratives.',
    category: 'presentation',
    tags: ['Presentations', 'Storytelling', 'Slides'],
    pricing: 'Freemium',
    url: 'https://tome.app',
    featured: false
  },
  {
    id: 9,
    name: 'Pitch',
    description: 'Collaborative presentation software with AI-powered design suggestions and templates.',
    category: 'presentation',
    tags: ['Presentations', 'Collaboration', 'Design'],
    pricing: 'Freemium',
    url: 'https://pitch.com',
    featured: false
  },
  {
    id: 10,
    name: 'Decktopus',
    description: 'AI presentation maker that creates professional slides from your content automatically.',
    category: 'presentation',
    tags: ['Presentations', 'Design', 'Automation'],
    pricing: 'Freemium',
    url: 'https://decktopus.com',
    featured: false
  },

  // Design Tools
  {
    id: 11,
    name: 'Midjourney',
    description: 'AI art generator creating stunning images from text descriptions and prompts.',
    category: 'design',
    tags: ['Image Generation', 'Art', 'Design'],
    pricing: 'Paid',
    url: 'https://midjourney.com',
    featured: true
  },
  {
    id: 12,
    name: 'Canva AI',
    description: 'Design platform with AI-powered features for creating graphics, presentations, and videos.',
    category: 'design',
    tags: ['Design', 'Graphics', 'Templates'],
    pricing: 'Freemium',
    url: 'https://canva.com',
    featured: false
  },
  {
    id: 13,
    name: 'DALL-E 3',
    description: 'OpenAI\'s advanced image generation AI that creates detailed images from text descriptions.',
    category: 'design',
    tags: ['Image Generation', 'AI Art', 'Design'],
    pricing: 'Paid',
    url: 'https://openai.com/dall-e-3',
    featured: false
  },
  {
    id: 14,
    name: 'Stable Diffusion',
    description: 'Open-source AI image generator for creating unique artwork and designs.',
    category: 'design',
    tags: ['Image Generation', 'Open Source', 'AI Art'],
    pricing: 'Free',
    url: 'https://stability.ai',
    featured: false
  },
  {
    id: 15,
    name: 'Looka',
    description: 'AI-powered logo and brand identity design platform for businesses.',
    category: 'design',
    tags: ['Logo Design', 'Branding', 'Business'],
    pricing: 'Paid',
    url: 'https://looka.com',
    featured: false
  },

  // Video Tools
  {
    id: 16,
    name: 'Runway ML',
    description: 'AI-powered video editing and generation tools for creators and filmmakers.',
    category: 'video',
    tags: ['Video Editing', 'AI Video', 'Creative'],
    pricing: 'Freemium',
    url: 'https://runwayml.com',
    featured: true
  },
  {
    id: 17,
    name: 'Descript',
    description: 'Edit videos by editing text. AI-powered transcription and video editing tool.',
    category: 'video',
    tags: ['Video Editing', 'Transcription', 'Audio'],
    pricing: 'Freemium',
    url: 'https://descript.com',
    featured: false
  },
  {
    id: 18,
    name: 'Synthesia',
    description: 'Create AI videos with virtual presenters and avatars without filming.',
    category: 'video',
    tags: ['AI Video', 'Avatars', 'Presentations'],
    pricing: 'Paid',
    url: 'https://synthesia.io',
    featured: false
  },
  {
    id: 19,
    name: 'HeyGen',
    description: 'AI video generator that creates personalized videos with AI avatars and voices.',
    category: 'video',
    tags: ['AI Video', 'Avatars', 'Marketing'],
    pricing: 'Paid',
    url: 'https://heygen.com',
    featured: false
  },
  {
    id: 20,
    name: 'Pictory',
    description: 'Turn long-form content into short branded videos using AI technology.',
    category: 'video',
    tags: ['Video Creation', 'Content', 'Marketing'],
    pricing: 'Paid',
    url: 'https://pictory.ai',
    featured: false
  },

  // Productivity Tools
  {
    id: 21,
    name: 'Notion AI',
    description: 'AI writing assistant integrated into Notion for notes, docs, and project management.',
    category: 'productivity',
    tags: ['Productivity', 'Writing', 'Organization'],
    pricing: 'Freemium',
    url: 'https://notion.so',
    featured: false
  },
  {
    id: 22,
    name: 'Otter.ai',
    description: 'AI meeting assistant that records, transcribes, and summarizes meetings automatically.',
    category: 'productivity',
    tags: ['Transcription', 'Meetings', 'Notes'],
    pricing: 'Freemium',
    url: 'https://otter.ai',
    featured: false
  },
  {
    id: 23,
    name: 'Mem',
    description: 'AI-powered note-taking app that organizes information automatically.',
    category: 'productivity',
    tags: ['Notes', 'Organization', 'Knowledge'],
    pricing: 'Freemium',
    url: 'https://mem.ai',
    featured: false
  },
  {
    id: 24,
    name: 'Motion',
    description: 'AI calendar assistant that automatically schedules your tasks and meetings.',
    category: 'productivity',
    tags: ['Calendar', 'Scheduling', 'Time Management'],
    pricing: 'Paid',
    url: 'https://usemotion.com',
    featured: false
  },
  {
    id: 25,
    name: 'Reclaim AI',
    description: 'Smart calendar assistant that defends your time and optimizes your schedule.',
    category: 'productivity',
    tags: ['Calendar', 'Productivity', 'Time Management'],
    pricing: 'Freemium',
    url: 'https://reclaim.ai',
    featured: false
  },

  // Code Tools
  {
    id: 26,
    name: 'GitHub Copilot',
    description: 'AI pair programmer that helps write code faster with intelligent suggestions.',
    category: 'code',
    tags: ['Coding', 'Development', 'AI Assistant'],
    pricing: 'Paid',
    url: 'https://github.com/features/copilot',
    featured: true
  },
  {
    id: 27,
    name: 'Cursor',
    description: 'AI-first code editor that helps you write, edit, and understand code faster.',
    category: 'code',
    tags: ['Code Editor', 'Development', 'AI'],
    pricing: 'Freemium',
    url: 'https://cursor.sh',
    featured: false
  },
  {
    id: 28,
    name: 'Replit AI',
    description: 'AI-powered collaborative coding platform for building and deploying applications.',
    category: 'code',
    tags: ['Coding', 'Development', 'Collaboration'],
    pricing: 'Freemium',
    url: 'https://replit.com',
    featured: false
  },
  {
    id: 29,
    name: 'Tabnine',
    description: 'AI code completion tool that learns from your coding patterns.',
    category: 'code',
    tags: ['Code Completion', 'Development', 'AI'],
    pricing: 'Freemium',
    url: 'https://tabnine.com',
    featured: false
  },
  {
    id: 30,
    name: 'Codeium',
    description: 'Free AI-powered code completion and search tool for developers.',
    category: 'code',
    tags: ['Code Completion', 'Development', 'Free'],
    pricing: 'Free',
    url: 'https://codeium.com',
    featured: false
  },

  // Marketing Tools
  {
    id: 31,
    name: 'Seventh Sense',
    description: 'AI-powered email delivery optimization for marketing automation platforms.',
    category: 'marketing',
    tags: ['Email Marketing', 'Optimization', 'Automation'],
    pricing: 'Paid',
    url: 'https://theseventhsense.com',
    featured: false
  },
  {
    id: 32,
    name: 'Phrasee',
    description: 'AI-powered copywriting for email subject lines, push notifications, and ads.',
    category: 'marketing',
    tags: ['Copywriting', 'Email', 'Marketing'],
    pricing: 'Paid',
    url: 'https://phrasee.co',
    featured: false
  },

  // Research Tools
  {
    id: 33,
    name: 'Perplexity AI',
    description: 'AI-powered research assistant that provides accurate answers with citations.',
    category: 'research',
    tags: ['Research', 'Search', 'Information'],
    pricing: 'Freemium',
    url: 'https://perplexity.ai',
    featured: false
  },
  {
    id: 34,
    name: 'Consensus',
    description: 'AI search engine for finding insights in scientific research papers.',
    category: 'research',
    tags: ['Research', 'Science', 'Papers'],
    pricing: 'Freemium',
    url: 'https://consensus.app',
    featured: false
  },
  {
    id: 35,
    name: 'Elicit',
    description: 'AI research assistant that helps analyze research papers and extract insights.',
    category: 'research',
    tags: ['Research', 'Analysis', 'Papers'],
    pricing: 'Freemium',
    url: 'https://elicit.org',
    featured: false
  }
];