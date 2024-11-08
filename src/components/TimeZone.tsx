import { useUpdateTime } from "../hooks/useUpdateTime"
import { useWeather } from "../hooks/useWeather"
import TimeGreeting from "./TimeGreeting"

export default function TimeZone() {
  const { loading, infoIP, weather } = useWeather()
  const { currentTime } = useUpdateTime(infoIP?.time_zone.current_time || '')
  const formatter = Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit' })


  return (
    <section className="timezone">
      {
        (loading || !currentTime)
          ? <p>Loading...</p>
          : (
            <>
              <TimeGreeting hour={currentTime.getHours()} />
              <h1 className="timezone__time">
                {
                  formatter.format(currentTime)
                }
                <div className="seconds">
                  <span>{currentTime.getMilliseconds().toString().padStart(3, '0')}</span>
                  <span>{currentTime.toLocaleTimeString([], {second: '2-digit'})}</span>
                </div>
              </h1>
              <p>
                IN {infoIP && infoIP.time_zone.name.replace('/', ', ').toUpperCase() + " " + infoIP.country_emoji}
              </p>
            </>
          )
      }
    </section>
  )
}