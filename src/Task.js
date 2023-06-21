import React from "react";
import { formatDistanceToNow, differenceInDays, formatISO, parseISO } from "date-fns";
import { date } from "yup";
import { tr } from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {

  const dateNow = formatISO(new Date(), {representation: "date"});

  const renderDate = differenceInDays(parseISO(taskObj.deadline), parseISO(dateNow))

  return (
    <div className="p-6 bg-white border rounded-md leading-6 mt-4 shadow-md">
      <h3>{taskObj.title}</h3>
      <div className="text-xs pt-4">son teslim: {taskObj.completeDate ? <span className="px-2 py-1 bg-standart-green">{formatDistanceToNow(parseISO(taskObj.completeDate), {locale: tr})}</span> : <span className= {renderDate <= 3 ? "px-2 py-1 bg-alert-red" : "px-2 py-1 bg-standart-blue"}>{renderDate} gun sonra</span> } </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 text-sm border-solid border-[1px] border-gray-400 mr-1 mb-1.5 rounded-3xl" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
