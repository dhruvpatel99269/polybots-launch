import FeatureCard from "./FeatureCard";

const FeaturesSection = ({
  productName = "Polybots",
  features = [
  {
    title: "AI-Driven Full-Stack Code",
    description: "Generate complete frontend, backend, and database code from simple prompts.",
  },
  {
    title: "Instant Design Previews",
    description: "See live UI previews before building anything, straight from your input.",
  },
  {
    title: "Reusable Component Output",
    description: "Get modular, production-ready components compatible with modern frameworks.",
  },
  {
    title: "Auto System Diagramming",
    description: "Automatically generate visual system architecture diagrams and flows.",
  },
  {
    title: "Multibot Collaboration",
    description: "Work with specialized bots for UI, backend, DevOps, and more — all in sync.",
  },
]
}) => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose {productName}?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the powerful features that make our platform the perfect choice for modern teams.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
