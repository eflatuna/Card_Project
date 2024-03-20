import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import CardTotal from "../components/CardTotal";
import axios from "axios";

const ProductList = () => {
	const BASE_URL = "https://65f02ffada8c6584131b0e65.mockapi.io/api/Checkout";
	const [produkte, setProdukte] = useState([]);
	const [error, setError] = useState(false);
	const [loading, setLoading] = useState(true);

	const getData = async () => {
		try {
			const { data } = await axios(
				"https://65f02ffada8c6584131b0e65.mockapi.io/api/Checkout"
			);
			// console.log(data);
			setProdukte(data);
		} catch (err) {
			setError(true);
		} finally {
			setLoading(false);
		}
	};
	useEffect(() => {
		getData();
	}, []);
	if (error) {
		return <p>Something went wrong...</p>;
	}
	return (
		<div className="container mt-3">
			<div className={"bg-light d-sm-block d-md-flex"}>
				{loading ? (
					<p className="text-center text-danger w-100">Loading....</p>
				) : (
					<>
						<article id="product-panel" className="col-md-6">
							{produkte.map((product) => (
								<ProductCard
									key={product.id}
									product={product}
									getData={getData}
								/>
							))}
						</article>
						<article className="col-md-4 m-3">
							<CardTotal products={produkte} />
						</article>
					</>
				)}

				{/* <p className="text-center text-danger w-100">
					No products data...
				</p> */}
			</div>
		</div>
	);
};

export default ProductList;
