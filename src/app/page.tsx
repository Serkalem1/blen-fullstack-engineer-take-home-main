import { tasks } from '@/db/schema';
import { db } from '../db/client';
import AddTaskButton from './components/AddTaskButton';
import TaskList from './components/TaskList';

const HomePage = async () => {
  const taskData = await db.select().from(tasks).orderBy(tasks.id);

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-row items-center justify-between">
        <h1 className="mb-4 text-2xl font-bold">Task List</h1>
        <AddTaskButton />
      </div>
      <TaskList tasks={taskData} />
    </div>
  );
};

export default HomePage;
