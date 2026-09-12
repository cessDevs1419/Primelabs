import React from "react";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    parent_className?: string;
    child_className?: string;
    container_id?: string;
}

export const Container: React.FC<ContainerProps> = ({
    children,
    parent_className,
    child_className,
    container_id,
    ...props
}) => {
    return (
        <section
            id={container_id}
            className={`position-relative py-5 ${parent_className || ""}`}
            {...props}
        >
            <div className={`container-lg ${child_className || ""}`}>
                {children}
            </div>
        </section>
    );
};

export default Container;
