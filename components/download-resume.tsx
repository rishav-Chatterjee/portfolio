"use client";

import { Download } from "lucide-react";

export function DownloadResume() {
  return (
    <a
      href="/Rishav_Resume.pdf"
      download="Rishav_Reseume.pdf"
      className="fixed bottom-24 right-6 z-50 glass-sm p-3 rounded-full shadow-lg transition-smooth hover:scale-110 hover:bg-white/15 dark:hover:bg-white/10 flex items-center justify-center"
      aria-label="Download Resume"
    >
      <Download className="h-6 w-6 text-blue-600 dark:text-blue-400" />
    </a>
  );
}
