import { useState, useEffect } from "react";

type TerminalLine = {
  type: "cmd" | "output" | "blank";
  text?: string;
};

const LINES: TerminalLine[] = [
  { type: "cmd", text: "whoami" },
  { type: "output", text: "michal" },
  { type: "blank" },
  { type: "cmd", text: "cat facts.txt" },
  { type: "output", text: "💼  Software Developer at 2cW" },
  { type: "output", text: "📖  Studying Computer Science" },
  { type: "output", text: "📍  Lublin, Poland" },
  { type: "output", text: "🎵  Metal music lover" },
  { type: "output", text: "🎨  Pixel art creator" },
  { type: "blank" },
];

const CHAR_DELAY = 65;
const CMD_END_DELAY = 380;
const OUTPUT_DELAY = 140;
const BLANK_DELAY = 60;

export function Terminal() {
  const [shownLines, setShownLines] = useState<TerminalLine[]>([]);
  const [shownCount, setShownCount] = useState(0);
  const [currentTyped, setCurrentTyped] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (shownCount >= LINES.length) {
      setDone(true);
      return;
    }

    const line = LINES[shownCount];

    if (line.type === "cmd") {
      const fullText = line.text!;
      if (currentTyped.length < fullText.length) {
        const t = setTimeout(() => {
          setCurrentTyped(fullText.slice(0, currentTyped.length + 1));
        }, CHAR_DELAY);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setShownLines((prev) => [...prev, line]);
          setShownCount((c) => c + 1);
          setCurrentTyped("");
        }, CMD_END_DELAY);
        return () => clearTimeout(t);
      }
    } else {
      const delay = line.type === "blank" ? BLANK_DELAY : OUTPUT_DELAY;
      const t = setTimeout(() => {
        setShownLines((prev) => [...prev, line]);
        setShownCount((c) => c + 1);
      }, delay);
      return () => clearTimeout(t);
    }
  }, [shownCount, currentTyped]);

  const isTypingCmd =
    shownCount < LINES.length && LINES[shownCount].type === "cmd";

  return (
    <div className="w-[480px] rounded-xl overflow-hidden font-mono text-[13px] select-none bg-[#282828] shadow-[0_25px_50px_rgba(0,0,0,0.4),0_0_0_1px_rgba(255,255,255,0.04)]">
      {/* Title bar — bg0_h */}
      <div className="flex items-center gap-2 px-4 py-3 bg-[#1d2021] border-b border-[#3c3836]">
        {/* Traffic lights — Gruvbox red/yellow/green */}
        <span className="w-3 h-3 rounded-full bg-[#cc241d] shadow-[0_0_0_1px_rgba(0,0,0,0.3)]" />
        <span className="w-3 h-3 rounded-full bg-[#d79921] shadow-[0_0_0_1px_rgba(0,0,0,0.3)]" />
        <span className="w-3 h-3 rounded-full bg-[#98971a] shadow-[0_0_0_1px_rgba(0,0,0,0.3)]" />
        <span className="flex-1 text-center text-[11px] tracking-wide text-[#928374] mr-9">
          michal@portfolio ~ zsh
        </span>
      </div>

      {/* Terminal body */}
      <div className="p-5 pb-6 min-h-[280px]">
        {shownLines.map((line, i) => {
          if (line.type === "blank") {
            return <div key={i} className="h-2.5" />;
          }
          if (line.type === "cmd") {
            return (
              <div key={i} className="flex items-center gap-2 leading-[1.8]">
                <span className="text-[#fabd2f] font-bold">$</span>
                <span className="text-[#ebdbb2]">{line.text}</span>
              </div>
            );
          }
          return (
            <div key={i} className="text-[#a89984] leading-[1.8] pl-5">
              {line.text}
            </div>
          );
        })}

        {/* Currently typing line */}
        {isTypingCmd && (
          <div className="flex items-center gap-2 leading-[1.8]">
            <span className="text-[#fabd2f] font-bold">$</span>
            <span className="text-[#ebdbb2]">{currentTyped}</span>
            <span className="terminal-cursor" />
          </div>
        )}

        {/* Final idle cursor */}
        {done && (
          <div className="flex items-center gap-2 leading-[1.8]">
            <span className="text-[#fabd2f] font-bold">$</span>
            <span className="terminal-cursor" />
          </div>
        )}
      </div>
    </div>
  );
}
