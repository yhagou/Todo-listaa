import { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { TasksContext } from "../../context/TaskContext";

interface Task {
  title: string;
  done: boolean;
  id: number;
}

export const Task: React.FC = () => {
  const [taskTitle, setTaskTitle] = useState("");
  const [task, setTask] = useState([] as Task[]);

  const variavel = useContext(TasksContext);
  console.log("Task: ", variavel);

  //função disparada ao colocar uma nova tarefa:
  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (taskTitle.length < 3) {
      alert("Não é possivel adiciona tarefa com menos de 3 caracteres");
      return;
    }
    const newTask = [
      ...task, //pega todas as tarefas que ja existiam e coloca nesse novo valor do estado de tarefas
      { id: new Date().getTime(), title: taskTitle, done: false },
    ];
    setTask(newTask);
    localStorage.setItem("task", JSON.stringify(newTask));

    setTaskTitle("");
  }
  useEffect(() => {
    const taskOnLocalStorage = localStorage.getItem("task");
    if (taskOnLocalStorage) {
      setTask(JSON.parse(taskOnLocalStorage));
    }
  }, []);

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="task-title">Adicionar Tarefa</label>
          <input
            type="text"
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            id="task-title"
            placeholder="Digite sua tarefa..."
          />
        </div>

        <button type="submit">Adicionar</button>
      </form>
      <ul>
        {task.map((task) => {
          return (
            <li key={task.id}>
              <input type="checkbox" id={`task-${task.id}`} />
              <label htmlFor={`task-${task.id}`}>{task.title}</label>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
