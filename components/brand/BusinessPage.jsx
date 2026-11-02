import Link from 'next/link';
import {ArrowUpRight,Search,PackageCheck,Wrench,Users,Monitor,Server,HardDrive,Printer,BatteryCharging,ClipboardCheck,Laptop,Cpu} from 'lucide-react';
import BrandShell,{BrandTitle} from './BrandShell';
import InquiryForm from './InquiryForm';
import BusinessMotion from './BusinessMotion';
import BusinessHero from './BusinessHero';
import './business-page.css';

const categories=[
 [Laptop,'Employee Computing','Laptops and desktops matched to each role, from everyday teams to executives.'],
 [Cpu,'Workstations','Certified performance for engineering, design, 3D and AI workloads.'],
 [Monitor,'IT Infrastructure','Networking and core equipment that keeps your organization connected.'],
 [Server,'Servers','Reliable compute sized for your applications, growth and uptime needs.'],
 [HardDrive,'Storage & NAS','Secure, scalable storage and backup for shared company data.'],
 [Printer,'Printing','Office and production printing chosen around volume and cost per page.'],
 [BatteryCharging,'Power & Loomic Essentials','Power, protection and premium daily essentials for every desk.'],
 [Wrench,'Fleet Maintenance','Preventive care, repair and lifecycle support across your whole fleet.']
];
const challenges=[
 ['Equip a new team','Onboard people with the right devices from day one.'],
 ['Renew our computer fleet','Plan a clean, budgeted refresh of aging equipment.'],
 ['Build a server infrastructure','Design and deploy infrastructure that scales with you.'],
 ['Improve storage','Fix capacity, speed, sharing and backup problems.'],
 ['Equip executives','Premium, reliable devices for leadership and travel.'],
 ['Deploy workstations','Roll out high-performance machines for specialist teams.'],
 ['Standardize employee equipment','One consistent, supportable equipment standard.']
];
const pillars=[
 [Search,'01 / CHOOSE','We assess before we recommend.','Roles, software, budget and growth plans shape a tailored shortlist, not a catalogue dump.'],
 [PackageCheck,'02 / DEPLOY','Delivered ready to work.','Sourcing, configuration and rollout coordinated so your team starts productive.'],
 [Wrench,'03 / MAINTAIN','Support across the lifecycle.','Preventive maintenance, repair and renewal planning keep performance steady.']
];
const proof=['Needs-based recommendations','One partner, devices to infrastructure','Standardized, supportable fleets','Lifecycle and renewal planning'];

const stats=[[8,'','Technology categories'],[7,'','Business challenges we start from'],[3,'','Stages: choose, deploy, maintain'],[1,'','Partner from devices to infrastructure']];
export function BusinessPage(){return <BrandShell>
 <BusinessMotion/><div className="biz-progress" aria-hidden="true"/><div className="biz-root">
 <BusinessHero/>

 <div className="biz-marquee" aria-hidden="true">{[0,1].map(r=><div className="biz-marquee-track" key={r}>{[...categories,...categories].map(([,t],i)=><span key={i}>{t}<i/></span>)}</div>)}</div>

 <section className="biz-stats" aria-label="Abstergo for business at a glance">{stats.map(([n,s,l])=><div className="biz-stat" key={l}><strong><span className="biz-count" data-to={n}>0</span>{s}</strong><span>{l}</span></div>)}</section>

 <section className="ab-section biz-pillars" aria-labelledby="biz-how">
  <span className="ab-eyebrow" data-reveal>WHY ORGANIZATIONS CHOOSE ABSTERGO</span>
  <BrandTitle as="h2">A technology partner, not an order desk.</BrandTitle>
  <div className="ab-three-grid">{pillars.map(([Icon,tag,title,copy])=><article className="ab-path-card" key={tag}><Icon/><span className="ab-eyebrow">{tag}</span><h2>{title}</h2><p>{copy}</p></article>)}</div>
  <span id="biz-how"/>
 </section>

 <section className="ab-section ab-dark biz-dark" id="challenges"><span className="biz-glow" aria-hidden="true"/>
  <span className="ab-eyebrow" data-reveal>START WITH THE NEED</span>
  <BrandTitle as="h2">What challenge are you solving?</BrandTitle>
  <div className="biz-challenges">{challenges.map(([t,d],i)=><a href={'/business?challenge='+encodeURIComponent(t)+'#inquiry'} key={t}><span>{String(i+1).padStart(2,'0')}</span><div><h3>{t}</h3><p>{d}</p></div><ArrowUpRight/></a>)}</div>
 </section>

 <section className="ab-section" id="categories">
  <span className="ab-eyebrow" data-reveal>FROM PEOPLE TO INFRASTRUCTURE</span>
  <BrandTitle as="h2">Everything your organization runs on.</BrandTitle>
  <div className="ab-four-grid">{categories.map(([Icon,t,d],i)=><Link href={'/business?service='+encodeURIComponent(t)+'#inquiry'} className="ab-number-card biz-card" key={t}><Icon size={26} strokeWidth={1.4}/><span>{String(i+1).padStart(2,'0')}</span><h3>{t}</h3><p>{d}</p><ArrowUpRight/></Link>)}</div>
 </section>

 <section className="ab-section ab-dark biz-proof biz-dark"><span className="biz-glow" aria-hidden="true"/>
  <div><span className="ab-eyebrow" data-reveal>THE ABSTERGO APPROACH</span><BrandTitle as="h2">Built for performance. Maintained for the long term.</BrandTitle></div>
  <ul>{proof.map(p=><li key={p}><ClipboardCheck size={20}/>{p}</li>)}</ul>
 </section>

 <InquiryForm business/>
 </div>
</BrandShell>}
