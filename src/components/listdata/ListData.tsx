import React from "react";
import Boton from "../../components/boton/Boton";
import Field from "../../components/field/Field";
import { IStudent } from "../../interface/students/IStudent";

interface IListData {
  data: IStudent[];
  addStudent(student: IStudent): void;
  deleteStudent(student: IStudent): void;
}

export default function ListData(props: IListData) {
  const { data, addStudent, deleteStudent } = props;

  React.useEffect(() => {
    console.log(data);
  }, [data]);

  const [student, setStudent] = React.useState({} as IStudent);

  const onChange = (change: React.FormEvent<HTMLInputElement>) => {
    const new_student: IStudent = {
      id: change.currentTarget.value,
      name: change.currentTarget.value
    };

    setStudent(new_student);
  };

  return (
    <div>
      <Field onChange={onChange} />

      <Boton color="green" onClick={() => addStudent(student)}>
        Agregar
      </Boton>
      {data.map((element: IStudent) => (
        <li key={element.id}>
          {element.name}
          <Boton
            color="white"
            onClick={() => deleteStudent(element)}
            backgroundColor="red"
          >
            Eliminar
          </Boton>
        </li>
      ))}
    </div>
  );
}
