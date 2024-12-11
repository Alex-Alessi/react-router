import { useEffect, useState } from "react";

export default function IndexPosts() {
  const [posts, setPost] = useState([]);
  const apiUrl = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(apiUrl + "/posts")
      .then((res) => res.json())
      .then((data) => {
        const postsData = data.map((post) => ({
          id: post.id,
          title: post.titolo,
          contenuto: post.contenuto,
          img: post.img,
          tags: post.tags,
        }));

        setPost(postsData);
        console.log(postsData);
      });
  };

  return (
    <div className="container">
      <h1 className="mt-5">Lista dei post</h1>
      {posts.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">Immagine</th>
              <th scope="col">Nome</th>
              <th scope="col">Ingredienti</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <th>
                  <img src={apiUrl + post.img} width="50" />
                </th>
                <td>{post.title}</td>
                <td>
                  {post.tags.map((ingredient, index) => (
                    <span key={index} className="badge text-bg-secondary ms-2">
                      {ingredient}
                    </span>
                  ))}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <h3 className="mt-4">No Posts</h3>
      )}
    </div>
  );
}
