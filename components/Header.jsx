import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
	return (
		<header className="py-8 x;:py-12 text-white ">
			<div className="container mx-auto flex justify-between items-center">
				{/*logo*/}
				<Link href="/">
					<h1 className="text-4xl font-semibold">
						William<span className="text-accent">.</span>
					</h1>
				</Link>

				{/*desktop nav && hire me button*/}
				<div className="hidden xl:flex items-center gap-8">
					<Nav />
					<Link href="/contact">
						<Button>Hire Me</Button>
					</Link>
				</div>
				{/*mobile navigation*/}
				<div className="xl:hidden">
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
