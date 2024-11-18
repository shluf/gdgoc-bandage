import { getBestSellerProducts } from "@/hooks/products"
import BestProductsClient from "./utils/BestProductsClient";

export default async function BestProducts({ itemsPerPage = 8 }: { itemsPerPage?: number }) {
  const bestSellerProducts = await getBestSellerProducts();

  return <BestProductsClient itemsPerPage={itemsPerPage} initialProducts={bestSellerProducts} />;
}
