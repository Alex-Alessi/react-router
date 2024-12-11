export default function IndexPosts() {
  const apiUrl = import.meta.env.VITE_API_URL;
  console.log("apiUrl", apiUrl);

  return (
    <div className="container">
      <h1 className="mt-5">
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
            <tr>
              <th>./img/ciambellone.jpeg</th>
              <td scope="row">ciambellone</td>
              <td>"zucchero a velo", "farina", "uova", "lievito"</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </h1>
    </div>
  );
}
