import React from 'react'
import Skeleton from 'react-loading-skeleton';

const ProductDetailSkeleton = () => {
  return (
    <div className='bg-white shadow-lg rounded-lg overflow-hidden p-6'>
      <div className='flex flex-col md:flex-row gap-6'>
        <div className='w-full md:w-1/2 flex justify-center'>
          <Skeleton height={400} width={400} />
        </div>

        <div className='w-full md:w-1/2'>
          <h2 className='text-2xl font-bold text-gray-900 mb-2'>
            <Skeleton width={200} />
          </h2>

          <p className='text-green-600 font-bold text-2xl mb-4'>
            <Skeleton width={100} />
          </p>

          <div className='flex items-center gap-2 text-gray-700'>
            <span className='text-lg font-semibold'>Rating:</span>
            <Skeleton width={100} />
          </div>

          <p className='text-gray-700 text-lg mt-2'>
            <strong>Available Quantity:</strong> <Skeleton width={50} />
          </p>

          <div className='text-left flex gap-4 mt-4'>
            <Skeleton width={140} height={48} borderRadius={25} />
            <Skeleton width={140} height={48} borderRadius={25} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailSkeleton