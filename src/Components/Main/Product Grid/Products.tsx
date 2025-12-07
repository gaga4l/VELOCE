import Product from "./Product/Product";
import LavandeImage from "../../../assets/lavande.jpg";
import PrimaveraImage from "../../../assets/primavera.jpg";
import SpeziaImage from "../../../assets/spezia.jpg";

const productData = [
  {
    id: 1,
    name: "Lavande",
    description: "A delicate and floral aperitif with notes of lavender and chamomile.",
    image: LavandeImage,
  },
  {
    id: 2,
    name: "Primavera",
    description: "A refreshing and vibrant aperitif with bright citrus notes.",
    image: PrimaveraImage,
  },
  {
    id: 3,
    name: "Spezia",
    description: "A bold, spiced aperitif featuring cardamom, ginger, and cinnamon.",
    image: SpeziaImage,
  },
];

const Products = () => {
  return (
    <section className="px-2.5 py-2.5 flex flex-col items-center gap-[100px] w-full h-fit md:px-0 md:py-[30px] lg:px-[30px]">
      <div className="w-full max-w-[1220px] grid gap-8 grid-cols-[repeat(auto-fill,minmax(280px,1fr))]">      {productData.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      </div>
    </section>
  )
}

export default Products;
