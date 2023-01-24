import "animate.css";
import { useEffect, useState } from "react";
import { initialGroup } from "../data/users";
import { Group, User } from "../interfaces/common";

export const HomeScreen = () => {
  const [classmates, setClassmates] = useState<User[]>([]);
  const [grups, setGroups] = useState<Group[]>([]);

  const generatorClassmates = () => {
    let tempClassmates = classmates.filter((x) => x.active === true);
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
    setGroups([...dataFinal]);
  };

  useEffect(() => {
    const data = localStorage.getItem("users");
    if (data === null) {
      localStorage.setItem("users", JSON.stringify(initialGroup));
    } else {
      setClassmates(JSON.parse(data));
    }
  }, []);

  return (
    <div className="container-app">
      <div className="box-container">
        <div className="gradient-border" id="box" onClick={generatorClassmates}>
          Classmates <br />
          Generator
        </div>
      </div>
      <div className="test">
        {grups.length === 0 ? <div className="text2">Good luck</div> : null}
        {grups.map((item) => {
          return (
            <div className="paper-container" key={item.name}>
              <div className="paper animate__animated animate__bounceInLeft">
                <div className="lines">
                  <div className="text animate__animated animate__lightSpeedInRight">
                    {item.name}
                    <br />
                    <br />
                    {item.classmates.map((e, i) => (
                      <div key={e}>
                        {i + 1}. {e}.
                      </div>
                    ))}
                  </div>
                </div>
                <div className="holes hole-top"></div>
                <div className="holes hole-middle"></div>
                <div className="holes hole-bottom"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
