module.exports = {
	entry : './assets/js/entry.js',
	output: {
		path: __dirname + '/assets/',
    	publicPath: "/assets/",
    	filename: 'bundle.js'
	},
	module: {
	  	loaders: [{ 
	  		test: /\.jsx?$/, 
	  		exclude: /node_modules/,
	    	loader: 'jsx-loader?harmony'}
  		]
	}
}