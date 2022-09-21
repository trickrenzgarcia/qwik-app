import { component$, useStore } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Link } from '@builder.io/qwik-city';

const Home = component$(() => {

  console.log()
  
  return (
    <div>
      <h1>Hello, World!</h1>
      <h2>Count: </h2>
      <button >+1</button>
    </div>
  )
})

export const head: DocumentHead = {
  title: 'hello world',
}

export default Home
