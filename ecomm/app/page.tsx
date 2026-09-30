import { stripe } from "@/lib/stripe";
import Image from "next/image";

export default async function Home() {
  const products = await stripe.products.list({
    expand: ["data.default_price"],
    limit: 5,
  });

  console.log(products);
  return (
    <div>
      <section>
        <div>
          <div>Welcome to My Ecommerce</div>
          <p>Discover the latest products at the best prices</p>
        </div>
      </section>
    </div>
  );
}
