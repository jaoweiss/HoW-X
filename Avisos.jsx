import { useState } from "react";
import "./PageStyles.css";

export default function Avisos() {
  const [busca, setBusca] = useState("");
  const avisos = [
    { id: 1, data: "03/06/2025", texto: "Interdição temporária da Rua Central para obras de recapeamento. Previsão de conclusão: 07/06." },
    { id: 2, data: "01/06/2025", texto: "Vacinação contra a gripe será realizada no posto de saúde central das 8h às 17h, de segunda a sexta." },
    { id: 3, data: "28/05/2025", texto: "Processo seletivo para estagiários está com inscrições abertas. Confira o edital no site da prefeitura." },
  ];

  const avisosFiltrados = avisos.filter((aviso) =>
    aviso.texto.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <div className="page-container">
      <h1>Avisos Oficiais</h1>

      <input
        type="text"
        placeholder="Pesquisar aviso..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          maxWidth: "400px",
          marginBottom: "20px",
          border: "1px solid #ccc",
          borderRadius: "4px",
        }}
      />

      {avisosFiltrados.length > 0 ? (
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          {avisosFiltrados.map((aviso) => (
            <li
              key={aviso.id}
              style={{
                backgroundColor: "#f4f6f8",
                padding: "12px",
                marginBottom: "10px",
                borderRadius: "6px",
                boxShadow: "0 1px 3px rgb(0 0 0 / 0.1)",
              }}
            >
              <strong style={{ color: "#34495e" }}>{aviso.data}:</strong> {aviso.texto}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum aviso encontrado.</p>
      )}
    </div>
  );
}