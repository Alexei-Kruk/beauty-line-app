module: {
    rules: [
        {
            test: /\.svg$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'images/'
                    }
                }
            ]
        }
    ]
}