export type ProjectCategory = 
    | "all" 
    | "ai-automation" 
    | "web-apps" 
    | "ecommerce" 
    | "enterprise";

export interface ProjectMetric {
    label: string;
    value: string;
}

export interface ProjectItem {
    id: string;
    name: string;
    tagline: string;
    description: string;
    category: "ai-automation" | "web-apps" | "ecommerce" | "enterprise";
    categoryLabel: string;
    tech: string[];
    link?: string;
    github?: string;
    images: string[];
    metrics?: ProjectMetric[];
    challenge?: string;
    solution?: string;
    architecture?: string[];
    featured?: boolean;
}
