import { Dispatch } from "redux";
import { connect } from "react-redux";
import { addStudent } from "../../store/student/actions";
import { deleteStudent } from "../../store/student/actions";
import { IStudent } from "../../interface/students/IStudent";
import ListData from "./ListData";

const MapStateToProps = (state: any) => ({
  data: state.students
});

const MapDispatchToProps = (dispatch: Dispatch) => ({
  addStudent: (student: IStudent) => dispatch(addStudent(student)),
  deleteStudent: (student: IStudent) => dispatch(deleteStudent(student))
});

export default connect(MapStateToProps, MapDispatchToProps)(ListData);
