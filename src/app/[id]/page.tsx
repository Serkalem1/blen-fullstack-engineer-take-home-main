import { db } from '@/db';
import { tasks } from '@/db/schema';
import { eq } from 'drizzle-orm';
import CompleteTaskButton from './components/CompleteTaskButton';
import DeleteTaskButton from './components/DeleteTaskButton';
import EditTaskButton from './components/EditTaskButton';
import TaskDetail from './components/TaskDetail';

interface TaskDetailPageProps {
  params: { id: string };
}

const TaskDetailPage = async ({ params }: TaskDetailPageProps) => {
  const taskId = parseInt(params.id, 10);
  const task = db.select().from(tasks).where(eq(tasks.id, taskId)).get();

  console.log(task);

  if (!task) {
    return <div className="container mx-auto p-4">Task not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <TaskDetail task={task} />
      <div className="flex flex-row items-center justify-between">
        <div className="mt-4 space-x-2">
          <DeleteTaskButton taskId={task.id} />
          <EditTaskButton taskId={task.id} />
        </div>
        <div>
          <CompleteTaskButton taskId={task.id} isCompleted={task.isCompleted} />
        </div>
      </div>
    </div>
  );
};

export default TaskDetailPage;
