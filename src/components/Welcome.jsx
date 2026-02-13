import TypingText from "./TypingText.jsx";

export default function Welcome({ onNext }) {
  return (
    <div className="card">
      <TypingText text="Hey Devansh 🤍" />
      <p>I made something special for you…</p>
      <button onClick={onNext}>Continue ✨</button>
    </div>
  );
}
