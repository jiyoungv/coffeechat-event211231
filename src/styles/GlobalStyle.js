import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import { fontFamily } from './Variable';
import { hidden, fontBold } from './Mixin';

const { gilroyR, notoSans } = fontFamily;

const GlobalStyle = createGlobalStyle`
	${reset}
	
	* {
		box-sizing: border-box;
	}

	html {
		scroll-behavior: smooth;
	}

	body {
		font-size: 16px;
		font-family: ${gilroyR}, ${notoSans}, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;		
		font-weight: 400;
		line-height: 1.6;
		letter-spacing: -0.02em;
		color: #000;
		word-break: keep-all;
	}

	article, section, div, figure {
		position: relative;
	}

	figure {
		margin: 0;
	}

	button {
		background: transparent;
		margin: 0;
		padding: 0;
		border: 0;
		font-size: inherit;
		font-weight: inherit;
		font-family: inherit;
		font-style: inherit;
		letter-spacing: inherit;
		line-height: inherit;
		text-align: inherit;
		color: inherit;
		cursor: pointer;

		&:focus {
			outline: none;
		}
	}

	a {
		text-decoration: none;

		&, &:active, &:visited {
			color: #000;
		}
	}

	strong, b {
		${fontBold}
	}
	
	img {
		max-width: 100%;
	}

	.hidden {
		${hidden};
	}
`;

export default GlobalStyle;