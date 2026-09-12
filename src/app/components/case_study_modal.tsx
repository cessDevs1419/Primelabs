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
                <div className="d-flex justify-content-between align-items-start gap-3 mb-4 pb-3 border-bottom border-white border-opacity-10">
                    <div>
                        <span className="badge bg-cyan-500 bg-opacity-20 text-cyan-400 font-mono small mb-2 d-inline-block">
                            {project.categoryLabel}
                        </span>
                        <h2 className="font-display h3 text-white m-0">
                            {project.name}
                        </h2>
                        <p className="text-muted small m-0 mt-1">
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

                {/* Screenshots Carousel / Grid */}
                <div className="mb-4">
                    <div className="d-flex flex-column gap-3">
                        {project.images.map((imgSrc, idx) => (
                            <img
                                key={idx}
                                src={imgSrc}
                                alt={`${project.name} preview ${idx + 1}`}
                                className="w-100 rounded-3 border border-white border-opacity-10"
                                style={{ maxHeight: "400px", objectFit: "cover" }}
                            />
                        ))}
                    </div>
                </div>

                {/* Key Metrics Grid */}
                {project.metrics && project.metrics.length > 0 && (
                    <div className="row g-3 mb-4">
                        {project.metrics.map((m, idx) => (
                            <div key={idx} className="col-4">
                                <div className="p-3 rounded-2 text-center" style={{ background: "rgba(0, 242, 254, 0.08)", border: "1px solid rgba(0, 242, 254, 0.2)" }}>
                                    <span className="h4 text-cyan-400 font-mono fw-bold d-block m-0">
                                        {m.value}
                                    </span>
                                    <span className="text-muted small font-sans" style={{ fontSize: "0.75rem" }}>
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
                            <div className="p-3 rounded-3 h-100 bg-black bg-opacity-30 border border-white border-opacity-10">
                                <h6 className="text-danger font-mono small text-uppercase mb-2">
                                    The Bottleneck
                                </h6>
                                <p className="text-muted small m-0">
                                    {project.challenge}
                                </p>
                            </div>
                        </div>
                    )}
                    {project.solution && (
                        <div className="col-md-6">
                            <div className="p-3 rounded-3 h-100 bg-black bg-opacity-30 border border-white border-opacity-10">
                                <h6 className="text-emerald-400 font-mono small text-uppercase mb-2">
                                    PrimeLabs Engineering Solution
                                </h6>
                                <p className="text-light small m-0">
                                    {project.solution}
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Architecture Highlights */}
                {project.architecture && project.architecture.length > 0 && (
                    <div className="mb-4 p-3 rounded-3 bg-surface-elevated border border-white border-opacity-10">
                        <div className="d-flex align-items-center gap-2 mb-3 text-cyan-300 font-mono small">
                            <Layers size={16} />
                            <span className="fw-bold">SYSTEM ARCHITECTURE BREAKDOWN</span>
                        </div>
                        <ul className="list-unstyled mb-0 d-flex flex-column gap-2">
                            {project.architecture.map((item, idx) => (
                                <li key={idx} className="d-flex align-items-start gap-2 small text-slate-300">
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
                <div className="d-flex justify-content-between align-items-center pt-3 border-top border-white border-opacity-10">
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
                        <span className="badge bg-secondary bg-opacity-25 text-muted font-mono small">
                            Enterprise Internal Platform
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyModal;
