export interface item {
    id: string;
    task: string;
    status: boolean;
    handleOnClick: (id: string) => void;
}

export default function listItem( {task, status, handleOnClick, id}: item) {
  return (
    <div className="bg-white rounded-sm shadow-md/30 flex min-h-12.5 p-5 w-80 gap-5">
      <button 
        onClick={() => handleOnClick(id)}
        type="button" 
        className={`${status ? 'bg-yellow-200' : 'bg-white'} cursor-pointer inset-shadow-md/30 border border-gray-300 min-w-5 max-w-5 min-h-5 max-h-5 rounded-3xl`}>
        </button>
      <p className={`${status ? 'line-through' : ''}`}>{task}</p>
    </div>
  );
}
