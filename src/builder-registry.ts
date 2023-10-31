"use client";
import { Builder } from "@builder.io/react";
import Counter from "./components/Counter/Counter";
import Counter2 from "./components/Counter/Counter2";

Builder.registerComponent(Counter, {
  name: "Counter",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
Builder.registerComponent(Counter2, {
  name: "Counter2",
  inputs: [
    {
      name: "initialCount",
      type: "number",
    },
  ],
});
