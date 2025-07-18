import React, { useState } from "react";
import universities from "../data/universities";

const UniversityFinder = () => {
  const [filters, setFilters] = useState({
    gpa: 3.0,
    country: "",
    program: "",
    budget: 50000,
  });

  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = universities.filter(
      (uni) =>
        uni.minGPA <= filters.gpa &&
        (filters.country === "" || uni.country === filters.country) &&
        (filters.program === "" || uni.programs.includes(filters.program)) &&
        uni.avgTuition <= filters.budget
    );
    setResults(filtered);
  };

  return (
    <div className="university-finder">
      <h2>Find Your Perfect University</h2>

      <div className="filters">
        <div className="filter-group">
          <label>
            Your GPA: <span className="value">{filters.gpa.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="2.0"
            max="4.0"
            step="0.1"
            value={filters.gpa}
            onChange={(e) =>
              setFilters({ ...filters, gpa: parseFloat(e.target.value) })
            }
          />
        </div>

        <div className="filter-group">
          <label>Country:</label>
          <select
            value={filters.country}
            onChange={(e) =>
              setFilters({ ...filters, country: e.target.value })
            }
          >
            <option value="">Any Country</option>
            <option value="USA">United States</option>
            <option value="UK">United Kingdom</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
          </select>
        </div>

        <div className="filter-group">
          <label>Program:</label>
          <select
            value={filters.program}
            onChange={(e) =>
              setFilters({ ...filters, program: e.target.value })
            }
          >
            <option value="">Any Program</option>
            <option value="Engineering">Engineering</option>
            <option value="Business">Business</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Medicine">Medicine</option>
            <option value="Arts">Arts & Humanities</option>
          </select>
        </div>

        <div className="filter-group">
          <label>
            Your GPA: <span className="value">{filters.gpa.toFixed(1)}</span>
          </label>
          <input
            type="range"
            min="2.0"
            max="4.0"
            step="0.1"
            value={filters.gpa}
            onChange={(e) =>
              setFilters({ ...filters, gpa: parseFloat(e.target.value) })
            }
          />
        </div>

        <button className="search-btn" onClick={handleSearch}>
          Find Universities
        </button>
      </div>

      <div className="results">
        {results.length === 0 ? (
          <div className="no-results">
            <p>
              No universities match your criteria. Try adjusting your filters.
            </p>
          </div>
        ) : (
          results.map((uni, index) => (
            <div key={index} className="university-card">
              <div className="uni-header">
                <h3>{uni.name}</h3>
                <span className="country">{uni.country}</span>
              </div>
              <div className="uni-details">
                <p>
                  <strong>Min GPA:</strong> {uni.minGPA}
                </p>
                <p>
                  <strong>Programs:</strong> {uni.programs.join(", ")}
                </p>
                <p>
                  <strong>Avg. Tuition:</strong> $
                  {uni.avgTuition.toLocaleString()}/year
                </p>
                <p>
                  <strong>Acceptance Rate:</strong> {uni.acceptanceRate}%
                </p>
              </div>
              <button className="info-btn">More Information</button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UniversityFinder;
