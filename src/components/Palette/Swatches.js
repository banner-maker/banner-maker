import React from "react";
import MySwatch from "./MySwatch";

export const Swatches = ({ colors, onClick, onSwatchHover }) => {
  const styles = {
    swatches: {
      marginTop: "5px",
      display: "flex",
      flexDirecection: "row",
      flexFlow: "row wrap",
      justifyContent: "center"
    }
  };

  return (
    <div style={styles.swatches}>
      {colors.map(color => (
        <MySwatch
          key={color}
          color={color}
          onClick={onClick}
          onSwatchHover={onSwatchHover}
        />
      ))}
    </div>
  );
};

export default Swatches;
