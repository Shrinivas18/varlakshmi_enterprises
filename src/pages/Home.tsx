import { products } from "../data/products";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-full">
      {/* HERO */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-cyan-400">
          Industrial & Retail Weighing Machines
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto">
          Trusted supplier of high-quality weighing scales for shops,
          warehouses, and industries.
        </p>
      </section>

      {/* PRODUCTS */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <h2 className="text-2xl mb-10 text-center">Our Weighing Machines</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="group rounded-2xl overflow-hidden 
              bg-white/5 border border-white/10
              hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]
              transition"
            >
              <img
                src={product.image}
                className="h-48 w-full object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-5">
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400">
                  {product.category}
                </span>

                <h3 className="mt-3 text-lg font-semibold group-hover:text-cyan-400">
                  {product.name}
                </h3>

                <p className="text-sm text-gray-400">
                  Capacity: {product.capacity}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
