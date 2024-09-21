import { Task } from '@/db/schema';

interface TaskDetailProps {
  task: Task;
}

const TaskDetail: React.FC<TaskDetailProps> = ({ task }) => {
  return (
    <div className="rounded border bg-white p-4">
      <div className="flex flex-row justify-between">
        <h2 className="text-2xl font-bold">{task.title}</h2>
        <p className={`mt-2 text-base ${task.isCompleted ? 'text-green-600' : 'text-red-600'}`}>
          {task.isCompleted ? 'Completed' : 'Not Completed'}
        </p>
      </div>
      <p className="mt-2">{task.description}</p>
      <p className="mt-2 text-gray-600">Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
    </div>
  );
};

export default TaskDetail;
