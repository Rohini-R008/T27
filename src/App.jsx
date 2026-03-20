import { useState } from "react";

const shoesData = [
  { id: 1, name: "White Casual Sneaker", price: 70, img: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8V2hpdGUlMjBDYXN1YWwlMjBTbmVha2VyfGVufDB8fDB8fHww" },
  { id: 2, name: "Mid Top Ankle Boots", price: 90, img: "https://images.unsplash.com/photo-1707676179930-b2a8d251288a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWlkJTIwVG9wJTIwQW5rbGUlMjBCb290c3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 3, name: "Campus Sneakers", price: 50, img: "https://media.istockphoto.com/id/1186874953/photo/woman-going-down-the-stairs.webp?a=1&b=1&s=612x612&w=0&k=20&c=m9gLzHQlRBqflUkF0r68Ud0N2zTsQVFmoXkrC0R9ytQ=" },
  { id: 4, name: "Sports Shoes", price: 68, img: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3BvcnRzJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 5, name: "Running Shoes", price: 80, img: "https://plus.unsplash.com/premium_photo-1672046218369-67e12ed1c364?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8UnVubmluZyUyMFNob2VzfGVufDB8fDB8fHww" },
  { id: 6, name: "Formal Shoes", price: 95, img: "https://images.unsplash.com/photo-1668069226492-508742b03147?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Rm9ybWFsJTIwU2hvZXN8ZW58MHx8MHx8fDA%3D" },
  { id: 7, name: "Casual Loafers", price: 60, img: "https://images.unsplash.com/photo-1760616172899-0681b97a2de3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2FzdWFsJTIwTG9hZmVyc3xlbnwwfHwwfHx8MA%3D%3D" },
  { id: 8, name: "Training Shoes", price: 75, img: "https://images.unsplash.com/photo-1627847305741-8839cdc0b819?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8VHJhaW5pbmclMjBTaG9lc3xlbnwwfHwwfHx8MA%3D%3D" }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const existing = cart.find(item => item.id === shoe.id);

    if (existing) {
      setCart(cart.map(item =>
        item.id === shoe.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCart([...cart, { ...shoe, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart
      .map(item =>
        item.id === id ? { ...item, qty: item.qty - 1 } : item
      )
      .filter(item => item.qty > 0)
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
      <div>

    {/* NAVBAR */}
    <div style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "15px 40px",
      borderBottom: "1px solid #ddd",
      marginBottom: "20px"
    }}>

      {/* LOGO */}
      <div style={{ fontWeight: "bold", fontSize: "18px" }}>
        🥿 ShoeStore
      </div>

      {/* NAV LINKS */}
      <div style={{ display: "flex", gap: "30px" }}>
        <span style={{ cursor: "pointer" }}>Home</span>
        <span style={{ cursor: "pointer" }}>Categories</span>
        <span style={{ cursor: "pointer" }}>About Us</span>
      </div>

    </div>
    <div style={{ display: "flex", padding: "30px", gap: "30px", fontFamily: "Arial" }}>

      {/* LEFT SIDE */}
      <div style={{
  width: "70%",
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "20px"
}}>
        {shoesData.map(shoe => (
          <div key={shoe.id} style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px"
          }}>

            {/* IMAGE */}
            <img
              src={shoe.img}
              alt={shoe.name}
              style={{ width: "120px", height: "80px", objectFit: "cover" }}
            />

            {/* CENTER CARD (BEIGE BOX) */}
            <div style={{
              backgroundColor: "#d2b48c",
              padding: "20px",
              borderRadius: "10px",
              textAlign: "center",
              width: "200px"
            }}>
              <h3>{shoe.name}</h3>
              <p>${shoe.price}</p>
              <button onClick={() => addToCart(shoe)}>Add to Cart</button>
            </div>

          </div>
        ))}
      </div>

      {/* RIGHT SIDE - CART */}
      <div style={{
        width: "30%",
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        height: "fit-content"
      }}>
        <h2 style={{ textAlign: "center" }}>Cart</h2>

        {cart.map(item => (
          <div key={item.id} style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px"
          }}>

            <div>
              <p>{item.name}</p>
              <p>${item.price}</p>
            </div>

            <div>
              <button onClick={() => decreaseQty(item.id)}>-</button>
              <span style={{ margin: "0 10px" }}>{item.qty}</span>
              <button onClick={() => increaseQty(item.id)}>+</button>
            </div>

          </div>
        ))}

        <h3 style={{ textAlign: "center", marginTop: "20px" }}>
          Total: ${total}
        </h3>
      </div>
</div>
    </div>
  );
}