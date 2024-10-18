// import { Refs } from "./Components/Concepts/Refs";
// import { Memorization } from "./Components/Concepts/Memorization";
import { Header } from "./Components/Header/Header";
import { Task } from "./Components/Task/Task";
import { TasksProvider } from "./context/TaskContext";

import "./styles/global.css";
function App() {
  return (
    <TasksProvider>
      <Header />;
      <Task />
      {/* <Refs /> */}
      {/* <Memorization
        financeData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }}
      /> */}
    </TasksProvider>
  );
}

export default App;
