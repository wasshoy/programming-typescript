# TypeScript: 全体像
## Node.js環境におけるTS開発環境の構築手順
1. プロジェクトのルートディレクトリで`npm init`
2. ルートディレクトリでtsconfig.jsonの設定（出力先、コンパイル後のJSのバージョンなど）
3. TSファイルに記述
4. `npx tsc`または`./node_modules/.bin/tsc`でコンパイル
5. 生成されたJSファイルを`node`で実行