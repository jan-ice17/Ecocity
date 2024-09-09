import React, { useEffect, useState } from "react";

const Voting = () => {
  const [proposals, setProposals] = useState([]);

  useEffect(() => {
    // Sample proposals data
    const sampleProposals = [
      {
        id: 1,
        title: "Build a Community Park",
        details: "Proposal to build a new community park in the downtown area.",
        votesFor: 0, // Initialize vote count for each proposal
        votesAgainst: 0,
      },
      {
        id: 2,
        title: "Improve Public Transportation",
        details: "Proposal to enhance the city's public transportation system.",
        votesFor: 0,
        votesAgainst: 0,
      },
      {
        id: 3,
        title: "Create Green Spaces",
        details: "Proposal to increase the number of green spaces in the city.",
        votesFor: 0,
        votesAgainst: 0,
      },
      {
        id: 4,
        title: "Install Solar Panels",
        details: "Proposal to install solar panels in public areas.",
        votesFor: 0,
        votesAgainst: 0,
      },
      {
        id: 5,
        title: "Enhance Bike Lanes",
        details: "Proposal to enhance bike lanes for safer travel.",
        votesFor: 0,
        votesAgainst: 0,
      },
      {
        id: 6,
        title: "Plant More Trees",
        details: "Proposal to plant more trees in parks and streets.",
        votesFor: 0,
        votesAgainst: 0,
      },
    ];
    setProposals(sampleProposals);

    // Add Google Font for Space Grotesk
    const link = document.createElement("link");
    link.href =
      "https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300&display=swap";
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

  // Shared button style (smaller button size)
  const buttonStyle = {
    padding: "8px 20px", // Reduced size
    background: "linear-gradient(90deg, #2374f0, #50a7f7)",
    color: "white",
    border: "none",
    borderRadius: "20px 20px 0 20px",
    fontSize: "14px", // Reduced font size
    cursor: "pointer",
    transition: "background-color 0.2s ease, transform 0.2s ease",
    display: "inline-block",
    minWidth: "80px",
  };

  return (
    <div className="bg-[#0c0f19] min-h-screen flex flex-col justify-center">
      <div className="container mx-auto py-12 px-4 lg:px-0">
        <h1 className="text-center text-white mb-12 text-5xl font-bold">
          Vote on Proposals
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {proposals.map((proposal) => (
            <div
              className="relative w-full p-8 text-white bg-[#0c0f19] rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-lg"
              key={proposal.id}
              style={{
                backgroundColor: "#0c0f19",
                border: "1px solid #2374f0",
                boxShadow: "0 0 15px #2374f0",
                borderRadius: "20px",
              }}
            >
              {/* Card content */}
              <div className="relative z-10 flex flex-col h-full">
                <h2 className="text-2xl font-semibold mb-6">
                  {proposal.title}
                </h2>
                <p className="flex-1 mb-6">{proposal.details}</p>

                <div className="flex space-x-4 mt-auto">
                  <button
                    onClick={() => handleVote(proposal.id, "for")}
                    style={buttonStyle}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#50a7f7")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background =
                        "linear-gradient(90deg, #2374f0, #50a7f7)")
                    }
                  >
                    👍 Yes ({proposal.votesFor})
                  </button>
                  <button
                    onClick={() => handleVote(proposal.id, "against")}
                    style={buttonStyle}
                    onMouseEnter={(e) =>
                      (e.target.style.background = "#50a7f7")
                    }
                    onMouseLeave={(e) =>
                      (e.target.style.background =
                        "linear-gradient(90deg, #2374f0, #50a7f7)")
                    }
                  >
                    👎 No ({proposal.votesAgainst})
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voting;
