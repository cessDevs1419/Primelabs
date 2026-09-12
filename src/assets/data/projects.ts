import { type ProjectItem } from "../../app/model/projects";

import daton from "../images/Daton.png";
import cocreate from "../images/teamcocreate.png";
import ltb from "../images/lightblb.png";
import majestic from "../images/mjestic.png";
import qplis from "../images/Quezon.png";
import lappee from "../images/lappeev1-land.png";
import lappeeDash from "../images/lappee -dashboard3.png";
import apex from "../images/apex.png";
import cryo from "../images/cryo.png";
import riot from "../images/riot.png";
import swyper from "../images/sweeper.png";
import brnd from "../images/brnddeals.png";
import maharlika from "../images/maharlika.png";
import gsi from "../images/GSI.png";
import marci from "../images/marci-metzger.png";

export const ProjectsData: ProjectItem[] = [
    // 1. AI & AUTOMATIONS / ADMIN ECOSYSTEM
    {
        id: "ai-01",
        name: "Lappee Admin Ecosystem & Workflow Hub",
        tagline: "High-Throughput Enterprise Platform & Automated Operations Suite",
        description:
            "A mission-critical enterprise control system orchestrating automated data sync, multi-tier user role permissions, and real-time operational telemetries.",
        category: "ai-automation",
        categoryLabel: "AI & Automations",
        tech: ["React", "TypeScript", "REST APIs", "Automated Workflows", "State Engines"],
        link: "https://lappee.com/",
        images: [lappee, lappeeDash],
        metrics: [
            { label: "Deployment", value: "Enterprise Grade" },
            { label: "Data Latency", value: "Sub-Second" },
            { label: "Routines", value: "Autonomous" },
        ],
        challenge:
            "Managing scattered administrative workflows across thousands of daily transactions with legacy manual reconciliations.",
        solution:
            "Architected an ultra-responsive React & TypeScript management ecosystem with intelligent webhook synchronization and automated auditing pipelines.",
        architecture: [
            "Modular React component hierarchy with reactive state management",
            "Resilient API gateway connecting asynchronous background tasks",
            "Real-time telemetries with zero UI degradation",
        ],
        featured: true,
    },
    {
        id: "ai-02",
        name: "Cryo & Apex Gaming Automation Hub",
        tagline: "Automated Digital Assets Delivery & Sellix API Integrations",
        description:
            "Autonomous e-commerce delivery and customer verification pipeline interfacing with Sellix Webhooks and secure dynamic access tokens.",
        category: "ai-automation",
        categoryLabel: "AI & Automations",
        tech: ["TypeScript", "Sellix API", "Webhook Pipelines", "Node.js", "Security Hashing"],
        link: "https://cryogames.com/",
        images: [cryo, apex],
        metrics: [
            { label: "Fulfillment", value: "Instant Auto" },
            { label: "Pipeline", value: "Event-Driven" },
            { label: "Manual Delay", value: "Eliminated" },
        ],
        challenge:
            "High order volumes resulting in customer ticket backlogs and manual license key dispatch delays.",
        solution:
            "Engineered an automated fulfillment pipeline that validates webhook events instantly and securely issues keys with zero human intervention.",
        architecture: [
            "Webhook listener with replay-attack signature verification",
            "Asynchronous dispatch queues ensuring zero dropped orders",
            "Modern glassmorphism frontend for seamless customer tracking",
        ],
        featured: true,
    },

    // 2. WEB APPLICATIONS & HIGH PERFORMANCE
    {
        id: "web-01",
        name: "Lightbulb PH Digital Experience",
        tagline: "Ultra-Fast Agency Digital Platform & Lead Conversion Engine",
        description:
            "A bespoke digital platform engineered for rapid lead acquisition, interactive service demonstrations, and sub-second page loads.",
        category: "web-apps",
        categoryLabel: "Web Applications",
        tech: ["Modern Frontend", "JavaScript ES6+", "Conversion Optimization", "PHP", "Performance Tuning"],
        link: "https://lightbulb.ph/",
        images: [ltb],
        metrics: [
            { label: "Speed Standard", value: "Sub-Second" },
            { label: "User Interface", value: "High Contrast" },
            { label: "Architecture", value: "Conversion First" },
        ],
        challenge:
            "Outdated web performance causing visitor drop-offs and poor brand positioning for enterprise clientele.",
        solution:
            "Revamped UX/UI with lightweight modern assets, smooth micro-interactions, and conversion-optimized sales funnels.",
        architecture: [
            "Critical CSS inlining with dynamic deferred script bundling",
            "Interactive inquiry flows with client-side input validation",
            "SEO-structured semantic schema for peak organic visibility",
        ],
        featured: true,
    },
    {
        id: "web-02",
        name: "Team Co-Create Platform",
        tagline: "Collaborative Agency Portal & Workflow Showcase",
        description:
            "Dynamic agency showcase platform designed for interactive portfolio presentations, service exploration, and rapid client onboarding.",
        category: "web-apps",
        categoryLabel: "Web Applications",
        tech: ["Frontend Architecture", "Interactive UI", "WordPress Core", "Custom JavaScript"],
        link: "https://teamcocreate.com/",
        images: [cocreate],
        metrics: [
            { label: "Usability", value: "Mobile First" },
            { label: "Interaction", value: "Fluid Micro-UX" },
            { label: "Engagement", value: "Optimized" },
        ],
        challenge:
            "Presenting multi-disciplinary agency services without overwhelming prospective clients.",
        solution:
            "Created an intuitive progressive disclosure interface with fluid animations and clear path-to-action touchpoints.",
        architecture: [
            "Custom component state with smooth layout shifts",
            "Responsive grid systems tested across 15+ viewport resolutions",
            "Optimized asset pipelines reducing total payload by 60%",
        ],
        featured: false,
    },

    // 3. E-COMMERCE & HIGH CONVERSION
    {
        id: "ecom-01",
        name: "Brand Deals (BRND) Storefront",
        tagline: "High-Volume Shopify Liquid Architecture & Rapid Checkout Engine",
        description:
            "Custom-coded Shopify storefront optimized for flash sales, instantaneous cart interactions, and high-frequency liquidation inventory.",
        category: "ecommerce",
        categoryLabel: "E-Commerce",
        tech: ["Shopify Liquid", "Modern JS", "Conversion Engineering", "Cart APIs", "Schema Optimization"],
        link: "https://www.brnddeals.com/",
        images: [brnd],
        metrics: [
            { label: "Checkout Engine", value: "1-Click Accelerated" },
            { label: "Cart Tech", value: "AJAX Drawer" },
            { label: "Inventory", value: "Live Dynamic" },
        ],
        challenge:
            "High traffic spikes during liquidation drops caused cart friction and slowed down checkout velocity.",
        solution:
            "Engineered custom Shopify Liquid components with AJAX drawer carts and direct 1-click checkout acceleration.",
        architecture: [
            "Zero-bloat Liquid template architecture eliminating heavy apps",
            "Client-side inventory caching for instantaneous badge updates",
            "Optimized responsive image sets with WebP formats",
        ],
        featured: true,
    },
    {
        id: "ecom-02",
        name: "Majestic Print & Industrial Packaging",
        tagline: "Custom B2B Industrial Catalog & Dynamic Quoting Pipeline",
        description:
            "Enterprise B2B product showcase and dynamic specification calculator for high-volume commercial printing orders.",
        category: "ecommerce",
        categoryLabel: "E-Commerce",
        tech: ["Custom CMS", "PHP", "B2B Quoting Logic", "SEO Mastery", "Responsive UI"],
        link: "https://majesticprintpackaging.com/",
        images: [majestic],
        metrics: [
            { label: "Catalog Engine", value: "Dynamic Specs" },
            { label: "Lead Pipeline", value: "Auto-Routed" },
            { label: "Search Index", value: "SEO Dominant" },
        ],
        challenge:
            "Industrial clients required customized specs (dimensions, materials, volume discounts) before requesting quotes.",
        solution:
            "Built an intuitive interactive specification builder guiding buyers to the exact product config in 3 clicks.",
        architecture: [
            "Modular product taxonomy with instant client-side filtering",
            "Optimized lead distribution routing inquiries directly to sales teams",
            "High-contrast industrial design aesthetic built for enterprise buyers",
        ],
        featured: false,
    },

    // 4. ENTERPRISE & GOV / HIGH-RELIABILITY
    {
        id: "ent-01",
        name: "Quezon Province Legislative Portal",
        tagline: "Public Governance Transparency & Legal Document Archival System",
        description:
            "Official government legislative platform serving thousands of citizens with instant ordinance search, tracking, and council archives.",
        category: "enterprise",
        categoryLabel: "Enterprise & Gov",
        tech: ["Vue.js", "JavaScript ES6+", "REST APIs", "Government Accessibility", "Document Indexing"],
        link: "https://sp.quezon.gov.ph/",
        images: [qplis],
        metrics: [
            { label: "Records Hub", value: "10,000+ Indexed" },
            { label: "Search Engine", value: "Instant Query" },
            { label: "Accessibility", value: "WCAG AA Standard" },
        ],
        challenge:
            "Citizen difficulty searching through thousands of PDF ordinances and legislative resolutions spanning years.",
        solution:
            "Engineered a lightning-fast Vue.js portal with instant multi-facet keyword indexing and mobile-friendly document previews.",
        architecture: [
            "Vue.js reactive filtering engine for rapid client-side search",
            "Government-compliant accessibility color palettes and semantic structure",
            "Secure caching layers preventing database overload during public inquiries",
        ],
        featured: true,
    },
    {
        id: "ent-02",
        name: "Daton Haywood Executive Brand",
        tagline: "High-Authority Executive Portfolio & Booking Funnel",
        description:
            "Custom brand presence and client acquisition portal for executive business coaching and keynote speaking engagements.",
        category: "enterprise",
        categoryLabel: "Enterprise & Gov",
        tech: ["WordPress Enterprise", "Custom PHP", "Lead Funnel", "Performance Architecture"],
        link: "https://datonhaywood.com/",
        images: [daton],
        metrics: [
            { label: "Booking System", value: "Automated Calendar" },
            { label: "Brand Tier", value: "Executive Luxury" },
            { label: "Render Velocity", value: "Instantaneous" },
        ],
        challenge:
            "Translating executive credentials into high-ticket enterprise client conversions.",
        solution:
            "Built a bespoke, luxury editorial layout with embedded booking workflows and high-converting video integrations.",
        architecture: [
            "Bespoke layout architecture with zero reliance on bulky page builders",
            "Automated calendar booking synchronization",
            "Optimized typography hierarchy for effortless reading flow",
        ],
        featured: false,
    },
    {
        id: "ent-03",
        name: "Maharlika & GSI Global Digital Portals",
        tagline: "Enterprise Security & Global Supply Chain Presence",
        description:
            "Corporate digital platforms delivering high-security client verification and international partner showcases.",
        category: "enterprise",
        categoryLabel: "Enterprise & Gov",
        tech: ["TypeScript", "API Gateways", "Enterprise UI", "Responsive Design"],
        link: "",
        images: [maharlika, gsi, marci],
        metrics: [
            { label: "Security Profile", value: "Enterprise Grade" },
            { label: "Global Edge", value: "CDN Accelerated" },
            { label: "Uptime Protocol", value: "Zero Downtime" },
        ],
        challenge:
            "Establishing international credibility with strict security and high multi-region reliability.",
        solution:
            "Designed resilient corporate portals optimized for global CDN edge caching and modern interactive client portals.",
        architecture: [
            "Global CDN edge distribution for instant worldwide rendering",
            "Strict Content Security Policy (CSP) and zero third-party vulnerabilities",
            "Clean component abstractions allowing rapid feature rollout",
        ],
        featured: false,
    },
    {
        id: "ent-04",
        name: "RIOT & Swypers High-Security Gaming Hubs",
        tagline: "High-Concurrency Digital Marketplace & Asset Verification",
        description:
            "Specialized real-time marketplace platforms featuring instant stock telemetry and automated fraud mitigation.",
        category: "ai-automation",
        categoryLabel: "AI & Automations",
        tech: ["Sellix API", "JavaScript", "Automation Scripts", "Security Validation"],
        link: "",
        images: [riot, swyper],
        metrics: [
            { label: "Fulfillment SLA", value: "Real-Time Push" },
            { label: "Security Verification", value: "Token Cryptography" },
            { label: "Architecture", value: "High Concurrency" },
        ],
        challenge:
            "Mitigating fraudulent payment attempts while delivering digital assets within seconds of confirmation.",
        solution:
            "Built dynamic payment webhook listeners with real-time token generation and inventory deduction.",
        architecture: [
            "Asynchronous state sync between Sellix APIs and frontend DOM",
            "Encrypted delivery links with single-use expiration tokens",
            "High-contrast dark gaming aesthetic with vibrant glowing UI",
        ],
        featured: false,
    }
];
