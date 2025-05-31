export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1>AI Directory</h1>
          <p className="subtitle">Discover the Best AI Tools</p>
        </div>
        <nav className="nav-links">
          <a href="#" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#submit" className="nav-link highlight">Submit Tool</a>
        </nav>
      </div>

      <style>{`
        .header {
          padding: 20px;
          background: rgba(0, 0, 0, 0.2);
          backdrop-filter: blur(10px);
          position: sticky;
          top: 0;
          z-index: 100;
        }

        .header-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo h1 {
          margin: 0;
          font-size: 1.8rem;
          background: linear-gradient(135deg, #60a5fa, #3b82f6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: bold;
        }

        .subtitle {
          margin: 5px 0 0;
          font-size: 0.9rem;
          color: #94a3b8;
        }

        .nav-links {
          display: flex;
          gap: 20px;
          align-items: center;
        }

        .nav-link {
          color: #e2e8f0;
          text-decoration: none;
          padding: 8px 12px;
          border-radius: 6px;
          transition: all 0.2s;
        }

        .nav-link:hover {
          background: rgba(255, 255, 255, 0.1);
        }

        .nav-link.highlight {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
        }

        .nav-link.highlight:hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .header-content {
            flex-direction: column;
            text-align: center;
            gap: 15px;
          }

          .nav-links {
            gap: 10px;
          }

          .nav-link {
            padding: 6px 10px;
            font-size: 0.9rem;
          }

          .logo h1 {
            font-size: 1.5rem;
          }

          .subtitle {
            font-size: 0.8rem;
          }
        }
      `}</style>
    </header>
  );
}