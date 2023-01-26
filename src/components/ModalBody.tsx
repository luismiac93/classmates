import { faMoon, faSun, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Button,
  Grid,
  Input,
  Modal,
  Row,
  Spacer,
  Switch,
  Text,
  User,
} from "@nextui-org/react";
import { useContext, useState } from "react";
import { ClassmatesContext } from "../context";
import { eyes, mouth } from "../data/users";

export const ModalBody = () => {
  const { classmates, createClassmate, deleteClassmate, updateClassmate } =
    useContext(ClassmatesContext);
  const [name, setName] = useState("");

  const create = () => {
    if (name.length > 1) {
      createClassmate(name);
      setName("");
    }
  };

  const update = ({ active, name }: { active: boolean; name: string }) => {
    updateClassmate({ name, active });
  };

  return (
    <Modal.Body>
      <Grid.Container gap={2} justify="center">
        <Grid md={8} direction="column">
          <Text h3>Attendees</Text>
          <Spacer y={1} />
          <Grid.Container
            gap={2}
            justify="flex-start"
            css={{ height: "250px", overflowY: "scroll" }}
          >
            {classmates.map((c) => (
              <Grid md={4} key={c.name}>
                <User
                  src={`https://api.dicebear.com/5.x/fun-emoji/svg?mouth=${
                    mouth[Math.floor(Math.random() * mouth.length)]
                  }&eyes=${eyes[Math.floor(Math.random() * eyes.length)]}`}
                  name={
                    <Grid.Container direction="column" justify="space-between">
                      {c.name}
                      <Row align="center">
                        <Text size="$xs" color="secondary">
                          State:
                        </Text>
                        <Spacer x={1} />
                        <Switch
                          initialChecked={c.active}
                          size="xs"
                          iconOn={<FontAwesomeIcon icon={faSun} />}
                          iconOff={<FontAwesomeIcon icon={faMoon} />}
                          onChange={(ev) =>
                            update({ active: ev.target.checked, name: c.name })
                          }
                        />
                        <Spacer x={1} />
                        <FontAwesomeIcon
                          icon={faTrash}
                          color="#F31260"
                          onClick={() => deleteClassmate(c.name)}
                        />
                      </Row>
                    </Grid.Container>
                  }
                />
              </Grid>
            ))}
          </Grid.Container>
        </Grid>
        <Grid md={4} direction="column" sm={12}>
          <Text h3>Create a new</Text>
          <Spacer y={1} />
          <Input
            label="Name"
            status="primary"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Spacer y={1} />
          <Button size="md" color="gradient" onPress={create}>
            Save
          </Button>
          <Spacer y={4} />
        </Grid>
      </Grid.Container>
    </Modal.Body>
  );
};
