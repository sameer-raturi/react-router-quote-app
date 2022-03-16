import { Redirect, Route, Switch } from "react-router-dom";
import Layout from "./components/layout/Layout";
import AllQuote from "./pages/AllQuote";
import NewQuote from "./pages/NewQuote";
import QuoteDetails from "./pages/QuoteDetails";

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <Redirect to="/quotes" />
        </Route>

        <Route path="/quotes" exact>
          <AllQuote />
        </Route>

        <Route path="/quotes/:quoteId">
          <QuoteDetails />
        </Route>
        <Route path="/new-quote">
          <NewQuote />
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
