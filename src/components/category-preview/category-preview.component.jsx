import ProductCard from "../product-card/product-card.component";

import "./category-preview.styles.scss";



const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span>{title.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {
            products.filter((_, idx) => idx < 4)
            .map((products) => 
            <ProductCard key={products.id} product={products}/>
            )
        }
      </div>
    </div>
  );
};

export default CategoryPreview;
