import React, { useState, useEffect } from "react";
import bannerImage from "../assets/ecocity_banner.png";

const Proposals = () => {
  const [proposals, setProposals] = useState([]);
  const [newProposal, setNewProposal] = useState({
    title: "",
    details: "",
    category: "",
    country: "",
    location: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [submittedProposal, setSubmittedProposal] = useState(null);

  const categories = [
    "Renewable Energy",
    "Waste Management",
    "Green Transportation",
    "Urban Farming",
    "Water Conservation",
    "Biodiversity Protection",
    "Sustainable Buildings",
    "Climate Change Adaptation",
    "Circular Economy",
    "Environmental Education",
  ];

  const africanCountries = [
    "Algeria", "Angola", "Benin", "Botswana", "Burkina Faso", "Burundi", "Cameroon",
    "Cape Verde", "Central African Republic", "Chad", "Comoros", "Congo", "Democratic Republic of Congo",
    "Djibouti", "Egypt", "Equatorial Guinea", "Eritrea", "Ethiopia", "Gabon", "Gambia", "Ghana",
    "Guinea", "Guinea-Bissau", "Ivory Coast", "Kenya", "Lesotho", "Liberia", "Libya", "Madagascar",
    "Malawi", "Mali", "Mauritania", "Mauritius", "Morocco", "Mozambique", "Namibia", "Niger",
    "Nigeria", "Rwanda", "Sao Tome and Principe", "Senegal", "Seychelles", "Sierra Leone",
    "Somalia", "South Africa", "South Sudan", "Sudan", "Swaziland", "Tanzania", "Togo",
    "Tunisia", "Uganda", "Zambia", "Zimbabwe"
  ];

  useEffect(() => {
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    // Add chatbot configuration script
    const scriptConfig = document.createElement("script");
    scriptConfig.innerHTML = `
      window.embeddedChatbotConfig = {
      chatbotId: "kxpQDUENXQezTwswVKJtp",
      domain: "www.chatbase.co"
      }
    `;
    document.body.appendChild(scriptConfig);

    // Add chatbot embed script
    const scriptEmbed = document.createElement("script");
    scriptEmbed.src = "https://www.chatbase.co/embed.min.js";
    scriptEmbed.chatbotId = "kxpQDUENXQezTwswVKJtp";
    scriptEmbed.domain = "www.chatbase.co";
    scriptEmbed.defer = true;
    document.body.appendChild(scriptEmbed);

    // Cleanup function to remove scripts when component unmounts
    return () => {
      document.body.removeChild(scriptConfig);
      document.body.removeChild(scriptEmbed);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProposal({ ...newProposal, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const submissionDate = new Date();
    const newSubmittedProposal = {
      ...newProposal,
      id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
      date: submissionDate.toLocaleDateString(),
      time: submissionDate.toLocaleTimeString(),
    };
    setProposals([...proposals, newSubmittedProposal]);
    setSubmittedProposal(newSubmittedProposal);
    setShowPopup(true);
    setNewProposal({ title: "", details: "", category: "", country: "", location: "" });
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-['Space_Grotesk']">
      <div className="relative w-full h-64 mb-8">
        <img src={bannerImage} alt="Ecocity Proposals Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Ecocity Proposals</h1>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg p-6 mb-8 shadow-lg">
          <h2 className="text-white text-2xl font-semibold mb-4">Submit a New Proposal</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block text-white mb-2">Title</label>
            <input
              type="text"
              id="title"
              name="title"
              value={newProposal.title}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 text-white rounded px-3 py-2"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block text-white mb-2">Category</label>
            <select
              id="category"
              name="category"
              value={newProposal.category}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 text-white rounded px-3 py-2"
            >
              <option value="">Select a category</option>
              {categories.map((category) => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-white mb-2">Country</label>
            <select
              id="country"
              name="country"
              value={newProposal.country}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 text-white rounded px-3 py-2"
            >
              <option value="">Select a country</option>
              {africanCountries.map((country) => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block text-white mb-2">Location/Residency</label>
            <input
              type="text"
              id="location"
              name="location"
              value={newProposal.location}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 text-white rounded px-3 py-2"
              placeholder="e.g., City, State/Province"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="details" className="block text-white mb-2">Details</label>
            <textarea
              id="details"
              name="details"
              value={newProposal.details}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 text-white rounded px-3 py-2 h-32"
            ></textarea>
          </div>
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300">
            Submit Proposal
          </button>
        </form>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map((proposal) => (
            <div
              key={proposal.id}
              className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <div className="p-6">
                <h2 className="text-white text-xl font-semibold mb-2">{proposal.title}</h2>
                <p className="text-blue-400 text-sm mb-2">{proposal.category}</p>
                <p className="text-gray-400 text-sm mb-2">{proposal.country}, {proposal.location}</p>
                <p className="text-gray-400 text-sm mb-4">{proposal.details}</p>
                <p className="text-gray-500 text-xs">Submitted on {proposal.date} at {proposal.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full">
            <h2 className="text-white text-2xl font-semibold mb-4">Proposal Submitted</h2>
            <p className="text-green-400 mb-4">Your proposal has been successfully submitted!</p>
            <div className="mb-4">
              <h3 className="text-white font-semibold">Title:</h3>
              <p className="text-gray-300">{submittedProposal.title}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold">Category:</h3>
              <p className="text-gray-300">{submittedProposal.category}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold">Country:</h3>
              <p className="text-gray-300">{submittedProposal.country}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold">Location:</h3>
              <p className="text-gray-300">{submittedProposal.location}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold">Details:</h3>
              <p className="text-gray-300">{submittedProposal.details}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold">Submission Date:</h3>
              <p className="text-gray-300">{submittedProposal.date} at {submittedProposal.time}</p>
            </div>
            <div className="mb-4">
              <h3 className="text-white font-semibold">Proposal ID:</h3>
              <p className="text-gray-300">{submittedProposal.id}</p>
            </div>
            <button
              onClick={() => setShowPopup(false)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Proposals;