import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
	return (
		<div>
			<nav className="navbar navbar-expand-lg bg-body-tertiary">
				<div className="container-fluid">
					<span className="navbar-brand text-black h2">
						GADGET GROOVE
					</span>
					<button
						className="navbar-toggler"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div
						className="collapse navbar-collapse"
						id="navbarSupportedContent"
					>
						<ul className="navbar-nav me-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<NavLink
									className="nav-link active"
									aria-current="page"
									to="/"
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/new-product">
									New Product
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/products">
									Product List
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className="nav-link" to="/about">
									About
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
