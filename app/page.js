import Image from "next/image";
import orange from "/public/orange.jpg";

const getOffers = async () => {
  const result = await fetch("https://swanky-api.onrender.com/offers");
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};

const getProducts = async () => {
  const result = await fetch("https://swanky-api.onrender.com/products");
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};

const getStarted = async () => {
  const result = await fetch("https://swanky-api.onrender.com/started");
  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }
  return result.json();
};


export default async function Home() {
  const offers = await getOffers();
  const products = await getProducts();
  const started = await getStarted();
  console.log(offers)
  return (
    <main>
      <Image src={orange} />
      <ul>
        {offers.map((offer) => (
          <li key={offer.id}>
            <h2>{offer.headline}</h2>
            <p>{offer.text}</p>
          </li>
        ))}
      </ul>

      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <p>{product.name}</p>
            <p>$ {product.price}</p>
          </li>
        ))}
      </ul>
      
      <h2>{started.headline}</h2>
      <p>{started.text}</p>
      <ul>
        {started.bullets.map((bullet) => (
          <li key={bullet.id}>
            <p>{bullet.icon}</p>
            <h3>{bullet.name}</h3>
            <p>{bullet.text}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
