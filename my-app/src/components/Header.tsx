import { Container, Navbar, NavbarBrand } from "reactstrap";


const Header = () => {

	return (
		<Navbar color="dark" dark expand="md">
				<Container fluid>
						<NavbarBrand href="/">Covid Dashboard</NavbarBrand>
				</Container>
		</Navbar>
	)
} 

export default Header;