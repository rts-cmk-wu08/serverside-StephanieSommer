import Link from "next/link";

const Navigation = () => {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/blogs">Blogs</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
};

export default Navigation;
