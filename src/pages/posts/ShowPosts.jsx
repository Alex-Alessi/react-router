import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowPosts() {
  const goToPage = useNavigate();
  const postId = useParams().id;
  const apiUrl = import.meta.env.VITE_API_URL;

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetchPost(postId);
  }, []);

  const fetchPost = () => {
    fetch(`${apiUrl}/posts/${postId}`)
      .then((res) => {
        if (!res.ok) {
          if (res.status === 404) {
            goToPage("/not-found");
          }
          throw new Error("Qualcosa è andato storto");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      <h1>Dettaglio post</h1>
      {post && (
        <>
          <p>
            <strong>Immagine: </strong>
            <img src={apiUrl + "/" + post.img} width="200" />
          </p>
          <p>
            <strong>Nome: </strong>
            {post.titolo}
          </p>
          <p>
            <strong>Ingredienti: </strong>
            {post.tags.join(", ")}
          </p>
        </>
      )}
    </div>
  );
}
