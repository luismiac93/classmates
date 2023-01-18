import React, { useState } from "react";
import "animate.css";

export const HomeScreen = () => {
  const [classmates] = useState([
    "Luis",
    "Fede",
    "Palm",
    "Monti",
    "April",
    "Victoria",
    "Shin Young (신영)",
    "Eiji",
    "Heeseo (희서)",
    "Simge",
    "Arturo",
    "Jin (진)",
    "Grace",
  ]);
  const [grups, setGroups] = useState<
    Array<{ name: string; classmates: Array<string> }>
  >([]);

  const generatorClassmates = () => {
    let tempClassmates = [...classmates];
    let tempGroup: Array<string[]> = [[], [], []];
    let countGroup = 0;
    while (tempClassmates.length > 0) {
      let classmate =
        tempClassmates[Math.floor(Math.random() * tempClassmates.length)];
      tempClassmates = tempClassmates.filter((x) => x !== classmate);
      tempGroup[countGroup].push(classmate);
      countGroup = countGroup === 2 ? 0 : countGroup + 1;
    }

    let dataFinal = [
      { name: "Table 1", classmates: tempGroup[0] },
      { name: "Table 2", classmates: tempGroup[1] },
      { name: "Table 3", classmates: tempGroup[2] },
    ];
    setGroups([...dataFinal]);
  };

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
                    {item.classmates.map(
                      (e, i) =>
                        `${i + 1}. ${e}${
                          i === item.classmates.length - 1 ? "." : ","
                        } \n`
                    )}
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
