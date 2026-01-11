export interface Project {
    id: string;
    title: string;
    category: string;
    image?: string; // Optional project image
    brandColor?: string; // Hex code for brand styling
    tags: string[];
    summary: string;

    // Case Study Section
    problem: string; // Business context (The "Why")
    solution: string; // The "What"
    impact: string[]; // Key Metrics (The "Value")

    fullDescription: string;
    architecture: string[]; // Steps for the diagram
    features: { title: string; desc: string; icon: string }[];
    chatSimulatorData?: { user: string; ai: string }[]; // Optional chat data
    businessValue?: string; // Brief statement about business importance
}
