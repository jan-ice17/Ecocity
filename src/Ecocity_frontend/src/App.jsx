import { useState } from 'react';
import { Ecocity_backend } from 'declarations/Ecocity_backend';
import { useState } from "react"; 
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Proposals from "./components/Proposals"; 
import Voting from "./components/Voting";
import Tokens from "./components/Tokens";
import Signup from "./components/Signup";

const App = () => {
  const [activePage, setActivePage] = useState("home"); // Track current active page

  const renderContent = () => {
    switch (activePage) {
      case "proposals":
        return <Proposals />;
      case "voting":
        return <Voting />;
      case "tokens":
        return <Tokens />;
      case "signup":
        return <Signup />;
      default:
        return (
          <>
            <Hero />
            <Stats />
            <Business />
            <Billing />
            <CardDeal />
            <Testimonials />
            <Clients />
            <CTA />
            <Footer />
          </>
        );
    }
  };

  return (
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar setActivePage={setActivePage} /> {/* Pass setActivePage to Navbar */}
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {renderContent()} {/* Render content based on active page */}
        </div>
      </div>
    </div>
  );
};

export default App;
