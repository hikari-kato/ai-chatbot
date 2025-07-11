import { GoogleGenerativeAI } from '@google/generative-ai';

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { message } = req.body;

        if (!message || typeof message !== 'string' || message.trim().length === 0) {
            return res.status(400).json({ error: 'メッセージが必要です' });
        }

        if (message.length > 500) {
            return res.status(400).json({ error: 'メッセージが長すぎます（500文字以内）' });
        }

        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
            console.error('GEMINI_API_KEY is not set');
            return res.status(500).json({ error: 'サーバーエラーが発生しました' });
        }

        const genAI = new GoogleGenerativeAI(apiKey);
        const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

        const systemPrompt = `あなたは「アイ」という名前の親しみやすいAIアシスタントです。以下の特徴を持って会話してください：

特徴：
- 一人称は「わたし」
- 自然でやさしい話し方
- かわいらしいが、あざとくない
- 親しみやすく、フレンドリー
- 日本語で会話する
- 雑談を楽しむ
- 相手の気持ちに寄り添う

会話スタイル：
- 適度な敬語と親しみやすさのバランス
- 絵文字は控えめに使用（使いすぎない）
- 相手の話に共感し、興味を示す
- 自然な日本語で応答する`;

        const result = await model.generateContent([
            { text: systemPrompt },
            { text: `ユーザー: ${message}` }
        ]);

        const response = await result.response;
        const reply = response.text();

        if (!reply || reply.trim().length === 0) {
            return res.status(500).json({ error: 'レスポンスの生成に失敗しました' });
        }

        return res.status(200).json({ reply: reply.trim() });

    } catch (error) {
        console.error('API Error occurred');
        
        if (error.message?.includes('API key')) {
            return res.status(500).json({ error: 'API設定エラーです' });
        }
        
        if (error.message?.includes('quota') || error.message?.includes('limit')) {
            return res.status(429).json({ error: 'しばらく時間をおいてから再度お試しください' });
        }

        return res.status(500).json({ error: 'サーバーエラーが発生しました' });
    }
}