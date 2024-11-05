import { useEffect, useState } from "react"
import { getPublicIP } from "../services/ipfy"
import { getInfoFromIP } from "../services/ipinfo"
import { IPInfo, WeatherInfo } from "../types"
import { weatherInfo } from "../services/weatherinfo"

export function useWeather() {
  const [loading, setLoading] = useState(true)
  const [infoIP, setInfoIP] = useState<IPInfo | null>(null)
  const [weather, setWeather] = useState<WeatherInfo | null>(null)

  useEffect(() => {
    const getData = async () => {
      const ip = await getPublicIP()
      const infoFromIP = await getInfoFromIP(ip)
      const { latitude: lat, longitude: lon } = infoFromIP
      const infoWeather = await weatherInfo(lat, lon)
      setInfoIP(infoFromIP)
      setWeather(infoWeather)

      setLoading(false)
    }

    getData()
  }, [])

  return {
    loading,
    infoIP,
    weather
  }
}