import React from "react";
import styles from'./index.module.scss';
import { useToDoStore } from "../../data/stores/useTodoStore";
import { InputPlus } from "../components/IputPlus";
import { InputTask } from "../components/InputTask";


export const App: React.FC = () => {
  const [
        tasks,
        createTask,
        updateTask,
        removeTask
  ] = useToDoStore(state => [
        state.tasks,
        state.createTask,
        state.updateTask,
        state.removeTask,
  ]);
  
  return (
    <article className={styles.article}>
      <h1 className={styles.articleTitle}>To Do App</h1>
      <section className={styles.articleSection}>
          <InputPlus 
              onAdd={(title) => {
                if(title) {
                  createTask(title)
                }
              }}
          />
      </section>
      <section className={styles.articleSection}>
            {
              !tasks.length && (
                  <p className={styles.articleText}>There is no one task</p>
              )
            }
            {tasks.map((task) => (
              <InputTask 
              key={task.id}
              id={task.id}
              title={task.title}
              onDone={removeTask}
              onEdited={updateTask}
              onRemove={removeTask}
              />
            ))}
      </section>
    </article>
  );
}
