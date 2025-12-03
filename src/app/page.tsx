import Link from "next/link";
import {
  Sparkles,
  Lock,
  Globe,
  Zap,
  Shield,
  Layout,
  Github,
  ArrowRight,
  Check,
  Star,
  Users,
  Code,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      {/* Hero Section */}
      <Section className="pt-20 pb-32">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] opacity-30" />
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              v1.0 is now available
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Transform Simple Prompts Into{" "}
            <span className="text-gradient-purple">
              Powerful AI Instructions
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The open-source browser extension that makes ChatGPT, Claude, and
            Gemini actually understand what you want—instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button size="lg" rightIcon={<ArrowRight className="w-5 h-5" />}>
              Install Free Extension
            </Button>
            <Button size="lg" variant="secondary" leftIcon={<Github className="w-5 h-5" />}>
              View on GitHub
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gray-800 border-2 border-black flex items-center justify-center text-xs font-medium text-white"
                >
                  {String.fromCharCode(64 + i)}
                </div>
              ))}
            </div>
            <p>Trusted by 1,000+ developers</p>
          </div>
        </div>
      </Section>

      {/* Value Props */}
      <Section className="bg-black/50">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card gradient className="p-8">
            <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
              <Sparkles className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Enhance in Seconds
            </h3>
            <p className="text-gray-400 leading-relaxed">
              No complex setup. No learning curve. Just click 'Enhance' and watch
              your prompt transform into a structured, detailed instruction.
            </p>
          </Card>

          <Card gradient className="p-8">
            <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-6">
              <Lock className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Your Data, Your Control
            </h3>
            <p className="text-gray-400 leading-relaxed">
              We don't collect, store, or track anything. Your prompts go
              directly to your chosen AI platform. Open source means you can
              verify it yourself.
            </p>
          </Card>

          <Card gradient className="p-8">
            <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
              <Globe className="w-6 h-6 text-green-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              Universal Compatibility
            </h3>
            <p className="text-gray-400 leading-relaxed">
              ChatGPT, Claude, Gemini—PromptPilot works seamlessly across all
              major AI platforms. One tool, infinite possibilities.
            </p>
          </Card>
        </div>
      </Section>

      {/* Before/After Showcase */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            See the Difference
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Stop getting vague answers. Give AI the structure it needs to
            succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-semibold text-red-400">Before</h3>
              <span className="text-sm text-gray-500">Basic Prompt</span>
            </div>
            <CodeBlock
              code="Write a blog post about AI"
              label="Input"
              className="border-red-500/20 bg-red-500/5"
            />
            <div className="p-6 rounded-xl bg-white/5 border border-white/10">
              <p className="text-gray-400 italic">
                "Here is a blog post about AI..." (Generic, unstructured, lacks depth)
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between px-2">
              <h3 className="text-lg font-semibold text-green-400">After PromptPilot</h3>
              <span className="text-sm text-gray-500">Enhanced Instruction</span>
            </div>
            <CodeBlock
              code={`🎯 Task: Create a comprehensive, engaging blog post about artificial intelligence

📌 Context: Technology blog for general readers interested in AI developments

🧠 Instructions & Rules:
- Write in an informative yet accessible tone
- Include real-world examples and applications
- Structure with clear headings/subheadings
- 800-1200 words length
- Cite recent developments (2024-2025)

📥 Input: Write a blog post about AI

📤 Output Format:
- Title (compelling, SEO-friendly)
- Introduction (hook + overview)
- Main sections (3-4 major points)
- Conclusion (summary + call-to-action)
- Use markdown formatting`}
              label="Enhanced Input"
              className="border-green-500/20 bg-green-500/5"
            />
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="bg-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Everything You Need
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Built for power users who demand precision and control.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Zap,
              title: "AI-Powered Enhancement",
              desc: "Powered by Gemini 2.5 Flash Lite for context-aware improvements.",
            },
            {
              icon: Layout,
              title: "Platform Support",
              desc: "Works natively with ChatGPT, Claude, and Gemini interfaces.",
            },
            {
              icon: Sparkles,
              title: "Beautiful UI",
              desc: "Dark theme with purple gradients that fits your workflow.",
            },
            {
              icon: Shield,
              title: "Privacy First",
              desc: "No data collection. Direct API communication. Open source.",
            },
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Sub-second processing with optimized API calls.",
            },
            {
              icon: Github,
              title: "Free Forever",
              desc: "No subscriptions, no limits. Built by the community.",
            },
          ].map((feature, i) => (
            <Card key={i} className="p-6 hover:bg-white/10 transition-colors">
              <feature.icon className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Installation CTA */}
      <Section>
        <div className="relative rounded-3xl overflow-hidden bg-linear-to-r from-purple-900/50 to-indigo-900/50 border border-purple-500/20 p-8 md:p-16 text-center">
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
          <div className="relative z-10 max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              Get Started in 60 Seconds
            </h2>
            <p className="text-xl text-gray-300">
              Join thousands of developers and creators who are already writing
              better prompts.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto pt-8">
              {[
                { step: 1, title: "Get API Key", desc: "Get your free Gemini API key from Google AI Studio." },
                { step: 2, title: "Install Extension", desc: "Add PromptPilot to Chrome from the Web Store." },
                { step: 3, title: "Start Enhancing", desc: "Configure your key and transform your first prompt." },
              ].map((item) => (
                <div key={item.step} className="flex flex-col gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <Button size="lg" className="w-full md:w-auto">
                Install Free Extension
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Open Source */}
      <Section className="border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Built by the Community, <br />
              <span className="text-gray-500">for the Community</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              PromptPilot is 100% open source under the MIT License. Review the
              code, contribute features, or fork it for your own use.
              Transparency and trust are built into every line.
            </p>
            <div className="flex gap-4">
              <Button variant="secondary" leftIcon={<Github className="w-4 h-4" />}>
                Contribute
              </Button>
              <Button variant="ghost">View License</Button>
            </div>
          </div>

          <div className="flex-1 w-full max-w-md">
            <div className="grid grid-cols-2 gap-4">
              <Card className="p-6 text-center">
                <Code className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">100%</div>
                <div className="text-sm text-gray-500">Open Source</div>
              </Card>
              <Card className="p-6 text-center">
                <Users className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">10+</div>
                <div className="text-sm text-gray-500">Contributors</div>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">500+</div>
                <div className="text-sm text-gray-500">GitHub Stars</div>
              </Card>
              <Card className="p-6 text-center">
                <Check className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">MIT</div>
                <div className="text-sm text-gray-500">License</div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
