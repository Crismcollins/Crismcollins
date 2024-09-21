import JoyconLeft from "./JoyconLeft";
import JoyconRight from "./JoyconRight";
import Screen from "./Screen";

const NintendoSwitch = () => {
  
  return (
    <div className="flex h-[calc(100vh-6rem)] ">
      <JoyconLeft />
      <Screen />
      <JoyconRight />
    </div>
  );
};

export default NintendoSwitch;
