import Header from "../../Components/Header/Header.jsx";
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

        <section className="home__moodSelector">
          <div className="home__joyful">
            😊
            <span className="home__joyfulText">joyful</span>
          </div>
          <div className="home__content">
            🙂
            <span className="home__contentText">content</span>
          </div>
          <div className="home__confused">
            😕
            <span className="home__confusedText">confused</span>
          </div>
          <div className="home__angry">
            😠
            <span className="home__angryText">angry</span>
          </div>
          <div className="home__crying">
            😢
            <span className="home__cryingText">crying</span>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
