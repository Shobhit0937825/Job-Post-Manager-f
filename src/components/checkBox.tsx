import React from "react";

function CheckBox({ isChecked, setIsChecked }: any) {
  return (
    <div>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => setIsChecked(e.target.checked)}
        className="ml-2"
      />
    </div>
  );
}

export default CheckBox;
