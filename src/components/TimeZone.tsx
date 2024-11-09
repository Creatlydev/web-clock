import { useWeather } from "../hooks/useWeather"
import Time from "./Time"

export default function TimeZone() {
  const { loading, infoIP, weather } = useWeather()

  return (
    <section className="timezone">
      {
        loading
          ? <p>Loading...</p>
          : (
            <>
              <Time />
              <p>
                IN {infoIP && infoIP.time_zone.name.replace('/', ', ').toUpperCase() + " " + infoIP.country_emoji}
              </p>
            </>
          )
      }
    </section>
  )
}