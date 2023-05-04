"use client";
import Logo from "./Logo";
import Navigation from "./Navigation";
import useShowDropdown from "@/customHooks/useDropdown";

const Header = () => {
  const { ref, showDropdown, setShowDropdown } = useShowDropdown(false);

  return (
    <header
      ref={ref}
      className="bg-white flex justify-between py-3 px-6 relative uppercase"
    >
      <Logo />
      <Navigation
        showDropdown={showDropdown}
        setShowDropdown={setShowDropdown}
      />
    </header>
  );
};

export default Header;
