import Image from "next/image";
import { FaRegStar } from "react-icons/fa"; // Importing the hollow star icon

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface CardProps {
  product: Product;
}

const Card: React.FC<CardProps> = ({ product }) => {
  return (
    <div className="group cursor-pointer">
      <div className=" mb-4 overflow-hidden bg-white-100">
        <Image
          alt={product.name}
          height={350}
          src={product.image}
          width={400}
        />
      </div>
      <p className="text-sm text-black mt-2 mb-4">Bicycles</p> 
      <h3 className="text-lg font-extrabold text-black mb-2 italic">{product.name}</h3>

      {/* 5 hollow stars */}
      <div className="flex mb-2">
        {[...Array(5)].map((_, index) => (
          <FaRegStar key={index} className="m-0.5 text-black" />
        ))}
      </div>

      <p className="text-gray-800 font-semibold">{product.price}</p>
    </div>
  );
};

export default Card;
