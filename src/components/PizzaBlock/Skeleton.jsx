import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="125" r="125" />
    <rect x="0" y="270" rx="6" ry="6" width="280" height="20" />
    <rect x="0" y="311" rx="5" ry="5" width="280" height="88" />
    <rect x="0" y="427" rx="5" ry="5" width="90" height="27" />
    <rect x="127" y="419" rx="21" ry="21" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
