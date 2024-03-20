import { Title } from "@solidjs/meta";
import { For } from "solid-js";
import { useAssets } from "solid-js/web";
import { Coffee, CoffeeItem } from "~/components/CoffeeItem";

export default function () {
    const data = () => [{
        "title": "Cappuccino",
        "description": "A cappuccino is an espresso-based coffee drink that originated in Italy, and is traditionally prepared with steamed milk foam.",
        "ingredients": ["Espresso", "Milk", "Milk Foam"],
        "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "id": 1
    }, {
        "title": "Espresso",
        "description": "Espresso is a coffee-brewing method of Italian origin, in which a small amount of nearly boiling water is forced under pressure through finely-ground coffee beans.",
        "ingredients": ["Espresso"],
        "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "id": 2
    }, {
        "title": "Latte",
        "description": "Cafe latte is a coffee drink made with espresso and steamed milk. The word comes from the Italian caffè e latte, caffelatte or caffellatte, which means \"coffee & milk\".",
        "ingredients": ["Espresso", "Milk"],
        "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "id": 3
    }, {
        "title": "Mocha",
        "description": "A mocha is a mixed coffee beverage with chocolate. It can be hot or cold. 1/3 espresso, 1/3 cocoa, 1/3 milk.",
        "ingredients": ["Espresso", "Cocoa", "Milk"],
        "image": "https://images.unsplash.com/photo-1532004491497-ba35c367d634?auto=format&fit=crop&q=80&w=1887&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "id": 4
    }]

    useAssets(() => (<style>
        {`
        #test-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        }
        `}
    </style>))
    return (
        <main>
            <Title>Coffees - Working</Title>
            <div id={"test-container"}>
                <For each={data()}>{(coffee: Coffee) => (<CoffeeItem coffee={coffee}/>)}</For>
            </div>
        </main>
    );
}
