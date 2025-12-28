import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { ArrowRight, MessageSquare, Sparkles, FileText, CheckCircle, Cpu, CloudLightning, Shield, Zap, Globe, Layout } from "lucide-react";

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
                icon: Cpu,
                step: "02",
                title: "Choose Mode",
                desc: "Select Local AI for privacy or Gemini API for maximum speed."
              },
              {
                icon: Sparkles,
                step: "03",
                title: "Click Enhance",
                desc: "Click the PromptPilot button. The AI analyzes your intent instantly."
              },
              {
                icon: CheckCircle,
                step: "04",
                title: "Ready to Send",
                desc: "Review the structured, optimized instruction and hit send."
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Enterprise-Grade Architecture</h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              PromptPilot is built on a high-performance, dual-engine engineered for privacy-preserving inference and ultra-low latency.
            </p>
            
            <div className="space-y-8">
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative flex gap-6 bg-black p-6 rounded-lg border border-white/10">
                   <div className="w-14 h-14 rounded-xl bg-green-500/10 flex items-center justify-center shrink-0 border border-green-500/20">
                      <Shield className="w-7 h-7 text-green-400" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-lg mb-2">On-Device Inference Engine (WebGPU)</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                       Leverages the client's GPU capabilities to run quantified Large Language Models (LLMs) locally. 
                       Utilizes <span className="text-green-400 font-mono text-xs">apache-tvm</span> compilation for bare-metal performance, 
                       ensuring complete data sovereignty with zero network egress.
                     </p>
                   </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative flex gap-6 bg-black p-6 rounded-lg border border-white/10">
                   <div className="w-14 h-14 rounded-xl bg-purple-500/10 flex items-center justify-center shrink-0 border border-purple-500/20">
                      <CloudLightning className="w-7 h-7 text-purple-400" />
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-lg mb-2">Distributed Edge API Routing</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                       Optimized stateless request pipeline connecting directly to Gemini's 2.5 Flash Lite infrastructure. 
                       Implements advanced prompt chaining and context window optimization algorithms to minimize token latency 
                       while maximizing inference quality.
                     </p>
                   </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                 <div className="relative flex gap-6 bg-black p-6 rounded-lg border border-white/10">
                   <div className="w-14 h-14 rounded-xl bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                      <div className="font-mono text-blue-400 font-bold">DOM</div>
                   </div>
                   <div>
                     <h3 className="text-white font-bold text-lg mb-2">Shadow DOM Injection Layer</h3>
                     <p className="text-gray-400 text-sm leading-relaxed">
                       Non-intrusive DOM manipulation engine that safely encapsulates PromptPilot's UI within a Shadow Root. 
                       Prevents CSS style leakage and conflicts while maintaining seamless bidirectional binding with 
                       platform-native text inputs.
                     </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative h-full min-h-[500px] w-full bg-black/50 rounded-2xl border border-white/5 overflow-hidden flex flex-col items-center justify-center p-8">
             <div className="absolute inset-0 bg-linear-to-b from-purple-900/10 to-transparent" />
             
             {/* Abstract Architecture Visualization */}
             <div className="relative w-full max-w-sm space-y-4">
                {/* Apps Layer */}
                <div className="flex justify-center gap-4 mb-8">
                   <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10"><MessageSquare className="w-6 h-6 text-gray-400"/></div>
                   <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10"><Globe className="w-6 h-6 text-gray-400"/></div>
                   <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center border border-white/10"><Layout className="w-6 h-6 text-gray-400"/></div>
                </div>

                {/* Injection Layer */}
                <div className="h-24 w-full rounded-xl border border-blue-500/30 bg-blue-500/5 flex flex-col items-center justify-center relative">
                   <div className="absolute -top-3 bg-black px-3 text-xs text-blue-400 font-mono uppercase tracking-wider border border-blue-500/30 rounded-full">Secure Injection Layer</div>
                   <div className="w-full flex justify-between px-8">
                      <div className="h-12 w-0.5 bg-gradient-to-b from-transparent to-blue-500/50"></div>
                      <div className="h-12 w-0.5 bg-gradient-to-b from-transparent to-blue-500/50"></div>
                   </div>
                </div>

                {/* Processing Core */}
                <div className="grid grid-cols-2 gap-4">
                   <div className="h-32 rounded-xl border border-green-500/30 bg-green-500/5 flex flex-col items-center justify-center p-4 text-center">
                      <Shield className="w-8 h-8 text-green-500 mb-2" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">Local Core</span>
                      <span className="text-[10px] text-gray-500">WebGPU / WASM</span>
                   </div>
                   <div className="h-32 rounded-xl border border-purple-500/30 bg-purple-500/5 flex flex-col items-center justify-center p-4 text-center">
                      <CloudLightning className="w-8 h-8 text-purple-500 mb-2" />
                      <span className="text-xs font-bold text-white uppercase tracking-wider mb-1">Cloud Core</span>
                      <span className="text-[10px] text-gray-500">Vertex AI / Gemini</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
