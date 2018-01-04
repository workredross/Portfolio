var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
module.exports = {
    entry: [
      'script!jquery/dist/jquery.min.js',
      './public/app.js'
    ],
    externals:{
      jquery:'jQuery'
    },
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
        CardsCSS: 'public/styles/Cards.css' ,
        InputCSS: 'public/styles/Input.css',
        InputJS: 'public/js/Input.js',
        AfterNameSubmitJS: 'public/js/AfterNameSubmit.js',
        ArrowDownCSS: 'public/styles/ArrowDown.css',
        BodyCSS: 'public/styles/Body.css',
        DisplayNameCSS: 'public/styles/DisplayName.css',
        LatLong: 'public/components/Lat&Long.jsx',
        OpenWeatherAPI: 'public/API/OpenWeatherAPI.jsx',
        NavBarCSS: 'public/styles/NavBar.css',
        NavBarJS: 'public/js/NavBar.js',
        SkillsCSS:'public/styles/Skills.css',
        FormSubmitJS : 'public/js/FormSubmit.js',
        InputFormCSS: 'public/styles/InputForm.css',
        SocialMediaCSS: 'public/styles/SocialMedia.css',
        BlogCSS: 'public/styles/Blogs.css'
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
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ]
};
