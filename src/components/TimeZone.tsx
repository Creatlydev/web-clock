import { useWeather } from "../hooks/useWeather"
import TimeGreeting from "./TimeGreeting"

export default function TimeZone() {
  const { loading, infoIP, weather } = useWeather()
  console.log(weather)
  const date = new Date(infoIP?.time_zone.current_time || '')

  return (
    <section className="timezone">
      {
        loading
          ? <p>Loading...</p>
          : (
            <>
              <TimeGreeting hour={date.getHours()} />
              <h1 className="timezone__time">
                {
                  date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                }
              </h1>
              <p>
                IN {infoIP && infoIP.time_zone.name.replace('/', ', ') + " " + infoIP.country_emoji}
              </p>
            </>
          )
      }
    </section>
  )
}