import { getBestSellerProducts } from '@/hooks/products';
import { Product } from '@/interfaces/BestSellerProducts';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const bestSellers = await getBestSellerProducts();
        setProducts(bestSellers);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      {isOpen && (
        <div 
          className="-left-4 m-0 fixed inset-0 z-40 bg-black/50"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div className="relative w-full max-w-2xl mx-auto z-50">
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setIsOpen(true);
            }}
            onFocus={() => setIsOpen(true)}
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
        </div>

        {isOpen && searchTerm && (
          <div className="absolute top-full left-0 right-0 w-full bg-white rounded-lg shadow-lg border mt-1">
            <div className="max-h-[80vh] overflow-auto">
              {filteredProducts.length > 0 ? (
                <div className="p-2 space-y-2">
                  {filteredProducts.map((product) => (
                    <Link 
                      key={product.id} 
                      href={`/shop/${product.id}`}
                      onClick={() => {
                        setIsOpen(false);
                        setSearchTerm('');
                      }}
                    >
                      <div className="flex items-center gap-4 p-3 hover:bg-gray-100 rounded-lg transition-colors cursor-pointer">
                        <div className="relative w-16 h-16 flex-shrink-0">
                          <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover rounded-md"
                          />
                        </div>
                        <div className="flex flex-col flex-1 min-w-0">
                          <h3 className="font-medium text-gray-900 truncate">
                            {product.name}
                          </h3>
                          <p className="text-sm text-gray-500">
                            ${product.price.toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-500">
                  No products found
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBar;