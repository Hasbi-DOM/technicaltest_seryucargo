import axios from "axios"

const apiKey = import.meta.env.VITE_APP_APIKEY
const baseUrl = import.meta.env.VITE_APP_BASEURL

export const getMoviePlayNow = async () => {
	const movieNowPlaying = await axios.get(
		`${baseUrl}/movie/now_playing?api_key=${apiKey}`
	)
	console.log(movieNowPlaying.data.results[0].id)
	return movieNowPlaying.data.results
}

export const getMovieTopRated = async () => {
	
	const movieTopRated = await axios.get(
		`${baseUrl}/movie/top_rated?api_key=${apiKey}`
	)
	return movieTopRated.data.results
}

export const getDetailMovie = async (id) => {

	await fetch(`${baseUrl}/movie/?movie_id=${movie_id}?api_key=${apiKey}`,
		{
			method: 'GET',
			body: JSON.stringify({
				movie_id: id
			})
		}
	)
	.then((response) => response.json())
	.then((data) => {
		console.log(data.data)
	})
}