self.onmessage = function(e) {
    const { jogos, statusFiltro } = e.data;
    
    const obterOrdem = (jogo, status) => {
        if (jogo.ordem_por_status && typeof jogo.ordem_por_status === 'object') {
            const ordemStatus = jogo.ordem_por_status[status];
            if (ordemStatus !== null && ordemStatus !== undefined) {
                return ordemStatus;
            }
        }
        if (jogo.ordem !== null && jogo.ordem !== undefined) {
            return jogo.ordem;
        }
        return Number.NEGATIVE_INFINITY;
    };
    
    const jogosOrdenados = [...jogos];
    jogosOrdenados.sort((a, b) => {
        const ordemA = obterOrdem(a, statusFiltro);
        const ordemB = obterOrdem(b, statusFiltro);
        
        if (ordemA !== Number.NEGATIVE_INFINITY && ordemB !== Number.NEGATIVE_INFINITY) {
            return ordemA - ordemB;
        }
        if (ordemA !== Number.NEGATIVE_INFINITY) {
            return -1;
        }
        if (ordemB !== Number.NEGATIVE_INFINITY) {
            return 1;
        }
        return 0;
    });
    
    self.postMessage({ resultado: jogosOrdenados });
};

