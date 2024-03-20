import { Title } from "@solidjs/meta";
import Counter from "~/components/Counter";
import { createResource, For } from "solid-js";

interface Coffee {
    title: string;
    description: string;
    ingredients: string[];
    image: string;
    id: number;
}

// Array of coffees
type CoffeeList = Coffee[];

export default function Home() {

    // query a sample api
    const [data] = createResource<CoffeeList>(async () => {
        const resp = await fetch('https://api.sampleapis.com/coffee/hot');
        return await resp.json();
    })
    return (
        <main>
            <Title>Hello World</Title>
            <h1>Hello world!</h1>
            <Counter/>

            <div style={{display: 'flex', "flex-wrap": "wrap", gap: "8px"}}>
                <For each={data()}>{(coffee: Coffee) => (<>
                    <div style={{width: "200px  "}}>
                        <h2>{coffee.title}</h2>
                        <p>{coffee.description}</p>
                        <p>Ingredients: {coffee.ingredients.join(', ')}</p>
                        <img src={coffee.image} alt={coffee.title} width="200"/>
                    </div>
                </>)}</For>
            </div>
            <p>
                Visit{" "}
                <a href="https://start.solidjs.com" target="_blank">
                    start.solidjs.com
                </a>{" "}
                to learn how to build SolidStart apps.
            </p>
        </main>
    );
}
