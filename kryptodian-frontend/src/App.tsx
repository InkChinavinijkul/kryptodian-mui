import { Suspense, useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import { CryptoListItem } from "./components/CryptoList"
import Appbar from "./components/Appbar"
import LoadingPage from "./Loading/Loading"
import { RouterProvider } from "react-router-dom"
import { router } from "./routes/browserRoutes"
// import "./App.css"

export interface CoinDetail {
	id: number
	name: string
	symbol: string
	logo: string
	maxSupply: number
	circulatingSupply: number
	platform: string | null
	quote: {
		USD: {
			price: number
			volume24h: number
			volumeChange24h: number
			percentChange1h: number
		} & {
			[key: string]: number | null | string
		}
	}
}

function App() {
	const [count, setCount] = useState(0)
	const [data, setData] = useState<CoinDetail[]>([])
	useEffect(() => {
		fetch("http://localhost:3000")
			.then((response) => response.json())
			.then((data) => {
				// console.log(data)
				// const newData = data.map((stuff: Partial<CoinDetail>) => {
				// 	console.log(stuff.quote)
				// 	return {
				// 		id: stuff.id,
				// 		name: stuff.name,
				// 		symbol: stuff.symbol,
				// 		maxSupply: stuff.maxSupply,
				// 		circulatingSupply: stuff.circulatingSupply,
				// 		platform: stuff.platform,
				// 		quote: structuredClone(stuff.quote),
				// 	}
				// })
				// setData(newData)
				console.log(data)
				setData(data)
				// Update your React component state with the fetched data
			})
			.catch((error) => console.error("Error:", error))
	}, [])

	// (
	//           const {id, name, symbol, price} = stuff
	//           return (
	//             <li>{``}</li>
	//             )

	return (
		<Suspense fallback={<LoadingPage />}>
			<RouterProvider router={router} />
			{/* <div
				id="appbar"
				style={{ display: "flex", justifyContent: "center", width: "100vw" }}>
				<ul>
					<li>
						<img
							src="https://kryptodian.com/wp-content/uploads/2022/03/Logo-white.svg"
							alt="kryptodian"
						/>
					</li>
					<li style={{ justifySelf: "flex-end" }}>
						<a className="active" href="#home">
							Home
						</a>
					</li>
					<li style={{ justifySelf: "flex-end" }}>
						<a href="#news">News</a>
					</li>
					<li style={{ justifySelf: "flex-end" }}>
						<a href="#contact">Contact</a>
					</li>
					<li style={{ justifySelf: "flex-end" }}>
						<a href="#about">About</a>
					</li>
				</ul>
			</div> */}
			{/* <Appbar />
			<div style={{ overflow: "auto" }}>
				
			</div> */}
		</Suspense>
	)
}

export default App
