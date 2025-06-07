import * as React from "react";
import { PlasmicHeaderButton } from "./plasmic/syn_apps_website/PlasmicHeaderButton";

function HeaderButton_(props, ref) {
  const { plasmicProps } = PlasmicHeaderButton.useBehavior(props, ref);
  return <PlasmicHeaderButton {...plasmicProps} />;
}

const HeaderButton = React.forwardRef(HeaderButton_);

export default Object.assign(HeaderButton, { __plumeType: "button" });
