import { useState, useMemo } from "react";
import ProductsCard from "../../Components/Products/ProductsCard";
import { products } from "../../db";
import "./Catalogue.css";

export default function Catalogue() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [priceRange, setPriceRange] = useState([0, 2000]); 

  const categories = ["All", ...new Set(products.map(p => p.categorie))];

  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = product.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = category === "All" || product.categorie === category;
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesSearch && matchesCategory && matchesPrice;
    });
  }, [search, category, priceRange]);

  return (
    <section className="catalogue-section" style={{ marginTop: '88px' }}>
      <div className="catalogue-container">
        {/* Sidebar */}
        <aside className="filter-sidebar">
          <h2>Filter</h2>

          <div className="filter-group">
            <label>Search</label>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <label>Category</label>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              {categories.map((cat, i) => (
                <option key={i} value={cat}>{cat}</option>
              ))}
            </select>
          </div>

          <div className="filter-group">
            <label>Price Range</label>
            <div style={{ display: "flex", gap: "10px" }}>
              <input
                type="number"
                min={0}
                max={priceRange[1]}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                placeholder="Min"
              />
              <input
                type="number"
                min={priceRange[0]}
                max={2000}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                placeholder="Max"
              />
            </div>
          </div>
        </aside>

        {/* Products */}
        <div className="products-grid">
          {filteredProducts.length === 0 ? (
            <p>No products found.</p>
          ) : (
            filteredProducts.map(product => (
              <ProductsCard key={product.id} product={product} />
            ))
          )}
        </div>
      </div>
    </section>
  );
}
