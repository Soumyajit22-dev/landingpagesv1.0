import { motion } from "framer-motion";
import { Cpu, Shield, Globe, Layers, Zap, Lock } from "lucide-react";

const features = [
  {
    icon: Cpu,
    title: "Neural Engine V3",
    description:
      "Our proprietary engine processes tokens 10x faster than standard LLMs, reducing latency to near zero.",
    visual: "chart",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "SOC 2 Type II certified. Your data is encrypted in transit and at rest with military-grade standards.",
    visual: "shield",
  },
  {
    icon: Globe,
    title: "Global Edge Network",
    description:
      "Deploy to 40+ regions with a single click. Automatic failover and load balancing included.",
    highlight: "40+ Regions Worldwide",
    visual: "globe",
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description:
      "Works with any stack in seconds. Connect to Python, Node.js, and Rest APIs or GraphQL.",
    tags: ["Python", "Node.js", "REST API", "GraphQL"],
    visual: "code",
  },
];

const Features = () => {
  return (
    <section id="platform" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Designed for <span className="text-gradient">Scale</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl">
            Our infrastructure allows you to deploy AI models instantly, without
            worrying about infrastructure to ever break.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300"
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-semibold mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6">{feature.description}</p>

                {/* Visual Element */}
                {feature.visual === "chart" && (
                  <div className="flex items-end gap-1 h-16">
                    {[40, 65, 45, 80, 55, 90, 70, 95].map((height, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${height}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.05 }}
                        className="flex-1 bg-primary/80 rounded-sm"
                      />
                    ))}
                  </div>
                )}

                {feature.highlight && (
                  <div className="flex items-center gap-2 text-primary text-sm font-medium">
                    <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                    {feature.highlight}
                  </div>
                )}

                {feature.tags && (
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
