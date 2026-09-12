import React, { useState, useEffect } from "react";
import logo from "../../assets/images/primelabs_logo_transparent.png";
import { Navbar, Container, Nav } from "react-bootstrap";
import { ArrowRight, Menu, X } from "lucide-react";

export const Navigationbar: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleNavClick = (sectionId: string) => {
        setExpanded(false);
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <Navbar
            expand="lg"
            expanded={expanded}
            className={`position-fixed w-100 top-0 start-0 z-3 transition-all ${
                scrolled ? "glass-nav py-2 shadow-lg" : "bg-transparent py-3"
            }`}
            style={{ transition: "all 0.3s ease" }}
        >
            <Container className="d-flex align-items-center justify-content-between">
                {/* Brand Logo & Name */}
                <Navbar.Brand
                    href="#hero"
                    onClick={(e) => {
                        e.preventDefault();
                        handleNavClick("hero");
                    }}
                    className="d-flex align-items-center gap-2 text-decoration-none m-0 p-0 cursor-pointer"
                >
                    <div className="position-relative d-flex align-items-center justify-content-center p-1 rounded-2" style={{ background: "rgba(10, 24, 60, 0.7)", border: "1px solid rgba(56, 189, 248, 0.3)" }}>
                        <img
                            src={logo}
                            alt="PrimeLabs Logo"
                            style={{ width: "32px", height: "32px", objectFit: "contain" }}
                        />
                    </div>
                    <div>
                        <div className="d-flex align-items-center gap-1">
                            <span className="font-display fw-bold text-white fs-5 tracking-tight">Prime<span className="text-gradient">Labs</span></span>
                        </div>
                        <span className="d-none d-sm-block font-mono text-muted text-uppercase" style={{ fontSize: "0.68rem", letterSpacing: "0.08em", color: "#94a3b8" }}>
                            Digital Solutions & AI
                        </span>
                    </div>
                </Navbar.Brand>

                {/* Status Indicator (Desktop) */}
                <div className="d-none d-xl-flex align-items-center status-pill">
                    <span className="pulse-dot"></span>
                    <span style={{ fontSize: "0.8rem", color: "#bae6fd" }}>Available for Q1/Q2 Builds & AI Workflows</span>
                </div>

                {/* Hamburger Toggle */}
                <Navbar.Toggle
                    aria-controls="primelabs-navbar-nav"
                    onClick={() => setExpanded(!expanded)}
                    className="border-0 p-1 text-white shadow-none"
                >
                    {expanded ? <X size={24} /> : <Menu size={24} />}
                </Navbar.Toggle>

                {/* Nav Links & CTA */}
                <Navbar.Collapse id="primelabs-navbar-nav" className="mt-3 mt-lg-0">
                    <Nav className="ms-auto align-items-lg-center gap-1 gap-lg-3">
                        <Nav.Link
                            href="#services"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("services");
                            }}
                            className="text-slate-200 hover:text-cyan-300 font-sans fw-semibold px-2 py-1"
                        >
                            Services
                        </Nav.Link>
                        <Nav.Link
                            href="#blueprints"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("blueprints");
                            }}
                            className="text-slate-200 hover:text-cyan-300 font-sans fw-semibold px-2 py-1"
                        >
                            AI Engine
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("projects");
                            }}
                            className="text-slate-200 hover:text-cyan-300 font-sans fw-semibold px-2 py-1"
                        >
                            Case Studies
                        </Nav.Link>
                        <Nav.Link
                            href="#calculator"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("calculator");
                            }}
                            className="text-slate-200 hover:text-cyan-300 font-sans fw-semibold px-2 py-1"
                        >
                            Scope Estimator
                        </Nav.Link>
                        <Nav.Link
                            href="#about"
                            onClick={(e) => {
                                e.preventDefault();
                                handleNavClick("about");
                            }}
                            className="text-slate-200 hover:text-cyan-300 font-sans fw-semibold px-2 py-1"
                        >
                            About
                        </Nav.Link>

                        <div className="pt-2 pt-lg-0 ps-lg-2">
                            <button
                                onClick={() => handleNavClick("contact")}
                                className="btn-prime py-2 px-3 d-inline-flex align-items-center gap-2"
                                style={{ fontSize: "0.85rem" }}
                            >
                                <span>Book Discovery Call</span>
                                <ArrowRight size={14} />
                            </button>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigationbar;
