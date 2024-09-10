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
    
};
