import React, { useEffect, useState } from 'react';

function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch('http://localhost:5000/tasks')
      .then((response) => response.json())
      .then((arrayTasks) => {
        setIsLoading(false);
        setTasks(arrayTasks);
      });
  }, []);

  return (
    <div>
      <h3>Tarefas</h3>
      {isLoading ? (<p>Carregando...</p>) : (
        <ul>
          {tasks.map((task, index) => (
            <li key={ index }>{`${task.tarefa} Status: ${task.status}`}</li>))}
        </ul>
      )}
    </div>
  );
}

export default Home;
