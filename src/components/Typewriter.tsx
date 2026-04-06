import { useState, useEffect } from 'react';

interface TypewriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const Typewriter = ({ texts, typingSpeed = 100, deletingSpeed = 50, delayBetween = 1500 }: TypewriterProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = texts[currentTextIndex];
    let timeout: NodeJS.Timeout;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, deletingSpeed);
    } else {
      timeout = setTimeout(() => {
        setCurrentText(fullText.slice(0, currentText.length + 1));
        if (currentText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), delayBetween);
          return;
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, delayBetween]);

  return (
    <span className="inline-block">
      {currentText}
      <span className="animate-pulse ml-0.5 text-green-400">|</span>
    </span>
  );
};

export default Typewriter;