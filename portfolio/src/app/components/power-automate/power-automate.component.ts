import { Component } from '@angular/core';

interface FlowStep {
  icon: string;
  label: string;
  connector: string;
  description: string;
}

interface AutomationFlow {
  id: string;
  title: string;
  category: string;
  categoryColor: string;
  trigger: { icon: string; label: string; connector: string };
  steps: FlowStep[];
  connectors: string[];
  metrics: { icon: string; label: string; value: string }[];
  businessValue: string;
}

@Component({
  selector: 'app-power-automate',
  templateUrl: './power-automate.component.html',
  styleUrls: ['./power-automate.component.css']
})
export class PowerAutomateComponent {
  selectedFlow: AutomationFlow | null = null;

  connectorIcons = [
    { name: 'SharePoint', icon: '📊', color: '#038387' },
    { name: 'Teams', icon: '💬', color: '#6264A7' },
    { name: 'Outlook', icon: '📧', color: '#0078D4' },
    { name: 'Forms', icon: '📝', color: '#107C10' },
    { name: 'AI Builder', icon: '🤖', color: '#742774' },
    { name: 'Dynamics 365', icon: '📋', color: '#002050' },
    { name: 'Power BI', icon: '📈', color: '#F2C811' },
    { name: 'Dataverse', icon: '🗄️', color: '#5C2D91' }
  ];

  flows: AutomationFlow[] = [
    {
      id: 'expense',
      title: 'ExpenseIQ',
      category: 'Finance Automation',
      categoryColor: '#107C10',
      trigger: { icon: '📝', label: 'Expense Submitted', connector: 'Forms' },
      steps: [
        { icon: '🔢', label: 'Evaluate Amount', connector: 'Control', description: 'Check against R5K, R25K, R100K thresholds' },
        { icon: '🔀', label: 'Dynamic Routing', connector: 'Control', description: 'Route to Manager, Finance, or CFO' },
        { icon: '✅', label: 'Request Approval', connector: 'Approvals', description: 'Send actionable approval to Teams' },
        { icon: '⏰', label: 'Escalation Timer', connector: 'Control', description: 'Auto-escalate after 48 hours' },
        { icon: '📈', label: 'Log & Report', connector: 'Power BI', description: 'Update dashboard and SharePoint' }
      ],
      connectors: ['Forms', 'Approvals', 'SharePoint', 'Power BI'],
      metrics: [
        { icon: '⏱️', label: 'Approval Time', value: '2 wks → 24 hrs' },
        { icon: '📊', label: 'Audit Trail', value: '100%' },
        { icon: '🚨', label: 'Policy Violations', value: 'Auto-flagged' }
      ],
      businessValue: 'Multi-tier approval workflow with threshold-based routing and real-time spend visibility.'
    },
    {
      id: 'document',
      title: 'DocuProcess',
      category: 'Document Intelligence',
      categoryColor: '#5C2D91',
      trigger: { icon: '📄', label: 'Invoice Uploaded', connector: 'SharePoint' },
      steps: [
        { icon: '🤖', label: 'AI Extraction', connector: 'AI Builder', description: 'Extract vendor, amount, date, line items' },
        { icon: '📊', label: 'Confidence Check', connector: 'Control', description: 'Route low confidence to human review' },
        { icon: '✅', label: 'Validate Master Data', connector: 'Dataverse', description: 'Match vendor and PO numbers' },
        { icon: '👤', label: 'Human Review', connector: 'Approvals', description: 'Queue for manual verification if needed' },
        { icon: '🗄️', label: 'Push to ERP', connector: 'Dataverse', description: 'Create record in finance system' }
      ],
      connectors: ['SharePoint', 'AI Builder', 'Dataverse', 'Approvals'],
      metrics: [
        { icon: '⏱️', label: 'Processing Time', value: '15 min → 90 sec' },
        { icon: '🎯', label: 'Accuracy', value: '99.5%' },
        { icon: '📄', label: 'Monthly Volume', value: '500+ invoices' }
      ],
      businessValue: 'AI-powered invoice processing eliminating 90% of manual data entry with confidence-based routing.'
    },
    {
      id: 'feedback',
      title: 'VoiceLoop',
      category: 'CX Automation',
      categoryColor: '#D83B01',
      trigger: { icon: '📝', label: 'Survey Response', connector: 'Forms' },
      steps: [
        { icon: '❤️', label: 'Sentiment Analysis', connector: 'AI Builder', description: 'Classify positive, neutral, negative' },
        { icon: '🔀', label: 'Conditional Route', connector: 'Control', description: 'Branch based on sentiment score' },
        { icon: '🚨', label: 'Alert Manager', connector: 'Teams', description: 'Instant notification for negative feedback' },
        { icon: '📋', label: 'Create Case', connector: 'Dynamics 365', description: 'Log to CRM for follow-up tracking' },
        { icon: '📧', label: 'Auto Response', connector: 'Outlook', description: 'Send personalized acknowledgment' }
      ],
      connectors: ['Forms', 'AI Builder', 'Teams', 'Dynamics 365'],
      metrics: [
        { icon: '⏱️', label: 'Response Time', value: '2 wks → 2 hrs' },
        { icon: '🔄', label: 'Follow-up Rate', value: '15% → 95%' },
        { icon: '📈', label: 'NPS Improvement', value: '+12 points' }
      ],
      businessValue: 'Real-time sentiment analysis with instant escalation ensuring every customer voice is heard.'
    }
  ];

  openFlow(flow: AutomationFlow) {
    this.selectedFlow = flow;
  }

  closeFlow() {
    this.selectedFlow = null;
  }
}
