import Stripe from "stripe";
import { ProductCard } from "./productCard";

interface Props {
  products: Stripe.Product[];
}

export const ProductList = ({ products }: Props) => {
  return (
    <div>
      <div>
        <input type="text" placeholder="Search product..."></input>
      </div>
      <ul>
        {products.map((product) => {
          return (
            <li>
              <ProductCard product={product}></ProductCard>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
