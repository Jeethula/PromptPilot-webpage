"use client";

import { useState, useEffect, useRef } from "react";
import { Play, Loader2 } from "lucide-react";

export function VideoPlayer() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple lazy load: Wait 2 seconds after component mount
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isLoaded || !videoRef.current || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            videoRef.current?.play().then(() => setIsPlaying(true)).catch(e => console.log("Autoplay blocked:", e));
          } else {
            videoRef.current?.pause();
            setIsPlaying(false);
          }
        });
      },
      { threshold: 0.5 } // Play when 50% visible
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [isLoaded]);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  if (!isLoaded) {
    return (
      <div className="w-full h-full flex items-center justify-center bg-black/50 border border-white/10 rounded-xl">
         <div className="flex flex-col items-center gap-2">
            <Loader2 className="w-8 h-8 text-purple-500 animate-spin" />
            <p className="text-xs text-gray-500 font-mono">Loading Video...</p>
         </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative w-full h-full group bg-black rounded-xl overflow-hidden" onClick={togglePlay}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls={isPlaying} // Only show native controls when playing
        playsInline // Critical for iOS
        muted // Critical for Autoplay
        loop
        preload="metadata"
        poster="/logo.png"
        onEnded={() => setIsPlaying(false)}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      >
        <source src="/demo.mov" type="video/mp4" />
        <div className="flex items-center justify-center h-full text-white">
          <p>Video format not supported.</p>
        </div>
      </video>

      {/* Custom Play Button Overlay - Only show when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/40 transition-colors cursor-pointer z-10">
          <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:scale-110 transition-transform">
             <Play className="w-8 h-8 text-white fill-current ml-1" />
          </div>
        </div>
      )}
    </div>
  );
}
