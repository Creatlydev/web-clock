import { useUpdateTime } from "../hooks/useUpdateTime"
import TimeGreeting from "./TimeGreeting"

export default function Time() {
  const { currentTime } = useUpdateTime()
  const formatter = Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit' })

  return (
    <>
      <TimeGreeting hour={currentTime.getHours()} />

      <h1 className="timezone__time">
        {
          formatter.format(currentTime)
        }
        <div className="seconds">
          <span>{currentTime.getSeconds().toString().padStart(2, '0')}</span>
        </div>
      </h1>
    </>
  )
}