import CtaSection from "../../Components/Main/CTA Section/CtaSection";
import AboutSection from "../../Components/Main/About Section/AboutSection";
import FeaturedProduct from "../../Components/Main/Featured Product/FeaturedProduct";
import Products from "../../Components/Main/Product Grid/Products";
import FlavorsSection from "../../Components/Main/Flavors Section/FlavorsSection";
export default function Main() {
  return (
    <>
      <CtaSection />
      <AboutSection />
      <FeaturedProduct />
      <Products />
      <FlavorsSection />
    </>
  );
}