interface AITool {
  name: string;
  description: string;
  category: string;
  image: string;
  url: string;
}

interface AICardProps {
  tool: AITool;
}

export default function AICard({ tool }: AICardProps) {
  return (
    <div className="ai-card">
      <div className="ai-card-image">
        <img src={tool.image} alt={tool.name} />
      </div>
      <div className="ai-card-content">
        <h3>{tool.name}</h3>
        <p className="category">{tool.category}</p>
        <p className="description">{tool.description}</p>
        <a href={tool.url} className="try-button" target="_blank" rel="noopener noreferrer">
          Try Now
        </a>
      </div>
      <style>{`
        .ai-card {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          border-radius: 16px;
          padding: 20px;
          transition: transform 0.2s;
          border: 1px solid rgba(255, 255, 255, 0.2);
          overflow: hidden;
        }

        .ai-card:hover {
          transform: translateY(-5px);
        }

        .ai-card-image {
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 12px;
          margin-bottom: 15px;
        }

        .ai-card-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .ai-card-content {
          padding: 10px 0;
        }

        .ai-card h3 {
          margin: 0;
          font-size: 1.5rem;
          color: #ffffff;
        }

        .category {
          color: #94a3b8;
          font-size: 0.9rem;
          margin: 5px 0;
        }

        .description {
          color: #e2e8f0;
          margin: 10px 0;
          line-height: 1.5;
        }

        .try-button {
          display: inline-block;
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          color: white;
          padding: 8px 20px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 500;
          margin-top: 10px;
          transition: opacity 0.2s;
        }

        .try-button:hover {
          opacity: 0.9;
        }

        @media (max-width: 768px) {
          .ai-card {
            padding: 15px;
          }

          .ai-card-image {
            height: 150px;
          }

          .ai-card h3 {
            font-size: 1.2rem;
          }
        }
      `}</style>
    </div>
  );
}