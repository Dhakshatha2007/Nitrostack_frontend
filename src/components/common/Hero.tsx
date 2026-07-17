function Hero() {
  return (
    <section
      style={{
        textAlign: "center",
        padding: "100px 20px",
        background: "#F8FAFC",
      }}
    >
      <h1
        style={{
          fontSize: "56px",
          color: "#2563EB",
          marginBottom: "20px",
        }}
      >
        EduAccess AI
      </h1>

      <h2>One Lesson. Accessible to Every Learner.</h2>

      <p
        style={{
          marginTop: "20px",
          fontSize: "20px",
          color: "#555",
        }}
      >
        AI-powered platform that automatically transforms educational
        content into accessible learning experiences for visually and
        hearing impaired students.
      </p>

      <div
        style={{
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <button>Get Started</button>

        <button>Learn More</button>
      </div>
    </section>
  );
}

export default Hero;