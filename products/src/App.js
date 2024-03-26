
import './App.css';

function App() {
  return (
    <div className="App">
      <h4>Products</h4>

      <section>
        <Product name="iPhone" price="34.89/-" />
        <Product name="xiaomi" price="12.57 /-" />
        <Product name="One plus" price="56.48 /-" />
        <Product name="Samsung" price="10.11 /-" />
        <Product name="Nothing" price="45.03 /-" />
      </section>
    </div>
  );
}

function Product({ name, price }) {
  return <div className="product">
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
}

export default App;