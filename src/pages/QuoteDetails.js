import { useParams } from "react-router-dom";

const QuoteDetails = () => {
  const params = useParams();

  return (
    <div>
      <p>Quote Details page</p>
      <p>{params.quoteId}</p>
    </div>
  );
};

export default QuoteDetails;
