import React, { useState, useMemo } from "react";
import { Row } from "../Row";
import "./VirtualizedList.css";

interface IProps {
  rowsNumber: number;
  rowHeight: number;
  bufferNumber: number;
  windowHeight: number;
}

export const VirtualizedList = ({
  bufferNumber,
  rowHeight,
  rowsNumber,
  windowHeight,
}: IProps) => {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    setScrollTop(e.currentTarget.scrollTop);
  };

  const items = useMemo(() => {
    const startIndex = Math.floor(scrollTop / rowHeight);
    const endIndex =
      Math.min(
        rowsNumber - 1,
        Math.floor((scrollTop + windowHeight) / rowHeight)
      ) + bufferNumber;

    const itemsArr: Array<React.ReactElement> = [];
    for (let i = startIndex; i <= endIndex; i++) {
      itemsArr.push(<Row key={i} rowHeight={rowHeight} rowNumber={i} />);
    }
    return itemsArr;
  }, [bufferNumber, rowHeight, rowsNumber, scrollTop, windowHeight]);

  return (
    <div className="virtualized-list" onScroll={handleScroll}>
      <div
        style={{ position: "relative", height: `${rowsNumber * rowHeight}px` }}
      >
        {items}
      </div>
    </div>
  );
};
