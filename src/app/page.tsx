'use client'
import HomeInfo from "@/components/Info/HomeInfo";
import PersonalInfo from "@/components/Info/PersonalInfo";
import NintendoSwitch from "@/components/NintendoSwitch";
import ThemeModeButton from "@/components/ThemeModeButton";

export default function Home() {
  return (
    <NintendoSwitch />
      // <div className="">
      //   <ThemeModeButton />
      // </div>
      // <div className="flex">
      //   <PersonalInfo />
      //   <HomeInfo />
      // </div>
  );
}
