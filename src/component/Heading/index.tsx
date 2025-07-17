export const SectionHeading = ({
    content,
    className = "",
}: {
    content: string;
    className?: string;
}) => {
    return (
        <h3
            className={`text-secondary mb-5 px-2.5 py-0.5 rounded-md bg-secondary/15 w-fit font-medium text-lg ${className}`}
        >
            {content}
        </h3>
    );
};
