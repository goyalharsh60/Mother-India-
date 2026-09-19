interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
}

const SectionHeader = ({ label, title, description, centered = true }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <span className="section-label">{label}</span>
      <h2 className="section-title mt-2">{title}</h2>
      <div className={`section-divider mt-4 ${centered ? "mx-auto" : ""}`} />
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
