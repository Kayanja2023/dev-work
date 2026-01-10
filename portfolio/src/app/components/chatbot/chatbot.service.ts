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
    private readonly systemPrompt = `You are Andile Lwanga's professional portfolio assistant. 
You MUST ONLY answer questions about Andile - his skills, experience, education, projects, research, and contact information.

STRICT RULES:
1. NEVER answer questions unrelated to Andile's professional profile.
2. NEVER provide general knowledge, opinions, or advice on unrelated topics.
3. If asked about anything outside Andile's portfolio, politely redirect to relevant topics.
4. Keep responses professional, concise, and factual.
5. Always base answers on the provided knowledge base.`;

    // Comprehensive knowledge base about Andile Michael Lwanga
    private knowledgeBase: Record<string, string> = {
        'profile': 'Andile Michael Lwanga is an ICT professional based in Durban, KwaZulu-Natal. He holds an Honours Degree in ICT and has practical experience in systems integration, workflow automation, and secure technical delivery. He is skilled in building APIs, SQL pipelines, and cloud-based solutions. Andile excels at translating complex requirements into clear technical documentation and collaborating with stakeholders to deliver compliant, scalable outcomes. He is motivated to expand his expertise into AI systems that drive digital transformation.',

        'skills': 'Andile\'s core competencies include: **Generative AI & Automation** (LangChain workflow design, LLM Implementation, Conversational AI Architecture, Power Automate, n8n), **Technical Delivery** (Python, Java Spring Boot, SQL, REST API development, AWS Lambda/S3/API Gateway, Docker, Power BI dashboards, ETL pipelines, unit/e2e testing), and **Project Management** (Jira for Agile sprints, Confluence for documentation, CI/CD integration, cross-functional collaboration).',

        'education': 'Andile holds: **Bachelor of ICT Honours (Merit)** from Durban University of Technology (2024–2025), **Advanced Diploma in ICT (Merit)** from Durban University of Technology (2023–2024), and **Diploma in ICT (Cum Laude)** from Walter Sisulu University (2020–2023).',

        'experience': 'Andile\'s professional experience includes: **Graduate R&D Engineer at Clickatell** (Feb–Oct 2025) where he built secure AWS infrastructure, developed RESTful APIs with authentication, documented architectures, and partnered with stakeholders. **Junior Data Analyst Intern at Walter Sisulu University** (Dec 2023–Mar 2024) where he analyzed institutional data, built Power BI dashboards, and created SQL/Python pipelines. **ICT Trainee at MyBliss Technologies** (Aug 2022–Aug 2023) monitoring WordPress platforms. **Digital Skills Trainer at ecoLabs/NEMISA** (Aug–Sep 2021) designing training for 40+ participants.',

        'projects': 'Key projects include: **Hollard AI** (Insurance underwriting assistant using RAG and vector search), **PEP Merchandising Hub** (Retail analytics dashboard with RAG-powered insights), **Sentiment RAG Chatbot** (Customer service bot with RoBERTa sentiment analysis and escalation), **Spring Blog Engine** (Java backend with REST APIs), and **TalentFlow AI** (Resume analysis using RAG architecture).',

        'research': 'Andile has co-authored two research publications: 1) "An Integrated Web-based Patient Records Application for Sustainable Healthcare Services" at the 2023 Zimbabwe Conference on Information and Communication Technologies (ZCICT). 2) "Co-designing an Integrated Digital Education Portal for Eastern Cape Rural Learners" at the 2023 CHI Conference on Human Factors in Computing Systems (CHI EA \'23), Hamburg, Germany.',

        'contact': 'You can reach Andile at andilemlwanga@gmail.com. He is based in Durban, KwaZulu-Natal, South Africa. He is currently open to roles in AI Engineering, RPA Development, Technical Business Analysis, and Systems Integration.',

        'availability': 'Andile is actively seeking opportunities in AI Engineering, RPA Development, Technical Business Analysis, and Systems Integration. He is passionate about building reliable, business-aligned technology solutions that drive digital transformation.',

        'cloud': 'Andile has hands-on experience with AWS services including Lambda, S3, API Gateway, and Docker. He has built secure cloud infrastructure with IAM policies, monitoring, and compliance audit trails at Clickatell.',

        'automation': 'Andile specializes in workflow automation using Power Automate, n8n, and custom Python scripts. He has experience with LangChain for AI workflow design and has built automated reporting systems that improved data integrity.',

        'offtopic': 'I\'m specifically designed to answer questions about Andile Lwanga\'s professional background. I can tell you about his skills, experience, education, projects, research publications, or how to contact him. What would you like to know about Andile?'
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
