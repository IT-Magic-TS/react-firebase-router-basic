import { useLocation } from "react-router-dom";

export default function Contact() {
  const query = useLocation().search;
  const params = new URLSearchParams(query);

  const name = params.get("name");
  // http://localhost:3001/contact?name=mario
  return (
    <div>
      <h2>Contact and {name}</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
        reprehenderit quo nemo. Beatae, sed adipisci culpa sapiente nam animi
        dolorum error ab in nostrum est expedita qui itaque quidem sit.
      </p>
    </div>
  );
}
