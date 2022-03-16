import QuoteForm from "../components/quotes/QuoteForm";
const NewQuote = () => {
  const addQuoteHandler = () => {
    console.log("quote added");
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
