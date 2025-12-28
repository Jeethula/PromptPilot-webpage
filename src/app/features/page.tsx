import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Zap, Layout, Sparkles, Shield, Globe, Cpu, Keyboard, History, Palette, User, FileText, Settings, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - Local AI & Gemini API Modes | PromptPilot",
  description: "Explore PromptPilot's dual-engine architecture. Choose Local AI Mode for 100% privacy with WebGPU, or Gemini API Mode for lightning-fast advanced reasoning.",
  alternates: {
    canonical: "https://promptpilot.tech/features",
  },
};

export default function FeaturesPage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Two Modes. <br />
          <span className="text-gradient-purple">Zero Compromises.</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Choose between absolute privacy with Local AI or maximum power with Gemini API. Switch anytime.
        </p>
      </Section>

      {/* Dual Modes Detail */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Local Mode */}
          <Card className="p-8 border-green-500/20 bg-green-500/5">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-lg bg-green-500/20 flex items-center justify-center">
                 <Shield className="w-6 h-6 text-green-400" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-white">Local AI Mode</h2>
                 <p className="text-green-400 text-sm font-medium">Privacy Focused</p>
               </div>
             </div>
             <p className="text-gray-300 leading-relaxed mb-6">
               Powered by <strong>Gemma-2-2B</strong> running entirely in your browser using WebGPU. Your data never leaves your device.
             </p>
             <ul className="space-y-3">
               {[
                 "100% Private & Offline",
                 "No API Keys Required",
                 "Unlimited Free Usage",
                 "Zero Data Collection"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-400">
                   <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                   {item}
                 </li>
               ))}
             </ul>
          </Card>

          {/* API Mode */}
          <Card className="p-8 border-purple-500/20 bg-purple-500/5">
             <div className="flex items-center gap-4 mb-6">
               <div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center">
                 <Zap className="w-6 h-6 text-purple-400" />
               </div>
               <div>
                 <h2 className="text-2xl font-bold text-white">Gemini API Mode</h2>
                 <p className="text-purple-400 text-sm font-medium">Performance Focused</p>
               </div>
             </div>
             <p className="text-gray-300 leading-relaxed mb-6">
               Powered by Google's <strong>Gemini 2.5 Flash Lite</strong>. Sends prompts to Google for advanced reasoning and faster processing.
             </p>
             <ul className="space-y-3">
               {[
                 "Sub-second Responses",
                 "Advanced Reasoning Capabilities",
                 "Real-time Streaming",
                 "Complex Prompt Handling"
               ].map((item, i) => (
                 <li key={i} className="flex items-center gap-3 text-gray-400">
                   <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                   {item}
                 </li>
               ))}
             </ul>
          </Card>
        </div>
      </Section>

      {/* Core Features */}
      <Section className="bg-white/5">
         <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Core Capabilities</h2>
              <p className="text-gray-400">Everything you need to master prompt engineering.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Globe className="w-5 h-5 text-purple-400" /> Universal Support
                  </h3>
                  <p className="text-gray-400">
                    PromptPilot detects which platform you are using—ChatGPT, Claude, or Gemini—and automatically adapts its interface. No more switching contexts.
                  </p>
               </div>
               <div className="space-y-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-400" /> Smart Enhancement
                  </h3>
                  <p className="text-gray-400">
                    Our prompt engineering algorithms automatically structure your request into Task, Context, and Instructions sections for maximum clarity.
                  </p>
               </div>
            </div>
         </div>
      </Section>

      {/* Roadmap Preview */}
      <Section>
        <div className="text-center mb-16">
           <h2 className="text-3xl font-bold text-white mb-4">Future Vision (v2.0+)</h2>
           <p className="text-gray-400">We are just getting started.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
           {[
             { icon: User, title: "Personas", desc: "Choose personas like 'Code Expert' or 'Creative Writer'." },
             { icon: History, title: "History", desc: "Save and reuse your best enhancements." },
             { icon: Layout, title: "Templates", desc: "Community-driven prompt template library." },
             { icon: Settings, title: "Custom Rules", desc: "Define your own enhancement rules." }
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
