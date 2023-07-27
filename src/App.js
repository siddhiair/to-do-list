import './App.css';
import Task from './components/task/Task';
import { useState,useEffect } from 'react';

const InputField = ({val,handleChange}) => {
  return(
    <input type="text" className="form-control" id="task-input" value={val} onChange={handleChange} placeholder='Add new task' />
  );
}

function App() {
  const [inputVal, setInputVal] = useState("");
	const inputChange = (e) => {
		setInputVal(e.target.value)
	}

  //check and get existing to do task data from localstorage
  let todo_data = null;
  if(localStorage.getItem("todo_data") !== null){
    todo_data = JSON.parse(localStorage.getItem("todo_data"));
  }
  const [tasks, setTasks] = useState(todo_data ? todo_data : []);

  useEffect(() => {
    localStorage.setItem('todo_data', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    setInputVal("");
    setTasks([
      ...tasks,
      {id:"task"+tasks.length,title:inputVal,status:"pending"}
    ]);
  }

  const deleteTask = (i) => {
    //current contains latest state array
    setTasks((current) =>
      current.filter(el => el.id !== i)
    );
  }
  const taskDone = (i) => {
    setTasks((current) => {
      return current.map(obj => {
        if (obj.id === i) {
          // Create a new object with the updated status
          return { ...obj, status: "done" };
        }
        return obj; //return unchanged objects
      });
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1 className='bold text-primary'>A React JS To-Do-List App</h1>
      </header>

      <div className='wrapper'>
        <div className="form-wrap">
          <form className="w-full" onSubmit={(e)=>addTask(e)}>
            <div className="flex">
              <div className="form-group grow">
                <InputField handleChange={(e)=>inputChange(e)} val={inputVal} />
              </div>
              <button className="btn-submit shrink-0" type="submit">Add Task</button>
            </div>
          </form>
        </div>
      </div>

      {tasks.length>0 &&
        <div className='tasks-wrapper'>
          <h3 className='medium tasks-header'>Task list:</h3>
          <div className='tasks-body'>
          {
            tasks.map((el)=>{
              return(
                <Task key={el.id} data={el} handleDelete={(id)=>deleteTask(id)} handleDone={(id)=>taskDone(id)} /> 
              )
            })
          }
          </div>
        </div>
      }
      {tasks.length===0 &&
        <div className='text-center no-task-msg'>No task added</div>
      }
    </div>
  );
}

export default App;
