function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Hero */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/40 via-gray-950 to-indigo-900/30" />
        <nav className="relative z-10 flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
          <span className="text-xl font-bold tracking-tight">둥가리 Corp.</span>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#about" className="hover:text-white transition">소개</a>
            <a href="#strategy" className="hover:text-white transition">전략</a>
            <a href="#budget" className="hover:text-white transition">예산</a>
            <a href="#team" className="hover:text-white transition">팀</a>
          </div>
        </nav>

        <div className="relative z-10 flex flex-col items-center text-center px-6 pt-24 pb-32">
          <div className="text-6xl mb-6">🎬</div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            둥가리 코퍼레이션
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-xl">
            AI 기반 애니메이션 뮤직비디오 제작 스튜디오
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#about"
              className="px-6 py-3 bg-violet-600 hover:bg-violet-500 rounded-lg font-medium transition"
            >
              자세히 보기
            </a>
            <a
              href="#team"
              className="px-6 py-3 border border-gray-700 hover:border-gray-500 rounded-lg font-medium transition"
            >
              팀 소개
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-20">
        <SectionLabel>소개</SectionLabel>
        <h2 className="text-3xl font-bold mb-6">킬러 카테고리: 노인 / 애니메이션 풍 뮤직비디오</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card title="비주류 니치 마켓" icon="🎯">
            기존 시장이 간과하는 틈새를 정조준합니다. 시각적 차별화와 락인 효과를
            통해 작지만 확실한 시장을 선점합니다.
          </Card>
          <Card title="확장 전략" icon="🚀">
            작은 시장에서 PoC(Proof of Concept)를 완료한 뒤, 검증된 파이프라인을
            기반으로 아이템을 확장합니다.
          </Card>
        </div>
      </section>

      {/* Strategy */}
      <section id="strategy" className="bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionLabel>단계별 전략</SectionLabel>
          <h2 className="text-3xl font-bold mb-10">로드맵</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <PhaseCard
              phase="Phase 1"
              label="현재"
              title="PoC 집중"
              description="콘텐츠 제작 파이프라인 구축 및 수익화 모델 검증에 집중합니다."
              active
            />
            <PhaseCard
              phase="Phase 2"
              label="2~3달 후"
              title="브랜딩 전략"
              description="검증된 결과물을 바탕으로 둥가리 코퍼레이션의 브랜드 아이덴티티를 수립합니다."
            />
            <PhaseCard
              phase="Phase 3"
              label="성공 후"
              title="교육 사업"
              description="축적된 노하우를 레버리지로 활용하여 교육 사업으로 확장합니다."
            />
          </div>
        </div>
      </section>

      {/* Budget */}
      <section id="budget" className="max-w-6xl mx-auto px-6 py-20">
        <SectionLabel>운영 예산</SectionLabel>
        <h2 className="text-3xl font-bold mb-2">월 최대 100만 원</h2>
        <p className="text-gray-400 mb-10">린(Lean)한 운영으로 리스크를 최소화합니다.</p>
        <div className="grid sm:grid-cols-3 gap-6">
          <BudgetCard label="클라우드 비용" amount="50만 원/월" description="렌더링 및 인프라" icon="☁️" />
          <BudgetCard label="API 비용" amount="50만 원/월" description="OpenAI, 영상/음성 생성 AI" icon="🤖" />
          <BudgetCard label="장비" amount="₩0" description="개인 자산 활용" icon="💻" />
        </div>
      </section>

      {/* Team */}
      <section id="team" className="bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <SectionLabel>핵심 역할</SectionLabel>
          <h2 className="text-3xl font-bold mb-10">팀</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            <TeamCard
              name="지누"
              role="PM"
              description="기획 및 비주얼 최종 검수를 담당합니다. 프로젝트의 방향성과 품질을 책임집니다."
            />
            <TeamCard
              name="맹덕"
              role="인프라 & 자동화"
              description="인프라 설계 및 자동화 스케일링을 담당하며, 협업 기반으로 운영합니다."
            />
            <TeamCard
              name="양민"
              role="인프라 & 자동화"
              description="인프라 및 자동화 스케일링을 함께 담당하며, 맹덕과 협업합니다."
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 text-center text-gray-500 text-sm py-8">
        © 2026 둥가리 코퍼레이션. All rights reserved.
      </footer>
    </div>
  )
}

function SectionLabel({ children }) {
  return (
    <span className="inline-block text-violet-400 text-sm font-semibold tracking-wider uppercase mb-2">
      {children}
    </span>
  )
}

function Card({ title, icon, children }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-700/50 transition">
      <div className="text-3xl mb-3">{icon}</div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{children}</p>
    </div>
  )
}

function PhaseCard({ phase, label, title, description, active }) {
  return (
    <div
      className={`rounded-2xl p-6 border transition ${
        active
          ? 'bg-violet-600/10 border-violet-500/50'
          : 'bg-gray-900 border-gray-800 hover:border-gray-700'
      }`}
    >
      <div className="flex items-center gap-2 mb-3">
        <span className="text-xs font-bold uppercase tracking-wider text-violet-400">{phase}</span>
        <span className="text-xs text-gray-500">— {label}</span>
      </div>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

function BudgetCard({ label, amount, description, icon }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 text-center">
      <div className="text-3xl mb-3">{icon}</div>
      <p className="text-sm text-gray-500 mb-1">{label}</p>
      <p className="text-2xl font-bold mb-1">{amount}</p>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  )
}

function TeamCard({ name, role, description }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-violet-700/50 transition">
      <div className="w-12 h-12 bg-violet-600/20 text-violet-400 rounded-full flex items-center justify-center text-lg font-bold mb-4">
        {name[0]}
      </div>
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-violet-400 text-sm mb-2">{role}</p>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export default App
