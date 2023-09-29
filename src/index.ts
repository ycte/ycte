import { Elysia } from "elysia";

const app = new Elysia().get("/", () => "Hello Elysia")
  .post("/auth/login",
    ({ request, body, query, params, store, set }) => {
      console.log(`request: ${request}`)
      console.log(`body: ${body}`)
      console.log(`query: ${query}`)
      console.log(`params: ${params}`)
      console.log(`store: ${store}`)
      console.log(`set: ${set}`)
      // return request
      // if (body.username === 'john' && body.password === )
    })
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);

// const auth = new Elysia().post("/auth/login",
//   ({ request, body, query, params, store, set }) => {
//     console.log(`request: ${request}`)
//     console.log(`body: ${body}`)
//     console.log(`query: ${query}`)
//     console.log(`params: ${params}`)
//     console.log(`store: ${store}`)
//     console.log(`set: ${set}`)
//     // if (body.username === 'john' && body.password === )
//   }).listen(3000)

// console.log(
//   `🦊 Elysia is running at ${auth.server?.hostname}:${auth.server?.port}`
// );
