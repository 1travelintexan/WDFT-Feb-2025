import axios from "axios";
import { useEffect, useState } from "react";

export const RandomQuotePage = () => {
  const [randomQuote, setRandomQuote] = useState({});
  useEffect(() => {
    async function getRandomQuote() {
      try {
        const res = await axios("https://dummyjson.com/quotes/random");
        setRandomQuote(res.data);
      } catch (error) {
        console.log(error);
      }
    }
    getRandomQuote();
  }, []);
  return (
    <div>
      <h2>Random Quote Page</h2>
      <h2>{randomQuote.quote}</h2>
      <h2>{randomQuote.author}</h2>
    </div>
  );
};
