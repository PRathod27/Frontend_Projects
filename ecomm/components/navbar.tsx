import { Link } from "lucide-react";

export const Navbar = () => {
  return (
    <nav>
      <div>
        <Link href="/">My Ecommerce</Link>
      </div>
      <div>
        <Link href="/home">Home</Link>
        <Link href="/products">Products</Link>
        <Link href="/checkout">CheckOut</Link>
        {/* <Link href="/home"></Link> */}
      </div>
    </nav>
  );
};
