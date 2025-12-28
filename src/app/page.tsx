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
  Cpu,
  CloudLightning,
  Play
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Section } from "@/components/ui/Section";
import { CodeBlock } from "@/components/ui/CodeBlock";
import type { Metadata } from "next";
import JsonLd from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "PromptPilot | Free AI Prompt Extension & Add-in",
  description: "Download the PromptPilot Extension (Add-in) for Chrome. Fix your prompts instantly with Local AI. The best alternative to copy-pasting prompts.",
  alternates: {
    canonical: "https://promptpilot.tech",
  },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <JsonLd />
      {/* 1. Hero Section */}
      <Section className="pt-20 pb-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50" />
          <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-indigo-600/10 rounded-full blur-[100px] opacity-30" />
        </div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <Link href="/story" className="text-sm font-medium text-gray-300 hover:text-white transition-colors">
              Read: Why I Built PromptPilot &rarr;
            </Link>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
            Transform Weak Prompts Into{" "}
            <span className="text-gradient-purple">
              Powerful AI Instructions
            </span>
          </h1>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The intelligent browser extension that makes ChatGPT, Claude, and Gemini actually understand what you want. Choose local AI for privacy or Gemini API for speed.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
            <Button 
              size="lg" 
              rightIcon={<ArrowRight className="w-5 h-5" />}
              href="https://chrome.google.com/webstore"
            >
              Add to Chrome - Free
            </Button>
          </div>

          <div className="pt-8 flex items-center gap-4 text-sm text-gray-500">
            <p>Trusted by many developers</p>
          </div>
        </div>
      </Section>

      {/* 2. Before/After Showcase */}
      <Section className="bg-white/5">
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

      {/* 3. Demo Video Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Watch it in Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            See how PromptPilot transforms your workflow in real-time.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black/50 relative group cursor-pointer shadow-2xl shadow-purple-500/20">
            {/* Placeholder Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/20 transition-all scale-100 group-hover:scale-110">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between pointer-events-none">
              <div className="text-white">
                <h3 className="text-lg font-bold">PromptPilot Demo</h3>
                <p className="text-gray-400 text-sm">1:24 • Features Walkthrough</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 4. Installation CTA */}
      <Section className="bg-white/5">
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
                { step: 1, title: "Install Extension", desc: "Add PromptPilot to Chrome from the Web Store." },
                { step: 2, title: "Choose Mode", desc: "Select Local AI (Privacy) or Gemini API (Speed)." },
                { step: 3, title: "Start Enhancing", desc: "Instantly transform your prompts on any platform." },
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
              <Button size="lg" className="w-full md:w-auto" href="https://chrome.google.com/webstore">
                Add to Chrome - Free
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Dual API Modes */}
      <Section>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Choose Your Features
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Privacy or Speed? You don't have to compromise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
           {/* Local Mode */}
           <Card className="p-8 border-green-500/20 bg-green-500/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Shield className="w-32 h-32 text-green-500" />
             </div>
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mb-6">
                 <Cpu className="w-6 h-6 text-green-400" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Local AI Mode</h3>
               <p className="text-gray-300 mb-6 min-h-[4rem]">
                 100% private processing on your device using WebGPU. Your prompts never leave your browser.
               </p>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm text-gray-400">
                   <Check className="w-4 h-4 text-green-500" /> No API Key Required
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-400">
                   <Check className="w-4 h-4 text-green-500" /> Offline Capable
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-400">
                   <Check className="w-4 h-4 text-green-500" /> Gemma-2-2B Model
                 </li>
               </ul>
             </div>
           </Card>

           {/* API Mode */}
           <Card className="p-8 border-purple-500/20 bg-purple-500/5 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-10">
               <Zap className="w-32 h-32 text-purple-500" />
             </div>
             <div className="relative z-10">
               <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-6">
                 <CloudLightning className="w-6 h-6 text-purple-400" />
               </div>
               <h3 className="text-2xl font-bold text-white mb-4">Gemini API Mode</h3>
               <p className="text-gray-300 mb-6 min-h-[4rem]">
                 Powered by Google's Gemini 2.5 Flash Lite for lightning-fast, advanced prompt enhancement.
               </p>
               <ul className="space-y-3">
                 <li className="flex items-center gap-3 text-sm text-gray-400">
                   <Check className="w-4 h-4 text-purple-500" /> Sub-second Latency
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-400">
                   <Check className="w-4 h-4 text-purple-500" /> Advanced Reasoning
                 </li>
                 <li className="flex items-center gap-3 text-sm text-gray-400">
                   <Check className="w-4 h-4 text-purple-500" /> Real-time Streaming
                 </li>
               </ul>
             </div>
           </Card>
        </div>
      </Section>

      {/* 6. Open Source / Community */}
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
              <Button 
                variant="secondary" 
                leftIcon={<Github className="w-4 h-4" />}
                href="https://github.com/Jeethula/PromptPilot"
              >
                Contribute
              </Button>
              <Button variant="ghost" href="/license">View License</Button>
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
                <div className="text-2xl font-bold text-white">2</div>
                <div className="text-sm text-gray-500">Contributors</div>
              </Card>
              <Card className="p-6 text-center">
                <Star className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Star Us</div>
                <div className="text-sm text-gray-500">On GitHub</div>
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
