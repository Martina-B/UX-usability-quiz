import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface Palette {
		contrast?: string;
	}
	// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
	interface PaletteOptions {
		contrast?: string;
	}
}

const theme = createTheme({
	palette: {
		primary: { main: '#2B2D42' }, //black-ish
		secondary: { main: '#EDF2F4' }, //white-ish
		contrast: '#FFDB1D', //yellow-ish

		text: {
			primary: '#2B2D42'
		}
	}
});

export default theme;
