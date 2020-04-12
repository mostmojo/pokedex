const poke_container = document.getElementById('poke_container');
const pokemon_number = 150;

const fetchPokemon = async () => {
	for (let i = 1; i <= pokemon_number; i++) {
		await getPokemon(i);
	}
};

const getPokemon = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const result = await fetch(url);
	const pokemon = await result.json();
	console.log(pokemon);
	createPokemonCard(pokemon);
};

fetchPokemon();

function createPokemonCard(pokemon) {
	const pokemonElement = document.createElement('div');
	pokemonElement.classList.add('pokemon');

	const pokeInnerHTML = `
		${pokemon.name};
	`;

	pokemonElement.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonElement);
}
