import { useEffect, useState } from "react"
import { getPublicIP } from "../services/ipfy"
import { getInfoFromIP } from "../services/ipinfo"
import { IPInfo } from "../types"

export function useInfoIP() {
  const [loading, setLoading] = useState(true)
  const [infoIP, setInfoIP] = useState<IPInfo | null>(null)

  useEffect(() => {
    const getData = async () => {
      const ip = await getPublicIP()
      const infoFromIP = await getInfoFromIP(ip)
      setInfoIP(infoFromIP)

      setLoading(false)
    }

    getData()
  }, [])

  return {
    loading,
    infoIP,
  }
}