import { IStudent } from "../../interface/students/IStudent";
import { StudentTypes } from "./types";
import { Reducer } from "redux";

const INITIAL_STATE: IStudent[] = [] as IStudent[];

const reducer: Reducer<IStudent[]> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case StudentTypes.ADD_STUDENT:
      return [...state, action.payload];

    case StudentTypes.DELETE_STUDENT:
      return [
        ...state.filter((student: IStudent) => student.id !== action.payload.id)
      ];

    default:
      return state;
  }
};
export default reducer;
