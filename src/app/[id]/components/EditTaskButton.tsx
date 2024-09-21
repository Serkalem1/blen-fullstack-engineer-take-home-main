'use client';

import ButtonComponent from '@/components/ButtonComponent';
import { useRouter } from 'next/navigation';

interface EditTaskButtonProps {
  taskId: number;
}

const EditTaskButton: React.FC<EditTaskButtonProps> = ({ taskId }) => {
  const router = useRouter();

  const handleEdit = () => {
    router.push(`/${taskId}/edit`);
  };

  return <ButtonComponent label="Edit Task" onClick={handleEdit} />;
};

export default EditTaskButton;
