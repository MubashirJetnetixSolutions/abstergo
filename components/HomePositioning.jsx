import styles from './HomePositioning.module.css';

const words = ['TECHNOLOGY.','GUIDANCE.','PERFORMANCE.'];
export default function HomePositioning(){
  return <section className={styles.section} aria-labelledby="abstergo-positioning-title">
    <div className={styles.grid} aria-hidden="true"/>
    <div className={styles.statement+' reveal'}>
      <span className={styles.eyebrow}>A DIFFERENT APPROACH TO TECHNOLOGY</span>
      <h2 id="abstergo-positioning-title" className={styles.title+' color-sweep-title'} aria-label="TECHNOLOGY. GUIDANCE. PERFORMANCE.">
        {words.map(word=><span className="color-sweep-word" key={word} aria-hidden="true"><span>{word}</span><span className="color-overlay">{word}</span></span>)}
      </h2>
      <span className={styles.rule} aria-hidden="true"/>
    </div>
    <div className={styles.card+' reveal'}>
      <div className={styles.label}><i aria-hidden="true"/> THE ABSTERGO APPROACH <span>01 — 03</span></div>
      <h3>We don’t simply sell devices.</h3>
      <p>We understand your needs, recommend the right technology and support you throughout its lifecycle.</p>
      <div className={styles.steps} aria-label="Our approach">
        <span><b>01</b> Understand</span><span><b>02</b> Recommend</span><span><b>03</b> Support</span>
      </div>
      <p className={styles.note}>Your technology advisor, performance guide and innovation partner.</p>
    </div>
  </section>;
}
