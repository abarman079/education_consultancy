import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const Dashboard = () => {
  const [stats, setStats] = useState({
    appointments: 0,
    responseTime: '0 days',
    successRate: 0
  });
  
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setStats({
        appointments: 24,
        responseTime: '2.1 days',
        successRate: 78
      });
      
      // Initialize chart after component mounts
      if (chartRef.current) {
        // Destroy previous chart instance if exists
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        
        const ctx = chartRef.current.getContext('2d');
        chartInstance.current = new Chart(ctx, {
          type: 'bar',
          data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
            datasets: [{
              label: 'Consultations',
              data: [12, 19, 15, 22, 18, 24],
              backgroundColor: 'rgba(54, 162, 235, 0.5)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }]
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: 'Monthly Consultations',
              }
            }
          }
        });
      }
    }, 1000);
    
    return () => {
      clearTimeout(timer);
      // Clean up chart instance on unmount
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="dashboard">
      <h2>Performance Dashboard</h2>
      <div className="stats-container">
        <div className="stat-card">
          <div className="stat-value">{stats.appointments}</div>
          <div className="stat-label">Booked Appointments</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.responseTime}</div>
          <div className="stat-label">Avg. Response Time</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">{stats.successRate}%</div>
          <div className="stat-label">Success Rate</div>
        </div>
      </div>
      
      <div className="chart-container" style={{ height: '400px' }}>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default Dashboard;