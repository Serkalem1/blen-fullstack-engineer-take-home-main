import { db } from '@/db';
import { tasks } from '@/db/schema';
import { eq } from 'drizzle-orm';
import EditTaskForm from './components/EditTaskForm';

interface EditTaskPageProps {
  params: { id: string };
}

const EditTaskPage = async ({ params }: EditTaskPageProps) => {
  const taskId = parseInt(params.id, 10);
  const task = await db.select().from(tasks).where(eq(tasks.id, taskId)).get();

  if (!task) {
    return <div className="container mx-auto p-4">Task not found.</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Edit Task</h1>
      <EditTaskForm task={task} />
    </div>
  );
};

export default EditTaskPage;
