import { Title } from "@solidjs/meta";
import { createResource, For } from "solid-js";
import { useAssets } from "solid-js/web";
import { CoffeeItem, CoffeeList } from "~/components/CoffeeItem";

export default function () {
  // query a sample api
  const [data] = createResource<CoffeeList>(async () => {
    const resp = await fetch("https://api.sampleapis.com/coffee/hot");
    return await resp.json();
  });

  useAssets(() => (
    <style>
      {`
        #test-container {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        }
        `}
    </style>
  ));
  return (
    <main>
      <Title>Coffees - Not Working</Title>
      <div id={"test-container"}>
        <For each={data()}>
          {(coffee) => {
            useAssets(() => (
              <style>
                {`
                        #coffee-${coffee.id} {
                       width: 200px
                        }
                        `}
              </style>
            ));
            return <CoffeeItem coffee={coffee} />;
          }}
        </For>
      </div>
    </main>
  );
}
