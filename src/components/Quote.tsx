import { useEffect, useRef, useState } from "react";
import { useRandomQuote } from "../hooks/useRandomQuote";
import '../lib/typing-effect.js'
import RegenerateButton from "./RegenerateButton.js";

export default function Quote() {
  const ref = useRef<HTMLElement | null>(null)
  const { loading, author, quote, getQuote } = useRandomQuote()
  const [finished, setIfFinished] = useState(false)

  const regenerateQuote = () => {
    setIfFinished(false)
    getQuote()
  }

  useEffect(() => {
    const typingElement = ref.current
    const handleTypingComplete = () => {
      setIfFinished(true)
    };

    if (typingElement) {
      typingElement.addEventListener('typing:complete', handleTypingComplete)
    }

    return () => {
      if (typingElement) {
        typingElement.removeEventListener("typing:complete", handleTypingComplete)
      }
    }
  }, [quote])

  return (
    <div className="quote-container">
      {
        !loading
          ? (
            <blockquote className="quote">
              <typing-effect
                data-lines={`["${quote}"]`} data-character-delay='70'
                ref={ref}
              >
                <span data-target="typing-effect.content"></span>
                <span data-target="typing-effect.cursor">|</span>
              </typing-effect>

              {
                finished && (
                  <footer className="quote-footer">
                    <cite className="quote__cite">
                      <a
                        href={`https://www.google.com/search?q=${author}`}
                        target="_blank"
                      >
                        <typing-effect
                          data-lines={`["${author}"]`}
                        >
                          <span data-target="typing-effect.content"></span>
                        </typing-effect>
                      </a>
                    </cite>

                    <RegenerateButton handleClick={regenerateQuote} />
                  </footer>
                )
              }
            </blockquote>
          )
          : (
            <p>loading...</p>
          )
      }
    </div>
  )
}