import { Quote } from "../types"

export async function getRandomQuote() {
  const URL = 'https://programming-quotesapi.vercel.app/api/random'
  try {
    const response = await fetch(URL)
    if (!response.ok) throw new Error('Failed to fetch random quote')
    const data: Quote = await response.json()
    return data
  } catch (error) {
    console.log(error)
    throw error
  }
}