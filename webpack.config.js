const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')


module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new WebpackPwaManifestPlugin({
      filename: 'manifest.webmanifest',
      name: 'Petgram - Your pet photos app',
      shortname: 'Petgram -🐱',
      description: 'Find pet photos and use it as wallpaper',
      background_color: '#fff',
      theme_color: '#8d00ff',
      prefer_related_applications: true,
      icons: [
        {
          src: path.resolve('src/Assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          purpose: 'maskable any',
        }
      ]
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      // maximumFileSizeToCacheInBytes: 5000000,
      runtimeCaching: [
        {
          urlPattern: new RegExp('https://(res.cloudinary.com|images.unsplash.com)'),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          }
        },
        {
          urlPattern: new RegExp('https://vercel.com/alejandroverita/petgram-server-alejandroverita/7XSUtLDHMkxBWPnto3J12Efs2bs8'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'api',
          }
        }
      ]
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ]
          }
        }
      },
    ]
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    historyApiFallback: true,
    
  }
}
