"use client";
import Link from "next/link";

export default function ErrorPage() {
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800'>
      <h1 className='text-6xl font-bold text-red-600 mb-4'>404</h1>
      <h2 className='text-2xl font-semibold mb-2'>Oops! Page Not Found</h2>
      <p className='mb-6 text-center text-gray-600'>
        The page you are looking for might have been removed or is temporarily
        unavailable.
      </p>
      <Link href='/'>
        <button className='px-6 py-3 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition'>
          Go Back Home
        </button>
      </Link>
    </div>
  );
}
