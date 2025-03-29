import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function ProductSkeleton() {
  return (
    <div className='bg-white rounded-xl shadow-lg border border-gray-300 text-center p-4'>
      <Skeleton height={200} />
      <div className='mt-3'>
        <Skeleton width='80%' height={20} />
        <Skeleton width='60%' height={15} />
        <Skeleton width='40%' height={25} />
      </div>
    </div>
  );
}
