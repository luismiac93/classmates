import { Classmate, Group } from "../../interfaces/common";
import { ClassmatesState } from "./ClassmatesProvider";

type ClassmatesAction =
  | { type: "loadClassmates"; payload: Classmate[] }
  | { type: "loadGroups"; payload: Group[] }
  | { type: "createClassmate"; payload: string }
  | { type: "deleteClassmate"; payload: string }
  | { type: "updateClassmate"; payload: Classmate }
  | { type: "toggleModalSettings"; payload: boolean };

export const classmatesReducer = (
  state: ClassmatesState,
  action: ClassmatesAction
): ClassmatesState => {
  switch (action.type) {
    case "loadClassmates":
      return { ...state, classmates: action.payload };
    case "loadGroups":
      return { ...state, groups: action.payload };
    case "toggleModalSettings":
      return { ...state, modalSettings: action.payload };
    case "createClassmate":
      return {
        ...state,
        classmates: [
          ...state.classmates,
          { name: action.payload, active: true },
        ],
      };
    case "deleteClassmate":
      return {
        ...state,
        classmates: state.classmates.filter((x) => x.name !== action.payload),
      };
    case "updateClassmate":
      return {
        ...state,
        classmates: [
          ...state.classmates.filter((x) => x.name !== action.payload.name),
          action.payload,
        ],
      };
    default:
      return state;
  }
};
