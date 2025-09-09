export default function MealsBlogPage({ params }) {
  return (
    <main>
      <h1>Meals Blog Page</h1>
      <h2>This is a dynamic route page for meal details based on the slug.</h2>
      <h3>Slug is: {params.slug}</h3>
    </main>
  );
}
