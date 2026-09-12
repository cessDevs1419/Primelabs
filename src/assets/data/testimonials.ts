export interface TestimonialItem {
    id: string;
    quote: string;
    clientName: string;
    role: string;
    company: string;
    metric: string;
    rating: number;
}

export const TestimonialsData: TestimonialItem[] = [
    {
        id: "test-01",
        quote:
            "Francess and PrimeLabs transformed our manual operations into an automated machine. Their AI automation pipeline saved our team over 25 hours every week, while the new web app doubled our monthly inbound inquiries.",
        clientName: "Marcus Vance",
        role: "Managing Director",
        company: "Vance Growth Group",
        metric: "25+ hrs/week saved",
        rating: 5,
    },
    {
        id: "test-02",
        quote:
            "Unbelievable attention to detail and speed. The frontend is silky smooth, loads in under a second, and our Shopify conversion rate jumped by 38% right after launch. Best technical partner we've had.",
        clientName: "Danielle Cruz",
        role: "Head of E-Commerce",
        company: "BRND Deals",
        metric: "+38% Conversion Rate",
        rating: 5,
    },
    {
        id: "test-03",
        quote:
            "As a government entity, accessibility and system reliability are paramount. PrimeLabs delivered our legislative search portal ahead of schedule, with zero downtime and blazing fast response times.",
        clientName: "Engr. R. Sarmiento",
        role: "IT & Systems Lead",
        company: "Provincial Governance Council",
        metric: "10k+ Citizens Served Daily",
        rating: 5,
    },
];
