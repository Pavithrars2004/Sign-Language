import React from "react";
import "./Home.css";

function Home() {
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
          <button>View</button>
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
    </div>
  );
}

export default Home;
