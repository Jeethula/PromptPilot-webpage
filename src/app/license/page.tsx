import { Section } from "@/components/ui/Section";
import { CodeBlock } from "@/components/ui/CodeBlock";

export default function LicensePage() {
  return (
    <Section className="pt-32 pb-16">
      <div className="max-w-3xl mx-auto space-y-8">
        <h1 className="text-4xl font-bold text-white">MIT License</h1>
        <p className="text-gray-400">
          PromptPilot is free and open-source software licensed under the MIT License.
        </p>
        
        <div className="bg-black/50 border border-white/10 p-8 rounded-xl font-mono text-sm text-gray-300 whitespace-pre-wrap">
{`MIT License

Copyright (c) ${new Date().getFullYear()} Jeethula

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`}
        </div>
      </div>
    </Section>
  );
}
