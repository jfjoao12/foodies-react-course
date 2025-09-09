import classes from "./meals-grid.module.css";
import MealItem from "./meal-item";

export default function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
          {/* The ...meal syntax is the spread operator, which takes all properties from the
          meal object and passes them as individual props to the MealItem component.
          This is a concise way to pass multiple props without explicitly listing each one. */}
        </li>
      ))}
    </ul>
  );
}
