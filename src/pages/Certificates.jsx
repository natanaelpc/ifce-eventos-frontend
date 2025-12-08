import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Certificates.css";
import "./CertificateView.css";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Opening, Round Table, Hackathon and Talk",
      event:
        "Opening, Round Table, Hackathon and Talk (Brisanet, Paguru, SEBRAE, Unileão, HackInCariri)",
      available: true,
    },
    {
      id: 2,
      title: "Beyond Code: How Experience Defines a Product's Success",
      event: "Beyond Code: How Experience Defines a Product's Success",
      available: true,
    },
    {
      id: 3,
      title: "Remote IT Market: What This Universe Expects from You",
      event:
        "Remote IT Market: What This Universe Expects from You. Lessons and Learnings",
      available: true,
    },
  ];

  return (
    <div className="cert-page-container">
      <div className="cert-card">
        <img
          src="/img/cert-illustration.png"
          alt="Illustration"
          className="cert-illustration"
        />

        <h2>Hello, Natanael. Here are your certificates.</h2>
        <p className="cert-subtitle">SEINFO 2025 - IFCE Campus Crato</p>

        <div className="cert-list">
          {certificates.map((item) => (
            <div key={item.id} className="cert-item">
              <div className="cert-left">
                <p className="cert-item-title">Activity Certificate</p>
                <p className="cert-item-event">{item.event}</p>

                {item.available ? (
                  <span className="cert-available-tag">Available for download</span>
                ) : (
                  <span className="cert-unavailable-tag">Not available yet</span>
                )}
              </div>

              <Link to={`/certificate/${item.id}`} className="cert-download-btn">
                <FaCloudDownloadAlt size={22} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
