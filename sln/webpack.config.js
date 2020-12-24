const path = require('path'),
  webpack = require('webpack'),
  factory = require('./webpack.factory'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { mode, entries } = factory({
  pagesSrc: './src/Pages/',
});

console.log(`MODE: ${mode}\n`);

const config = {
  entry: entries, //entry points of project
  output: {
    filename: (pathData, assetInfo) => {
      //console.log('path data:', pathData);
      //console.log('asset info:', assetInfo);
      const targetFolder = './src/Pages/[name]/dist/';
      return targetFolder + '[name].bundle.js';
      //if (mode == 'development') {
      //} else {
      //  return targetFolder + '[name].[hash].js';
      //}
    },
    path: path.resolve(__dirname), //target folder
  },
  plugins: [
    new MiniCssExtractPlugin({ //scss compilation //./dist/index.css
      filename: ({ name }) => {
        //return mode == 'development' ? `${name}.bundle.css` : '[name].[hash].css';
        return './src/Pages/[name]/dist/[name].css';
      },
    }),
    new webpack.ProvidePlugin({ //connecting jquery
      $: 'jquery',
      jQuery: 'jquery',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/, //prosessing of sass
        use: [
          'style-loader', //put css text as style tags on page, css won't be applied without it
          {
            loader: MiniCssExtractPlugin.loader, // store css to files in ./dist
            options: {
            //  // only enable hot reloading in development
            //  hmr: mode === 'development',
            //  // if hmr does not work, this is a forceful method.
            //  reloadAll: true,
              esModule: false, // fix warnings
            },
          },
          {
            loader: 'css-loader', //CSS to CommonJS, make possible require and import css files in js files
            options: {
              url: false, //don't resolve url links in css files
            }
          },
          'postcss-loader', //added to use autoprefixer
        ],
      },
      {
        test: /\.s[ac]ss$/, //prosessing of sass
        use: [
          'style-loader', //put css text as style tags on page, css won't be applied without it
          {
            loader: MiniCssExtractPlugin.loader, // store css to files in ./dist
            options: {
            //  // only enable hot reloading in development
            //  hmr: mode === 'development',
            //  // if hmr does not work, this is a forceful method.
            //  reloadAll: true,
              esModule: false, // fix warnings
            },
          },
          {
            loader: 'css-loader', //CSS to CommonJS, make possible require and import css files in js files
            options: {
              url: false, //don't resolve url links in css files
            }
          },
          'postcss-loader', //added to use autoprefixer
          'sass-loader', //complie SASS to CSS
        ]
      },
    ]
  }
};

const development = {
  devtool: 'inline-source-map', //js debugger
  devServer: {
    contentBase: './dist', //localhost root folder
    open: true, //open in this browser
    host: '0.0.0.0',
  },
  watch: true,
};

const production = {

};

if (mode == 'development')
  factory.objectMerge(config, development);
else {
  factory.objectMerge(config, production);
  config.module.rules.push({
    test: /\.m?js$/,
    loader: 'babel-loader',
  });
}

factory.exclude(config, ['node_modules', 'dist']);

//console.log(config);

module.exports = config; 