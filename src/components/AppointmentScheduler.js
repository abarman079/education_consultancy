import React, { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FaGraduationCap, FaCalendarAlt, FaClock } from 'react-icons/fa';

// Draggable appointment item
const AppointmentItem = ({ id, text, icon }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'appointment',
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div 
      ref={drag} 
      className={`appointment-item ${isDragging ? 'dragging' : ''}`}
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      <div className="appointment-icon">{icon}</div>
      <div className="appointment-text">{text}</div>
    </div>
  );
};

// Time slot container
const TimeSlot = ({ time, appointments, onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'appointment',
    drop: (item) => onDrop(item.id, time),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div 
      ref={drop} 
      className={`time-slot ${isOver ? 'highlight' : ''}`}
    >
      <div className="slot-header">
        <FaClock /> {time}
      </div>
      <div className="slot-appointments">
        {appointments.map((app, idx) => (
          <AppointmentItem 
            key={idx} 
            id={app.id} 
            text={app.text} 
            icon={app.icon}
          />
        ))}
      </div>
    </div>
  );
};

const AppointmentScheduler = () => {
  const [availableAppointments] = useState([
    { 
      id: 1, 
      text: "Admission Consultation", 
      icon: <FaGraduationCap />,
    },
    { 
      id: 2, 
      text: "Visa Assistance", 
      icon: <FaCalendarAlt />,
    },
    { 
      id: 3, 
      text: "Scholarship Guidance", 
      icon: <FaGraduationCap />,
    }
  ]);
  
  const [scheduled, setScheduled] = useState({
    "9:00 AM": [],
    "11:00 AM": [],
    "2:00 PM": [],
    "4:00 PM": []
  });

  const handleDrop = (appointmentId, timeSlot) => {
    const appointment = availableAppointments.find(app => app.id === appointmentId);
    
    // Check if appointment already exists in this slot
    const exists = scheduled[timeSlot].some(app => app.id === appointmentId);
    
    if (!exists) {
      setScheduled(prev => ({
        ...prev,
        [timeSlot]: [...prev[timeSlot], appointment]
      }));
    }
  };

  return (
    <div className="appointment-scheduler">
      <h2>Schedule Your Appointment</h2>
      
      <DndProvider backend={HTML5Backend}>
        <div className="scheduler-container">
          <div className="available-appointments">
            <h3>Available Services:</h3>
            <div className="appointments-list">
              {availableAppointments.map(app => (
                <AppointmentItem 
                  key={app.id} 
                  id={app.id} 
                  text={app.text} 
                  icon={app.icon}
                />
              ))}
            </div>
          </div>
          
          <div className="calendar-section">
            <div className="calendar-header">
              <h3>Select a Time Slot</h3>
              <div className="date-selector">July 25, 2025</div>
            </div>
            
            <div className="time-slots">
              {Object.entries(scheduled).map(([time, apps]) => (
                <TimeSlot 
                  key={time} 
                  time={time} 
                  appointments={apps} 
                  onDrop={handleDrop} 
                />
              ))}
            </div>
          </div>
        </div>
      </DndProvider>
      
      <div className="confirmation-section">
        <button className="confirm-btn">Confirm Appointment</button>
        <p className="note">Drag services to your preferred time slot</p>
      </div>
    </div>
  );
};

export default AppointmentScheduler;