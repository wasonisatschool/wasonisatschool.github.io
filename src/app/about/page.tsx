'use client';

// Metadata cannot be exported from a client component - keeping title in layout

const interests = [
  { area: '轉型正義與科技', desc: '數位時代下的歷史記憶、檔案開放與真相揭露' },
  { area: '數位人權', desc: '隱私權、監控技術與數位身分的法律框架' },
  { area: 'AI法律', desc: '生成式AI的著作權、演算法責任與司法應用' },
  { area: '平台責任', desc: '內容審查、言論自由與數位中介服務規範' },
  { area: '資料保護', desc: '個人資料的商業化、跨境流動與監管挑戰' },
];

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '7rem', paddingBottom: '6rem', minHeight: '100vh' }}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div style={{ marginBottom: '4rem' }}>
          <p
            style={{
              color: '#f59e0b',
              fontSize: '0.75rem',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              marginBottom: '0.75rem',
            }}
          >
            關於我
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              fontWeight: 700,
              color: '#e8e6e1',
              lineHeight: 1.2,
              marginBottom: '2rem',
            }}
          >
            Wason
          </h1>

          <div
            style={{
              maxWidth: '640px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
            }}
          >
            <p style={{ color: '#c8c6c1', lineHeight: 1.8, fontSize: '1.05rem' }}>
              我是科技法律研究所的研究生，致力於探索法律與科技的交匯地帶。
              在人工智慧快速發展、數位治理日益複雜的當代，我相信法律學者需要
              深入理解技術，才能提出有意義的規範回應。
            </p>
            <p style={{ color: '#8b8a97', lineHeight: 1.8 }}>
              我的研究聚焦於台灣的轉型正義工程如何在數位時代面臨新的挑戰，
              以及比較法框架下各國如何回應AI帶來的法律問題。我嘗試以清晰
              的文字，將複雜的法律議題帶給更廣泛的讀者。
            </p>
            <p style={{ color: '#8b8a97', lineHeight: 1.8 }}>
              除學術研究外，我也積極參與公民社會的數位人權倡議，並開發
              便於研究者使用的法律科技工具。
            </p>
          </div>
        </div>

        {/* Research interests */}
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#e8e6e1',
              marginBottom: '1.5rem',
            }}
          >
            研究興趣
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {interests.map((item) => (
              <div
                key={item.area}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  padding: '1.25rem',
                  border: '1px solid #1e1e2e',
                  borderRadius: '8px',
                  backgroundColor: '#13131a',
                }}
              >
                <div
                  style={{
                    width: 3,
                    height: '100%',
                    minHeight: 40,
                    backgroundColor: '#f59e0b',
                    borderRadius: 2,
                    flexShrink: 0,
                  }}
                />
                <div>
                  <h3
                    style={{
                      color: '#e8e6e1',
                      fontWeight: 600,
                      fontSize: '1rem',
                      marginBottom: '0.25rem',
                    }}
                  >
                    {item.area}
                  </h3>
                  <p style={{ color: '#8b8a97', fontSize: '0.875rem', lineHeight: 1.6 }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div style={{ marginBottom: '4rem' }}>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#e8e6e1',
              marginBottom: '1.5rem',
            }}
          >
            學歷
          </h2>
          <div
            style={{
              padding: '1.5rem',
              border: '1px solid #1e1e2e',
              borderRadius: '8px',
              backgroundColor: '#13131a',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
              <span style={{ color: '#e8e6e1', fontWeight: 600 }}>科技法律研究所</span>
              <span style={{ color: '#8b8a97', fontSize: '0.875rem' }}>在學中</span>
            </div>
            <p style={{ color: '#8b8a97', fontSize: '0.875rem' }}>碩士研究生 · 主修科技法律</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h2
            style={{
              fontFamily: 'var(--font-playfair)',
              fontSize: '1.5rem',
              fontWeight: 700,
              color: '#e8e6e1',
              marginBottom: '1rem',
            }}
          >
            聯絡方式
          </h2>
          <p style={{ color: '#8b8a97', lineHeight: 1.7 }}>
            對於科技法律議題的交流討論，歡迎透過各種管道與我聯繫。
            無論是學術合作、媒體採訪或公民社會倡議，我都樂於參與。
          </p>
        </div>
      </div>
    </div>
  );
}
