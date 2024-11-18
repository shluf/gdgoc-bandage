import { notFound } from 'next/navigation'
import ProductDetails from "@/components/ProductDetails"
import { getProduct } from '@/hooks/products'
import { Breadcrumb } from '@/components/utils/Breadcrumb'
import BestProducts from '@/components/BestProducts'

interface PageProps {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: PageProps) {
  const { id } = await params
  const product = await getProduct(id)

  if (!product) {
    notFound()
  }

  const items = [
    { label: 'Shop', href: '/shop' },
    { label: product.name }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={items} />
      <div className="container mx-auto pt-8">
        <ProductDetails product={product} />
        <BestProducts />
      </div>
    </div>
  );
}