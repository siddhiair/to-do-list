import './Task.css';

const Task = ({data,handleDone,handleDelete}) => {
  return(
    <div className={`task-item ${data.status} flex items-center justify-between`}>
			<p className="task-title">{data.title}</p>
			<div className="btn-group flex">
				{data.status!=="done" &&
					<button type="button" className="btn btn-done" onClick={()=>handleDone(data.id)}>
						<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M19.716 4.386a1 1 0 0 1 1.572 1.236L10.665 19.136a1.5 1.5 0 0 1-2.324.042l-5.104-6.032a1 1 0 1 1 1.526-1.292l4.708 5.564L19.716 4.386z" fill="#fff"/>
						</svg>
						 <span>Done</span>
					</button>
				}
				<button type="button" className="btn btn-delete" onClick={()=>handleDelete(data.id)}>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M19.207 6.207a1 1 0 0 0-1.414-1.414L12 10.586 6.207 4.793a1 1 0 0 0-1.414 1.414L10.586 12l-5.793 5.793a1 1 0 1 0 1.414 1.414L12 13.414l5.793 5.793a1 1 0 0 0 1.414-1.414L13.414 12l5.793-5.793z" fill="#fff"/>
					</svg> 
					<span>Delete</span>
				</button>
			</div>
		</div>
  );
}

export default Task;
