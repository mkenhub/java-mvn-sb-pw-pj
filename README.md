# Java Spring Boot + Playwright サンプル

Thymeleafで簡単な画面(`/hello-page`)を表示し、`/hello` API を呼び出すボタンを用意。Playwright(TypeScript)でE2Eテストを実行します。

## 前提
- Java 25+ / Maven Wrapper
- Node.js 18+ / npm

## バックエンド起動
```bash
./mvnw spring-boot:run
```

## Playwright セットアップ (ui-tests/ 配下)
```bash
cd ui-tests
npm install
npx playwright install chromium
```

## テスト実行 (アプリが `http://localhost:8080` で起動している前提)
```bash
cd ui-tests
npm run test:e2e      # ヘッドレス
npm run test:e2e:headed  # 画面付き
```
レポート確認:
```bash
cd ui-tests
npx playwright show-report
```

`BASE_URL` 環境変数でテスト対象URLを上書きできます。
