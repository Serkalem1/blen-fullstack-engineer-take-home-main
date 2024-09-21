'use client';

import ButtonComponent from '@/components/ButtonComponent';
import TextAreaComponent from '@/components/TextAreaComponent';
import TextFieldComponent from '@/components/TextFieldComponent';
import { Task } from '@/db/schema';
import { useToast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { updateTask } from '../actions';

interface EditTaskFormProps {
  task: Task;
}

const EditTaskForm: React.FC<EditTaskFormProps> = ({ task }) => {
  const router = useRouter();
  const { toast } = useToast();

  const [title, setTitle] = useState<string>(task.title);
  const [description, setDescription] = useState(task.description);
  const [dueDate, setDueDate] = useState(task.dueDate.split('T')[0]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !dueDate) {
      alert('All fields are required.');
      return;
    }

    await updateTask(task.id, { title, description, dueDate });
    toast({
      title: 'Success',
      description: 'Task edited successfully',
      variant: 'default',
    });
    router.push(`/${task.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto max-w-md space-y-6 rounded-lg bg-white p-6 shadow-md">
      <TextFieldComponent
        label="Title"
        inputValue={title}
        handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        required
      />
      <TextAreaComponent
        label="Description"
        inputValue={description}
        handleInputChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setDescription(e.target.value)
        }
        required
      />
      <TextFieldComponent
        label="Due Date"
        type="date"
        inputValue={dueDate}
        handleInputChange={(e: React.ChangeEvent<HTMLInputElement>) => setDueDate(e.target.value)}
        required
      />
      <ButtonComponent label="Update Task" type="submit" />
    </form>
  );
};

export default EditTaskForm;
