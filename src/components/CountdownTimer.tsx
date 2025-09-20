import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Set the date we're counting down to (November 26, 2025)
    const countDownDate = new Date("Nov 26, 2025 00:00:00").getTime();

    // Update the count down every 1 second
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();

      // Find the distance between now and the count down date
      const distance = countDownDate - now;

      // Time calculations for days, hours, minutes and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      
      // Trigger animation on seconds change
      setAnimate(true);
      setTimeout(() => setAnimate(false), 500);

      // If the count down is finished, clear the interval
      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Format number to always have two digits
  const formatNumber = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
  };

  // Component for each time unit
  const TimeUnit = ({
    value,
    label,
    isSeconds = false,
  }: {
    value: number;
    label: string;
    isSeconds?: boolean;
  }) => (
    <div className="flex flex-col items-center">
      <div className={`relative group ${isSeconds && animate ? 'scale-105' : ''} transition-transform duration-300`}>
        <div className="absolute inset-0 bg-primary/20 rounded-lg blur-md transform -translate-y-1 translate-x-1"></div>
        <div className="bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm rounded-lg p-4 w-16 md:w-24 h-16 md:h-24 flex items-center justify-center mb-2 border border-white/20 shadow-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <span className="text-2xl md:text-4xl font-bold relative z-10">{formatNumber(value)}</span>
        </div>
        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-primary rounded-full opacity-70"></div>
      </div>
      <span className="text-sm md:text-base uppercase tracking-wider font-medium mt-2 text-white/90">
        {label}
      </span>
    </div>
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-xl transform scale-110"></div>
      <div className="relative grid grid-cols-4 gap-2 md:gap-6 max-w-2xl mx-auto p-6 rounded-xl bg-black/30 backdrop-blur-sm border border-white/10">
        <TimeUnit value={timeLeft.days} label="Days" />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <TimeUnit value={timeLeft.seconds} label="Seconds" isSeconds={true} />
      </div>
    </div>
  );
};