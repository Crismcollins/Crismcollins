import { ReactNode } from "react";

export type ProfileButtonProps = {
  children?: ReactNode;
  text?: string;
  className?: string;
  onPress: () => void;
}