import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";


export const Navbar = () => {
	const { store, actions } = useContext(Context)
	console.log(store.favorites)
	return (
		<nav className=" navbar navbar-light bg-light mb-3">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1"><img src="https://i.pinimg.com/564x/59/df/d8/59dfd84c3c179b71e38da0280513504b.jpg" style={{ width: 80, height: 50 }}></img></span>
				</Link>
				<div className="ml-auto">
					<div class="dropdown">
						<a class="btn btn-black text-black dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</a>
						<ul className="dropdown-menu">
							{store.favorites.map((item, index) => {
								return <li key={index}><a className="dropdown-item" href="#">
									<span onClick={() => { actions.deleteFavorites(item) }}> X </span>
									{item}
								</a></li>
							})}
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};
