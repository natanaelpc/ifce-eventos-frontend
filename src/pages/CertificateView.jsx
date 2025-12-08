import React from "react";
import { CheckCircle, Printer, FileText } from "react-feather";

export default function CertificateDetails() {
  return (
    <div className="max-w-4xl mx-auto py-10">
      <div className="text-center mb-8">
        <CheckCircle className="text-green-500 mx-auto" size={50} />
        <h1 className="text-3xl font-semibold mt-4">Certificado emitido com sucesso</h1>
        <p className="text-sm text-gray-500 mt-1">
          Certificado visualizado em 04/12/2025 às 08:49:12
        </p>

        <div className="flex justify-center gap-4 mt-5">
          <button className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2">
            <Printer size={18} /> Imprimir
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded flex items-center gap-2">
            <FileText size={18} /> PDF
          </button>
        </div>
      </div>

      <div className="border rounded-lg p-6 shadow">
        <img
          src="/assets/certificado-modelo.png"
          alt="Certificado"
          className="w-full rounded"
        />
      </div>
    </div>
  );
}
