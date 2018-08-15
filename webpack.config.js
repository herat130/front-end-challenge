const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: ["./src/index.tsx", './src/css/style.css'],
        vendor: [
            'bootstrap/dist/css/bootstrap.min.css',
            'react',
            'react-dom',
        ]
    },
    output: {
        filename: "[name]-[hash].js",
        path: __dirname + "/dist"
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunksSortMode: packageSort(['vendor', 'main']),
            template: __dirname + "/index.html",
        }),
        //Automatically load modules instead of having to import or require them everywhere
        // new webpack.ProvidePlugin({
        //     react: 'react',
        // })
    ],
    mode: "development",
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",
    devServer: {
        port: 9000,
        compress: true,
        allowedHosts: [
            'localhost',
        ],
        hot: true
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" },
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loader: 'tslint-loader'
            },
            {
                test: /\.(png|jp(e*)g|svg)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 16000, // Convert images < 16kb to base64 strings
                        name: 'images/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead. like Window.React= React etc.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.

    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};

function packageSort(packages) {
    return function sort(left, right) {
        var leftIndex = packages.indexOf(left.names[0]);
        var rightIndex = packages.indexOf(right.names[1]);
        if (leftIndex > rightIndex) {
            return 1;
        }
        return -1;
    }
}