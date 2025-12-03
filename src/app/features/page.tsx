import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Zap, Layout, Sparkles, Shield, Globe, Cpu, Keyboard, History, Palette } from "lucide-react";

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Everything You Need to <br />
          <span className="text-gradient-purple">Master AI Prompts</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          PromptPilot is packed with features designed to help you get the most out of ChatGPT, Claude, and Gemini.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium">
              <Zap className="w-4 h-4" /> Core Features
            </div>
            <h2 className="text-3xl font-bold text-white">AI-Powered Enhancement</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Powered by Google's Gemini 2.5 Flash Lite, PromptPilot analyzes your prompt and transforms it into a structured, detailed instruction that AI models actually understand. No more vague outputs—get results that match your intent.
            </p>
            <ul className="space-y-4">
              {[
                "Structured output format (Task, Context, Instructions)",
                "Context-aware improvements",
                "Industry best practices built-in",
                "Instant transformation"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
             <div className="absolute inset-0 bg-purple-500/20 blur-[100px] rounded-full opacity-30" />
             <Card className="relative z-10 h-full flex items-center justify-center border-purple-500/30 bg-black/50">
                <div className="text-center p-8">
                    <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-500">Interactive Demo Placeholder</p>
                </div>
             </Card>
          </div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {[
             {
               icon: Globe,
               title: "Universal Compatibility",
               desc: "ChatGPT, Claude, Gemini—PromptPilot works seamlessly across all three. One tool, infinite possibilities."
             },
             {
               icon: Shield,
               title: "Privacy First",
               desc: "Your prompts never leave your browser. We don't collect, store, or track anything. Your API key is stored locally."
             },
             {
               icon: Cpu,
               title: "Lightning Fast",
               desc: "Sub-second processing with optimized API calls. Get instant results without breaking your flow."
             }
           ].map((feature, i) => (
             <Card key={i} className="p-8">
               <feature.icon className="w-10 h-10 text-purple-400 mb-6" />
               <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
               <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
             </Card>
           ))}
        </div>
      </Section>

      <Section>
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-white mb-4">Coming Soon</h2>
           <p className="text-gray-400">We are constantly improving PromptPilot. Here is what is next.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { icon: Keyboard, title: "Shortcuts", desc: "Custom keyboard shortcuts for faster workflow." },
             { icon: History, title: "History", desc: "Access your previously enhanced prompts." },
             { icon: Layout, title: "Templates", desc: "Save and reuse your favorite prompt structures." },
             { icon: Palette, title: "Themes", desc: "More customization options for the UI." }
           ].map((item, i) => (
             <Card key={i} className="p-6 border-white/5 hover:border-white/10">
               <item.icon className="w-8 h-8 text-gray-500 mb-4" />
               <h3 className="text-lg font-bold text-gray-300 mb-2">{item.title}</h3>
               <p className="text-gray-500 text-sm">{item.desc}</p>
             </Card>
           ))}
        </div>
      </Section>
    </div>
  );
}
