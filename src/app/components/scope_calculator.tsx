import React, { useState, useMemo } from "react";
import { Calculator, CheckCircle, Clock, Send, ShieldCheck, Zap } from "lucide-react";
import confetti from "canvas-confetti";

interface FeatureOption {
    id: string;
    label: string;
    category: string;
    daysEstimate: number;
}

const FEATURES_LIST: FeatureOption[] = [
    { id: "ai_bot", label: "Autonomous AI Agent & LLM Workflow", category: "AI", daysEstimate: 5 },
    { id: "dashboard", label: "Interactive Analytics / Telemetry Dashboard", category: "Frontend", daysEstimate: 6 },
    { id: "payment", label: "Stripe / Sellix / Webhook Payment Pipeline", category: "Backend", daysEstimate: 4 },
    { id: "crm_sync", label: "Automated Lead Capture & Multi-CRM Sync", category: "Automation", daysEstimate: 3 },
    { id: "seo_tuning", label: "Enterprise SEO & Sub-Second Speed Optimization", category: "Performance", daysEstimate: 3 },
    { id: "auth_roles", label: "Multi-Tier Role Authentication & Security", category: "Architecture", daysEstimate: 4 },
];

interface Props {
    onRequestQuote?: (details: string) => void;
}

export const ScopeCalculator: React.FC<Props> = ({ onRequestQuote }) => {
    const [projectType, setProjectType] = useState<string>("Modern Web Application (React / TypeScript / High UX)");
    const [selectedFeatures, setSelectedFeatures] = useState<string[]>(["ai_bot", "crm_sync", "seo_tuning"]);
    const [timelinePreference, setTimelinePreference] = useState<string>("Standard (2-4 Weeks)");

    const toggleFeature = (id: string) => {
        setSelectedFeatures((prev) =>
            prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
        );
    };

    const calculatedScope = useMemo(() => {
        const baseDays = projectType.includes("Modern") ? 10 : projectType.includes("AI") ? 8 : 12;
        const extraDays = selectedFeatures.reduce((acc, featId) => {
            const found = FEATURES_LIST.find((f) => f.id === featId);
            return acc + (found ? found.daysEstimate : 0);
        }, 0);

        const totalEstDays = baseDays + extraDays;
        const weeks = Math.ceil(totalEstDays / 5);

        return {
            estDuration: `${weeks} - ${weeks + 1} Weeks`,
            deliverablesCount: 3 + selectedFeatures.length,
            supportIncluded: "30 Days Post-Launch Dedicated Support & Monitoring",
        };
    }, [projectType, selectedFeatures]);

    const handleGenerateProposal = () => {
        confetti({
            particleCount: 70,
            spread: 70,
            origin: { y: 0.7 },
        });

        const selectedFeatureLabels = selectedFeatures
            .map((id) => FEATURES_LIST.find((f) => f.id === id)?.label)
            .filter(Boolean)
            .join(", ");

        const summary = `Project Scope Request:
- Type: ${projectType}
- Selected Capabilities: ${selectedFeatureLabels}
- Timeline Preference: ${timelinePreference}
- Estimated Delivery: ${calculatedScope.estDuration}`;

        if (onRequestQuote) {
            onRequestQuote(summary);
        } else {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <div id="calculator" className="glass-panel p-4 p-md-5 my-5 border border-primary border-opacity-30 glow-card-cyan">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-5">
                <div className="d-inline-flex align-items-center gap-2 status-pill mb-2">
                    <Calculator size={14} className="text-cyan-300" />
                    <span>Instant Scope & Architecture Planner</span>
                </div>
                <h2 className="font-display display-6 text-white mb-2 fw-bold">
                    Calculate Your <span className="text-gradient">Project Architecture</span>
                </h2>
                <p className="m-0" style={{ color: "#cbd5e1" }}>
                    Customize your digital build parameters to view engineering milestones, delivery timeframes, and request an executive proposal.
                </p>
            </div>

            <div className="row g-4 align-items-stretch">
                {/* Configuration Controls */}
                <div className="col-lg-7">
                    <div className="p-4 rounded-3 h-100 border border-primary border-opacity-30" style={{ background: "rgba(10, 22, 54, 0.88)" }}>
                        {/* Step 1: Project Archetype */}
                        <div className="mb-4">
                            <label className="font-mono small text-uppercase mb-2 d-block fw-bold text-cyan-300">
                                1. Select Project Archetype
                            </label>
                            <div className="d-flex flex-column gap-2">
                                {[
                                    "Modern Web Application (React / TypeScript / High UX)",
                                    "Autonomous AI Automation & Workflow Pipelines",
                                    "E-Commerce & High-Conversion Storefront (Shopify / Headless)",
                                    "Enterprise System Architecture & Scalable API Hub"
                                ].map((type) => (
                                    <button
                                        key={type}
                                        type="button"
                                        onClick={() => setProjectType(type)}
                                        className={`btn text-start p-3 rounded-2 d-flex align-items-center justify-content-between transition-all ${
                                            projectType === type
                                                ? "btn-prime text-white"
                                                : "btn-secondary-glow"
                                        }`}
                                        style={{ fontSize: "0.92rem" }}
                                    >
                                        <span className="fw-semibold">{type}</span>
                                        {projectType === type && <CheckCircle size={18} className="text-white" />}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Step 2: Advanced Feature Modules */}
                        <div className="mb-4">
                            <label className="font-mono small text-uppercase mb-2 d-block fw-bold text-cyan-300">
                                2. Add Architecture Modules
                            </label>
                            <div className="row g-2">
                                {FEATURES_LIST.map((feat) => {
                                    const isSelected = selectedFeatures.includes(feat.id);
                                    return (
                                        <div key={feat.id} className="col-md-6">
                                            <div
                                                onClick={() => toggleFeature(feat.id)}
                                                className={`p-2 px-3 rounded-2 cursor-pointer border transition-all d-flex align-items-center gap-2 ${
                                                    isSelected
                                                        ? "text-white"
                                                        : "text-slate-300"
                                                }`}
                                                style={{
                                                    cursor: "pointer",
                                                    fontSize: "0.85rem",
                                                    background: isSelected ? "rgba(37, 99, 235, 0.35)" : "rgba(6, 14, 38, 0.8)",
                                                    borderColor: isSelected ? "rgba(56, 189, 248, 0.6)" : "rgba(70, 120, 220, 0.25)"
                                                }}
                                            >
                                                <input
                                                    type="checkbox"
                                                    checked={isSelected}
                                                    onChange={() => {}}
                                                    className="form-check-input mt-0"
                                                />
                                                <span className="fw-medium">{feat.label}</span>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Step 3: Delivery Urgency */}
                        <div>
                            <label className="font-mono small text-uppercase mb-2 d-block fw-bold text-cyan-300">
                                3. Timeline Preference
                            </label>
                            <div className="d-flex flex-wrap gap-2">
                                {[
                                    "Standard (2-4 Weeks)",
                                    "Accelerated Sprint (1-2 Weeks)",
                                    "Continuous Retainer & Advisory"
                                ].map((t) => (
                                    <button
                                        key={t}
                                        type="button"
                                        onClick={() => setTimelinePreference(t)}
                                        className={`btn btn-sm px-3 py-2 rounded-2 ${
                                            timelinePreference === t
                                                ? "btn-prime"
                                                : "btn-secondary-glow"
                                        }`}
                                    >
                                        {t}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Live Output Summary Box */}
                <div className="col-lg-5">
                    <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between border border-primary border-opacity-40" style={{ background: "rgba(12, 25, 60, 0.95)" }}>
                        <div>
                            <div className="d-flex align-items-center justify-content-between mb-3 pb-3 border-bottom border-primary border-opacity-30">
                                <span className="font-mono text-cyan-300 small text-uppercase fw-bold">Architecture Brief</span>
                                <span className="badge font-mono text-cyan-300" style={{ background: "rgba(37, 99, 235, 0.4)", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                                    PrimeLabs Verified
                                </span>
                            </div>

                            <div className="mb-3">
                                <span className="small d-block text-cyan-300 font-mono">Configured Base:</span>
                                <span className="text-white fw-bold">{projectType}</span>
                            </div>

                            <div className="mb-4">
                                <span className="small d-block mb-1 text-cyan-300 font-mono">Active Modules ({selectedFeatures.length}):</span>
                                <div className="d-flex flex-wrap gap-1">
                                    {selectedFeatures.map((id) => {
                                        const feat = FEATURES_LIST.find((f) => f.id === id);
                                        return (
                                            <span key={id} className="badge text-white small" style={{ background: "rgba(37, 99, 235, 0.3)", border: "1px solid rgba(70, 130, 230, 0.3)" }}>
                                                {feat?.label}
                                            </span>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Estimated Metrics */}
                            <div className="p-3 rounded-2 border border-primary border-opacity-30 mb-4" style={{ background: "rgba(6, 14, 38, 0.85)" }}>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="small d-flex align-items-center gap-1 text-slate-300">
                                        <Clock size={14} className="text-cyan-400" />
                                        Est. Delivery Sprint:
                                    </span>
                                    <span className="text-cyan-300 fw-bold font-mono">{calculatedScope.estDuration}</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between mb-2">
                                    <span className="small d-flex align-items-center gap-1 text-slate-300">
                                        <Zap size={14} className="text-cyan-400" />
                                        Engineered Deliverables:
                                    </span>
                                    <span className="text-white fw-bold">{calculatedScope.deliverablesCount} Core Assets</span>
                                </div>
                                <div className="d-flex align-items-center justify-content-between">
                                    <span className="small d-flex align-items-center gap-1 text-slate-300">
                                        <ShieldCheck size={14} className="text-emerald-400" />
                                        Warranty & SLA:
                                    </span>
                                    <span className="text-emerald-400 small fw-bold">30 Days Included</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                onClick={handleGenerateProposal}
                                className="btn-prime w-100 py-3 d-flex align-items-center justify-content-center gap-2"
                            >
                                <Send size={18} />
                                <span>Request Formal Architecture Proposal</span>
                            </button>
                            <p className="text-center font-mono small m-0 mt-2" style={{ color: "#94a3b8" }}>
                                ⚡ Direct response within 12-24 hours.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScopeCalculator;
