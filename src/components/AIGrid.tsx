import { useState } from 'react';
import AICard from './AICard';

interface AITool {
  name: string;
  description: string;
  category: string;
  image: string;
  url: string;
}

interface AIGridProps {
  tools: AITool[];
}

export default function AIGrid({ tools }: AIGridProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(tools.map(tool => tool.category))];

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || tool.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="ai-grid-container">
      <div className="search-filter-section">
        <input
          type="text"
          placeholder="Search AI tools..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={`category-button ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="ai-grid">
        {filteredTools.map((tool, index) => (
          <AICard key={index} tool={tool} />
        ))}
      </div>

      <style>{`
        .ai-grid-container {
          padding: 20px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .search-filter-section {
          margin-bottom: 30px;
        }

        .search-input {
          width: 100%;
          padding: 12px 20px;
          font-size: 1rem;
          border: none;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          margin-bottom: 20px;
        }

        .search-input::placeholder {
          color: #94a3b8;
        }

        .category-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 20px;
        }

        .category-button {
          padding: 8px 16px;
          border: none;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.1);
          color: white;
          cursor: pointer;
          transition: all 0.2s;
        }

        .category-button.active {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
        }

        .category-button:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .category-button.active:hover {
          background: linear-gradient(135deg, #3b82f6, #2563eb);
          opacity: 0.9;
        }

        .ai-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 30px;
        }

        @media (max-width: 768px) {
          .ai-grid-container {
            padding: 15px;
          }

          .ai-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .category-filters {
            gap: 8px;
          }

          .category-button {
            padding: 6px 12px;
            font-size: 0.9rem;
          }
        }
      `}</style>
    </div>
  );
}