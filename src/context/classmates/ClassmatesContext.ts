import { createContext } from "react";
import { Classmate, Group } from "../../interfaces/common";

export interface ClassmatesContextProps {
  classmates: Classmate[];
  groups: Group[];
  loadClassmates: () => void;
  loadGroups: () => void;
  createClassmate: (name: string) => void;
  deleteClassmate: (name: string) => void;
  updateClassmate: (name: string) => void;
}

export const ClassmatesContext = createContext({} as ClassmatesContextProps);
