export default async function handler(req, res) {
  const address = 'bc1q3v6za50nhmyrela0cef5x9veed6x6yzm3tar80';
  const baseUrl = `https://blockstream.info/api/address/${address}`;

  try {
    const walletRes = await fetch(baseUrl);
    const walletData = await walletRes.json();

    const txRes = await fetch(`${baseUrl}/txs`);
    const txData = await txRes.json();

    const balance = (walletData.chain_stats.funded_txo_sum - walletData.chain_stats.spent_txo_sum) / 100000000;
    const lastTx = txData[0];
    const lastAmount = lastTx
      ? lastTx.vout.reduce((sum, v) => sum + v.value, 0) / 100000000
      : 0;
    const lastDate = lastTx
      ? new Date(lastTx.status.block_time * 1000).toLocaleDateString()
      : null;

    res.status(200).json({ balance, lastAmount, lastDate });
  } catch (e) {
    res.status(500).json({ error: 'Fehler beim Abrufen der Daten' });
  }
}
