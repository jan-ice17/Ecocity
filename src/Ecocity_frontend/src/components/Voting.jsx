import React, { useEffect, useState } from "react";
import bannerImage from "../assets/ecocity_banner.png";

const Voting = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    // Sample proposals data
    const sampleProposals = [
      {
        id: 1,
        title: "Build a Community Park",
        details: "Proposal to build a new community park in the downtown area.",
        votesFor: 0,
        votesAgainst: 0,
        proposer: "GreenSpace Initiative",
      },
      {
        id: 2,
        title: "Improve Public Transportation",
        details: "Proposal to enhance the city's public transportation system.",
        votesFor: 0,
        votesAgainst: 0,
        proposer: "EcoMobility Group",
      },
      {
        id: 3,
        title: "Create Green Spaces",
        details: "Proposal to increase the number of green spaces in the city.",
        votesFor: 0,
        votesAgainst: 0,
        proposer: "Urban Oasis Project",
      },
      {
        id: 4,
        title: "Install Solar Panels",
        details: "Proposal to install solar panels in public areas.",
        votesFor: 0,
        votesAgainst: 0,
        proposer: "SolarCity Initiative",
      },
      {
        id: 5,
        title: "Enhance Bike Lanes",
        details: "Proposal to enhance bike lanes for safer travel.",
        votesFor: 0,
        votesAgainst: 0,
        proposer: "CycleSafe Coalition",
      },
      {
        id: 6,
        title: "Plant More Trees",
        details: "Proposal to plant more trees in parks and streets.",
        votesFor: 0,
        votesAgainst: 0,
        proposer: "TreeCity Foundation",
      },
    ];
    setProposals(sampleProposals);

    // Add Google Font for Space Grotesk
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap";
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, []);

  const handleVote = (proposalId, voteType) => {
    setProposals((prevProposals) =>
      prevProposals.map((proposal) =>
        proposal.id === proposalId
          ? {
              ...proposal,
              votesFor:
                voteType === "for" ? proposal.votesFor + 1 : proposal.votesFor,
              votesAgainst:
                voteType === "against"
                  ? proposal.votesAgainst + 1
                  : proposal.votesAgainst,
            }
          : proposal
      )
    );
  };

  const renderProposal = (proposal) => (
    <div
      key={proposal.id}
      className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="p-6">
        <h2 className="text-white text-xl font-semibold mb-2">{proposal.title}</h2>
        <p className="text-gray-400 text-sm mb-4">{proposal.details}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-green-400 font-bold">Votes For: {proposal.votesFor}</span>
          <span className="text-red-400 font-bold">Votes Against: {proposal.votesAgainst}</span>
        </div>
        <div className="flex justify-between items-center">
          <button
            onClick={() => handleVote(proposal.id, "for")}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
          >
            👍 Vote For
          </button>
          <button
            onClick={() => handleVote(proposal.id, "against")}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-full transition-colors duration-300"
          >
            👎 Vote Against
          </button>
        </div>
        <p className="text-gray-500 text-sm mt-4">Proposer: {proposal.proposer}</p>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen font-['Space_Grotesk']">
      <div className="relative w-full h-64 mb-8">
        <img src={bannerImage} alt="Ecocity Voting Banner" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-white text-5xl font-bold">Ecocity Voting</h1>
        </div>
      </div>
      
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <h2 className="text-white text-2xl font-semibold mb-4">Active Proposals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proposals.map(renderProposal)}
        </div>
      </div>
    </div>
  );
};

export default Voting;