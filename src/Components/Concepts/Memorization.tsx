import { useMemo, useState } from "react";

interface MemorizationProps {
  financeData: {
    incomes: number[];
    outcomes: number[];
  };
}

export const Memorization: React.FC<MemorizationProps> = ({ financeData }) => {
  const [showValue, setShowValue] = useState(true);
  const totalIncomes = useMemo(() => {
    financeData.incomes.reduce((total, income) => {
      console.log("Receitas...");
      return (total += income);
    }, 0);
  }, [financeData.incomes]);
  const totalOutcomes = useMemo(() => {
    financeData.outcomes.reduce((total, outcome) => {
      console.log("Despesas...");
      return (total += outcome);
    }, 0);
  }, [financeData.outcomes]);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Memorization</h1>

      <h2>{`O valor da Receita é: R$${
        showValue ? totalIncomes : " XXXXX"
      }`}</h2>
      <h2>{`O valor da Despesa é: R$${
        showValue ? totalOutcomes : " XXXXX"
      }`}</h2>
      <br />
      <br />
      <button
        onClick={() => {
          setShowValue(!showValue);
        }}
      >
        {showValue ? "Ocultar Valores" : "Mostrar Valores"}
      </button>
    </div>
  );
};
