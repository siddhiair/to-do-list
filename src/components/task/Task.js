import './Task.css';

const Task = ({data,handleDone,handleDelete}) => {
  return(
    <div className={`task-item ${data.status}`}>
			<p className="task-title">{data.title} - {data.status}</p>
			<div className="btn-group flex">
				{data.status!=="done" &&
					<button type="button" className="btn btn-done" onClick={()=>handleDone(data.id)}>Done</button>
				}
				<button type="button" className="btn btn-delete" onClick={()=>handleDelete(data.id)}>Delete</button>
			</div>
		</div>
  );
}

export default Task;
