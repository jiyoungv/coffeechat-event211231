import React from 'react';
import GlobalStyle from './styles/GlobalStyle';
import { Layouts } from './styles/Common';
// import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';
import Hint from './components/Hint';
import Quiz from './components/Quiz';
import Link from './components/Link';

const App = () => {
	return (
		<>
			<GlobalStyle />
			{/* <Header /> */}
			<Layouts>
				<Hero />
				<Info />
				<Hint />
				<Quiz />
				<Link />
			</Layouts>
		</>
	);
};

export default App;