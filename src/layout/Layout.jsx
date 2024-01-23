import { Container } from "@mui/material"
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Header";

const Layout = () => {
	return (
		<Container
		disableGutters
		maxWidth="100vw"
		>
			<Header/>
			<Outlet/>
		</Container>
	)
}

export default Layout