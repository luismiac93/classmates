import React, { useState } from "react";
import "animate.css";

export const HomeScreen = () => {
  const [classmates] = useState([
    { name: "Luis", active: true },
    { name: "Fede", active: true },
    { name: "Palm", active: true },
    { name: "Monti", active: true },
    { name: "April", active: true },
    { name: "Victoria", active: true },
    { name: "Shin Young (신영)", active: true },
    { name: "Eiji", active: true },
    { name: "Heeseo (희서)", active: true },
    { name: "Simge", active: true },
    { name: "Arturo", active: true },
    { name: "Jin (현진)", active: true },
    { name: "Grace", active: true },
  ]);
  const [grups, setGroups] = useState<
    Array<{ name: string; classmates: Array<string> }>
  >([]);

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
