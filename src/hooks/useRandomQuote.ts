import { useCallback, useEffect, useState } from "react"
import { Quote } from "../types"
import { getRandomQuote } from "../services/quotes"

export function useRandomQuote() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(true)

  const getQuote = useCallback(async () => {
    setLoading(true)
    const data = await getRandomQuote()
    setQuote(data)
    setLoading(false)
  }, [])

  useEffect(() => {
    getQuote()
  }, [getQuote])

  return {
    loading,
    author: quote?.author,
    quote: quote?.quote,
    getQuote
  }
}