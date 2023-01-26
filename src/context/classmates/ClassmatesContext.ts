import { createContext } from "react";
import { Classmate, Group } from "../../interfaces/common";

export interface ClassmatesContextProps {
  classmates: Classmate[];
  groups: Group[];
  modalSettings: boolean;
  loadClassmates: () => void;
  loadGroups: () => void;
  createClassmate: (name: string) => void;
  deleteClassmate: (name: string) => void;
  updateClassmate: (name: Classmate) => void;
  toggleModalSettings: () => void;
}

export const ClassmatesContext = createContext({} as ClassmatesContextProps);
