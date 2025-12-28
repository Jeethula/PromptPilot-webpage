import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { Lock, EyeOff, Server, Database } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - No Data Collection | PromptPilot",
  description: "PromptPilot does NOT collect your prompts or data. We use local storage and direct browser-to-API communication. Privacy First.",
  alternates: {
    canonical: "https://promptpilot.tech/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <div className="flex flex-col">
      <Section className="pt-20 pb-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Privacy is <br />
          <span className="text-gradient-purple">Our Priority</span>
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We built PromptPilot with a "Privacy First" architecture. Here is exactly what that means.
        </p>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: EyeOff,
              title: "No Data Collection",
              desc: "We do not collect, store, or process any of your personal data, prompts, or AI responses. We have zero analytics trackers in the extension."
            },
            {
              icon: Server,
              title: "Direct API Communication",
              desc: "When you enhance a prompt, your browser communicates directly with Google's Gemini API. Your data never touches our servers (because we don't have any)."
            },
            {
              icon: Database,
              title: "Local Storage Only",
              desc: "Your API key and preferences are stored locally in your browser using Chrome's secure storage API. You can clear this data at any time."
            },
            {
              icon: Lock,
              title: "Open Source Audit",
              desc: "Don't just take our word for it. Our entire codebase is open source on GitHub. You can inspect every line of code to verify our privacy claims."
            }
          ].map((item, i) => (
            <Card key={i} className="p-8">
              <item.icon className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-bold text-white mb-4">Detailed Privacy Policy</h2>
          <p className="text-gray-400 mb-4">Last Updated: November 2025</p>
          
          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h3>
          <p className="text-gray-400 mb-4">
            PromptPilot does not collect any personal information. We do not use cookies, analytics, or tracking pixels.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. How We Use Your Information</h3>
          <p className="text-gray-400 mb-4">
            Since we do not collect any information, we do not use your information. Your API key is used solely by your local browser instance to authenticate with the Gemini API.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Third-Party Services</h3>
          <p className="text-gray-400 mb-4">
            The extension interacts with the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-2">
            <li><strong>Google Gemini API:</strong> Used to process your prompts. Please refer to Google's Privacy Policy for information on how they handle API data.</li>
            <li><strong>Chrome Web Store:</strong> Used for extension distribution and updates.</li>
          </ul>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Changes to This Policy</h3>
          <p className="text-gray-400 mb-4">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Contact Us</h3>
          <p className="text-gray-400 mb-4">
            If you have any questions about this Privacy Policy, please contact us via GitHub Issues.
          </p>
        </div>
      </Section>
    </div>
  );
}
