'use client'
import NintendoSwitch from "@/components/NintendoSwitch";

export default function Home() {
  console.log(process.env.NEXT_PUBLIC_BACKEND_URL)
  return (
    <NintendoSwitch />
  );
}
