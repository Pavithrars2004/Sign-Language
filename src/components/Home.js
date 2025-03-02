import React, { useState } from "react";
import "./Home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [quote, setQuote] = useState("");

  const quotes = [
    "Sign language is the noblest gift God has given to deaf people.",
    "Learning sign language bridges gaps between worlds.",
    "Sign language is not just a language; it's an expression of love.",
    "Every sign tells a story, every gesture builds a connection.",
    "Inclusivity starts with communication. Learn, sign, connect!"
  ];

  const openModal = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    setShowModal(true);
  };

  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Breaking Barriers with Sign Language</h1>
          <p>Learn, communicate, and make a difference in the Deaf community.</p>
          <button className="cta-button">Get Started</button>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="cards-section">
        <div className="card">
          <h2>📖 Dictionary</h2>
          <p>Find and learn signs easily with our interactive sign language dictionary.</p>
          <button>Explore</button>
        </div>

        <div className="card">
          <h2>🔤 Sign of the Day</h2>
          <p>Learn a new sign every day to enhance your skills.</p>
          <button onClick={openModal}>View</button>
        </div>

        <div className="card">
          <h2>🎮 Learning Games</h2>
          <p>Interactive games to help you master sign language in a fun way.</p>
          <button>Play Now</button>
        </div>
      </section>

      {/* Information Section */}
      <section className="info-section">
        <h2>Why Learn Sign Language? 🧏‍♂️</h2>
        <p>Sign language is more than just gestures—it’s a bridge to inclusivity and communication. Whether you are learning for personal growth, career opportunities, or to connect with the Deaf community, it’s an essential skill that benefits everyone.</p>
      </section>

      {/* Learning Benefits */}
      <section className="benefits-section">
        <h2>Benefits of Learning Sign Language</h2>
        <div className="benefits-container">
          <div className="benefit-item">📢 Improves Communication</div>
          <div className="benefit-item">🤝 Builds Stronger Connections</div>
          <div className="benefit-item">🎓 Enhances Cognitive Skills</div>
          <div className="benefit-item">💼 Career Growth & Opportunities</div>
        </div>
      </section>

      {/* Modal Component */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal">
            <h2>🔤 Sign of the Day</h2>
            <p>{quote}</p>
            <button className="close-button" onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
