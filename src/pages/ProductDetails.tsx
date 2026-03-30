import { useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return <div className="p-10 text-center">Product not found</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGE */}
        <img
          src={product.image}
          className="w-full h-[400px] object-cover rounded-xl"
        />

        {/* DETAILS */}
        <div>
          <span className="text-xs px-3 py-1 bg-cyan-400/10 text-cyan-400 rounded-full">
            {product.category}
          </span>

          <h1 className="text-3xl mt-4">{product.name}</h1>

          <p className="mt-2 text-gray-400">
            Capacity: {product.capacity}
          </p>

          <p className="mt-6 text-gray-300">
            {product.description}
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href={`https://wa.me/919876543210?text=I'm interested in ${product.name}`}
              className="px-6 py-3 bg-green-500 text-black rounded-full"
            >
              WhatsApp
            </a>

            <a
              href="tel:+919876543210"
              className="px-6 py-3 bg-cyan-400 text-black rounded-full"
            >
              Call
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductDetails;