import {notFound} from 'next/navigation';
import {guides} from '../../../lib/content/insights';
import InsightsArticle from '../../../components/brand/InsightsArticle';
export function generateStaticParams(){return guides.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const a=guides.find(a=>a.slug===slug);return {title:(a?.title||'Insights')+' — Abstergo',description:a?.summary||a?.intro,openGraph:{title:a?.title,description:a?.summary,type:'article'}}}
export default async function Page({params}){const {slug}=await params;const a=guides.find(a=>a.slug===slug);if(!a)notFound();const schema={'@context':'https://schema.org','@type':'Article',headline:a.title,description:a.summary,author:{'@type':'Organization',name:'Abstergo Technology'},publisher:{'@type':'Organization',name:'Abstergo Technology'},dateModified:'2026-10-29',inLanguage:'en'};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema).replace(/</g,'\\u003c')}}/><InsightsArticle article={a}/></>}
