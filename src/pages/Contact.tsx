import { useEffect, useState } from "react";

const Contact = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.style.background = darkMode
      ? "linear-gradient(135deg, #1e1e2f, #2c2c54)"
      : "linear-gradient(135deg, #e3f2fd, #fce4ec)";
    document.body.style.color = darkMode ? "#f1f1f1" : "#333";
    document.body.style.transition = "background 0.5s ease, color 0.5s ease";
    document.body.style.fontFamily = "'Poppins', sans-serif";
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      padding: "rem",
    },
    toggleButton: {
      position: "absolute",
      top: "3rem",
      right: "15rem",
      padding: "0.6rem 1rem",
      border: "none",
      borderRadius: "8px",
      cursor: "pointer",
      background: "rgba(255,255,255,0.2)",
      backdropFilter: "blur(10px)",
      boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
      fontWeight: "600",
    },
    formContainer: {
      background: "rgba(255, 255, 255, 0.1)",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
      backdropFilter: "blur(12px)",
      maxWidth: "500px",
      width: "100%",
      textAlign: "center",
    },
    input: {
      width: "100%",
      padding: "1rem",
      marginBottom: "1rem",
      border: "none",
      borderRadius: "0.75rem",
      fontSize: "1rem",
    },
    button: {
      padding: "0.8rem 2rem",
      fontSize: "1rem",
      backgroundColor: "#6200ea",
      color: "white",
      border: "none",
      borderRadius: "1rem",
      cursor: "pointer",
      transition: "background 0.3s ease",
    },
  };

  return (
    <div style={styles.page}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <button onClick={() => setDarkMode(!darkMode)} style={styles.toggleButton}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>

      <div style={styles.formContainer}>
        <h1>Contact Us</h1>
        <form>
          <input type="text" placeholder="Your Name" style={styles.input} required />
          <input type="email" placeholder="Email Address" style={styles.input} required />
          <textarea placeholder="Your Message" rows={4} style={styles.input} required></textarea>
          <button type="submit" style={styles.button}>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
