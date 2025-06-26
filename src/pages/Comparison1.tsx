import React from "react";
import { FaCheck, FaTimes, FaCrown, FaBolt, FaStar } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const plans = [
  {
    name: "Starter",
    price: "$9/mo",
    icon: <FaBolt className="text-warning me-2" />,
    features: {
      Speed: true,
      "AI Tools": false,
      "Custom Branding": false,
      Support: false,
    },
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29/mo",
    icon: <FaStar className="text-primary me-2" />,
    features: {
      Speed: true,
      "AI Tools": true,
      "Custom Branding": true,
      Support: false,
    },
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    icon: <FaCrown className="text-danger me-2" />,
    features: {
      Speed: true,
      "AI Tools": true,
      "Custom Branding": true,
      Support: true,
    },
    highlight: false,
  },
];

const Comparison1 = () => {
  return (
    <div
      className="container py-5"
      style={{
        background: "linear-gradient(120deg, #1e3c72, #2a5298)",
        minHeight: "100vh",
        color: "white",
      }}
    >
      {/* Header */}
      <div className="text-center mb-5">
        <h1 className="fw-bold">Compare Our Plans</h1>
        <p className="text-light">Choose the plan that fits your business</p>
      </div>

      {/* Comparison Cards */}
      <div className="row g-4">
        {plans.map((plan, index) => (
          <div className="col-md-4" key={index}>
            <div
              className={`card h-100 shadow-lg ${
                plan.highlight ? "border border-warning" : ""
              }`}
              style={{
                borderRadius: "1rem",
                background: "rgba(255,255,255,0.05)",
                backdropFilter: "blur(12px)",
              }}
            >
              <div
                className="card-header text-center text-white fw-bold"
                style={{
                  background: plan.highlight
                    ? "linear-gradient(to right, #ffdd00, #fbb034)"
                    : "#333",
                  borderTopLeftRadius: "1rem",
                  borderTopRightRadius: "1rem",
                }}
              >
                {plan.icon}
                {plan.name}
              </div>
              <div className="card-body text-center">
                <h3 className="text-white">{plan.price}</h3>
                <hr className="bg-light" />
                <ul className="list-unstyled text-start">
                  {Object.entries(plan.features).map(([key, val], i) => (
                    <li className="my-2 d-flex align-items-center" key={i}>
                      {val ? (
                        <FaCheck className="text-success me-2" />
                      ) : (
                        <FaTimes className="text-danger me-2" />
                      )}
                      {key}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="card-footer text-center bg-transparent border-0">
                <button
                  className="btn btn-outline-light"
                  style={{
                    borderRadius: "30px",
                    borderColor: plan.highlight ? "#fbb034" : "#ccc",
                    fontWeight: "bold",
                  }}
                >
                  Select Plan
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer note */}
      <div className="text-center mt-5 text-light">
        <small>🔍 Tip: Hover on plans to explore their benefits visually.</small>
      </div>
    </div>
  );
};

export default Comparison1;
