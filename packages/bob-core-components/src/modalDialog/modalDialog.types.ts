import { IconSizes } from "../icon/types";
import { ReactNode } from "react";
import { IProps as Card } from "../card/types";
import { TransitionStatus } from "react-transition-group/Transition";

export type AnimateArgs = { animationState: TransitionStatus };

export interface IProps {
  open?: boolean;
  title?: string;
  icon?: string;
  onClose?: Card["onClose"];
  iconSize?: IconSizes;
  justifyChildren?: "center" | "flex-end" | "flex-start";
  alignChildren?: "center" | "flex-end" | "flex-start";
  childrenDirection?: "row" | "column";
  children: ReactNode;
  beforeContent?: ReactNode;
}
