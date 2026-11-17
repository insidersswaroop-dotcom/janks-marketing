import AnimatedSection from "./AnimatedSection";

interface SectionHeadingProps {
  tag?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeading = ({ tag, title, description, centered = true, light = false }: SectionHeadingProps) => {
  return (
    <AnimatedSection className={`mb-12 lg:mb-16 ${centered ? "text-center max-w-4xl mx-auto" : ""}`}>
      {tag && (
        <span className={`inline-block text-xs font-semibold uppercase tracking-[0.2em] mb-3 px-3 py-1 rounded-full ${
          light ? "bg-primary-foreground/10 text-accent" : "bg-primary/5 text-primary"
        }`}>
          {tag}
        </span>
      )}
      <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base lg:text-lg leading-relaxed ${
          light ? "text-primary-foreground/70" : "text-muted-foreground"
        }`}>
          {description}
        </p>
      )}
    </AnimatedSection>
  );
};

export default SectionHeading;
