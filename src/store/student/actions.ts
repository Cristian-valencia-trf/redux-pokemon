import { IStudent } from "../../interface/students/IStudent";
import { StudentTypes } from "./types";

// Action()
// Primer argumento: Tipo de accion
// Segundo argumento: Payload
export const addStudent = (student: IStudent) => ({
  type: StudentTypes.ADD_STUDENT,
  payload: student
});
export const deleteStudent = (student: IStudent) => ({
  type: StudentTypes.DELETE_STUDENT,
  payload: student
});
