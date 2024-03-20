export interface Coffee {
  title: string;
  description: string;
  ingredients: string[];
  image: string;
  id: number;
}

// Array of coffees
export type CoffeeList = Coffee[];

export function CoffeeItem(props: { coffee: Coffee }) {
  return (
    <div id={"coffee-" + props.coffee.id}>
      <h2>{props.coffee.title}</h2>
      <p>{props.coffee.description}</p>
      <p>Ingredients: {props.coffee.ingredients.join(", ")}</p>
      <img src={props.coffee.image} alt={props.coffee.title} width="200" />
    </div>
  );
}
