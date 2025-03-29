"use server";

import Image from "next/image";
import StarComponent from "@/components/starComponent";
import ProductDetailSkeleton from "@/components/skeletons/productDetailSkeleton";
import { Suspense } from "react";

async function getProductDetails(id: string) {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`${baseUrl}/cache/${id}.json`, {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    clearTimeout(timeout);

    if (!res.ok) {
      return null;
    }

    return await res.json();
  } catch (error) {
    console.log("Error fetching product details:", error);
    return null;
  }
}

async function ProductDetailContent({ id }: { id: string }) {
  const productDetails = await getProductDetails(id);

  if (!productDetails) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <h1 className='text-3xl font-semibold text-gray-600'>No Data Found</h1>
      </div>
    );
  }

  const desc = productDetails?.descriptions;
  const firstKey = desc ? Object.keys(desc)[0] : "";
  const firstProductName =
    desc && firstKey ? (desc[firstKey] as { name: string })?.name : "";

  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden p-6'>
      <div className='flex flex-col md:flex-row items-center gap-6'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <Image
            src={productDetails?.image || "/placeholder-image.png"}
            alt={productDetails?.model || "Product image"}
            width={400}
            height={400}
            className='!rounded-lg !shadow-md !object-cover'
          />
        </div>

        <div className='w-full md:w-1/2'>
          <h2 className='!text-2xl !font-bold !text-gray-900 !mb-2'>
            {firstProductName}
          </h2>

          <p className='!text-green-600 !font-bold !text-2xl !mb-4'>
            {productDetails?.cost || "N/A"}
          </p>

          <div className='flex items-center gap-2 !text-gray-700'>
            {productDetails && (
              <>
                <StarComponent rating={productDetails.rating} />
                <span className='!whitespace-nowrap'>
                  ({productDetails.reviews} reviews)
                </span>
              </>
            )}
          </div>

          {productDetails && (
            <p className='!text-gray-700 !text-lg !mt-2'>
              <strong>Available Quantity:</strong>{" "}
              {productDetails?.quantity || "N/A"}
            </p>
          )}

          <div className='!text-left !flex !gap-4 !mt-4'>
            <button className='!bg-[#FFD814] !px-6 !py-3 !rounded-full !text-lg !hover:bg-yellow-500 !transition-all'>
              Add to Cart
            </button>

            <button className='!bg-[#FA8900] !px-6 !py-3 !rounded-full !text-lg !hover:bg-orange-600 !transition-all'>
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function ProductDetail({ params }: any) {
  if (!params?.id) return <div>No Data Found</div>;

  return (
    <Suspense fallback={<ProductDetailSkeleton />}>
      <ProductDetailContent id={params.id} />
    </Suspense>
  );
}
