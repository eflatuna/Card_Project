import React from "react";
import axios from "axios";

const ProductCard = ({ product, getData }) => {
	const { id, image, name, price, amount } = product;
	const BASE_URL = "https://65f02ffada8c6584131b0e65.mockapi.io/api/Checkout";

	const handleRemove = async () => {
		await axios.delete(`${BASE_URL}/${id}`);
		getData();
	};

	const handleMinus = async () => {
		if (amount > 1) {
			await axios.put(`${BASE_URL}/${id}`, {
				...product,
				amount: amount - 1,
			});
			getData();
		} else {
			handleRemove();
		}
	};

	const handlePlus = async () => {
		await axios.put(`${BASE_URL}/${id}`, {
			...product,
			amount: +amount + 1,
		});
		getData();
	};

	return (
		<div className="card shadow-lg mb-3">
			<div className="row g-0">
				<div className="col-md-5">
					<img
						src={image}
						className="w-100 h-100 rounded-start"
						alt={"name"}
						title={""}
					/>
				</div>
				<div className="col-md-7">
					<div className="card-body">
						<h5 className="card-title" role="button">
							{name}
						</h5>
						<div className="product-price d-flex flex-wrap align-items-center">
							<span className="damping-price text-primary h5 m-1">
								${(price * 0.8).toFixed(2)}
							</span>
							<span className="h5 text-dark text-decoration-line-through m-1">
								${parseFloat(price).toFixed(2)}
							</span>
						</div>
						<div className="border border-1 border-dark shadow-lg d-flex justify-content-center p-2">
							<div className="quantity-controller">
								<button
									onClick={handleMinus}
									className="btn btn-secondary btn-sm"
								>
									<i className="fas fa-minus"></i>
								</button>
								<p
									className="d-inline mx-4"
									id="product-quantity"
								>
									{amount}
								</p>
								<button
									onClick={handlePlus}
									className="btn btn-secondary btn-sm"
								>
									<i className="fas fa-plus"></i>
								</button>
							</div>
						</div>
						<div className="product-removal mt-4">
							<button
								onClick={handleRemove}
								className="btn btn-primary btn-sm w-100 remove-product"
							>
								<i className="fa-solid fa-trash-can me-2"></i>
								Remove
							</button>
						</div>
						<div className="mt-2">
							Product Total: $
							<span className="product-line-price">
								{(price * 0.8 * amount).toFixed(2)}
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
