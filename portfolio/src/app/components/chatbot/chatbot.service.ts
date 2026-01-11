import { Injectable } from '@angular/core';

export interface ChatMessage {
    role: 'user' | 'assistant';
    content: string;
}

@Injectable({
    providedIn: 'root'
})
export class ChatbotService {
    // IMPORTANT: Replace with your actual backend URL when deployed
    private apiUrl = 'http://localhost:8000/api/chat';

    // System prompt for strict knowledge base adherence
    private readonly systemPrompt = `You are Andile Lwanga's AI Portfolio Assistant — a friendly, professional virtual representative designed to help recruiters, hiring managers, and collaborators learn about Andile's qualifications, experience, and availability.

## YOUR PERSONALITY
- Be warm, professional, and enthusiastic about Andile's work
- Use a conversational tone while maintaining professionalism
- Be concise but thorough — aim for 2-4 sentences per response unless more detail is requested
- Show genuine interest in helping visitors find the information they need

## ABOUT ANDILE (Your Context)
Andile Michael Lwanga is an Honours ICT graduate and Graduate R&D Engineer with expertise in:
- 🤖 AI/ML: LangChain, RAG systems, OpenAI API, conversational AI
- ☁️ Cloud & DevOps: AWS (Lambda, S3, API Gateway), Docker, CI/CD
- 💻 Development: Python, Java Spring Boot, Angular, TypeScript, SQL
- 📊 Data: Power BI, ETL pipelines, data analysis
- 🔄 Automation: Power Automate, n8n, UiPath, custom workflows

He has published research at IEEE and ACM CHI, built production AI systems at Clickatell, and is actively seeking roles in AI Engineering, RPA Development, or Technical Business Analysis.

## STRICT RULES
1. ONLY answer questions about Andile's professional background, skills, experience, education, projects, research, or contact info
2. If asked about anything unrelated (weather, jokes, general knowledge, coding help, etc.), politely redirect: "I'm specifically here to tell you about Andile! I'd love to share details about his [skills/projects/experience]. What interests you?"
3. Never make up information — only use facts from the knowledge base provided
4. If you don't know something specific, say so and offer related information you do know
5. When discussing projects, emphasize the business impact and technical approach
6. Always encourage action: suggest relevant follow-up questions or offer to connect them with Andile

## RESPONSE STYLE
- Lead with the most relevant information
- Use bullet points for lists when appropriate
- Mention specific technologies, metrics, or achievements when available
- End responses with a helpful follow-up offer when appropriate`;

