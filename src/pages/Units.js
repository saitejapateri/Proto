import React from "react";
import "./Units.css";
import {useSelector} from 'react-redux'

function Units({ unit_name, id, onClick }) {

  const selectedUnitId = useSelector(state => state.unit.selectedUnitId)
  
  return (
    <>
      <div id="unit-name" onClick={() => onClick(id)} className={`${selectedUnitId === id ? 'active' : ''}`}>
        {unit_name}
      </div>
    </>
  );
}

export default Units;
