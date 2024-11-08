import { useEffect, useState } from "react"

export function useUpdateTime(initialTime: string) {
  const [currentTime, setCurrentTime] = useState<Date | null>(null);

  useEffect(() => {
    if (initialTime !== '') {
      const initialDate = new Date(initialTime.replace(" ", "T"));
      setCurrentTime(initialDate);
    }
  }, [initialTime]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(prev => prev ? new Date(prev.getTime() + 1000) : prev)
    }, 1000);

    return () => clearInterval(intervalId)
  }, [])

  return {
    currentTime
  }
}