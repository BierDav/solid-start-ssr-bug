import { clientOnly } from "@solidjs/start";
import { Component } from "solid-js";

export default function clientOnlyComponent<T>(component: Component<T>) {
  return clientOnly(async () => ({ default: component }));
}
