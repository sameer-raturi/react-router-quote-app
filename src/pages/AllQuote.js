import QuoteList from "../components/quotes/QuoteList";

const AllQuote = () => {
  const Dummy_Quotes = [
    { id: "q1", author: "sam", text: "Learning react is fun" },
    { id: "q2", author: "sameer", text: "Learning react is great" }
  ];

  return <QuoteList quotes={Dummy_Quotes} />;
};

export default AllQuote;
