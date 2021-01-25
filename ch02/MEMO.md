# TypeScript: 全体像
## Node.js環境におけるTS開発環境の構築手順
1. プロジェクトのルートディレクトリで`npm init`
2. 必要なパッケージをインストールその①`npm install --save-dev typescript @types/node`（TSC、型宣言用のNode.jsをインストール）
3. ルートディレクトリで`tsconfig.json`の設定（出力先、コンパイル後のJSのバージョンなど）
4. 必要なパッケージをインストールその②`npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser`（ESLint、TS用のESLintプラグイン、ESLintにTSを理解させるためのパーサ）
5. ルートディレクトリで`.eslintrc.js`の設定（ESLintの諸設定）
4. TSファイルに記述
5. `npx tsc`または`./node_modules/.bin/tsc`でコンパイル
6. 生成されたJSファイルを`node`で実行

- `ts-node`モジュールを使うことでコンパイルと実行を一気に行うことが出来る
