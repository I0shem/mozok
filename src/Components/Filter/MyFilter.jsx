import { useState, useEffect } from "react";
import s from "./MyFilter.module.css";

const MyFilter = ({ filterKey, uniqueOptions, onChange, disabled }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const selectedValue = event.target.value;
    setValue(selectedValue);
    onChange(filterKey, selectedValue);
  };
  useEffect(() => {
    if (disabled) setValue(""); // Reset to "All"
  }, [disabled]);

  return (
    <div className={s.filters}>
      <label>{filterKey}</label>
      <select
        value={value}
        onChange={handleChange}
        disabled={disabled}
        className={s.select}
      >
        <option value="" title="All">
          Всі
        </option>
        {uniqueOptions &&
          uniqueOptions
            .filter((option) => option && option.trim().length > 0)
            .map((option, index) => (
              <option
                key={index}
                value={option}
                title={option}
                className={s.options}
              >
                {option.length > 20 ? `${option.slice(0, 20)}...` : option}
              </option>
            ))}
      </select>
    </div>
  );
};

export default MyFilter;
