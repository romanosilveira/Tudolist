
import { Tarea } from "./Tarea";

export const TasksList = ({ tasks }) => {

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:p-16 md:p-8 p-4  lg:rounded-4xl md:rounded-3xl rounded-2xl bg-[#fde4b7] w-full  md:max-h-[550px] xl:max-h-dvh lg:h-[550px] no-scrollbar overflow-auto"
    >
      {tasks.map((task) => (
        <Tarea
          key={task.id}
          task={task}
          className=""    // <— coincide con tu selector
        />
      ))}
    </div>
  );
};