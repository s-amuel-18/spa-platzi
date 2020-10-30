import router from "./routes/index"
// console.log(router())
// console.log(Location.hash)
// console.log(router())
window.addEventListener(`load`, e => {
  console.log(`hola`)
  router()
})
window.addEventListener(`hashchange`, e => {
  console.log(`hash`)
  router()
})