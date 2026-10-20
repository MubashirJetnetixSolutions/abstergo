import {notFound} from 'next/navigation';
import {articles} from '../../../lib/content/website';
import {ArticlePage} from '../../../components/brand/InformationPages';
export function generateStaticParams(){return articles.map(a=>({slug:a.slug}))}
export async function generateMetadata({params}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);return {title:(a?.title||'Insights')+' — Abstergo',description:a?.intro}}
export default async function Page({params}){const {slug}=await params;const a=articles.find(a=>a.slug===slug);if(!a)notFound();return <ArticlePage article={a}/>}
