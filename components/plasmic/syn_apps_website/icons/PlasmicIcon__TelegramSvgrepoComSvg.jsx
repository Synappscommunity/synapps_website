/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function TelegramSvgrepoComSvgIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      version={"1.1"}
      viewBox={"0 0 455 455"}
      xmlSpace={"preserve"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <g fillRule={"evenodd"} clipRule={"evenodd"}>
        <path
          d={
            "M0 0v455h455V0H0zm384.814 100.68l-53.458 257.136c-1.259 6.071-8.378 8.822-13.401 5.172l-72.975-52.981a12.065 12.065 0 00-14.712.412l-40.46 32.981c-4.695 3.84-11.771 1.7-13.569-4.083l-28.094-90.351-72.583-27.089c-7.373-2.762-7.436-13.171-.084-16.003L373.36 90.959c6.315-2.442 12.83 3.09 11.454 9.721z"
          }
        ></path>

        <path
          d={
            "M313.567 147.179l-141.854 87.367c-5.437 3.355-7.996 9.921-6.242 16.068l15.337 53.891c1.091 3.818 6.631 3.428 7.162-.517l3.986-29.553a24.27 24.27 0 017.522-14.522l117.069-108.822c2.192-2.03-.432-5.477-2.98-3.912z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default TelegramSvgrepoComSvgIcon;
/* prettier-ignore-end */
