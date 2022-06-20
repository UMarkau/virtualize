import "./Row.css";

export interface IProps {
  rowNumber: number;
  rowHeight?: number;
}

export const Row = ({ rowHeight = 10, rowNumber }: IProps) => (
  <div
    className="row"
    style={{ height: rowHeight, top: `${rowNumber * rowHeight}px` }}
  >
    {rowNumber}
  </div>
);
