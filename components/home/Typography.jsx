"use client";

export function LetterReveal({ text, className = "" }) {
  return (
    <div className={"letter-reveal-title " + className} aria-label={text}>
      {[...text].map((letter, i) => (
        <span
          className="letter-window"
          style={{
            "--letter-index": i,
          }}
          aria-hidden="true"
          key={i}
        >
          <span className="reveal-letter">{letter}</span>
        </span>
      ))}
    </div>
  );
}
export function ColorText({ text, className = "" }) {
  return (
    <h2 className={"color-sweep-title " + className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span className="color-sweep-word" key={i} aria-hidden="true">
          <span>{word}</span>
          <span className="color-overlay">{word}</span>
        </span>
      ))}
    </h2>
  );
}
export function AnimatedText({ text, className = "", as: Tag = "h2" }) {
  return (
    <Tag className={"animated-text " + className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span className="word-mask" aria-hidden="true" key={i}>
          <span className="text-word">{word}</span>{" "}
        </span>
      ))}
    </Tag>
  );
}
