import React from 'react';
import { Switch, Route, HashRouter } from 'react-router-dom'
import './assets/css/main.css'

import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

import Home from './pages/Home'
import Agendamento from './pages/agendamento/Agendamento'
import Rino from './pages/rino/Rino'
import Proteses from './pages/proteses/Proteses'
import Lipo from './pages/lipo/Lipo'
import Clareamento from './pages/clareamento/Clareamento'
import PreenchimentoFacial from './pages/preenchimentofacial/preenchimentofacial'
import Botox from './pages/botox/Botox'

function App() {
	return (
		<>
			<HashRouter>
				<Header />
				<Banner />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/agendamento" exact component={Agendamento} />
					<Route path="/rino" exact component={Rino} />
					<Route path="/proteses" exact component={Proteses} />
					<Route path="/lipo" exact component={Lipo} />
					<Route path="/clareamento" exact component={Clareamento} />
					<Route path="/preenchimentofacial" exact component={PreenchimentoFacial} />
					<Route path="/botox" exact component={Botox} />
				</Switch>
			</HashRouter>
			<Footer />
		</>
	);
}
export default App;
