import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const QuoteDetailsPage = () => {
  const [oneQuote, setOneQuote] = useState({});
  const [someRandomState, setSomeRandomState] = useState(true);
  //grab the id of the quote from the URL
  const { quoteId } = useParams();
  console.log(quoteId);
  //useEffect to fetch one quote
  useEffect(() => {
    //************fetch **************/
    // fetch(`https://dummyjson.com/quotes/${quoteId}`)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((parsed) => {
    //     console.log("here is the parsed data: ", parsed);
    //     setOneQuote(parsed);
    //   })
    //   .catch((err) => console.log(err));
    //**********axios .then and .catch*************/
    // axios
    //   .get(`https://dummyjson.com/quotes/${quoteId}`)
    //   .then((res) => setOneQuote(res.data))
    //   .catch((err) => console.log(err));
    //**********axios async and await *************/
    async function getOneQuote() {
      try {
        const { data } = await axios.get(
          `https://dummyjson.com/quotes/${quoteId}`
        );
        setOneQuote(data);
      } catch (error) {
        console.log(error);
      }
    }
    getOneQuote();

    //this would be the clean up function
    return () => {
      //inside of this function you would remove event listeners or stop intervals from running
    };
  }, [quoteId, someRandomState]);

  return (
    <div>
      <Link to="/">
        <button>Back</button>
      </Link>

      <h2>Quote: {oneQuote.quote}</h2>
      <h2>Author: {oneQuote.author}</h2>
    </div>
  );
};