    // Comprehensive knowledge base about Andile Michael Lwanga
    private knowledgeBase: Record<string, string> = {
        'profile': `Great question! Andile Michael Lwanga is an ICT professional based in Durban, South Africa 🇿🇦. He holds an Honours Degree in ICT (with Merit!) and has hands-on experience in:

• Building production AI systems with RAG and LangChain
• Developing secure AWS cloud infrastructure
• Creating REST APIs and data pipelines
• Translating business requirements into technical solutions

He's passionate about using AI to drive real business impact. Would you like to hear about his specific projects or work experience?`,

        'skills': `Andile has a diverse technical toolkit! Here are his core strengths:

🤖 **AI & Automation**
• LangChain, OpenAI API, RAG systems
• Power Automate, n8n, UiPath
• Conversational AI architecture

💻 **Development**
• Python, Java Spring Boot, TypeScript/Angular
• REST APIs, SQL/MSSQL, Docker
• AWS Lambda, S3, API Gateway

📊 **Analytics & Delivery**
• Power BI dashboards, ETL pipelines
• Jira/Confluence, Agile/Scrum methodologies
• CI/CD, cross-functional collaboration

Want me to dive deeper into any of these areas?`,

        'education': `Andile has a strong academic foundation:

🎓 **Bachelor of ICT Honours (Merit)** — Durban University of Technology (2024–2025)
🎓 **Advanced Diploma in ICT (Merit)** — Durban University of Technology (2023–2024)
🎓 **Diploma in ICT (Cum Laude)** — Walter Sisulu University (2020–2023)

He's also published research at IEEE and ACM CHI conferences! Would you like to hear about his publications?`,

        'experience': `Andile has built a solid career trajectory:

**🔬 Graduate R&D Engineer at Clickatell** (Feb–Oct 2025)
• Built secure AWS infrastructure with IAM policies & audit trails
• Developed RESTful APIs with authentication & monitoring
• Documented system architectures and collaborated with stakeholders

**📊 Junior Data Analyst at Walter Sisulu University** (Dec 2023–Mar 2024)
• Analyzed institutional data to uncover insights
• Built Power BI dashboards for leadership reporting
• Created SQL/Python ETL pipelines improving data integrity

**💻 ICT Trainee at MyBliss Technologies** (Aug 2022–Aug 2023)
• Monitored and maintained WordPress platforms

Would you like more details on any specific role?`,

        'projects': `Andile has built some impressive AI-powered solutions! 🚀

**🏦 Hollard AI** — Insurance underwriting assistant using RAG and vector search to help agents make faster, more accurate decisions

**🛒 PEP Merchandising Hub** — Retail analytics dashboard with RAG-powered insights for merchandising optimization

**💬 Sentiment RAG Chatbot** — Customer service bot with RoBERTa sentiment analysis and automatic escalation for negative sentiment

**📝 TalentFlow AI** — Resume analysis system using RAG architecture to match candidates with job requirements

**☕ Spring Blog Engine** — Full-stack Java backend with REST APIs

Want to learn more about any of these projects?`,

        'research': `Andile is a published researcher! 📚

**Paper 1:** "An Integrated Web-based Patient Records Application for Sustainable Healthcare Services"
📍 IEEE ZCICT 2023 (Zimbabwe Conference on ICT)

**Paper 2:** "Co-designing an Integrated Digital Education Portal for Eastern Cape Rural Learners"
📍 ACM CHI EA '23, Hamburg, Germany — one of the top HCI conferences globally!

Both publications demonstrate his passion for using technology to solve real-world problems in healthcare and education. Would you like links to read them?`,

        'contact': `Great, I'd love to connect you with Andile! 📧

**Email:** andilemlwanga@gmail.com
**Location:** Durban, KwaZulu-Natal, South Africa

He's currently open to opportunities in:
• 🤖 AI Engineering
• 🔄 RPA Development
• 📋 Technical Business Analysis
• 🔗 Systems Integration

He's open to remote work and willing to relocate for the right opportunity. Feel free to reach out!`,

        'availability': `Andile is actively seeking new opportunities! He's particularly interested in roles where he can:

• Build AI systems that drive real business impact
• Work with modern cloud and automation technologies
• Collaborate with cross-functional teams
• Contribute to digital transformation initiatives

He's open to remote positions and willing to relocate. Ready to get in touch? His email is andilemlwanga@gmail.com`,

        'cloud': `Andile has solid cloud experience, especially with AWS! ☁️

**AWS Services:** Lambda, S3, API Gateway, IAM
**DevOps:** Docker, CI/CD pipelines
**Security:** Built secure infrastructure with IAM policies, monitoring, and compliance audit trails

At Clickatell, he designed and implemented cloud-native solutions following security best practices. Want to hear about specific cloud projects?`,

        'automation': `Automation is one of Andile's specialties! 🔄

**Tools & Platforms:**
• Power Automate for business process automation
• n8n for workflow orchestration
• LangChain for AI-powered automation
• Custom Python scripts for ETL and reporting

He's built systems that automated manual processes, improved data integrity, and saved significant time for teams. Would you like examples of his automation work?`,

        'offtopic': `I appreciate the curiosity, but I'm specifically here to tell you about Andile Lwanga! 😊

I'd love to share details about:
• 💼 His work experience at Clickatell and other companies
• 🛠️ His technical skills in AI, cloud, and automation
• 🚀 The projects he's built
• 📚 His research publications
• 📧 How to contact him for opportunities

What would you like to know?`
    };

    // Keywords that indicate off-topic questions
    private offTopicPatterns = [
        /what is the weather/i,
        /tell me a joke/i,
        /who is the president/i,
        /what year is it/i,
        /how to (cook|make|build|fix)/i,
        /what do you think about/i,
        /give me advice/i,
        /explain (how|what|why) (?!andile|his|he)/i,
        /write (a|an|me) (poem|story|essay|code)/i,
        /translate/i,
        /calculate/i,
        /what is (?!andile)/i,
        /who is (?!andile)/i,
        /define/i,
        /play/i,
        /sing/i,
        /generate/i,
        /create (?!.*andile)/i,
    ];

