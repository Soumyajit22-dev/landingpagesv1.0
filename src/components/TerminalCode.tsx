import { motion } from "framer-motion";

const TerminalCode = () => {
  const codeLines = [
    { type: "keyword", content: "import", rest: " NexusClient " },
    { type: "keyword", content: "from", rest: " " },
    { type: "string", content: "'@nexus/ai'" },
    { type: "empty", content: "" },
    { type: "comment", content: "# Initialize the autonomous agent" },
    { type: "normal", content: "client = NexusClient(api_key=" },
    { type: "string", content: "\"nx_live_...\"" },
    { type: "normal", content: ")" },
    { type: "empty", content: "" },
    { type: "normal", content: "response = agent.execute_task(" },
    { type: "normal", content: '    model=' },
    { type: "string", content: '"nexus-ultra"' },
    { type: "normal", content: "," },
    { type: "normal", content: '    task=' },
    { type: "string", content: '"autonomous"' },
    { type: "normal", content: "," },
    { type: "normal", content: '    memory_check=' },
    { type: "keyword", content: "True" },
    { type: "normal", content: ")" },
    { type: "empty", content: "" },
    { type: "comment", content: "# >>> ExecutionResult: successfully deployed AI agent" },
    { type: "empty", content: "" },
    { type: "output", content: "> NexusAgent.online: streaming inference at 43ms." },
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <div className="terminal-glow rounded-xl overflow-hidden bg-surface">
        {/* Terminal Header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-elevated border-b border-border">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-4 text-xs text-muted-foreground font-mono">
            agent.py — NexusAI
          </span>
        </div>

        {/* Code Content */}
        <div className="p-6 overflow-x-auto">
          <pre className="font-mono text-sm leading-relaxed">
            {codeLines.map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="min-h-[1.5rem]"
              >
                {line.type === "empty" && <span>&nbsp;</span>}
                {line.type === "keyword" && (
                  <>
                    <span className="text-primary">{line.content}</span>
                    <span className="text-foreground">{line.rest}</span>
                  </>
                )}
                {line.type === "string" && (
                  <span className="text-green-400">{line.content}</span>
                )}
                {line.type === "comment" && (
                  <span className="text-muted-foreground">{line.content}</span>
                )}
                {line.type === "normal" && (
                  <span className="text-foreground">{line.content}</span>
                )}
                {line.type === "output" && (
                  <span className="text-primary font-medium">{line.content}</span>
                )}
              </motion.div>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="inline-block w-2 h-5 bg-primary ml-1 align-middle"
            />
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TerminalCode;
