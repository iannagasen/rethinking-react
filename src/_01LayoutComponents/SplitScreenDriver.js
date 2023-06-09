import { SplitScreen } from "./SplitScreen";

const LeftHandContainer = () => {
  return <p style={{ backgroundColor: "red" }}>Im Left</p>;
};

const RightHandContainer = () => {
  return <h1 style={{ backgroundColor: "green" }}>Im Right!</h1>;
};

export const SplitScreenDriver = () => {
  return (
    <SplitScreen leftWeight={1} rightWeight={3}>
      <LeftHandContainer />
      <RightHandContainer />
    </SplitScreen>
  );
};
