import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
export const QuotesList = () => {
  const [quotes, setQuotes] = useState([]);

  //useEffect on mount syntax
  useEffect(() => {
    //this is where we go and get data
    //this is with fetch
    // fetch("https://dummyjson.com/quotes")
    //   .then((response) => {
    //     //with fetch you always have to return the second promise.
    //     //convert it to json
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log("here is the data: ", data);
    //     setQuotes(data.quotes);
    //   })
    //   .catch((err) => console.log(err));

    //this is with axios .then and .catch
    // axios("https://dummyjson.com/quotes")
    //   .then(({ data }) => {
    //     console.log("response from axios; ", data);
    //     setQuotes(data.quotes);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    //*******************async and await (axios) *********/
    async function getQuotes() {
      try {
        const { data } = await axios("https://dummyjson.com/quotes");
        console.log(data);
        setQuotes(data.quotes);
      } catch (error) {
        console.log(error);
      }
    }
    // always remember to call the function
    getQuotes();
  }, []);
  return (
    <div>
      {quotes.map((oneQuote) => {
        return (
          <div key={oneQuote.id} className="quote-card">
            <h2>{oneQuote.quote}</h2>
            <h4>- {oneQuote.author}</h4>
            <Link to={`/details/${oneQuote.id}`}>
              <button>Details</button>
            </Link>
          </div>
        );
      })}
    </div>
  );
};
