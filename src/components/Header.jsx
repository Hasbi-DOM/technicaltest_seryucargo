import { Box, Typography, Button } from "@mui/material"

const Header = () => {
	return (
		<Box className="App-header">
			<div>
				<Typography variant='h1' sx={{letterSpacing: '24px'}}>CINEMA</Typography>
			</div>
			<div>
				<Button>
					<Typography variant="h3">Favorite</Typography>
				</Button>
				<Button sx={{ml: '50px'}}>
					<Typography variant="h3">Watchlist</Typography>
				</Button>
			</div>
		</Box>
	)
}

export default Header