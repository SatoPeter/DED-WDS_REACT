# 關於 Web Design system Storybook

## 關於 AUO Design system

AUO Design system 是一套跨設計與程式的設計系統，採用原子化設計架構，透過拆解與建構的方法達成高擴充性的元件組成與應用。AUO Design system 透過簡單的安裝即可直接使用。

## 安裝前確認

### 確認相容於以下版本

1. "react": "19.0.0"
2. "sass": "^1.81.0",
3. "vite-plugin-svgr": "^4.3.0"

## 安裝方式

### 步驟一：建立開發環境

- 創建專案資料夾。

```shell
npm create vite@latest
```

- 設定專案資料夾名稱

```
Project name: my_project
```

- 選擇使用的框架

```
react
```

- 選擇開發語言

```
typescript
```

- 進入專案資料夾

```shell
cd my_project
```

### 步驟二：安裝相依套件

- 開啟建立的專案

- 開啟 package.json 設定檔並新增 SASS 及 SVGR 到 devDependencies :

```json
"sass": "^1.81.0",
"vite-plugin-svgr": "^4.3.0"
```

- 安裝 SASS 及 SVG 相關套件

```shell
npm install
```

- 增加 vite config plugins svgr() 項目

```js
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [svgr()],
});
```

- 在 TypeScript 的 tsconfig.app.json 中，compilerOptions.types 是用來指定要包含的型別定

```json
"compilerOptions": {
  "types": ["vite-plugin-svgr/client"],
}
```

- 建立 .npmrc 設定檔

- 開啟 .npmrc 檔貼上 registry 路徑，並儲存

```shell
@ded-wds:registry=https://asia-east1-npm.pkg.dev/auo-ded/npm-hub/
```

- 執行 npm install 安裝 WDS 套件

```shell
npm install @ded-wds/ui@latest
```

### 步驟三：放入相關資源並引用 SCSS 檔

- 下載 [source.zip](https://storage.googleapis.com/ded-wds-bucket/source.zip)

- 移除專案預設樣式 (App.css、index.css)、移除預設匯入 css 檔

- 複製 source 內相關資料夾至 src 資料夾並且取代

- 在進入點的檔案（App.tsx）引用「globals.scss」

```tsx
import './style/globals.scss';
```

### 步驟四：開始開發

- 執行 npm 開啟環境進行開發

```shell
npm run dev
```

- 打開 Design system Storybook（Vue 版、React 版）選擇所需

## 相關套件、資源

Design system 為提供便利的功能，部分常見元件採用功能完善的第三方套件以加快開發時程。

- 日期選取器： [Vanilla JS Datepicker](https://github.com/mymth/vanillajs-datepicker?tab=readme-ov-file)

- 檔案上傳： [uppy file upload](https://uppy.io/)

- 圖示： [Google material icons](https://fonts.google.com/icons)

- SASS CSS 預處理器： [SASS](https://sass-lang.com/)

- SVGR: [vite-plugin-svgr](https://github.com/pd4d10/vite-plugin-svgr)

## 範例下載

## 使用方式
