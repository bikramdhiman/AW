import React from "react";
import "./Faq.css"; // Create this CSS file for custom styling
import tangerineImg from "./tangerine.jpg"; // Use any local image or online image link

function Faq() {
  const faqData = [
    {
      question: "How is Tangerine healthy?",
      answer:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
      fruitName: "Tangerine",
      image: tangerineImg,
    },
    // Duplicate data for demonstration
    {
      question: "How is Tangerine healthy?",
      answer:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
      fruitName: "Tangerine",
      image: tangerineImg,
    },
    {
      question: "How is Tangerine healthy?",
      answer:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
      fruitName: "Tangerine",
      image: tangerineImg,
    },
    {
      question: "How is Tangerine healthy?",
      answer:
        "Tangerine are a great health booster due to their high vitamin C content, which supports the immune system and skin health.",
      fruitName: "Tangerine",
      image: tangerineImg,
    },
  ];

  return (
    <div className="faq-container">
      <h2>FAQ Section</h2>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-card">
          <div className="faq-image">
            <img src={faq.image} alt={faq.fruitName} />
          </div>
          <div className="faq-content">
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
            <p className="fruit-name">{faq.fruitName}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Faq;
