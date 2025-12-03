import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowRight, MessageSquare, Sparkles, FileText, CheckCircle } from "lucide-react";

export default function HowItWorksPage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          How PromptPilot <br />
          <span className="text-gradient-purple">Transforms Your Workflow</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          From basic prompt to brilliant result in seconds. Here is how the magic happens.
        </p>
      </Section>

      <Section>
        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-500/50 to-transparent -translate-y-1/2" />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              {
                icon: MessageSquare,
                step: "01",
                title: "Type Prompt",
                desc: "Type your basic prompt into ChatGPT, Claude, or Gemini as usual."
              },
              {
                icon: Sparkles,
                step: "02",
                title: "Click Enhance",
                desc: "Click the PromptPilot button that appears in the input field."
              },
              {
                icon: FileText,
                step: "03",
                title: "AI Processing",
                desc: "We send your prompt to Gemini to structure and optimize it."
              },
              {
                icon: CheckCircle,
                step: "04",
                title: "Ready to Send",
                desc: "Review the enhanced prompt and hit send. Done!"
              }
            ].map((item, i) => (
              <div key={i} className="group">
                <Card className="p-6 h-full bg-black border-purple-500/20 hover:border-purple-500/50 transition-colors text-center relative">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-purple-500/20 transition-colors">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div className="absolute top-4 right-4 text-4xl font-bold text-white/5 select-none">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.desc}</p>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white/5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Under the Hood</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              PromptPilot uses a sophisticated architecture to ensure speed, privacy, and quality.
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center shrink-0">
                   <div className="font-mono text-blue-400 font-bold">API</div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Direct API Calls</h3>
                  <p className="text-gray-400 text-sm">Your browser communicates directly with Google's Gemini API. No middleman servers.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center shrink-0">
                   <div className="font-mono text-green-400 font-bold">DOM</div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Smart DOM Injection</h3>
                  <p className="text-gray-400 text-sm">We safely inject the enhanced prompt back into the input field without breaking the site's functionality.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center shrink-0">
                   <div className="font-mono text-purple-400 font-bold">LOC</div>
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Local Storage</h3>
                  <p className="text-gray-400 text-sm">Settings and API keys are stored in your browser's secure local storage.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
             <div className="absolute inset-0 bg-indigo-500/20 blur-[100px] rounded-full opacity-30" />
             <div className="relative z-10 p-8 rounded-2xl border border-white/10 bg-black/50 backdrop-blur-xl">
                <pre className="font-mono text-xs text-gray-300 overflow-x-auto">
{`// Simplified Architecture
extension.onMessage((request) => {
  if (request.type === 'ENHANCE_PROMPT') {
    const prompt = request.payload;
    
    // 1. Get API Key from Local Storage
    const apiKey = await storage.get('apiKey');
    
    // 2. Call Gemini API directly
    const enhanced = await gemini.generateContent({
      prompt: buildSystemPrompt(prompt),
      key: apiKey
    });
    
    // 3. Return result to content script
    return enhanced.text();
  }
});`}
                </pre>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
