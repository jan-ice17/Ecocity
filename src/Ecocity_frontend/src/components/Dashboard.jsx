import React, { useState, useEffect } from "react";
import bannerImage from "../assets/ecocity_banner.png";
import recycledToteBag from "../assets/recycled_tote_bag.png";
import bambooCutlery from "../assets/bamboo_cutlery.png";
import tireFlowerPot from "../assets/tire_flower_pot.png";
import plasticBottles from "../assets/plastic_bottles.png";
import copperWires from "../assets/copper_wires.png";
import cardboardBoxes from "../assets/cardboard_boxes.png";

const products = [
  {
    id: 1,
    name: "Recycled Plastic Tote Bag",
    price: 2.5,
    image: recycledToteBag,
    seller: "EcoKraft Kenya",
    description: "Durable and eco-friendly tote bag made from recycled plastic bottles.",
  },
  {
    id: 2,
    name: "Bamboo Cutlery Set",
    price: 1.8,
    image: bambooCutlery,
    seller: "GreenLife Ghana",
    description: "Sustainable bamboo cutlery set, perfect for on-the-go meals.",
  },
  {
    id: 3,
    name: "Upcycled Tire Planter",
    price: 3.2,
    image: tireFlowerPot,
    seller: "EcoInnovate Nigeria",
    description: "Unique planter made from upcycled tires, great for urban gardening.",
  },
  {
    id: 4,
    name: "Solar-Powered Lantern",
    price: 5.0,
    image: recycledToteBag, // Replace with actual image when available
    seller: "SunLight Tanzania",
    description: "Efficient solar-powered lantern for sustainable outdoor lighting.",
  },
  {
    id: 5,
    name: "Handwoven Grass Basket",
    price: 4.2,
    image: bambooCutlery, // Replace with actual image when available
    seller: "ArtisanCraft Senegal",
    description: "Beautiful handwoven basket made from locally sourced grass.",
  },
  {
    id: 6,
    name: "Organic Shea Butter",
    price: 2.8,
    image: tireFlowerPot, // Replace with actual image when available
    seller: "NaturalBeauty Mali",
    description: "100% organic shea butter, ethically sourced and produced.",
  },
];

const recyclables = [
  {
    id: 1,
    name: "Plastic Bottles (1kg)",
    startingBid: 0.5,
    image: plasticBottles,
    seller: "RecycleHub Nairobi",
    description: "Clean, sorted plastic bottles ready for recycling.",
  },
  {
    id: 2,
    name: "Copper Wires (1kg)",
    startingBid: 2.0,
    image: copperWires,
    seller: "MetalScrap Lagos",
    description: "Stripped copper wires, perfect for metal recycling.",
  },
  {
    id: 3,
    name: "Cardboard Boxes (5kg)",
    startingBid: 0.8,
    image: cardboardBoxes,
    seller: "PaperRecycle Cairo",
    description: "Flattened cardboard boxes, ready for paper recycling.",
  },
];

const Dashboard = () => {
  const [cart, setCart] = useState([]);
  const [bids, setBids] = useState({});
  const [showCart, setShowCart] = useState(false);
  const [userTokens, setUserTokens] = useState({
    total: 1000,
    claimable: 50,
    fromProposals: 150,
  });

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setShowCart(true);
  };

  const removeFromCart = (productId) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const placeBid = (id, amount) => {
    setBids({ ...bids, [id]: amount });
  };

  const icpToUsd = (icp) => {
    return (icp * 25).toFixed(2);
  };

  const claimTokens = () => {
    setUserTokens(prevTokens => ({
      ...prevTokens,
      total: prevTokens.total + prevTokens.claimable,
      claimable: 0,
    }));
  };

  const renderProduct = (product) => (
    <div key={product.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-2">{product.name}</h2>
        <p className="text-gray-400 text-sm mb-4">{product.description}</p>
        <div className="flex justify-between items-center">
          <span className="text-green-400 font-bold">{product.price} ICP</span>
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
          >
            Add to Cart
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-4">Seller: {product.seller}</p>
      </div>
    </div>
  );

  const renderRecyclable = (item) => (
    <div key={item.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
      <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-2">{item.name}</h2>
        <p className="text-gray-400 text-sm mb-4">{item.description}</p>
        <div className="flex flex-col">
          <span className="text-green-400 font-bold mb-2">Starting Bid: {item.startingBid} ICP</span>
          <input
            type="number"
            min={item.startingBid}
            step="0.1"
            value={bids[item.id] || ""}
            onChange={(e) => placeBid(item.id, e.target.value)}
            className="bg-gray-700 text-white rounded px-3 py-2 mb-2"
            placeholder="Enter your bid"
          />
          <button
            onClick={() => placeBid(item.id, bids[item.id])}
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
          >
            Place Bid
          </button>
          {bids[item.id] && (
            <p className="text-gray-400 text-sm mt-2">
              Your bid: {bids[item.id]} ICP (${icpToUsd(bids[item.id])} USD)
            </p>
          )}
        </div>
        <p className="text-gray-500 text-sm mt-4">Seller: {item.seller}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-['Space_Grotesk']">
      <div className="relative w-full h-64 mb-8">
        <img src={bannerImage} alt="Ecocity Marketplace Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Ecocity Marketplace</h1>
        </div>
      </div>
      
      <div className="p-6">
        <h2 className="text-white text-2xl font-semibold mb-4">Eco-friendly Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map(renderProduct)}
        </div>

        <h2 className="text-white text-2xl font-semibold mb-4">Recyclable Materials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {recyclables.map(renderRecyclable)}
        </div>

        <h2 className="text-white text-2xl font-semibold mb-4">Your Tokens</h2>
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">Total Tokens</h3>
              <p className="text-green-400 text-2xl font-bold">{userTokens.total}</p>
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">Claimable Tokens</h3>
              <p className="text-blue-400 text-2xl font-bold">{userTokens.claimable}</p>
              {userTokens.claimable > 0 && (
                <button
                  onClick={claimTokens}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
                >
                  Claim Tokens
                </button>
              )}
            </div>
            <div className="text-center">
              <h3 className="text-white text-lg font-semibold mb-2">Tokens from Proposals</h3>
              <p className="text-purple-400 text-2xl font-bold">{userTokens.fromProposals}</p>
            </div>
          </div>
        </div>

        {showCart && (
          <div className="fixed top-0 right-0 h-screen w-64 bg-gray-800 p-6 shadow-lg transform transition-transform duration-300 ease-in-out">
            <h2 className="text-white text-xl font-semibold mb-4">Cart ({cart.length})</h2>
            <button
              onClick={() => setShowCart(false)}
              className="absolute top-2 right-2 text-white hover:text-gray-300"
            >
              ✕
            </button>
            <ul className="mb-4">
              {cart.map((item) => (
                <li key={item.id} className="text-gray-400 flex justify-between items-center mb-2">
                  <span>{item.name} - {item.price} ICP</span>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-600"
                  >
                    ✕
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-auto">
              <p className="text-white font-bold mb-4">
                Total: {cart.reduce((total, item) => total + item.price, 0).toFixed(2)} ICP
              </p>
              <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full transition-colors duration-300 w-full">
                Checkout
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;