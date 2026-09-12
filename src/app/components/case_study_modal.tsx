import React from "react";
import { type ProjectItem } from "../../app/model/projects";
import { X, ExternalLink, Cpu, CheckCircle2, Layers } from "lucide-react";

interface Props {
    project: ProjectItem | null;
    onClose: () => void;
}

export const CaseStudyModal: React.FC<Props> = ({ project, onClose }) => {
    if (!project) return null;

    return (
        <div className="custom-modal-backdrop" onClick={onClose}>
            <div
                className="custom-modal-box p-4 p-md-5"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="d-flex justify-content-between align-items-start gap-3 mb-4 pb-3 border-bottom border-primary border-opacity-30">
                    <div>
                        <span className="badge bg-primary bg-opacity-20 text-cyan-300 font-mono small mb-2 d-inline-block border border-primary border-opacity-40">
                            {project.categoryLabel}
                        </span>
                        <h2 className="font-display h3 text-white m-0 fw-bold">
                            {project.name}
                        </h2>
                        <p className="small m-0 mt-1" style={{ color: "#cbd5e1" }}>
                            {project.tagline}
                        </p>
                    </div>
                    <button
                        onClick={onClose}
                        className="btn btn-sm btn-outline-secondary text-white rounded-circle p-2 d-flex align-items-center justify-content-center"
                        style={{ width: "36px", height: "36px" }}
                        aria-label="Close"
                    >
                        <X size={18} />
                    </button>
                </div>

                {/* Screenshots */}
                <div className="mb-4">
                    <div className="d-flex flex-column gap-3">
                        {project.images.map((imgSrc, idx) => (
                            <img
                                key={idx}
                                src={imgSrc}
                                alt={`${project.name} preview ${idx + 1}`}
                                className="w-100 rounded-3 border border-primary border-opacity-30"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        ))}
                    </div>
                </div>

                {/* Verified Deliverables Grid */}
                {project.metrics && project.metrics.length > 0 && (
                    <div className="row g-3 mb-4">
                        {project.metrics.map((m, idx) => (
                            <div key={idx} className="col-4">
                                <div className="p-3 rounded-2 text-center" style={{ background: "rgba(16, 36, 80, 0.7)", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                                    <span className="h5 text-cyan-300 font-mono fw-bold d-block m-0">
                                        {m.value}
                                    </span>
                                    <span className="text-muted small font-sans" style={{ fontSize: "0.78rem" }}>
                                        {m.label}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {/* Challenge & Solution */}
                <div className="row g-4 mb-4">
                    {project.challenge && (
                        <div className="col-md-6">
                            <div className="p-3 rounded-3 h-100 border border-primary border-opacity-20" style={{ background: "rgba(10, 20, 48, 0.7)" }}>
                                <h6 className="text-cyan-400 font-mono small text-uppercase mb-2 fw-bold">
                                    Operational Bottleneck
                                </h6>
                                <p className="small m-0" style={{ color: "#cbd5e1" }}>
                                    {project.challenge}
                                </p>
                            </div>
                        </div>
                    )}
                    {project.solution && (
                        <div className="col-md-6">
                            <div className="p-3 rounded-3 h-100 border border-primary border-opacity-20" style={{ background: "rgba(10, 20, 48, 0.7)" }}>
                                <h6 className="text-emerald-400 font-mono small text-uppercase mb-2 fw-bold">
                                    PrimeLabs Engineering Solution
                                </h6>
                                <p className="small m-0" style={{ color: "#f1f5f9" }}>
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Architecture Highlights */}
                {project.architecture && project.architecture.length > 0 && (
                    <div className="mb-4 p-3 rounded-3 border border-primary border-opacity-30" style={{ background: "rgba(14, 28, 64, 0.8)" }}>
                        <div className="d-flex align-items-center gap-2 mb-3 text-cyan-300 font-mono small">
                            <Layers size={16} />
                            <span className="fw-bold">SYSTEM ARCHITECTURE SPECIFICATION</span>
                        </div>
                        <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                            {project.architecture.map((item, idx) => (
                                <li key={idx} className="d-flex align-items-start gap-2 small text-slate-200">
                                    <CheckCircle2 size={16} className="text-cyan-400 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Tech Stack Chips */}
                <div className="mb-4">
                    <h6 className="text-muted font-mono small text-uppercase mb-2">Tech Stack Deployed</h6>
                    <div className="d-flex flex-wrap gap-2">
                        {project.tech.map((t) => (
                            <span key={t} className="badge-tech">
                                <Cpu size={12} className="text-cyan-400" />
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Footer */}
                <div className="d-flex justify-content-between align-items-center pt-3 border-top border-primary border-opacity-30">
                    <button onClick={onClose} className="btn btn-secondary-glow">
                        Close Overview
                    </button>
                    {project.link ? (
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-prime d-flex align-items-center gap-2"
                        >
                            <span>Visit Live Production Site</span>
                            <ExternalLink size={16} />
                        </a>
                    ) : (
                        <span className="badge font-mono small text-slate-300" style={{ background: "rgba(16, 32, 70, 0.8)", border: "1px solid rgba(70, 130, 230, 0.3)" }}>
                            Enterprise Platform
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;
