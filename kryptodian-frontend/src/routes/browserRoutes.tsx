import { createBrowserRouter } from "react-router-dom"
import MainLayout from "./MainLayout"
import LoginLayout from "./LoginLayout"
import ErrorPage from "../Error/ErrorPage"
import Top100Listings from "../components/Top100Listings"
import Login from "../components/Login"
import Portfolio from "../components/Portfolio"

export const router = createBrowserRouter([
	{
		path: "/",
		element: <MainLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{
						index: true,
						element: <Top100Listings />,
						loader: async () => {
							return fetch("http://localhost:3000")
						},
					},
					{
						path: "/",
						element: <Top100Listings />,
						loader: async () => {
							return fetch("http://localhost:3000")
						},
					},
					{
						path: "/portfolio",
						element: <Portfolio />,
					},
				],
			},
		],
	},
	{
		element: <LoginLayout />,
		errorElement: <ErrorPage />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
		],
	},
])
