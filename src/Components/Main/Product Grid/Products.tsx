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
    <section className="px-2.5 py-2.5 flex flex-col gap-[100px] pb-[100px] md:px-0 md:py-[30px]">
      <div className="md:gap-5 md:px-[30px]">
      {productData.map((product) => (
        <Product key={product.id} {...product} />
      ))}
      </div>
    </section>
  )
}

export default Products;
