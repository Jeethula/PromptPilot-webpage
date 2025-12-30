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
              title: "Privacy-First Design",
              desc: "PromptPilot is built with a privacy-first architecture. We do not collect, store, transmit, or process any personal or sensitive user data.",
            },
            {
              icon: Server,
              title: "Direct API Communication",
              desc: "When prompt enhancement is used, the extension sends the user’s input directly from the browser to the Google Gemini API. PromptPilot does not operate or route requests through any backend servers.",
            },
            {
              icon: Database,
              title: "Local Storage Only",
              desc: "Any API key provided by the user is stored locally on the user’s device using Chrome’s storage API and is never transmitted, logged, or accessed by PromptPilot developers.",
            },
            {
              icon: Lock,
              title: "Open Source Audit",
              desc: "Don't just take our word for it. Our entire codebase is open source on GitHub. You can inspect every line of code to verify our privacy claims.",
            },
          ].map((item, i) => (
            <Card key={i} className="p-8">
              <item.icon className="w-10 h-10 text-purple-400 mb-6" />
              <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto prose prose-invert">
          <h2 className="text-2xl font-bold text-white mb-4">Privacy Policy for PromptPilot</h2>
          <p className="text-gray-400 mb-4">Last Updated: December 2025</p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">1. Information We Collect</h3>
          <p className="text-gray-400 mb-4">PromptPilot does <strong>not</strong> collect:</p>
          <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-2">
            <li>Personal information</li>
            <li>Sensitive user data</li>
            <li>Prompts or AI responses</li>
            <li>Browsing activity</li>
            <li>Analytics or tracking data</li>
          </ul>
          <p className="text-gray-400 mb-4">We do not use cookies, trackers, or analytics tools.</p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">2. How the Extension Works</h3>
          <p className="text-gray-400 mb-4">
            When a user chooses to enhance a prompt, the extension sends the input directly from the user’s browser to the Google Gemini API. PromptPilot does not operate any backend servers and does not intercept or store this data.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">3. Local Storage</h3>
          <p className="text-gray-400 mb-4">
            Any API key or user preference is stored locally on the user’s device using Chrome’s storage API. This data never leaves the user’s browser and is never accessible to PromptPilot developers.
          </p>
          <p className="text-gray-400 mb-4">
            Users can clear this data at any time by removing the extension or clearing browser storage.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">4. Third-Party Services</h3>
          <p className="text-gray-400 mb-4">
            PromptPilot interacts with the following third-party services:
          </p>
          <ul className="list-disc pl-6 text-gray-400 mb-4 space-y-2">
            <li><strong>Google Gemini API</strong> – Used to process prompts. Data handling is governed by Google’s Privacy Policy.</li>
            <li><strong>Chrome Web Store</strong> – Used for extension distribution and updates.</li>
          </ul>
          <p className="text-gray-400 mb-4">
            PromptPilot does not share data with any other third parties.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">5. Open-Source Transparency</h3>
          <p className="text-gray-400 mb-4">
            PromptPilot is fully open source. The entire codebase is publicly available on GitHub and can be audited to verify all privacy claims.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">6. Changes to This Policy</h3>
          <p className="text-gray-400 mb-4">
            We may update this Privacy Policy from time to time. Any updates will be posted on this page.
          </p>

          <h3 className="text-xl font-bold text-white mt-8 mb-4">7. Contact</h3>
          <p className="text-gray-400 mb-4">
            If you have any questions about this Privacy Policy, contact us at:
            <br />
            📧 <a href="mailto:jeeththenthar@gmail.com" className="text-purple-400 hover:text-purple-300">jeeththenthar@gmail.com</a>
          </p>
        </div>
      </Section>
    </div>
  );
}
