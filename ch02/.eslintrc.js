module.export = {
    root: true,  // このファイルがある場所がプロジェクトのルートかどうか
    parser: '@typescript-eslint/parser',  // eslintがTSを理解できるようにパッケージを指定
    parseOptions: {
        project: './tsconfig.json'  // tsconfig.jsonの場所
    },
    plugins: [
        '@typescipt-eslint'
    ],
    extends: [ // 外部の設定ファイルの設定を有効にする  後に書いた順に上書きされる
        'eslint:recommend', 
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ]
}