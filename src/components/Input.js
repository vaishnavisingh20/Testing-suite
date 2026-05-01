import { useState } from "react";

function Input({ placeholder }) {
  const [value, setValue] = useState("");

  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default Input;