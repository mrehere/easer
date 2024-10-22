import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import JournalBox from "../../Components/JournalBox/JournalBox.jsx";
import MoodBox from "../../Components/MoodBox/MoodBox.jsx";
import "./Home.scss";
function Home() {
  return (
    <>
      <main className="home">
        <Header title="easer" subtitle="welcom to your nest!" />
        <section className="home__card">
          <p className="home__quote">
            Quote of the day Quote of the day Quote of the day
          </p>
          <p className="home__quoteAuthor">-anonymous</p>
        </section>

        <MoodBox />
        <JournalBox />
        <div className="home__foterContainer">
          <Footer />
        </div>
      </main>
    </>
  );
}

export default Home;
