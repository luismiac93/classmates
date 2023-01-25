import "animate.css";
import { useContext, useEffect } from "react";
import { ClassmatesContext } from "../context";
import conffeti from "canvas-confetti";

export const HomeScreen = () => {
  const { loadClassmates, loadGroups, groups } = useContext(ClassmatesContext);

  const generatorClassmates = () => {
    loadGroups();
    conffeti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 0.5,
        y: 0,
      },
    });
  };

  useEffect(() => {
    loadClassmates();
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
        {groups.length === 0 ? (
          <div className="text2">Good luck</div>
        ) : (
          groups.map((item) => {
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
          })
        )}
      </div>
    </div>
  );
};
