import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ArrowRight, Lightbulb, Link as LinkIcon, Quote } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why I Built PromptPilot - The Death of the Prompt Engineer",
  description: "A personal story about the frustration with 'Prompt Engineering' and why we need atomic AI enhancement instead.",
  alternates: {
    canonical: "https://promptpilot.tech/story",
  },
};

export default function StoryPage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-24 pb-16 text-center">
         <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 text-purple-400 text-sm font-medium mb-8">
            <Lightbulb className="w-4 h-4" /> The Origin Story
         </div>
         <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Why I Built <span className="text-gradient-purple">PromptPilot</span>
         </h1>
         <div className="flex justify-center items-center gap-2 text-gray-400 text-lg">
            <span>By</span>
            <Link 
               href="https://www.linkedin.com/in/jeethula/" 
               target="_blank"
               className="flex items-center gap-1 text-purple-400 hover:text-purple-300 transition-colors border-b border-purple-400/30 hover:border-purple-300 font-medium"
            >
               Jeethu <LinkIcon className="w-3 h-3" />
            </Link>
         </div>
      </Section>

      <Section className="max-w-3xl mx-auto">
         <div className="prose prose-invert prose-lg mx-auto">
            <p className="text-xl text-gray-300 leading-relaxed mb-8">
               I am a developer and an AI explorer. Like many of you, I spend hours every day interacting with LLMs like ChatGPT, Claude, and Gemini. They are incredible tools, but I noticed a recurring frustration.
            </p>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">The "Garbage In, Garbage Out" Problem</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
               I found myself getting mediocre results, not because the AI wasn't capable, but because my prompts were... lazy. I would type "fix this code" or "write an email," and the AI would guess what I meant. 
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
               To get <i>great</i> results, I realized I had to be a "Prompt Engineer." I had to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-400 mb-8">
               <li>Set a clear role/persona</li>
               <li>Provide specific context</li>
               <li>Define constraints and rules</li>
               <li>Specify the output format</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mb-8">
               It worked. The results were 10x better. But typing out these structured frameworks every single time was exhausting. It felt like manual labor in an age of automation.
            </p>

            <div className="my-12 p-8 bg-white/5 border-l-4 border-purple-500 rounded-r-xl">
               <Quote className="w-8 h-8 text-purple-500 mb-4 opacity-50" />
               <p className="text-xl text-gray-300 italic font-medium">
                  "We shouldn't have to learn to speak 'machine'. The machine should understand us."
               </p>
            </div>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">The Solution: Atomic Enhancement</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
               I built PromptPilot to bridge this gap. I wanted a tool that would take my "lazy" thought—like "write a blog post"—and instantaneously transform it into a mathematically perfect prompt structure.
            </p>
            <p className="text-gray-400 leading-relaxed mb-6">
               Now, I just type the core idea and click <b>Enhance</b>. The extension automatically:
            </p>
            
             <Card className="p-6 my-8 border-purple-500/20 bg-purple-500/5 not-prose">
               <div className="space-y-4">
                  <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 font-bold text-white">1</div>
                     <div>
                        <h4 className="font-bold text-white">Analyzes Intent</h4>
                        <p className="text-sm text-gray-400">It understands what you are trying to achieve.</p>
                     </div>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 font-bold text-white">2</div>
                     <div>
                        <h4 className="font-bold text-white">Injects Context</h4>
                        <p className="text-sm text-gray-400">It adds the necessary "To act as..." instructions.</p>
                     </div>
                  </div>
                   <div className="flex items-start gap-4">
                     <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center shrink-0 font-bold text-white">3</div>
                     <div>
                        <h4 className="font-bold text-white">Formats Output</h4>
                        <p className="text-sm text-gray-400">It forces the LLM to reply in a structured way.</p>
                     </div>
                  </div>
               </div>
            </Card>

            <h3 className="text-2xl font-bold text-white mt-12 mb-4">Research & Further Reading</h3>
            <p className="text-gray-400 leading-relaxed mb-6">
               This approach is backed by research on "Chain-of-Thought" prompting and "In-Context Learning." When you give an LLM structure, its reasoning capabilities improve significantly.
            </p>
             <ul className="space-y-2 mb-8">
               <li>
                  <a href="https://arxiv.org/abs/2201.11903" target="_blank" className="text-purple-400 hover:text-white transition-colors underline decoration-purple-400/30">
                     Chain-of-Thought Prompting Elicits Reasoning in Large Language Models (Wei et al.)
                  </a>
               </li>
                <li>
                  <a href="https://www.promptingguide.ai/" target="_blank" className="text-purple-400 hover:text-white transition-colors underline decoration-purple-400/30">
                     Prompt Engineering Guide
                  </a>
               </li>
            </ul>

            <div className="pt-12 border-t border-white/10 mt-12">
               <p className="text-xl font-bold text-white mb-6">Ready to stop typing and start commanding?</p>
               <Button 
                  size="lg" 
                  rightIcon={<ArrowRight className="w-5 h-5" />}
                  href="https://chrome.google.com/webstore"
               >
                  Get PromptPilot Free
               </Button>
            </div>
         </div>
      </Section>
    </div>
  );
}
