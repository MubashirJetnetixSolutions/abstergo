import './globals.css';
import SiteEnhancements from '../components/SiteEnhancements';
export const metadata={icons:{icon:[{url:'/abstergo-favicon.png',type:'image/png'}],shortcut:'/abstergo-favicon.png',apple:'/abstergo-favicon.png'},title:'Abstergo Technology — Technology, chosen intelligently.',description:'High-performance technology, expert advice and lasting support—designed around what you actually need.'};
export default function Layout({children}){return <html lang="en"><body>{children}<SiteEnhancements/></body></html>}
