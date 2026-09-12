import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    scrollTo?: string;
    email?: string;
    variant?: "prime" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
    children,
    className,
    scrollTo,
    email,
    onClick,
    variant = "prime",
    ...props
}) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (email) {
            window.location.href = `mailto:${email}`;
        }
        if (scrollTo) {
            const element = document.getElementById(scrollTo);
            if (element) {
                element.scrollIntoView({ behavior: "smooth" });
            }
        }

        if (onClick) {
            onClick(e);
        }
    };

    const variantClass = variant === "prime" ? "btn-prime" : "btn-secondary-glow";

    return (
        <button
            {...props}
            onClick={handleClick}
            className={`${variantClass} ${className || ""}`}
        >
            {children}
        </button>
    );
};

export default Button;
