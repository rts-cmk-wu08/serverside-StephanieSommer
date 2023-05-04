import Link from "next/link";

const Logo = () => {
  return (
    <>
      <Link href="/" className="text-2xl font-bold uppercase">
        Swanky <span className="text-orange-400">.</span>
      </Link>
    </>
  );
};

export default Logo;
