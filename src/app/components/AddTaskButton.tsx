'use client';

import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const AddTaskButton: React.FC = () => {
  const router = useRouter();

  const handleAddTask = () => {
    router.push('/add');
  };

  return (
    <Button onClick={handleAddTask} className="mb-4">
      Add New Task
    </Button>
  );
};

export default AddTaskButton;
