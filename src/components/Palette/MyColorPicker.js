import React from "react";
import { CustomPicker } from "react-color";
import {
  Saturation,
  EditableInput,
  Hue
} from "react-color/lib/components/common";
import Swatches from "./Swatches";

export const MyColorPicker = ({
  hex,
  hsl,
  hsv,
  onChange,
  onChangeComplete,
  onSwatchHover
}) => {
  const colors = [
    "#f44336", // #1
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#2196f3",
    "#03a9f4", // #2
    "#00bcd4",
    "#009688",
    "#4caf50",
    "#8bc34a",
    "#cddc39",
    "#ffeb3b", // #3
    "#ffc107",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b"
  ];
  const styles = {
    body: {
      borderRadius: "6px",
      width: "200px",
      backgroundColor: "#fff",
      marginBottom: "30px"
    },
    Saturation: {
      borderRadius: "5px 5px 0 0"
    },
    saturation: {
      width: "100%",
      paddingBottom: "55%",
      position: "relative",
      borderRadius: "2px 2px 0 0",
      overflow: "hidden"
    },
    swatch: {
      marginTop: "6px",
      width: "16px",
      height: "16px",
      borderRadius: "8px",
      position: "relative",
      overflow: "hidden"
    },
    hue: {
      height: 10,
      margin: 5,
      position: "relative"
    },
    triangle: {
      width: "0px",
      height: "0px",
      borderStyle: "solid",
      borderWidth: "10px 10px 10px 10px",
      borderColor: `${hex} transparent transparent transparent`,
      position: "absolute",
      left: "50%",
      marginLeft: "-10px"
    },
    input: {
      background: "transparent",
      color: "#fff",
      padding: "0px",
      border: "0px",
      borderBottom: `1px solid #fff`,
      outline: "none",
      width: "78px",
      fontSize: "16px",
      textAlign: "center"
    },

    bandswatch: {
      paddingTop: "15px",
      paddingBottom: "15px",
      borderRadius: "0 0 5px 5px",
      display: "flex",
      justifyContent: "center",
      background: hex
    }
  };

  const handleSwatchChange = (hex, e) => onChange({ hex, source: "swatch" }, e);

  return (
    <div style={styles.body}>
      <div style={styles.saturation}>
        <Saturation
          style={{ radius: "10px" }}
          hex={hex}
          hsl={hsl}
          hsv={hsv}
          onChange={onChange}
          onChangeComplete={onChange}
        />
      </div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={styles.hue}>
          <Hue hsl={hsl} onChange={onChange} />
        </div>
        <Swatches
          colors={colors}
          onClick={handleSwatchChange}
          onSwatchHover={onSwatchHover}
        />
        <div style={styles.bandswatch}>
          <EditableInput
            style={{ input: styles.input }}
            value={hex}
            onChange={onChange}
          />
        </div>
      </div>
      <div style={styles.triangle} />
    </div>
  );
};

export default CustomPicker(MyColorPicker);
