import React, { useState } from "react";

function InputField({
  setData,
  defaultValue,
  type,
  placeholder,
  maxLength,
  label,
  pattern,
  numberOnly,
  inputError,
  formData,
}: any) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setData({ value: value, isValid: value.length > 3 });
  };
  console.log(formData,'formData')

  return (
    <div className="flex items-center gap-2">
      {/* <input type="checkbox" checked={isChecked} readOnly className="ml-2" /> */}
      <input
        maxLength={maxLength}
        type={type}
        id="name"
        placeholder={placeholder}
        defaultValue={defaultValue && defaultValue}
        className="block rounded px-2.5 pb-2.5 pt-5 text-sm border peer flex-grow"
        autoComplete="off"
        onKeyDown={numberOnly}
        onChange={handleChange} // Call handleChange function on input change
      />
    </div>
  );
}

export default InputField;
