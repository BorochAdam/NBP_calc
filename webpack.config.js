//Konfiguracja Webpack
module.exports = {
    entry: "./js/app.jsx",
    output: {
        filename: "./js/out.js"
    },
    devtool:'#eval-source-map',
    watch: true,
    module: {

        loaders: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
    }
}