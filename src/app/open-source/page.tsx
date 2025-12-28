import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Github, Heart, Shield, Code, Users } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Open Source & Security - PromptPilot",
  description: "Our code is 100% open source on GitHub. Audit our privacy claims, contribute features, or fork the project. MIT Licensed.",
  alternates: {
    canonical: "https://promptpilot.tech/open-source",
  },
};

export default function OpenSourcePage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Transparency & <br />
          <span className="text-gradient-purple">Community Trust</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We believe AI tools should be transparent. That is why PromptPilot is open source.
        </p>
        <div className="pt-8">
           <Button size="lg" leftIcon={<Github className="w-5 h-5" />}>
             View on GitHub
           </Button>
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
           <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Open Source?</h2>
              <div className="space-y-8">
                 {[
                   {
                     icon: Shield,
                     title: "Security through Visibility",
                     desc: "Anyone can audit our code to ensure it does exactly what we say it does. No hidden tracking, no malicious code."
                   },
                   {
                     icon: Users,
                     title: "Community Driven",
                     desc: "Features are built based on what the community actually needs, not just what sells."
                   },
                   {
                     icon: Code,
                     title: "Freedom to Customize",
                     desc: "Don't like how something works? Fork the repo and make it your own. You have full control."
                   }
                 ].map((item, i) => (
                   <div key={i} className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                         <item.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                         <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                         <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                      </div>
                   </div>
                 ))}
              </div>
           </div>
           
           <div className="space-y-6">
              <Card className="p-8 bg-black/50 border-purple-500/20">
                 <h3 className="text-2xl font-bold text-white mb-4">MIT License</h3>
                 <p className="text-gray-400 mb-6">
                   PromptPilot is released under the MIT License. This means you are free to:
                 </p>
                 <ul className="space-y-3 text-gray-300 mb-8">
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Use it commercially</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Modify the code</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Distribute copies</li>
                   <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-green-500" /> Private use</li>
                 </ul>
                 <p className="text-sm text-gray-500">
                   Note: The only condition is that you include the original copyright and license notice.
                 </p>
              </Card>
              
              <Card className="p-8 flex flex-col items-center text-center">
                 <Heart className="w-12 h-12 text-pink-500 mb-4" />
                 <h3 className="text-xl font-bold text-white mb-2">Support the Project</h3>
                 <p className="text-gray-400 mb-6">
                   If you find PromptPilot useful, consider starring the repo or contributing code.
                 </p>
                 <Button variant="secondary" size="sm">Star on GitHub</Button>
              </Card>
           </div>
        </div>
      </Section>
    </div>
  );
}
