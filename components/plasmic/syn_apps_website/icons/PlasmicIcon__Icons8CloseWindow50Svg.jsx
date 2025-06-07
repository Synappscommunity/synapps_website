/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icons8CloseWindow50SvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      version={"1.0"}
      viewBox={"0 0 50 50"}
      preserveAspectRatio={"xMidYMid meet"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fill={"currentColor"} stroke={"none"}>
        <path
          d={
            "M5.6 5.6c-2.4 2.3-2.4 36.5 0 38.8 2.3 2.4 36.5 2.4 38.8 0 2.4-2.3 2.4-36.5 0-38.8-2.3-2.4-36.5-2.4-38.8 0zM43.5 25v18.5h-37L6.2 26c-.1-9.6 0-18 .3-18.7.3-1.1 4.4-1.3 18.7-1.1l18.3.3V25z"
          }
        ></path>

        <path
          d={
            "M16 16.7c0 .4 1.7 2.4 3.7 4.5l3.7 3.8-3.9 4c-5.1 5.2-3.7 6.6 1.5 1.5l4-3.9 4 3.9c2.2 2.1 4.3 3.6 4.7 3.2.4-.4-1.1-2.5-3.2-4.7l-3.9-4 3.9-4c5.1-5.2 3.7-6.6-1.5-1.5l-4 3.9-3.8-3.7c-3.7-3.6-5.2-4.5-5.2-3z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default Icons8CloseWindow50SvgIcon;
/* prettier-ignore-end */
