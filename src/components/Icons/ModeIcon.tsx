import React from "react";
import { BsSunFill, BsFillMoonStarsFill } from "react-icons/bs";
export const SunIcon = ({ className, ...rest }: { className: any }) => (
  <BsSunFill size={18} color={"yellow"} />
);

export const MoonIcon = ({ className, ...rest }: { className: any }) => (
  <BsFillMoonStarsFill size={18} color={"gray"} />
);
