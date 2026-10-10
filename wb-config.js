// Config penyimpanan (Cloudflare Worker) - akun paitoangka1234-cpu (WB-scen)
// Satu Worker dipakai semua akun; data tiap akun dipisah lewat nama "account".
// JANGAN pakai nama account yang sama dengan situs lain, nanti data bank/member bercampur.
window.WB_STORE = {
  worker: 'https://steep-resonance-6a71.kjago7822.workers.dev',
  account: 'paitoangka1234-cpu'
};
