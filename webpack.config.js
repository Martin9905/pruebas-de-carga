module.exports = {
    mode: 'production',
    entry: {  index: './stress-test/escenario-1.js'},
    output: {
        path: __dirname + '/dist',
        filename: 'test.main.js',
        libraryTarget: 'commonjs'
    },
    module: {
        rules: [
            { test: /\.js$/, use: 'babel-loader' },
        ]
    },
    stats: {
        colors: true,
    },
    target: "web",
    externals: /k6(\/.*)?/,
    devtool: 'source-map',
}