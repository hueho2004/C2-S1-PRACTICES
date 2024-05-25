export default function Cart({cart}) {
    return (
      <li key="the card id" className="place-item">
        <button>
          <img src={cart.image.src} alt={cart.image.alt} />
          <h3>{cart.title}</h3>
        </button>
      </li>
    );
  }
  