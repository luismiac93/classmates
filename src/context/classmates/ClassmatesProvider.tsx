import { useContext, useReducer } from "react";
import { initialGroup } from "../../data/users";
import { Classmate, Group } from "../../interfaces/common";
import { ClassmatesContext } from "./ClassmatesContext";
import { classmatesReducer } from "./classmatesReducer";

export interface ClassmatesState {
  classmates: Classmate[];
  groups: Group[];
}

const INITIAL_STATE: ClassmatesState = {
  classmates: [],
  groups: [],
};

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const ClassmatesProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(classmatesReducer, INITIAL_STATE);

  const loadClassmates = () => {
    const data = localStorage.getItem("classmates");
    if (data === null) {
      localStorage.setItem("classmates", JSON.stringify(initialGroup));
      dispatch({ type: "loadClassmates", payload: initialGroup });
    } else {
      dispatch({ type: "loadClassmates", payload: JSON.parse(data) });
    }
  };

  const loadGroups = () => {
    let tempClassmates = state.classmates.filter((x) => x.active === true);
    let tempGroup: Array<string[]> = [[], [], []];
    let countGroup = [0, 1, 2];
    while (tempClassmates.length > 0) {
      if (countGroup.length === 0) {
        countGroup = [0, 1, 2];
      }

      let classmate =
        tempClassmates[Math.floor(Math.random() * tempClassmates.length)];

      tempClassmates = tempClassmates.filter((x) => x.name !== classmate.name);

      let group = countGroup[Math.floor(Math.random() * countGroup.length)];

      countGroup = countGroup.filter((x) => x !== group);

      tempGroup[group].push(classmate.name);
    }

    let dataFinal = [
      { name: "Table 1", classmates: tempGroup[0] },
      { name: "Table 2", classmates: tempGroup[1] },
      { name: "Table 3", classmates: tempGroup[2] },
    ];
    dispatch({ type: "loadGroups", payload: [...dataFinal] });
  };

  const createClassmate = (name: string) => {
    dispatch({ type: "createClassmate", payload: name });
  };

  const deleteClassmate = (name: string) => {
    dispatch({ type: "deleteClassmate", payload: name });
  };

  const updateClassmate = (name: string) => {
    dispatch({ type: "updateClassmate", payload: name });
  };

  return (
    <ClassmatesContext.Provider
      value={{
        ...state,
        loadClassmates,
        loadGroups,
        createClassmate,
        deleteClassmate,
        updateClassmate,
      }}
    >
      {children}
    </ClassmatesContext.Provider>
  );
};
