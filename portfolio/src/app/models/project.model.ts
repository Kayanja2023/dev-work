export interface Project {
    id: string;
    title: string;
    category: string;
    image?: string; // Optional project image
    tags: string[];
    summary: string;
    fullDescription: string;
    architecture: string[]; // Steps for the diagram
    features: { title: string; desc: string; icon: string }[];
    chatSimulatorData?: { user: string; ai: string }[]; // Optional chat data
}
