import { Box } from "@mui/material"
import { useLoaderData } from "react-router-dom"
import { CoinDetail } from "../App"
import { CryptoListItem } from "./CryptoList"

// interface ITop100ListingsProps {
//   data
// }

const Top100Listings = () => {
	const loaderData = useLoaderData() as CoinDetail[]
	return (
		<Box>
			<ul style={{ listStyleType: "none", width: "100%", height: "700px" }}>
				{loaderData.map((stuff, index) => {
					const { id } = stuff
					return (
						<li key={id}>
							<CryptoListItem coinListData={stuff} ranking={index + 1} />
						</li>
					)
				})}
			</ul>
		</Box>
	)
}

export default Top100Listings
