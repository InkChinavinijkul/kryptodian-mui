import { CoinDetail } from "../App"
import { truncateDecimal } from "../utilities/utilities"

export const CryptoListItem = ({
	coinListData,
	ranking,
}: {
	coinListData: CoinDetail
	ranking: number
}) => {
	const { name, symbol, quote, logo } = coinListData

	return (
		<div
			style={{
				width: "100%",
				backgroundColor: "darkgray",
				color: "white",
				display: "flex",
				gap: 10,
			}}>
			<div>{ranking}</div>
			<div>
				<img src={logo} alt="" style={{ width: "24px" }} />
			</div>
			<div>{name}</div>
			<div>{symbol}</div>
			<div>{truncateDecimal(quote.USD.price)}</div>
		</div>
	)
}
