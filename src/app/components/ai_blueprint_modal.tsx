import React, { useState } from "react";
import { Cpu, Layers, ArrowRight, Sparkles, Terminal } from "lucide-react";
import confetti from "canvas-confetti";

interface Blueprint {
    id: string;
    title: string;
    category: string;
    icon: string;
    problem: string;
    blueprintSolution: string;
    stack: string[];
    timeline: string;
    roi: string;
    architectureFlow: string[];
}

const BLUEPRINTS: Blueprint[] = [
    {
        id: "ai-leads",
        title: "Autonomous Lead Enrichment & CRM Engine",
        category: "AI Automation",
        icon: "⚡",
        problem: "Leads sitting in inbox uncontacted for hours; manual copy-pasting to CRM.",
        blueprintSolution: "Event-driven webhook pipeline that qualifies inbound leads via LLM, scores intent, enriches data, and sends instant personalized replies in <60 seconds.",
        stack: ["OpenAI API / Claude", "n8n / Webhooks", "TypeScript", "PostgreSQL", "Resend / SendGrid"],
        timeline: "1 - 2 Weeks",
        roi: "Instant 5x response rate boost & 20+ hrs/wk saved",
        architectureFlow: [
            "Inbound Webhook Trigger",
            "LLM Intent Classifier & Scoring",
            "Auto-Enrichment via API",
            "Automated Multi-Channel Follow-up",
            "Live Analytics Dashboard"
        ]
    },
    {
        id: "frontend-modern",
        title: "High-Performance Modern Web Platform",
        category: "Frontend Engineering",
        icon: "🚀",
        problem: "Slow legacy website with high bounce rates, low mobile conversion, and poor SEO.",
        blueprintSolution: "Headless React/TypeScript frontend with dynamic animations, sub-second TTFB, edge-cached assets, and conversion-optimized sales funnels.",
        stack: ["React 19", "TypeScript", "Vite", "Tailored CSS", "AOS / Motion", "Edge CDN"],
        timeline: "2 - 3 Weeks",
        roi: "Sub-second load times, 98+ Lighthouse score & +40% conversion lift",
        architectureFlow: [
            "Edge CDN & Asset Optimization",
            "Component-Driven Responsive UI",
            "Interactive Micro-Interactions",
            "Conversion Funnel Telemetry",
            "SEO-Structured Schema"
        ]
    },
    {
        id: "ai-support",
        title: "24/7 Intelligent AI Support & Knowledge Agent",
        category: "AI & System Architecture",
        icon: "🤖",
        problem: "Customer support overwhelmed with repetitive questions, causing delayed replies.",
        blueprintSolution: "Retrieval-Augmented (RAG) AI assistant grounded in company docs with human-in-the-loop escalation and live CRM logging.",
        stack: ["LLM Embeddings", "Vector DB", "FastAPI / Node", "React Widget", "Slack / Discord Bridge"],
        timeline: "2 - 4 Weeks",
        roi: "Resolves 70% of tier-1 tickets instantly with zero added headcount",
        architectureFlow: [
            "Document Knowledge Vectorization",
            "Semantic Query Matching",
            "Grounded LLM Generation",
            "Safety Guardrails & Validation",
            "Human-in-Loop Fallback Gateway"
        ]
    },
    {
        id: "ecom-fulfillment",
        title: "Automated E-Commerce & Inventory Pipeline",
        category: "System Engineering",
        icon: "📦",
        problem: "Stock discrepancies, manual order fulfillment delays, and abandoned checkout carts.",
        blueprintSolution: "Custom Shopify/Sellix event orchestrator with automated license/key fulfillment, instant SMS dispatch, and real-time inventory telemetry.",
        stack: ["Shopify Liquid", "Sellix API", "Node.js Microservice", "Redis Caching", "Stripe"],
        timeline: "2 Weeks",
        roi: "Zero fulfillment backlog & instantaneous customer satisfaction",
        architectureFlow: [
            "Payment Gateway Webhook",
            "Signature & Anti-Fraud Verification",
            "Atomic Database Inventory Lock",
            "Instant Encrypted Asset Delivery",
            "Automated Accounting Sync"
        ]
    },
];

interface Props {
    onSelectBlueprint?: (title: string) => void;
}

