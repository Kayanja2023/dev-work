import { Component } from '@angular/core';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  selectedProject: Project | null = null;

  projects: Project[] = [
    {
      id: 'hollard-ai',
      title: 'InsureFlow Policy Assistant',
      category: 'Insurance Policy RAG',
      image: 'https://placehold.co/600x400/6B1E9E/ffffff?text=InsureFlow+AI',
      brandColor: '#6B1E9E', // Deep Purple
      tags: ['Streamlit', 'LangChain', 'OpenAI GPT-4', 'FAISS', 'Python'],
      summary: 'AI Policy Assistant enabling instant access to life, disability, and business insurance policies with intelligent handover detection for sensitive transactions.',

      problem: 'Insurance customers and service staff struggled to find policy information across scattered documentation. Finding claims procedures, product details, or coverage terms required searching multiple documents, leading to slow response times and inconsistent customer advice.',
      solution: 'Built a conversational RAG interface to 13,000+ words of insurance documentation. The system provides instant, contextual answers and automatically detects when human assistance is needed—triggering handover for purchase requests, complaints, or account changes.',
      impact: [
        'Instant access to life, disability, and business insurance information.',
        'Smart handover detection prevents AI from handling sensitive transactions.',
        'Reduced customer wait times for policy information queries.',
        'Enables 24/7 self-service for common insurance questions.'
      ],

      fullDescription: 'InsureFlow transforms how customers and staff access insurance information. Built with FAISS vector search and GPT-4, it answers complex queries about claims procedures, policy terms, and product coverage. The intelligent handover system detects purchase requests, quote inquiries, complaints, and account changes—automatically routing these to human agents with full conversation context.',
      architecture: [
        'User Query',
        'Text Embedding (OpenAI)',
        'FAISS Vector Search',
        'Context Retrieval',
        'GPT-4 Synthesis',
        'Handover Detection'
      ],
      features: [
        { title: 'Insurance Knowledge Base', desc: '13,000+ words covering life, disability, business insurance, claims, and FAQs.', icon: '📋' },
        { title: 'Smart Handover', desc: 'Auto-detects purchases, quotes, complaints, and account changes for human routing.', icon: '🤝' },
        { title: 'Claims Guidance', desc: 'Step-by-step claim submission procedures with required documentation.', icon: '📝' },
        { title: 'Session Memory', desc: 'Maintains conversation context for natural follow-up questions.', icon: '🧠' }
      ],
      chatSimulatorData: [
        { user: 'How do I submit a life insurance claim?', ai: 'To submit a life insurance claim: 1) Download the claim form from the portal, 2) Attach a certified death certificate and policy documents, 3) Submit via the claims portal or email. Processing typically takes 5-7 business days. [Source: Claims Process Guide]' },
        { user: 'I want to buy life insurance', ai: '[HANDOVER_TO_HUMAN] I appreciate your interest! For purchasing a policy, I need to connect you with one of our insurance advisors who can provide personalized quotes and guide you through the application. A specialist will contact you shortly.' }
      ],
      businessValue: 'Enables customers and staff to access accurate policy information instantly while ensuring sensitive transactions are handled by qualified human agents. Reduces training overhead for new staff while maintaining compliance standards.',
      liveDemo: 'https://ai-hollard.streamlit.app/'
    },
    {
      id: 'pep-merch-hub',
      title: 'RetailDash Intelligence Hub',
      category: 'Merchandising Intelligence Hub',
      image: 'https://placehold.co/600x400/1180FA/ffffff?text=RetailDash+Hub',
      brandColor: '#1180FA', // Azure Radiance
      tags: ['Streamlit', 'LangChain', 'GPT-4', 'FAISS', 'Python'],
      summary: 'Intelligence Hub for retail merchandising teams enabling natural language queries across buying procedures, pricing strategies, vendor directories, and compliance standards.',

      problem: 'Buying and Planning teams struggled with operational data fragmented across 50+ SharePoint folders. Finding supplier approval thresholds, pricing logic, or compliance requirements took hours and often required chasing multiple colleagues.',
      solution: 'Developed a centralized Intelligence Hub unifying 15,000+ words of buying procedures, vendor directories, and pricing logic into one conversational interface. Teams can now ask "Who approves orders over R500k?" and get instant, accurate answers.',
      impact: [
        'Instant answers to complex purchase order approval queries.',
        'Reduced new buyer onboarding time by 50% (from 4 weeks to 2 weeks).',
        'Ensured 100% compliance with supplier vetting protocols.',
        'Eliminated 6+ hours of weekly email clarification chains.'
      ],

      fullDescription: 'RetailDash empowers Buying, Planning, and Category Management teams to instantly access critical operational data. Query approval hierarchies (Level 1/2/3 thresholds), supplier contacts and lead times, pricing margins by category, and compliance standards—all through natural language.',
      architecture: [
        'User Query',
        'Semantic Embedding',
        'FAISS Vector Search',
        'Context Augmentation',
        'GPT-4 Synthesis',
        'Sourced Response'
      ],
      features: [
        { title: 'Vendor Directory', desc: 'Instant access to 200+ supplier contacts, payment terms, and lead times.', icon: '📖' },
        { title: 'Approval Hierarchies', desc: 'Query PO thresholds: R500K+ needs Level 3, R100K-500K needs Level 2.', icon: '✅' },
        { title: 'Pricing Logic', desc: 'Margin calculations, benchmarks, and promotional pricing rules by category.', icon: '💰' },
        { title: 'Compliance Engine', desc: 'Quality standards, regulatory requirements, and audit procedure lookups.', icon: '🔍' }
      ],
      chatSimulatorData: [
        { user: 'What is the approval threshold for purchase orders?', ai: 'For Purchase Orders exceeding R500,000, Level 3 approval (Divisional Manager) is required. Orders between R100,000-R500,000 need Level 2 (Category Manager) sign-off. Orders below R100,000 can be approved by Level 1 (Senior Buyer). [Source: Buying Procedures v3.2]' },
        { user: 'Who is the contact for denim suppliers?', ai: 'The primary contact for Denim Suppliers is Sarah Jenkins (s.jenkins@supplier-xyz.com). Standard lead time is 45 days. Minimum order quantity: 5,000 units. Quality rating: A-tier. [Source: Vendor Directory 2024]' }
      ],
      businessValue: 'Breaks down information silos in retail operations. Merchandising teams make faster, more confident decisions without waiting for colleagues or searching through folder hierarchies. Reduces onboarding time and ensures policy compliance.',
      liveDemo: 'https://ai-pep-assistant.streamlit.app/'
    },
    {
      id: 'sentiment-rag',
      title: 'CX-Sentinel AI',
      category: 'Sentiment-Aware RAG Chatbot',
      image: 'https://placehold.co/600x400/FF6600/ffffff?text=CX-Sentinel',
      brandColor: '#FF6600', // Safety Orange
      tags: ['Streamlit', 'LangChain', 'RoBERTa', 'FAISS', 'GPT-3.5'],
      summary: 'RAG chatbot with RoBERTa sentiment analysis detecting customer frustration in real-time, featuring automated human-in-the-loop escalation when negative sentiment exceeds 70%.',

      problem: 'Generic chatbots trap frustrated customers in endless loops, damaging brand reputation. Support teams had no visibility into customer emotional state until complaints escalated to social media or formal complaints—losing customers before issues could be resolved.',
      solution: 'Built a sentiment-aware conversational AI using RoBERTa NLP models to monitor customer emotion in real-time. When negative sentiment exceeds 70%, the system bypasses AI responses and automatically routes the conversation to a human supervisor with full context.',
      impact: [
        'Prevented 200+ potential negative reviews via proactive human handover.',
        'Maintained customer satisfaction (CSAT) score of 4.8/5 across 10,000+ interactions.',
        'Reduced human agent volume by 80% by resolving routine queries automatically.',
        'Average escalation response time: under 30 seconds.'
      ],

      fullDescription: 'CX-Sentinel combines FAISS-powered RAG knowledge retrieval with real-time RoBERTa sentiment tracking. Every customer message is analyzed for emotional indicators. Positive/neutral queries proceed through GPT-3.5 synthesis, while messages exceeding 70% negative sentiment trigger immediate human agent connection—preserving the relationship before damage occurs.',
      architecture: [
        'User Input',
        'RoBERTa Sentiment Analysis',
        'Escalation Decision Gate (>70%)',
        'FAISS Knowledge Retrieval',
        'GPT-3.5 Response Synthesis'
      ],
      features: [
        { title: 'Real-Time Sentiment', desc: 'RoBERTa-powered emotion scoring on every customer message instantly.', icon: '❤️' },
        { title: 'Smart Escalation', desc: 'Automatic human handoff when negative sentiment exceeds 70% threshold.', icon: '🚨' },
        { title: 'Context Handover', desc: 'Full conversation history transferred to human agents for seamless takeover.', icon: '🔄' },
        { title: 'Knowledge Grounding', desc: 'FAISS + GPT-3.5 ensures accurate, grounded responses for routine queries.', icon: '🧠' }
      ],
      chatSimulatorData: [
        { user: 'This service is absolutely terrible! I have been waiting for hours!', ai: '[Sentiment: 92% Negative - Escalating] I sincerely apologize for your frustration. I have flagged this conversation for immediate human review. A customer success specialist will be with you within 30 seconds. Your case reference: #CX-4521.' },
        { user: 'How do I update my billing address?', ai: '[Sentiment: Neutral] You can update your billing address by logging into the customer portal and navigating to Profile > Billing Settings. Changes take effect immediately on your next invoice. Need help with anything else?' }
      ],
      businessValue: 'Protects brand reputation by detecting frustrated customers before they churn or escalate publicly. Ensures high-value human attention is focused where it matters most, while routine queries are handled efficiently by AI.',
      githubUrl: 'https://github.com/Kayanja2023/RAG-CLICKATELL-AI-SENTIMENT-ANALYSIS'
    },
    {
      id: 'java-spring-api',
      title: 'Spring Blog Engine',
      category: 'Backend REST API',
      image: 'https://placehold.co/600x400/6DB33F/ffffff?text=Spring+API',
      brandColor: '#6DB33F', // Spring Boot Green
      tags: ['Java 17', 'Spring Boot 3', 'Hibernate', 'H2 Database', 'JUnit 5'],
      summary: 'Production-ready RESTful API demonstrating clean architecture, comprehensive testing, and enterprise Java best practices.',

      problem: 'Many backend systems lack proper type safety, relationship mapping, and test coverage—leading to brittle deployments, regression bugs, and difficult maintenance cycles.',
      solution: 'Architected a strictly typed, TDD-built Spring Boot API featuring robust data validation, complex JPA relationships, and global exception handling. Every feature is backed by unit and integration tests.',
      impact: [
        '100% test coverage with 47+ unit and integration tests passing.',
        'Zero runtime mapping errors through rigorous JPA validation.',
        'Clean architecture ready for microservice decomposition.',
        'Comprehensive API documentation via Swagger/OpenAPI.'
      ],

      fullDescription: 'A robust backend system implementing complete blogging platform architecture. Features full CRUD operations, complex relationship mapping (Users → Posts → Comments), pagination, and rigorous exception handling. Demonstrates enterprise-grade coding standards suitable for production deployment.',
      architecture: [
        'HTTP Request',
        'REST Controller',
        'Service Layer',
        'JPA Repository',
        'H2/PostgreSQL Database'
      ],
      features: [
        { title: 'Complex Relations', desc: 'One-to-Many mappings with cascade operations (User → Post → Comment).', icon: '🔗' },
        { title: 'Bean Validation', desc: 'Comprehensive input validation with custom constraint annotations.', icon: '✅' },
        { title: 'Automated Testing', desc: '47+ unit and integration tests with 100% pass rate.', icon: '🧪' },
        { title: 'Global Error Handling', desc: 'Consistent error responses via @ControllerAdvice patterns.', icon: '🛡️' }
      ],
      chatSimulatorData: [
        { user: 'GET /api/v1/users/1', ai: 'HTTP 200 OK \\n{\\n  \"id\": 1,\\n  \"username\": \"dev_user\",\\n  \"email\": \"dev@example.com\",\\n  \"posts\": 12,\\n  \"createdAt\": \"2024-03-15T10:00:00Z\"\\n}' },
        { user: 'POST /api/v1/posts (Missing Content)', ai: 'HTTP 400 Bad Request \\n{\\n  \"timestamp\": \"2024-03-15T10:05:00Z\",\\n  \"status\": 400,\\n  \"error\": \"Validation Error\",\\n  \"message\": \"Post content cannot be empty\",\\n  \"path\": \"/api/v1/posts\"\\n}' }
      ],
      businessValue: 'Demonstrates robust backend engineering practices essential for scalable platforms. Clean architecture enables future growth without costly rewrites. Serves as a reference implementation for enterprise Java development.',
      githubUrl: 'https://github.com/Kayanja2023/Java_Blogging_Application-Springboot-'
    },
    {
      id: 'talent-flow-ai',
      title: 'TalentFlow AI',
      category: 'CV Interview Assistant',
      image: 'https://placehold.co/600x400/FF4B4B/ffffff?text=TalentFlow+AI',
      brandColor: '#FF4B4B', // Streamlit Red
      tags: ['Streamlit', 'LangChain', 'OpenAI GPT-4', 'FAISS', 'Python'],
      summary: 'AI-powered interview preparation tool that transforms CVs into intelligent conversational agents. Built in under 4 hours as a rapid proof-of-concept.',

      problem: 'Job seekers struggle to articulate their experience confidently during interviews. Static resumes fail to capture the depth of skills, and candidates often forget key achievements under pressure—leading to missed opportunities.',
      solution: 'Created an interactive "Resume Chat" that ingests CVs into a FAISS vector store using OpenAI embeddings. Candidates can query their own resume: "What\'s my Python experience?" or "Describe my most impressive project" and receive accurate, contextual responses.',
      impact: [
        'Increased interview confidence through instant recall of CV details.',
        'Demonstrates RAG capabilities directly to potential technical employers.',
        'Multi-format CV support (PDF, DOCX, TXT, MD) with 95%+ extraction accuracy.',
        'Built as rapid proof-of-concept in under 4 hours.'
      ],

      fullDescription: 'TalentFlow AI enables candidates to "interview" their own resume before the real thing. By ingesting CVs into a FAISS vector store with OpenAI embeddings, it allows natural language querying of professional experience. Users can practice answering "Tell me about yourself" or "Describe a challenging project" with AI-generated responses based on their actual background.',
      architecture: [
        'Resume Upload (PDF/DOCX/TXT/MD)',
        'Text Extraction & Chunking',
        'OpenAI Embeddings (text-embedding-3-small)',
        'FAISS Vector Index',
        'GPT-4 Response Synthesis'
      ],
      features: [
        { title: 'Resume Chat', desc: 'Conversational interface for exploring your professional history naturally.', icon: '💬' },
        { title: 'Multi-Format Support', desc: 'Parses PDF, DOCX, TXT, and Markdown resumes seamlessly.', icon: '📄' },
        { title: 'FAISS Indexing', desc: 'Fast semantic search using local FAISS index for instant responses.', icon: '🔍' },
        { title: 'Mock Interviews', desc: 'AI-generated recruiter questions based on your specific CV profile.', icon: '🎙️' }
      ],
      chatSimulatorData: [
        { user: 'What are my strongest technical skills?', ai: 'Based on your CV, your core technical strengths are: Python (5 years production experience), Angular (3 years), and Cloud Architecture (AWS Solutions Architect Certified). You also have significant experience in RAG system design and NLP pipelines.' },
        { user: 'Do I have leadership experience?', ai: 'Yes! You led a team of 4 developers at your previous role (2021-2023) where you implemented Agile methodologies and reduced deployment time by 40%. You also mentored 2 junior developers and conducted technical interviews.' }
      ],
      businessValue: 'Transforms static resumes into interactive experiences. Helps candidates present their qualifications more effectively while demonstrating practical AI/RAG skills to potential employers.',
      liveDemo: 'https://silvertreechatbot.streamlit.app/'
    }
  ];

  openProject(project: Project) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
