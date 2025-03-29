import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarComponentProps {
  rating: number;
}

const StarComponent: React.FC<StarComponentProps> = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 !== 0;
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

  return (
    <span className='flex text-yellow-400 text-lg'>
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`full-${index}`} />
      ))}
      {halfStar && <FaStarHalfAlt key='half' />}
      {Array.from({ length: emptyStars }).map((_, index) => (
        <FaRegStar key={`empty-${index}`} />
      ))}
    </span>
  );
};

export default StarComponent;
