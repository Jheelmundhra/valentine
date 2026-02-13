export default function Memories() {
    const notes = [
      "You are my comfort person 🤍",
      "Your smile fixes my bad days",
      "You feel like home",
      "I love the way you exist"
    ];
  
    return (
      <section>
        <div className="card">
          <h2>Little things I love ✨</h2>
          {notes.map((n, i) => (
            <p key={i}>• {n}</p>
          ))}
        </div>
      </section>
    );
  }
  