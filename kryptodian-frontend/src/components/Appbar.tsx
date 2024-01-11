import {
	AppBar,
	Toolbar,
	IconButton,
	Menu,
	MenuItem,
	Grid,
	Box,
} from "@mui/material"
import AccountCircle from "@mui/icons-material/AccountCircle"
import { useState } from "react"

const Appbar = () => {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const handleOpenMenu = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleCloseMenu = () => {
		setAnchorEl(null)
	}

	// const handleMenu = () => {

	// }

	return (
		<AppBar position="static">
			<Toolbar>
				<Grid
					container
					spacing={2}
					alignItems={"center"}
					justifyContent={"center"}>
					<Grid item container xs={true}>
						<Grid item>
							<Box onClick={() => {}}>
								<img
									src="https://kryptodian.com/wp-content/uploads/2022/03/Logo-white.svg"
									alt="kryptodian"
								/>
							</Box>
						</Grid>
					</Grid>
					<Grid item container justifyContent={"flex-end"} xs={"auto"}>
						<Grid item>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenMenu}
								color="inherit">
								<AccountCircle />
							</IconButton>
						</Grid>
					</Grid>
				</Grid>
				<Menu
					id="menu-appbar"
					sx={{
						mt: "45px",
					}}
					anchorEl={anchorEl}
					anchorOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					keepMounted
					transformOrigin={{
						vertical: "top",
						horizontal: "right",
					}}
					open={Boolean(anchorEl)}
					onClose={handleCloseMenu}>
					<MenuItem onClick={handleCloseMenu}>Portfolio</MenuItem>
					<MenuItem onClick={handleCloseMenu}>Logout</MenuItem>
				</Menu>
			</Toolbar>
		</AppBar>
	)
}

export default Appbar
