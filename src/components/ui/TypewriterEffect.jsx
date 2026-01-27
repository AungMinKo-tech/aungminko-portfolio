import React, { useState, useEffect } from "react";

const TypewriterEffect = ({
  words,
  delay = 150,
  eraseDelay = 100,
  pause = 2000,
  className,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[wordIndex];
      if (isDeleting) {
        setCurrentText((prev) => prev.slice(0, -1));
      } else {
        setCurrentText((prev) => currentWord.slice(0, prev.length + 1));
      }

      if (!isDeleting && currentText === currentWord) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? eraseDelay : delay);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIndex, words, delay, eraseDelay, pause]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse border-r-4 border-blue-500 ml-1">
        &nbsp;
      </span>
    </span>
  );
};

export default TypewriterEffect;
