import { useState, useEffect, useRef } from "react";

function useShowDropdown(initialState) {
  const [showDropdown, setShowDropdown] = useState(initialState);
  const ref = useRef(null);

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowDropdown(false);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);

  return { ref, showDropdown, setShowDropdown };
}

export default useShowDropdown;
