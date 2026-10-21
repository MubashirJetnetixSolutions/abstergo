import styles from './AbstergoWordmark.module.css';

// Animate slices of the fixed Good Times wordmark with the original letter hooks.
const cuts = [0, 1010.5, 1880, 2745, 3499, 4245.5, 5177.5, 6040, 6986];
export default function AbstergoWordmark({className=''}){
  return <div className={`letter-reveal-title ${className} ${styles.wordmark}`} aria-label="ABSTERGO">
    {[..."ABSTERGO"].map((letter, index) => {
      const start = cuts[index];
      const width = cuts[index + 1] - start;
      return <span key={index} className={`letter-window ${styles.letterWindow}`} aria-hidden="true"
        style={{'--letter-index':index, '--slice-width':width, '--mask-size':`${6986 / width * 100}% 100%`, '--mask-position':`${start / (6986 - width) * 100}% center`}}>
        <span className={`reveal-letter ${styles.glyph}`}/>
      </span>;
    })}
  </div>;
}
