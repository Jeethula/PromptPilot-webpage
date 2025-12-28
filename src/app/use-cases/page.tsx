import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Code, PenTool, GraduationCap, Briefcase, Lightbulb } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Use Cases - Who is PromptPilot For?",
  description: "From developers debugging code to content creators overcoming writer's block. See how PromptPilot helps your specific workflow.",
  alternates: {
    canonical: "https://promptpilot.tech/use-cases",
  },
};

export default function UseCasesPage() {
  const cases = [
    {
      id: "developers",
      icon: Code,
      title: "Developers",
      color: "text-blue-400",
      desc: "Stop wasting time on prompt iterations. Get code that actually works.",
      items: ["Code generation", "Documentation requests", "Debugging assistance", "API integration"]
    },
    {
      id: "creators",
      icon: PenTool,
      title: "Content Creators",
      color: "text-pink-400",
      desc: "Transform vague ideas into detailed, structured content briefs.",
      items: ["Blog post writing", "Social media content", "Email campaigns", "Copywriting"]
    },
    {
      id: "researchers",
      icon: GraduationCap,
      title: "Researchers & Students",
      color: "text-green-400",
      desc: "Privacy-first architecture means your research stays private.",
      items: ["Literature reviews", "Data analysis", "Study guides", "Paper assistance"]
    },
    {
      id: "business",
      icon: Briefcase,
      title: "Business Professionals",
      color: "text-amber-400",
      desc: "Generate professional reports and strategic plans in seconds.",
      items: ["Report generation", "Presentation content", "Email drafting", "Strategic planning"]
    },
    {
      id: "creative",
      icon: Lightbulb,
      title: "Creative Professionals",
      color: "text-purple-400",
      desc: "Break through writer's block with structured creative briefs.",
      items: ["Story writing", "Script development", "Brainstorming", "Creative briefs"]
    }
  ];

  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Built for <br />
          <span className="text-gradient-purple">Every Workflow</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          See how professionals across different industries use PromptPilot to save time and improve results.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <Card key={item.id} className="p-8 hover:bg-white/5 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6">
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 mb-6 min-h-[3rem]">{item.desc}</p>
              
              <ul className="space-y-2">
                {item.items.map((subItem, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                    <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                    {subItem}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  );
}
