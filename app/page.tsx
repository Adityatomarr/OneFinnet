import HeroSection from "./components/HeroSection";
import Card from "./components/Card";
import '../app/main.css'

export default function BicycleLanding() {
  const newArrivals = [
    {
      id: 1,
      name: "Kryo X20 MTB - Model K",
      price: "$359.99",
      image: "/bicycle1.jpg",
    },
    {
      id: 2,
      name: "Kryo X20 MTB - Model X",
      price: "$399.99",
      image: "/bicycle2.jpg",
    },
    {
      id: 3,
      name: "Kryo X20 MTB - Model Y",
      price: "$459.99",
      image: "/bicycle3.jpg",
    },
    {
      id: 4,
      name: "Kryo X20 MTB - Model Z",
      price: "$499.99",
      image: "/bicycle4.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* New Arrivals Section */}
      <div className="py-16 px-8">
        <h2 className="text-[3.5rem] text-black font-bold italic text-center mb-12 limelight-regular">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {newArrivals.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
