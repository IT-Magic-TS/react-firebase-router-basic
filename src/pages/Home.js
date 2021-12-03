import { useFetch } from "../hooks/useFetch";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  const {
    data: articles,
    isPending,
    error
  } = useFetch("http://localhost:3000/articles");
  return (
    <div className="home">
      <h2>Articles</h2>
      {isPending && (
        <div>
          <i className="fa fa-spinner w3-spin" style={{ fontSize: "64px" }}></i>
        </div>
      )}
      {error && (
        <div className="w3-panel w3-red w3-margin">
          <h3>Danger!</h3>
          <p>{error}</p>
        </div>
      )}

      {articles &&
        articles.map(item => (
          <div className="card" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.author}</p>
            <Link to={`/articles/${item.id}`}>Read more...</Link>
          </div>
        ))}
      <Link to="/articles/45">Fake Article</Link>
    </div>
  );
}
