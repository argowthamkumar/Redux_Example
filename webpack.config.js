var config = {
   entry: './src/startpoint.js',
	
   output: {
      path:'/',
      filename: 'index.js',
   },
	
   devServer: {
      inline: true,
      port: 7007,
      // Send API requests on localhost to API server get around CORS.
        proxy: {
               '/rest': {
                   target: 'http://localhost:8091',
                   secure: false
               }
           }
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