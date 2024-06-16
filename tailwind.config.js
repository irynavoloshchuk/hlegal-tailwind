/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./app/**/*.{html,js}"],
	theme: {
		extend: {
			fontFamily: {
                'montserrat': ['Montserrat']
			},
			backgroundImage: {
				'gradient-text': 'linear-gradient(90.13deg, #F0145A 0.84%, #EF8080 99.96%)',
			  },
			  backgroundClip: {
				'text': 'text',
			  },
			  textFillColor: {
				'transparent': 'transparent',
			  },
			  fontSize: {
				'38px': '38px',
			  },
			
			

			colors: {
				greybg: '#f5f5f5',
				maincolor: '#323264',
				grey: '#B3B3BA',
				regular: '#24A3FF',
				active: '#0085FF',
				orange: '#EC6F5D'




			},
		},
	},
	plugins: [
		function ({ addUtilities }) {
			addUtilities({
			  '.gradient-text': {
				'background-image': 'linear-gradient(90.13deg, #F0145A 0.84%, #EF8080 99.96%)',
				'-webkit-background-clip': 'text',
				'-webkit-text-fill-color': 'transparent',
				'background-clip': 'text',
				'text-fill-color': 'transparent',
			  },
			});
		  },
	
	],
}

