import React from "react";

const About = () => {
	return (
		<div className="container mt-5">
			<div className="row d-flex justify-content-center">
				<div className="col-md-7">
					<div className="card p-3 py-4">
						<div className="text-center"></div>
						<div className="text-center mt-3">
							<h5 className="mt-2 mb-3 about_text">
								Your Tech Journey Begins Here
							</h5>

							<div className="px-4 mt-1">
								<p className="fonts">
									We are tech enthusiasts who believe that
									everyone should have access to cutting-edge
									gadgets without breaking the bank. Our
									mission is to curate a collection of
									innovative tech essentials that cater to
									various lifestyles and preferences. Whether
									you're a tech-savvy professional, a gaming
									enthusiast, or someone just beginning their
									tech journey, we've got something for you.
								</p>
							</div>

							<div className="buttons">
								<button className="btn btn-primary px-4 m-1">
									Message
								</button>
								<button className="btn btn-primary px-4 m-1">
									Contact
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
