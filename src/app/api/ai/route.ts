export async function POST(request: Request) {
  const { prompt } = await request.json();

  const apiKey = process.env.OPENAI_API_KEY;

  if (apiKey) {
    try {
      const res = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          stream: true,
          messages: [
            {
              role: 'system',
              content:
                '你是一位專精科技法律的研究助理，協助撰寫關於台灣科技法律、轉型正義與數位人權的學術文章。請以繁體中文回應，文風嚴謹但易讀。',
            },
            { role: 'user', content: prompt },
          ],
        }),
      });

      const stream = new ReadableStream({
        async start(controller) {
          const reader = res.body!.getReader();
          const decoder = new TextDecoder();
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;
            const chunk = decoder.decode(value);
            const lines = chunk.split('\n').filter((l) => l.startsWith('data: '));
            for (const line of lines) {
              const data = line.slice(6);
              if (data === '[DONE]') continue;
              try {
                const json = JSON.parse(data);
                const text = json.choices?.[0]?.delta?.content || '';
                if (text) controller.enqueue(new TextEncoder().encode(text));
              } catch {
                // skip malformed chunks
              }
            }
          }
          controller.close();
        },
      });

      return new Response(stream, {
        headers: { 'Content-Type': 'text/plain; charset=utf-8' },
      });
    } catch {
      // fall through to mock
    }
  }

  // Mock streaming response when no API key
  const mockText = `根據您的提示「${prompt.slice(0, 50)}」，以下是相關的法律分析：\n\n在科技法律的框架下，這個議題涉及多個重要面向。首先，從比較法的角度來看，各國對此問題的規範存在顯著差異。台灣現行法律體系在處理此類問題時，需要在保護個人權益與促進科技發展之間尋求平衡。\n\n建議進一步探討相關國際法規範，並評估台灣法制是否需要相應調整。`;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (const char of mockText) {
        controller.enqueue(encoder.encode(char));
        await new Promise((r) => setTimeout(r, 25));
      }
      controller.close();
    },
  });

  return new Response(stream, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
