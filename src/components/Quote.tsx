import { useRandomQuote } from "../hooks/useRandomQuote";
import '../lib/typing-effect.js'

export default function Quote() {
  const { loading, author, quote } = useRandomQuote()

  return (
    <>
      {
        !loading
          ? (
            <blockquote className="quote">
              <typing-effect data-lines={`["${quote}"]`} data-character-delay='70'>
                <span data-target="typing-effect.content"></span>
                <span data-target="typing-effect.cursor">|</span>
              </typing-effect>
              <footer><cite className="quote__cite">{author}</cite></footer>
            </blockquote>
          )
          : (
            <p>loading...</p>
          )
      }
    </>
  )
}