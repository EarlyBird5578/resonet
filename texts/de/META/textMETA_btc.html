<h2 style="text-align: center;">Der Fluss</h2>
<img src="/assets/img/BTC.PNG" style="max-width:100%; border-radius:12px; margin:1em 0;">

<h1>Transparenz ist Vertrauen.</h1>
<p>Diese Adresse gehört zu unserem Frequenzkern.  
Jede Resonanz fließt sichtbar – offen, ehrlich, unveränderlich.</p>

<h2>Bitcoin-Adresse</h2>
<p><code>bc1q3v6za50nhmyrela0cef5x9veed6x6yzm3tar80</code></p>
<img src="/assets/img/BTC_QR.PNG" style="max-width:100%; border-radius:12px; margin:1em 0;">

<h2>Letzte Transaktion</h2>
<p><span id="last-tx">Wird geladen...</span></p>

<h2>Aktuelles Guthaben</h2>
<p><span id="btc-balance">Wird geladen...</span></p>

<h2>Der Code</h2>
<p style="font-family:monospace;">Hier 24 Wörter ←</p>

<p style="font-size: 0.9em; color: #aaa;">Hinweis: Die Wallet ist öffentlich einsehbar, aber nur durch diese 24 Wörter kontrollierbar.  
Wir nutzen keine zentrale Institution – der Fluss folgt allein dem Prinzip der Frequenz.</p>

<a href="#" onclick="loadInnerText('META/textMETA_F.html'); return false;">Der Impuls →</a><br>
<a href="#" onclick="loadInnerText('META/textMETA_A.html'); return false;">Werde Teil →</a><br>
<a href="#" onclick="loadInnerText('META/textMETA_T.html'); return false;">Wer wir sind →</a><br>

<script>
async function fetchBTCData() {
  const address = 'bc1q3v6za50nhmyrela0cef5x9veed6x6yzm3tar80';
  const urlBase = `https://blockstream.info/api/address/${address}`;

  try {
    const res = await fetch(urlBase);
    const data = await res.json();

    // Kontostand in BTC umrechnen
    const balance = (data.chain_stats.funded_txo_sum - data.chain_stats.spent_txo_sum) / 100000000;
    document.getElementById('btc-balance').innerText = `${balance.toFixed(8)} BTC`;

    // Letzte Transaktion laden
    const txRes = await fetch(`${urlBase}/txs`);
    const txData = await txRes.json();

    if (txData.length > 0) {
      const last = txData[0];
      const amount = last.vout.reduce((sum, v) => sum + v.value, 0) / 100000000;
      const time = new Date(last.status.block_time * 1000).toLocaleDateString();
      document.getElementById('last-tx').innerText = `${amount.toFixed(8)} BTC am ${time}`;
    } else {
      document.getElementById('last-tx').innerText = 'Keine Transaktionen gefunden.';
    }

  } catch (error) {
    console.error("Fehler beim Abrufen der BTC-Daten:", error);
    document.getElementById('btc-balance').innerText = 'Fehler';
    document.getElementById('last-tx').innerText = 'Fehler';
  }
}

// Aufruf beim Laden
fetchBTCData();
</script>

