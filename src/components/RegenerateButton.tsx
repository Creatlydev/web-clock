import { Restart } from "./Icons";

type Props = {
  handleClick: () => void
}

export default function RegenerateButton({ handleClick }: Props) {

  return (
    <button
      className="regenerate-btn"
      onClick={handleClick}
    >
      <Restart />
    </button>
  )
}