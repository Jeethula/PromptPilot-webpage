import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Circle, Clock, Users, Layout, Zap } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Public Roadmap - Future of PromptPilot",
  description: "See what's coming next for PromptPilot: Personalized Personas, Prompt Templates, History, and Collaboration features.",
  alternates: {
    canonical: "https://promptpilot.tech/roadmap",
  },
};

export default function RoadmapPage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The Future of <br />
          <span className="text-gradient-purple">Prompt Engineering</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We are building the ultimate AI interaction layer. Here is what's coming.
        </p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-white/10 -translate-x-1/2" />

          {/* Current: v1.0 */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" /> Live Now
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Version 1.0</h3>
              <p className="text-gray-400">The foundation. Dual AI processing modes and universal platform support.</p>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2 mt-1.5 ring-4 ring-black" />
            <div className="md:w-1/2 md:pl-12">
               <ul className="space-y-2 text-gray-500 text-sm">
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/>Local AI (Privacy Mode)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/>Gemini API (Speed Mode)</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/>Universal Compatibility</li>
                 <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500"/>Dark Theme UI</li>
               </ul>
            </div>
          </div>

          {/* Phase 1: Personas */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
               <ul className="space-y-2 text-gray-400 text-sm md:flex md:flex-col md:items-end">
                 <li>• Example-Oriented Persona</li>
                 <li>• Academic/Essay Persona</li>
                 <li>• Code/Technical Persona</li>
                 <li>• Concise Summary Persona</li>
               </ul>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2 mt-1.5 ring-4 ring-black" />
            <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                <Clock className="w-4 h-4" /> Q1 2026
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Personalized Personas</h3>
              <p className="text-gray-400">Tailor enhancements to your specific needs. Teachers, coders, and writers get different results.</p>
            </div>
          </div>

          {/* Phase 2: Advanced Features */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
                <Layout className="w-4 h-4" /> Q2 2026
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Advanced Workflow</h3>
              <p className="text-gray-400">Tools for power users to manage and optimize their prompt library.</p>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 mt-1.5 ring-4 ring-black" />
            <div className="md:w-1/2 md:pl-12">
               <ul className="space-y-2 text-gray-500 text-sm">
                 <li>• Prompt Templates Library</li>
                 <li>• Prompt History & Search</li>
                 <li>• Custom Enhancement Rules</li>
                 <li>• Batch Processing</li>
               </ul>
            </div>
          </div>

          {/* Phase 3: Collaboration */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
               <ul className="space-y-2 text-gray-400 text-sm md:flex md:flex-col md:items-end">
                 <li>• Team Prompt Sharing</li>
                 <li>• Shared Libraries</li>
                 <li>• Community Marketplace</li>
                 <li>• Peer Feedback/Rating</li>
               </ul>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-orange-500 -translate-x-1/2 mt-1.5 ring-4 ring-black" />
            <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-sm font-medium mb-4">
                <Users className="w-4 h-4" /> Q3 2026
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Collaboration</h3>
              <p className="text-gray-400">Work together to build the best prompts. Share with your team or the world.</p>
            </div>
          </div>

        </div>
      </Section>
    </div>
  );
}
