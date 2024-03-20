import React from "react";

import image2 from "../assets/photo_2024-03-19_16-10-33.jpg";
import image3 from "../assets/photo_2024-03-19_16-10-50.jpg";
import image4 from "../assets/photo_2024-03-19_16-11-00.jpg";
import image5 from "../assets/photo_2024-03-19_16-13-11.jpg";
import { useNavigate } from "react-router-dom";

const Main = () => {
	const navigate = useNavigate();
	return (
		<div>
			<>
				<div
					id="carouselExampleCaptions"
					className="carousel slide"
					data-bs-ride="carousel"
				>
					<div className="carousel-indicators"></div>
					<div className="carousel-inner">
						<div
							className="carousel-item active"
							data-bs-interval={10000}
						>
							<img src={image4} className="d-block  " alt="..." />
							<div className="carousel-caption d-none d-md-block">
								<h1>Tech Innovations Await You!</h1>
								<p>
									Immerse yourself in a world of cutting-edge
									technology and innovation. From sleek
									smartphones to powerful smart home devices,
									we curate the latest and greatest gadgets to
									enhance every aspect of your life.
								</p>
								<div className="buttons">
									<button
										className="btn btn-primary m-1"
										onClick={() => navigate("/products")}
									>
										Shop Now
									</button>
									<button
										className="btn btn-primary m-1"
										onClick={() => navigate("/new-product")}
									>
										Add New Product
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<main>
					<section id="about" className="container bg-light" p-3="">
						<h1 className=" text-center display-6 mt-5 main_text">
							Unbeatable Tech, Unbelievable Prices
						</h1>
						<p className="text-center">
							Welcome to Gadget Groove, your go-to destination for
							cutting-edge gadgets and tech essentials at prices
							that defy the ordinary. We believe that everyone
							deserves access to the latest innovations without
							breaking the bank. We have curated a collection of
							must-have gadgets that redefine value and elevate
							your tech experience.
						</p>
						<div className="row text-center justify-content-center mt-5">
							<div className="col col sm-12 col-md-6 col-lg-4">
								<i className="fas fa-globe-americas fa-2x" />
								<h4>Visual Entertainment</h4>
								<img
									className="product_img"
									src={image2}
									alt=""
								/>
							</div>
							<div className="col col sm-12 col-md-6 col-lg-4">
								<i className="fas fa-headset fa-2x" />

								<h4>Portable Tech</h4>
								<img
									className="product_img"
									src={image3}
									alt=""
								/>
							</div>
							<div className="col sm-12 col-md-6 col-lg-4">
								<i className="fas fa-book-open fa-2x" />

								<h4>Tech for Productivity</h4>
								<img
									className="product_img"
									src={image5}
									alt=""
								/>
							</div>
						</div>
					</section>

					<section
						id="instructors"
						className="container bg-light p-2"
					>
						<h1 className=" text-center mt-5 display-6 main_text ">
							Shop by Our Category
						</h1>
						<div className="row g-3 justify-content-center">
							<p className="text-center">
								We bring you the latest and most innovative
								gadgets across various categories. Explore our
								curated collections and find the tech solutions
								that suit your needs. Shop by category and
								embark on a journey of discovery in the world of
								technology!
							</p>
						</div>
					</section>
				</main>
			</>
		</div>
	);
};

export default Main;
