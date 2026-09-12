import React from "react";
import { type ProjectItem } from "../../app/model/projects";
import { ExternalLink, ArrowUpRight } from "lucide-react";

interface CardProps {
    project: ProjectItem;
    onViewDetails: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<CardProps> = ({ project, onViewDetails }) => {
    return (
        <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between project-card border border-white border-opacity-10 glow-card-cyan transition-all">
            <div>
                {/* Image Preview */}
                <div
                    className="position-relative overflow-hidden rounded-3 mb-3 cursor-pointer"
                    style={{ background: "#080c16", height: "220px" }}
                    onClick={() => onViewDetails(project)}
                >
                    <img
                        src={project.images[0]}
                        alt={project.name}
                        className="project-img-preview"
                    />
                    <div className="position-absolute top-0 start-0 m-2">
                        <span className="badge bg-black bg-opacity-70 text-cyan-400 font-mono small border border-white border-opacity-10 backdrop-blur">
                            {project.categoryLabel}
                        </span>
                    </div>

                    {project.metrics && project.metrics[0] && (
                        <div className="position-absolute bottom-0 end-0 m-2">
                            <span className="badge bg-cyan-500 bg-opacity-90 text-dark font-mono fw-bold small">
                                {project.metrics[0].value} {project.metrics[0].label}
                            </span>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="mb-3">
                    <h4
                        className="font-display text-white mb-1 cursor-pointer hover:text-cyan-400 transition-colors"
                        onClick={() => onViewDetails(project)}
                        style={{ fontSize: "1.2rem" }}
                    >
                        {project.name}
                    </h4>
                    <p className="text-muted small mb-2 line-clamp-2" style={{ minHeight: "38px" }}>
                        {project.tagline || project.description}
                    </p>
                </div>

                {/* Tech Chips */}
                <div className="d-flex flex-wrap gap-1 mb-4">
                    {project.tech.slice(0, 4).map((item) => (
                        <span key={item} className="badge-tech" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                            {item}
                        </span>
                    ))}
                    {project.tech.length > 4 && (
                        <span className="badge-tech" style={{ fontSize: "0.72rem", padding: "2px 8px" }}>
                            +{project.tech.length - 4}
                        </span>
                    )}
                </div>
            </div>

            {/* Actions */}
            <div className="d-flex align-items-center justify-content-between pt-3 border-top border-white border-opacity-10">
                <button
                    onClick={() => onViewDetails(project)}
                    className="btn btn-sm btn-link text-cyan-400 p-0 text-decoration-none d-flex align-items-center gap-1 font-mono small fw-semibold"
                >
                    <span>View Case Study</span>
                    <ArrowUpRight size={14} />
                </button>

                {project.link ? (
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-sm btn-secondary-glow py-1 px-3 d-flex align-items-center gap-1"
                        style={{ fontSize: "0.78rem" }}
                    >
                        <span>Live Site</span>
                        <ExternalLink size={12} />
                    </a>
                ) : (
                    <span className="text-dim font-mono small" style={{ fontSize: "0.75rem" }}>
                        Internal Architecture
                    </span>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
