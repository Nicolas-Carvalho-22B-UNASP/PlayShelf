function obterOrigin(query, req) {
    const raw = (query.origin || req.headers.origin || req.headers.referer || '').replace(/\/$/, '') || 'https://playshelf.vercel.app';
    return (raw.replace(/\/api\/.*$/, '') || 'https://playshelf.vercel.app').replace(/\/$/, '');
}

module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }
    const query = req.query || {};
    if (query['openid.mode'] !== 'id_res') {
        res.redirect(302, `${obterOrigin(query, req)}/?steam_erro=1`);
        return;
    }
    const params = new URLSearchParams();
    for (const [k, v] of Object.entries(query)) {
        if (k.startsWith('openid.') && v) params.set(k, v);
    }
    params.set('openid.mode', 'check_authentication');
    let verification;
    try {
        verification = await fetch('https://steamcommunity.com/openid/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: params.toString()
        });
    } catch (e) {
        res.redirect(302, `${obterOrigin(query, req)}/?steam_erro=2`);
        return;
    }
    const text = await verification.text();
    if (!text || !/is_valid\s*:\s*true/i.test(text)) {
        res.redirect(302, `${obterOrigin(query, req)}/?steam_erro=3`);
        return;
    }
    const claimed = query['openid.claimed_id'] || query['openid.identity'] || '';
    const m = /steamcommunity\.com\/openid\/id\/(\d+)/i.exec(claimed);
    const steamId = m ? m[1] : null;
    if (!steamId) {
        res.redirect(302, `${obterOrigin(query, req)}/?steam_erro=4`);
        return;
    }
    let steamNome = '';
    const apiKey = process.env.STEAM_API_KEY;
    if (apiKey) {
        try {
            const ps = await fetch(
                `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v2/?key=${encodeURIComponent(apiKey)}&steamids=${steamId}&format=json`
            );
            const psJson = await ps.json();
            const p = psJson?.response?.players?.[0];
            if (p && p.personaname) steamNome = String(p.personaname);
        } catch (_) {}
    }
    const base = obterOrigin(query, req);
    res.redirect(302, `${base}/?steam_callback=1&steam_id=${encodeURIComponent(steamId)}&steam_nome=${encodeURIComponent(steamNome)}`);
};