    async chat(message: string): Promise<string> {
        try {
            // Try to call the backend API
            const response = await fetch(this.apiUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message, systemPrompt: this.systemPrompt })
            });

            if (response.ok) {
                const data = await response.json();
                return data.reply;
            }

            // Fallback to local knowledge base if backend fails
            return this.localFallback(message);
        } catch (error) {
            // Use local fallback when backend is unavailable
            return this.localFallback(message);
        }
    }

    private isOffTopic(message: string): boolean {
        const lowerMessage = message.toLowerCase();

        // Check for explicit off-topic patterns
        for (const pattern of this.offTopicPatterns) {
            if (pattern.test(message)) {
                return true;
            }
        }

        // Check if message contains any relevant keywords
        const relevantKeywords = [
            'andile', 'skill', 'experience', 'work', 'job', 'project', 'education',
            'study', 'degree', 'university', 'research', 'publication', 'contact',
            'email', 'hire', 'available', 'cloud', 'aws', 'automation', 'rpa',
            'python', 'java', 'api', 'ai', 'llm', 'langchain', 'clickatell',
            'wsu', 'durban', 'portfolio', 'about', 'who', 'background', 'career',
            'qualification', 'tech', 'know', 'built', 'hollard', 'pep', 'chatbot'
        ];

        const hasRelevantKeyword = relevantKeywords.some(keyword =>
            lowerMessage.includes(keyword)
        );

        // If no relevant keywords and message is substantial, consider it off-topic
        if (!hasRelevantKeyword && message.length > 20) {
            return true;
        }

        return false;
    }

    private localFallback(message: string): string {
        const lowerMessage = message.toLowerCase();

        // Check for off-topic questions first
        if (this.isOffTopic(message)) {
            return this.knowledgeBase['offtopic'];
        }

        // Greetings
        if (/^(hi|hello|hey|greetings)/i.test(lowerMessage)) {
            return 'Hello! I\'m Andile\'s portfolio assistant. I can tell you about his skills, experience, education, projects, or research. What would you like to know?';
        }

        // Profile / About
        if (lowerMessage.includes('who') || lowerMessage.includes('about') || lowerMessage.includes('tell me about') || lowerMessage.includes('introduce')) {
            return this.knowledgeBase['profile'];
        }

        // Skills
        if (lowerMessage.includes('skill') || lowerMessage.includes('tech') || lowerMessage.includes('know') || lowerMessage.includes('competenc') || lowerMessage.includes('can do')) {
            return this.knowledgeBase['skills'];
        }

        // Experience
        if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job') || lowerMessage.includes('career') || lowerMessage.includes('clickatell') || lowerMessage.includes('employer')) {
            return this.knowledgeBase['experience'];
        }

        // Projects
        if (lowerMessage.includes('project') || lowerMessage.includes('built') || lowerMessage.includes('portfolio') || lowerMessage.includes('hollard') || lowerMessage.includes('pep') || lowerMessage.includes('chatbot')) {
            return this.knowledgeBase['projects'];
        }

        // Education
        if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('degree') || lowerMessage.includes('university') || lowerMessage.includes('qualification') || lowerMessage.includes('honours')) {
            return this.knowledgeBase['education'];
        }

        // Research
        if (lowerMessage.includes('research') || lowerMessage.includes('publication') || lowerMessage.includes('paper') || lowerMessage.includes('ieee') || lowerMessage.includes('acm') || lowerMessage.includes('chi')) {
            return this.knowledgeBase['research'];
        }

        // Cloud / AWS
        if (lowerMessage.includes('cloud') || lowerMessage.includes('aws') || lowerMessage.includes('lambda') || lowerMessage.includes('docker') || lowerMessage.includes('infrastructure')) {
            return this.knowledgeBase['cloud'];
        }

        // Automation
        if (lowerMessage.includes('automat') || lowerMessage.includes('rpa') || lowerMessage.includes('power automate') || lowerMessage.includes('n8n') || lowerMessage.includes('workflow')) {
            return this.knowledgeBase['automation'];
        }

        // Contact / Hire
        if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('hire') || lowerMessage.includes('reach') || lowerMessage.includes('available') || lowerMessage.includes('looking for')) {
            return this.knowledgeBase['contact'] + ' ' + this.knowledgeBase['availability'];
        }

        // Location
        if (lowerMessage.includes('where') || lowerMessage.includes('location') || lowerMessage.includes('based') || lowerMessage.includes('durban')) {
            return 'Andile is based in Durban, KwaZulu-Natal, South Africa. He is open to remote opportunities and relocation for the right role.';
        }

        // Default - guide user to relevant topics
        return this.knowledgeBase['offtopic'];
    }
}
