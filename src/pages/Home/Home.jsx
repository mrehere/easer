import Header from "../../Components/Header/Header.jsx";
import Footer from "../../Components/Footer/Footer.jsx";
import JournalBox from "../../Components/JournalBox/JournalBox.jsx";
import MoodBox from "../../Components/MoodBox/MoodBox.jsx";
import "./Home.scss";
import { useEffect, useState } from "react";

import AuthDetails from "../../Components/auth/AuthDetails/AuthDetails.jsx";
import { useNavigate } from "react-router-dom";

import axios from "axios";
function Home() {
  const [quote, setQuote] = useState();
  const [quoteLoading, setQuoteLoading] = useState(true);
  const url = import.meta.env.VITE_URL;
  useEffect(() => {
    const getRandomQuotes = async () => {
      try {
        const response = await axios.get(`${url}/quote/random`);
        setQuote(response.data);
        setQuoteLoading(false);
      } catch (error) {
        console.error(`could not get quotes`, error);
      }
    };

    getRandomQuotes();
  }, []);

  if (quoteLoading) {
    return <h1>Please standby, quote is loading....</h1>;
  }

  return (
    <>
      <main className="home">
        <AuthDetails />
        <Header title="easer" subtitle="welcom to your nest!" />
        <section className="home__card">
          <p className="home__quote">{quote.quote}</p>
          <p className="home__quoteAuthor">- {quote.author}</p>
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
