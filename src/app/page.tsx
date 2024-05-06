import Image from "next/image";
import styles from "./page.module.scss";
import AirplaneFly from "@/components/AirplaneFly/AirplaneFly";
import AirplaneFlyMobile from "@/components/AirplaneFlyMobile/AirplaneFlyMobile";

const Home = () => {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Анімація Літака за допомогою&nbsp;
          <code className={styles.code}>React і Next.js</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.airplaneDesk}>
        <AirplaneFly />
      </div>
      <div className={styles.airplaneMob}>
        <AirplaneFlyMobile />
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <div>
        <a
          href="https://github.com/Olena-P/AeroMotion"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            GitHub <span>-&gt;</span>
          </h2>
          <p>
            За допомогою технологій React та Next.js, цей проект пропонує
            унікальний візуальний досвід літання, де літак рухається по заданій
            траєкторії зі зміною кута нахилу.
          </p>
        </a>
      </div>
    </main>
  );
};

export default Home;
