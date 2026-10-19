import './globals.css';
import SiteEnhancements from '../components/SiteEnhancements';
export const metadata={icons:{icon:[{url:'/abstergo-favicon.png',type:'image/png'}],shortcut:'/abstergo-favicon.png',apple:'/abstergo-favicon.png'},title:'Abstergo Technology — Your next dimension',description:'Exceptional gaming, creator and business laptops. Expert advice, upgrades and laptop repair by Abstergo Technology.'};
export default function Layout({children}){return <html lang="en"><body>{children}<SiteEnhancements/></body></html>}
