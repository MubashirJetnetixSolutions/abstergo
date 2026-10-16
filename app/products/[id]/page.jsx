import Commerce from "../../../components/Commerce";
import { products } from "../../../lib/products";
import { notFound } from "next/navigation";
export function generateStaticParams() {
  return products.map((p) => ({ id: String(p.id) }));
}
export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = products.find((p) => String(p.id) === id);
  return { title: (p?.name || "Laptop") + " — Abstergo Technology" };
}
export default async function Page({ params }) {
  const { id } = await params;
  const p = products.find((p) => String(p.id) === id);
  if (!p) notFound();
  return <Commerce view="product" productId={p.id} />;
}
