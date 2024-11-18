'use client'
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { AspectRatio } from "../ui/aspect-ratio"
import { Products } from "../../interfaces/BestSellerProducts"


const BestProductsClient = ({ initialProducts, itemsPerPage }: { initialProducts: Products, itemsPerPage: number }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [sortOrder, setSortOrder] = useState("default");

    const sortProducts = (products: Products) => {
      const sortedProducts = [...products];
      switch (sortOrder) {
        case "price-asc":
          return sortedProducts.sort((a, b) => a.discountedPrice - b.discountedPrice);
        case "price-desc":
          return sortedProducts.sort((a, b) => b.discountedPrice - a.discountedPrice);
        case "in-stock":
          return sortedProducts.filter(product => product.inStock);;
        default:
          return sortedProducts;
      }
    };
  
    const sortedProducts = sortProducts(initialProducts);
    
    const totalPages = Math.ceil(sortedProducts.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = sortedProducts.slice(startIndex, endIndex);
  
    return (
      <section className="mt-12">
        <div className="flex justify-between items-center mb-6 py-8 border-b-2 border-grey">
          <h2 className="text-2xl font-bold uppercase">Bestseller Products</h2>
          <Select value={sortOrder} onValueChange={setSortOrder}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="default">Default</SelectItem>
              <SelectItem value="price-asc">Price: Low to High</SelectItem>
              <SelectItem value="price-desc">Price: High to Low</SelectItem>
              <SelectItem value="in-stock">Stock: Available</SelectItem>
            </SelectContent>
          </Select>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {currentProducts.map((product) => (
            <Card key={product.id} className="md:hover:scale-105 transition-all">
              <Link href={`/shop/${product.id}`}>
                <CardContent className="p-0">
                  <AspectRatio ratio={1 / 1}>
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={200}
                      height={200}
                      className="w-full h-full object-cover mb-4 rounded-t-xl"
                    />
                  </AspectRatio>
                  <div className="p-4">
                    <h3 className="font-semibold mb-2">{product.name}</h3>
                    <p className="text-sm text-gray-600 mb-2">{product.store}</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-500 line-through mr-2">
                      ${product.price.toFixed(2)}
                    </span>
                    <span className="font-bold text-green-600">
                      ${product.discountedPrice.toFixed(2)}
                    </span>
                  </div>
                </CardFooter>
              </Link>
            </Card>
          ))}
        </div>
  
        <div className="flex justify-center gap-2 mt-8">
          <Button 
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "blue" : "outline"}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}
          <Button
            variant="outline"
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </section>
    );
  }

export default BestProductsClient;