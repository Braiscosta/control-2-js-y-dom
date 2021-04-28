// "use strict";

const url = "https://rickandmortyapi.com/api/";

async function rickAndMortyCharacters(url) {
  const response = await fetch(url);
  const data = await response.json();
  const episodesResponse = await fetch(data.episodes);
  const dataEpisodes = await episodesResponse.json();

  const januaryEpisodes = dataEpisodes.results
    .filter((item) => {
      return item.air_date.split(" ").includes("January");
    })
    .map((item) => item.characters);

  const characters = [
    ...januaryEpisodes[0],
    ...januaryEpisodes[1],
    ...januaryEpisodes[2],
  ];

  const personajes = [];
  for (let value of characters) {
    const charactersResponse = await fetch(value);
    const charactersData = await charactersResponse.json();
    personajes.push(charactersData.name);
  }
  const unicos = Array.from(new Set(personajes));

  console.log(unicos);
}

rickAndMortyCharacters(url);
