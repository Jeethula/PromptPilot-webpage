import { Section } from "@/components/ui/Section";

export default function TermsPage() {
  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">Terms of Service</h1>
        <div className="prose prose-invert">
          <p className="text-gray-400">
            Last updated: {new Date().toLocaleDateString()}
          </p>
          <p className="text-gray-300">
            PromptPilot is an open-source project provided "as is", without warranty of any kind. 
            By using this software, you agree that the authors shall not be liable for any claim, 
            damages or other liability arising from its use.
          </p>
          <p className="text-gray-300">
            For full details, please refer to our MIT License.
          </p>
        </div>
      </div>
    </Section>
  );
}
