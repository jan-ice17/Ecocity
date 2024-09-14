actor {
  public query func greet(name : Text) : async Text {
    return "Hello, " # name # "!";
  };
};
actor Token {
  stable var ledger: Trie.Trie<Principal, Nat> = Trie.empty();

  public query func balanceOf(account: Principal) : async Nat {
      Trie.get(ledger, account).unwrapOr(0)
  };

  public func mint(account: Principal, amount: Nat) : async () {
      let currentBalance = Trie.get(ledger, account).unwrapOr(0);
      ledger := Trie.put(ledger, account, currentBalance + amount);
  };

  public func transfer(from: Principal, to: Principal, amount: Nat) : async Bool {
      let fromBalance = Trie.get(ledger, from).unwrapOr(0);
      if (fromBalance < amount) {
          return false;
      };
      ledger := Trie.put(ledger, from, fromBalance - amount);
      let toBalance = Trie.get(ledger, to).unwrapOr(0);
      ledger := Trie.put(ledger, to, toBalance + amount);
      return true;
  };
};
