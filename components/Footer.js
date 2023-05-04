import Link from "next/link";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className=" grid grid-cols-4 my-11 mx-8">
      <div>
        <Logo />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
          accusamus sunt asperiores, odit quisquam esse!
        </p>
        <form action="">
          <input
            type="email"
            placeholder="Enter Your Email Address..."
            className="underline my-3"
          />
          <input type="submit" value=">" className="text-orange-400" />
          <div className="flex gap-2">
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
            <p>icon</p>
          </div>
        </form>
      </div>

      <div className="font-bold">
        <h2>Quick Links</h2>
        <div className="flex flex-col">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blogs" className="hover:underline">
            Blogs
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
        </div>
      </div>

      <div className="font-bold">
        <h2>Help & Info</h2>
        <p>Track your order</p>
        <p>Returns policies</p>
        <p>Shipping + delivery</p>
        <p>Contact us</p>
        <p>Faqs</p>
      </div>

      <div>
        <h2 className="font-bold">Contact Us</h2>
        <p>Do you have any queries or suggestions</p>
        <p className="font-bold underline">yourinfo@gmail.com</p>
        <p>if you need support? Just give us a call.</p>
        <p className="font-bold underline">+55 111 222 333 44</p>
      </div>
    </footer>
  );
};

export default Footer;
