import JoyconLeft from "./JoyconLeft";
import JoyconRight from "./JoyconRight";
import Screen from "./Screen";

const NintendoSwitch = () => {
  return (
    <div className="flex h-[80vh] select-none ">
      <JoyconLeft />
      <Screen />
      <JoyconRight />
    </div>
  );
};

export default NintendoSwitch;
