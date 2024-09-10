import HashMap "mo:base/HashMap";
import Principal "mo:base/Principal";
import Nat "mo:base/Nat";
import List "mo:base/List";
import Time "mo:base/Time";
import Iter "mo:base/Iter";
import Hash "mo:base/Hash";
import Text "mo:base/Text";
import Array "mo:base/Array";
import Error "mo:base/Error";
import Option "mo:base/Option";

actor EcoCity {
    type UserId = Principal;
    type ProposalId = Nat;

    type User = {
        name: Text;
        proposals: List.List<ProposalId>;
        votedProposals: List.List<ProposalId>;
        tokens: Nat;
    };
 type Proposal = {
        id: ProposalId;
        title: Text;
        description: Text;
        author: UserId;
        createdAt: Time.Time;
    };

    type Vote = {
        option: Nat;
        voter: Principal;
    };

    type ProposalState = {
        proposal: Proposal;
        votes: [Vote];
        open: Bool;
    };

    type ProposalResult = {
        counts: [Nat];
        total: Nat;
    };

    private func natHash(n: Nat): Hash.Hash {
        Text.hash(Nat.toText(n))
    };
 
  private stable var nextProposalId : Nat = 0;
    private stable var owner : Principal = Principal.fromText("aaaaa-aa");
    private let users : HashMap.HashMap<UserId, User> = HashMap.HashMap<UserId, User>(10, Principal.equal, Principal.hash);
    private let proposals : HashMap.HashMap<ProposalId, ProposalState> = HashMap.HashMap<ProposalId, ProposalState>(10, Nat.equal, natHash);

    public shared(msg) func createUser(name : Text) : async () {
        let userId = msg.caller;
        let newUser : User = {
            name = name;
            proposals = List.nil<ProposalId>();
            votedProposals = List.nil<ProposalId>();
            tokens = 100;
        };
        users.put(userId, newUser);
    };

    public query func getUser(userId : UserId) : async ?User {
        users.get(userId)
    };

    public shared(msg) func createProposal(title : Text, description : Text) : async ProposalId {
        let author = msg.caller;
        let proposalId = nextProposalId;
        nextProposalId += 1;

        let newProposal : Proposal = {
            id = proposalId;
            title = title;
            description = description;
            author = author;
            createdAt = Time.now();
        };

        let newProposalState : ProposalState = {
            proposal = newProposal;
            votes = [];
            open = true;
        };

        proposals.put(proposalId, newProposalState);

        switch (users.get(author)) {
            case (null) { /* Handle error */ };
            case (?user) {
                let updatedUser = {
                    name = user.name;
                    proposals = List.push(proposalId, user.proposals);
                    votedProposals = user.votedProposals;
                    tokens = user.tokens;
                };
                users.put(author, updatedUser);
            };
        };

     proposalId
    };       
};
