import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, ShoppingBag } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

export default function Home() {
  const featuredProducts = [
    {
      id: "1",
      name: "Floating Phone",
      price: 1139.33,
      image: "/img/img_1.jpg",
      category: "Electronics"
    },
    {
      id: "2",
      name: "Smart Watch Pro",
      price: 299.99,
      image: "/img/img_2.jpg",
      category: "Accessories"
    }
  ]

  return (
    <main className="min-h-screen">
      <section className="relative h-[600px]">
        <div className="container mx-auto px-4 py-20 h-full flex items-center">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Welcome to <span className="text-blue">Bandage</span>
              <br />Your Ultimate Shopping Destination
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Discover our curated collection of premium products at unbeatable prices.
            </p>
            <Link href="/shop">
            <Button size="lg" className="bg-blue hover:bg-blue-700">
              Shop Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50 rounded-t-3xl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-gray-600">Check out our most popular items</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProducts.map((product) => (
              <Link href={`/shop/${product.id}`} key={product.id}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="relative h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">{product.category}</div>
                      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-blue font-bold">
                          ${product.price}
                        </span>
                        <Button variant="outline" size="sm">
                          <ShoppingBag className="w-4 h-4 mr-2" />
                          View Details
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue text-white rounded-b-3xl">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Shopping?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied customers and discover our amazing products.
          </p>
            <Link href="/shop">
          <Button size="lg" variant="secondary" className="bg-white text-blue hover:bg-gray-100">
            Browse All Products
          </Button>
            </Link>
        </div>
      </section>
    </main>
  )
}