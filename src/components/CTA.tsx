import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary/15 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-4">
            Ready to build the
          </h2>
          <h2 className="font-display text-4xl md:text-6xl font-bold text-gradient mb-8">
            impossible?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10">
            Join 10,000+ developers pushing the boundaries of what AI can
            do. No credit card required for free-tier services.
          </p>

          {/* Email Input */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto mb-6"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
            />
            <Button variant="hero" size="lg" className="w-full sm:w-auto whitespace-nowrap">
              Get Access
              <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>

          <p className="text-sm text-muted-foreground">
            By signing up, you agree to our{" "}
            <a href="#" className="text-primary hover:underline">
              Terms of Service
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
