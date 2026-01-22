import React from "react";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import "./CertificateView.css";

import { useUser } from "../context/UserContext";

const CertificateView = () => {
  const { id } = useParams();
  const { user } = useUser();

  const userName = user?.name?.trim() ? user.name : "Usuário";

  return (
    <div className="cert-view-container">
      <div className="cert-view-header">
        <FaCheckCircle size={30} color="#4CAF50" />
        <h1>Certificado gerado com sucesso</h1>
        <p className="cert-time">Visualizado em 04/12/2025 às 08:49:12</p>

        <div className="cert-view-buttons">
          <button className="btn-print">🖨 Imprimir</button>
          <button className="btn-pdf">📄 Baixar PDF</button>
        </div>
      </div>

      <div className="cert-preview-box">
        <h2>Certificado #{id}</h2>
        <p>Este certificado confirma sua participação na atividade selecionada.</p>

        <div className="cert-paper">
          <h1>Certificado</h1>
          <p>
            Concedido a <strong>{userName}</strong>
          </p>
          <p>Por sua participação e contribuição no evento SEINFO 2025</p>

          <span className="cert-signature">
            _______________________
            <br />
            Coordenação SEINFO
          </span>
        </div>
      </div>
    </div>
  );
};

export default CertificateView;
