import { notFound } from 'next/navigation'
import { getProduct } from '@/hooks/products'
import { Breadcrumb } from '@/components/utils/Breadcrumb'
import BestProducts from '@/components/BestProducts'


export default async function ProductPage() {
  const product = await getProduct("1")

  if (!product) {
    notFound()
  }

  const items = [
    { label: 'Shop'}
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={items} />

      <BestProducts  />
    </div>
  )
}