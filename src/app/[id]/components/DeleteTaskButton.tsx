'use client';

import ButtonComponent from '@/components/ButtonComponent';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { deleteTask } from '../actions';

interface DeleteTaskButtonProps {
  taskId: number;
}

const DeleteTaskButton: React.FC<DeleteTaskButtonProps> = ({ taskId }) => {
  const { toast } = useToast();
  const router = useRouter();

  const handleDelete = async () => {
    if (confirm('Are you sure you want to delete this task?')) {
      await deleteTask(taskId);
      toast({
        title: 'Success',
        description: 'Task deleted successfully',
        variant: 'default',
      });
      router.push('/');
    }
  };

  return (
    <ButtonComponent label="Delete Task" variant="destructive" onClick={handleDelete}>
      Delete Task
    </ButtonComponent>
  );
};

export default DeleteTaskButton;
