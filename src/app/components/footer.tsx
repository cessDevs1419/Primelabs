import React from "react";
import logo from "../../assets/images/primelabs_logo_transparent.png";
import { ArrowUp, Mail, Phone } from "lucide-react";
import { FacebookIcon, LinkedinIcon } from "./icons";

export const Footer: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleNavClick = (id: string) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <footer className="pt-5 pb-4 border-top border-primary border-opacity-30 position-relative" style={{ background: "rgba(5, 10, 24, 0.98)" }}>
            <div className="container-lg">
                <div className="row g-4 mb-5 pb-4 border-bottom border-primary border-opacity-20">
                    {/* Brand Column */}
                    <div className="col-lg-5">
                        <div className="d-flex align-items-center gap-2 mb-3">
                            <div className="p-1 rounded-2" style={{ background: "rgba(10, 24, 60, 0.7)", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                                <img
                                    src={logo}
                                    alt="PrimeLabs Logo"
                                    style={{ width: "32px", height: "32px", objectFit: "contain" }}
                                />
                            </div>
                            <span className="font-display fw-bold text-white fs-4">
                                Prime<span className="text-gradient">Labs</span>
                            </span>
                        </div>
                        <p className="small mb-4" style={{ maxWidth: "380px", color: "#cbd5e1" }}>
                            Engineering high-performance web platforms, custom applications, and autonomous AI systems built to power business expansion.
                        </p>
                        <div className="d-inline-flex align-items-center gap-2 status-pill">
                            <span className="pulse-dot"></span>
                            <span style={{ fontSize: "0.78rem", color: "#bae6fd" }}>All Systems Operational • 99.99% Reliability</span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="col-6 col-lg-3">
                        <h6 className="font-mono text-cyan-300 small text-uppercase mb-3 fw-bold">System Navigation</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 small">
                            <li>
                                <button onClick={() => handleNavClick("services")} className="btn btn-link p-0 text-decoration-none small text-start" style={{ color: "#cbd5e1" }}>
                                    Core Capabilities
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("blueprints")} className="btn btn-link p-0 text-decoration-none small text-start" style={{ color: "#cbd5e1" }}>
                                    AI Blueprint Finder
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("projects")} className="btn btn-link p-0 text-decoration-none small text-start" style={{ color: "#cbd5e1" }}>
                                    Featured Case Studies
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("calculator")} className="btn btn-link p-0 text-decoration-none small text-start" style={{ color: "#cbd5e1" }}>
                                    Scope & Architecture Estimator
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleNavClick("about")} className="btn btn-link p-0 text-decoration-none small text-start" style={{ color: "#cbd5e1" }}>
                                    About PrimeLabs
                                </button>
                            </li>
                        </ul>
                    </div>

                    {/* Channels & Official Links */}
                    <div className="col-6 col-lg-4">
                        <h6 className="font-mono text-cyan-300 small text-uppercase mb-3 fw-bold">Direct Engagement</h6>
                        <ul className="list-unstyled d-flex flex-column gap-2 small mb-3">
                            <li className="d-flex align-items-center gap-2">
                                <Mail size={14} className="text-cyan-400 flex-shrink-0" />
                                <a href="mailto:primelabs.incorporated@gmail.com" className="text-decoration-none font-mono small hover:text-cyan-300" style={{ color: "#e2e8f0", wordBreak: "break-all" }}>
                                    primelabs.incorporated@gmail.com
                                </a>
                            </li>
                            <li className="d-flex align-items-center gap-2">
                                <Phone size={14} className="text-emerald-400 flex-shrink-0" />
                                <a href="viber://chat?number=639369346575" className="text-decoration-none font-mono small hover:text-emerald-300" style={{ color: "#e2e8f0" }}>
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
                                title="PrimeLabs Facebook Page"
                            >
                                <FacebookIcon size={16} />
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
                    <div className="small font-mono" style={{ color: "#94a3b8" }}>
                        © {new Date().getFullYear()} <span className="text-white fw-semibold">PrimeLabs Digital Solutions</span>. Founded & Engineered by <span className="text-cyan-300">Francess Cillo</span>.
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
