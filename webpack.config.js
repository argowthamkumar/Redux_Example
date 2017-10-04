var config = {
   entry: './src/js/App.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7007
   },
	
   module: {
      loaders: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
				
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
}

module.exports = config;