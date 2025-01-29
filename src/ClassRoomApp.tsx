import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import { ClassmatesProvider } from "./context";
import { HomeScreen } from "./pages/HomeScreen";
import "./styles.css";

export const ClassRoomApp = () => {
  return (
    <ClassmatesProvider>
      <HomeScreen />
      <SpeedInsights />
      <Analytics />
    </ClassmatesProvider>
  );
};
