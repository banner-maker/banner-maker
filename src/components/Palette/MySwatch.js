import React from "react";
import reactCSS, { handleHover } from "reactcss";

import { Swatch } from "react-color/lib/components/common";

export const MySwatch = ({ hover, color, onClick, onSwatchHover }) => {
  const hoverSwatch = {
    boxShadow: `0 0 4px ${color}`
  };
  const styles = reactCSS(
    {
      default: {
        swatch: {
          width: "26px",
          height: "26px",
          marginBottom: "5px",
          marginRight: "5px",
          borderRadius: "3px"
        }
      },
      hover: {
        swatch: hoverSwatch
      }
    },
    { hover }
  );
  return (
    <div style={styles.swatch}>
      <Swatch
        color={color}
        onClick={onClick}
        onHover={onSwatchHover}
        focusStyle={hoverSwatch}
      />
    </div>
  );
};

export default handleHover(MySwatch);
