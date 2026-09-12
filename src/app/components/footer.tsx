import React from "react";
import logo from "../../assets/images/FC.png";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { FacebookIcon, GithubIcon, LinkedinIcon } from "./icons";

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="pt-5 pb-4 border-top border-white border-opacity-10 position-relative" style={{ background: "rgba(4, 6, 11, 0.98)" }}>
            <div className="container-lg">
                <div className="row g-4 mb-5 pb-4 border-bottom border-white border-opacity-10">
                    {/* Brand Column */}
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <img
                                src={logo}
                                alt="PrimeLabs Logo"
                                className="rounded-circle border border-cyan-400"
                                style={{ width: "36px", height: "36px" }}
                            />
                            <span className="font-display fw-bold text-white fs-4">
                                Prime<span className="text-gradient">Labs</span>
                            </span>
                        </div>
                        <p className="text-muted small mb-4" style={{ maxWidth: "380px" }}>
                            Architecting resilient digital platforms, bespoke frontend systems, and autonomous AI automation pipelines for ambitious founders and high-growth businesses.
                        </p>
                        <div className="d-inline-flex align-items-center gap-2 status-pill">
                            <span className="pulse-dot"></span>
                            <span style={{ fontSize: "0.75rem" }}>All Systems Operational • 99.99% Uptime</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-lg-3">
                        <h6 className="font-mono text-cyan-400 small text-uppercase mb-3">System Navigation</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 small">
                            <li>
                                <button onClick={() => handleNavClick("services")} className="btn btn-link text-muted hover:text-white p-0 text-decoration-none small">
                                    Core Services
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("blueprints")} className="btn btn-link text-muted hover:text-white p-0 text-decoration-none small">
                                    AI Blueprint Finder
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("projects")} className="btn btn-link text-muted hover:text-white p-0 text-decoration-none small">
                                    Featured Case Studies
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("calculator")} className="btn btn-link text-muted hover:text-white p-0 text-decoration-none small">
                                    Project Scope Estimator
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("about")} className="btn btn-link text-muted hover:text-white p-0 text-decoration-none small">
                                    About PrimeLabs
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Channels & Social */}
                    <div className="col-6 col-lg-4">
                        <h6 className="font-mono text-cyan-400 small text-uppercase mb-3">Direct Engagement</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 small mb-3">
                            <li className="d-flex align-items-center gap-2 text-slate-300">
                                <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                                <a href="mailto:primelabs.incorporated@gmail.com" className="text-slate-300 hover:text-cyan-400 text-decoration-none font-mono small" style={{ wordBreak: "break-all" }}>
                                    primelabs.incorporated@gmail.com
                                </a>
                            </li>
                            <li className="d-flex align-items-center gap-2 text-slate-300">
                                <Phone size={14} className="text-emerald-400 flex-shrink-0" />
                                <a href="viber://chat?number=639369346575" className="text-slate-300 hover:text-emerald-400 text-decoration-none font-mono small">
                                    +63 936 934 6575
                                </a>
                            </li>
                        </ul>

                        <div className="d-flex gap-2">
                            <a
                                href="https://www.facebook.com/profile.php?id=61590760322075"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-secondary-glow p-2 rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "36px", height: "36px" }}
                                title="Facebook Page"
                            >
                                <FacebookIcon size={16} />
                            </a>
                            <a
                                href="https://github.com/cessDevs1419"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-secondary-glow p-2 rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "36px", height: "36px" }}
                                title="GitHub"
                            >
                                <GithubIcon size={16} />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/francess-cillo-177b8a29a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-secondary-glow p-2 rounded-circle d-flex align-items-center justify-content-center"
                                style={{ width: "36px", height: "36px" }}
                                title="LinkedIn"
                            >
                                <LinkedinIcon size={16} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                    <div className="text-muted small font-mono">
                        © {new Date().getFullYear()} <span className="text-white">PrimeLabs</span>. Founded & Engineered by <span className="text-cyan-400">Francess Cillo</span>.
                    </div>

                    <button
                        onClick={scrollToTop}
                        className="btn btn-sm btn-secondary-glow d-flex align-items-center gap-2 py-1 px-3"
                        style={{ fontSize: "0.8rem" }}
                    >
                        <span>Back to top</span>
                        <ArrowUp size={14} />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
