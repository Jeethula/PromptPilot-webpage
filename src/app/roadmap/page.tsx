import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CheckCircle2, Circle, Clock } from "lucide-react";

export default function RoadmapPage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          The Future of <br />
          <span className="text-gradient-purple">Prompt Engineering</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We are just getting started. Here is what we are building next.
        </p>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto space-y-12 relative">
          {/* Vertical Line */}
          <div className="absolute top-0 bottom-0 left-8 md:left-1/2 w-px bg-white/10 -translate-x-1/2" />

          {/* v1.0 */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-sm font-medium mb-4">
                <CheckCircle2 className="w-4 h-4" /> Released
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Version 1.0</h3>
              <p className="text-gray-400">Initial release with core enhancement features for ChatGPT, Claude, and Gemini.</p>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-green-500 -translate-x-1/2 mt-1.5 ring-4 ring-black" />
            <div className="md:w-1/2 md:pl-12">
               <ul className="space-y-2 text-gray-500 text-sm">
                 <li>• AI-Powered Enhancement</li>
                 <li>• Multi-platform Support</li>
                 <li>• Dark Mode UI</li>
                 <li>• Local Storage Settings</li>
               </ul>
            </div>
          </div>

          {/* v1.1 - v1.3 */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right order-1 md:order-1">
               <ul className="space-y-2 text-gray-500 text-sm md:flex md:flex-col md:items-end">
                 <li>• Keyboard Shortcuts</li>
                 <li>• Prompt History</li>
                 <li>• Custom Templates</li>
                 <li>• Tone Presets</li>
               </ul>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-blue-500 -translate-x-1/2 mt-1.5 ring-4 ring-black" />
            <div className="md:w-1/2 md:pl-12 order-2 md:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-sm font-medium mb-4">
                <Clock className="w-4 h-4" /> Coming Soon (v1.1 - v1.3)
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Enhanced Workflow</h3>
              <p className="text-gray-400">Focusing on speed and customization to fit your personal workflow.</p>
            </div>
          </div>

          {/* v2.0 */}
          <div className="relative flex flex-col md:flex-row gap-8 md:gap-0">
            <div className="md:w-1/2 md:pr-12 md:text-right">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-4">
                <Circle className="w-4 h-4" /> Future Vision
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Version 2.0</h3>
              <p className="text-gray-400">Enterprise capabilities and advanced team features.</p>
            </div>
            <div className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-purple-500 -translate-x-1/2 mt-1.5 ring-4 ring-black" />
            <div className="md:w-1/2 md:pl-12">
               <ul className="space-y-2 text-gray-500 text-sm">
                 <li>• Team Sharing</li>
                 <li>• Analytics Dashboard</li>
                 <li>• Custom AI Models</li>
                 <li>• API Access</li>
               </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
