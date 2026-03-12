import React, { useState, useEffect, useCallback } from 'react';

const TypingEffect = ({
  defaultValue,
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 1500,
  loop = true,
}) => {
  // Handle case where texts might be a single string instead of an array
  const textList = Array.isArray(texts) ? texts : texts ? [texts] : [];

  const [currentText, setCurrentText] = useState('');
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  const handleTyping = useCallback(() => {
    if (textList.length === 0) return;

    const fullText = textList[index] || '';

    if (!isDeleting) {
      if (charIndex < fullText.length) {
        setCurrentText(fullText.substring(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else {
        // If loop is true, we delete and restart.
        // If loop is false and it's the last item, we stop.
        if (loop || textList.length > 1) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }
    } else {
      if (charIndex > 0) {
        setCurrentText(fullText.substring(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else {
        setIsDeleting(false);
        // Only move to next index if there's more than one or we are looping
        setIndex((prevIndex) => (prevIndex + 1) % textList.length);
      }
    }
  }, [charIndex, isDeleting, index, textList, pauseTime, loop]);

  useEffect(() => {
    if (textList.length === 0) return;

    const timer = setTimeout(
      handleTyping,
      isDeleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(timer);
  }, [handleTyping, isDeleting, deletingSpeed, typingSpeed, textList.length]);

  return (
    <span>
      {defaultValue} {currentText}
      <span className="cursor"></span>
    </span>
  );
};

export default TypingEffect;