export const AIBlueprintFinder: React.FC<Props> = ({ onSelectBlueprint }) => {
    const [selectedId, setSelectedId] = useState<string>(BLUEPRINTS[0].id);

    const activeBlueprint = BLUEPRINTS.find((b) => b.id === selectedId) || BLUEPRINTS[0];

    const handleSelect = (title: string) => {
        confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.8 },
        });
        if (onSelectBlueprint) {
            onSelectBlueprint(title);
        } else {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div className="glass-panel p-4 p-md-5 my-5 border border-cyan-500/20 glow-card-cyan">
            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-3 border-bottom border-secondary border-opacity-25">
                <div>
                    <div className="d-inline-flex align-items-center gap-2 status-pill mb-2">
                        <Sparkles size={14} className="text-cyan-400" />
                        <span>Interactive Solution Architect</span>
                    </div>
                    <h3 className="font-display h2 m-0 text-white">
                        PrimeLabs <span className="text-gradient">Solution Blueprints</span>
                    </h3>
                    <p className="text-muted m-0 small">
                        Select a business challenge to preview the engineering architecture, tech stack, and expected ROI.
                    </p>
                </div>
                <div className="d-flex align-items-center gap-2 text-muted font-mono small">
                    <Terminal size={16} className="text-cyan-400" />
                    <span>Live Architecture Engine v2.4</span>
                </div>
            </div>

            {/* Selection Chips */}
            <div className="d-flex flex-wrap gap-2 mb-4">
                {BLUEPRINTS.map((bp) => {
                    const isActive = bp.id === selectedId;
                    return (
                        <button
                            key={bp.id}
                            onClick={() => setSelectedId(bp.id)}
                            className={`btn text-start d-flex align-items-center gap-2 px-3 py-2 rounded-3 transition-all ${
                                isActive
                                    ? "btn-prime"
                                    : "btn-secondary-glow"
                            }`}
                            style={{ fontSize: "0.9rem" }}
                        >
                            <span>{bp.icon}</span>
                            <span>{bp.title}</span>
                        </button>
                    );
                })}
            </div>

            {/* Active Blueprint Display */}
            <div className="bg-surface-elevated p-4 rounded-3 border border-secondary border-opacity-25" style={{ background: "rgba(10, 15, 28, 0.85)" }}>
                <div className="row g-4">
                    {/* Left Col: Problem & Solution */}
                    <div className="col-lg-7">
                        <div className="mb-3">
                            <span className="badge bg-danger bg-opacity-25 text-danger-emphasis border border-danger border-opacity-25 px-2 py-1 rounded small mb-2 d-inline-block">
                                The Challenge
                            </span>
                            <p className="text-muted mb-3" style={{ fontSize: "0.95rem" }}>
                                {activeBlueprint.problem}
                            </p>
                        </div>

                        <div className="mb-4">
                            <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-25 px-2 py-1 rounded small mb-2 d-inline-block">
                                PrimeLabs Architectural Solution
                            </span>
                            <p className="text-light fw-medium mb-0" style={{ fontSize: "1.05rem" }}>
                                {activeBlueprint.blueprintSolution}
                            </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mb-4">
                            <h6 className="text-muted text-uppercase font-mono small mb-2">Recommended Tech Arsenal</h6>
                            <div className="d-flex flex-wrap gap-2">
                                {activeBlueprint.stack.map((tech) => (
                                    <span key={tech} className="badge-tech">
                                        <Cpu size={12} className="text-cyan-400" />
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* ROI & Timeline */}
                        <div className="d-flex flex-wrap gap-3 p-3 rounded-2" style={{ background: "rgba(0, 242, 254, 0.05)", border: "1px solid rgba(0, 242, 254, 0.15)" }}>
                            <div>
                                <span className="text-muted small d-block font-mono">ESTIMATED TURNAROUND</span>
                                <span className="text-cyan-400 fw-bold">{activeBlueprint.timeline}</span>
                            </div>
                            <div className="vr bg-secondary opacity-25"></div>
                            <div>
                                <span className="text-muted small d-block font-mono">MEASURABLE ROI</span>
                                <span className="text-white fw-bold">{activeBlueprint.roi}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Architecture Flow Pipeline */}
                    <div className="col-lg-5">
                        <div className="p-3 rounded-3 h-100 d-flex flex-column justify-content-between" style={{ background: "rgba(18, 26, 45, 0.6)", border: "1px solid rgba(255, 255, 255, 0.05)" }}>
                            <div>
                                <div className="d-flex align-items-center gap-2 mb-3 text-cyan-300 font-mono small">
                                    <Layers size={15} />
                                    <span className="fw-bold">SYSTEM FLOW BLUEPRINT</span>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    {activeBlueprint.architectureFlow.map((step, idx) => (
                                        <div key={idx} className="d-flex align-items-center gap-2 p-2 rounded bg-black bg-opacity-40 border border-white border-opacity-10 small text-light">
                                            <span className="badge bg-cyan-500 bg-opacity-20 text-cyan-400 font-mono" style={{ minWidth: "24px" }}>
                                                0{idx + 1}
                                            </span>
                                            <span>{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-top border-white border-opacity-10">
                                <button
                                    onClick={() => handleSelect(activeBlueprint.title)}
                                    className="btn-prime w-100 py-2 d-flex align-items-center justify-content-center gap-2"
                                >
                                    <span>Deploy This Architecture</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AIBlueprintFinder;
