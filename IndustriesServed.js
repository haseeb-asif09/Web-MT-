import React from "react";
import './IndustriesServed.css';
import { Hospital, Stethoscope, Microscope, FlaskConical, User, Heart, ShieldCheck, BriefcaseMedical } from "lucide-react";
import imagesss from "./images/drcss.jpg";

const industries = [
  {
    name: "Hospitals",
    icon: <Hospital className="industry-icon" color="#2563eb" />,
    description: "Comprehensive transcription support for multi-specialty hospitals, improving accuracy and workflow.",
  },
  {
    name: "Clinics",
    icon: <Stethoscope className="industry-icon" color="#16a34a" />,
    description: "Reliable documentation services tailored for single or multi-physician clinic practices.",
  },
  {
    name: "Independent Physicians",
    icon: <User className="industry-icon" color="#7e22ce" />,
    description: "Affordable and accurate reports for individual healthcare providers and consultants.",
  },
  {
    name: "Diagnostic Centers",
    icon: <Microscope className="industry-icon" color="#dc2626" />,
    description: "Detailed transcription of diagnostic reports, radiology, and imaging services.",
  },
  {
    name: "Labs",
    icon: <FlaskConical className="industry-icon" color="#eab308" />,
    description: "Fast and secure transcription for lab results, pathology, and test documentation.",
  },
  {
    name: "Cardiology Units",
    icon: <Heart className="industry-icon" color="#ef4444" />,
    description: "Specialized transcription services for cardiology departments with focus on precision and speed.",
  },
  {
    name: "Insurance Providers",
    icon: <ShieldCheck className="industry-icon" color="#10b981" />,
    description: "Secure and compliant documentation support for medical insurance claims and audits.",
  },
  {
    name: "Medical Equipment Suppliers",
    icon: <BriefcaseMedical className="industry-icon" color="#6366f1" />,
    description: "Accurate technical and medical report transcriptions to support equipment validation and usage.",
  },
];

export default function IndustriesServed() {
  return (
    <div
      className="industries-container"
      style={{
        backgroundImage: `url(${imagesss})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        padding: "60px 20px",
        color: "white",
        minHeight: "100vh",
      }}
    >
      <div className="overlay"></div>
      <h2 className="industries-title">Industries We Serve</h2>
      <div className="industries-grid">
        {industries.map((industry, index) => (
          <div key={index} className="industry-card">
            {industry.icon}
            <h3 className="industry-title">{industry.name}</h3>
            <p className="industry-description">{industry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
