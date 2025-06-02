import React from "react";

/* Styles */
import "../styles/table.scss";

/* Icons */
import edit from "../icons/edit.png";

/* Components */
import StatusBadge from "./StatusBadge";

/* Redux */
import { useDispatch } from "react-redux";
import { _editData } from "../utils/onGoingTaskSlice";

const Table = ({source, columns, columnData, handleClick}) => {
  const dispatch = useDispatch();
  let colKey = [];

  const onEdit = (item) => {
    dispatch(_editData(item));
    handleClick();
  };

  return (
    <table className="table-wrap">
      <thead>
        <tr className="table-head">
          {columns && columns.map((item) => {
            colKey && colKey.push(item?.colKey)
            return (<th
              key={source+"-"+item?.col}
              style={{width: item?.width+"px",textAlign: item?.align}}
              className="table-header">
                {item?.col}
            </th>)}
          )}
        </tr>
      </thead>
      <tbody>
      {columnData && columnData.map((item, index) => (
        <tr key={source+"-"+item?.[colKey[0]]+index} className="table-body">
          <td className="table-body-col">{item?.[colKey[0]]}</td>
          <td className="table-body-col">{item?.[colKey[1]]}</td>
          <td className="table-body-col">{item?.[colKey[2]]}</td>
          <td className="table-body-col">{item?.[colKey[3]]}</td>
          <td className="table-body-status">
            <StatusBadge status={item?.[colKey[4]]} />
          </td>
          <td className="table-body-edit">
            <img style={{cursor: "pointer"}} src={edit} alt="edit" onClick={() => onEdit(item)} />
          </td>
        </tr>
      ))}
      </tbody>
    </table>
  )
};

export default Table;