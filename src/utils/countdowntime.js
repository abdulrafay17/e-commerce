import { useState, useEffect } from "react";

// ⏳ Countdown Function
export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const target = new Date("2025-10-21T00:00:00"); // <-- set your target date

    const updateTimer = () => {
      const now = new Date();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const values = [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds];

  return (
    <div className="flex flex-wrap gap-4 md:gap-6 items-center">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
        <div key={i} className="flex flex-col items-center">
          <span className="text-lg font-semibold">{label}</span>
          <span className="text-3xl md:text-4xl">{values[i]}</span>
        </div>
      ))}
    </div>
  );
}