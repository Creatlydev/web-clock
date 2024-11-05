import { useEffect, useState } from "react"
import { Quote } from "../types"
import { getRandomQuote } from "../services/quotes"

export function useRandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const getQuote = async () => {
      const data = await getRandomQuote()
      setQuote(data)
      setLoading(false)
    }

    getQuote()
  }, [])

  return {
    loading,
    author: quote?.author,
    quote: quote?.quote
  }
}