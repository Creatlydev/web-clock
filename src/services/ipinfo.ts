import { IPInfo } from "../types";

export async function getInfoFromIP(ip: string) {
  const API_KEY = import.meta.env.VITE_API_GEOLOCATION
  const URL = `https://api.ipgeolocation.io/ipgeo?apiKey=${API_KEY}&ip=${ip}`
  
  try {
    const response = await fetch(URL)
    if (!response.ok) throw new Error(`Failed to fetch info from ${ip}`);
    
    const data: IPInfo = await response.json()
    return data
  } catch (error) {
    console.error(error)
    throw error
  }
}
