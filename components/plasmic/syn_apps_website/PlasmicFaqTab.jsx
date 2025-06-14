/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: vqCYb2b7hLWP5fdSvXKe7g
// Component: QR_t6FoGThXW
import * as React from "react";
import { useRouter } from "next/router";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  hasVariant,
  renderPlasmicSlot,
  useDollarState
} from "@plasmicapp/react-web";
import { useDataEnv } from "@plasmicapp/react-web/lib/host";
import "@plasmicapp/react-web/lib/plasmic.css";
import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: vqCYb2b7hLWP5fdSvXKe7g/projectcss
import sty from "./PlasmicFaqTab.module.css"; // plasmic-import: QR_t6FoGThXW/css

createPlasmicElementProxy;

export const PlasmicFaqTab__VariantProps = new Array("selected");

export const PlasmicFaqTab__ArgProps = new Array(
  "onSelectedChange",
  "children"
);

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicFaqTab__RenderFunc(props) {
  const { variants, overrides, forNode } = props;
  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "selected",
        type: "writable",
        variableType: "variant",
        valueProp: "selected",
        onChangeProp: "onSelectedChange"
      }
    ],

    [$props, $ctx, $refs]
  );
  const $state = useDollarState(stateSpecs, {
    $props,
    $ctx,
    $queries: {},
    $refs
  });
  return (
    <div
      data-plasmic-name={"faqTab"}
      data-plasmic-override={overrides.faqTab}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_antd_5_hostless_css.plasmic_tokens,
        sty.faqTab,
        { [sty.faqTabselected]: hasVariant($state, "selected", "selected") }
      )}
    >
      <h4
        data-plasmic-name={"tabTitle2"}
        data-plasmic-override={overrides.tabTitle2}
        className={classNames(projectcss.all, projectcss.h4, sty.tabTitle2, {
          [sty.tabTitle2selected]: hasVariant($state, "selected", "selected")
        })}
        dir={"rtl"}
      >
        {renderPlasmicSlot({
          defaultContents:
            "\u0646\u0635\u0628 \u0648 \u0631\u0627\u0647 \u0627\u0646\u062f\u0627\u0632\u064a",
          value: args.children,
          className: classNames(sty.slotTargetChildren, {
            [sty.slotTargetChildrenselected]: hasVariant(
              $state,
              "selected",
              "selected"
            )
          })
        })}
      </h4>
    </div>
  );
}

const PlasmicDescendants = {
  faqTab: ["faqTab", "tabTitle2"],
  tabTitle2: ["tabTitle2"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicFaqTab__ArgProps,
          internalVariantPropNames: PlasmicFaqTab__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFaqTab__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "faqTab") {
    func.displayName = "PlasmicFaqTab";
  } else {
    func.displayName = `PlasmicFaqTab.${nodeName}`;
  }
  return func;
}

export const PlasmicFaqTab = Object.assign(
  // Top-level PlasmicFaqTab renders the root element
  makeNodeComponent("faqTab"),
  {
    // Helper components rendering sub-elements
    tabTitle2: makeNodeComponent("tabTitle2"),
    // Metadata about props expected for PlasmicFaqTab
    internalVariantProps: PlasmicFaqTab__VariantProps,
    internalArgProps: PlasmicFaqTab__ArgProps
  }
);

export default PlasmicFaqTab;
/* prettier-ignore-end */
