import Image from "next/image";
import Link from "next/link";
import ProductSkeleton from "@/components/skeletons/productSkeleton";

interface Product {
  product_id: string;
  image: string;
  model: string;
  description?: string;
  product_source: string;
  cost: string;
}

interface ProductListProps {
  products: Product[];
  loading: boolean;
}

export default function ProductList({ products, loading }: ProductListProps) {
  if (loading) {
    return (
      <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (!products.length) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h1 className='!text-3xl font-semibold text-gray-600'>No Product Found</h1>
      </div>
    );
  }

  return (
    <div className='grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      {products.map((product,index) => (
        <Link
          key={index}
          href={`/product-details/${product.product_id}-f1`}
          prefetch={true}
        >
          <div className='bg-white rounded-xl shadow-lg border border-gray-300 text-center transition-transform transform hover:scale-105 hover:shadow-2xl p-4 cursor-pointer'>
            <div className='w-full h-[200px] flex items-center justify-center relative overflow-hidden rounded-md'>
              <Image
                src={product.image}
                alt={product.model}
                width={200}
                height={200}
                className='object-cover'
              />
            </div>
            <div className='mt-3'>
              <h3 className='text-lg font-semibold text-gray-900'>
                {product.description || ""}
              </h3>
              <p className='!text-gray-600 !text-xl'>
                {product.product_source}
              </p>
              <p className='text-green-600 font-bold mt-2'>{product.cost}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
