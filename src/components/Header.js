import React from 'react'
import { Link } from 'react-router-dom'


export default function Header() {
	return (
		<>
			<header id="header">
				<div className="inner">
					<Link to="/" className="logo" > <img src={require('../images/logo.png')} alt="Angela Logo" /> </Link>
                    
					<h2><Link to="/Agendamento">Agendamento</Link></h2>
				</div>
			</header>
		</>
	)
}