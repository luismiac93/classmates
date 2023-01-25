import { Classmate, Group } from "../../interfaces/common";
import { ClassmatesState } from "./ClassmatesProvider";

type ClassmatesAction =
  | { type: "loadClassmates"; payload: Classmate[] }
  | { type: "loadGroups"; payload: Group[] }
  | { type: "createClassmate"; payload: string }
  | { type: "deleteClassmate"; payload: string }
  | { type: "updateClassmate"; payload: string };

export const classmatesReducer = (
  state: ClassmatesState,
  action: ClassmatesAction
): ClassmatesState => {
  switch (action.type) {
    case "loadClassmates":
      return { ...state, classmates: action.payload };
    case "loadGroups":
      return { ...state, groups: action.payload };
    default:
      return state;
  }
};
