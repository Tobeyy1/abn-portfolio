import classes from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Footer from "../components/HeroFooter";

export default function Home() {
  return (
    <div className={classes.container}>
      <Hero />
      <Footer theme={"light"} />
    </div>
  );
}
