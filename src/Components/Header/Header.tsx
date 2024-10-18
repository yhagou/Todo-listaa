import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import style from "./styles.module.scss";
import { TasksContext } from "../../context/TaskContext";
export const Header: React.FC = () => {
  const contexto = useContext(TasksContext);
  console.log("Header: ", contexto);
  //oi
  return (
    <header className={style.header}>
      <div className={style.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Yhago Luis</span>
        </div>
        <div>
          <StatsCard title="Total de Tarefas" value={5} />
          <StatsCard title="Tarefas Pendentes" value={4} />
          <StatsCard title="Tarefas Concluidas" value={1} />
        </div>
      </div>
    </header>
  );
};
