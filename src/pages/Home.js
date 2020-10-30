import getData from "../utils/getData"

const home = async () => {
const chararcters = await getData()


  const view = `
    <div class="characters">
      ${chararcters.results.map(caracter => `
        <article class="characters-item">
          <a href="#/${caracter.id}/">
            <img src="${caracter.image}" alt="${caracter.name}">
            <h2>${caracter.name}</h2>
          </a>
        </article>
      `).join(``)}
    </div>
  `
  return view
}

export default home;