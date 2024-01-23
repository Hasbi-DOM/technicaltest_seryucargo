import { Container, Box, Typography } from "@mui/material"
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getDetailMovie } from "../api/api";

function MovieDetail () {
	
	const [movieDetail, setMovieDetail] = useState([])
	const { state } = useLocation()
	const data = state || ''
	useEffect(() => {
		getDetailMovie().then((movieDetail) => {
			setMovieDetail(movieDetail)
			console.log(movieDetail + 'cikann')
		})
	}, [data])
	return(
		<Container
		disableGutters
		sx={{padding: '56px 142px'}}
		>
			<Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '20px'}}>
				<div>
					<img src="#" alt="" />
				</div>
				<div>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
						<Typography variant="h2">Judul</Typography>
						<Typography variant="h2" sx={{fontWeight: 400, ml: 1}}>(Tahun)</Typography>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '12px', marginTop: '8px'}}>
						<Typography variant="caption">Date Released</Typography>
						<Typography variant="caption"><li>Genre</li></Typography>
						<Typography variant="caption"><li>Durasi</li></Typography>
					</div>
					<div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: '22px', gap: '8px'}}>
						<div className="User_score">
							<div className="Line_score">
								<div className="Progress_score">
								<div className="Field_score">
									<p className="Value-score">100</p>
								</div>
								</div>
							</div>
						</div>
						<Typography variant="body">User Score</Typography>
						<BookmarkBorderOutlinedIcon fontSize="small" sx={{color: '#FFF'}}/>
						<FavoriteOutlinedIcon fontSize="small" sx={{color: '#FFF'}}/>	
					</div>
					<div style={{marginTop: '20px'}}>
						<Typography variant="caption" sx={{fontStyle:'italic'}}>Caption</Typography>
						<Typography variant="h5" sx={{marginTop: '10px'}}>Overview</Typography>
						<Typography variant="caption" sx={{marginTop: '5px'}}>Isi Overview</Typography>
					</div>
				</div>
			</Box>
		</Container>
	)
}

export default MovieDetail