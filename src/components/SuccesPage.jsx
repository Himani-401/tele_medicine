import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const SuccessPage = () => {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [sessionDetails, setSessionDetails] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (sessionId) {
      fetch(`http://localhost:5000/api/checkout-session/${sessionId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error("Failed to fetch session details");
          }
          return response.json();
        })
        .then(data => setSessionDetails(data))
        .catch(err => setError(err.message));
    }
  }, [sessionId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!sessionDetails) {
    return <div>Loading session details...</div>;
  }

  return (
    <div>
      <h1>Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      <p>
        Payment ID: <strong>{sessionDetails.id}</strong>
      </p>
      <p>
        Amount Paid: <strong>₹{sessionDetails.amount_total / 100}</strong>
      </p>
      <p>
        Payment Status: <strong>{sessionDetails.payment_status}</strong>
      </p>
    </div>
  );
};

export default SuccessPage;
