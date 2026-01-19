module.exports = async (req, res) => {
    if (req.method !== 'GET') {
        res.status(405).end();
        return;
    }
    const steamid = (req.query && req.query.steamid) ? String(req.query.steamid).trim() : '';
    if (!steamid || !/^\d+$/.test(steamid)) {
        res.setHeader('Content-Type', 'application/json');
        res.status(400).send(JSON.stringify({ erro: 'steamid obrigatório e deve ser numérico' }));
        return;
    }
    const apiKey = process.env.STEAM_API_KEY;
    if (!apiKey) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify({ erro: 'STEAM_API_KEY não configurada' }));
        return;
    }
    try {
        const url = `https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=${encodeURIComponent(apiKey)}&steamid=${steamid}&format=json&include_appinfo=1&include_played_free_games=1&include_free_sub=1&skip_unvetted_apps=0`;
        const r = await fetch(url);
        const data = await r.json();
        const games = (data && data.response && Array.isArray(data.response.games)) ? data.response.games : [];
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate');
        res.status(200).send(JSON.stringify({ jogos: games }));
    } catch (e) {
        res.setHeader('Content-Type', 'application/json');
        res.status(500).send(JSON.stringify({ erro: 'Falha ao buscar biblioteca Steam' }));
    }
};
