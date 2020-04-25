import React, { SFC, useState, useEffect } from "react";

interface Props {
  initActive: string;
  tabs: string[];
  parentCallback: (tabs: string) => void;
}

export const Filters: SFC<Props> = ({
  initActive,
  tabs,
  children,
  parentCallback,
}) => {
  const [activeTab, setActive] = useState(initActive);

  console.log("activ in child", initActive);

  useEffect(() => {
    console.log("child change", initActive);
    setActive(initActive);
  });

  const handleClick = (tab: string) => (e: React.MouseEvent) => {
    setActive(tab);
    parentCallback(tab);
  };

  return (
    <div className="filters">
      <div className="wrapper f f-center s--left--med s--right--med">
        {tabs.map((t) => (
          <span
            key={t}
            onClick={handleClick(t)}
            className={`filters--item f t t--gama ${
              activeTab === t && "filters--item--active"
            }`}
          >
            <span className="filters--item--text">
              <span>{t}</span>
            </span>
          </span>
        ))}
        {children}
      </div>
    </div>
  );
};
