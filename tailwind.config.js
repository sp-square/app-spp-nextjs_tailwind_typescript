module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',
	],
	darkMode: 'class',
	theme: {
		boxShadow: {
			customLight: '2px 2px 10px #313131',
			customDark: '2px 2px 10px #0a0c0e',
		},
		fontFamily: {
			BilboSwashCaps: ['Bilbo Swash Caps', 'cursive'],
			Montserrat: ['Montserrat', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				microChip: "url('/images/bg_microchip.jpg')",
			},
			listStyleType: {
				square: 'square',
				check: 'check',
			},
			colors: {
				blue: {
					lePois: '#a5ccd4',
					loanMoney: '#3eadcf',
					smallBusiness: '#83eaf1',
				},
				dark: {
					DEFAULT: '#010101',
					100: '#0a0b0e',
					200: '#16181d',
					500: '#0f1115',
					700: '#202125',
				},
				gray: {
					entrepreneurialLiesDark: '#8693ab',
					entrepreneurialLiesLight: '#bdd4e7',
					lePois: '#486771',
				},
				green: {
					awardCeremony: '#94c997',
					cheapCocktail: '#37d5d6',
					jackDorseyStock: '#0cbaba',
					lePois: '#d7edbc',
					loanMoney: '#abe9cd',
					westCoast: '#aff1da',
				},
				pink: {
					awardCeremony: '#daacec',
					lePois: '#efcbb7',
					mothersAdvice: '#fb7ba2',
				},
				purple: {
					cheapCocktail: '#36096d',
					jackDorseyStock: '#380036',
					smallBusiness: '#63a4ff',
				},
				red: {
					freeFood: '#f53803',
				},
				yellow: {
					freeFood: '#f5d020',
					mothersAdvice: '#fce043',
					westCoast: '#f9ea8f',
				},
			},
		},
	},
	variants: {
		extend: {
			boxShadow: ['dark'],
		},
	},
	plugins: [],
};
