import React from "react";
import { type ProjectItem } from "../../app/model/projects";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface CardProps {
    project: ProjectItem;
    onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<CardProps> = ({ project, onViewDetails }) => {
    return (
        <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between project-card glow-card-cyan transition-all">
            <div>
                {/* Image Preview */}
                <div
                    className="position-relative overflow-hidden rounded-3 mb-3 cursor-pointer"
                    style={{ background: "#060e24", height: "220px", border: "1px solid rgba(56, 189, 248, 0.2)" }}
                    onClick={() => onViewDetails(project)}
                >
                    <img
                        src={project.images[0]}
                        alt={project.name}
                        className="project-img-preview"
                    />
                    <div className="position-absolute top-0 start-0 m-2">
                        <span className="badge bg-navy-dark text-cyan-300 font-mono small border border-primary border-opacity-30" style={{ background: "rgba(6, 14, 36, 0.88)" }}>
                            {project.categoryLabel}
                        </span>
                    </div>

                    {project.metrics && project.metrics[0] && (
                        <div className="position-absolute bottom-0 end-0 m-2">
                            <span className="badge font-mono fw-bold small text-white" style={{ background: "rgba(37, 99, 235, 0.9)", border: "1px solid rgba(56, 189, 248, 0.4)" }}>
                                {project.metrics[0].value}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="mb-3">
                    <h4
                        className="font-display text-white mb-2 cursor-pointer hover:text-cyan-300 transition-colors fw-bold"
                        onClick={() => onViewDetails(project)}
                        style={{ fontSize: "1.2rem" }}
                    >
                        {project.name}
                    </h4>
                    <p className="text-muted small mb-2 line-clamp-2" style={{ minHeight: "38px", color: "#cbd5e1" }}>
                        {project.tagline || project.description}
                    </p>
                </div>

                {/* Tech Chips */}
                <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((item) => (
                        <span key={item} className="badge-tech" style={{ fontSize: "0.75rem", padding: "3px 10px" }}>
                            {item}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="badge-tech" style={{ fontSize: "0.75rem", padding: "3px 10px" }}>
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="d-flex align-items-center justify-content-between pt-3 border-top border-primary border-opacity-20">
                <button
                    onClick={() => onViewDetails(project)}
                    className="btn btn-sm btn-link text-cyan-400 p-0 text-decoration-none d-flex align-items-center gap-1 font-mono small fw-semibold"
                >
                    <span>View Architecture Details</span>
                    <ArrowUpRight size={14} />
                </button>

                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-secondary-glow py-1 px-3 d-flex align-items-center gap-1"
                        style={{ fontSize: "0.8rem" }}
                    >
                        <span>Live Site</span>
                        <ExternalLink size={12} />
                    </a>
                ) : (
                    <span className="font-mono small" style={{ fontSize: "0.75rem", color: "#94a3b8" }}>
                        Enterprise System
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
