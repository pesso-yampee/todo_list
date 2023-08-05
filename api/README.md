==== apiコンテナ内 ====
## モデルクラス作成
```
/**
 * --name: モデルクラス名
 * --attributes: プロパティを設定
 */
npx sequelize-cli model:generate --name Task --attributes name:string,done:boolean
```
## DB作成
```
npx sequelize-cli db:generate
```