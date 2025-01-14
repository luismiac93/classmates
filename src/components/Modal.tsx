import { Modal, Text } from "@nextui-org/react";
import { useContext } from "react";
import { ClassmatesContext } from "../context";
import { ModalBody } from "./ModalBody";

export const ModalComponent = () => {
  const { modalSettings, toggleModalSettings } = useContext(ClassmatesContext);

  return (
    <>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        width="80vw"
        open={modalSettings}
        onClose={toggleModalSettings}
      >
        <Modal.Header>
          <Text id="modal-title" size={22}>
            Welcome to
            <Text
              b
              size={22}
              css={{
                textGradient: "45deg, $blue600 -20%, $pink600 50%",
              }}
            >
              {" Classmates"}
            </Text>
          </Text>
        </Modal.Header>
        <ModalBody />
        <Modal.Footer>
          Develop by <a href="mailto:luismiac93@gmail.com">Luismi - { new Date().getFullYear()}</a>
        </Modal.Footer>
      </Modal>
    </>
  );
};
