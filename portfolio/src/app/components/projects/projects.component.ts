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
      title: 'Hollard AI Policy Assistant',
      category: 'Enterprise RAG System',
      image: 'https://placehold.co/600x400/0066FF/ffffff?text=Hollard+AI', // Placeholder
      tags: ['Sreamlit', 'LangChain', 'OpenAI GPT-4', 'FAISS', 'Python'],
      summary: 'An intelligent retrieval-augmented generation (RAG) system providing instant access to insurance policies, claims procedures, and FAQs.',
      fullDescription: 'The Hollard AI Policy Assistant reduces customer service load by allowing natural language queries across thousands of policy documents. It features intelligent handover detection for sensitive cases.',
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
        { user: 'How do I submit a life insurance claim?', ai: 'To submit a life insurance claim, you need to: 1) Download the claim form from the portal, 2) Attach a certified death certificate, and 3) Email claims@hollard.co.za. Processing typically takes 5-7 business days.' },
        { user: 'What if I miss a premium?', ai: 'If a premium is missed, you have a 30-day grace period. If payment is not received by then, the policy may lapse. I recommend contacting billing immediately.' }
      ]
    },
    {
      id: 'neon-analytics',
      title: 'Neon Analytics',
      category: 'Real-Time Dashboard',
      tags: ['Angular', 'D3.js', 'Firebase'],
      summary: 'High-performance visualization platform for DeFi protocols tracking real-time asset flows.',
      fullDescription: 'Neon Analytics visualizes complex blockchain data in real-time.',
      architecture: ['Data Stream', 'Normalization', 'D3 Rendering'],
      features: [
        { title: 'Real-Time', desc: 'Websocket connections for live updates.', icon: '⚡' },
        { title: 'Interactive', desc: 'Zoomable, pannable charts.', icon: '📊' }
      ]
    },
    {
      id: 'zen-focus',
      title: 'Zen Focus',
      category: 'Productivity App',
      tags: ['Ionic', 'Audio API'],
      summary: 'Mobile productivity timer with generative ambient soundscapes.',
      fullDescription: 'Zen Focus helps users maintain flow state using Pomodoro timers.',
      architecture: ['Timer Logic', 'Audio Mix', 'UI Layer'],
      features: [
        { title: 'Generative Audio', desc: 'Unique soundscapes every session.', icon: '🎵' }
      ]
    }
  ];

  openProject(project: Project) {
    this.selectedProject = project;
  }

  closeProject() {
    this.selectedProject = null;
  }
}
