import React from "react";
import household from "../../assets/household.jpg";
import beauty from "../../assets/beauty.jpg";
import knitting from "../../assets/knitting.jpg";
import sewing from "../../assets/sewing.jpg";
import { Link } from 'react-router-dom';
import "./HomePage.css";

const HomePage = () => {
	return (
		<div className="homePage">
			<div className="Title">
				<h1>DIY</h1>
				<h1>Les Lémus en folie</h1>
			</div>
			<div className = "Welcome">
				<h2>Bienvenue</h2>
				<p>Les lémuriens sont heureux de vous faire découvrir les produits découverts et testés par nos soins.
					Vous pourrez retrouver les liens vers les recettes / tutos des divers produits.
				</p>
				<p>Profitez-bien et amusez vous !</p>
			</div>
			<div className = "Link1">
				<div className="Products-group">
					<Link to="/entretien" className="logo-links">
						<img className = "Household" src={household} alt="household" />
					</Link>
					<p>Produits ménagers</p>
				</div>
				<div className="Products-group">
					<Link to="/beaute" className="logo-links">
						<img className = "Beauty" src={beauty} alt="beauty" />
					</Link>
					<p>Produits de beauté</p>
				</div>
			</div>
			<div className = "Link1">
				<div className="Products-group">
					<Link to="/tricot" className="logo-links">
						<img className = "Knitting" src={knitting} alt="knitting" />
					</Link>
					<p>Tricot</p>
				</div>
				<div className="Products-group">
					<Link to="/couture" className="logo-links">
						<img className = "Sewing" src={sewing} alt="sewing" />
					</Link>
					<p>Couture</p>
				</div>
			</div>
		</div>
	)
}

export default HomePage;