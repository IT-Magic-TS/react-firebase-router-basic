import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Article() {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        console.log("OK");
        navigate("/", { replace: true });
      }, 2000);
    }
  }, [error, navigate]);

  return (
    <div>
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

      {article && (
        <div>
          <h1>{article.title}</h1>
          <p>{article.author}</p>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
