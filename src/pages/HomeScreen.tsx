import { faGear } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container, Grid } from "@nextui-org/react";
import "animate.css";
import conffeti from "canvas-confetti";
import { useContext, useEffect } from "react";
import { ModalComponent } from "../components/Modal";
import { ClassmatesContext } from "../context";

export const HomeScreen = () => {
  const { loadClassmates, loadGroups, groups, toggleModalSettings } =
    useContext(ClassmatesContext);

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
    <>
      <Container fluid>
        <Grid.Container justify="center">
          <Grid justify="center" md={12}>
            <div
              className="gradient-border-box-title"
              id="box"
              onClick={generatorClassmates}
            >
              Classmates <br />
              Generator
            </div>
          </Grid>
        </Grid.Container>
        <Grid.Container justify="center">
          {groups.length === 0 ? (
            <div className="text2">Good luck</div>
          ) : (
            groups.map((item) => {
              return (
                <Grid justify="center" md={4} xs={12}>
                  {/* <div className="paper-container" key={item.name}> */}
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
                    {/* </div> */}
                  </div>
                </Grid>
              );
            })
          )}
        </Grid.Container>
      </Container>
      <div className="settings">
        <Button
          auto
          color="gradient"
          style={{ width: 60, height: 60 }}
          rounded
          icon={<FontAwesomeIcon icon={faGear} size="2x" />}
          onPress={toggleModalSettings}
        />
      </div>
      <ModalComponent />
    </>
  );
};
