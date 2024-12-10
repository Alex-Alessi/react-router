export default function PostsList() {
  const cakes = [
    {
      id: 1,
      name: "Torta al cioccolato",
      ingredients: ["Farina", "Zucchero", "Cacao", "Burro", "Uova"],
      calories: 450 + "kcal",
      description:
        "Un classico irresistibile, perfetta per gli amanti del cioccolato!",
    },
    {
      id: 2,
      name: "Cheesecake ai frutti di bosco",
      ingredients: [
        "Formaggio spalmabile",
        "Panna",
        "Biscotti",
        "Frutti di bosco",
      ],
      calories: 350 + "kcal",
      description: "Dolce e fresca, ideale per l'estate.",
    },
    {
      id: 3,
      name: "Torta di mele",
      ingredients: ["Farina", "Zucchero", "Mele", "Cannella", "Burro"],
      calories: 320 + "kcal",
      description:
        "Un dolce tradizionale, perfetto per accompagnare una tazza di tè.",
    },
    {
      id: 4,
      name: "Tiramisù",
      ingredients: ["Mascarpone", "Savoiardi", "Caffè", "Cacao", "Zucchero"],
      calories: 400 + "kcal",
      description: "Un dolce al cucchiaio italiano famoso in tutto il mondo.",
    },
  ];
  return (
    <div className="container py-4">
      <h1 className="py-3">Lista Post</h1>
      <ul>
        {cakes.map((cake) => (
          <li key={cake.id} className="py-2">
            <h2>{cake.name}</h2>
            <p>
              <strong>Ingredienti: </strong>
              {cake.ingredients.join(", ")}
            </p>
            <p>
              <strong>Calorie: </strong>
              {cake.calories}
            </p>

            <strong>Descrizione:</strong>

            <p>{cake.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
