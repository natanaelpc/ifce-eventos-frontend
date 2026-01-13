import React from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Certificates.css";

// ✅ Correção do caminho (dentro de src/)
import CertificateIllustration from "../assets/illustrations/certificate-art.svg";

// ✅ Hook do seu contexto
import { useUser } from "../context/UserContext";

const Certificates = () => {
  const { user } = useUser();

  // ✅ Nome do usuário logado, ou fallback
  const userName = user?.name?.trim() ? user.name : "Usuário";

  const certificates = [
    {
      id: 1,
      event:
        "Abertura, Mesa Redonda, Hackathon e Palestra (Brisanet, Paguru, SEBRAE, Unileão, HackInCariri)",
      available: true,
    },
    {
      id: 2,
      event: "Além do Código: Como a Experiência Define o Sucesso de um Produto",
      available: true,
    },
    {
      id: 3,
      event:
        "Mercado de TI Remoto: O Que Este Universo Espera de Você. Lições e Aprendizados.",
      available: true,
    },
  ];

  return (
    <div className="cert-page-container">
      <div className="cert-card">
        <img
          src={CertificateIllustration}
          alt="Certificates Illustration"
          className="cert-illustration"
        />

        <h2>Olá, {userName}. Aqui estão seus certificados.</h2>
        <p className="cert-subtitle">SEINFO 2025 - IFCE Campus Crato</p>

        <div className="cert-list">
          {certificates.map((item) => (
            <div key={item.id} className="cert-item">
              <div className="cert-left">
                <p className="cert-item-title">Certificado de Atividade</p>
                <p className="cert-item-event">{item.event}</p>

                {item.available ? (
                  <span className="cert-available-tag">
                    Disponível para download
                  </span>
                ) : (
                  <span className="cert-unavailable-tag">Ainda não disponível</span>
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
