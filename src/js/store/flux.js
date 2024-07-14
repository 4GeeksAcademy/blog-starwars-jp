
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			personajes: [],
			planetas: [],
			naves: [],
			favorites: []

		},
		actions: {
			// Use getActions to call a function within a fuction
			obtenerPersonajes: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/people")
					const data = await response.json()
					setStore({ personajes: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			obtenerPlanetas: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/planets")
					const data = await response.json()
					setStore({ planetas: data.results })
				} catch (error) {
					console.log(error)
				}
			},

			obtenerNaves: async () => {
				try {
					const response = await fetch("https://swapi.dev/api/starships");
					const data = await response.json();
					setStore({ naves: data.results.slice(0, 10) }); // Limitar a 10 naves
				} catch (error) {
					console.log(error);
				}
			},
			

			addToFavorites: (name) => {
				const store = getStore();
				let newFavorites = store.favorites;
				if (!newFavorites.includes(name)) {
					newFavorites.push(name);
				}
				setStore({ favorites: newFavorites, ...store })
			},

			deleteFavorites: (name) => {
				console.log(name)
				const store = getStore();
				let newFavorites = store.favorites;
				const actualizado = newFavorites.filter((item) => item !== name)
				setStore({ favorites: actualizado })
			},

		}
	};
};

export default getState;
