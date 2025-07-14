"use client";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";

import TodoList from "./components/TodoList";

Amplify.configure(outputs);

export default function App() {
  return (
    <Authenticator>
      <TodoList />
    </Authenticator>
  );
}
