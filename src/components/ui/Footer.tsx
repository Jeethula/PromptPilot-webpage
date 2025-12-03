import React from "react";
import Link from "next/link";
import { Github, Twitter, Sparkles } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white">
                <Sparkles className="w-5 h-5 fill-white" />
              </div>
              <span className="text-xl font-bold text-white">PromptPilot</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Transform simple prompts into powerful AI instructions. Open source,
              privacy-first, and free forever.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Product</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/features" className="hover:text-purple-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-purple-400 transition-colors">
                  How it Works
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="hover:text-purple-400 transition-colors">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-purple-400 transition-colors">
                  Pricing (Free)
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/docs" className="hover:text-purple-400 transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-purple-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-purple-400 transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/help" className="hover:text-purple-400 transition-colors">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Legal</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/license" className="hover:text-purple-400 transition-colors">
                  MIT License
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PromptPilot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/promptpilot"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
            <Link
              href="https://twitter.com/promptpilot"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
