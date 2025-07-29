# 334 Clock 

334 Clock は、PCの現在時刻を参照し、ミリ秒単位まで表示する時計です。リューズを用いて表示時刻を調整することができます。  
Vue 3 + Vite + TypeScript + Vue I18n で開発しています。

---

## 目次

1. [機能概要](#機能概要)  
2. [対応ブラウザ](#対応ブラウザ) 
3. [Chromeウェブストアからのセットアップ](#Chromeウェブストアからのセットアップ)   
4. [ソースコードからのセットアップ](#ソースコードからのセットアップ)  

---

## 機能概要

- 現在時刻をPCが持つ時刻を参照して表示（ミリ秒まで）  
- 時刻の進み／遅れをミリ秒単位で調整可能  
- 多言語表示に対応 ( 日本語 / English) 
- 拡張機能を開いたままテキストを入力できるように、Chrome サイドパネルに時計を表示させています。

---


## 対応ブラウザ（

- Chromium ベースのブラウザ（  
　Chrome 138  
　Edge 138  
　Vivaldi 7.5  
　）で動作確認済み  

---

## Chromeウェブストアからのセットアップ

1. Chrome ウェブストアへアクセス  (審査待ち)  
2. 「Chrome に追加」ボタンをクリック

## ソースコードからのセットアップ

```bash
# リポジトリをクローン
git clone https://github.com/miz77/334-clock.git
cd 334-clock

# 依存インストール
npm install
# or
yarn install

# ② Vue I18n プラグインのインストール
npm install vue-i18n@next
#   または
yarn add vue-i18n@next


# ビルド
npm run build
# or
yarn build
```

chrome://extensions/ からデベロッパーモードを有効にした上で、ビルド済みフォルダ (dist/) を読み込んでご利用ください。