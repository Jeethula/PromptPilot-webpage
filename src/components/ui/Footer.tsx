import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Github, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="relative w-8 h-8">
                <Image 
                  src="/logo.png" 
                  alt="PromptPilot Logo" 
                  fill 
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-bold text-white">PromptPilot</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Transform simple prompts into powerful AI instructions. Open source,
              privacy-first, and free forever.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p>Contact: <a href="mailto:jeeththenthar@gmail.com" className="text-purple-400 hover:text-white transition-colors">jeeththenthar@gmail.com</a></p>
            </div>
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
          
          <div>
            <h3 className="text-white font-semibold mb-4">Connect</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>
                <Link href="https://www.linkedin.com/in/jeethula/" target="_blank" className="hover:text-purple-400 transition-colors">
                  LinkedIn
                </Link>
              </li>
              <li>
                <Link href="https://github.com/Jeethula/PromptPilot" target="_blank" className="hover:text-purple-400 transition-colors">
                  GitHub
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
              href="https://github.com/Jeethula/PromptPilot"
              target="_blank"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
