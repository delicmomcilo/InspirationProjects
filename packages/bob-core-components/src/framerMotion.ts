import "./IE11ProxyPolyfill"; // This needs to be imported before framer-motion. Just don't break in IE11. No support guaranteed.
import React from "react";
import {
  createDomMotionComponent,
  motion as originalMotion
} from "framer-motion";
import { CustomDomComponent } from "framer-motion/types/render/dom";
import {
  HTMLMotionComponents,
  SVGMotionComponents
} from "framer-motion/types/render/dom/types";

type CustomMotionType = {
  custom: <Props>(
    Component:
      | string
      | React.ComponentClass<Props, any>
      | React.FunctionComponent<Props>
  ) => CustomDomComponent<Props>;
};

type ValidMotionTypes = CustomMotionType &
  Pick<
    HTMLMotionComponents & SVGMotionComponents,
    // List all the exported HTML/SVG tags here. This ensures
    | "div"
    | "span"
    | "button"
    | "a"
    | "article"
    | "header"
    | "svg"
    | "path"
    | "aside"
  >;

let _motion;
if (
  navigator.userAgent.indexOf("MSIE") !== -1 ||
  navigator.appVersion.indexOf("Trident/") > -1
) {
  console.log("IE detected, framer motion using createDomMotionComponent");
  /* Microsoft Internet Explorer detected in. */
  _motion = {
    div: createDomMotionComponent("div"),
    span: createDomMotionComponent("span"),
    button: createDomMotionComponent("button"),
    a: createDomMotionComponent("a"),
    article: createDomMotionComponent("article"),
    header: createDomMotionComponent("header"),
    svg: createDomMotionComponent("svg"),
    path: createDomMotionComponent("path"),
    aside: createDomMotionComponent("aside"),
    custom: originalMotion.custom
  } as ValidMotionTypes;
} else {
  _motion = originalMotion;
}

export const motion = _motion;

// re-export everything
export * from "framer-motion";