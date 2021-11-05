import React, { useEffect, useState } from 'react';
import Task from '../components/task';

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
          {tasks.map(({ tarefa, status, _id }) => (<Task
            tarefa={ tarefa }
            status={ status }
            key={ _id }
          />))}
        </ul>
      )}
    </div>
  );
}

export default Home;
