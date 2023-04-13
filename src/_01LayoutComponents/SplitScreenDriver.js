import { SplitScreen } from "./SplitScreen";

const LeftHandContainer = () => {
  return <p style={{ backgroundColor: "red" }}>Im Left</p>;
};

const RightHandContainer = () => {
  return <h1 style={{ backgroundColor: "green" }}>Im Right!</h1>;
};

export const SplitScreenDriver = () => {
  return <SplitScreen left={LeftHandContainer} right={RightHandContainer} />;
};
