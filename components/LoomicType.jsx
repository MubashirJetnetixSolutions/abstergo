export default function LoomicType({ text, as: Tag = "h2", className = "" }) {
  return (
    <Tag className={"lm-display-type " + className} aria-label={text}>
      {text.split(" ").map((word, i) => (
        <span className="lm-type-word" aria-hidden="true" key={i}>
          {[...word].map((letter, j) => (
            <span className="lm-type-mask" key={j}>
              <span className="lm-type-letter">{letter}</span>
            </span>
          ))}
          {i < text.split(" ").length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
