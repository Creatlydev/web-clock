import { WeatherInfo } from "../types";

export async function weatherInfo(lat: string, lon: string) {
  const API_KEY = import.meta.env.VITE_API_OPENWEATHER
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`

  try {
    const response = await fetch(URL)
    if (!response.ok) throw new Error(`Failed to fetch weather info con ${lat}-${lon}`);
    
    const data: WeatherInfo = await response.json()
    return data
    
  } catch (error) {
    console.error(error)
    throw error
  }
}