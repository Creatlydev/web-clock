import { useWeather } from "../hooks/useWeather"
import Time from "./Time"

export default function TimeZone() {
  const { loading, infoIP } = useWeather()

  return (
    <section className="timezone">
      <Time />
      {
        loading
          ? <p>loading...</p>
          : (
            <p>
              <img
                width={24}
                style={{marginRight: '12px'}}
                src={infoIP?.country_flag} alt=""
              />
              {infoIP && infoIP.time_zone.name.replace('/', ', ').toUpperCase() + " " + infoIP.country_emoji}
            </p>
          )
      }
    </section>
  )
}