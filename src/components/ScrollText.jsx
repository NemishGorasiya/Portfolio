import React from "react";
import ScrollLine from "./ScrollLine";

const ScrollText = () => {
  return (
    <div className="overflow-hidden bg-red-500">
      <ScrollLine
        text="Hello World Hello World "
        direction="left"
        variation={0}
      />
      <ScrollLine
        text="Hello World Hello World "
        direction="right"
        variation={0}
      />
      <ScrollLine
        text="Hello World Hello World "
        direction="left"
        variation={50}
      />
    </div>
  );
};

export default ScrollText;
