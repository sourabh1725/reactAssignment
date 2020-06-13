import React from "react";
import Screen from "./Screen";

const Content = ({ activeTab }) => {
  switch (activeTab) {
    case 0:
      return <Screen showPoster={false} />;
    case 1:
      return <Screen showPoster={true} />;
    default:
      return <div>Page not found</div>;
  }
};

export default Content;
