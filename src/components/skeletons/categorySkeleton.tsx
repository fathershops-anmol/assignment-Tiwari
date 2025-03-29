import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function CategorySkeleton() {
  return (
    <div className='bg-white rounded-lg shadow-md border-2 border-black text-center flex flex-col items-center justify-between cursor-pointer transition-transform duration-300 ease-in-out'>
      <div className='relative w-full flex items-center justify-center border-b-2 border-black p-12'>
        <Skeleton width={150} height={150} />
      </div>
      <div className='p-4 w-full bg-white'>
        <Skeleton width='60%' height={20} />
      </div>
    </div>
  );
}
