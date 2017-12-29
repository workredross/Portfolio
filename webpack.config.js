var webpack = require('webpack');
  module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      './public/app.js'
    ],
    externals:{
      jquery:'jQuery'
    },
    plugins:[
      new webpack.ProvidePlugin({
        '$': 'jquery',
        'jQuery': 'jquery'
      })
    ],
    output: {
      path: __dirname,
      filename: './public/bundle.js'
    },
    resolve: {
      root:__dirname,
      alias: {
        Name: 'public/components/Name.jsx',
        DisplayName: 'public/components/DisplayName.jsx',
        LoaderCSS: 'public/styles/Loader.css',
        InputCSS: 'public/styles/Input.css',
        InputJS: 'public/js/Input.js',
        AfterNameSubmitJS: 'public/js/AfterNameSubmit.js',
        ArrowDownCSS: 'public/styles/ArrowDown.css',
        BodyCSS: 'public/styles/Body.css',
        DisplayNameCSS: 'public/styles/DisplayName.css',
        LatLong: 'public/components/Lat&Long.jsx',
        OpenWeatherAPI: 'public/API/OpenWeatherAPI.jsx',
        NavBarCSS: 'public/styles/NavBar.css',
        NavBarJS: 'public/js/NavBar.js'
      },
      extension: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        },
        test: /\.jsx?$/,
        exclude: /(node_module|bower_components)/
      }
    ]

  }
};
