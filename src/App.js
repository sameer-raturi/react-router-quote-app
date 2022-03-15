import { Route } from "react-router-dom";
import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <div>
      <Route path="/quotes" exact>
        <AllQuote />
      </Route>

      <Route path="/quotes/:quoteId">
        <QuoteDetails />
      </Route>
      <Route path="/new-quote">
        <NewQuote />
      </Route>
    </div>
  );
}

export default App;
