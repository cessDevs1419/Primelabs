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
        roi: "Instant sub-minute response & 20+ hrs/wk saved",
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
        roi: "Sub-second load times & conversion lift",
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
        roi: "Resolves majority of tier-1 tickets with zero delay",
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
        roi: "Zero fulfillment backlog & instant delivery",
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
        <div className="glass-panel p-4 p-md-5 my-5 border border-primary border-opacity-30 glow-card-cyan">
            {/* Header */}
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-4 pb-3 border-bottom border-primary border-opacity-25">
                <div>
                    <div className="d-inline-flex align-items-center gap-2 status-pill mb-2">
                        <Sparkles size={14} className="text-cyan-300" />
                        <span>Interactive Solution Architect</span>
                    </div>
                    <h3 className="font-display h2 m-0 text-white fw-bold">
                        PrimeLabs <span className="text-gradient">Solution Blueprints</span>
                    </h3>
                    <p className="m-0 small" style={{ color: "#cbd5e1" }}>
                        Select a business challenge to preview the engineering architecture, tech stack, and estimated turnaround.
                    </p>
                </div>
                <div className="d-flex align-items-center gap-2 font-mono small text-cyan-300">
                    <Terminal size={16} />
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
            <div className="p-4 rounded-3 border border-primary border-opacity-25" style={{ background: "rgba(8, 18, 44, 0.9)" }}>
                <div className="row g-4">
                    {/* Left Col: Problem & Solution */}
                    <div className="col-lg-7">
                        <div className="mb-3">
                            <span className="badge bg-danger bg-opacity-25 text-danger-emphasis border border-danger border-opacity-30 px-2 py-1 rounded small mb-2 d-inline-block fw-semibold">
                                The Challenge
                            </span>
                            <p className="mb-3" style={{ fontSize: "0.95rem", color: "#cbd5e1" }}>
                                {activeBlueprint.problem}
                            </p>
                        </div>

                        <div className="mb-4">
                            <span className="badge bg-success bg-opacity-25 text-success border border-success border-opacity-30 px-2 py-1 rounded small mb-2 d-inline-block fw-semibold">
                                PrimeLabs Architectural Solution
                            </span>
                            <p className="text-white fw-medium mb-0" style={{ fontSize: "1.05rem", lineHeight: "1.6" }}>
                                {activeBlueprint.blueprintSolution}
                            </p>
                        </div>

                        {/* Tech Stack Pills */}
                        <div className="mb-4">
                            <h6 className="text-cyan-300 text-uppercase font-mono small mb-2 fw-bold">Recommended Tech Arsenal</h6>
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
                        <div className="d-flex flex-wrap gap-3 p-3 rounded-2" style={{ background: "rgba(37, 99, 235, 0.15)", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                            <div>
                                <span className="small d-block font-mono text-cyan-300">ESTIMATED TURNAROUND</span>
                                <span className="text-white fw-bold">{activeBlueprint.timeline}</span>
                            </div>
                            <div className="vr bg-primary opacity-50"></div>
                            <div>
                                <span className="small d-block font-mono text-cyan-300">MEASURABLE IMPACT</span>
                                <span className="text-white fw-bold">{activeBlueprint.roi}</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Col: Architecture Flow Pipeline */}
                    <div className="col-lg-5">
                        <div className="p-3 rounded-3 h-100 d-flex flex-column justify-content-between" style={{ background: "rgba(12, 25, 60, 0.8)", border: "1px solid rgba(56, 189, 248, 0.2)" }}>
                            <div>
                                <div className="d-flex align-items-center gap-2 mb-3 text-cyan-300 font-mono small">
                                    <Layers size={15} />
                                    <span className="fw-bold">SYSTEM FLOW BLUEPRINT</span>
                                </div>
                                <div className="d-flex flex-column gap-2">
                                    {activeBlueprint.architectureFlow.map((step, idx) => (
                                        <div key={idx} className="d-flex align-items-center gap-2 p-2 rounded border border-primary border-opacity-20 small text-white" style={{ background: "rgba(6, 14, 38, 0.8)" }}>
                                            <span className="badge font-mono text-cyan-300" style={{ minWidth: "24px", background: "rgba(37, 99, 235, 0.4)" }}>
                                                0{idx + 1}
                                            </span>
                                            <span className="fw-medium">{step}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-4 pt-3 border-top border-primary border-opacity-20">
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
