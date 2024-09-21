import { Task } from '@/db/schema';
import Link from 'next/link';

interface TaskListProps {
  tasks: Task[];
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
  return (
    <ul className="space-y-4">
      {tasks.map((task) => (
        <li key={task.id} className="rounded border bg-white p-4">
          <Link href={`/${task.id}`} className="full-w text-xl font-semibold">
            <div>
              <div className="flex flex-row justify-between">
                <p className="text-xl font-semibold">{task.title}</p>
                <p
                  className={`mt-2 text-base ${task.isCompleted ? 'text-green-600' : 'text-red-600'}`}>
                  {task.isCompleted ? 'Completed' : 'Not Completed'}
                </p>
              </div>
              <p className="text-gray-600">Due: {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
