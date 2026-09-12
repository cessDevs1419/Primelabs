import React, { useState } from "react";
import Counter from "../components/counter";
import ProjectCard from "../components/project_card";
import CaseStudyModal from "../components/case_study_modal";
import AIBlueprintFinder from "../components/ai_blueprint_modal";
import ScopeCalculator from "../components/scope_calculator";
import ContactHub from "../components/contact_modal";
import { ProjectsData } from "../../assets/data/projects";
import { TestimonialsData } from "../../assets/data/testimonials";
import { type ProjectItem, type ProjectCategory } from "../model/projects";
import { 
    Sparkles, 
    ArrowRight, 
    Code2, 
    Bot, 
    Cpu, 
    Gauge, 
    CheckCircle2, 
    Star, 
    Layers, 
    Terminal,
    ExternalLink
} from "lucide-react";
import confetti from "canvas-confetti";

export const Home: React.FC = () => {
    const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
    const [inquiryPrefill, setInquiryPrefill] = useState<string>("");

    const filteredProjects = ProjectsData.filter((p) => {
        if (activeCategory === "all") return true;
        return p.category === activeCategory;
    });

    const handleSelectBlueprint = (blueprintTitle: string) => {
        setInquiryPrefill(`I'm interested in deploying the PrimeLabs Blueprint: "${blueprintTitle}". Please provide a technical breakdown and consultation.`);
        const contactEl = document.getElementById("contact");
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: "smooth" });
        }
    };

    const handleScopeRequest = (scopeDetails: string) => {
        setInquiryPrefill(scopeDetails);
        const contactEl = document.getElementById("contact");
        if (contactEl) {
            contactEl.scrollIntoView({ behavior: "smooth" });
        }
    };

    const triggerHeroConfetti = () => {
        confetti({
            particleCount: 80,
            spread: 80,
            origin: { y: 0.6 },
        });
    };

    return (
        <div className="bg-obsidian">
            {/* Case Study Modal */}
            <CaseStudyModal
                project={selectedProject}
                onClose={() => setSelectedProject(null)}
            />

            {/* HERO SECTION */}
            <section id="hero" className="position-relative pt-5 pb-5 overflow-hidden" style={{ minHeight: "92vh", display: "flex", alignItems: "center" }}>
                <div className="container-lg position-relative z-1 pt-5">
                    <div className="text-center max-w-4xl mx-auto pt-4">
                        {/* Status Badge */}
                        <div 
                            onClick={triggerHeroConfetti}
                            className="d-inline-flex align-items-center gap-2 status-pill mb-4 cursor-pointer hover:border-cyan-400 transition-all"
                            data-aos="fade-down"
                            title="Click for celebratory sparks!"
                            style={{ cursor: "pointer" }}
                        >
                            <span className="pulse-dot"></span>
                            <span className="font-mono" style={{ fontSize: "0.82rem" }}>
                                PrimeLabs • Mid Frontend Developer & AI Automation Architect
                            </span>
                        </div>

                        {/* High-Impact Persuasive Headline */}
                        <h1 className="font-display display-4 fw-extrabold text-white mb-4 tracking-tight hero-title" data-aos="fade-up" data-aos-delay="100">
                            Engineering <span className="text-gradient">High-Performance Web Platforms</span> & Autonomous <span className="text-gradient-purple">AI Workflows</span>.
                        </h1>

                        {/* Persuasive Business Copy */}
                        <p className="lead text-slate-300 mb-5 mx-auto font-sans" style={{ maxWidth: "780px", fontSize: "1.18rem" }} data-aos="fade-up" data-aos-delay="200">
                            With <strong className="text-white">3+ years of specialized experience</strong>, I build ultra-responsive modern frontends, design scalable system architectures, and engineer autonomous AI automation pipelines that eliminate operational friction and scale revenue.
                        </p>

                        {/* Primary CTAs */}
                        <div className="d-flex flex-column flex-sm-row justify-content-center align-items-center gap-3 mb-5" data-aos="fade-up" data-aos-delay="300">
                            <button
                                onClick={() => {
                                    const el = document.getElementById("contact");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="btn-prime py-3 px-4 d-inline-flex align-items-center gap-2"
                                style={{ fontSize: "1rem" }}
                            >
                                <span>Schedule Discovery Call</span>
                                <ArrowRight size={18} />
                            </button>
                            <button
                                onClick={() => {
                                    const el = document.getElementById("projects");
                                    if (el) el.scrollIntoView({ behavior: "smooth" });
                                }}
                                className="btn-secondary-glow py-3 px-4 d-inline-flex align-items-center gap-2"
                                style={{ fontSize: "1rem" }}
                            >
                                <span>Explore Case Studies</span>
                                <ExternalLink size={16} />
                            </button>
                        </div>

                        {/* Tech Stack Marquee / Ecosystem Badges */}
                        <div className="pt-2 border-top border-white border-opacity-10" data-aos="fade-up" data-aos-delay="400">
                            <span className="text-muted font-mono small text-uppercase d-block mb-3" style={{ fontSize: "0.75rem", letterSpacing: "0.1em" }}>
                                Core Production Technologies & Integrations
                            </span>
                            <div className="d-flex flex-wrap justify-content-center gap-2">
                                {[
                                    "React 19", "TypeScript", "JavaScript ES6+", "AI Agents & LLMs",
                                    "System Architecture", "REST & GraphQL APIs", "Sellix API", "Shopify Liquid",
                                    "Vue.js", "WordPress Core", "Webhook Pipelines", "Vite"
                                ].map((badge) => (
                                    <span key={badge} className="badge-tech">
                                        <Cpu size={12} className="text-cyan-400" />
                                        {badge}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CREDIBILITY & METRICS BAR */}
            <section className="py-4 border-top border-bottom border-white border-opacity-10" style={{ background: "rgba(10, 15, 28, 0.7)" }}>
                <div className="container-lg">
                    <div className="row g-4 justify-content-center align-items-center text-center text-md-start">
                        <div className="col-6 col-md-3">
                            <Counter end={3} suffix="+" label="Years Production Experience" />
                        </div>
                        <div className="col-6 col-md-3">
                            <Counter end={20} suffix="+" label="Systems & Platforms Shipped" />
                        </div>
                        <div className="col-6 col-md-3">
                            <Counter end={100} suffix="+ hrs" label="Saved / Month via AI Workflows" />
                        </div>
                        <div className="col-6 col-md-3">
                            <Counter end={99} suffix=".9%" label="Uptime & Production Reliability" />
                        </div>
                    </div>
                </div>
            </section>

            {/* CORE SERVICES & VALUE PROPOSITIONS */}
            <section id="services" className="py-5 position-relative">
                <div className="container-lg py-4">
                    <div className="text-center max-w-2xl mx-auto mb-5" data-aos="fade-up">
                        <div className="d-inline-flex align-items-center gap-2 status-pill mb-2">
                            <Sparkles size={14} className="text-cyan-400" />
                            <span>Engineering Capabilities</span>
                        </div>
                        <h2 className="font-display display-6 text-white mb-2">
                            Architected For <span className="text-gradient">Scale, Speed & Autonomy</span>
                        </h2>
                        <p className="text-muted m-0">
                            We bridge cutting-edge frontend user experiences with intelligent backend automations to solve real operational bottlenecks.
                        </p>
                    </div>

                    <div className="row g-4">
                        {/* Service 1 */}
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="100">
                            <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between border border-white border-opacity-10 glow-card-cyan">
                                <div>
                                    <div className="p-3 rounded-3 bg-cyan-500 bg-opacity-10 text-cyan-400 d-inline-flex mb-3 border border-cyan-400 border-opacity-20">
                                        <Code2 size={24} />
                                    </div>
                                    <h4 className="font-display text-white mb-2 fs-5">Modern Frontend Engineering</h4>
                                    <p className="text-muted small mb-3">
                                        Bespoke web applications built with React 19, TypeScript, and modern styling. Focused on sub-second render speeds, responsive UX, and high conversion rates.
                                    </p>
                                </div>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-1 small text-slate-300">
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-cyan-400" />
                                        <span>React / TypeScript / Vite</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-cyan-400" />
                                        <span>Micro-interactions & UX</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-cyan-400" />
                                        <span>100/100 Core Web Vitals</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 2 */}
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="200">
                            <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between border border-white border-opacity-10 glow-card-cyan">
                                <div>
                                    <div className="p-3 rounded-3 bg-purple-500 bg-opacity-10 text-purple-400 d-inline-flex mb-3 border border-purple-400 border-opacity-20">
                                        <Bot size={24} />
                                    </div>
                                    <h4 className="font-display text-white mb-2 fs-5">AI Automations & Workflows</h4>
                                    <p className="text-muted small mb-3">
                                        Intelligent autonomous agents, custom LLM integration, lead enrichment, and automated webhook pipelines that save hundreds of human hours every month.
                                    </p>
                                </div>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-1 small text-slate-300">
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-purple-400" />
                                        <span>Autonomous AI Agents</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-purple-400" />
                                        <span>Webhook & CRM Automation</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-purple-400" />
                                        <span>Instant Lead Qualification</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 3 */}
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="300">
                            <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between border border-white border-opacity-10 glow-card-cyan">
                                <div>
                                    <div className="p-3 rounded-3 bg-emerald-500 bg-opacity-10 text-emerald-400 d-inline-flex mb-3 border border-emerald-400 border-opacity-20">
                                        <Layers size={24} />
                                    </div>
                                    <h4 className="font-display text-white mb-2 fs-5">System Architecture & APIs</h4>
                                    <p className="text-muted small mb-3">
                                        Resilient system design, secure API gateways, and distributed cloud microservices that withstand traffic spikes without performance hiccups.
                                    </p>
                                </div>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-1 small text-slate-300">
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-emerald-400" />
                                        <span>Scalable API Gateways</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-emerald-400" />
                                        <span>Zero-Downtime Infrastructure</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-emerald-400" />
                                        <span>Security & Signature Hashing</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Service 4 */}
                        <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="400">
                            <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between border border-white border-opacity-10 glow-card-cyan">
                                <div>
                                    <div className="p-3 rounded-3 bg-amber-500 bg-opacity-10 text-amber-400 d-inline-flex mb-3 border border-amber-400 border-opacity-20">
                                        <Gauge size={24} />
                                    </div>
                                    <h4 className="font-display text-white mb-2 fs-5">High-Converting E-Commerce</h4>
                                    <p className="text-muted small mb-3">
                                        Shopify Liquid customizations, Sellix digital checkout pipelines, and WordPress architectures engineered specifically to lift conversions and maximize AOV.
                                    </p>
                                </div>
                                <ul className="list-unstyled mb-0 d-flex flex-column gap-1 small text-slate-300">
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-amber-400" />
                                        <span>Shopify & Sellix Mastery</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-amber-400" />
                                        <span>AJAX Carts & 1-Click Buy</span>
                                    </li>
                                    <li className="d-flex align-items-center gap-2">
                                        <CheckCircle2 size={14} className="text-amber-400" />
                                        <span>Search Engine Optimization</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* INTERACTIVE AI SOLUTION ARCHITECTURE FINDER */}
            <section id="blueprints" className="py-4 position-relative">
                <div className="container-lg">
                    <AIBlueprintFinder onSelectBlueprint={handleSelectBlueprint} />
                </div>
            </section>

            {/* FEATURED CASE STUDIES & PROJECTS SHOWCASE */}
            <section id="projects" className="py-5 position-relative">
                <div className="container-lg py-4">
                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-end gap-3 mb-5" data-aos="fade-up">
                        <div>
                            <div className="d-inline-flex align-items-center gap-2 status-pill mb-2">
                                <Sparkles size={14} className="text-cyan-400" />
                                <span>Proven Track Record</span>
                            </div>
                            <h2 className="font-display display-6 text-white m-0">
                                Featured <span className="text-gradient">Case Studies & Architectures</span>
                            </h2>
                            <p className="text-muted m-0 mt-1">
                                Explore real-world platforms, high-throughput portals, and autonomous systems shipped for clients.
                            </p>
                        </div>

                        {/* Category Filter Tabs */}
                        <div className="d-flex flex-wrap gap-2">
                            {[
                                { id: "all", label: "All Projects" },
                                { id: "ai-automation", label: "AI & Automations" },
                                { id: "web-apps", label: "Web Applications" },
                                { id: "ecommerce", label: "E-Commerce" },
                                { id: "enterprise", label: "Enterprise & Gov" },
                            ].map((cat) => (
                                <button
                                    key={cat.id}
                                    onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                                    className={`btn btn-sm px-3 py-2 rounded-2 transition-all ${
                                        activeCategory === cat.id
                                            ? "btn-prime"
                                            : "btn-secondary-glow text-muted"
                                    }`}
                                    style={{ fontSize: "0.85rem" }}
                                >
                                    {cat.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Projects Grid */}
                    <div className="row g-4">
                        {filteredProjects.map((project) => (
                            <div key={project.id} className="col-md-6 col-lg-4" data-aos="fade-up">
                                <ProjectCard
                                    project={project}
                                    onViewDetails={(p) => setSelectedProject(p)}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE SCOPE & ROI ESTIMATOR */}
            <section id="calculator-section" className="py-4 position-relative">
                <div className="container-lg">
                    <ScopeCalculator onRequestQuote={handleScopeRequest} />
                </div>
            </section>

            {/* ABOUT & LEADERSHIP PHILOSOPHY */}
            <section id="about" className="py-5 position-relative border-top border-white border-opacity-10">
                <div className="container-lg py-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6" data-aos="fade-right">
                            <div className="d-inline-flex align-items-center gap-2 status-pill mb-3">
                                <Terminal size={14} className="text-cyan-400" />
                                <span>Founder & Engineering Lead</span>
                            </div>
                            <h2 className="font-display display-6 text-white mb-3">
                                Behind <span className="text-gradient">PrimeLabs</span>: Francess Cillo
                            </h2>
                            <p className="text-slate-300 mb-3" style={{ fontSize: "1.05rem" }}>
                                As a <strong>Mid Frontend Developer & AI Automation Architect</strong> with 3+ years in the software industry, I established PrimeLabs to solve the gap between beautiful design and robust operational systems.
                            </p>
                            <p className="text-muted small mb-4">
                                Many businesses lose revenue because their digital storefronts are slow or their operations are bogged down by repetitive manual tasks. I design bespoke web ecosystems that look world-class, load instantly, and run autonomously using modern AI workflow orchestration.
                            </p>

                            {/* Core Standards */}
                            <div className="row g-3 mb-4">
                                <div className="col-6">
                                    <div className="p-3 rounded-2 bg-surface-elevated border border-white border-opacity-10">
                                        <span className="text-cyan-400 font-mono fw-bold d-block mb-1">98+ Performance</span>
                                        <span className="text-muted small">Sub-second load times on all device viewports.</span>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <div className="p-3 rounded-2 bg-surface-elevated border border-white border-opacity-10">
                                        <span className="text-purple-400 font-mono fw-bold d-block mb-1">AI-First Workflows</span>
                                        <span className="text-muted small">Eliminating manual data entry & ticket backlogs.</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Col: Technical Stack Matrix */}
                        <div className="col-lg-6" data-aos="fade-left">
                            <div className="glass-panel p-4 p-md-5 border border-cyan-500/20" style={{ background: "rgba(12, 18, 32, 0.9)" }}>
                                <h5 className="font-display text-white mb-4 d-flex align-items-center gap-2">
                                    <Cpu size={20} className="text-cyan-400" />
                                    <span>Engineered Tech Stack Matrix</span>
                                </h5>

                                <div className="d-flex flex-column gap-4">
                                    <div>
                                        <div className="d-flex justify-content-between text-muted font-mono small mb-1">
                                            <span>Frontend & User Experience (React, TypeScript, CSS)</span>
                                            <span className="text-cyan-400">95%</span>
                                        </div>
                                        <div className="progress bg-black bg-opacity-50" style={{ height: "6px" }}>
                                            <div className="progress-bar bg-gradient" style={{ width: "95%", background: "var(--gradient-primary)" }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="d-flex justify-content-between text-muted font-mono small mb-1">
                                            <span>AI Automation & Autonomous Agents (LLMs, Webhooks)</span>
                                            <span className="text-purple-400">92%</span>
                                        </div>
                                        <div className="progress bg-black bg-opacity-50" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "92%", background: "var(--gradient-accent)" }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="d-flex justify-content-between text-muted font-mono small mb-1">
                                            <span>System Architecture & API Integrations</span>
                                            <span className="text-emerald-400">90%</span>
                                        </div>
                                        <div className="progress bg-black bg-opacity-50" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "90%", background: "#10b981" }}></div>
                                        </div>
                                    </div>

                                    <div>
                                        <div className="d-flex justify-content-between text-muted font-mono small mb-1">
                                            <span>E-Commerce, Shopify Liquid & CMS Architecture</span>
                                            <span className="text-amber-400">94%</span>
                                        </div>
                                        <div className="progress bg-black bg-opacity-50" style={{ height: "6px" }}>
                                            <div className="progress-bar" style={{ width: "94%", background: "#f59e0b" }}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* TESTIMONIALS & SOCIAL PROOF */}
            <section className="py-5 position-relative border-top border-white border-opacity-10" style={{ background: "rgba(8, 12, 22, 0.6)" }}>
                <div className="container-lg py-4">
                    <div className="text-center max-w-2xl mx-auto mb-5" data-aos="fade-up">
                        <div className="d-inline-flex align-items-center gap-2 status-pill mb-2">
                            <Star size={14} className="text-amber-400 fill-amber-400" />
                            <span>Client Endorsements</span>
                        </div>
                        <h2 className="font-display display-6 text-white mb-2">
                            Trusted By <span className="text-gradient">Founders & Engineering Leads</span>
                        </h2>
                        <p className="text-muted m-0">
                            See what business leaders say about PrimeLabs speed, reliability, and automated solutions.
                        </p>
                    </div>

                    <div className="row g-4">
                        {TestimonialsData.map((t, idx) => (
                            <div key={t.id} className="col-md-4" data-aos="fade-up" data-aos-delay={idx * 100}>
                                <div className="glass-panel p-4 h-100 d-flex flex-column justify-content-between border border-white border-opacity-10 glow-card-cyan">
                                    <div>
                                        <div className="d-flex gap-1 mb-3 text-amber-400">
                                            {[...Array(t.rating)].map((_, i) => (
                                                <Star key={i} size={16} fill="#f59e0b" />
                                            ))}
                                        </div>
                                        <p className="text-slate-200 small mb-4 italic" style={{ lineHeight: "1.7" }}>
                                            "{t.quote}"
                                        </p>
                                    </div>

                                    <div className="pt-3 border-top border-white border-opacity-10">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div>
                                                <span className="text-white fw-bold d-block small">{t.clientName}</span>
                                                <span className="text-muted font-mono" style={{ fontSize: "0.72rem" }}>
                                                    {t.role}, {t.company}
                                                </span>
                                            </div>
                                            <span className="badge bg-cyan-500 bg-opacity-15 text-cyan-400 font-mono small">
                                                {t.metric}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* INTERACTIVE CONTACT HUB & CTAs */}
            <section className="py-4 position-relative">
                <div className="container-lg">
                    <ContactHub initialMessage={inquiryPrefill} />
                </div>
            </section>
        </div>
    );
};

export default Home;
