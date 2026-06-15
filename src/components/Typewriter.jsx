import { useState, useEffect } from "react";

export default function Typewriter({ words = [] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    if (!words.length) return;

    const currentWord = words[index];

    let timeout;

    // Typing complete → pause then delete
    if (!deleting && subIndex === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), 1200);
      return () => clearTimeout(timeout);
    }

    // Deleting complete → move next word
    if (deleting && subIndex === 0) {
      setDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    // Typing / deleting effect
    timeout = setTimeout(() => {
      const newSubIndex = subIndex + (deleting ? -1 : 1);

      setSubIndex(newSubIndex);
      setText(currentWord.substring(0, newSubIndex));
    }, deleting ? 50 : 90);

    return () => clearTimeout(timeout);
  }, [subIndex, deleting, index, words]);

  return (
    <span className="text-[#39ff14] font-medium">
      {text}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}