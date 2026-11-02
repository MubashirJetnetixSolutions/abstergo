import {notFound} from 'next/navigation';
import LoomicProductExperience from '../../../components/brand/LoomicProductExperience';
import {loomicProducts,getLoomicProduct} from '../../../lib/content/loomic-products';
export function generateStaticParams(){return loomicProducts.filter(p=>p.slug!=='voltis-power-ultra').map(p=>({slug:p.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const p=getLoomicProduct(slug);return {title:p?'Loomic '+p.name+' — Abstergo':'Loomic',description:p?.line}}
export default async function Page({params}){const {slug}=await params;const product=getLoomicProduct(slug);if(!product)notFound();return <LoomicProductExperience product={product}/>}
