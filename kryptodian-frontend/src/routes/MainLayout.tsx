import { Box } from "@mui/material"
import { Outlet } from "react-router-dom"
import Appbar from "../components/Appbar"

const MainLayout = (): JSX.Element => {
	return (
		<Box sx={{ display: "flex" }} id="page-container">
			<Box component="main" sx={{ flexGrow: 1 }} id="page-body">
				<Appbar />
				<Outlet />
			</Box>
		</Box>
	)
}

export default MainLayout
