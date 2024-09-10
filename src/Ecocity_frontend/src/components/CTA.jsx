import React from "react";
import styles from "../style";
import Button from "./Button";

const PricingTier = ({ name, price, features }) => (
  <div className="flex flex-col p-6 rounded-[20px] bg-black-gradient-2 box-shadow">
    <h3 className="font-poppins font-semibold text-white text-[24px] mb-2">
      {name}
    </h3>
    <p className="font-poppins font-normal text-dimWhite text-[18px] mb-4">{price}</p>
    <ul className="list-none mt-4 flex-1">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center text-dimWhite mb-2">
          <svg className="w-4 h-4 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
          </svg>
          {feature}
        </li>
      ))}
    </ul>
    <Button styles="mt-auto w-full" />
  </div>
);

const CTA = () => {
  const tiers = [
    {
      name: "Tier 1",
      price: "Free",
      features: ["Feature 1", "Feature 2"],
    },
    {
      name: "Tier 2",
      price: "$10.00/month",
      features: ["Feature 1", "Feature 2", "Premium Feature"],
    },
    {
      name: "Tier 3",
      price: "$20.00/month",
      features: ["Feature 1", "Feature 2", "Premium Feature"],
    },
  ];

  return (
    <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding} flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]">
        <h1 className={styles.heading2}>
          Choose <br className="sm:block hidden" /> the right<br className="sm:block hidden" /> plan for you
        </h1>
        <div className="w-full md:mt-0 mt-6">
          <p className={`${styles.paragraph} text-left max-w-[450px]`}>
            Everything you need to make your city sustainable and innovative.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap sm:justify-start justify-center w-full feedback-container relative z-[1]">
        {tiers.map((tier, index) => (
          <PricingTier key={index} {...tier} />
        ))}
      </div>
    </section>
  );
};

export default CTA;