import { useRandomQuote } from "../hooks/useRandomQuote";

export default function Quote() {
  const { loading: loadingQuote, author, quote } = useRandomQuote()

  return (
    <>
      {
        !loadingQuote
          ? (
            <blockquote className="quote">
              {quote}
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