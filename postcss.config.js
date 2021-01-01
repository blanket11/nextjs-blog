module.exports = {
    plugins:

        // 本番書き出しで分岐させたい場合の例
        process.env.NODE_ENV === 'production'
            ? [
                // flex周りのプロパティの指定方法によるバグを回避する
                'postcss-flexbugs-fixes',

                // 基本設定
                [
                    // 今後ブラウザに実装されていくもの、既に一部のブラウザで実装済みのものを利用する
                    // 具体的にはhttps://preset-env.cssdb.org/featuresで確認可能
                    'postcss-preset-env',
                    {
                        autoprefixer: {
                            flexbox: 'no-2009'
                        },
                        stage: 3,
                        features: {
                            'custom-properties': false
                        }
                    }
                ]
            ]
            : [
                // No transformations in development
            ]
};