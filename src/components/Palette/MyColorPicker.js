import React from "react";
import { CustomPicker } from "react-color";
import { Saturation, Hue } from "react-color/lib/components/common";
import Swatches from "./Swatches";

export const MyColorPicker = ({ hsl, hsv, onChange, onSwatchHover }) => {
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
    "#ff5722"
  ];
  const styles = {
    body: {
      borderRadius: "14px",
      width: "200px",
      backgroundColor: "#fff",
      transition: `visibility 0s, opacity 0.5s linear`
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
      marginBottom: "5px",
      width: "16px",
      height: "16px",
      borderRadius: "8px",
      position: "relative",
      overflow: "hidden"
    },
    hue: {
      width: "200px",
      height: " 10px",
      position: "relative"
    },
    triangle: {
      width: "0px",
      height: "0px",
      borderStyle: "solid",
      borderWidth: "10px 10px 10px 10px",
      borderColor: `#fff transparent transparent transparent`,
      position: "absolute",
      left: "50%",
      marginLeft: "-10px"
    },
    squareShadow: {
      position: "absolute",
      width: "200px",
      top: "10px",
      height: "150px",
      boxShadow: "0px 0px 30px 5px rgba(0, 0, 0, 0.50)"
    },
    roundShadow: {
      position: "absolute",
      top: "100px",
      width: "200px",
      height: "78px",
      borderRadius: "12px",
      backgroundColor: "white",
      boxShadow: "0px 0px 30px 5px rgba(0, 0, 0, 0.50)"
    }
  };

  const handleSwatchChange = (hex, e) => onChange({ hex, source: "swatch" }, e);

  return (
    <div style={styles.body}>
      <div className="squareShadow" style={styles.squareShadow}></div>
      <div className="roundShadow" style={styles.roundShadow}></div>
      <div style={{ height: 0, width: 200, position: "relative" }} />
      <div style={styles.saturation}>
        <Saturation
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
      </div>
      <div style={styles.triangle} />
    </div>
  );
};

export default CustomPicker(MyColorPicker);
