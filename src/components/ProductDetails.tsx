"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Star, ShoppingCart, Search, Heart, Eye } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { type CarouselApi } from "@/components/ui/carousel"
import { DetailProduct } from "../interfaces/DetailProducts"
import { useLikes } from "./utils/LikeContext"


export default function ProductDetails({ product }: { product: DetailProduct }) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0])
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)
  const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>()
  const { likes, toggleLike } = useLikes();

  const isLiked = likes[product.id] || false;

  useEffect(() => {
    if (!api || !thumbnailApi) return

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
      thumbnailApi.scrollTo(api.selectedScrollSnap())
    })
  }, [api, thumbnailApi])

  const handleLike = () => {
    toggleLike(product.id);
  }

  return (
    <Card className="mb-8">
      <CardContent className="p-0 sm:p-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <Carousel setApi={setApi} className="w-full max-w-lg">
              <CarouselContent>
                {product.images.map((src, index) => (
                  <CarouselItem key={index}>
                    <div className="relative aspect-square">
                      <Image
                        src={src}
                        alt={`Product image ${index + 1}`}
                        fill
                        className="object-cover rounded-lg"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>

            <Carousel
              setApi={setThumbnailApi}
              className="w-full mx-4 sm:mx-0"
              opts={{
                align: "start",
                dragFree: true,
              }}
            >
              <CarouselContent className="-ml-2">
                {product.images.map((src, index) => (
                  <CarouselItem key={index} className="basis-1/4 pl-2">
                    <div
                      className={`relative aspect-square cursor-pointer rounded-lg overflow-hidden ${
                        current === index ? "" : "brightness-50"
                      }`}
                      onClick={() => api?.scrollTo(index)}
                    >
                      <Image
                        src={src}
                        alt={`Thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
          <div className="sm:px-0 sm:pb-0 px-4 pb-4">
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <div className="flex items-center mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${
                      i < Math.floor(product.rating)
                        ? "fill-current"
                        : "stroke-current"
                    }`}
                  />
                ))}
              </div>
              <span className="ml-2 text-gray-600">
                {product.reviewCount} Reviews
              </span>
            </div>
            <p className="text-2xl font-bold mb-1">
              ${product.price.toFixed(2)}
            </p>
            <p className="text-gray-600 mb-6 font-bold">
              Availability:{" "}
              <span
                className={product.inStock ? "text-blue" : "text-red-600"}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </p>
            <p className="text-gray-700 pb-4 mb-4 sm:text-base text-sm border-b-2 border-gray-300">
              {product.description}
            </p>
            <div className="mb-16">
              <h3 className="font-semibold mb-2">Color</h3>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    className={`w-6 h-6 rounded-full bg-${color} ${
                      selectedColor === color
                        ? "ring-2 ring-offset-2 ring-gray-400"
                        : ""
                    }`}
                    onClick={() => setSelectedColor(color)}
                  />
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="blue" className="w-full md:w-auto h-8 px-3 text-xs sm:h-9 sm:px-4 sm:text-md">
                Select Options
              </Button>
              <Button variant="outline" className="rounded-full p-2 h-8 w-8">
                <ShoppingCart className="h-5 w-5" />
              </Button>
              <Button onClick={() => handleLike()} variant="outline" className="rounded-full p-2 h-8 w-8">
                <Heart className={`h-5 w-5 ${isLiked ? "fill-current text-red-600" : ""}`} />
              </Button>
              <Button variant="outline" className="rounded-full p-2 h-8 w-8">
                <Eye className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}