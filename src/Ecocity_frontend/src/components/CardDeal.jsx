import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const CardDeal = () => (
  <section className={`${layout.section} xl:px-0 sm:px-16 px-6`}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easy Peasy Steps to Improve Your City.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Submit your proposal, vote on others, track your progress, and earn tokens for making a big impact. 
      </p>

      <Button styles={`mt-10`} />
    </div>

    <div className={layout.sectionImg}>
      <img src={card} alt="EcoCity Steps" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;
