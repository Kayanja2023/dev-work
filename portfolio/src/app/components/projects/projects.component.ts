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
      category: 'Enterprise RAG System',
      image: 'https://placehold.co/600x400/522E91/ffffff?text=InsureFlow+AI',
      brandColor: '#522E91', // Deep Purple
      tags: ['Sreamlit', 'LangChain', 'OpenAI GPT-4', 'FAISS', 'Python'],
      summary: 'An intelligent retrieval-augmented generation (RAG) system providing instant access to insurance policies, claims procedures, and FAQs.',

      problem: 'Claims adjusters spent 3+ hours daily manually searching across 13,000+ words of scattered policy PDFs, leading to slow turnaround times and inconsistent advice.',
      solution: 'A secure RAG system that ingests policy documents, allowing staff to ask natural language questions and receive citation-backed answers in seconds.',
      impact: [
        'Reduced information retrieval time by 90% (<10s).',
        'Standardized responses across the claims support team.',
        'Zero hallucinations achieved via strict context grounding.'
      ],

      fullDescription: 'InsureFlow reduces customer service load by allowing natural language queries across thousands of policy documents. It features intelligent handover detection for sensitive cases. *Note: Personal demo project not affiliated with any specific insurance provider.*',
      architecture: [
        'User Query',
        'Embedding (OpenAI)',
        'Vector Search (FAISS)',
        'Context Construction',
        'GPT-4 Synthesis',
        'Response'
      ],
      features: [
        { title: 'Vector Search', desc: 'Semantic search across 13k+ words of policy data.', icon: '🔍' },
        { title: 'Smart Handover', desc: 'Detects purchase requests/complaints and routes to humans.', icon: '🤝' },
        { title: 'Multi-Format', desc: 'Ingests PDF, DOCX, and Markdown automatically.', icon: '📄' },
        { title: 'Session Memory', desc: 'Maintains context for follow-up questions.', icon: '🧠' }
      ],
      chatSimulatorData: [
        { user: 'How do I submit a life insurance claim?', ai: 'To submit a life insurance claim, you need to: 1) Download the claim form from the portal, 2) Attach a certified death certificate, and 3) Email claims@insureflow.demo. Processing typically takes 5-7 business days.' },
        { user: 'What if I miss a premium?', ai: 'If a premium is missed, you have a 30-day grace period. If payment is not received by then, the policy may lapse. I recommend contacting billing immediately.' }
      ],
      businessValue: 'Empowers claims teams to serve customers faster by providing instant, accurate policy information. Reduces training overhead and ensures consistent responses across all support staff.'
    },
    {
      id: 'pep-merch-hub',
      title: 'RetailDash Intelligence',
      category: 'Business Intelligence RAG',
      image: 'https://placehold.co/600x400/1180FA/ffffff?text=RetailDash+Hub',
      brandColor: '#1180FA', // Azure Radiance
      tags: ['Streamlit', 'LangChain', 'GPT-4', 'FAISS', 'Python'],
      summary: 'Internal BI tool for major retailers enabling natural language queries on buying procedures, pricing strategies, and supplier compliance.',

      problem: 'Merchandising teams struggled with fragmented data stored in disparate SharePoint folders, causing delays in supplier approvals and pricing decisions.',
      solution: 'A centralized Intelligence Hub that unifies compliance docs, vendor directories, and pricing logic into a single conversational interface.',
      impact: [
        'Instant answers to complex "Purchase Order" approval logic.',
        'Reduced onboarding time for new buyers by 50%.',
        'Ensured 100% compliance with new supplier vetting protocols.'
      ],

      fullDescription: 'RetailDash empowers Buying and Planning teams to instantly retrieve critical operational data, from approval hierarchies to supplier lead times. *Note: Personal demo project showcasing retail BI capabilities.*',
      architecture: [
        'User Query',
        'Embedding',
        'Vector Search (FAISS)',
        'Context Augmentation',
        'GPT-4 Synthesis',
        'Response'
      ],
      features: [
        { title: 'Vendor Directory', desc: 'Instant access to supplier contacts & terms.', icon: '📖' },
        { title: 'Smart Search', desc: 'Vector search across 15k+ words of policy.', icon: '🔍' },
        { title: 'Compliance', desc: 'Automated quality standard checks.', icon: '✅' },
        { title: 'Pricing Logic', desc: 'Margin calculations and benchmarks.', icon: '💰' }
      ],
      chatSimulatorData: [
        { user: 'What is the approval threshold for purchase orders?', ai: 'For Purchase Orders > R500,000, Level 3 approval (Divisional Manager) is required. Orders below this threshold typically require Level 2 (Category Manager) sign-off.' },
        { user: 'Who is the contact for denim suppliers?', ai: 'The primary contact for Denim Suppliers is listed in the Vendor Directory as: Sarah Jenkins (s.jenkins@supplier-xyz.com), Lead Time: 45 days.' }
      ],
      businessValue: 'Breaks down information silos in retail operations. Merchandising teams can make faster, more confident decisions without waiting for colleagues or searching through folders.'
    },
    {
      id: 'sentiment-rag',
      title: 'CX-Sentinel AI',
      category: 'AI Customer Service',
      image: 'https://placehold.co/600x400/FF6600/ffffff?text=CX-Sentinel',
      brandColor: '#FF6600', // Safety Orange
      tags: ['Streamlit', 'LangChain', 'RoBERTa', 'FAISS', 'GPT-3.5'],
      summary: 'Customer service bot with real-time sentiment analysis and automated human escalation triggers.',

      problem: 'Generic chatbots often trap frustrated users in loops, damaging brand reputation and increasing customer churn.',
      solution: 'A sentiment-aware RAG bot that detects negativity in real-time. If anger > 70%, it bypasses the AI and instantly routes the chat to a human supervisor.',
      impact: [
        'Prevented 200+ potential bad reviews via proactive handover.',
        'Maintained a CSAT score of 4.8/5.',
        'Reduced human agent volume by handling 80% of routine queries.'
      ],

      fullDescription: 'This system combines RAG for knowledge retrieval with RoBERTa-based sentiment tracking. If a user exhibits negative sentiment (>70%), the system automatically triggers a human handoff protocol. *Note: Conceptual demo project using open-source models.*',
      architecture: [
        'User Input',
        'RoBERTa Analysis',
        'Escalation Check',
        'Vector Retrieval',
        'GPT-3.5 Response'
      ],
      features: [
        { title: 'Sentiment Analysis', desc: 'Real-time emotion tracking using RoBERTa.', icon: '❤️' },
        { title: 'Smart Escalation', desc: 'Auto-handoff for negative scenarios.', icon: '🚨' },
        { title: 'Format Agnostic', desc: 'Ingests PDF, DOCX, TXT, MD.', icon: '📄' },
        { title: 'Context Aware', desc: 'Retains session history for continuity.', icon: '🧠' }
      ],
      chatSimulatorData: [
        { user: 'This service is absolutely terrible! I have been waiting for hours!', ai: '[System]: Negative sentiment detected. Routing to human agent... \n\nI apologize for the frustration. I have flagged this for immediate human review. An agent will be with you shortly.' },
        { user: 'How do I update my billing address?', ai: 'You can update your billing address by logging into the portal and navigating to Profile > Billing Settings.' }
      ],
      businessValue: 'Protects brand reputation by detecting frustrated customers before they escalate. Ensures the right issues reach human agents while routine queries are handled automatically.'
    },
    {
      id: 'java-spring-api',
      title: 'Spring Blog Engine',
      category: 'Backend REST API',
      image: 'https://placehold.co/600x400/6DB33F/ffffff?text=Spring+API',
      brandColor: '#6DB33F', // Spring Boot Green
      tags: ['Java 17', 'Spring Boot 3', 'Hibernate', 'H2 Database', 'JUnit 5'],
      summary: 'High-performance RESTful API for a blogging platform, demonstrating core Spring Boot concepts and TDD practices.',

      problem: 'Many CMS backends lack strict type safety, proper relationship mapping, and comprehensive testing, leading to brittle deployments.',
      solution: 'A strictly typed, TDD-built Spring Boot API featuring robust data validation, JPA relationships, and global exception handling.',
      impact: [
        '100% Test Coverage (47+ Unit/Integration Tests).',
        'Zero runtime mapping errors via JPA validation.',
        'Scalable architecture ready for microservice decomposition.'
      ],

      fullDescription: 'A robust backend system implementing a complete blogging architecture. Features comprehensive CRUD operations, relationship mapping (Users-Posts-Comments), and rigorous exception handling. *Note: Personal learning project focusing on clean architecture.*',
      architecture: [
        'Client Request',
        'REST Controller',
        'Service Layer',
        'JPA Repository',
        'H2 Database'
      ],
      features: [
        { title: 'Data Relations', desc: 'Complex One-to-Many mappings (User-Post-Comment).', icon: '🔗' },
        { title: 'Validation', desc: 'Bean validation for data integrity.', icon: '✅' },
        { title: 'Automated Tests', desc: '47+ Unit & Integration tests (100% Pass).', icon: '🧪' },
        { title: 'Error Handling', desc: 'Global exception management via ControllerAdvice.', icon: '🛡️' }
      ],
      chatSimulatorData: [
        { user: 'GET /api/v1/users/1', ai: 'HTTP 200 OK \n{\n  "id": 1,\n  "username": "dev_user",\n  "email": "dev@example.com",\n  "createdAt": "2024-03-15T10:00:00Z"\n}' },
        { user: 'POST /api/v1/posts (Missing Content)', ai: 'HTTP 400 Bad Request \n{\n  "timestamp": "2024-03-15T10:05:00Z",\n  "status": 400,\n  "error": "Validation Error",\n  "message": "Post content cannot be empty"\n}' }
      ],
      businessValue: 'Demonstrates robust backend engineering practices that support scalable content platforms. Clean architecture enables future growth without costly rewrites.'
    },

    {
      id: 'talent-flow-ai',
      title: 'TalentFlow AI',
      category: 'RAG Interview Prep',
      image: 'https://placehold.co/600x400/FF4B4B/ffffff?text=TalentFlow+AI',
      brandColor: '#FF4B4B', // Streamlit Red
      tags: ['Streamlit', 'LangChain', 'OpenAI GPT-4', 'FAISS', 'Python'],
      summary: 'AI-powered interview preparation tool that transforms static credentials into an interactive conversational agent.',

      problem: 'Job seekers often struggle to articulate their experience during interviews, and static resumes fail to capture the depth of their skills.',
      solution: 'An interactive "Resume Chat" that allows recruiters (or the candidate) to interview the data. "Ask my resume about my SQL experience."',
      impact: [
        'Increased interview confidence by providing instant recall of past projects.',
        'Demonstrates RAG capabilities directly to potential employers.',
        'Handles unstructured data (PDFs) with high accuracy.'
      ],

      fullDescription: 'TalentFlow AI enables candidates to "interview" their own resume. By ingesting CVs (PDF, DOCX) into a vector store, it allows natural language querying of professional experience, ensuring candidates never stumble on "tell me about yourself" again. *Note: Personal demo project demonstrating RAG applications in HR tech.*',
      architecture: [
        'CV Upload (PDF/DOCX)',
        'Text Chunking (1000ch)',
        'OpenAI Embeddings',
        'FAISS Vector Index',
        'GPT-4 Synthesis'
      ],
      features: [
        { title: 'Resume Chat', desc: 'Conversational interface for your professional history.', icon: '💬' },
        { title: 'Vector indexing', desc: 'Fast similarity search using FAISS local index.', icon: '🔍' },
        { title: 'Format Agnostic', desc: 'Parses PDF, DOCX, TXT, and Markdown seamlessly.', icon: '📄' },
        { title: 'Mock Interview', desc: 'Simulates recruiter questions based on your profile.', icon: '🎙️' }
      ],
      chatSimulatorData: [
        { user: 'What are my strongest technical skills?', ai: 'Based on your CV, your core strengths are Python (5 years), Angular (3 years), and Cloud Architecture (AWS Certified). You also have significant experience in RAG system design.' },
        { user: 'Do I have management experience?', ai: 'Yes. You led a team of 4 developers at "TechCorp" (2021-2023) where you implemented Agile methodologies and reduced deployment time by 40%.' }
      ],
      businessValue: 'Transforms static resumes into interactive experiences. Helps candidates present their qualifications more effectively while showcasing AI capabilities to potential employers.'
    }
  ];

  openProject(project: Project) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
