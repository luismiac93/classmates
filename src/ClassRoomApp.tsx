import { ClassmatesProvider } from "./context";
import { HomeScreen } from "./pages/HomeScreen";
import "./styles.css";

export const ClassRoomApp = () => {
  return (
    <ClassmatesProvider>
      <HomeScreen />
    </ClassmatesProvider>
  );
};
