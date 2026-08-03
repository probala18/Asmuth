import { ProductDetailPage } from "@/app/PageComponents";
import { getProduct } from "@/data";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug);
  return {
    title: product ? `${product.name} — genCART` : "Product — genCART",
    description: product ? product.shortDescription : "Browse product details.",
  };
}

export default function Page({ params }: { params: Promise<{ slug: string }> }) {
  return <ProductDetailPage params={params} />;
}
