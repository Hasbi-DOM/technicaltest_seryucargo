import { Box, Typography, Grid, Slider, Container } from "@mui/material"
import { useNavigate, Link } from "react-router-dom";
import { getMoviePlayNow, getMovieTopRated } from "../api/api"
import { useEffect, useState } from "react"

function Home () {
	const [nowPlayingMovie, setNowPlayingMovie] = useState([])
	const [topRatedMovie, setTopRatedMovie] = useState([])
	const [idMovie, setIdMovie] = useState([])
	useEffect(() => {
		getMoviePlayNow().then((movieList) => {
			setNowPlayingMovie(movieList)
			let arrayDataId = []
			for (let i = 0; i < movieList.length; i++) {
				arrayDataId.push(movieList[i].id)
			}
			console.log(arrayDataId)
			setIdMovie(arrayDataId)
		})
		
		getMovieTopRated().then((movieList) => {
			setTopRatedMovie(movieList)
		})
	}, [])

	const NowPlayingMovieList = () => {
		return (
			<div className="Movie-container">
				{
					nowPlayingMovie.map((movie, i) => {
						return(
							<Link to="/detail-movie" state={idMovie}>
							<div key={i} >
								<div className="Movie-card">
									<img className="Movie-image" src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path}`} alt="" />
									<div className="Movie-caption">
										<Typography variant="h4" className="Movie-title">{movie.title}</Typography>
										<Typography variant="h6" className="Movie-date">{movie.release_date}</Typography>
									</div>
								</div>
							</div>
							</Link>
						)
					})
				}
			</div>
			
		)
	}

	const TopRatedMovieList = () => {
		return (
			<div className="Movie-container">
				{
					topRatedMovie.map((movie, i) => {
						return(
							<div key={i} className="Movie-card">
								<img className="Movie-image" src={`${import.meta.env.VITE_APP_BASEIMGURL}/${movie.poster_path}`} alt="" />
								<div className="Movie-caption">
									<Typography variant="h4" className="Movie-title">{movie.title}</Typography>
									<Typography variant="h6" className="Movie-date">{movie.release_date}</Typography>
								</div>
							</div>
						)
					})
				}
			</div>
		)
	}
	return (
			<Box
			disableGutters
			sx={{padding: '56px 142px'}}
			>
				<Typography variant="h1" sx={{mb: 1}}>Now Playing</Typography>
				<NowPlayingMovieList/>
				<Slider 
				sx={{background:'#0000'}}
				/>
				<Typography variant="h1" sx={{mb: 1, mt: '60px'}}>Top Rated</Typography>
				<TopRatedMovieList/>
			</Box>
	)
}
export default Home