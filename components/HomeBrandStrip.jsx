import styles from './HomeBrandStrip.module.css';
export default function HomeBrandStrip(){
 return <div className={`brand-strip ${styles.strip}`} aria-label="Our technology brands">
  <span className={styles.label}>LEADING BRANDS. OUR STANDARD.</span>
  <a className={styles.loomic} href="/loomic" aria-label="Discover Loomic"><img src="/loomic/logo.svg" alt="Loomic" width="114" height="21"/></a>
  {['ASUS','DELL','hp','lenovo','msi'].map(name=><strong key={name}>{name}</strong>)}
 </div>;
}
