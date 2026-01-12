self.onmessage = function(e) {
    const { texto, operacao } = e.data;
    
    try {
        let resultado;
        
        if (operacao === 'processarRequisitos') {
            resultado = processarRequisitosTexto(texto);
        } else if (operacao === 'filtrarTexto') {
            const { termoBusca } = e.data;
            resultado = filtrarPorTexto(texto, termoBusca);
        } else {
            resultado = texto;
        }
        
        self.postMessage({ resultado, operacao });
    } catch (erro) {
        self.postMessage({ erro: erro.message, operacao });
    }
};

function processarRequisitosTexto(texto) {
    if (!texto || typeof texto !== 'string') return '';
    
    let formatado = texto
        .replace(/Minimum:/gi, '')
        .replace(/Recommended:/gi, '')
        .replace(/Минимальные:/gi, '')
        .replace(/Рекомендуемые:/gi, '')
        .replace(/الحد الأدنى:/gi, '')
        .replace(/موصى به:/gi, '')
        .trim();
    
    if (!formatado) return '';
    
    const linhas = formatado.split(/\n/);
    const linhasProcessadas = [];
    
    for (const linha of linhas) {
        const linhaLimpa = linha.trim();
        if (!linhaLimpa) continue;
        
        const match = linhaLimpa.match(/^([^:]+):(.*)$/);
        if (match) {
            linhasProcessadas.push({
                label: match[1].trim(),
                valor: match[2].trim()
            });
        }
    }
    
    return linhasProcessadas;
}

function filtrarPorTexto(texto, termoBusca) {
    if (!termoBusca || !termoBusca.trim()) {
        return true;
    }
    const termoLower = termoBusca.toLowerCase();
    return texto.toLowerCase().includes(termoLower);
}

