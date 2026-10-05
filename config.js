// Supabase 연결 설정
// ─────────────────────────────────────────────
// 여기에는 "공개 키(sb_publishable_...)"만 넣으세요.
// 공개 키는 브라우저에 노출되어도 괜찮도록 설계된 키이고,
// 실제 접근 권한은 Supabase의 RLS 정책이 막아줍니다.
//
// ⚠️ 비밀 키(sb_secret_... / service_role)는 절대 이 파일이나
//    사이트의 어떤 파일에도 넣지 마세요. RLS를 무시하고
//    모든 데이터를 읽고 지울 수 있는 키입니다.
// ─────────────────────────────────────────────

window.SUPABASE_CONFIG = {
  url: "https://ruopeifnbiydqwynhpnz.supabase.co",
  publishableKey: "sb_publishable_Ws6q3cpN6G6ZdfA4tYEX7w_MGCRl3yM",
};
