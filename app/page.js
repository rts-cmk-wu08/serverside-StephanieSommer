import Image from "next/image";
import orangebag from "/public/orangebag.jpg";
import imgstarted from "/public/imgstarted.jpg";

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

  return (
    <main>
      <section>
        <Image src={orangebag} className="relative md:h-screen" />
        {offers.map((offer, index) =>
          index < 1 ? (
            <div className="absolute top-1/2 text-center">
              <h2 className="text-7xl font-bold text-white">
                {offer.headline}
              </h2>
              <p className="font-semibold pt-8 mx-40 text-white">
                {offer.text}
              </p>
              <button className="text-white bg-black px-5 py-2 uppercase mt-6">
                Shop now
              </button>
            </div>
          ) : null
        )}
      </section>

      <section className="my-24">
        <h2 className="text-center text-4xl font-semibold">Our Products</h2>
        <div className="flex justify-evenly mt-4">
          <p className="hover:underline hover:font-semibold">Trending Now</p>
          <p className="hover:underline hover:font-semibold">New Arrivals</p>
          <p className="hover:underline hover:font-semibold">Best Sellers</p>
        </div>
        <ul className="flex justify-around pt-9">
          {products.map((product, index) => (
            <li key={product.id}>
              <Image
                src={`/image-${index}.jpg`}
                width={1000}
                height={1000}
                className="h-[424px] w-[340px]"
              />
              <p className="text-center font-semibold pt-1">{product.name}</p>
              <p className="text-center text-orange-400">$ {product.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex">
        <div>
          <Image
            src={imgstarted}
            width={1000}
            height={1000}
            className="h-[500px] w-[500px] ml-48"
          />
        </div>
        <div className="w-[500px] ml-16">
          <h2 className="text-4xl font-semibold">{started.headline}</h2>
          <p className="mt-4">{started.text}</p>
          <ul>
            {started.bullets.map((bullet) => (
              <li key={bullet.id}>
                <p className="text-orange-400 mt-4">{bullet.icon}</p>
                <h3 className="text-xl font-semibold">{bullet.name}</h3>
                <p>{bullet.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
