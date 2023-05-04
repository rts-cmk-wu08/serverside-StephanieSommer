import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { GrMenu } from "react-icons/gr"

const Navigation = ({ showDropdown, setShowDropdown }) => {
  const router = useRouter();

  const handleMenuToggle = () => setShowDropdown(!showDropdown);

  useEffect(() => {
    setShowDropdown(false);
  }, [router]);

  return (
    <>
      <p onClick={handleMenuToggle} className="md:hidden cursor-pointer text-xl pt-2">
        <GrMenu />
      </p>
      <nav
        className={`
                ${showDropdown ? "flex" : "hidden"}
                py-4 flex-col gap-5 items-center font-semibold
                absolute top-full left-0 w-screen 
                backdrop-blur-[2px]
                bg-slate-200/75
                md:bg-transparent
                md:static md:w-auto md:py-0
                md:flex md:flex-row 
            `}
      >
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/blogs" className="hover:underline">Blogs</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
    </>
  );
};

export default Navigation;
