import React, { useState } from "react";
import { 
    Mail, 
    Phone, 
    Copy, 
    Check, 
    Send, 
    Sparkles, 
    MessageSquare
} from "lucide-react";
import { FacebookIcon, LinkedinIcon } from "./icons";
import confetti from "canvas-confetti";

interface Props {
    initialMessage?: string;
    onClose?: () => void;
}

export const ContactHub: React.FC<Props> = ({ initialMessage = "", onClose }) => {
    const [copiedKey, setCopiedKey] = useState<string | null>(null);

    const [formState, setFormState] = useState({
        name: "",
        email: "",
        serviceType: "Full Web Platform & AI Workflow",
        budget: "$1,000 - $3,000",
        message: initialMessage,
    });

    const triggerConfetti = () => {
        confetti({
            particleCount: 60,
            spread: 60,
            origin: { y: 0.8 },
        });
    };

    const copyToClipboard = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setCopiedKey(key);
        triggerConfetti();
        setTimeout(() => setCopiedKey(null), 3000);
    };

    const handleFormSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        triggerConfetti();

        const subject = encodeURIComponent(`PrimeLabs Inquiry: ${formState.serviceType} (${formState.name || "Client"})`);
        const body = encodeURIComponent(`Hello Francess & PrimeLabs Team,

My Name: ${formState.name}
My Email: ${formState.email}
Service Requirement: ${formState.serviceType}
Budget / Scope Tier: ${formState.budget}

Project Details:
${formState.message || "I'd like to schedule a discovery consultation regarding our web & AI engineering needs."}

Best regards,
${formState.name || "Prospective Client"}`);

        window.location.href = `mailto:primelabs.incorporated@gmail.com?subject=${subject}&body=${body}`;
        if (onClose) onClose();
    };

    const handleCopyBrief = () => {
        const brief = `PrimeLabs Project Brief:
- Client Name: ${formState.name || "Not specified"}
- Email: ${formState.email || "Not specified"}
- Service: ${formState.serviceType}
- Budget Tier: ${formState.budget}
- Message: ${formState.message || "Let's build together."}`;

        copyToClipboard(brief, "brief");
    };

    return (
        <div id="contact" className="glass-panel p-4 p-md-5 my-5 border border-primary border-opacity-30 glow-card-cyan">
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto mb-5">
                <div className="d-inline-flex align-items-center gap-2 status-pill mb-2">
                    <Sparkles size={14} className="text-cyan-300" />
                    <span>Let's Build Something Exceptional</span>
                </div>
                <h2 className="font-display display-6 text-white mb-2 fw-bold">
                    Initiate Your <span className="text-gradient">PrimeLabs Engagement</span>
                </h2>
                <p className="m-0" style={{ color: "#cbd5e1" }}>
                    Ready to engineer high-performance web platforms and autonomous AI pipelines? Reach out directly or dispatch a structured project brief.
                </p>
            </div>

            <div className="row g-4 align-items-stretch">
                {/* Left Col: Direct Interactive Contact Channels */}
                <div className="col-lg-5">
                    <div className="p-4 rounded-3 h-100 d-flex flex-column justify-content-between border border-primary border-opacity-30" style={{ background: "rgba(10, 22, 54, 0.88)" }}>
                        <div>
                            <h5 className="font-display text-white mb-2 d-flex align-items-center gap-2 fw-bold">
                                <MessageSquare size={18} className="text-cyan-400" />
                                <span>Direct Contact Channels</span>
                            </h5>
                            <p className="small mb-4" style={{ color: "#94a3b8" }}>
                                Guaranteed response within 12-24 hours. Click any channel to copy or launch instantly.
                            </p>

                            {/* Primary Company Email */}
                            <div className="p-3 rounded-2 border border-primary border-opacity-30 mb-3 transition-all hover:border-cyan-400" style={{ background: "rgba(6, 14, 38, 0.8)" }}>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="font-mono small d-flex align-items-center gap-2" style={{ color: "#7dd3fc" }}>
                                        <Mail size={14} className="text-cyan-400" />
                                        Official Company Email
                                    </span>
                                    <button
                                        onClick={() => copyToClipboard("primelabs.incorporated@gmail.com", "comp-email")}
                                        className="btn btn-sm btn-link text-cyan-400 p-0 text-decoration-none d-flex align-items-center gap-1 small fw-semibold"
                                    >
                                        {copiedKey === "comp-email" ? (
                                            <>
                                                <Check size={14} className="text-emerald-400" />
                                                <span className="text-emerald-400">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={14} />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <a
                                    href="mailto:primelabs.incorporated@gmail.com"
                                    className="text-white fw-bold text-decoration-none font-mono d-block"
                                    style={{ fontSize: "0.95rem", wordBreak: "break-all" }}
                                >
                                    primelabs.incorporated@gmail.com
                                </a>
                            </div>

                            {/* Personal Direct Email */}
                            <div className="p-3 rounded-2 border border-primary border-opacity-30 mb-3 transition-all" style={{ background: "rgba(6, 14, 38, 0.8)" }}>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="font-mono small d-flex align-items-center gap-2" style={{ color: "#93c5fd" }}>
                                        <Mail size={14} className="text-cyan-300" />
                                        Lead Engineer Direct
                                    </span>
                                    <button
                                        onClick={() => copyToClipboard("francess12357@gmail.com", "pers-email")}
                                        className="btn btn-sm btn-link text-cyan-300 p-0 text-decoration-none d-flex align-items-center gap-1 small fw-semibold"
                                    >
                                        {copiedKey === "pers-email" ? (
                                            <>
                                                <Check size={14} className="text-emerald-400" />
                                                <span className="text-emerald-400">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={14} />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <a
                                    href="mailto:francess12357@gmail.com"
                                    className="text-white fw-bold text-decoration-none font-mono d-block"
                                    style={{ fontSize: "0.95rem" }}
                                >
                                    francess12357@gmail.com
                                </a>
                            </div>

                            {/* Phone & Viber */}
                            <div className="p-3 rounded-2 border border-primary border-opacity-30 mb-4 transition-all" style={{ background: "rgba(6, 14, 38, 0.8)" }}>
                                <div className="d-flex justify-content-between align-items-center mb-1">
                                    <span className="font-mono small d-flex align-items-center gap-2 text-emerald-400">
                                        <Phone size={14} />
                                        Phone & Viber Direct
                                    </span>
                                    <button
                                        onClick={() => copyToClipboard("+639369346575", "viber")}
                                        className="btn btn-sm btn-link text-emerald-400 p-0 text-decoration-none d-flex align-items-center gap-1 small fw-semibold"
                                    >
                                        {copiedKey === "viber" ? (
                                            <>
                                                <Check size={14} className="text-emerald-400" />
                                                <span className="text-emerald-400">Copied!</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={14} />
                                                <span>Copy</span>
                                            </>
                                        )}
                                    </button>
                                </div>
                                <a
                                    href="viber://chat?number=639369346575"
                                    className="text-white fw-bold text-decoration-none font-mono d-block"
                                    style={{ fontSize: "0.95rem" }}
                                >
                                    +63 936 934 6575
                                </a>
                            </div>
                        </div>

                        {/* Social & Corporate Channels (No GitHub) */}
                        <div>
                            <span className="font-mono small d-block mb-2 text-uppercase" style={{ color: "#94a3b8", fontSize: "0.75rem" }}>
                                Official Corporate Profiles
                            </span>
                            <div className="d-flex gap-2">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61590760322075"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary-glow flex-fill d-flex align-items-center justify-content-center gap-2 py-2"
                                    title="PrimeLabs Official Facebook Page"
                                >
                                    <FacebookIcon size={18} className="text-cyan-400" />
                                    <span className="small fw-semibold">PrimeLabs FB Page</span>
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/francess-cillo-177b8a29a/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-secondary-glow flex-fill d-flex align-items-center justify-content-center gap-2 py-2"
                                    title="LinkedIn Profile"
                                >
                                    <LinkedinIcon size={18} className="text-cyan-400" />
                                    <span className="small fw-semibold">LinkedIn Profile</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Col: Structured Project Inquiry Form */}
                <div className="col-lg-7">
                    <form onSubmit={handleFormSubmit} className="glass-panel p-4 h-100 border border-primary border-opacity-30" style={{ background: "rgba(12, 25, 60, 0.92)" }}>
                        <div className="d-flex justify-content-between align-items-center mb-4 pb-2 border-bottom border-primary border-opacity-30">
                            <h5 className="font-display text-white m-0 fw-bold">Send Project Dispatch</h5>
                            <span className="badge font-mono small text-cyan-300" style={{ background: "rgba(37, 99, 235, 0.4)", border: "1px solid rgba(56, 189, 248, 0.4)" }}>
                                Direct Dispatch
                            </span>
                        </div>

                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="font-mono small mb-1 d-block fw-semibold" style={{ color: "#cbd5e1" }}>YOUR NAME / COMPANY</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Marcus Vance (Growth Lead)"
                                    value={formState.name}
                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                    required
                                    className="form-control text-white rounded-2"
                                    style={{ background: "rgba(6, 14, 38, 0.9)", border: "1px solid rgba(56, 189, 248, 0.3)" }}
                                />
                            </div>
                            <div className="col-md-6">
                                <label className="font-mono small mb-1 d-block fw-semibold" style={{ color: "#cbd5e1" }}>YOUR EMAIL ADDRESS</label>
                                <input
                                    type="email"
                                    placeholder="marcus@growthgroup.com"
                                    value={formState.email}
                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                    required
                                    className="form-control text-white rounded-2"
                                    style={{ background: "rgba(6, 14, 38, 0.9)", border: "1px solid rgba(56, 189, 248, 0.3)" }}
                                />
                            </div>
                        </div>

                        <div className="row g-3 mb-3">
                            <div className="col-md-6">
                                <label className="font-mono small mb-1 d-block fw-semibold" style={{ color: "#cbd5e1" }}>PRIMARY REQUIREMENT</label>
                                <select
                                    value={formState.serviceType}
                                    onChange={(e) => setFormState({ ...formState, serviceType: e.target.value })}
                                    className="form-select text-white rounded-2"
                                    style={{ background: "rgba(6, 14, 38, 0.9)", border: "1px solid rgba(56, 189, 248, 0.3)" }}
                                >
                                    <option value="Modern Frontend & Web App Engineering">Modern Frontend & Web App Engineering</option>
                                    <option value="Autonomous AI Agents & Workflow Automation">Autonomous AI Agents & Workflow Automation</option>
                                    <option value="System Architecture & Scalable Cloud APIs">System Architecture & Scalable Cloud APIs</option>
                                    <option value="E-Commerce & High-Conversion Storefront">E-Commerce & High-Conversion Storefront</option>
                                    <option value="Full Digital Transformation Retainer">Full Digital Transformation Retainer</option>
                                </select>
                            </div>
                            <div className="col-md-6">
                                <label className="font-mono small mb-1 d-block fw-semibold" style={{ color: "#cbd5e1" }}>TARGET BUDGET RANGE</label>
                                <select
                                    value={formState.budget}
                                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                                    className="form-select text-white rounded-2"
                                    style={{ background: "rgba(6, 14, 38, 0.9)", border: "1px solid rgba(56, 189, 248, 0.3)" }}
                                >
                                    <option value="Under $1,000 (Sprint Build)">Under $1,000 (Sprint Build)</option>
                                    <option value="$1,000 - $3,000 (Standard MVP)">$1,000 - $3,000 (Standard MVP)</option>
                                    <option value="$3,000 - $7,000 (Comprehensive System)">$3,000 - $7,000 (Comprehensive System)</option>
                                    <option value="$7,000+ (Enterprise Architecture)">$7,000+ (Enterprise Architecture)</option>
                                </select>
                            </div>
                        </div>

                        <div className="mb-4">
                            <label className="font-mono small mb-1 d-block fw-semibold" style={{ color: "#cbd5e1" }}>PROJECT OVERVIEW & OBJECTIVES</label>
                            <textarea
                                rows={4}
                                placeholder="Describe the problem you are solving, core integrations needed, or current performance pain points..."
                                value={formState.message}
                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                className="form-control text-white rounded-2"
                                style={{ background: "rgba(6, 14, 38, 0.9)", border: "1px solid rgba(56, 189, 248, 0.3)" }}
                            />
                        </div>

                        <div className="d-flex flex-column flex-sm-row gap-2">
                            <button
                                type="submit"
                                className="btn-prime flex-fill py-3 d-flex align-items-center justify-content-center gap-2"
                            >
                                <Send size={16} />
                                <span>Send Email Dispatch</span>
                            </button>
                            <button
                                type="button"
                                onClick={handleCopyBrief}
                                className="btn-secondary-glow py-3 px-4 d-flex align-items-center justify-content-center gap-2"
                            >
                                {copiedKey === "brief" ? (
                                    <>
                                        <Check size={16} className="text-emerald-400" />
                                        <span className="text-emerald-400">Brief Copied!</span>
                                    </>
                                ) : (
                                    <>
                                        <Copy size={16} />
                                        <span>Copy Brief</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactHub;
