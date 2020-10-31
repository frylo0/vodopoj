const path = require('path'),
  webpack = require('webpack'),
  factory = require('./webpack.factory'),
  { CleanWebpackPlugin } = require('clean-webpack-plugin'),
  CopyWebpackPlugin = require('copy-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin');

const { mode, HtmlWebpackPlugins, entries } = factory({
  pagesSrc: './src/Pages/',
});

console.log(`MODE: ${mode}`);

const config = {
  entry: entries, //entry points of project
  output: {
    filename: mode == 'development' ? '[name].bundle.js' : '[name].[hash].js', //main -> main.bundle.js
    path: path.resolve(__dirname, 'dist'), //target folder
  },
  plugins: [
    new CleanWebpackPlugin(), //dist folder clean up
    ...HtmlWebpackPlugins,
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/Root', to: '' },
      ],
    }),
    new MiniCssExtractPlugin({ //scss compilation //./dist/index.css
      moduleFilename: ({ name }) => {
        return mode == 'development' ? `${name}.bundle.css` : '[name].[hash].css';
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
              // only enable hot reloading in development
              hmr: mode === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
            },
          },
          {
            loader: 'css-loader', //CSS to CommonJS, make possible require and import css files in js files
            options: {
              url: false, //don't resolve url links in css files
            }
          },
          'postcss-loader', //added to use autoprefixer
        ]
      },
      {
        test: /\.s[ac]ss$/, //prosessing of sass
        use: [
          'style-loader', //put css text as style tags on page, css won't be applied without it
          {
            loader: MiniCssExtractPlugin.loader, // store css to files in ./dist
            options: {
              // only enable hot reloading in development
              hmr: mode === 'development',
              // if hmr does not work, this is a forceful method.
              reloadAll: true,
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
      {
        test: /\.(png|svg|jpe?g|gif)$/, //proccessing of images
        loader: 'file-loader', //move files to ./dist folder
        options: {
          name: './attach/img/[name].[ext]' //way to files in destination and there names
        }
      },
      {
        test: /\.(ttf|woff|woff2|eot|otf)$/, //processing fonts
        loader: 'file-loader', //move files to ./dist folder
        options: {
          name: './attach/font/[name].[ext]' //way to files in destination and there names
        }
      },
      {
        test: /\.pug$/, //processing pug
        use: ['pug-loader'] //HtmlWebpackPlugin use this rule to process .pug files
      },
      {
        test: /\.mp3$/,
        loader: 'file-loader', //move files to ./dist folder
        options: {
          name: './attach/music/[name].[ext]' //way to files in destination and there names
        }
      },
      {
        test: /\.mp4$/,
        loader: 'file-loader', //move files to ./dist folder
        options: {
          name: './attach/video/[name].[ext]' //way to files in destination and there names
        }
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