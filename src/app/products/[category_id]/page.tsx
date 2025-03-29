"use server";

import ProductList from "@/components/productList";

interface ProductsParams {
  params: {
    category_id: string;
  };
}

export default async function Products({ params }: any) {
  const { category_id } = params;

  let products = [];
  let loading = true;

  try {
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000);

    const res = await fetch(`${baseUrl}/category/${category_id}.json`, {
      signal: controller.signal, 
      next: { revalidate: 60 },
    });

    clearTimeout(timeout);

    if (!res.ok) {
      products = [];
      loading = false;
    }

    const response_data = await res.json();
    products = response_data?.data?.products || [];
    loading = false;
  } catch (error) {
    console.log("Error fetching products:", error);
    loading = false;
  }

  return (
    <div>
      <div className='text-gray-600 text-2xl mb-4'>
        <span className='font-semibold text-gray-900'>Products</span>
      </div>

      <ProductList products={products} loading={loading} />
    </div>
  );
}
