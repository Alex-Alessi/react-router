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

  const fetchDeletePost = (id) => {
    const deleteUrl = `${apiUrl}/posts/${id}`;
    const fetchConfig = {
      method: "DELETE",
    };

    fetch(deleteUrl, fetchConfig)
      .then((res) => res)
      .then(() => {
        fetchPosts();
      });
  };

  const handleDeleteButton = (id) => {
    fetchDeletePost(id);
  };

  return (
    <>
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
                      <span
                        key={index}
                        className="badge text-bg-secondary ms-2"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      data-bs-toggle="modal"
                      data-bs-target={`#delete-posts-modal-${post.id}`}
                    >
                      <i className="fa-solid fa-trash"></i>
                    </button>

                    <button type="button" className="btn btn-info ms-2">
                      <i className="fa-solid fa-eye fa-sm"></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h3 className="mt-4">No Posts</h3>
        )}
      </div>

      {/* Delete */}
      {posts.map((post) => (
        <div
          key={post.id}
          className="modal fade"
          id={`delete-posts-modal-${post.id}`}
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex="-1"
          aria-labelledby="staticBackdropLabel"
          // aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h1
                  className="modal-title text-danger fs-5"
                  id="staticBackdropLabel"
                >
                  Stai eliminando "{post.title}"
                </h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body text-black">Vuoi continuare?</div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Annulla
                </button>
                <button
                  onClick={() => handleDeleteButton(post.id)}
                  type="button"
                  className="btn btn-danger"
                  data-bs-dismiss="modal"
                >
                  Elimina
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
