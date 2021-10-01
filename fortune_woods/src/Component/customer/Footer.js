import react from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <footer class="bg-dark text-light text-center text-md-left mt-3">
	<div class="container">
		<div class="row pt-4">
			<div class="col-sm-6 col-md-3 pb-4">
				<h5 class="mb-2">
					Categories
				</h5>
				<ul class="list-unstyled">
					<li>
						<Link class="text-light text-decoration-none" to="/Table">Table</Link>
					</li>
					<li>
					    <Link class="text-light text-decoration-none" to="/Chair">Chair</Link>
					</li>
					<li>
					    <Link class="text-light text-decoration-none" to="/Sofa">Sofa</Link>
					</li>
				</ul>
			</div>
			
			<div class="col-sm-6 col-md-3 pb-4">
				<h5 class="mb-2">
					Shopping
				</h5>
				<ul class="list-unstyled">
				    <li>
					    <Link class="text-light text-decoration-none" to="/Register">Register</Link>
					</li>
					<li>
					    <Link class="text-light text-decoration-none" to="/Login">Login</Link>
					</li>
					<li>
					    <Link class="text-light text-decoration-none" to="/Cart">View Cart</Link>
					</li>
					
				</ul>
			</div>

			<div class="col-sm-6 col-md-3 pb-4">
				<h5 class="mb-2">
					Quick Links
				</h5>
				<ul class="list-unstyled">
					<li>
					    <Link class="text-light text-decoration-none" to="/About">About Us</Link>
					</li>
					
				</ul>
			</div>
			<div class="col d-flex justify-content-center mb-4">
			<a href="#" class="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-facebook-m.png" alt="Facebook" /></a><a href="#" class="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-twitter-m.png" alt="Twitter" /></a><a href="#" class="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-instagram-m.png" alt="Instagram" /></a><a href="#" class="d-block px-3"><img src="https://cdnjs.cloudflare.com/ajax/libs/webicons/2.0.0/webicons/webicon-linkedin-m.png" alt="Linkedin" /></a>
		    </div>
		</div>
		<hr className="mt-2 mb-3"/>
	</div>
	<div class="text-center p-4">
    © 2021 Copyright: 
    <Link class="text-reset fw-bold text-decoration-none" to="/"> fortune_woods.com</Link>
  </div>
</footer>
    );
}
export default Footer;