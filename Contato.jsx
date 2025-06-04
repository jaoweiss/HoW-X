import "./PageStyles.css";

export default function Contato() {
  return (
    <div className="page-container">
      <h1>Fale Conosco</h1>
      <p>
        A Prefeitura está à disposição para esclarecer dúvidas, receber sugestões e ouvir suas demandas.
      </p>
      <p>
        <strong>Endereço:</strong> Praça Central, nº 100, Centro – Cidade Exemplo/BR  
        <br />
        <strong>Telefone:</strong> (11) 1234-5678  
        <br />
        <strong>Email:</strong> atendimento@prefeitura.exemplo.br  
        <br />
        <strong>Horário de Atendimento:</strong> Segunda a Sexta, das 8h às 17h
      </p>
    </div>
  );
}