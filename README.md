# アイ - AIチャットボット 🤖💬

Google Gemini API を使用したリアルタイム会話型チャットボット「アイ」です。親しみやすいUIと自然な日本語会話で、雑談を楽しむことができます。

![Chat Demo](https://img.shields.io/badge/AI-Gemini%202.5%20Flash-blue)
![Deployment](https://img.shields.io/badge/Deploy-Vercel-black)
![Security](https://img.shields.io/badge/Security-Enhanced-green)

## ✨ 特徴

- 🎯 **雑談特化**: 自然で親しみやすい会話を楽しめる
- 🧠 **高品質AI**: Gemini 2.5 Flash モデルによる質の高い応答
- 🎨 **美しいデザイン**: パステル調のグラデーションで優しい印象
- 🔒 **セキュリティ強化**: 適切な入力検証とセキュリティヘッダー
- 📱 **レスポンシブ**: スマートフォンでも快適に利用可能
- ⚡ **高速**: 軽量設計で素早いレスポンス

## 🎬 デモ

🚀 **[ライブデモを試す](https://ai-chatbot-delta-ruby.vercel.app/)**

> **アイ**: こんにちは！わたし、アイです。今日はどんなお話をしましょうか？

チャットボット「アイ」との会話例：
- 日常の雑談や悩み相談
- 趣味や興味のある話題
- 質問や疑問への回答

## 🛠️ 技術スタック

### フロントエンド
- **HTML5** - セマンティックなマークアップ
- **CSS3** - モダンなグラデーションとアニメーション
- **JavaScript (ES6+)** - 非同期通信とDOM操作

### バックエンド
- **Node.js** - サーバーサイドランタイム
- **Express.js** - Webアプリケーションフレームワーク
- **Google Generative AI** - Gemini 2.5 Flash API

### セキュリティ
- **Helmet.js** - セキュリティヘッダーの設定
- **CORS** - クロスオリジンリクエスト制御
- **入力検証** - XSS対策とデータサニタイゼーション

### デプロイメント
- **Vercel** - サーバーレス関数とホスティング
- **GitHub** - ソースコード管理

## 🚀 クイックスタート

### 1. リポジトリのクローン

```bash
git clone https://github.com/hikari-kato/ai-chatbot.git
cd ai-chatbot
```

### 2. 依存関係のインストール

```bash
npm install
```

### 3. 環境変数の設定

`.env.example` を `.env` にコピーして、Gemini APIキーを設定：

```bash
cp .env.example .env
```

`.env` ファイルを編集：

```env
GEMINI_API_KEY=your-gemini-api-key-here
```

### 4. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで `http://localhost:3000` にアクセス！

## 🔑 Gemini APIキーの取得

1. [Google AI Studio](https://ai.google.dev/) にアクセス
2. Googleアカウントでサインイン
3. "Get API Key" をクリック
4. 新しいAPIキーを作成
5. `.env` ファイルに設定

## 📁 プロジェクト構成

```
ai-chatbot/
├── api/
│   └── chat.js          # Vercel Serverless Function
├── public/
│   ├── index.html       # メインHTML
│   └── script.js        # フロントエンドロジック
├── styles/
│   └── main.css         # スタイルシート
├── server.js            # ローカル開発用サーバー
├── package.json         # プロジェクト設定
├── .env.example         # 環境変数テンプレート
└── README.md           # このファイル
```

## 🎨 UI/UXデザイン

### カラーパレット
- **背景**: 柔らかいパステルグラデーション (`#a8c8f5` → `#c8a8f5` → `#f5d8e8`)
- **ユーザーメッセージ**: 読みやすいグレー系 (`#6c7b95` → `#8892a8`)
- **アイのメッセージ**: 清潔な白背景
- **アクセント**: 優しい水色系

### キャラクター設定
- **名前**: アイ (AI)
- **アイコン**: 👧 (親しみやすい女の子)
- **性格**: 自然で優しい、親しみやすい
- **話し方**: 適度な敬語と親近感のバランス

## 🔒 セキュリティ機能

- ✅ **入力検証**: 文字数制限とタイプチェック
- ✅ **HTMLエスケープ**: XSS攻撃の防止
- ✅ **CORS制御**: 許可されたオリジンのみアクセス可能
- ✅ **セキュリティヘッダー**: Helmet.jsによる多層防御
- ✅ **環境変数**: APIキーの安全な管理
- ✅ **エラーハンドリング**: 機密情報の漏洩防止

## 🚀 Vercelデプロイ

### 1. Vercelアカウント作成
[Vercel](https://vercel.com/) でアカウントを作成

### 2. リポジトリのインポート
- "New Project" → "Import Git Repository"
- このリポジトリを選択

### 3. 環境変数の設定
Vercelダッシュボードで以下を設定：
- `GEMINI_API_KEY`: あなたのGemini APIキー
- `NODE_ENV`: `production`

### 4. デプロイ
"Deploy" ボタンをクリックして完了！

## 📱 対応環境

- **ブラウザ**: Chrome, Firefox, Safari, Edge (最新版)
- **デバイス**: デスクトップ、タブレット、スマートフォン
- **レスポンシブ**: モバイルファーストデザイン

## 🤝 コントリビューション

1. このリポジトリをフォーク
2. フィーチャーブランチを作成: `git checkout -b feature/amazing-feature`
3. 変更をコミット: `git commit -m 'Add amazing feature'`
4. ブランチにプッシュ: `git push origin feature/amazing-feature`
5. プルリクエストを作成

## 📝 ライセンス

このプロジェクトは個人・教育目的での利用を想定しています。

## 🙋‍♀️ サポート

質問や問題がある場合は、[Issues](https://github.com/hikari-kato/ai-chatbot/issues) でお知らせください。

---

<div align="center">

**🤖 Generated with [Claude Code](https://claude.ai/code)**

Made with ❤️ by [hikari-kato](https://github.com/hikari-kato)

</div>