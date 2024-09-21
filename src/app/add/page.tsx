import AddTaskForm from './components/AddTaskForm';

const AddTaskPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="mb-4 text-2xl font-bold">Add New Task</h1>
      <AddTaskForm />
    </div>
  );
};

export default AddTaskPage;
