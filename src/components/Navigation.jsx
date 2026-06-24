import Link from "next/link";
import NavLink from "./NavLink";
const Navigation = () => {
	return (
		<div className="navigation-wraper">
			<nav className="navigation">
				<NavLink href="/" className="nav-link">
					Главная
				</NavLink>
				<NavLink href="/about" className="nav-link">
					Обо мне
				</NavLink>
				<NavLink href="/portfolio" className="nav-link">
					Портфолио
				</NavLink>
				<NavLink href="/contacts" className="nav-link">
					Контакты
				</NavLink>
			</nav>
		</div>
	);
};

export default Navigation;
