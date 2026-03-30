import { products } from "../data/products";
import { Link } from "react-router-dom";

function Products() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl mb-10 text-cyan-400">Weighing Machines</h1>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            to={`/product/${product.id}`}
            key={product.id}
            className="group bg-white/5 border border-white/10 rounded-2xl p-4 
            hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(0,229,255,0.15)]
            transition flex flex-col h-full"
          >
            <div className="h-56 bg-white flex items-center justify-center overflow-hidden rounded-t-2xl">
              <img
                src={product.image}
                alt={product.name}
                className="max-h-full max-w-full object-contain p-4"
              />
            </div>

            <div className="mt-4 flex flex-col flex-grow">
              <h2 className="text-lg font-semibold text-white group-hover:text-cyan-400 transition">
                {product.name}
              </h2>

              <p className="text-sm text-gray-400 mt-1">
                Capacity: {product.capacity}
              </p>

              <div className="mt-auto pt-4">
                <span className="text-xs px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20">
                  {product.category}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
