import React from "react";
import reactCSS, { handleHover } from "reactcss";

import { Swatch } from "react-color/lib/components/common";

export const MySwatch = ({ hover, color, onClick, onSwatchHover, edge }) => {
  const hoverSwatch = {
    // border: "1px solid #fff",
    opacity: "0.5",
    boxShadow: `inset 0 0 0 4px ${color}`,
    transition: `opacity 150ms ease 0s`
  };

  const styles = reactCSS(
    {
      default: {
        swatch: {
          width: "24px",
          height: "24px",
          borderBottomRightRadius: `${edge === "bottomRight" ? "12px" : 0}`,
          borderBottomLeftRadius: `${edge === "bottomLeft" ? "12px" : 0}`,
          transition: `box-shadow 100ms ease 0s`
        }
      },
      hover: {
        swatch: hoverSwatch
      }
    },
    { hover }
  );
  return (
    <div>
      <Swatch
        color={color}
        onClick={onClick}
        style={styles.swatch}
        onHover={onSwatchHover}
        focusStyle={hoverSwatch}
      />
    </div>
  );
};

export default handleHover(MySwatch);
