import React from 'react';
import './Services.css';

import service1 from './images/service1.jpg';
import service2 from './images/services2.jpg';
import service3 from './images/service3.jpg';
import service4 from './images/service4.jpg';
import service5 from './images/service5.jpg';
import service6 from './images/service6.jpg';
import service7 from './images/service7.jpg';
import service8 from './images/service8.jpg';

const services = [
  {
    id: 1,
    image: service1,
    title: 'Cardiology Transcription',
    description: 'Accurate cardiology medical transcription by experts.',
    doctor: 'Dr. Ahmed Khan',
    timing: 'Mon-Fri, 9am - 3pm',
  },
  {
    id: 2,
    image: service2,
    title: 'Radiology Reports',
    description: 'Fast and precise transcription for radiology reports.',
    doctor: 'Dr. Sara Malik',
    timing: 'Tue-Sat, 10am - 4pm',
  },
  {
    id: 3,
    image: service3,
    title: 'Neurology Transcription',
    description: 'Specialized transcription for neurology cases.',
    doctor: 'Dr. Imran Ali',
    timing: 'Mon-Fri, 8am - 2pm',
  },
  {
    id: 4,
    image: service4,
    title: 'Orthopedics Transcription',
    description: 'Reliable transcription services for orthopedic reports.',
    doctor: 'Dr. Ayesha Siddiqui',
    timing: 'Mon-Thu, 9am - 5pm',
  },
  {
    id: 5,
    image: service5,
    title: 'Pediatrics Transcription',
    description: 'Detailed pediatric transcription for child healthcare.',
    doctor: 'Dr. Zain Raza',
    timing: 'Tue-Fri, 10am - 3pm',
  },
  {
    id: 6,
    image: service6,
    title: 'Oncology Reports',
    description: 'Confidential and accurate oncology transcription.',
    doctor: 'Dr. Nadia Qureshi',
    timing: 'Mon-Wed, 11am - 4pm',
  },
  {
    id: 7,
    image: service7,
    title: 'Gynecology Transcription',
    description: 'Expert transcription services for gynecology cases.',
    doctor: 'Dr. Farah Khan',
    timing: 'Mon-Fri, 9am - 1pm',
  },
  {
    id: 8,
    image: service8,
    title: 'General Medicine',
    description: 'Transcription for general medical reports and notes.',
    doctor: 'Dr. Bilal Ahmed',
    timing: 'Tue-Sat, 9am - 5pm',
  },
];

const Services = () => {
  return (
    <div className="services-container">
      <h1>Our Medical Transcription Services</h1>
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-box">
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p><strong>Doctor:</strong> {service.doctor}</p>
            <p><strong>Timing:</strong> {service.timing}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
