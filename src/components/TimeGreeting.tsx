import { MoonStars, SolarSun } from "./Icons";

type Props = {
  hour: number;
};

export default function TimeGreeting({ hour }: Props) {
  const getGreeting = () => {
    if (hour >= 6 && hour < 12) return { greet: 'GOOD MORNING', icon: <SolarSun /> };
    if (hour >= 12 && hour < 18) return { greet: 'GOOD AFTERNOON', icon: <SolarSun /> };
    return { greet: 'GOOD EVENING', icon: <MoonStars /> };
  };

  const { greet, icon } = getGreeting();

  return (
    <header
      aria-label="Current time greeting"
      role="banner"
    >
      <h2>
        <span aria-hidden="true">{icon}</span>
        <span>{greet}</span>
      </h2>
      <span>It's currently</span>
    </header>
  );
}
