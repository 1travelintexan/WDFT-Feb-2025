import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { QuotesList } from "./pages/QuotesList";
import { NotFound } from "./pages/NotFound";
import { QuoteDetailsPage } from "./pages/QuoteDetailsPage";
import { RandomQuotePage } from "./pages/RandomQuotePage";
function App() {
  return (
    <>
      <h1>Use Effect Day</h1>
      <Link to="/random">
        <button>Get a Random Quote</button>
      </Link>
      <Routes>
        <Route path="/" element={<QuotesList />} />
        <Route path="/details/:quoteId" element={<QuoteDetailsPage />} />
        <Route path="/random" element={<RandomQuotePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
