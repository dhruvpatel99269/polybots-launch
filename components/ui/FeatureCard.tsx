import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface FeatureCardProps {
  feature: {
    title: string;
    description: string;
  };
  index: number;
}

const FeatureCard = ({ feature, index }: FeatureCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="p-6 rounded-lg bg-card border border-border hover:border-[#d97757]/50 transition-colors"
  >
    <div className="w-12 h-12 rounded-lg bg-[#d97757]/10 flex items-center justify-center mb-4">
      <Star className="w-6 h-6 text-[#d97757]" />
    </div>
    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
    <p className="text-muted-foreground">{feature.description}</p>
  </motion.div>
);

export default FeatureCard;
