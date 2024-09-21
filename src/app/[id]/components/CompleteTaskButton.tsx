'use client';

import ButtonComponent from '@/components/ButtonComponent';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { completeTask } from '../actions';

interface CompleteTaskButtonProps {
  taskId: number;
  isCompleted: boolean;
}

const CompleteTaskButton: React.FC<CompleteTaskButtonProps> = ({ taskId, isCompleted }) => {
  const router = useRouter();
  const { toast } = useToast();

  const handleComplete = async () => {
    await completeTask(taskId, !isCompleted);
    toast({
      title: 'Success',
      description: 'Task completed successfully',
      variant: 'default',
    });
    router.push(`/${taskId}`);
  };

  return (
    <ButtonComponent
      label={`${isCompleted ? 'Incomplete' : 'Complete'} Task`}
      onClick={handleComplete}
    />
  );
};

export default CompleteTaskButton;
