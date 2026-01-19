// Configuração da API RAWG
const API_KEY = '5da954bfb5a045669836b0e70cba7d58';
const API_BASE = 'https://api.rawg.io/api';

// Mapeamento de classificações ESRB para português
const classificacoesESRB = {
    'Everyone': 'Livre',
    'Everyone 10+': '10+',
    'Teen': '13+',
    'Mature': '17+',
    'Adults Only': '18+',
    'Rating Pending': 'Classificação Pendente'
};


// Elementos do DOM
const campoBusca = document.getElementById('campoBusca');
const btnBuscar = document.getElementById('btnBuscar');
const resultadosBusca = document.getElementById('resultadosBusca');
const btnCarregarMais = document.getElementById('btnCarregarMais');
const minhaLista = document.getElementById('minhaLista');
const campoBuscaLista = document.getElementById('campoBuscaLista');
const btnVoltar = document.getElementById('btnVoltar');
const btnLogout = document.getElementById('btnLogout');
const nomeUsuario = document.getElementById('nomeUsuario');
const telaAuth = document.getElementById('telaAuth');
const appContainer = document.getElementById('appContainer');
const formLoginTela = document.getElementById('formLoginTela');
const formCadastroTela = document.getElementById('formCadastroTela');
const linkCadastroTela = document.getElementById('linkCadastroTela');
const linkLoginTela = document.getElementById('linkLoginTela');
const notificacaoEl = document.getElementById('notificacao');
const notificacaoAuthEl = document.getElementById('notificacaoAuth');
const telaAvaliacao = document.getElementById('telaAvaliacao');
const btnVoltarAvaliacao = document.querySelector('.btn-voltar-avaliacao');
const nomeJogoModal = document.getElementById('nomeJogoModal');
const capaJogoModal = document.getElementById('capaJogoModal');
const lancamentoJogoModal = document.getElementById('lancamentoJogoModal');
const selectStatus = document.getElementById('selectStatus');
const btnConfirmar = document.getElementById('btnConfirmar');
const btnCancelar = document.getElementById('btnCancelar');
const comentarioAvaliacao = document.getElementById('comentarioAvaliacao');
const contadorComentario = document.getElementById('contadorComentario');
const listaAvaliacoes = document.getElementById('listaAvaliacoes');
const btnAmigos = document.getElementById('btnAmigos');
const modalAmigos = document.getElementById('modalAmigos');
const btnFecharAmigos = document.getElementById('btnFecharAmigos');
const inputNickAmigo = document.getElementById('inputNickAmigo');
const btnEnviarSolicitacao = document.getElementById('btnEnviarSolicitacao');
const listaAmigos = document.getElementById('listaAmigos');
const listaSolicitacoes = document.getElementById('listaSolicitacoes');
const listaEstatisticas = document.getElementById('listaEstatisticas');
const contadorSolicitacoes = document.getElementById('contadorSolicitacoes');
const tituloLista = document.getElementById('tituloLista');
const btnVoltarMinhaLista = document.getElementById('btnVoltarMinhaLista');
const modalConfirmacao = document.getElementById('modalConfirmacao');
const tituloConfirmacao = document.getElementById('tituloConfirmacao');
const mensagemConfirmacao = document.getElementById('mensagemConfirmacao');
const btnConfirmarAcao = document.getElementById('btnConfirmarAcao');
const btnCancelarAcao = document.getElementById('btnCancelarAcao');
const btnAtualizacoes = document.getElementById('btnAtualizacoes');
const modalAtualizacoes = document.getElementById('modalAtualizacoes');
const btnFecharAtualizacoes = document.getElementById('btnFecharAtualizacoes');
const listaAtualizacoes = document.getElementById('listaAtualizacoes');
const badgeNovaAtualizacao = document.getElementById('badgeNovaAtualizacao');
const btnEstatisticas = document.getElementById('btnEstatisticas');
const modalEstatisticas = document.getElementById('modalEstatisticas');
const btnFecharEstatisticas = document.getElementById('btnFecharEstatisticas');
const conteudoEstatisticas = document.getElementById('conteudoEstatisticas');
const menuItemEstatisticas = document.getElementById('menuItemEstatisticas');
const btnNotificacoes = document.getElementById('btnNotificacoes');
const modalNotificacoes = document.getElementById('modalNotificacoes');
const btnFecharNotificacoes = document.getElementById('btnFecharNotificacoes');
const listaNotificacoes = document.getElementById('listaNotificacoes');
const badgeNotificacoes = document.getElementById('badgeNotificacoes');
const badgeSolicitacoes = document.getElementById('badgeSolicitacoes');
const btnMarcarTodasLidas = document.getElementById('btnMarcarTodasLidas');
const btnMenuMobile = document.getElementById('btnMenuMobile');
const menuLateralMobile = document.getElementById('menuLateralMobile');
const btnFecharMenuMobile = document.getElementById('btnFecharMenuMobile');
const menuItemAtualizacoes = document.getElementById('menuItemAtualizacoes');
const menuItemNotificacoes = document.getElementById('menuItemNotificacoes');
const menuItemAmigos = document.getElementById('menuItemAmigos');
const menuItemLogout = document.getElementById('menuItemLogout');
const nomeUsuarioMenu = document.getElementById('nomeUsuarioMenu');
const badgeNovaAtualizacaoMenu = document.getElementById('badgeNovaAtualizacaoMenu');
const badgeNotificacoesMenu = document.getElementById('badgeNotificacoesMenu');
const badgeSolicitacoesMenu = document.getElementById('badgeSolicitacoesMenu');
const usuarioBadge = document.getElementById('usuarioBadge');
const modalFotoPerfil = document.getElementById('modalFotoPerfil');
const btnFecharFotoPerfil = document.getElementById('btnFecharFotoPerfil');
const inputFotoPerfil = document.getElementById('inputFotoPerfil');
const fotoPerfilPreview = document.getElementById('fotoPerfilPreview');
const fotoPerfilPlaceholder = document.getElementById('fotoPerfilPlaceholder');
const btnRemoverFoto = document.getElementById('btnRemoverFoto');
let acaoConfirmacao = null;
const telaDetalhes = document.getElementById('telaDetalhes');
const btnVoltarDetalhes = document.querySelector('.btn-voltar-detalhes');
const capaDetalhes = document.getElementById('capaDetalhes');
const nomeDetalhes = document.getElementById('nomeDetalhes');
const lancamentoDetalhes = document.getElementById('lancamentoDetalhes');
const plataformasDetalhes = document.getElementById('plataformasDetalhes');
const generosDetalhes = document.getElementById('generosDetalhes');
const playtimeContainer = document.getElementById('playtimeContainer');
const playtimeDetalhes = document.getElementById('playtimeDetalhes');
const dlcsSecao = document.getElementById('dlcsSecao');
const dlcsLista = document.getElementById('dlcsLista');
const desenvolvedoraDetalhes = document.getElementById('desenvolvedoraDetalhes');
const avaliacaoDetalhes = document.getElementById('avaliacaoDetalhes');
const descricaoDetalhes = document.getElementById('descricaoDetalhes');
const areaAcaoDetalhes = document.getElementById('areaAcaoDetalhes');
const fotosJogoSecao = document.getElementById('fotosJogoSecao');
const listaFotosJogo = document.getElementById('listaFotosJogo');
const btnPostarFoto = document.getElementById('btnPostarFoto');
const modalFotoJogo = document.getElementById('modalFotoJogo');
const btnFecharFotoJogo = document.getElementById('btnFecharFotoJogo');
const inputFotoJogo = document.getElementById('inputFotoJogo');
const fotoJogoPreview = document.getElementById('fotoJogoPreview');
const fotoJogoPreviewImg = document.getElementById('fotoJogoPreviewImg');
const fotosJogoPreviewLista = document.getElementById('fotosJogoPreviewLista');
const fotoJogoPlaceholder = document.getElementById('fotoJogoPlaceholder');
const descricaoFotoJogo = document.getElementById('descricaoFotoJogo');
const contadorDescricaoFoto = document.getElementById('contadorDescricaoFoto');
const btnConfirmarFotoJogo = document.getElementById('btnConfirmarFotoJogo');
const btnCancelarFotoJogo = document.getElementById('btnCancelarFotoJogo');
const btnSteam = document.getElementById('btnSteam');
const modalSteam = document.getElementById('modalSteam');
const btnFecharSteam = document.getElementById('btnFecharSteam');
const btnConectarSteam = document.getElementById('btnConectarSteam');
const btnDesconectarSteam = document.getElementById('btnDesconectarSteam');
const steamDesconectado = document.getElementById('steamDesconectado');
const steamConectado = document.getElementById('steamConectado');
const steamNomeUsuario = document.getElementById('steamNomeUsuario');
const steamBibliotecaLista = document.getElementById('steamBibliotecaLista');
const steamBibliotecaLoading = document.getElementById('steamBibliotecaLoading');
const steamBibliotecaErro = document.getElementById('steamBibliotecaErro');
const campoBuscaSteam = document.getElementById('campoBuscaSteam');
const modalEscolherJogoSteam = document.getElementById('modalEscolherJogoSteam');
const btnFecharEscolherJogoSteam = document.getElementById('btnFecharEscolherJogoSteam');
const escolherJogoSteamSubtitulo = document.getElementById('escolherJogoSteamSubtitulo');
const escolherJogoSteamLista = document.getElementById('escolherJogoSteamLista');
const escolherJogoSteamLoading = document.getElementById('escolherJogoSteamLoading');
const btnEscolherJogoSteamFallback = document.getElementById('btnEscolherJogoSteamFallback');
let steamEscolherContexto = null;
let steamJogosCache = [];
let steamMeusJogosCache = [];
let steamScrollSaveTimeout;
let steamBibliotecaCache = null;
let steamBibliotecaCarregando = false;
let steamBibliotecaPorSteamIdCache = Object.create(null);
const TTL_BIB_STEAM_POR_ID = 5 * 60 * 1000;

// Variáveis de estado
let jogoParaAdicionar = null;
let modoEdicao = false;
let carregandoAvaliacoes = false;
let filtroAtual = 'todos';
let jogoDetalhesAtual = null;
let avaliacaoSelecionada = 0;
let termoBuscaLista = '';
let usuarioLogado = null;
let jogosCache = [];
let meusJogosCache = []; // Cache separado para os jogos do usuário logado

const cacheMemoizacao = {
    filtrarEOrdenarJogos: new Map(),
    calcularContadores: new Map(),
    _ultimaVersaoJogosCache: null,
    _hashJogosCache: null,
    _limparCache() {
        this.filtrarEOrdenarJogos.clear();
        this.calcularContadores.clear();
        this._hashJogosCache = null;
    },
    _verificarEAtualizarHash(jogos) {
        if (!Array.isArray(jogos)) {
            if (this._hashJogosCache !== null) {
                this._hashJogosCache = null;
                this._limparCache();
                return true;
            }
            return false;
        }
        
        const hash = jogos.length + '_' + (jogos.length > 0 
            ? jogos.map(j => (j.id || j.jogo_id || '').toString()).slice(0, 20).join('_')
            : 'vazio');
            
        if (this._hashJogosCache !== hash) {
            this._hashJogosCache = hash;
            this._limparCache();
            return true;
        }
        return false;
    }
};

function criarChaveCache(...args) {
    return JSON.stringify(args);
}

function memoizar(fn, cacheMap, maxSize = 50) {
    return function(...args) {
        const chave = criarChaveCache(...args);
        
        if (cacheMap.has(chave)) {
            return cacheMap.get(chave);
        }
        
        const resultado = fn.apply(this, args);
        
        if (cacheMap.size >= maxSize) {
            const primeiraChave = cacheMap.keys().next().value;
            cacheMap.delete(primeiraChave);
        }
        
        cacheMap.set(chave, resultado);
        return resultado;
    };
}

function filtrarJogosPorStatus(jogos, status) {
    if (status === 'todos') {
        return jogos;
    }
    return jogos.filter(jogo => jogo.status === status);
}

function filtrarJogosPorBusca(jogos, termoBusca) {
    if (!termoBusca || !termoBusca.trim()) {
        return jogos;
    }
    const termoLower = termoBusca.toLowerCase();
    return jogos.filter(jogo => jogo.nome.toLowerCase().includes(termoLower));
}

function ordenarJogos(jogos, statusFiltro) {
    const jogosOrdenados = [...jogos];
    
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
    
    return jogosOrdenados;
}

async function filtrarEOrdenarJogosMemoizado(jogos, statusFiltro, termoBusca) {
    const hashJogos = jogos.length > 0 ? jogos.slice(0, 5).map(j => (j.id || j.jogo_id || '').toString()).join('_') : 'vazio';
    const chave = criarChaveCache(jogos.length, statusFiltro, termoBusca, hashJogos);
    
    if (cacheMemoizacao.filtrarEOrdenarJogos.has(chave)) {
        const cached = cacheMemoizacao.filtrarEOrdenarJogos.get(chave);
        return Array.isArray(cached) ? cached : Promise.resolve(cached);
    }
    
    let resultado = filtrarJogosPorStatus(jogos, statusFiltro);
    
    if (resultado.length >= THRESHOLD_USAR_WORKER) {
        resultado = await ordenarJogosComWorker(resultado, statusFiltro);
    } else {
        resultado = ordenarJogos(resultado, statusFiltro);
    }
    
    resultado = filtrarJogosPorBusca(resultado, termoBusca);
    
    if (cacheMemoizacao.filtrarEOrdenarJogos.size >= 30) {
        const primeiraChave = cacheMemoizacao.filtrarEOrdenarJogos.keys().next().value;
        cacheMemoizacao.filtrarEOrdenarJogos.delete(primeiraChave);
    }
    
    cacheMemoizacao.filtrarEOrdenarJogos.set(chave, resultado);
    return resultado;
}

const calcularContadoresMemoizado = memoizar((jogos) => {
    const contadores = { 'todos': 0, 'quero-jogar': 0, 'jogando': 0, 'zerado': 0, 'dropado': 0 };
    for (const jogo of jogos) {
        contadores.todos++;
        if (jogo?.status && Object.prototype.hasOwnProperty.call(contadores, jogo.status)) {
            contadores[jogo.status]++;
        }
    }
    return contadores;
}, cacheMemoizacao.calcularContadores, 10);

let workerSort = null;
let workerProcessText = null;
const THRESHOLD_USAR_WORKER = 300;

function obterWorkerSort() {
    if (!workerSort && typeof Worker !== 'undefined') {
        try {
            workerSort = new Worker('./worker-sort.js');
        } catch (e) {
            console.warn('Não foi possível criar worker de ordenação:', e);
        }
    }
    return workerSort;
}

function ordenarJogosComWorker(jogos, statusFiltro) {
    if (jogos.length < THRESHOLD_USAR_WORKER) {
        return Promise.resolve(ordenarJogos(jogos, statusFiltro));
    }
    
    const worker = obterWorkerSort();
    if (!worker) {
        return Promise.resolve(ordenarJogos(jogos, statusFiltro));
    }
    
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            worker.onmessage = null;
            resolve(ordenarJogos(jogos, statusFiltro));
        }, 5000);
        
        worker.onmessage = function(e) {
            clearTimeout(timeoutId);
            worker.onmessage = null;
            resolve(e.data.resultado);
        };
        
        worker.onerror = function(erro) {
            clearTimeout(timeoutId);
            worker.onmessage = null;
            console.warn('Erro no worker de ordenação, usando fallback:', erro);
            resolve(ordenarJogos(jogos, statusFiltro));
        };
        
        worker.postMessage({ jogos, statusFiltro });
    });
}

function obterWorkerProcessText() {
    if (!workerProcessText && typeof Worker !== 'undefined') {
        try {
            workerProcessText = new Worker('./worker-process-text.js');
        } catch (e) {
            console.warn('Não foi possível criar worker de processamento de texto:', e);
        }
    }
    return workerProcessText;
}

function processarTextoComWorker(texto, operacao, dadosAdicionais = {}) {
    const worker = obterWorkerProcessText();
    if (!worker) {
        return Promise.resolve(texto);
    }
    
    return new Promise((resolve, reject) => {
        const timeoutId = setTimeout(() => {
            worker.onmessage = null;
            resolve(texto);
        }, 5000);
        
        worker.onmessage = function(e) {
            clearTimeout(timeoutId);
            worker.onmessage = null;
            if (e.data.erro) {
                resolve(texto);
            } else {
                resolve(e.data.resultado);
            }
        };
        
        worker.onerror = function(erro) {
            clearTimeout(timeoutId);
            worker.onmessage = null;
            console.warn('Erro no worker de processamento de texto:', erro);
            resolve(texto);
        };
        
        worker.postMessage({ texto, operacao, ...dadosAdicionais });
    });
}
let paginaAtual = 1;
let ultimaBusca = '';
let temMaisJogos = true;
let cacheAPI = {};
let comentarioAtual = '';
let amigoVisualizando = null;
let veioDeDetalhes = false;
let timeoutBuscaListaId = null;
let abortControllerBuscaJogos = null;
let promiseSortable = null;
let contextoListaAtualId = 0;
let observerListaInfinita = null;
let sentinelListaInfinita = null;
let contextoDetalhesAtualId = 0;
const AUTO_SCROLL_THRESHOLD = 140;
const AUTO_SCROLL_MAX_SPEED = 22;
const AUTO_SCROLL_MIN_SPEED = 2;
const AUTO_SCROLL_SMOOTHING = 0.22;
const CACHE_JOGOS_SUPABASE_TTL_MS = 1000 * 20;
const IMG_PLACEHOLDER_SRC = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
let observerImagensLazy = null;
let filaImagensLazy = [];
let processarFilaImagensLazyRafId = null;
let prefetchBuscaAtual = null;
const jogosPrefetchados = new Set();

// Sistema de detecção de conexão e ajuste de qualidade
const ConnectionManager = {
    tipoConexao: 'unknown',
    velocidade: 'unknown',
    effectiveType: '4g',
    downlink: 10,
    rtt: 50,
    saveData: false,
    
    init() {
        if (!('connection' in navigator) && !('mozConnection' in navigator) && !('webkitConnection' in navigator)) {
            console.log('[ConnectionManager] Network Information API não disponível, usando valores padrão');
            this.tipoConexao = 'wifi';
            this.velocidade = 'fast';
            this.effectiveType = '4g';
            this.downlink = 10;
            this.rtt = 50;
            return;
        }
        
        const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        this.updateConnectionInfo(conn);
        
        if (conn) {
            conn.addEventListener('change', () => this.updateConnectionInfo(conn));
        }
    },
    
    updateConnectionInfo(conn) {
        if (!conn) return;
        
        this.effectiveType = conn.effectiveType || '4g';
        this.downlink = conn.downlink || 10;
        this.rtt = conn.rtt || 50;
        this.saveData = conn.saveData || false;
        this.tipoConexao = conn.type || 'unknown';
        
        // Determinar velocidade baseado em effectiveType e downlink
        if (this.saveData) {
            this.velocidade = 'slow';
        } else if (this.effectiveType === 'slow-2g' || this.effectiveType === '2g') {
            this.velocidade = 'slow';
        } else if (this.effectiveType === '3g' || this.downlink < 0.5) {
            this.velocidade = 'medium';
        } else {
            this.velocidade = 'fast';
        }
        
        console.log(`[ConnectionManager] Conexão detectada: ${this.effectiveType} (${this.velocidade}), downlink: ${this.downlink}Mbps, RTT: ${this.rtt}ms`);
    },
    
    getImageQuality() {
        if (this.velocidade === 'slow') return 'low';
        if (this.velocidade === 'medium') return 'medium';
        return 'high';
    },
    
    adjustImageUrl(url, context = 'card') {
        if (!url || typeof url !== 'string') return url;
        
        // Se for placeholder ou URL inválida, retorna como está
        if (url.startsWith('data:') || url.includes('placeholder')) {
            return url;
        }
        
        const quality = this.getImageQuality();
        
        // Para conexões lentas, tentar usar parâmetros de redimensionamento se a API suportar
        // A API RAWG pode não suportar, mas algumas CDNs sim
        // Vamos usar uma estratégia baseada no contexto da imagem
        
        if (quality === 'low') {
            // Para imagens de card em conexão lenta, podemos tentar reduzir via query params
            // ou simplesmente deixar o browser lidar com lazy loading e compressão
            // Por enquanto, mantemos a URL original mas adicionamos um hint via loading
            return url;
        }
        
        return url;
    },
    
    shouldLoadImagesLazily() {
        return this.velocidade === 'slow' || this.velocidade === 'medium';
    },
    
    getLoadingStrategy() {
        return this.shouldLoadImagesLazily() ? 'lazy' : 'eager';
    },
    
    getDecodingStrategy() {
        return this.velocidade === 'slow' ? 'async' : 'auto';
    }
};

ConnectionManager.init();

function debounce(fn, delay) {
    let timeoutId = null;
    return (...args) => {
        if (timeoutId) clearTimeout(timeoutId);
        timeoutId = setTimeout(() => fn(...args), delay);
    };
}

function agendarRender(fn) {
    if (typeof requestAnimationFrame === 'function') {
        requestAnimationFrame(() => fn());
        return;
    }
    setTimeout(() => fn(), 0);
}

function garantirObserverImagensLazy() {
    if (observerImagensLazy) return observerImagensLazy;
    if (typeof IntersectionObserver !== 'function') return null;
    
    // Ajustar rootMargin baseado na velocidade da conexão
    // Conexões lentas: menor margem (carrega apenas quando realmente visível)
    // Conexões rápidas: maior margem (precarrega antes de ficar visível)
    const rootMargin = ConnectionManager.velocidade === 'slow' 
        ? '100px 0px' 
        : ConnectionManager.velocidade === 'medium' 
        ? '300px 0px' 
        : '500px 0px';
    
    observerImagensLazy = new IntersectionObserver((entries) => {
        for (const entry of entries || []) {
            if (!entry?.isIntersecting) continue;
            const img = entry.target;
            if (!img || img.tagName !== 'IMG') continue;
            observerImagensLazy.unobserve(img);
            filaImagensLazy.push(img);
        }
        agendarProcessamentoFilaImagensLazy();
    }, { 
        root: null, 
        rootMargin: rootMargin, 
        threshold: 0.01 
    });
    return observerImagensLazy;
}

function agendarProcessamentoFilaImagensLazy() {
    if (processarFilaImagensLazyRafId) return;
    processarFilaImagensLazyRafId = requestAnimationFrame(() => {
        processarFilaImagensLazyRafId = null;
        processarFilaImagensLazy();
    });
}

function processarFilaImagensLazy() {
    if (!Array.isArray(filaImagensLazy) || filaImagensLazy.length === 0) return;
    
    // Ajustar limite de imagens por frame baseado na velocidade da conexão
    // Conexões lentas: menos imagens simultâneas (menos 1 por vez)
    // Conexões médias: moderado (2 por vez)
    // Conexões rápidas: mais imagens (3 por vez)
    const LIMITE_POR_FRAME = ConnectionManager.velocidade === 'slow' 
        ? 1 
        : ConnectionManager.velocidade === 'medium' 
        ? 2 
        : 3;
    
    for (let i = 0; i < LIMITE_POR_FRAME && filaImagensLazy.length > 0; i++) {
        const img = filaImagensLazy.shift();
        if (!img || img.tagName !== 'IMG') continue;
        const dataSrc = img.dataset?.src;
        if (!dataSrc) {
            img.classList.remove('skeleton-img-loading');
            continue;
        }
        
        // Ajustar URL da imagem baseado na conexão
        const adjustedUrl = ConnectionManager.adjustImageUrl(dataSrc);
        
        const imgElement = new Image();
        imgElement.onload = () => {
            img.src = adjustedUrl;
            img.classList.remove('skeleton-img-loading');
            delete img.dataset.src;
        };
        imgElement.onerror = () => {
            img.classList.remove('skeleton-img-loading');
            delete img.dataset.src;
        };
        imgElement.src = adjustedUrl;
    }
    if (filaImagensLazy.length > 0) agendarProcessamentoFilaImagensLazy();
}

function registrarImagemLazy(img) {
    if (!img || img.tagName !== 'IMG') return;
    if (img.dataset?.lazyRegistrado === 'true') return;
    img.dataset.lazyRegistrado = 'true';
    const temDataSrc = !!img.dataset?.src;
    if (!temDataSrc) {
        img.classList.remove('skeleton-img-loading');
        return;
    }
    const obs = garantirObserverImagensLazy();
    if (!obs) {
        img.src = img.dataset.src;
        delete img.dataset.src;
        img.classList.remove('skeleton-img-loading');
        return;
    }
    obs.observe(img);
}

function gerarSkeletonGridHtml(quantidade = 10) {
    const cards = Array.from({ length: quantidade }).map(() => `
        <div class="skeleton-card">
            <div class="skeleton skeleton-img"></div>
            <div class="skeleton-body">
                <div class="skeleton skeleton-line titulo"></div>
                <div class="skeleton skeleton-line subtitulo"></div>
                <div class="skeleton skeleton-line botao"></div>
            </div>
        </div>
    `).join('');
    return `<div class="skeleton-grid">${cards}</div>`;
}

function renderizarEmLotes({ itens, criarElemento, container, tamanhoLote = 24, onFim } = {}) {
    if (!container) {
        if (typeof onFim === 'function') onFim();
        return Promise.resolve();
    }
    if (!Array.isArray(itens) || itens.length === 0) {
        if (typeof onFim === 'function') onFim();
        return Promise.resolve();
    }
    
    return new Promise((resolve) => {
        let indice = 0;
        function processarLote() {
            const fragment = document.createDocumentFragment();
            const limite = Math.min(indice + tamanhoLote, itens.length);
            for (; indice < limite; indice++) {
                const el = criarElemento(itens[indice], indice);
                if (el) fragment.appendChild(el);
            }
            container.appendChild(fragment);
            if (indice < itens.length) {
                agendarRender(processarLote);
                return;
            }
            if (typeof onFim === 'function') onFim();
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    resolve();
                });
            });
        }
        agendarRender(processarLote);
    });
}

function limparListaInfinita() {
    if (observerListaInfinita) {
        observerListaInfinita.disconnect();
        observerListaInfinita = null;
    }
    if (sentinelListaInfinita && sentinelListaInfinita.parentNode) {
        sentinelListaInfinita.parentNode.removeChild(sentinelListaInfinita);
    }
    sentinelListaInfinita = null;
}


async function restaurarScrollPreciso(posicaoScroll, maxTentativas = 20) {
    return new Promise((resolve) => {
        let tentativas = 0;
        let ultimaAltura = 0;
        let alturaEstavel = 0;
        
        const verificarERestaurar = () => {
            tentativas++;
            const listaElementos = minhaLista.querySelectorAll('.jogo-card');
            const alturaAtual = document.documentElement.scrollHeight;
            
            if (alturaAtual === ultimaAltura) {
                alturaEstavel++;
            } else {
                alturaEstavel = 0;
                ultimaAltura = alturaAtual;
            }
            
            const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
            const scrollMaximo = Math.max(0, alturaTotal);
            const scrollFinal = Math.min(parseInt(posicaoScroll), scrollMaximo);
            
            const listaRenderizada = listaElementos.length > 0;
            const alturaEstavelOk = alturaEstavel >= 2;
            const maxTentativasAtingido = tentativas >= maxTentativas;
            
            if ((listaRenderizada && alturaEstavelOk) || maxTentativasAtingido) {
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        requestAnimationFrame(() => {
                            window.scrollTo({
                                top: scrollFinal,
                                behavior: 'auto'
                            });
                            resolve();
                        });
                    });
                });
                return;
            }
            
            requestAnimationFrame(verificarERestaurar);
        };
        requestAnimationFrame(verificarERestaurar);
    });
}

function renderizarListaInfinita({ itens, criarElemento, container, tamanhoPagina = 40, onFim } = {}) {
    limparListaInfinita();
    if (!container) {
        if (typeof onFim === 'function') onFim();
        return Promise.resolve();
    }
    if (!Array.isArray(itens) || itens.length === 0) {
        if (typeof onFim === 'function') onFim();
        return Promise.resolve();
    }
    
    return new Promise((resolve) => {
        let indice = 0;
        let isRenderizando = false;
        let primeiraPaginaRenderizada = false;
        
        function renderProximaPagina() {
            const fragment = document.createDocumentFragment();
            const limite = Math.min(indice + tamanhoPagina, itens.length);
            for (; indice < limite; indice++) {
                const el = criarElemento(itens[indice], indice);
                if (el) fragment.appendChild(el);
            }
            if (sentinelListaInfinita) container.insertBefore(fragment, sentinelListaInfinita);
            else container.appendChild(fragment);
            
            if (!primeiraPaginaRenderizada) {
                primeiraPaginaRenderizada = true;
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        resolve();
                    });
                });
            }
            
            if (indice >= itens.length) {
                limparListaInfinita();
                if (typeof onFim === 'function') onFim();
            }
        }
        sentinelListaInfinita = document.createElement('div');
        sentinelListaInfinita.style.height = '1px';
        container.appendChild(sentinelListaInfinita);
        renderProximaPagina();
        if (typeof IntersectionObserver !== 'function') {
            resolve();
            return;
        }
        observerListaInfinita = new IntersectionObserver((entries) => {
            const entry = entries?.[0];
            if (!entry?.isIntersecting) return;
            if (isRenderizando) return;
            isRenderizando = true;
            agendarRender(() => {
                renderProximaPagina();
                isRenderizando = false;
            });
        }, { root: null, rootMargin: '800px 0px', threshold: 0 });
        observerListaInfinita.observe(sentinelListaInfinita);
    });
}

function criarNovoContextoLista() {
    contextoListaAtualId++;
    return contextoListaAtualId;
}

function criarNovoContextoDetalhes() {
    contextoDetalhesAtualId++;
    return contextoDetalhesAtualId;
}

function isContextoDetalhesAtivo(contextoId) {
    return contextoId === contextoDetalhesAtualId;
}

function criarCacheLimitado(limit) {
    const map = new Map();
    return {
        get: (key) => map.get(key),
        set: (key, value) => {
            if (map.has(key)) map.delete(key);
            map.set(key, value);
            if (map.size > limit) {
                const firstKey = map.keys().next().value;
                map.delete(firstKey);
            }
        },
        has: (key) => map.has(key)
    };
}

const cacheBuscaRAWG = criarCacheLimitado(60);
const cacheDetalhesRAWG = criarCacheLimitado(120);
const requisicoesEmAndamento = new Map();
const cacheTraducao = criarCacheLimitado(400);
let cacheMeusJogosMeta = { timestamp: 0, promise: null };

if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('./sw.js')
            .then((registration) => registration.update())
            .catch(() => {
            });
    });
}

async function buscarJsonComCache(chave, url, { ttlMs = 1000 * 60 * 10 } = {}) {
    const agora = Date.now();
    const emCache = cacheDetalhesRAWG.get(chave);
    if (emCache && (agora - emCache.timestamp) < ttlMs) return emCache.value;
    if (requisicoesEmAndamento.has(chave)) return requisicoesEmAndamento.get(chave);
    const promise = (async () => {
        const resposta = await fetch(url);
        const dados = await resposta.json();
        cacheDetalhesRAWG.set(chave, { value: dados, timestamp: agora });
        return dados;
    })().finally(() => {
        requisicoesEmAndamento.delete(chave);
    });
    requisicoesEmAndamento.set(chave, promise);
    return promise;
}

function carregarScriptExterno(src) {
    return new Promise((resolve, reject) => {
        const existente = document.querySelector(`script[src="${src}"]`);
        if (existente) {
            if (existente.dataset.carregado === 'true') {
                resolve();
                return;
            }
            existente.addEventListener('load', () => resolve(), { once: true });
            existente.addEventListener('error', () => reject(new Error(`Erro ao carregar ${src}`)), { once: true });
            return;
        }
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.addEventListener('load', () => {
            script.dataset.carregado = 'true';
            resolve();
        }, { once: true });
        script.addEventListener('error', () => reject(new Error(`Erro ao carregar ${src}`)), { once: true });
        document.head.appendChild(script);
    });
}

function obterAutoScrollPlugin() {
    return window.AutoScroll || window.Sortable?.AutoScroll || null;
}

async function garantirSortableCarregado() {
    if (typeof Sortable !== 'undefined') return true;
    if (promiseSortable) return promiseSortable;
    promiseSortable = (async () => {
        await carregarScriptExterno('https://cdn.jsdelivr.net/npm/sortablejs@1.15.6/Sortable.min.js');
        try {
            await carregarScriptExterno('https://cdn.jsdelivr.net/npm/sortablejs@1.15.6/plugins/AutoScroll/AutoScroll.min.js');
        } catch (e) {
        }
        return true;
    })();
    return promiseSortable;
}

// Sistema de Atualizações
const VERSAO_ATUAL = '1.9.0';
const ATUALIZACOES = [
    {
        versao: '1.9.0',
        data: '05/01/2026',
        titulo: 'Dashboard de Estatísticas, Fotos de Jogos e Comparação Social',
        itens: [
            'Dashboard completo de estatísticas pessoais com métricas detalhadas',
            'Visualização de total de jogos e distribuição por status',
            'Média de avaliações e porcentagem de jogos avaliados',
            'Distribuição de avaliações por estrelas (1-5)',
            'Taxa de conclusão (porcentagem de jogos zerados)',
            'Histórico mensal de adição de jogos com timeline visual',
            'Estatísticas por gêneros com tradução automática',
            'Sistema de comparação com amigos (métricas lado a lado)',
            'Compatibilidade calculada entre amigos (jogos comuns, avaliações e status similares)',
            'Classificação de compatibilidade (Excelente, Boa, Média, Baixa) com cores visuais',
            'Sistema completo de fotos de jogos da comunidade',
            'Upload de múltiplas fotos por jogo (até 5 fotos por postagem)',
            'Carrossel de fotos com navegação e indicadores',
            'Descrição opcional para fotos (até 200 caracteres)',
            'Sistema de likes/dislikes em fotos da comunidade',
            'Deletar fotos próprias com confirmação',
            'Agrupamento de fotos por usuário e data',
            'Preview de múltiplas fotos antes de postar',
            'Edição de respostas próprias (não apenas exclusão)',
            'Timestamp atualizado quando resposta é editada'
        ]
    },
    {
        versao: '1.8.0',
        data: '19/12/2025',
        titulo: 'Documentação Completa, Otimizações de Performance e Melhorias de Interface',
        itens: [
            'Documentação completa de todas as funcionalidades no README.md',
            'Requisitos de hardware formatados e traduzidos (mínimo e recomendado)',
            'Lista de DLCs e conteúdo adicional dos jogos',
            'Jogos relacionados: mesma série, desenvolvedora/distribuidora e conquistas',
            'Sistema de drag and drop para reordenação (SortableJS, auto-scroll, ordem por status)',
            'Web Workers para processamento em background (ordenação e processamento de texto)',
            'Service Worker (PWA) com cache offline e estratégias avançadas',
            'Sistema de memoização avançado para otimização de performance',
            'Cache em múltiplas camadas com invalidação automática',
            'Compressão de dados no localStorage (Pako.js, redução de até 80%)',
            'Prefetch inteligente de detalhes de jogos e páginas de busca',
            'Menu lateral mobile com navegação completa',
            'Sistema de skeleton loading para melhor UX',
            'Toggle de visibilidade de senha nos formulários',
            'Badge de nova atualização disponível no header'
        ]
    },
    {
        versao: '1.7.0',
        data: '15/12/2025',
        titulo: 'Mídia, Notificações e Refinamentos',
        itens: [
            'Sistema de notificações para respostas em avaliações',
            'Galeria de screenshots com visualização ampliada',
            'Trailers via API RAWG ou busca automática no YouTube',
            'Persistência de estado ao atualizar página',
            'Visualização de amigos que possuem o mesmo jogo',
            'Classificação ESRB e score do Metacritic',
            'Refinamentos em avaliações, respostas e likes/dislikes',
            'Melhorias no sistema de amigos',
            'Correções de design e responsividade otimizada'
        ]
    },
    {
        versao: '1.6.0',
        data: '24/11/2025',
        titulo: 'Melhorias Sociais e UX',
        itens: [
            'Sistema de likes e dislikes em avaliações',
            'Foto de perfil personalizável (Upload/Remover)',
            'Gestão de respostas (Exclusão própria)',
            'Novo modal de confirmação para ações',
            'Badge contador de solicitações de amizade',
            'Refinamentos visuais na interface'
        ]
    },
    {
        versao: '1.5.0',
        data: '24/11/2025',
        titulo: 'Sistema de Amigos',
        itens: [
            'Sistema completo de gestão de amigos',
            'Adicionar amigos pelo nick de usuário',
            'Aceitar ou recusar solicitações de amizade',
            'Visualizar biblioteca de jogos dos amigos'
        ]
    },
    {
        versao: '1.4.0',
        data: '20/11/2025',
        titulo: 'Avaliações e Comentários',
        itens: [
            'Sistema de avaliações por comentário',
            'Respostas aos comentários',
            'Avaliações públicas visíveis para todos',
            'Botão para excluir avaliação própria',
            'Contador de caracteres nos comentários'
        ]
    },
    {
        versao: '1.3.0',
        data: '19/11/2025',
        titulo: 'Melhorias de Performance',
        itens: [
            'Cache de requisições da API',
            'Paginação de resultados de busca',
            'Botão "Carregar Mais Jogos"',
            'Otimização de carregamento'
        ]
    },
    {
        versao: '1.2.0',
        data: '19/11/2025',
        titulo: 'Detalhes e Filtros',
        itens: [
            'Modal de detalhes dos jogos',
            'Informações completas (plataformas, gêneros, desenvolvedora)',
            'Tradução automática para português',
            'Busca na lista pessoal',
            'Contador de jogos por status'
        ]
    },
    {
        versao: '1.1.0',
        data: '19/11/2025',
        titulo: 'Autenticação e Dados',
        itens: [
            'Sistema de login e cadastro',
            'Integração com Supabase',
            'Tela de autenticação completa',
            'Badge de usuário logado',
            'Notificações customizadas'
        ]
    },
    {
        versao: '1.0.0',
        data: '18/11/2025',
        titulo: 'Lançamento Inicial',
        itens: [
            'Busca de jogos via API RAWG',
            'Adicionar jogos à lista pessoal',
            'Status dos jogos (Quero Jogar, Jogando, Zerado, Dropado)',
            'Avaliação por estrelas (1-5)',
            'Filtros por status',
            'Design moderno e responsivo'
        ]
    }
];

// Funções de compressão/descompressão para localStorage
function comprimirDados(dados) {
    try {
        const jsonString = JSON.stringify(dados);
        const dadosBytes = new TextEncoder().encode(jsonString);
        const dadosComprimidos = pako.deflate(dadosBytes, { level: 9 });
        const base64 = btoa(String.fromCharCode(...dadosComprimidos));
        return base64;
    } catch (erro) {
        console.error('Erro ao comprimir dados:', erro);
        return null;
    }
}

function descomprimirDados(dadosComprimidos) {
    try {
        const dadosBytes = Uint8Array.from(atob(dadosComprimidos), c => c.charCodeAt(0));
        const dadosDescomprimidos = pako.inflate(dadosBytes, { to: 'string' });
        return JSON.parse(dadosDescomprimidos);
    } catch (erro) {
        console.error('Erro ao descomprimir dados:', erro);
        return null;
    }
}

function salvarLocalStorageComprimido(chave, dados) {
    const dadosComprimidos = comprimirDados(dados);
    if (dadosComprimidos) {
        localStorage.setItem(chave, dadosComprimidos);
        return true;
    }
    return false;
}

function obterLocalStorageComprimido(chave) {
    const dadosComprimidos = localStorage.getItem(chave);
    if (!dadosComprimidos) return null;
    
    try {
        const dadosDescomprimidos = descomprimirDados(dadosComprimidos);
        return dadosDescomprimidos;
    } catch (erro) {
        // Se falhar ao descomprimir, retorna null para que a função chamadora tente JSON normal
        return null;
    }
}

// Funções de autenticação e sessão
function obterUsuarioLogado() {
    const dadosComprimidos = localStorage.getItem('playshelf_usuario');
    if (!dadosComprimidos) return null;
    
    // Primeiro tenta descomprimir (formato novo)
    try {
        const usuario = obterLocalStorageComprimido('playshelf_usuario');
        if (usuario && usuario.id && usuario.usuario) {
            return usuario;
        }
    } catch (erro) {
        // Se falhar, continua para tentar como JSON
    }
    
    // Se não conseguiu descomprimir, tenta como JSON normal (migração ou formato antigo)
    try {
        const usuario = JSON.parse(dadosComprimidos);
        if (usuario && usuario.id && usuario.usuario) {
            // Migra automaticamente para formato comprimido
            salvarUsuarioLogado(usuario);
            return usuario;
        }
    } catch (erro2) {
        // Se ambos falharem, limpa o localStorage corrompido
        console.error('Erro ao ler dados do usuário, dados podem estar corrompidos:', erro2);
        localStorage.removeItem('playshelf_usuario');
        return null;
    }
    
    return null;
}

function salvarUsuarioLogado(usuario) {
    if (salvarLocalStorageComprimido('playshelf_usuario', usuario)) {
        usuarioLogado = usuario;
    } else {
        console.error('Erro ao salvar usuário comprimido, tentando sem compressão');
        localStorage.setItem('playshelf_usuario', JSON.stringify(usuario));
        usuarioLogado = usuario;
    }
}

function mostrarNotificacao(mensagem, tipo = 'sucesso') {
    // Verifica se está na tela de autenticação ou na aplicação principal
    const estaEmAuth = telaAuth.style.display !== 'none';
    const elementoNotificacao = estaEmAuth ? notificacaoAuthEl : notificacaoEl;
    
    elementoNotificacao.textContent = mensagem;
    elementoNotificacao.className = `notificacao ${tipo}`;
    elementoNotificacao.classList.add('mostrar');
    
    setTimeout(() => {
        elementoNotificacao.classList.remove('mostrar');
    }, 3000);
}

function inicializarDelegacaoResultadosBusca() {
    if (!resultadosBusca || resultadosBusca.dataset.delegacaoAtiva === 'true') return;
    if (!resultadosBusca.dataset.imgLoadListenerAtivo) {
        resultadosBusca.addEventListener('load', (e) => {
            const target = e.target;
            if (target?.tagName === 'IMG') target.classList.remove('skeleton-img-loading');
        }, true);
        resultadosBusca.addEventListener('error', (e) => {
            const target = e.target;
            if (target?.tagName === 'IMG') target.classList.remove('skeleton-img-loading');
        }, true);
        resultadosBusca.dataset.imgLoadListenerAtivo = 'true';
    }
    resultadosBusca.addEventListener('click', (e) => {
        const target = e.target;
        const elementoDetalhe = target?.closest?.('.jogo-imagem-busca, .jogo-titulo-busca');
        if (elementoDetalhe) {
            e.preventDefault();
            const jogoId = parseInt(elementoDetalhe.dataset.id);
            if (!Number.isNaN(jogoId)) abrirModalDetalhes(jogoId);
            return;
        }
        const botaoAdicionar = target?.closest?.('.btn-adicionar');
        if (!botaoAdicionar) return;
        e.preventDefault();
        if (botaoAdicionar.classList.contains('adicionado')) return;
        const jogo = JSON.parse(botaoAdicionar.dataset.jogo);
        abrirModal(jogo, botaoAdicionar);
    });
    resultadosBusca.dataset.delegacaoAtiva = 'true';
}

function inicializarDelegacaoMinhaLista() {
    if (!minhaLista || minhaLista.dataset.delegacaoAtiva === 'true') return;
    if (!minhaLista.dataset.imgLoadListenerAtivo) {
        minhaLista.addEventListener('load', (e) => {
            const target = e.target;
            if (target?.tagName === 'IMG') target.classList.remove('skeleton-img-loading');
        }, true);
        minhaLista.addEventListener('error', (e) => {
            const target = e.target;
            if (target?.tagName === 'IMG') target.classList.remove('skeleton-img-loading');
        }, true);
        minhaLista.dataset.imgLoadListenerAtivo = 'true';
    }
    minhaLista.addEventListener('click', (e) => {
        const target = e.target;
        const elementoDetalhe = target?.closest?.('.jogo-imagem, .jogo-titulo-wrapper');
        if (elementoDetalhe) {
            e.preventDefault();
            const jogoId = parseInt(elementoDetalhe.dataset.id);
            if (!Number.isNaN(jogoId)) abrirModalDetalhes(jogoId);
            return;
        }

        const botaoRemover = target?.closest?.('.btn-remover');
        if (botaoRemover) {
            e.preventDefault();
            e.stopPropagation();
            const id = botaoRemover.dataset.id;
            if (id) removerJogo(id);
            return;
        }

        const botaoAdicionarDaListaAmigo = target?.closest?.('.btn-adicionar-da-lista-amigo');
        if (botaoAdicionarDaListaAmigo) {
            e.preventDefault();
            e.stopPropagation();
            const jogoId = parseInt(botaoAdicionarDaListaAmigo.dataset.jogoId);
            const jogoNome = botaoAdicionarDaListaAmigo.dataset.jogoNome || '';
            const jogoImagem = botaoAdicionarDaListaAmigo.dataset.jogoImagem || '';
            const jogoLancamento = botaoAdicionarDaListaAmigo.dataset.jogoLancamento || null;
            const jogo = { id: jogoId, nome: jogoNome, imagem: jogoImagem, lancamento: jogoLancamento };
            abrirModal(jogo, botaoAdicionarDaListaAmigo);
            return;
        }

        if (amigoVisualizando) return;

        const estrelas = target?.closest?.('.estrelas-clicavel');
        if (estrelas) {
            e.preventDefault();
            e.stopPropagation();
            const id = estrelas.dataset.id;
            const jogo = jogosCache.find(j => j.id === id);
            if (jogo) abrirModalEdicao(jogo);
            return;
        }

        const badge = target?.closest?.('.status-badge');
        if (badge) {
            e.preventDefault();
            e.stopPropagation();
            const id = badge.dataset.id;
            const jogo = jogosCache.find(j => j.id === id);
            if (jogo) abrirModalEdicao(jogo);
        }
    });
    minhaLista.dataset.delegacaoAtiva = 'true';
}

function atualizarInterfaceUsuario() {
    if (usuarioLogado) {
        telaAuth.style.display = 'none';
        appContainer.style.display = 'block';
        nomeUsuario.textContent = usuarioLogado.usuario;
        if (nomeUsuarioMenu) {
            nomeUsuarioMenu.textContent = usuarioLogado.usuario;
        }
    } else {
        telaAuth.style.display = 'flex';
        appContainer.style.display = 'none';
    }
}

function logout() {
    localStorage.removeItem('playshelf_usuario');
    usuarioLogado = null;
    jogosCache = [];
    location.reload();
}

async function obterJogosSalvos(atualizarCachePrincipal = true, forcarAtualizacao = false) {
    if (!usuarioLogado) {
        return [];
    }
    
    try {
        const agora = Date.now();
        const temCacheValido = !forcarAtualizacao && Array.isArray(meusJogosCache) && meusJogosCache.length > 0 && (agora - cacheMeusJogosMeta.timestamp) < CACHE_JOGOS_SUPABASE_TTL_MS;
        if (temCacheValido) {
            if (atualizarCachePrincipal && !amigoVisualizando) {
                jogosCache = meusJogosCache;
            }
            return meusJogosCache;
        }

        if (cacheMeusJogosMeta.promise) return await cacheMeusJogosMeta.promise;

        cacheMeusJogosMeta.promise = (async () => {
            const jogos = await supabase.obterJogos(usuarioLogado.id, { forcarAtualizacao });
            meusJogosCache = jogos;
            cacheMeusJogosMeta.timestamp = Date.now();
            if (atualizarCachePrincipal && !amigoVisualizando) {
                jogosCache = jogos;
            }
            return jogos;
        })().finally(() => {
            cacheMeusJogosMeta.promise = null;
        });

        return await cacheMeusJogosMeta.promise;
    } catch (erro) {
        console.error('Erro ao obter jogos:', erro);
        return [];
    }
}

function jogoJaAdicionado(jogoId) {
    // Sempre verificar no cache dos meus jogos, não no cache atual (que pode ser de um amigo)
    return meusJogosCache.some(jogo => jogo.jogo_id === jogoId);
}

async function buscarJogos(termo = '', novaBusca = true) {
    if (!termo.trim()) return;
    
    if (novaBusca) {
        paginaAtual = 1;
        ultimaBusca = termo;
        resultadosBusca.innerHTML = gerarSkeletonGridHtml(10);
        btnCarregarMais.style.display = 'none';
    } else {
        btnCarregarMais.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Carregando...';
        btnCarregarMais.disabled = true;
    }

    btnVoltar.style.display = 'block';

    try {
        let url = `${API_BASE}/games?key=${API_KEY}&search=${encodeURIComponent(termo)}&page_size=10&page=${paginaAtual}`;
        
        // Verificar cache
        const cacheKey = `${termo}_${paginaAtual}`;
        if (cacheBuscaRAWG.has(cacheKey)) {
            const dados = cacheBuscaRAWG.get(cacheKey);
            if (novaBusca) {
                exibirResultados(dados.results);
            } else {
                adicionarResultados(dados.results);
            }
            
            temMaisJogos = dados.next !== null;
            btnCarregarMais.style.display = temMaisJogos ? 'block' : 'none';
            btnCarregarMais.innerHTML = 'Carregar Mais Jogos';
            btnCarregarMais.disabled = false;
            return;
        }
        
        if (abortControllerBuscaJogos) abortControllerBuscaJogos.abort();
        abortControllerBuscaJogos = new AbortController();

        const resposta = await fetch(url, { signal: abortControllerBuscaJogos.signal });
        const dados = await resposta.json();
        
        // Salvar no cache
        cacheBuscaRAWG.set(cacheKey, dados);

        if (dados.results && dados.results.length > 0) {
            if (novaBusca) {
                exibirResultados(dados.results);
            } else {
                adicionarResultados(dados.results);
            }
            
            temMaisJogos = dados.next !== null;
            btnCarregarMais.style.display = temMaisJogos ? 'block' : 'none';
            btnCarregarMais.innerHTML = 'Carregar Mais Jogos';
            btnCarregarMais.disabled = false;

            if (temMaisJogos) {
                const proximaPagina = paginaAtual + 1;
                const proximoCacheKey = `${ultimaBusca}_${proximaPagina}`;
                if (!cacheBuscaRAWG.has(proximoCacheKey)) {
                    const urlPrefetch = `${API_BASE}/games?key=${API_KEY}&search=${encodeURIComponent(ultimaBusca)}&page_size=10&page=${proximaPagina}`;
                    prefetchBuscaAtual = fetch(urlPrefetch).then(r => r.json()).then(d => {
                        cacheBuscaRAWG.set(proximoCacheKey, d);
                        return d;
                    }).catch(() => null).finally(() => {
                        prefetchBuscaAtual = null;
                    });
                }
            }
        } else {
            if (novaBusca) {
                resultadosBusca.innerHTML = '<div class="erro">Nenhum jogo encontrado.</div>';
            }
            btnCarregarMais.style.display = 'none';
        }
    } catch (erro) {
        if (erro?.name === 'AbortError') return;
        if (novaBusca) {
            resultadosBusca.innerHTML = '<div class="erro">Erro ao buscar jogos. Tente novamente.</div>';
        } else {
            mostrarNotificacao('Erro ao carregar mais jogos.', 'erro');
        }
        console.error('Erro:', erro);
        btnCarregarMais.innerHTML = 'Carregar Mais Jogos';
        btnCarregarMais.disabled = false;
    }
}

function adicionarResultados(jogos) {
    renderizarEmLotes({
        itens: jogos,
        criarElemento: (jogo) => {
            const card = document.createElement('div');
            card.className = 'jogo-card';
            const imagemUrl = jogo.background_image || 'https://via.placeholder.com/300x400?text=Sem+Imagem';
            const adjustedUrl = ConnectionManager.adjustImageUrl(imagemUrl, 'card');
            const jaAdicionado = jogoJaAdicionado(jogo.id);
            const jogoNameEscaped = escapeHtml(jogo.name);
            const loadingStrategy = ConnectionManager.getLoadingStrategy();
            const decodingStrategy = ConnectionManager.getDecodingStrategy();
            const fetchPriority = ConnectionManager.velocidade === 'slow' ? 'low' : 'auto';
            card.innerHTML = `
                <img src="${IMG_PLACEHOLDER_SRC}" data-src="${adjustedUrl}" alt="${jogoNameEscaped}" class="jogo-imagem-busca skeleton-img-loading" data-id="${jogo.id}" loading="${loadingStrategy}" decoding="${decodingStrategy}" fetchpriority="${fetchPriority}">
                <div class="jogo-info">
                    <h3 class="jogo-titulo-busca" data-id="${jogo.id}">${jogoNameEscaped}</h3>
                    <p>${formatarData(jogo.released)}</p>
                    <button class="btn-adicionar ${jaAdicionado ? 'adicionado' : ''}" 
                            data-jogo='${JSON.stringify({ id: jogo.id, nome: jogo.name, imagem: imagemUrl, lancamento: jogo.released })}'>
                        ${jaAdicionado ? 'Adicionado' : 'Adicionar'}
                    </button>
                </div>
            `;
            const img = card.querySelector('img');
            registrarImagemLazy(img);
            
            // Prefetch ao passar o mouse sobre o card apenas em conexões rápidas
            if (ConnectionManager.velocidade === 'fast') {
                card.addEventListener('mouseenter', () => {
                    prefetchDetalhesJogo(jogo.id);
                }, { once: true, passive: true });
            }
            
            return card;
        },
        container: resultadosBusca,
        tamanhoLote: 10
    });
}

function exibirResultados(jogos) {
    resultadosBusca.innerHTML = '';
    adicionarResultados(jogos);
}

function atualizarEstrelas(valor) {
    avaliacaoSelecionada = valor;
    const estrelas = document.querySelectorAll('.estrela');
    const textoAvaliacao = document.querySelector('.avaliacao-texto');
    
    estrelas.forEach((estrela, index) => {
        if (index < valor) {
            estrela.classList.add('ativa');
        } else {
            estrela.classList.remove('ativa');
        }
    });
    
    if (valor === 0) {
        textoAvaliacao.textContent = 'Sem avaliação';
    } else {
        textoAvaliacao.textContent = `${valor} de 5 estrelas`;
    }
}

comentarioAvaliacao.addEventListener('input', () => {
    contadorComentario.textContent = comentarioAvaliacao.value.length;
    comentarioAtual = comentarioAvaliacao.value;
});

function abrirModal(jogo, botao) {
    veioDeDetalhes = false;
    modoEdicao = false;
    
    // Se estiver visualizando lista de amigo, salvar estado (filtro e scroll)
    if (amigoVisualizando) {
        sessionStorage.setItem('filtroAntesAvaliacaoAmigo', filtroAtual);
        sessionStorage.setItem('scrollAntesAvaliacaoAmigo', window.scrollY.toString());
    }
    
    // Limpar completamente o estado anterior
    jogoParaAdicionar = null;
    avaliacaoSelecionada = 0;
    comentarioAtual = '';
    
    // Configurar novo jogo
    jogoParaAdicionar = { jogo, botao };
    nomeJogoModal.textContent = jogo.nome;
    capaJogoModal.src = jogo.imagem;
    lancamentoJogoModal.textContent = formatarData(jogo.lancamento);
    selectStatus.value = 'quero-jogar';
    comentarioAvaliacao.value = '';
    contadorComentario.textContent = '0';
    atualizarEstrelas(0);
    
    // Ocultar container principal e mostrar tela de avaliação
    appContainer.style.display = 'none';
    telaAvaliacao.style.display = 'block';
    window.scrollTo(0, 0);
}

function abrirModalEdicao(jogo) {
    veioDeDetalhes = false;
    modoEdicao = true;
    
    // Salvar estado atual (filtro e scroll) antes de abrir avaliação
    sessionStorage.setItem('filtroAntesAvaliacao', filtroAtual);
    sessionStorage.setItem('scrollAntesAvaliacao', window.scrollY.toString());
    
    // Limpar estado anterior
    jogoParaAdicionar = null;
    avaliacaoSelecionada = 0;
    comentarioAtual = '';
    
    // Configurar com os dados atuais do jogo
    jogoParaAdicionar = { jogo };
    nomeJogoModal.textContent = jogo.nome;
    capaJogoModal.src = jogo.imagem;
    lancamentoJogoModal.textContent = formatarData(jogo.lancamento);
    selectStatus.value = jogo.status || 'quero-jogar';
    avaliacaoSelecionada = jogo.avaliacao || 0;
    comentarioAvaliacao.value = jogo.comentario || '';
    comentarioAtual = jogo.comentario || '';
    contadorComentario.textContent = (jogo.comentario || '').length;
    atualizarEstrelas(avaliacaoSelecionada);
    
    // Ocultar container principal e mostrar tela de avaliação
    appContainer.style.display = 'none';
    telaAvaliacao.style.display = 'block';
    window.scrollTo(0, 0);
}

async function fecharModal() {
    telaAvaliacao.style.display = 'none';
    let spSteam = null;
    if (sessionStorage.getItem('veioDoSteamAdicionar')) {
        spSteam = parseInt(sessionStorage.getItem('steamScrollPos') || '0', 10);
        sessionStorage.removeItem('veioDoSteamAdicionar');
        sessionStorage.removeItem('steamScrollPos');
    }
    sessionStorage.removeItem('telaAvaliacaoAberta');
    if (veioDeDetalhes) {
        telaDetalhes.style.display = 'block';
        veioDeDetalhes = false;
    } else {
        appContainer.style.display = 'block';
        
        // Verificar se estava vendo lista de amigo
        const estavaVendoAmigo = !!amigoVisualizando;
        
        if (estavaVendoAmigo) {
            // Restaurar filtro e scroll salvos da lista do amigo
            const filtroSalvoAmigo = sessionStorage.getItem('filtroAntesAvaliacaoAmigo');
            const scrollSalvoAmigo = sessionStorage.getItem('scrollAntesAvaliacaoAmigo');
            
            if (filtroSalvoAmigo && filtroSalvoAmigo !== filtroAtual) {
                filtroAtual = filtroSalvoAmigo;
                sessionStorage.setItem('filtroAtual', filtroAtual);
                
                // Atualizar botões de filtro
                document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
                const btnFiltro = document.querySelector(`.filtro-btn[data-filtro="${filtroSalvoAmigo}"]`);
                if (btnFiltro) {
                    btnFiltro.classList.add('ativo');
                }
                
                // Recarregar lista com o filtro correto
                await exibirMinhaLista();
            }
            
            // Restaurar posição do scroll
            if (scrollSalvoAmigo) {
                // Aguardar um pouco para garantir que a lista foi renderizada
                setTimeout(async () => {
                    await restaurarScrollPreciso(parseInt(scrollSalvoAmigo));
                }, 100);
            }
            
            // Limpar valores salvos
            sessionStorage.removeItem('filtroAntesAvaliacaoAmigo');
            sessionStorage.removeItem('scrollAntesAvaliacaoAmigo');
        } else {
            // Restaurar filtro e scroll salvos antes de abrir avaliação
            const filtroSalvo = sessionStorage.getItem('filtroAntesAvaliacao');
            const scrollSalvo = sessionStorage.getItem('scrollAntesAvaliacao');
            
            if (filtroSalvo && filtroSalvo !== filtroAtual) {
                filtroAtual = filtroSalvo;
                sessionStorage.setItem('filtroAtual', filtroAtual);
                
                // Atualizar botões de filtro
                document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
                const btnFiltro = document.querySelector(`.filtro-btn[data-filtro="${filtroSalvo}"]`);
                if (btnFiltro) {
                    btnFiltro.classList.add('ativo');
                }
                
                // Recarregar lista com o filtro correto
                await exibirMinhaLista();
            }
            
            // Restaurar posição do scroll
            if (scrollSalvo) {
                // Aguardar um pouco para garantir que a lista foi renderizada
                setTimeout(async () => {
                    await restaurarScrollPreciso(parseInt(scrollSalvo));
                }, 100);
            }
            
            // Limpar valores salvos
            sessionStorage.removeItem('filtroAntesAvaliacao');
            sessionStorage.removeItem('scrollAntesAvaliacao');
        }
        if (spSteam != null) abrirModalSteam({ scrollPos: spSteam });
    }
    jogoParaAdicionar = null;
    modoEdicao = false;
    avaliacaoSelecionada = 0;
    comentarioAtual = '';
}

async function traduzirTexto(texto, idiomaOrigem = 'auto') {
    try {
        const textoNormalizado = (texto || '').toString().trim();
        if (!textoNormalizado) return texto;
        const chaveCache = `tr:${idiomaOrigem}:pt:${textoNormalizado}`;
        const emCache = cacheTraducao.get(chaveCache);
        if (emCache) return emCache;
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${idiomaOrigem}&tl=pt&dt=t&q=${encodeURIComponent(texto)}`;
        const resposta = await fetch(url);
        const dados = await resposta.json();
        const traducao = dados[0].map(item => item[0]).join('');
        cacheTraducao.set(chaveCache, traducao);
        return traducao;
    } catch (erro) {
        console.error('Erro ao traduzir:', erro);
        return texto;
    }
}

async function buscarDetalhesJogo(jogoId) {
    try {
        return await buscarJsonComCache(
            `rawg:detalhes:${jogoId}`,
            `${API_BASE}/games/${jogoId}?key=${API_KEY}`,
            { ttlMs: 1000 * 60 * 30 }
        );
    } catch (erro) {
        console.error('Erro ao buscar detalhes:', erro);
        return null;
    }
}

function prefetchDetalhesJogo(jogoId) {
    if (!jogoId || Number.isNaN(jogoId)) return;
    
    const chave = `rawg:detalhes:${jogoId}`;
    
    // Se já está em cache válido, não precisa prefetch
    const agora = Date.now();
    const emCache = cacheDetalhesRAWG.get(chave);
    if (emCache && (agora - emCache.timestamp) < 1000 * 60 * 30) {
        return;
    }
    
    // Se já está sendo buscado, não precisa prefetch novamente
    if (requisicoesEmAndamento.has(chave)) {
        return;
    }
    
    // Se já foi prefetchado recentemente, evita requisições duplicadas
    if (jogosPrefetchados.has(jogoId)) {
        return;
    }
    
    // Marca como prefetchado
    jogosPrefetchados.add(jogoId);
    
    // Faz prefetch em background (não bloqueia)
    buscarJsonComCache(chave, `${API_BASE}/games/${jogoId}?key=${API_KEY}`, { ttlMs: 1000 * 60 * 30 })
        .catch(() => {
            // Remove da lista em caso de erro para permitir nova tentativa
            jogosPrefetchados.delete(jogoId);
        });
}

async function buscarScreenshotsJogo(jogoId) {
    try {
        const dados = await buscarJsonComCache(
            `rawg:screenshots:${jogoId}`,
            `${API_BASE}/games/${jogoId}/screenshots?key=${API_KEY}`,
            { ttlMs: 1000 * 60 * 30 }
        );
        return dados?.results || [];
    } catch (erro) {
        console.error('Erro ao buscar screenshots:', erro);
        return [];
    }
}

async function buscarTrailersJogo(jogoId) {
    try {
        const dados = await buscarJsonComCache(
            `rawg:trailers:${jogoId}`,
            `${API_BASE}/games/${jogoId}/movies?key=${API_KEY}`,
            { ttlMs: 1000 * 60 * 30 }
        );
        return dados?.results || [];
    } catch (erro) {
        console.error('Erro ao buscar trailers:', erro);
        return [];
    }
}

async function buscarDLCsJogo(jogoId) {
    try {
        const dados = await buscarJsonComCache(
            `rawg:dlcs:${jogoId}`,
            `${API_BASE}/games/${jogoId}/additions?key=${API_KEY}`,
            { ttlMs: 1000 * 60 * 60 }
        );
        return dados?.results || [];
    } catch (erro) {
        console.error('Erro ao buscar DLCs:', erro);
        return [];
    }
}

async function buscarJogosSerie(jogoId) {
    try {
        // Tentar usar o endpoint específico de game-series
        const dados = await buscarJsonComCache(
            `rawg:series:${jogoId}`,
            `${API_BASE}/games/${jogoId}/game-series?key=${API_KEY}`,
            { ttlMs: 1000 * 60 * 60 }
        );
        if (dados && Array.isArray(dados.results)) {
            const jogos = dados.results.filter(jogo => jogo.id !== jogoId);
            return jogos.slice(0, 10);
        }
        
        // Fallback: tentar buscar pela série no objeto de detalhes
        const detalhes = await buscarDetalhesJogo(jogoId);
        if (!detalhes) {
            return [];
        }
        
        if (detalhes.game_series && detalhes.game_series.length > 0) {
            const serieIds = detalhes.game_series.map(s => s.id).filter(id => id !== jogoId);
            if (serieIds.length > 0) {
                const jogos = [];
                for (const serieId of serieIds.slice(0, 10)) {
                    try {
                        const jogo = await buscarDetalhesJogo(serieId);
                        if (jogo) {
                            jogos.push(jogo);
                        }
                    } catch (e) {
                        console.error('Erro ao buscar jogo da série:', e);
                    }
                }
                return jogos;
            }
        }
        
        return [];
    } catch (erro) {
        console.error('Erro ao buscar jogos da série:', erro);
        return [];
    }
}

async function buscarJogosDesenvolvedora(desenvolvedoraId, distribuidoraId, jogoAtualId) {
    try {
        const jogos = [];
        
        // Buscar jogos da desenvolvedora
        if (desenvolvedoraId) {
            try {
                const dadosDev = await buscarJsonComCache(
                    `rawg:dev:${desenvolvedoraId}`,
                    `${API_BASE}/games?key=${API_KEY}&developers=${desenvolvedoraId}&page_size=10`,
                    { ttlMs: 1000 * 60 * 60 }
                );
                const jogosDev = (dadosDev.results || []).filter(jogo => jogo.id !== jogoAtualId);
                jogos.push(...jogosDev);
            } catch (e) {
                console.error('Erro ao buscar jogos da desenvolvedora:', e);
            }
        }
        
        // Buscar jogos da distribuidora (se diferente da desenvolvedora)
        if (distribuidoraId && distribuidoraId !== desenvolvedoraId) {
            try {
                const dadosPub = await buscarJsonComCache(
                    `rawg:pub:${distribuidoraId}`,
                    `${API_BASE}/games?key=${API_KEY}&publishers=${distribuidoraId}&page_size=10`,
                    { ttlMs: 1000 * 60 * 60 }
                );
                const jogosPub = (dadosPub.results || []).filter(jogo => jogo.id !== jogoAtualId && !jogos.some(j => j.id === jogo.id));
                jogos.push(...jogosPub);
            } catch (e) {
                console.error('Erro ao buscar jogos da distribuidora:', e);
            }
        }
        
        // Remover duplicatas e limitar
        const jogosUnicos = Array.from(new Map(jogos.map(jogo => [jogo.id, jogo])).values());
        return jogosUnicos.slice(0, 10);
    } catch (erro) {
        console.error('Erro ao buscar jogos da desenvolvedora/distribuidora:', erro);
        return [];
    }
}

async function buscarConquistasJogo(jogoId) {
    try {
        const url = `${API_BASE}/games/${jogoId}/achievements?key=${API_KEY}`;
        const resposta = await fetch(url);
        if (resposta.status === 404) {
            return null;
        }
        const dados = await resposta.json();
        cacheDetalhesRAWG.set(`rawg:achievements:${jogoId}`, { value: dados, timestamp: Date.now() });
        return dados?.results || [];
    } catch (erro) {
        console.error('Erro ao buscar conquistas:', erro);
        return null;
    }
}

function criarTrailersYouTube(nomeJogo) {
    const query = encodeURIComponent(`${nomeJogo} official trailer gameplay`);
    
    return [
        {
            searchUrl: `https://www.youtube.com/results?search_query=${query}`,
            embedUrl: `https://www.youtube.com/embed?listType=search&list=${query}`,
            title: `${nomeJogo} - Trailers`
        }
    ];
}

function atualizarBotaoModalDetalhes(jaAdicionado) {
    const jogoNaMinhaLista = meusJogosCache.find(j => j.jogo_id === jogoDetalhesAtual?.id);
    const badgeSteamDetalhes = document.getElementById('badgeSteamDetalhes');
    if (badgeSteamDetalhes) {
        let mostrarBadgeSteam = false;
        let textoBadgeSteam = 'Conectado à sua biblioteca Steam';
        if (amigoVisualizando) {
            const jogoAmigo = (jogosCache || []).find(j => String(j.jogo_id) === String(jogoDetalhesAtual?.id));
            if (jogoAmigo?.steam_appid) {
                mostrarBadgeSteam = true;
                textoBadgeSteam = 'Na biblioteca Steam dele';
            }
        } else if (jogoNaMinhaLista?.steam_appid) {
            mostrarBadgeSteam = true;
        }
        badgeSteamDetalhes.style.display = mostrarBadgeSteam ? 'inline-flex' : 'none';
        if (mostrarBadgeSteam) {
            const spanTexto = badgeSteamDetalhes.querySelector('span');
            if (spanTexto) spanTexto.textContent = textoBadgeSteam;
        }
    }
    if (jaAdicionado) {
        
        // Verificar se tem avaliação (estrelas ou comentário)
        const temAvaliacao = jogoNaMinhaLista && (
            (jogoNaMinhaLista.avaliacao && jogoNaMinhaLista.avaliacao > 0) || 
            (jogoNaMinhaLista.comentario && jogoNaMinhaLista.comentario.trim())
        );
        
        // Se estiver na lista do amigo, não mostrar botões de edição/avaliação
        if (amigoVisualizando) {
            areaAcaoDetalhes.innerHTML = `
                <div class="detalhes-acoes-grupo">
                    <button class="btn-adicionar-detalhes adicionado" disabled>
                        <i class="fas fa-check"></i> Já está na sua lista
                    </button>
                </div>
            `;
            return;
        }
        
        areaAcaoDetalhes.innerHTML = `
            <div class="detalhes-acoes-grupo">
                <button class="btn-adicionar-detalhes adicionado" disabled>
                    <i class="fas fa-check"></i> Já está na sua lista
                </button>
                ${temAvaliacao ? `
                    <button class="btn-editar-detalhes" id="btnEditarDetalhes">
                        <i class="fas fa-edit"></i> Editar Avaliação
                    </button>
                ` : `
                    <button class="btn-avaliar-detalhes" id="btnAvaliarDetalhes">
                        <i class="fas fa-star"></i> Avaliar
                    </button>
                `}
                ${jogoNaMinhaLista ? `
                    <button class="btn-remover-detalhes" id="btnRemoverDetalhes" data-id="${jogoNaMinhaLista.id}">
                        <i class="fas fa-trash"></i> Remover da Lista
                    </button>
                ` : ''}
            </div>
        `;
        
        if (temAvaliacao) {
            document.getElementById('btnEditarDetalhes')?.addEventListener('click', () => {
                abrirModalEdicaoDeDetalhes(jogoNaMinhaLista);
            });
        } else {
            document.getElementById('btnAvaliarDetalhes')?.addEventListener('click', () => {
                abrirModalEdicaoDeDetalhes(jogoNaMinhaLista);
            });
        }
        
        if (jogoNaMinhaLista) {
            document.getElementById('btnRemoverDetalhes')?.addEventListener('click', () => {
                removerJogo(jogoNaMinhaLista.id);
            });
        }
    } else {
        areaAcaoDetalhes.innerHTML = `
            <button class="btn-adicionar-detalhes" id="btnAdicionarDetalhes">
                <i class="fas fa-plus"></i> Adicionar à Lista
            </button>
        `;
        
        document.getElementById('btnAdicionarDetalhes').addEventListener('click', () => {
            abrirModalStatusDeDetalhes();
        });
    }
}

function inicializarDelegacaoDetalhes() {
    if (!telaDetalhes || telaDetalhes.dataset.imgLoadListenerAtivo === 'true') return;
    telaDetalhes.addEventListener('load', (e) => {
        const target = e.target;
        if (target?.tagName === 'IMG') target.classList.remove('skeleton-img-loading');
    }, true);
    telaDetalhes.addEventListener('error', (e) => {
        const target = e.target;
        if (target?.tagName === 'IMG') target.classList.remove('skeleton-img-loading');
    }, true);
    telaDetalhes.dataset.imgLoadListenerAtivo = 'true';
}

async function abrirDetalhesJogoSteam(jogo) {
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    sessionStorage.setItem('filtroAtual', filtroAtual);
    sessionStorage.setItem('jogoDetalhesAberto', String(jogo.jogo_id));
    sessionStorage.setItem('jogoDetalhesAbertoSteam', '1');
    appContainer.style.display = 'none';
    telaDetalhes.style.display = 'block';
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    jogoDetalhesAtual = { ...jogo, id: jogo.jogo_id };
    capaDetalhes.classList.add('skeleton', 'skeleton-media', 'skeleton-img-loading');
    capaDetalhes.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
    nomeDetalhes.textContent = '';
    const badgeSteamEl = document.getElementById('badgeSteamDetalhes');
    if (badgeSteamEl) badgeSteamEl.style.display = 'none';
    const horasSteamEl = document.getElementById('horasSteamDetalhes');
    if (horasSteamEl) { horasSteamEl.style.display = 'none'; horasSteamEl.textContent = ''; }
    lancamentoDetalhes.textContent = '';
    descricaoDetalhes.textContent = '';
    plataformasDetalhes.textContent = '';
    generosDetalhes.textContent = '';
    desenvolvedoraDetalhes.textContent = '';
    areaAcaoDetalhes.innerHTML = '';
    const classificacaoContainer = document.getElementById('classificacaoContainer');
    if (classificacaoContainer) classificacaoContainer.style.display = 'none';
    const metacriticDetalhes = document.getElementById('metacriticDetalhes');
    if (metacriticDetalhes) metacriticDetalhes.textContent = 'Não informado';
    if (playtimeContainer) { playtimeContainer.style.display = 'none'; if (playtimeDetalhes) playtimeDetalhes.textContent = ''; }
    const dlcsSecao = document.getElementById('dlcsSecao');
    if (dlcsSecao) dlcsSecao.style.display = 'none';
    const trailersSecao = document.getElementById('trailersSecao');
    if (trailersSecao) trailersSecao.style.display = 'none';
    const screenshotsSecao = document.getElementById('screenshotsSecao');
    if (screenshotsSecao) screenshotsSecao.style.display = 'none';
    const requisitosSecao = document.getElementById('requisitosHardwareSecao');
    if (requisitosSecao) requisitosSecao.style.display = 'none';
    const jogosRelacionadosSecao = document.getElementById('jogosRelacionadosSecao');
    if (jogosRelacionadosSecao) jogosRelacionadosSecao.style.display = 'none';
    const amigosComJogo = document.getElementById('amigosComJogo');
    if (amigosComJogo) amigosComJogo.style.display = 'none';
    const listaAvaliacoesEl = document.getElementById('listaAvaliacoes');
    if (listaAvaliacoesEl) listaAvaliacoesEl.innerHTML = '<p class="sem-informacao">Carregando...</p>';
    nomeDetalhes.textContent = jogo.nome || 'Sem nome';
    lancamentoDetalhes.textContent = formatarData(jogo.lancamento);
    plataformasDetalhes.textContent = 'Não informado';
    generosDetalhes.textContent = 'Não informado';
    desenvolvedoraDetalhes.textContent = 'Não informado';
    descricaoDetalhes.textContent = 'Jogo da sua biblioteca Steam. Informações adicionais não disponíveis.';
    capaDetalhes.src = jogo.imagem || 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
    capaDetalhes.onload = () => { capaDetalhes.classList.remove('skeleton', 'skeleton-img-loading'); };
    capaDetalhes.onerror = () => { capaDetalhes.classList.remove('skeleton', 'skeleton-img-loading'); };
    atualizarBotaoModalDetalhes(true);
    const appidSteam = jogo.steam_appid || jogo.jogo_id;
    await Promise.allSettled([
        carregarAvaliacoes(jogo.jogo_id),
        carregarFotosJogo(jogo.jogo_id),
        carregarAmigosComJogo(jogo.jogo_id),
        (usuarioLogado?.steam_id && appidSteam) ? atualizarHorasSteamDetalhes(usuarioLogado.steam_id, appidSteam) : Promise.resolve()
    ]);
    if (amigosComJogo) amigosComJogo.style.display = 'block';
}

async function abrirModalDetalhes(jogoId) {
    const contextoId = criarNovoContextoDetalhes();
    // Salvar posição do scroll antes de abrir detalhes
    sessionStorage.setItem('scrollPosition', window.scrollY.toString());
    
    // Salvar filtro atual
    sessionStorage.setItem('filtroAtual', filtroAtual);
    
    // Salvar ID do jogo para restaurar ao atualizar página
    sessionStorage.setItem('jogoDetalhesAberto', jogoId.toString());
    sessionStorage.removeItem('jogoDetalhesAbertoSteam');
    
    // Ocultar container principal e mostrar tela de detalhes
    appContainer.style.display = 'none';
    telaDetalhes.style.display = 'block';
    
    // Scroll para o topo de forma agressiva e múltipla para garantir que funcione
    // Mesmo que a tela já esteja aberta, precisamos resetar o scroll
    const scrollarParaTopo = () => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        if (telaDetalhes.scrollTop !== undefined) {
            telaDetalhes.scrollTop = 0;
        }
    };
    
    // Fazer scroll imediatamente (síncrono)
    scrollarParaTopo();
    
    // Fazer scroll no próximo frame para garantir
    requestAnimationFrame(() => {
        scrollarParaTopo();
        // Fazer mais uma vez após um pequeno delay para garantir
        requestAnimationFrame(() => {
            scrollarParaTopo();
        });
    });
    
    jogoDetalhesAtual = null;
    
    // Limpar TODOS os campos antes de mostrar skeleton
    capaDetalhes.classList.add('skeleton', 'skeleton-media');
    capaDetalhes.classList.add('skeleton-img-loading');
    capaDetalhes.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACw=';
    nomeDetalhes.textContent = '';
    const badgeSteamEl = document.getElementById('badgeSteamDetalhes');
    if (badgeSteamEl) badgeSteamEl.style.display = 'none';
    const horasSteamDetalhesEl = document.getElementById('horasSteamDetalhes');
    if (horasSteamDetalhesEl) { horasSteamDetalhesEl.style.display = 'none'; horasSteamDetalhesEl.textContent = ''; }
    lancamentoDetalhes.textContent = '';
    descricaoDetalhes.textContent = '';
    plataformasDetalhes.textContent = '';
    generosDetalhes.textContent = '';
    desenvolvedoraDetalhes.textContent = '';
    areaAcaoDetalhes.innerHTML = '';
    
    // Limpar campos opcionais que podem estar visíveis
    const classificacaoContainer = document.getElementById('classificacaoContainer');
    const classificacaoDetalhes = document.getElementById('classificacaoDetalhes');
    if (classificacaoContainer) classificacaoContainer.style.display = 'none';
    if (classificacaoDetalhes) classificacaoDetalhes.textContent = '';
    
    const metacriticDetalhes = document.getElementById('metacriticDetalhes');
    if (metacriticDetalhes) metacriticDetalhes.textContent = '';
    
    if (playtimeContainer) {
        playtimeContainer.style.display = 'none';
        if (playtimeDetalhes) playtimeDetalhes.textContent = '';
    }
    
    const dlcsSecao = document.getElementById('dlcsSecao');
    const dlcsLista = document.getElementById('dlcsLista');
    if (dlcsSecao) dlcsSecao.style.display = 'none';
    if (dlcsLista) dlcsLista.innerHTML = '';
    
    const trailersSecao = document.getElementById('trailersSecao');
    if (trailersSecao) trailersSecao.style.display = 'none';
    
    const screenshotsSecao = document.getElementById('screenshotsSecao');
    if (screenshotsSecao) screenshotsSecao.style.display = 'none';
    
    const requisitosSecao = document.getElementById('requisitosHardwareSecao');
    if (requisitosSecao) requisitosSecao.style.display = 'none';
    
    const amigosComJogo = document.getElementById('amigosComJogo');
    if (amigosComJogo) amigosComJogo.style.display = 'none';

    // Mostrar skeletons para seções que serão carregadas
    const listaTrailers = document.getElementById('listaTrailers');
    if (listaTrailers) {
        listaTrailers.innerHTML = gerarSkeletonGridHtml(4);
    }
    
    const listaScreenshots = document.getElementById('listaScreenshots');
    if (listaScreenshots) {
        listaScreenshots.innerHTML = gerarSkeletonGridHtml(6);
    }
    
    const requisitosConteudo = document.getElementById('requisitosHardwareConteudo');
    if (requisitosConteudo) {
        requisitosConteudo.innerHTML = gerarSkeletonGridHtml(2);
    }
    
    const listaAvaliacoesEl = document.getElementById('listaAvaliacoes');
    if (listaAvaliacoesEl) {
        listaAvaliacoesEl.innerHTML = gerarSkeletonGridHtml(3);
    }
    
    const jogosSerie = document.getElementById('jogosSerie');
    const jogosDesenvolvedora = document.getElementById('jogosDesenvolvedora');
    const conquistasJogo = document.getElementById('conquistasJogo');
    if (jogosSerie) {
        jogosSerie.innerHTML = gerarSkeletonGridHtml(2);
    }
    if (jogosDesenvolvedora) {
        jogosDesenvolvedora.innerHTML = gerarSkeletonGridHtml(2);
    }
    if (conquistasJogo) {
        conquistasJogo.innerHTML = gerarSkeletonGridHtml(2);
    }
    
    const jogoFromCache = (meusJogosCache || []).find(j => String(j.jogo_id) === String(jogoId))
        || (jogosCache || []).find(j => String(j.jogo_id) === String(jogoId));
    const steamSomente = jogoFromCache && jogoFromCache.steam_appid && String(jogoFromCache.jogo_id) === String(jogoFromCache.steam_appid);
    if (steamSomente) {
        abrirDetalhesJogoSteam(jogoFromCache);
        return;
    }

    let detalhes = await buscarDetalhesJogo(jogoId);
    if (!isContextoDetalhesAtivo(contextoId)) return;

    if (!detalhes && jogoFromCache && jogoFromCache.steam_appid) {
        abrirDetalhesJogoSteam(jogoFromCache);
        return;
    }

    if (detalhes) {
        jogoDetalhesAtual = {
            id: jogoId,
            nome: detalhes.name,
            imagem: detalhes.background_image || 'https://via.placeholder.com/300x400?text=Sem+Imagem',
            lancamento: detalhes.released
        };
        
        capaDetalhes.classList.add('skeleton-img-loading');
        capaDetalhes.onload = () => {
            capaDetalhes.classList.remove('skeleton');
            capaDetalhes.classList.remove('skeleton-img-loading');
        };
        capaDetalhes.onerror = () => {
            capaDetalhes.classList.remove('skeleton');
            capaDetalhes.classList.remove('skeleton-img-loading');
        };
        const capaUrl = detalhes.background_image || 'https://via.placeholder.com/700x300?text=Sem+Imagem';
        capaDetalhes.src = ConnectionManager.adjustImageUrl(capaUrl, 'detail');
        capaDetalhes.loading = ConnectionManager.velocidade === 'slow' ? 'lazy' : 'eager';
        capaDetalhes.decoding = ConnectionManager.getDecodingStrategy();
        nomeDetalhes.textContent = detalhes.name;
        lancamentoDetalhes.textContent = formatarData(detalhes.released);
        
        const classificacaoContainer = document.getElementById('classificacaoContainer');
        const classificacaoDetalhes = document.getElementById('classificacaoDetalhes');
        if (detalhes.esrb_rating && detalhes.esrb_rating.name) {
            classificacaoContainer.style.display = 'flex';
            const classificacaoOriginal = detalhes.esrb_rating.name;
            const classificacaoTraduzida = classificacoesESRB[classificacaoOriginal] || classificacaoOriginal;
            classificacaoDetalhes.textContent = classificacaoTraduzida;
        } else {
            classificacaoContainer.style.display = 'none';
        }
        
        const metacriticDetalhes = document.getElementById('metacriticDetalhes');
        if (detalhes.metacritic) {
            const score = detalhes.metacritic;
            let corScore = '#22c55e';
            if (score < 50) corScore = '#ef4444';
            else if (score < 75) corScore = '#fbbf24';
            metacriticDetalhes.innerHTML = `<span style="color: ${corScore}; font-weight: 700;">${score}</span>/100`;
        } else {
            metacriticDetalhes.textContent = 'Sem avaliação';
        }
        
        const plataformasOriginal = detalhes.platforms?.map(p => p.platform.name).join(', ') || 'Não informado';
        const generosOriginal = detalhes.genres?.map(g => g.name).join(', ') || 'Não informado';
        const desenvolvedoraOriginal = detalhes.developers?.map(d => d.name).join(', ') || 'Não informado';
        const descricaoOriginal = detalhes.description_raw || detalhes.description || 'Descrição não disponível.';
        const descricaoLimpa = descricaoOriginal.replace(/<[^>]*>/g, '');
        
        if (plataformasOriginal !== 'Não informado') {
            traduzirTexto(plataformasOriginal).then(traducao => {
                if (!isContextoDetalhesAtivo(contextoId)) return;
                plataformasDetalhes.textContent = traducao;
            });
        } else {
            plataformasDetalhes.textContent = plataformasOriginal;
        }
        
        if (generosOriginal !== 'Não informado') {
            traduzirTexto(generosOriginal).then(traducao => {
                if (!isContextoDetalhesAtivo(contextoId)) return;
                generosDetalhes.textContent = traducao;
            });
        } else {
            generosDetalhes.textContent = generosOriginal;
        }
        
        if (detalhes.playtime && detalhes.playtime > 0) {
            playtimeContainer.style.display = 'flex';
            const horas = detalhes.playtime;
            const horasArredondadas = Math.round(horas);
            let textoPlaytime = '';
            if (horasArredondadas === 0) {
                textoPlaytime = 'Menos de 1 hora';
            } else {
                textoPlaytime = `${horasArredondadas} hora${horasArredondadas !== 1 ? 's' : ''}`;
            }
            playtimeDetalhes.textContent = textoPlaytime;
        } else {
            playtimeContainer.style.display = 'none';
        }
        
        buscarDLCsJogo(detalhes.id).then((dlcs) => {
            if (dlcs && dlcs.length > 0) {
                dlcsSecao.style.display = 'block';
                dlcsLista.innerHTML = dlcs.map(dlc => `<div class="dlc-item">${escapeHtml(dlc.name)}</div>`).join('');
                return;
            }
            dlcsSecao.style.display = 'none';
        }).catch(() => {
            dlcsSecao.style.display = 'none';
        });
        
        desenvolvedoraDetalhes.textContent = desenvolvedoraOriginal;
        
        if (descricaoLimpa !== 'Descrição não disponível.') {
            traduzirTexto(descricaoLimpa).then(traducao => {
                if (!isContextoDetalhesAtivo(contextoId)) return;
                descricaoDetalhes.textContent = traducao;
            });
        } else {
            descricaoDetalhes.textContent = descricaoLimpa;
        }
        
        const jaAdicionado = jogoJaAdicionado(jogoId);
        atualizarBotaoModalDetalhes(jaAdicionado);

        const steamIdDetalhes = amigoVisualizando ? (amigoVisualizando.steam_id || null) : (usuarioLogado?.steam_id || null);
        const steamAppIdDetalhes = jogoFromCache?.steam_appid;
        await Promise.allSettled([
            carregarTrailers(detalhes.id, detalhes.name, contextoId),
            carregarRequisitosHardware(detalhes, contextoId),
            carregarScreenshots(detalhes.id, contextoId),
            carregarFotosJogo(jogoId, contextoId),
            carregarAmigosComJogo(jogoId, contextoId),
            carregarAvaliacoes(jogoId, contextoId),
            carregarJogosRelacionados(detalhes, contextoId),
            (steamIdDetalhes && steamAppIdDetalhes) ? atualizarHorasSteamDetalhes(steamIdDetalhes, steamAppIdDetalhes, contextoId) : Promise.resolve()
        ]);
        
        // Garantir scroll no topo após todo conteúdo ser carregado
        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        });
    }
}

async function carregarTrailers(jogoId, nomeJogo, contextoId = null) {
    const trailersSecao = document.getElementById('trailersSecao');
    const listaTrailers = document.getElementById('listaTrailers');
    
    if (!trailersSecao || !listaTrailers) return;
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    try {
        let trailers = await buscarTrailersJogo(jogoId);
        let usandoYouTube = false;
        if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
        
        if (trailers.length === 0 && nomeJogo) {
            trailers = criarTrailersYouTube(nomeJogo);
            usandoYouTube = true;
        }
        
        if (trailers.length === 0) {
            trailersSecao.style.display = 'none';
            return;
        }
        
        trailersSecao.style.display = 'block';
        
        if (usandoYouTube) {
            listaTrailers.innerHTML = `
                <div class="trailer-item trailer-youtube-search">
                    <div class="trailer-youtube-placeholder">
                        <i class="fas fa-play-circle"></i>
                        <p>Buscar trailers no YouTube</p>
                    </div>
                    <a href="${trailers[0].searchUrl}" target="_blank" class="btn-buscar-youtube">
                        <i class="fab fa-youtube"></i> Ver Trailers no YouTube
                    </a>
                </div>
            `;
        } else {
            listaTrailers.innerHTML = trailers.slice(0, 4).map(trailer => `
                <div class="trailer-item">
                    <video controls>
                        <source src="${trailer.data.max || trailer.data['480']}" type="video/mp4">
                        Seu navegador não suporta vídeos.
                    </video>
                    <div class="trailer-nome">${trailer.name}</div>
                </div>
            `).join('');
        }
    } catch (erro) {
        console.error('Erro ao carregar trailers:', erro);
        trailersSecao.style.display = 'none';
    }
}

async function carregarRequisitosHardware(detalhes, contextoId = null) {
    const requisitosSecao = document.getElementById('requisitosHardwareSecao');
    const requisitosConteudo = document.getElementById('requisitosHardwareConteudo');
    
    if (!requisitosSecao || !requisitosConteudo) return;
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    try {
        if (!detalhes.platforms || detalhes.platforms.length === 0) {
            requisitosSecao.style.display = 'none';
            return;
        }
        
        const plataformaPC = detalhes.platforms.find(p => {
            const platform = p.platform || {};
            return platform.slug === 'pc' || 
                   platform.name === 'PC' || 
                   (platform.name && platform.name.toLowerCase().includes('pc'));
        });
        
        if (!plataformaPC) {
            requisitosSecao.style.display = 'none';
            return;
        }
        
        const requisitos = plataformaPC.requirements || {};
        const temMinimo = requisitos.minimum && typeof requisitos.minimum === 'string' && requisitos.minimum.trim().length > 0;
        const temRecomendado = requisitos.recommended && typeof requisitos.recommended === 'string' && requisitos.recommended.trim().length > 0;
        
        if (!temMinimo && !temRecomendado) {
            requisitosSecao.style.display = 'none';
            return;
        }
        
        requisitosSecao.style.display = 'block';
        
        let html = '';
        
        if (temRecomendado) {
            const requisitosFormatados = await formatarRequisitos(requisitos.recommended);
            if (requisitosFormatados) {
                html += `
                    <div class="requisitos-tipo">
                        <h4><i class="fas fa-check-circle"></i> Recomendado</h4>
                        <div class="requisitos-texto">${requisitosFormatados}</div>
                    </div>
                `;
            }
        }
        
        if (temMinimo) {
            const requisitosFormatados = await formatarRequisitos(requisitos.minimum);
            if (requisitosFormatados) {
                html += `
                    <div class="requisitos-tipo">
                        <h4><i class="fas fa-info-circle"></i> Mínimo</h4>
                        <div class="requisitos-texto">${requisitosFormatados}</div>
                    </div>
                `;
            }
        }
        
        if (!html) {
            requisitosSecao.style.display = 'none';
            return;
        }
        
        requisitosConteudo.innerHTML = html;
    } catch (erro) {
        console.error('Erro ao carregar requisitos de hardware:', erro);
        requisitosSecao.style.display = 'none';
    }
}

async function formatarRequisitos(texto) {
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
    
    const requisitosPrincipais = {
        'os': { pt: 'Sistema Operacional', prioridade: 1, palavrasChave: ['windows', 'linux', 'macos', 'operating', 'sistema operacional', 'sistema operativo'] },
        'operating system': { pt: 'Sistema Operacional', prioridade: 1, palavrasChave: ['windows', 'linux', 'macos', 'operating', 'sistema operacional', 'sistema operativo'] },
        'sistema operacional': { pt: 'Sistema Operacional', prioridade: 1, palavrasChave: ['windows', 'linux', 'macos', 'operating', 'sistema operacional', 'sistema operativo'] },
        'sistema operativo': { pt: 'Sistema Operacional', prioridade: 1, palavrasChave: ['windows', 'linux', 'macos', 'operating', 'sistema operacional', 'sistema operativo'] },
        'processor': { pt: 'Processador', prioridade: 2, palavrasChave: ['intel', 'amd', 'core', 'ryzen', 'processor', 'cpu', 'processador'] },
        'processador': { pt: 'Processador', prioridade: 2, palavrasChave: ['intel', 'amd', 'core', 'ryzen', 'processor', 'cpu', 'processador'] },
        'cpu': { pt: 'Processador', prioridade: 2, palavrasChave: ['intel', 'amd', 'core', 'ryzen', 'processor', 'cpu', 'processador'] },
        'процессор': { pt: 'Processador', prioridade: 2, palavrasChave: ['intel', 'amd', 'core', 'ryzen', 'processor', 'cpu', 'processador'] },
        'memory': { pt: 'Memória', prioridade: 3, palavrasChave: ['memory', 'ram', 'memória', 'memoria'] },
        'memória': { pt: 'Memória', prioridade: 3, palavrasChave: ['memory', 'ram', 'memória', 'memoria'] },
        'memoria': { pt: 'Memória', prioridade: 3, palavrasChave: ['memory', 'ram', 'memória', 'memoria'] },
        'ram': { pt: 'Memória', prioridade: 3, palavrasChave: ['memory', 'ram', 'memória', 'memoria'] },
        'оперативная память': { pt: 'Memória', prioridade: 3, palavrasChave: ['memory', 'ram', 'memória', 'memoria'] },
        'graphics': { pt: 'Placa de Vídeo', prioridade: 4, palavrasChave: ['graphics', 'gpu', 'nvidia', 'geforce', 'radeon', 'rtx', 'gtx', 'rx', 'placa de vídeo'] },
        'graphics card': { pt: 'Placa de Vídeo', prioridade: 4, palavrasChave: ['graphics', 'gpu', 'nvidia', 'geforce', 'radeon', 'rtx', 'gtx', 'rx', 'placa de vídeo'] },
        'video card': { pt: 'Placa de Vídeo', prioridade: 4, palavrasChave: ['graphics', 'gpu', 'nvidia', 'geforce', 'radeon', 'rtx', 'gtx', 'rx', 'placa de vídeo'] },
        'placa de vídeo': { pt: 'Placa de Vídeo', prioridade: 4, palavrasChave: ['graphics', 'gpu', 'nvidia', 'geforce', 'radeon', 'rtx', 'gtx', 'rx', 'placa de vídeo'] },
        'placa de video': { pt: 'Placa de Vídeo', prioridade: 4, palavrasChave: ['graphics', 'gpu', 'nvidia', 'geforce', 'radeon', 'rtx', 'gtx', 'rx', 'placa de vídeo'] },
        'gpu': { pt: 'Placa de Vídeo', prioridade: 4, palavrasChave: ['graphics', 'gpu', 'nvidia', 'geforce', 'radeon', 'rtx', 'gtx', 'rx', 'placa de vídeo'] },
        'видеокарта': { pt: 'Placa de Vídeo', prioridade: 4, palavrasChave: ['graphics', 'gpu', 'nvidia', 'geforce', 'radeon', 'rtx', 'gtx', 'rx', 'placa de vídeo'] },
        'storage': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] },
        'armazenamento': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] },
        'hard drive': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] },
        'disk space': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] },
        'available space': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] },
        'espaço em disco': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] },
        'espaço disponível': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] },
        'место на диске': { pt: 'Armazenamento', prioridade: 5, palavrasChave: ['storage', 'disk', 'space', 'gb', 'mb', 'armazenamento', 'espaço'] }
    };
    
    const linhas = formatado.split(/\n/);
    const linhasFormatadas = [];
    const promessasTraducao = [];
    
    for (const linha of linhas) {
        const linhaLimpa = linha.trim();
        if (!linhaLimpa) continue;
        
        const match = linhaLimpa.match(/^([^:]+):(.*)$/);
        if (match) {
            let label = match[1].trim();
            let valor = match[2].trim();
            
            if (!valor) continue;
            
            const labelLower = label.toLowerCase();
            const valorLower = valor.toLowerCase();
            let encontrado = false;
            let melhorMatch = null;
            let melhorPrioridade = 999;
            let melhorScore = 0;
            
            for (const [chave, info] of Object.entries(requisitosPrincipais)) {
                let score = 0;
                let corresponde = false;
                
                if (labelLower === chave) {
                    score = 100;
                    corresponde = true;
                } else if (labelLower.startsWith(chave) || chave.startsWith(labelLower)) {
                    score = 80;
                    corresponde = true;
                } else if (labelLower.includes(chave) || chave.includes(labelLower)) {
                    score = 60;
                    corresponde = true;
                }
                
                if (corresponde && info.palavrasChave) {
                    const temPalavraChave = info.palavrasChave.some(palavra => 
                        valorLower.includes(palavra.toLowerCase())
                    );
                    if (temPalavraChave) {
                        score += 20;
                    }
                }
                
                if (corresponde && (info.prioridade < melhorPrioridade || (info.prioridade === melhorPrioridade && score > melhorScore))) {
                    melhorMatch = { chave, info };
                    melhorPrioridade = info.prioridade;
                    melhorScore = score;
                    encontrado = true;
                }
            }
            
            if (!encontrado && !ehTextoEmPortugues(label)) {
                const labelTraduzido = await traduzirTexto(label, 'auto');
                const labelLowerTraduzido = labelTraduzido.toLowerCase();
                
                for (const [chave, info] of Object.entries(requisitosPrincipais)) {
                    if (labelLowerTraduzido === chave || labelLowerTraduzido.includes(chave) || chave.includes(labelLowerTraduzido)) {
                        if (info.prioridade < melhorPrioridade) {
                            melhorMatch = { chave, info };
                            melhorPrioridade = info.prioridade;
                            encontrado = true;
                        }
                    }
                }
            }
            
            if (encontrado && melhorMatch) {
                const { preservado, termos } = preservarTermosTecnicos(valor);
                let valorParaTraduzir = preservado;
                
                if (!ehTextoEmPortugues(valorParaTraduzir)) {
                    try {
                        valorParaTraduzir = await traduzirTexto(valorParaTraduzir, 'auto');
                    } catch (e) {
                        console.error('Erro ao traduzir valor:', e);
                    }
                }
                
                const valorRestaurado = restaurarTermosTecnicos(valorParaTraduzir, termos);
                const valorFormatado = traduzirTextoRequisitos(valorRestaurado);
                
                linhasFormatadas.push({
                    prioridade: melhorMatch.info.prioridade,
                    html: `<div class="requisito-linha requisito-item"><strong>${escapeHtml(melhorMatch.info.pt)}:</strong> ${escapeHtml(valorFormatado)}</div>`
                });
            }
        }
    }
    
    linhasFormatadas.sort((a, b) => a.prioridade - b.prioridade);
    
    return linhasFormatadas.map(item => item.html).join('');
}

function ehTextoEmPortugues(texto) {
    if (!texto) return false;
    const caracteresPortugues = /[áàâãéêíóôõúçÁÀÂÃÉÊÍÓÔÕÚÇ]/;
    const temCaracteresPortugues = caracteresPortugues.test(texto);
    const temPalavrasPortuguesas = /\b(sistema|operacional|processador|memória|memoria|placa|vídeo|video|armazenamento|espaço|disco|disponível|disponivel)\b/i.test(texto);
    return temCaracteresPortugues || temPalavrasPortuguesas;
}

function traduzirTermoRequisito(termo) {
    const traducoes = {
        'OS': 'Sistema Operacional',
        'Operating System': 'Sistema Operacional',
        'Processor': 'Processador',
        'Memory': 'Memória',
        'Graphics': 'Placa de Vídeo',
        'Graphics Card': 'Placa de Vídeo',
        'Video Card': 'Placa de Vídeo',
        'Storage': 'Armazenamento',
        'Hard Drive': 'Disco Rígido',
        'Disk Space': 'Espaço em Disco',
        'Available Space': 'Espaço Disponível',
        'Sound Card': 'Placa de Som',
        'Sound': 'Som',
        'Network': 'Rede',
        'Internet': 'Internet',
        'Connection': 'Conexão',
        'Additional Notes': 'Notas Adicionais',
        'Other requirements': 'Outros Requisitos',
        'Partner Requirements': 'Requisitos do Parceiro',
        'Requirements': 'Requisitos',
        'Note': 'Nota',
        'Notes': 'Notas'
    };
    
    return traducoes[termo] || termo;
}

function traduzirTextoRequisitos(texto) {
    if (!texto || typeof texto !== 'string') return texto;
    
    let resultado = texto;
    
    const termosParaTraduzir = [
        { en: /\bOperating System\b/gi, pt: 'Sistema Operacional' },
        { en: /\bOS\b(?!\s*\d)/gi, pt: 'Sistema Operacional' },
        { en: /\bProcessor\b/gi, pt: 'Processador' },
        { en: /\bMemory\b/gi, pt: 'Memória' },
        { en: /\bGraphics Card\b/gi, pt: 'Placa de Vídeo' },
        { en: /\bVideo Card\b/gi, pt: 'Placa de Vídeo' },
        { en: /\bGraphics\b/gi, pt: 'Placa de Vídeo' },
        { en: /\bStorage\b/gi, pt: 'Armazenamento' },
        { en: /\bHard Drive\b/gi, pt: 'Disco Rígido' },
        { en: /\bDisk Space\b/gi, pt: 'Espaço em Disco' },
        { en: /\bAvailable Space\b/gi, pt: 'Espaço Disponível' },
        { en: /\bcompatible\b/gi, pt: 'compatível' },
        { en: /\bcompatibility\b/gi, pt: 'compatibilidade' },
        { en: /\brequired\b/gi, pt: 'necessário' },
        { en: /\brecommended\b/gi, pt: 'recomendado' },
        { en: /\bminimum\b/gi, pt: 'mínimo' }
    ];
    
    termosParaTraduzir.forEach(({ en, pt }) => {
        resultado = resultado.replace(en, pt);
    });
    
    return resultado;
}

function preservarTermosTecnicos(texto) {
    if (!texto || typeof texto !== 'string') return { preservado: texto, termos: [] };
    
    const termosPreservar = [
        'Windows 11', 'Windows 10', 'Windows 8.1', 'Windows 8', 'Windows 7', 'Windows Vista', 'Windows XP',
        'Windows', 'Linux', 'macOS', 'Steam', 'DirectX', 'OpenGL', 'Vulkan',
        'Intel Core', 'Intel', 'AMD Ryzen', 'AMD', 'NVIDIA', 'Nvidia', 'GeForce', 'Radeon', 'Arc',
        'Core i7', 'Core i5', 'Core i3', 'Core', 'Ryzen 7', 'Ryzen 5', 'Ryzen 3', 'Ryzen', 'Pentium', 'Celeron', 'Athlon', 'FX', 'Threadripper',
        'RTX 3060', 'RTX 3070', 'RTX 3080', 'RTX 3090', 'RTX 4060', 'RTX 4070', 'RTX 4080', 'RTX 4090', 'RTX',
        'GTX 1060', 'GTX 1070', 'GTX 1080', 'GTX 1660', 'GTX',
        'RX 6800', 'RX 5600', 'RX 580', 'RX',
        'HD', 'GT', 'Ti', 'Super',
        'GB', 'MB', 'TB', 'GHz', 'MHz', 'Hz',
        'RAM', 'CPU', 'GPU', 'VRAM', 'SSD', 'HDD',
        'x64', 'x86', '64-bit', '32-bit', '64 bit', '32 bit',
        'Service Pack', 'SP1', 'SP2', 'SP3'
    ];
    
    let resultado = texto;
    const termosEncontrados = [];
    const termosUsados = new Set();
    
    termosPreservar.forEach(termo => {
        const regex = new RegExp(`\\b${termo.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi');
        const matches = texto.match(regex);
        if (matches) {
            matches.forEach(match => {
                if (!termosUsados.has(match)) {
                    termosEncontrados.push(match);
                    termosUsados.add(match);
                    resultado = resultado.replace(new RegExp(`\\b${match.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\b`, 'gi'), `__PRESERVAR_${match.toUpperCase().replace(/\s+/g, '_')}__`);
                }
            });
        }
    });
    
    return { preservado: resultado, termos: termosEncontrados };
}

function restaurarTermosTecnicos(texto, termos) {
    if (!texto || !termos || termos.length === 0) return texto;
    
    let resultado = texto;
    termos.forEach(termo => {
        const placeholder = `__PRESERVAR_${termo.toUpperCase().replace(/\s+/g, '_')}__`;
        resultado = resultado.replace(new RegExp(placeholder.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), termo);
    });
    
    return resultado;
}

function escapeHtml(texto) {
    if (!texto) return '';
    const div = document.createElement('div');
    div.textContent = texto;
    return div.innerHTML;
}

async function carregarScreenshots(jogoId, contextoId = null) {
    const screenshotsSecao = document.getElementById('screenshotsSecao');
    const listaScreenshots = document.getElementById('listaScreenshots');
    
    if (!screenshotsSecao || !listaScreenshots) return;
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    try {
        const screenshots = await buscarScreenshotsJogo(jogoId);
        if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
        
        if (screenshots.length === 0) {
            screenshotsSecao.style.display = 'none';
            return;
        }
        
        screenshotsSecao.style.display = 'block';
        
        // Verificar se é mobile
        const isMobile = window.innerWidth <= 768;
        
        if (isMobile) {
            // Criar slider para mobile (sem setas)
            listaScreenshots.className = 'lista-screenshots-slider';
            listaScreenshots.innerHTML = `
                <div class="screenshots-slider-wrapper">
                    <div class="screenshots-slider-track">
                        ${screenshots.map((screenshot, index) => {
                            const adjustedUrl = ConnectionManager.adjustImageUrl(screenshot.image, 'screenshot');
                            const loadingStrategy = ConnectionManager.getLoadingStrategy();
                            const decodingStrategy = ConnectionManager.getDecodingStrategy();
                            return `
                            <div class="screenshot-slide" data-index="${index}" data-url="${adjustedUrl}">
                                <img src="${adjustedUrl}" alt="Screenshot ${index + 1}" class="skeleton-img-loading" loading="${loadingStrategy}" decoding="${decodingStrategy}">
                            </div>
                        `;
                        }).join('')}
                    </div>
                    <div class="screenshots-slider-indicators">
                        ${screenshots.map((_, index) => `
                            <button class="slider-indicator ${index === 0 ? 'ativo' : ''}" data-index="${index}" aria-label="Ir para screenshot ${index + 1}"></button>
                        `).join('')}
                    </div>
                </div>
            `;
            
            // Inicializar slider
            let currentSlide = 0;
            const sliderTrack = listaScreenshots.querySelector('.screenshots-slider-track');
            const slides = listaScreenshots.querySelectorAll('.screenshot-slide');
            const indicators = listaScreenshots.querySelectorAll('.slider-indicator');
            
            function updateSlider() {
                const slideWidth = listaScreenshots.offsetWidth;
                sliderTrack.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
                
                indicators.forEach((ind, idx) => {
                    ind.classList.toggle('ativo', idx === currentSlide);
                });
            }
            
            // Salvar referências do slider para sincronização
            previewSliderRefs = {
                setSlide: (index) => {
                    if (index >= 0 && index < slides.length) {
                        currentSlide = index;
                        updateSlider();
                    }
                },
                getCurrentSlide: () => currentSlide
            };
            
            indicators.forEach((ind, idx) => {
                ind.addEventListener('click', () => {
                    currentSlide = idx;
                    updateSlider();
                });
            });
            
            // Touch events para swipe
            let startX = 0;
            let currentX = 0;
            let isDragging = false;
            let touchStartTime = 0;
            let touchMoved = false;
            
            listaScreenshots.addEventListener('touchstart', (e) => {
                startX = e.touches[0].clientX;
                isDragging = true;
                touchStartTime = Date.now();
                touchMoved = false;
            });
            
            listaScreenshots.addEventListener('touchmove', (e) => {
                if (!isDragging) return;
                currentX = e.touches[0].clientX;
                const diff = Math.abs(startX - currentX);
                if (diff > 10) {
                    touchMoved = true;
                }
            });
            
            listaScreenshots.addEventListener('touchend', (e) => {
                if (!isDragging) return;
                isDragging = false;
                
                const diff = startX - currentX;
                const threshold = 50;
                const touchDuration = Date.now() - touchStartTime;
                
                // Se houve movimento significativo e rápido, processar swipe
                if (touchMoved && Math.abs(diff) > threshold && touchDuration < 300) {
                    e.preventDefault();
                    if (diff > 0 && currentSlide < slides.length - 1) {
                        currentSlide++;
                        updateSlider();
                    } else if (diff < 0 && currentSlide > 0) {
                        currentSlide--;
                        updateSlider();
                    }
                    return; // Não processar como clique
                }
                
                // Se foi um toque rápido sem movimento, tratar como clique
                if (!touchMoved && touchDuration < 300) {
                    const clickedSlide = e.target.closest('.screenshot-slide');
                    if (clickedSlide) {
                        e.preventDefault();
                        // Usar o currentSlide atual, que representa a imagem visível
                        abrirModalScreenshot(screenshots, currentSlide);
                    }
                }
            });
            
            updateSlider();
        } else {
            // Grid normal para desktop
            listaScreenshots.className = 'lista-screenshots';
            listaScreenshots.innerHTML = screenshots.map((screenshot, index) => {
                const adjustedUrl = ConnectionManager.adjustImageUrl(screenshot.image, 'screenshot');
                const loadingStrategy = ConnectionManager.getLoadingStrategy();
                const decodingStrategy = ConnectionManager.getDecodingStrategy();
                return `
                <div class="screenshot-item" data-index="${index}" data-url="${adjustedUrl}">
                    <img src="${adjustedUrl}" alt="Screenshot ${index + 1}" class="skeleton-img-loading" loading="${loadingStrategy}" decoding="${decodingStrategy}">
                </div>
            `;
            }).join('');
            
            // Adicionar event listeners para abrir modal
            document.querySelectorAll('.screenshot-item').forEach(item => {
                item.addEventListener('click', () => {
                    abrirModalScreenshot(screenshots, parseInt(item.dataset.index));
                });
            });
        }
    } catch (erro) {
        console.error('Erro ao carregar screenshots:', erro);
        screenshotsSecao.style.display = 'none';
    }
}

let screenshotsAtuais = [];
let screenshotIndexAtual = 0;
let modalScreenshotHTMLOriginal = null;
let previewSliderRefs = null;
let modalCurrentSlideRef = null;

let fotosAmpliadaAtuais = [];
let fotoAmpliadaIndexAtual = 0;

function abrirModalScreenshot(screenshots, index) {
    screenshotsAtuais = screenshots;
    screenshotIndexAtual = index;
    
    const modalScreenshot = document.getElementById('modalScreenshot');
    const screenshotAmpliada = document.getElementById('screenshotAmpliada');
    const modalConteudo = modalScreenshot.querySelector('.modal-screenshot-conteudo');
    
    // Salvar HTML original na primeira vez
    if (!modalScreenshotHTMLOriginal) {
        modalScreenshotHTMLOriginal = modalConteudo.innerHTML;
    }
    
    const isMobile = window.innerWidth <= 768;
    
    if (isMobile) {
        // No mobile, criar slider no modal
        modalConteudo.innerHTML = `
            <button class="btn-fechar-screenshot"><i class="fas fa-times"></i></button>
            <div class="modal-screenshot-slider-wrapper">
                <div class="modal-screenshot-slider-track">
                    ${screenshots.map((screenshot, idx) => {
                        const adjustedUrl = ConnectionManager.adjustImageUrl(screenshot.image, 'screenshot');
                        const loadingStrategy = ConnectionManager.getLoadingStrategy();
                        const decodingStrategy = ConnectionManager.getDecodingStrategy();
                        return `
                        <div class="modal-screenshot-slide">
                            <img src="${adjustedUrl}" alt="Screenshot ${idx + 1}" class="skeleton-img-loading" loading="${loadingStrategy}" decoding="${decodingStrategy}">
                        </div>
                    `;
                    }).join('')}
                </div>
                <div class="modal-screenshot-indicators">
                    ${screenshots.map((_, idx) => `
                        <button class="modal-slider-indicator ${idx === index ? 'ativo' : ''}" data-index="${idx}"></button>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Inicializar slider do modal
        let modalCurrentSlide = index;
        const modalSliderTrack = modalConteudo.querySelector('.modal-screenshot-slider-track');
        const modalSlides = modalConteudo.querySelectorAll('.modal-screenshot-slide');
        const modalIndicators = modalConteudo.querySelectorAll('.modal-slider-indicator');
        
        // Salvar referência para sincronização ao fechar
        modalCurrentSlideRef = {
            getCurrentSlide: () => modalCurrentSlide
        };
        
        let isInitializing = true;
        
        function updateModalSlider(skipTransition = false) {
            if (!modalSliderTrack || modalSlides.length === 0) return;
            const slideWidth = modalConteudo.offsetWidth;
            
            // Desabilitar transição na inicialização
            if (skipTransition || isInitializing) {
                modalSliderTrack.style.transition = 'none';
            } else {
                modalSliderTrack.style.transition = '';
            }
            
            modalSliderTrack.style.transform = `translateX(-${modalCurrentSlide * slideWidth}px)`;
            
            modalIndicators.forEach((ind, idx) => {
                ind.classList.toggle('ativo', idx === modalCurrentSlide);
            });
            
            // Reabilitar transição após a primeira atualização
            if (isInitializing) {
                requestAnimationFrame(() => {
                    isInitializing = false;
                    modalSliderTrack.style.transition = '';
                });
            }
        }
        
        // Touch events para swipe no modal (apenas no slider, não no botão de fechar)
        let modalStartX = 0;
        let modalCurrentX = 0;
        let modalIsDragging = false;
        
        const modalSliderWrapper = modalConteudo.querySelector('.modal-screenshot-slider-wrapper');
        if (modalSliderWrapper) {
            modalSliderWrapper.addEventListener('touchstart', (e) => {
                // Não iniciar drag se clicar no botão de fechar
                if (e.target.closest('.btn-fechar-screenshot')) return;
                modalStartX = e.touches[0].clientX;
                modalIsDragging = true;
            });
            
            modalSliderWrapper.addEventListener('touchmove', (e) => {
                if (!modalIsDragging) return;
                e.preventDefault(); // Prevenir scroll durante drag
                modalCurrentX = e.touches[0].clientX;
            });
            
            modalSliderWrapper.addEventListener('touchend', (e) => {
                if (!modalIsDragging) return;
                modalIsDragging = false;
                
                // Não processar se foi um clique no botão de fechar
                if (e.target.closest('.btn-fechar-screenshot')) return;
                
                const diff = modalStartX - modalCurrentX;
                const threshold = 50;
                
                if (Math.abs(diff) > threshold) {
                    if (diff > 0 && modalCurrentSlide < modalSlides.length - 1) {
                        modalCurrentSlide++;
                        updateModalSlider();
                    } else if (diff < 0 && modalCurrentSlide > 0) {
                        modalCurrentSlide--;
                        updateModalSlider();
                    }
                }
            });
        }
        
        // Event listeners para indicadores do modal
        modalIndicators.forEach((ind, idx) => {
            ind.addEventListener('click', () => {
                modalCurrentSlide = idx;
                updateModalSlider();
            });
        });
        
        // Event listener para fechar
        const btnFechar = modalConteudo.querySelector('.btn-fechar-screenshot');
        if (btnFechar) {
            btnFechar.addEventListener('click', (e) => {
                e.stopPropagation();
                fecharModalScreenshot();
            });
        }
        
        // Inicializar slider após o DOM estar pronto, sem animação
        requestAnimationFrame(() => {
            updateModalSlider(true);
        });
    } else {
        // Desktop: modo normal com setas
        screenshotAmpliada.classList.add('skeleton-img-loading');
        screenshotAmpliada.onload = () => screenshotAmpliada.classList.remove('skeleton-img-loading');
        screenshotAmpliada.onerror = () => screenshotAmpliada.classList.remove('skeleton-img-loading');
        screenshotAmpliada.src = screenshots[index].image;
    }
    
    modalScreenshot.classList.add('ativo');
    document.body.style.overflow = 'hidden';
}

function fecharModalScreenshot() {
    const modalScreenshot = document.getElementById('modalScreenshot');
    const modalConteudo = modalScreenshot.querySelector('.modal-screenshot-conteudo');
    
    // Sincronizar slider do preview com a posição do modal antes de fechar
    const isMobile = window.innerWidth <= 768;
    if (isMobile && modalCurrentSlideRef && previewSliderRefs) {
        const modalIndex = modalCurrentSlideRef.getCurrentSlide();
        previewSliderRefs.setSlide(modalIndex);
    }
    
    fecharModalComAnimacao(modalScreenshot);
    document.body.style.overflow = 'auto';
    
    // Restaurar conteúdo original do modal
    if (modalConteudo && modalScreenshotHTMLOriginal) {
        modalConteudo.innerHTML = modalScreenshotHTMLOriginal;
    }
    
    // Limpar referência
    modalCurrentSlideRef = null;
}

function navegarScreenshot(direcao) {
    screenshotIndexAtual += direcao;
    
    if (screenshotIndexAtual < 0) {
        screenshotIndexAtual = screenshotsAtuais.length - 1;
    } else if (screenshotIndexAtual >= screenshotsAtuais.length) {
        screenshotIndexAtual = 0;
    }
    
    const screenshotAmpliada = document.getElementById('screenshotAmpliada');
    screenshotAmpliada.classList.add('skeleton-img-loading');
    screenshotAmpliada.onload = () => screenshotAmpliada.classList.remove('skeleton-img-loading');
    screenshotAmpliada.onerror = () => screenshotAmpliada.classList.remove('skeleton-img-loading');
    screenshotAmpliada.src = screenshotsAtuais[screenshotIndexAtual].image;
}

function abrirModalFotoAmpliada(fotos, index) {
    fotosAmpliadaAtuais = fotos.map(f => ({ image: f.foto }));
    fotoAmpliadaIndexAtual = index;
    abrirModalScreenshot(fotosAmpliadaAtuais, index);
}

async function carregarFotosJogo(jogoId, contextoId = null, forcarAtualizacao = false) {
    if (!fotosJogoSecao || !listaFotosJogo) return;
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    try {
        if (!usuarioLogado) {
            listaFotosJogo.innerHTML = '<p class="sem-informacao">Faça login para ver fotos</p>';
            btnPostarFoto.style.display = 'none';
            fotosJogoSecao.style.display = 'block';
            return;
        }
        
        const jogoNaMinhaLista = meusJogosCache.find(j => j.jogo_id === jogoId);
        const podePostar = jogoNaMinhaLista && !amigoVisualizando;
        btnPostarFoto.style.display = podePostar ? 'inline-flex' : 'none';
        if (podePostar) {
            btnPostarFoto.onclick = () => abrirModalFotoJogo(jogoId);
        }
        
        const fotosComLikes = await supabase.obterFotosJogoComLikes(jogoId, usuarioLogado.id, { forcarAtualizacao });
        if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
        
        if (fotosComLikes.length === 0) {
            const mensagem = jogoNaMinhaLista && !amigoVisualizando
                ? 'Nenhuma foto publicada ainda. Seja o primeiro a postar!'
                : 'Nenhuma foto publicada ainda. Adicione o jogo à sua lista e seja o primeiro a postar uma foto!';
            listaFotosJogo.innerHTML = `<p class="sem-informacao">${mensagem}</p>`;
            fotosJogoSecao.style.display = 'block';
            return;
        }
        
        fotosJogoSecao.style.display = 'block';
        
        const fotosAgrupadas = agruparFotosPorPostagem(fotosComLikes);
        
        listaFotosJogo.innerHTML = fotosAgrupadas.map(grupo => {
            const primeiraFoto = grupo[0];
            const fotoEscaped = escapeHtml(primeiraFoto.foto);
            const usuarioNomeEscaped = escapeHtml(primeiraFoto.usuario_nome);
            const descricaoEscaped = primeiraFoto.descricao ? escapeHtml(primeiraFoto.descricao) : '';
            const usuarioFotoEscaped = primeiraFoto.usuario_foto ? escapeHtml(primeiraFoto.usuario_foto) : '';
            const dataFormatada = formatarDataRelativa(primeiraFoto.created_at);
            const isMinhaFoto = primeiraFoto.usuario_id === usuarioLogado.id;
            const temCarrossel = grupo.length > 1;
            const grupoId = `grupo-${primeiraFoto.id}`;
            
            const avatarHTML = primeiraFoto.usuario_foto 
                ? `<img src="${usuarioFotoEscaped}" alt="${usuarioNomeEscaped}" class="foto-jogo-usuario-avatar">`
                : `<i class="fas fa-user-circle"></i>`;
            
            let imagemHTML = '';
            if (temCarrossel) {
                const fotosData = grupo.map(f => ({
                    id: f.id,
                    foto: f.foto,
                    descricao: f.descricao
                }));
                imagemHTML = `
                    <div class="foto-jogo-carrossel-container" data-grupo-id="${grupoId}" data-fotos='${JSON.stringify(fotosData)}' style="--total-fotos: ${grupo.length};">
                        <div class="foto-jogo-carrossel-track">
                            ${grupo.map((foto, idx) => {
                                const fotoEscaped = escapeHtml(foto.foto);
                                return `
                                    <div class="foto-jogo-carrossel-slide ${idx === 0 ? 'ativo' : ''}" data-index="${idx}">
                                        <img src="${fotoEscaped}" alt="Foto ${idx + 1}" class="foto-jogo-imagem" loading="lazy" data-index="${idx}" onerror="this.style.opacity='0.5'; this.alt='Erro ao carregar imagem';">
                                    </div>
                                `;
                            }).join('')}
                        </div>
                        ${grupo.length > 1 ? `
                            <button class="foto-jogo-carrossel-nav foto-jogo-carrossel-nav-prev" data-grupo-id="${grupoId}" aria-label="Foto anterior">
                                <i class="fas fa-chevron-left"></i>
                            </button>
                            <button class="foto-jogo-carrossel-nav foto-jogo-carrossel-nav-next" data-grupo-id="${grupoId}" aria-label="Próxima foto">
                                <i class="fas fa-chevron-right"></i>
                            </button>
                            <div class="foto-jogo-carrossel-indicators">
                                ${grupo.map((_, idx) => `
                                    <button class="foto-jogo-carrossel-indicator ${idx === 0 ? 'ativo' : ''}" data-grupo-id="${grupoId}" data-index="${idx}" aria-label="Foto ${idx + 1}"></button>
                                `).join('')}
                            </div>
                        ` : ''}
                    </div>
                `;
            } else {
                imagemHTML = `
                    <div class="foto-jogo-imagem-container" data-foto-id="${primeiraFoto.id}" data-foto-url="${escapeHtml(primeiraFoto.foto)}" style="cursor: pointer;">
                        <img src="${fotoEscaped}" alt="Foto do jogo" class="foto-jogo-imagem" loading="lazy">
                    </div>
                `;
            }
            
            const botoesDeletar = primeiraFoto.usuario_id === usuarioLogado.id && !amigoVisualizando
                ? `<button class="btn-deletar-foto-jogo" data-foto-id="${primeiraFoto.id}" data-grupo-id="${grupoId}" aria-label="Deletar foto(s)">
                    <i class="fas fa-trash"></i>
                </button>`
                : '';
            
            const fotoAtiva = grupo[0];
            const meuLike = fotoAtiva.meu_like;
            const contadorLikes = fotoAtiva.contador_likes || 0;
            const contadorDislikes = fotoAtiva.contador_dislikes || 0;
            const acoesHTML = !amigoVisualizando ? `
                <div class="likes-dislikes-foto" data-foto-id="${fotoAtiva.id}">
                    <button class="btn-like-foto ${meuLike === 'like' ? 'ativo' : ''}" data-foto-id="${fotoAtiva.id}" aria-label="Curtir foto">
                        <i class="fas fa-thumbs-up"></i>
                        <span class="contador-like-foto">${contadorLikes}</span>
                    </button>
                    <button class="btn-dislike-foto ${meuLike === 'dislike' ? 'ativo' : ''}" data-foto-id="${fotoAtiva.id}" aria-label="Descurtir foto">
                        <i class="fas fa-thumbs-down"></i>
                        <span class="contador-dislike-foto">${contadorDislikes}</span>
                    </button>
                </div>
            ` : `
                <div class="likes-dislikes-visualizacao">
                    <span class="contador-visualizacao"><i class="fas fa-thumbs-up"></i> ${contadorLikes}</span>
                    <span class="contador-visualizacao"><i class="fas fa-thumbs-down"></i> ${contadorDislikes}</span>
                </div>
            `;
            
            return `
                <div class="foto-jogo-card" data-grupo-id="${grupoId}">
                    <div class="foto-jogo-header">
                        <div class="foto-jogo-usuario">
                            ${avatarHTML}
                            <div class="foto-jogo-usuario-info">
                                <span class="foto-jogo-usuario-nome">${usuarioNomeEscaped}</span>
                                <span class="foto-jogo-data">${dataFormatada}</span>
                            </div>
                        </div>
                        ${botoesDeletar}
                    </div>
                    ${imagemHTML}
                    ${descricaoEscaped ? `
                        <div class="foto-jogo-descricao">
                            <p>${descricaoEscaped}</p>
                        </div>
                    ` : ''}
                    <div class="foto-jogo-acoes">
                        ${acoesHTML}
                    </div>
                </div>
            `;
        }).join('');
        
        inicializarCarrosselFotos();
        
        listaFotosJogo.querySelectorAll('.btn-deletar-foto-jogo').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const grupoId = btn.getAttribute('data-grupo-id');
                const fotoId = parseInt(btn.getAttribute('data-foto-id'));
                await deletarFotoJogo(grupoId, fotoId, jogoId);
            });
        });
        
        listaFotosJogo.querySelectorAll('.btn-like-foto, .btn-dislike-foto').forEach(btn => {
            btn.addEventListener('click', async (e) => {
                e.stopPropagation();
                const fotoId = parseInt(btn.getAttribute('data-foto-id'));
                const tipo = btn.classList.contains('btn-like-foto') ? 'like' : 'dislike';
                await curtirFoto(fotoId, tipo, jogoId);
            });
        });
        
        fotosJogoSecao.style.display = 'block';
    } catch (erro) {
        console.error('Erro ao carregar fotos:', erro);
        listaFotosJogo.innerHTML = '<p class="sem-informacao">Erro ao carregar fotos</p>';
    }
}

function formatarDataRelativa(dataISO) {
    const agora = new Date();
    const data = new Date(dataISO);
    const diffMs = agora - data;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    if (diffMins < 1) return 'Agora';
    if (diffMins < 60) return `${diffMins} min${diffMins > 1 ? 's' : ''} atrás`;
    if (diffHours < 24) return `${diffHours} h${diffHours > 1 ? 's' : ''} atrás`;
    if (diffDays < 7) return `${diffDays} dia${diffDays > 1 ? 's' : ''} atrás`;
    
    return data.toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric' });
}

function agruparFotosPorPostagem(fotos) {
    if (fotos.length === 0) return [];
    
    const grupos = [];
    const INTERVALO_AGRUPAMENTO_MS = 30000;
    
    fotos.sort((a, b) => new Date(a.created_at) - new Date(b.created_at));
    
    let grupoAtual = [fotos[0]];
    
    for (let i = 1; i < fotos.length; i++) {
        const fotoAtual = fotos[i];
        const fotoAnterior = grupoAtual[grupoAtual.length - 1];
        
        const tempoAtual = new Date(fotoAtual.created_at).getTime();
        const tempoAnterior = new Date(fotoAnterior.created_at).getTime();
        const diferenca = tempoAtual - tempoAnterior;
        
        const mesmoUsuario = fotoAtual.usuario_id === fotoAnterior.usuario_id;
        const mesmoJogo = fotoAtual.jogo_id === fotoAnterior.jogo_id;
        const dentroDoIntervalo = diferenca <= INTERVALO_AGRUPAMENTO_MS;
        
        if (mesmoUsuario && mesmoJogo && dentroDoIntervalo) {
            grupoAtual.push(fotoAtual);
        } else {
            grupos.push(grupoAtual);
            grupoAtual = [fotoAtual];
        }
    }
    
    if (grupoAtual.length > 0) {
        grupos.push(grupoAtual);
    }
    
    return grupos.sort((a, b) => new Date(b[0].created_at) - new Date(a[0].created_at));
}

function inicializarCarrosselFotos() {
    listaFotosJogo.querySelectorAll('.foto-jogo-carrossel-container').forEach(container => {
        const track = container.querySelector('.foto-jogo-carrossel-track');
        const slides = track.querySelectorAll('.foto-jogo-carrossel-slide');
        const grupoId = container.getAttribute('data-grupo-id');
        
        if (slides.length <= 1) return;
        
        let currentSlide = 0;
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        let touchStartTime = 0;
        let touchMoved = false;
        let dragOffset = 0;
        
        const updateCarousel = () => {
            const containerWidth = container.offsetWidth;
            if (containerWidth === 0) return;
            
            track.style.width = `${containerWidth * slides.length}px`;
            slides.forEach(slide => {
                slide.style.width = `${containerWidth}px`;
                slide.style.minWidth = `${containerWidth}px`;
                slide.style.maxWidth = `${containerWidth}px`;
            });
            
            const offset = -(currentSlide * containerWidth) + dragOffset;
            track.style.transform = `translateX(${offset}px)`;
            
            slides.forEach((slide, idx) => {
                slide.classList.toggle('ativo', idx === currentSlide);
            });
            
            const indicators = container.querySelectorAll('.foto-jogo-carrossel-indicator');
            indicators.forEach((indicator, idx) => {
                indicator.classList.toggle('ativo', idx === currentSlide);
            });
        };
        
        updateCarousel();
        
        requestAnimationFrame(() => {
            updateCarousel();
        });
        
        const resizeObserver = new ResizeObserver(() => {
            updateCarousel();
        });
        resizeObserver.observe(container);
        
        const goToSlide = (index) => {
            if (index < 0) index = slides.length - 1;
            if (index >= slides.length) index = 0;
            currentSlide = index;
            dragOffset = 0;
            updateCarousel();
        };
        
        const prevBtn = container.querySelector('.foto-jogo-carrossel-nav-prev');
        const nextBtn = container.querySelector('.foto-jogo-carrossel-nav-next');
        
        if (prevBtn) {
            prevBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(currentSlide - 1);
            });
        }
        
        if (nextBtn) {
            nextBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(currentSlide + 1);
            });
        }
        
        const indicators = container.querySelectorAll('.foto-jogo-carrossel-indicator');
        indicators.forEach((indicator, idx) => {
            indicator.addEventListener('click', (e) => {
                e.stopPropagation();
                goToSlide(idx);
            });
        });
        
        const handleDragStart = (clientX) => {
            startX = clientX;
            isDragging = true;
            touchStartTime = Date.now();
            touchMoved = false;
            dragOffset = 0;
            container.style.cursor = 'grabbing';
        };
        
        const handleDragMove = (clientX) => {
            if (!isDragging) return;
            currentX = clientX;
            const diff = startX - currentX;
            dragOffset = -diff;
            
            if (Math.abs(diff) > 10) {
                touchMoved = true;
            }
            
            const containerWidth = container.offsetWidth;
            if (containerWidth === 0) return;
            
            const maxOffset = containerWidth * 0.3;
            if (Math.abs(dragOffset) > maxOffset) {
                dragOffset = dragOffset > 0 ? maxOffset : -maxOffset;
            }
            
            updateCarousel();
        };
        
        const handleDragEnd = () => {
            if (!isDragging) return;
            isDragging = false;
            container.style.cursor = '';
            
            const diff = startX - currentX;
            const containerWidth = container.offsetWidth;
            const threshold = containerWidth * 0.2;
            const touchDuration = Date.now() - touchStartTime;
            
            if (touchMoved && Math.abs(diff) > threshold) {
                if (diff > 0) {
                    goToSlide(currentSlide + 1);
                } else {
                    goToSlide(currentSlide - 1);
                }
            } else {
                dragOffset = 0;
                updateCarousel();
            }
            
            if (!touchMoved && touchDuration < 300) {
                const clickedImg = container.querySelector('.foto-jogo-imagem');
                if (clickedImg) {
                    const fotosData = JSON.parse(container.getAttribute('data-fotos'));
                    abrirModalFotoAmpliada(fotosData, currentSlide);
                }
            }
        };
        
        container.addEventListener('mousedown', (e) => {
            if (e.target.closest('.foto-jogo-carrossel-nav') || e.target.closest('.foto-jogo-carrossel-indicator')) return;
            e.preventDefault();
            handleDragStart(e.clientX);
        });
        
        container.addEventListener('mousemove', (e) => {
            handleDragMove(e.clientX);
        });
        
        container.addEventListener('mouseup', () => {
            handleDragEnd();
        });
        
        container.addEventListener('mouseleave', () => {
            if (isDragging) {
                handleDragEnd();
            }
        });
        
        container.addEventListener('touchstart', (e) => {
            if (e.target.closest('.foto-jogo-carrossel-nav') || e.target.closest('.foto-jogo-carrossel-indicator')) return;
            handleDragStart(e.touches[0].clientX);
        });
        
        container.addEventListener('touchmove', (e) => {
            e.preventDefault();
            handleDragMove(e.touches[0].clientX);
        });
        
        container.addEventListener('touchend', () => {
            handleDragEnd();
        });
        
        updateCarousel();
    });
    
    listaFotosJogo.querySelectorAll('.foto-jogo-imagem-container[data-foto-id]').forEach(container => {
        container.addEventListener('click', () => {
            const fotoId = container.getAttribute('data-foto-id');
            const fotoUrl = container.getAttribute('data-foto-url');
            abrirModalFotoAmpliada([{ id: fotoId, foto: fotoUrl, descricao: null }], 0);
        });
    });
}

let jogoIdFotoAtual = null;
let fotosSelecionadas = [];

function abrirModalFotoJogo(jogoId) {
    if (!usuarioLogado) {
        mostrarNotificacao('Você precisa estar logado!', 'erro');
        return;
    }
    
    if (amigoVisualizando) {
        mostrarNotificacao('Você não pode postar fotos ao visualizar a lista de um amigo', 'erro');
        return;
    }
    
    const jogoNaMinhaLista = meusJogosCache.find(j => j.jogo_id === jogoId);
    if (!jogoNaMinhaLista) {
        mostrarNotificacao('Adicione o jogo à sua lista antes de postar uma foto', 'erro');
        return;
    }
    
    jogoIdFotoAtual = jogoId;
    fotosSelecionadas = [];
    atualizarPreviewFotos();
    descricaoFotoJogo.value = '';
    contadorDescricaoFoto.textContent = '0';
    btnConfirmarFotoJogo.disabled = true;
    btnConfirmarFotoJogo.innerHTML = '<i class="fas fa-check"></i> Postar';
    modalFotoJogo.classList.add('ativo');
}

function fecharModalFotoJogo() {
    fecharModalComAnimacao(modalFotoJogo);
    inputFotoJogo.value = '';
    fotosSelecionadas = [];
    jogoIdFotoAtual = null;
}

async function postarFotoJogo() {
    if (!usuarioLogado || !jogoIdFotoAtual || fotosSelecionadas.length === 0) {
        mostrarNotificacao('Selecione pelo menos uma foto primeiro', 'erro');
        return;
    }
    
    if (amigoVisualizando) {
        mostrarNotificacao('Você não pode postar fotos ao visualizar a lista de um amigo', 'erro');
        fecharModalFotoJogo();
        return;
    }
    
    const jogoNaMinhaLista = meusJogosCache.find(j => j.jogo_id === jogoIdFotoAtual);
    if (!jogoNaMinhaLista) {
        mostrarNotificacao('Adicione o jogo à sua lista antes de postar uma foto', 'erro');
        fecharModalFotoJogo();
        return;
    }
    
    try {
        btnConfirmarFotoJogo.disabled = true;
        btnConfirmarFotoJogo.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Postando...';
        
        const nomeJogo = jogoNaMinhaLista.nome || 'Jogo';
        const descricao = descricaoFotoJogo.value.trim() || null;
        const jogoIdParaRecarregar = jogoIdFotoAtual;
        
        const promessas = fotosSelecionadas.map((foto, i) => 
            supabase.criarFotoJogo(
                usuarioLogado.id,
                jogoIdFotoAtual,
                nomeJogo,
                foto,
                i === 0 ? descricao : null
            )
        );
        await Promise.all(promessas);
        
        const mensagem = fotosSelecionadas.length === 1 
            ? 'Foto publicada com sucesso!'
            : `${fotosSelecionadas.length} fotos publicadas com sucesso!`;
        
        mostrarNotificacao(mensagem, 'sucesso');
        fecharModalFotoJogo();
        
        await carregarFotosJogo(jogoIdParaRecarregar, null, true);
    } catch (erro) {
        console.error('Erro ao postar foto:', erro);
        mostrarNotificacao(erro.message || 'Erro ao postar foto', 'erro');
        btnConfirmarFotoJogo.disabled = false;
        btnConfirmarFotoJogo.innerHTML = '<i class="fas fa-check"></i> Postar';
    }
}

async function curtirFoto(fotoId, tipo, jogoId) {
    if (!usuarioLogado) {
        mostrarNotificacao('Você precisa estar logado!', 'erro');
        return;
    }
    
    const btnLike = listaFotosJogo.querySelector(`.btn-like-foto[data-foto-id="${fotoId}"]`);
    const btnDislike = listaFotosJogo.querySelector(`.btn-dislike-foto[data-foto-id="${fotoId}"]`);
    
    if (btnLike && btnDislike) {
        btnLike.disabled = true;
        btnDislike.disabled = true;
    }
    
    try {
        await supabase.salvarLikeDislikeFoto(usuarioLogado.id, fotoId, tipo);
        await atualizarContadoresFoto(fotoId);
    } catch (erro) {
        console.error('Erro ao curtir/descurtir foto:', erro);
        mostrarNotificacao('Erro ao curtir/descurtir foto', 'erro');
        await carregarFotosJogo(jogoId, null, true);
    } finally {
        if (btnLike && btnDislike) {
            btnLike.disabled = false;
            btnDislike.disabled = false;
        }
    }
}

async function atualizarContadoresFoto(fotoId) {
    try {
        const contadores = await supabase.contarLikesDislikesFoto(fotoId, { forcarAtualizacao: true });
        const meuLike = await supabase.obterLikeDislikeFoto(usuarioLogado.id, fotoId, { forcarAtualizacao: true });
        
        const acoesContainer = listaFotosJogo.querySelector(`.likes-dislikes-foto[data-foto-id="${fotoId}"]`);
        if (!acoesContainer) return;
        
        const btnLike = acoesContainer.querySelector('.btn-like-foto');
        const btnDislike = acoesContainer.querySelector('.btn-dislike-foto');
        const contadorLike = acoesContainer.querySelector('.contador-like-foto');
        const contadorDislike = acoesContainer.querySelector('.contador-dislike-foto');
        
        if (contadorLike) contadorLike.textContent = contadores.likes || 0;
        if (contadorDislike) contadorDislike.textContent = contadores.dislikes || 0;
        
        if (btnLike) {
            btnLike.classList.toggle('ativo', meuLike?.tipo === 'like');
        }
        if (btnDislike) {
            btnDislike.classList.toggle('ativo', meuLike?.tipo === 'dislike');
        }
    } catch (erro) {
        console.error('Erro ao atualizar contadores:', erro);
    }
}

async function deletarFotoJogo(grupoId, fotoId, jogoId) {
    if (!usuarioLogado) return;
    
    const card = listaFotosJogo.querySelector(`[data-grupo-id="${grupoId}"]`);
    const container = card?.querySelector('.foto-jogo-carrossel-container');
    const temCarrossel = container !== null;
    const mensagem = temCarrossel 
        ? 'Tem certeza que deseja deletar esta postagem (todas as fotos)? Esta ação não pode ser desfeita.'
        : 'Tem certeza que deseja deletar esta foto? Esta ação não pode ser desfeita.';
    
    mostrarConfirmacao(
        'Deletar Foto(s)',
        mensagem,
        async () => {
            try {
                if (temCarrossel) {
                    const fotosData = JSON.parse(container.getAttribute('data-fotos'));
                    for (const foto of fotosData) {
                        await supabase.deletarFotoJogo(foto.id, usuarioLogado.id);
                    }
                    mostrarNotificacao('Postagem deletada com sucesso!', 'sucesso');
                } else {
                    await supabase.deletarFotoJogo(fotoId, usuarioLogado.id);
                    mostrarNotificacao('Foto deletada com sucesso!', 'sucesso');
                }
                await carregarFotosJogo(jogoId, null, true);
            } catch (erro) {
                console.error('Erro ao deletar foto:', erro);
                mostrarNotificacao('Erro ao deletar foto', 'erro');
            }
        }
    );
}

async function carregarAmigosComJogo(jogoId, contextoId = null) {
    const containerAmigos = document.getElementById('amigosComJogo');
    if (!containerAmigos) return;
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    try {
        const amigosComJogo = await supabase.obterAmigosComJogo(usuarioLogado.id, jogoId);
        if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
        
        if (amigosComJogo.length === 0) {
            containerAmigos.style.display = 'none';
            return;
        }
        
        containerAmigos.style.display = 'block';
        const listaAmigosJogo = document.getElementById('listaAmigosComJogo');
        
        listaAmigosJogo.innerHTML = amigosComJogo.map(amigo => {
            const amigoNomeEscaped = escapeHtml(amigo.usuario_nome);
            const amigoFotoEscaped = amigo.foto_perfil ? escapeHtml(amigo.foto_perfil) : '';
            const avatarHTML = amigo.foto_perfil 
                ? `<img src="${amigoFotoEscaped}" alt="${amigoNomeEscaped}" class="amigo-jogo-foto skeleton-img-loading" loading="lazy" decoding="async">`
                : `<i class="fas fa-user-circle"></i>`;
            
            return `
                <div class="amigo-jogo-card">
                    <div class="amigo-jogo-info">
                        ${avatarHTML}
                        <span class="amigo-jogo-nome">${amigoNomeEscaped}</span>
                    </div>
                    <span class="status-badge status-${amigo.status}" style="cursor: default;">
                        ${obterTextoStatus(amigo.status)}
                    </span>
                </div>
            `;
        }).join('');
    } catch (erro) {
        console.error('Erro ao carregar amigos com jogo:', erro);
        containerAmigos.style.display = 'none';
    }
}

async function carregarAvaliacoes(jogoId, contextoId = null) {
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    // Evitar chamadas simultâneas que podem causar duplicação
    if (carregandoAvaliacoes) return;
    carregandoAvaliacoes = true;
    
    try {
        const avaliacoes = await supabase.obterAvaliacoes(jogoId);
        if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) {
            carregandoAvaliacoes = false;
            return;
        }
        exibirAvaliacoes(avaliacoes);
    } catch (erro) {
        console.error('Erro ao carregar avaliações:', erro);
        listaAvaliacoes.innerHTML = '<p style="color: var(--cor-texto-secundario);">Nenhuma avaliação ainda.</p>';
    } finally {
        carregandoAvaliacoes = false;
    }
}

async function carregarJogosRelacionados(detalhes, contextoId = null) {
    const jogosSerieContainer = document.getElementById('jogosSerie');
    const jogosDesenvolvedoraContainer = document.getElementById('jogosDesenvolvedora');
    const conquistasContainer = document.getElementById('conquistasJogo');
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    // Preparar IDs para desenvolvedora/distribuidora
    const desenvolvedoraId = detalhes.developers && detalhes.developers.length > 0 ? detalhes.developers[0].id : null;
    const distribuidoraId = detalhes.publishers && detalhes.publishers.length > 0 ? detalhes.publishers[0].id : null;
    
    // Agrupar requisições independentes em paralelo usando Promise.allSettled
    // Isso reduz o tempo total de carregamento de ~3x para ~1x (tempo da requisição mais lenta)
    const [resultadoSerie, resultadoDesenvolvedora, resultadoConquistas] = await Promise.allSettled([
        buscarJogosSerie(detalhes.id),
        (desenvolvedoraId || distribuidoraId) ? buscarJogosDesenvolvedora(desenvolvedoraId, distribuidoraId, detalhes.id) : Promise.resolve(null),
        buscarConquistasJogo(detalhes.id)
    ]);
    
    if (contextoId !== null && !isContextoDetalhesAtivo(contextoId)) return;
    
    // Processar resultados de jogos da série
    const jogosSerie = resultadoSerie.status === 'fulfilled' ? resultadoSerie.value : null;
    if (jogosSerie && jogosSerie.length > 0) {
        jogosSerieContainer.innerHTML = jogosSerie.map(jogo => {
            const imgUrl = jogo.background_image || 'https://via.placeholder.com/150x200?text=Sem+Imagem';
            const adjustedUrl = ConnectionManager.adjustImageUrl(imgUrl, 'card');
            const loadingStrategy = ConnectionManager.getLoadingStrategy();
            const decodingStrategy = ConnectionManager.getDecodingStrategy();
            return `
            <div class="item-relacionado" onclick="abrirModalDetalhes(${jogo.id})">
                <img src="${adjustedUrl}" alt="${jogo.name}" class="skeleton-img-loading" loading="${loadingStrategy}" decoding="${decodingStrategy}">
                <p>${jogo.name}</p>
            </div>
        `;
        }).join('');
    } else {
        jogosSerieContainer.innerHTML = '<p class="sem-informacao">Informação não disponível na API</p>';
    }
    
    // Processar resultados de desenvolvedora/distribuidora
    const jogosDesenvolvedora = resultadoDesenvolvedora.status === 'fulfilled' ? resultadoDesenvolvedora.value : null;
    if (jogosDesenvolvedora && jogosDesenvolvedora.length > 0) {
        jogosDesenvolvedoraContainer.innerHTML = jogosDesenvolvedora.map(jogo => {
            const imgUrl = jogo.background_image || 'https://via.placeholder.com/150x200?text=Sem+Imagem';
            const adjustedUrl = ConnectionManager.adjustImageUrl(imgUrl, 'card');
            const loadingStrategy = ConnectionManager.getLoadingStrategy();
            const decodingStrategy = ConnectionManager.getDecodingStrategy();
            return `
                <div class="item-relacionado" onclick="abrirModalDetalhes(${jogo.id})">
                    <img src="${adjustedUrl}" alt="${jogo.name}" class="skeleton-img-loading" loading="${loadingStrategy}" decoding="${decodingStrategy}">
                    <p>${jogo.name}</p>
                </div>
            `;
        }).join('');
    } else {
        jogosDesenvolvedoraContainer.innerHTML = '<p class="sem-informacao">Informação não disponível na API</p>';
    }
    
    // Processar resultados de conquistas
    const conquistas = resultadoConquistas.status === 'fulfilled' ? resultadoConquistas.value : null;
    if (conquistas === null) {
        conquistasContainer.innerHTML = '<p class="sem-informacao">Informação não disponível na API</p>';
    } else if (conquistas && conquistas.length > 0) {
        // Agrupar todas as traduções em paralelo para reduzir tempo total
        const traducoesPromises = conquistas.map(async (conquista) => {
            const nomeOriginal = conquista.name || 'Conquista';
            const descricaoOriginal = conquista.description || '';
            
            // Traduzir nome e descrição em paralelo (quando ambos existem)
            const [nomeTraduzido, descricaoTraduzida] = await Promise.all([
                traduzirTexto(nomeOriginal),
                descricaoOriginal ? traduzirTexto(descricaoOriginal) : Promise.resolve('')
            ]);
            
            return { conquista, nomeTraduzido, descricaoTraduzida };
        });
        
        const resultadosTraducao = await Promise.all(traducoesPromises);
        
        const conquistasHTML = resultadosTraducao.map(({ conquista, nomeTraduzido, descricaoTraduzida }) => {
            return `
                <div class="item-conquista">
                    <img src="${conquista.image || 'https://via.placeholder.com/64x64?text=🏆'}" alt="${nomeTraduzido}" class="skeleton-img-loading" loading="lazy" decoding="async">
                    <div class="conquista-info">
                        <p class="conquista-nome">${nomeTraduzido}</p>
                        ${descricaoTraduzida ? `<p class="conquista-descricao">${descricaoTraduzida}</p>` : ''}
                    </div>
                </div>
            `;
        });
        conquistasContainer.innerHTML = conquistasHTML.join('');
    } else {
        conquistasContainer.innerHTML = '<p class="sem-informacao">Informação não disponível na API</p>';
    }
}

async function exibirAvaliacoes(avaliacoes) {
    // Verificar se o jogo está na lista do usuário
    const jogoNaLista = usuarioLogado && jogoDetalhesAtual && jogoJaAdicionado(jogoDetalhesAtual.id);
    
    // Texto diferente dependendo se o jogo está na lista ou não
    const textoSemAvaliacao = jogoNaLista 
        ? 'Seja o primeiro a avaliar este jogo!' 
        : 'Adicione este jogo à sua lista e seja o primeiro a avaliar!';
    
    if (!avaliacoes || avaliacoes.length === 0) {
        listaAvaliacoes.innerHTML = `
            <div class="sem-avaliacoes">
                <p style="color: var(--cor-texto-secundario); margin-bottom: 15px;">${textoSemAvaliacao}</p>
                ${!amigoVisualizando && jogoNaLista ? `
                    <button class="btn-avaliar-agora" id="btnAvaliarAgora">
                        <i class="fas fa-star"></i> Faça sua avaliação
                    </button>
                ` : ''}
            </div>
        `;
        
        if (!amigoVisualizando && jogoNaLista) {
            document.getElementById('btnAvaliarAgora')?.addEventListener('click', () => {
                const jogoNaListaCompleto = jogosCache.find(j => j.jogo_id === jogoDetalhesAtual.id);
                if (jogoNaListaCompleto) {
                    abrirModalEdicaoDeDetalhes(jogoNaListaCompleto);
                }
            });
        }
        return;
    }
    
    // Filtrar apenas avaliações com nota OU comentário (mais permissivo)
    const avaliacoesValidas = avaliacoes.filter(av => {
        const temAvaliacao = av.avaliacao && av.avaliacao > 0;
        const temComentario = av.comentario && av.comentario.trim().length > 0;
        return temAvaliacao || temComentario;
    });
    
    // Verificar se o usuário já avaliou (APÓS filtrar as válidas)
    const jaAvaliou = usuarioLogado && avaliacoesValidas.some(av => av.usuario_id === usuarioLogado.id);
    
    if (avaliacoesValidas.length === 0) {
        listaAvaliacoes.innerHTML = `
            <div class="sem-avaliacoes">
                <p style="color: var(--cor-texto-secundario); margin-bottom: 15px;">${textoSemAvaliacao}</p>
                ${!amigoVisualizando && jogoNaLista ? `
                    <button class="btn-avaliar-agora" id="btnAvaliarAgora">
                        <i class="fas fa-star"></i> Faça sua avaliação
                    </button>
                ` : ''}
            </div>
        `;
        
        if (!amigoVisualizando && jogoNaLista) {
            document.getElementById('btnAvaliarAgora')?.addEventListener('click', () => {
                const jogoNaListaCompleto = jogosCache.find(j => j.jogo_id === jogoDetalhesAtual.id);
                if (jogoNaListaCompleto) {
                    abrirModalEdicaoDeDetalhes(jogoNaListaCompleto);
                }
            });
        }
        return;
    }
    
    listaAvaliacoes.innerHTML = '';
    
    // Buscar todas as respostas de todas as avaliações para verificar se o usuário já respondeu
    const todasRespostas = await Promise.all(
        avaliacoesValidas.map(av => supabase.obterRespostas(av.id))
    );
    
    // Buscar contadores de likes/dislikes para cada avaliação
    const contadoresAvaliacoes = await Promise.all(
        avaliacoesValidas.map(av => supabase.contarLikesDislikes(av.id, null))
    );
    
    // Buscar likes/dislikes do usuário para cada avaliação
    const likesUsuario = usuarioLogado ? await Promise.all(
        avaliacoesValidas.map(av => supabase.obterLikeDislike(usuarioLogado.id, av.id, null))
    ) : [];
    
    avaliacoesValidas.forEach((avaliacao, index) => {
        const card = document.createElement('div');
        card.className = 'avaliacao-card';
        
        const estrelas = avaliacao.avaliacao ? 
            Array(avaliacao.avaliacao).fill('<i class="fas fa-star"></i>').join('') +
            Array(5 - avaliacao.avaliacao).fill('<i class="far fa-star"></i>').join('')
            : '';
        
        const comentario = avaliacao.comentario ? 
            `<p class="avaliacao-comentario">${escapeHtml(avaliacao.comentario)}</p>` : '';
        
        const ehMinhaAvaliacao = usuarioLogado && usuarioLogado.id === avaliacao.usuario_id;
        
        // Verificar se o usuário já respondeu a esta avaliação (diretamente, não em threads)
        const respostasDestaAvaliacao = todasRespostas[index] || [];
        const jaRespondeu = usuarioLogado && respostasDestaAvaliacao.some(
            r => r.usuario_id === usuarioLogado.id && r.resposta_pai_id === null
        );
        
        const podeResponder = usuarioLogado && !ehMinhaAvaliacao && !jaRespondeu && !amigoVisualizando;
        
        const btnResponder = podeResponder ? 
            `<button class="btn-responder" data-avaliacao-id="${avaliacao.id}">
                <i class="fas fa-reply"></i> Responder
            </button>` : '';
        
        const btnExcluir = ehMinhaAvaliacao && !amigoVisualizando ?
            `<button class="btn-excluir-avaliacao" data-avaliacao-id="${avaliacao.id}" data-jogo-id="${avaliacao.jogo_id}">
                <i class="fas fa-trash"></i> Excluir
            </button>` : '';
        
        // Likes/Dislikes
        const contadores = contadoresAvaliacoes[index];
        const likeUsuario = likesUsuario[index];
        const temLike = likeUsuario && likeUsuario.tipo === 'like';
        const temDislike = likeUsuario && likeUsuario.tipo === 'dislike';
        
        const likesDislikesHTML = usuarioLogado && !amigoVisualizando ? `
            <div class="likes-dislikes">
                <button class="btn-like ${temLike ? 'ativo' : ''}" data-avaliacao-id="${avaliacao.id}" data-tipo="like">
                    <i class="fas fa-thumbs-up"></i>
                    <span class="contador-like">${contadores.likes}</span>
                </button>
                <button class="btn-dislike ${temDislike ? 'ativo' : ''}" data-avaliacao-id="${avaliacao.id}" data-tipo="dislike">
                    <i class="fas fa-thumbs-down"></i>
                    <span class="contador-dislike">${contadores.dislikes}</span>
                </button>
            </div>
        ` : `
            <div class="likes-dislikes-visualizacao">
                <span class="contador-visualizacao"><i class="fas fa-thumbs-up"></i> ${contadores.likes}</span>
                <span class="contador-visualizacao"><i class="fas fa-thumbs-down"></i> ${contadores.dislikes}</span>
            </div>
        `;
        
        const usuarioNomeEscaped = escapeHtml(avaliacao.usuario_nome);
        const avatarHTML = avaliacao.usuario_foto 
            ? `<img src="${escapeHtml(avaliacao.usuario_foto)}" alt="${usuarioNomeEscaped}" class="avaliacao-usuario-foto">`
            : `<i class="fas fa-user-circle"></i>`;
        
        card.innerHTML = `
            <div class="avaliacao-header">
                <div class="avaliacao-usuario">
                    ${avatarHTML}
                    <span>${usuarioNomeEscaped}</span>
                </div>
                ${estrelas ? `<div class="avaliacao-estrelas-display">${estrelas}</div>` : ''}
            </div>
            ${comentario}
            <div class="avaliacao-footer">
                <div class="avaliacao-footer-esquerda">
                    <span class="avaliacao-data">${formatarDataCompleta(avaliacao.data_exibicao || avaliacao.created_at)}</span>
                    ${likesDislikesHTML}
                </div>
                <div class="avaliacao-acoes">
                    ${btnResponder}
                    ${btnExcluir}
                </div>
            </div>
            <div class="respostas-container" id="respostas-${avaliacao.id}"></div>
        `;
        
        listaAvaliacoes.appendChild(card);
        
        carregarRespostas(avaliacao.id);
    });
    
    // Event listeners para likes/dislikes
    document.querySelectorAll('.avaliacao-card .btn-like, .avaliacao-card .btn-dislike').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const avaliacaoId = btn.dataset.avaliacaoId || null;
            const tipo = btn.dataset.tipo;
            await toggleLikeDislike(avaliacaoId, null, tipo);
        });
    });
    
    document.querySelectorAll('.btn-responder').forEach(btn => {
        btn.addEventListener('click', () => {
            const avaliacaoId = btn.dataset.avaliacaoId;
            abrirFormularioResposta(avaliacaoId);
        });
    });
    
    document.querySelectorAll('.btn-excluir-avaliacao').forEach(btn => {
        btn.addEventListener('click', async () => {
            const avaliacaoId = btn.dataset.avaliacaoId;
            const jogoId = parseInt(btn.dataset.jogoId);
            
            mostrarConfirmacao(
                'Excluir Avaliação',
                'Tem certeza que deseja excluir sua avaliação?',
                async () => {
                    await excluirAvaliacao(avaliacaoId, jogoId);
                }
            );
        });
    });
}

function mostrarConfirmacao(titulo, mensagem, callback) {
    tituloConfirmacao.textContent = titulo;
    mensagemConfirmacao.textContent = mensagem;
    acaoConfirmacao = callback;
    modalConfirmacao.classList.add('ativo');
}

function fecharConfirmacao() {
    fecharModalComAnimacao(modalConfirmacao);
    acaoConfirmacao = null;
}

btnConfirmarAcao.addEventListener('click', async () => {
    if (acaoConfirmacao) {
        await acaoConfirmacao();
    }
    fecharConfirmacao();
});

btnCancelarAcao.addEventListener('click', fecharConfirmacao);

modalConfirmacao.addEventListener('click', (e) => {
    if (e.target === modalConfirmacao) {
        fecharConfirmacao();
    }
});

async function excluirAvaliacao(avaliacaoId, jogoId) {
    try {
        // IMPORTANTE: Antes de excluir a avaliação, remover todos os dados associados
        // (likes/dislikes da avaliação, respostas e likes/dislikes das respostas)
        // Isso garante que quando o usuário criar uma nova avaliação, não terá histórico antigo
        
        // 1. Remover todos os likes/dislikes das respostas desta avaliação
        await supabase.removerTodosLikesDislikesRespostasAvaliacao(avaliacaoId);
        
        // 2. Remover todas as respostas desta avaliação
        await supabase.removerTodasRespostasAvaliacao(avaliacaoId);
        
        // 3. Remover todos os likes/dislikes da avaliação
        await supabase.removerTodosLikesDislikesAvaliacao(avaliacaoId);
        
        // 4. Agora sim, limpar a avaliação e comentário do registro
        await supabase.atualizarJogo(avaliacaoId, {
            avaliacao: null,
            comentario: null,
            atualizado_em: new Date().toISOString()
        });
        
        // Invalidar cache de avaliações para este jogo
        const cacheKey = `${supabase.url}/rest/v1/jogos_usuarios?jogo_id=eq.${jogoId}`;
        supabase._cacheGet.delete(cacheKey);
        
        // Recarregar os jogos para atualizar o cache (forçar atualização)
        await obterJogosSalvos(true, true);
        await exibirMinhaLista();
        
        // Aguardar um pouco para garantir que o banco foi atualizado
        await new Promise(resolve => setTimeout(resolve, 200));
        
        // Recarregar avaliações (isso já atualiza a lista e mostra o botão se não houver avaliações)
        // Resetar flag para garantir que a função seja executada
        carregandoAvaliacoes = false;
        await carregarAvaliacoes(jogoId);
        
        // Atualizar os botões na tela de detalhes se estiver aberta
        if (jogoDetalhesAtual && jogoDetalhesAtual.id === jogoId) {
            // Aguardar um pouco mais para garantir que o cache foi atualizado
            await new Promise(resolve => setTimeout(resolve, 100));
            // Forçar atualização do cache antes de atualizar o botão
            const jaAdicionado = jogoJaAdicionado(jogoId);
            atualizarBotaoModalDetalhes(jaAdicionado);
        }
        
        mostrarNotificacao('Avaliação excluída com sucesso!', 'sucesso');
    } catch (erro) {
        console.error('Erro ao excluir avaliação:', erro);
        mostrarNotificacao('Erro ao excluir avaliação.', 'erro');
    }
}

async function carregarRespostas(avaliacaoId, forcarAtualizacao = false) {
    try {
        const respostas = await supabase.obterRespostas(avaliacaoId, { forcarAtualizacao });
        const container = document.getElementById(`respostas-${avaliacaoId}`);
        
        if (!container) return;
        
        if (respostas && respostas.length > 0) {
            // Organizar respostas em árvore
            const respostasMap = new Map();
            const respostasRaiz = [];
            
            // Primeiro, criar um mapa de todas as respostas
            respostas.forEach(resposta => {
                respostasMap.set(resposta.id, { ...resposta, filhos: [] });
            });
            
            // Depois, organizar em árvore
            respostas.forEach(resposta => {
                const respostaNode = respostasMap.get(resposta.id);
                if (resposta.resposta_pai_id) {
                    const pai = respostasMap.get(resposta.resposta_pai_id);
                    if (pai) {
                        pai.filhos.push(respostaNode);
                    } else {
                        respostasRaiz.push(respostaNode);
                    }
                } else {
                    respostasRaiz.push(respostaNode);
                }
            });
            
            // Renderizar árvore de respostas
            container.innerHTML = await renderizarArvoreRespostas(respostasRaiz, avaliacaoId, 0);
            
            // Adicionar event listeners
            adicionarEventListenersRespostas(container, avaliacaoId);
        } else {
            container.innerHTML = '';
        }
    } catch (erro) {
        console.error('Erro ao carregar respostas:', erro);
    }
}

function obterIdUltimoAutorNaSubarvore(no) {
    const dt = (n) => new Date(n.criado_em || n.created_at || 0).getTime();
    let maisRecente = no;
    const visitar = (n) => {
        if (dt(n) > dt(maisRecente)) maisRecente = n;
        (n.filhos || []).forEach(visitar);
    };
    visitar(no);
    return maisRecente.usuario_id;
}

async function renderizarArvoreRespostas(respostas, avaliacaoId, nivel) {
    const contadoresRespostas = await Promise.all(
        respostas.map(r => supabase.contarLikesDislikes(null, r.id))
    );
    const likesUsuarioRespostas = usuarioLogado ? await Promise.all(
        respostas.map(r => supabase.obterLikeDislike(usuarioLogado.id, null, r.id))
    ) : [];
    const htmlPromises = respostas.map(async (resposta, index) => {
        const ehMinhaResposta = usuarioLogado && usuarioLogado.id === resposta.usuario_id;
        const ultimoAutorId = obterIdUltimoAutorNaSubarvore(resposta);
        const euFuiOUltimo = usuarioLogado && ultimoAutorId === usuarioLogado.id;
        const podeResponder = usuarioLogado && !ehMinhaResposta && !amigoVisualizando && !euFuiOUltimo;
        
        const respostaTextoEscaped = escapeHtml(resposta.texto);
        const respostaUsuarioNomeEscaped = escapeHtml(resposta.usuario_nome);
        const btnEditar = ehMinhaResposta && !amigoVisualizando ? 
            `<button class="btn-editar-resposta" data-resposta-id="${resposta.id}" data-avaliacao-id="${avaliacaoId}" data-texto="${respostaTextoEscaped.replace(/"/g, '&quot;')}">
                <i class="fas fa-edit"></i>
            </button>` : '';
        
        const btnExcluir = ehMinhaResposta && !amigoVisualizando ? 
            `<button class="btn-excluir-resposta" data-resposta-id="${resposta.id}" data-avaliacao-id="${avaliacaoId}" data-nivel="${nivel}">
                <i class="fas fa-trash"></i>
            </button>` : '';
        
        const btnResponder = podeResponder ?
            `<button class="btn-responder btn-responder-thread" data-resposta-id="${resposta.id}" data-avaliacao-id="${avaliacaoId}" data-resposta-autor="${respostaUsuarioNomeEscaped}">
                <i class="fas fa-reply"></i> Responder
            </button>` : '';
        
        // Likes/Dislikes da resposta
        const contadores = contadoresRespostas[index];
        const likeUsuario = likesUsuarioRespostas[index];
        const temLike = likeUsuario && likeUsuario.tipo === 'like';
        const temDislike = likeUsuario && likeUsuario.tipo === 'dislike';
        
        const likesDislikesHTML = usuarioLogado && !amigoVisualizando ? `
            <div class="likes-dislikes likes-dislikes-resposta">
                <button class="btn-like ${temLike ? 'ativo' : ''}" data-resposta-id="${resposta.id}" data-tipo="like">
                    <i class="fas fa-thumbs-up"></i>
                    <span class="contador-like">${contadores.likes}</span>
                </button>
                <button class="btn-dislike ${temDislike ? 'ativo' : ''}" data-resposta-id="${resposta.id}" data-tipo="dislike">
                    <i class="fas fa-thumbs-down"></i>
                    <span class="contador-dislike">${contadores.dislikes}</span>
                </button>
            </div>
        ` : `
            <div class="likes-dislikes-visualizacao likes-dislikes-resposta">
                <span class="contador-visualizacao"><i class="fas fa-thumbs-up"></i> ${contadores.likes}</span>
                <span class="contador-visualizacao"><i class="fas fa-thumbs-down"></i> ${contadores.dislikes}</span>
            </div>
        `;
        
        const filhosHTML = resposta.filhos.length > 0 ? 
            `<div class="sub-respostas" style="margin-left: ${Math.min(nivel + 1, 5) * 20}px;">
                ${await renderizarArvoreRespostas(resposta.filhos, avaliacaoId, nivel + 1)}
            </div>` : '';
        
        const respostaFotoEscaped = resposta.usuario_foto ? escapeHtml(resposta.usuario_foto) : '';
        const avatarRespostaHTML = resposta.usuario_foto 
            ? `<img src="${respostaFotoEscaped}" alt="${respostaUsuarioNomeEscaped}" class="resposta-usuario-foto">`
            : `<i class="fas fa-user-circle"></i>`;
        
        return `
            <div class="resposta-card" id="resposta-${resposta.id}" data-nivel="${nivel}">
                <div class="resposta-header">
                    <div class="resposta-header-info">
                        ${avatarRespostaHTML}
                        <span class="resposta-autor">${respostaUsuarioNomeEscaped}</span>
                        <span class="resposta-data">${formatarDataCompleta(resposta.data_exibicao || resposta.criado_em || resposta.created_at)}</span>
                    </div>
                    <div class="resposta-acoes-header">
                        ${btnResponder}
                        ${btnEditar}
                        ${btnExcluir}
                    </div>
                </div>
                <p class="resposta-texto">${respostaTextoEscaped}</p>
                ${likesDislikesHTML}
                <div class="form-resposta-container" id="form-resposta-${resposta.id}"></div>
                ${filhosHTML}
            </div>
        `;
    });
    
    const htmlArray = await Promise.all(htmlPromises);
    return htmlArray.join('');
}

function adicionarEventListenersRespostas(container, avaliacaoId) {
    container.querySelectorAll('.btn-editar-resposta').forEach(btn => {
        btn.addEventListener('click', () => {
            const respostaId = btn.dataset.respostaId;
            const avalId = btn.dataset.avaliacaoId;
            const textoAtual = btn.dataset.texto;
            abrirFormularioEdicaoResposta(respostaId, avalId, textoAtual);
        });
    });
    
    container.querySelectorAll('.btn-excluir-resposta').forEach(btn => {
        btn.addEventListener('click', () => {
            const respostaId = btn.dataset.respostaId;
            const avalId = btn.dataset.avaliacaoId;
            const nivel = btn.dataset.nivel;
            
            mostrarConfirmacao(
                'Excluir Resposta',
                'Tem certeza que deseja excluir sua resposta? Todas as respostas a ela também serão excluídas.',
                async () => {
                    try {
                        await supabase.removerResposta(respostaId);
                        await carregarRespostas(avalId, true);
                        
                        if (nivel === '0') {
                            await reativarBotaoResponder(avalId);
                        }
                        
                        mostrarNotificacao('Resposta excluída!', 'sucesso');
                    } catch (erro) {
                        console.error('Erro ao excluir resposta:', erro);
                        mostrarNotificacao('Erro ao excluir resposta.', 'erro');
                    }
                }
            );
        });
    });
    
    container.querySelectorAll('.btn-responder-thread').forEach(btn => {
        btn.addEventListener('click', () => {
            const respostaId = btn.dataset.respostaId;
            const avalId = btn.dataset.avaliacaoId;
            const autorResposta = btn.dataset.respostaAutor;
            abrirFormularioRespostaThread(respostaId, avalId, autorResposta);
        });
    });
    
    container.querySelectorAll('.resposta-card .btn-like, .resposta-card .btn-dislike').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const respostaId = btn.dataset.respostaId || null;
            const tipo = btn.dataset.tipo;
            if (respostaId) {
                await toggleLikeDislike(null, respostaId, tipo);
            }
        });
    });
}

async function reativarBotaoResponder(avaliacaoId) {
    // Buscar o card da avaliação
    const respostasContainer = document.getElementById(`respostas-${avaliacaoId}`);
    if (!respostasContainer) return;
    
    const avaliacaoCard = respostasContainer.closest('.avaliacao-card');
    if (!avaliacaoCard) return;
    
    const avaliacaoFooter = avaliacaoCard.querySelector('.avaliacao-footer .avaliacao-acoes');
    if (!avaliacaoFooter) return;
    
    // Verificar se já existe o botão
    if (avaliacaoFooter.querySelector('.btn-responder')) return;
    
    // Verificar se realmente não há mais respostas diretas do usuário
    const respostas = await supabase.obterRespostas(avaliacaoId, { forcarAtualizacao: true });
    const temRespostaDireta = respostas.some(
        r => r.usuario_id === usuarioLogado.id && r.resposta_pai_id === null
    );
    
    if (!temRespostaDireta) {
        // Criar e adicionar o botão novamente
        const btnResponder = document.createElement('button');
        btnResponder.className = 'btn-responder';
        btnResponder.dataset.avaliacaoId = avaliacaoId;
        btnResponder.innerHTML = '<i class="fas fa-reply"></i> Responder';
        
        btnResponder.addEventListener('click', () => {
            abrirFormularioResposta(avaliacaoId);
        });
        
        avaliacaoFooter.insertBefore(btnResponder, avaliacaoFooter.firstChild);
    }
}

function abrirFormularioResposta(avaliacaoId) {
    const container = document.getElementById(`respostas-${avaliacaoId}`);
    
    if (container.querySelector('.form-resposta')) {
        return;
    }
    
    const form = document.createElement('div');
    form.className = 'form-resposta';
    form.innerHTML = `
        <textarea placeholder="Escreva sua resposta..." maxlength="300"></textarea>
        <div class="form-resposta-acoes">
            <button class="btn-enviar-resposta">Enviar</button>
            <button class="btn-cancelar-resposta">Cancelar</button>
        </div>
    `;
    
    container.appendChild(form);
    
    const textarea = form.querySelector('textarea');
    const btnEnviar = form.querySelector('.btn-enviar-resposta');
    const btnCancelar = form.querySelector('.btn-cancelar-resposta');
    
    textarea.focus();
    
    btnEnviar.addEventListener('click', async () => {
        const texto = textarea.value.trim();
        if (!texto) {
            mostrarNotificacao('Digite uma resposta!', 'erro');
            return;
        }
        
        try {
            const resposta = await supabase.salvarResposta(avaliacaoId, usuarioLogado.id, usuarioLogado.usuario, texto, null);
            form.remove();
            await carregarRespostas(avaliacaoId, true);
            
            // Remover o botão "Responder" da avaliação
            const btnResponder = document.querySelector(`.btn-responder[data-avaliacao-id="${avaliacaoId}"]`);
            if (btnResponder) {
                btnResponder.remove();
            }
            
            // Criar notificação para o dono da avaliação
            await criarNotificacaoResposta(avaliacaoId, resposta.id, null);
            
            mostrarNotificacao('Resposta enviada!', 'sucesso');
        } catch (erro) {
            console.error('Erro ao enviar resposta:', erro);
            mostrarNotificacao('Erro ao enviar resposta.', 'erro');
        }
    });
    
    btnCancelar.addEventListener('click', () => {
        form.remove();
    });
}

function abrirFormularioEdicaoResposta(respostaId, avaliacaoId, textoAtual) {
    const respostaCard = document.getElementById(`resposta-${respostaId}`);
    if (!respostaCard) return;
    
    // Verificar se já existe um formulário de edição aberto
    if (respostaCard.querySelector('.form-edicao-resposta')) return;
    
    const respostaTexto = respostaCard.querySelector('.resposta-texto');
    const textoOriginal = respostaTexto.textContent;
    
    // Esconder o texto original
    respostaTexto.style.display = 'none';
    
    const form = document.createElement('div');
    form.className = 'form-edicao-resposta';
    const textoAtualEscaped = escapeHtml(textoAtual);
    form.innerHTML = `
        <textarea maxlength="300">${textoAtualEscaped}</textarea>
        <div class="form-resposta-acoes">
            <button class="btn-salvar-edicao">Salvar</button>
            <button class="btn-cancelar-edicao">Cancelar</button>
        </div>
    `;
    
    respostaTexto.parentNode.insertBefore(form, respostaTexto.nextSibling);
    
    const textarea = form.querySelector('textarea');
    const btnSalvar = form.querySelector('.btn-salvar-edicao');
    const btnCancelar = form.querySelector('.btn-cancelar-edicao');
    
    textarea.focus();
    textarea.setSelectionRange(textarea.value.length, textarea.value.length);
    
    btnSalvar.addEventListener('click', async () => {
        const novoTexto = textarea.value.trim();
        if (!novoTexto) {
            mostrarNotificacao('Digite um texto para a resposta!', 'erro');
            return;
        }
        
        if (novoTexto === textoOriginal) {
            form.remove();
            respostaTexto.style.display = 'block';
            return;
        }
        
        try {
            await supabase.atualizarResposta(respostaId, novoTexto);
            await carregarRespostas(avaliacaoId, true);
            mostrarNotificacao('Resposta atualizada!', 'sucesso');
        } catch (erro) {
            console.error('Erro ao atualizar resposta:', erro);
            mostrarNotificacao('Erro ao atualizar resposta.', 'erro');
        }
    });
    
    btnCancelar.addEventListener('click', () => {
        form.remove();
        respostaTexto.style.display = 'block';
    });
}

function abrirFormularioRespostaThread(respostaPaiId, avaliacaoId, autorResposta) {
    const formContainer = document.getElementById(`form-resposta-${respostaPaiId}`);
    
    // Fechar outros formulários abertos na mesma avaliação
    const container = document.getElementById(`respostas-${avaliacaoId}`);
    container.querySelectorAll('.form-resposta').forEach(f => f.remove());
    
    if (!formContainer) return;
    
    const autorRespostaEscaped = escapeHtml(autorResposta);
    const form = document.createElement('div');
    form.className = 'form-resposta form-resposta-thread';
    form.innerHTML = `
        <div class="resposta-para">
            <i class="fas fa-reply"></i> Respondendo para <strong>${autorRespostaEscaped}</strong>
        </div>
        <textarea placeholder="Escreva sua resposta..." maxlength="300"></textarea>
        <div class="form-resposta-acoes">
            <button class="btn-enviar-resposta">Enviar</button>
            <button class="btn-cancelar-resposta">Cancelar</button>
        </div>
    `;
    
    formContainer.appendChild(form);
    
    const textarea = form.querySelector('textarea');
    const btnEnviar = form.querySelector('.btn-enviar-resposta');
    const btnCancelar = form.querySelector('.btn-cancelar-resposta');
    
    textarea.focus();
    
    btnEnviar.addEventListener('click', async () => {
        const texto = textarea.value.trim();
        if (!texto) {
            mostrarNotificacao('Digite uma resposta!', 'erro');
            return;
        }
        
        try {
            const resposta = await supabase.salvarResposta(avaliacaoId, usuarioLogado.id, usuarioLogado.usuario, texto, respostaPaiId);
            form.remove();
            await carregarRespostas(avaliacaoId, true);
            
            // Criar notificação para o dono da avaliação ou da resposta pai
            await criarNotificacaoResposta(avaliacaoId, resposta.id, respostaPaiId);
            
            mostrarNotificacao('Resposta enviada!', 'sucesso');
        } catch (erro) {
            console.error('Erro ao enviar resposta:', erro);
            mostrarNotificacao('Erro ao enviar resposta.', 'erro');
        }
    });
    
    btnCancelar.addEventListener('click', () => {
        form.remove();
    });
}

function formatarDataCompleta(dataISO) {
    if (!dataISO) return '';
    
    const data = new Date(dataISO);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    
    return `${dia}/${mes}/${ano}`;
}

function abrirModalStatusDeDetalhes() {
    if (jogoDetalhesAtual) {
        // Marcar que veio da tela de detalhes
        veioDeDetalhes = true;
        
        // Ocultar tela de detalhes
        telaDetalhes.style.display = 'none';
        
        // Limpar estado anterior
        modoEdicao = false;
        jogoParaAdicionar = null;
        avaliacaoSelecionada = 0;
        comentarioAtual = '';
        
        // Configurar novo jogo
        jogoParaAdicionar = { jogo: jogoDetalhesAtual, botao: null };
        nomeJogoModal.textContent = jogoDetalhesAtual.nome;
        capaJogoModal.src = jogoDetalhesAtual.imagem;
        lancamentoJogoModal.textContent = formatarData(jogoDetalhesAtual.lancamento);
        selectStatus.value = 'quero-jogar';
        comentarioAvaliacao.value = '';
        contadorComentario.textContent = '0';
        atualizarEstrelas(0);
        
        // Mostrar tela de avaliação
        telaAvaliacao.style.display = 'block';
        window.scrollTo(0, 0);
    }
}

function abrirModalEdicaoDeDetalhes(jogo) {
    // Marcar que veio da tela de detalhes
    veioDeDetalhes = true;
    
    // Ocultar tela de detalhes
    telaDetalhes.style.display = 'none';
    
    // Limpar estado anterior completamente
    modoEdicao = false;
    jogoParaAdicionar = null;
    avaliacaoSelecionada = 0;
    comentarioAtual = '';
    
    // Configurar modo de edição com dados atuais do jogo
    modoEdicao = true;
    jogoParaAdicionar = { jogo };
    nomeJogoModal.textContent = jogo.nome;
    capaJogoModal.src = jogo.imagem;
    lancamentoJogoModal.textContent = formatarData(jogo.lancamento);
    selectStatus.value = jogo.status || 'quero-jogar';
    avaliacaoSelecionada = jogo.avaliacao || 0;
    comentarioAvaliacao.value = jogo.comentario || '';
    comentarioAtual = jogo.comentario || '';
    contadorComentario.textContent = (jogo.comentario || '').length;
    atualizarEstrelas(avaliacaoSelecionada);
    
    // Salvar estado da tela de avaliação
    sessionStorage.setItem('telaAvaliacaoAberta', JSON.stringify({
        jogoId: jogo.jogo_id,
        modoEdicao: true,
        veioDeDetalhes: true
    }));
    
    // Mostrar tela de avaliação
    telaAvaliacao.style.display = 'block';
    window.scrollTo(0, 0);
}

function fecharModalDetalhes() {
    // Parar todos os vídeos/trailers antes de fechar
    const videos = document.querySelectorAll('#listaTrailers video');
    videos.forEach(video => {
        video.pause();
        video.currentTime = 0;
    });
    
    // Parar iframes do YouTube recarregando o src
    const iframes = document.querySelectorAll('#listaTrailers iframe');
    iframes.forEach(iframe => {
        const src = iframe.src;
        iframe.src = '';
        iframe.src = src;
    });
    
    telaDetalhes.style.display = 'none';
    appContainer.style.display = 'block';
    
    sessionStorage.removeItem('jogoDetalhesAberto');
    sessionStorage.removeItem('jogoDetalhesAbertoSteam');
    
    // Restaurar posição do scroll
    const scrollPosition = sessionStorage.getItem('scrollPosition');
    if (scrollPosition) {
        setTimeout(() => {
            window.scrollTo(0, parseInt(scrollPosition));
        }, 0);
    }
}

async function adicionarJogo(jogo, status, avaliacao, comentario) {
    if (!usuarioLogado) {
        mostrarNotificacao('Você precisa estar logado para adicionar jogos!', 'erro');
        return;
    }
    
    const estavaVisualizandoAmigo = !!amigoVisualizando;
    const amigoIdSalvo = amigoVisualizando ? amigoVisualizando.id : null;
    const amigoNomeSalvo = amigoVisualizando ? amigoVisualizando.nome : null;
    
    // Salvar posição de scroll antes de adicionar o jogo
    const posicaoScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
    
    jogo.status = status;
    jogo.avaliacao = avaliacao;
    jogo.comentario = comentario;
    
    let jogoFoiAdicionado = false;
    try {
        const resultado = await supabase.salvarJogo(usuarioLogado.id, jogo);
        jogoFoiAdicionado = true;
        
        // Se estava visualizando lista de amigo, atualizar apenas meusJogosCache
        // e recarregar a lista do amigo. Caso contrário, atualizar tudo normalmente.
        if (estavaVisualizandoAmigo) {
            // Atualizar apenas meusJogosCache, não jogosCache (que contém jogos do amigo)
            await obterJogosSalvos(false, true);
            
            // Restaurar filtro e scroll salvos antes de abrir avaliação
            const filtroSalvoAmigo = sessionStorage.getItem('filtroAntesAvaliacaoAmigo');
            const scrollSalvoAmigo = sessionStorage.getItem('scrollAntesAvaliacaoAmigo');
            
            // Se tinha filtro salvo, restaurar ele ANTES de recarregar
            if (filtroSalvoAmigo && filtroSalvoAmigo !== 'todos') {
                filtroAtual = filtroSalvoAmigo;
                sessionStorage.setItem('filtroAtual', filtroAtual);
                
                // Atualizar botões de filtro
                document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
                const btnFiltro = document.querySelector(`.filtro-btn[data-filtro="${filtroSalvoAmigo}"]`);
                if (btnFiltro) {
                    btnFiltro.classList.add('ativo');
                }
            }
            
            // Recarregar apenas a lista, mantendo o estado do amigo
            await exibirMinhaLista();
            
            // Restaurar posição de scroll (usar o salvo se existir, senão usar o que tinha antes)
            const scrollParaRestaurar = scrollSalvoAmigo ? parseInt(scrollSalvoAmigo) : posicaoScroll;
            
            // Aguardar um pouco para garantir que a lista foi renderizada
            setTimeout(async () => {
                await restaurarScrollPreciso(scrollParaRestaurar);
            }, 100);
            
            // Limpar valores salvos
            sessionStorage.removeItem('filtroAntesAvaliacaoAmigo');
            sessionStorage.removeItem('scrollAntesAvaliacaoAmigo');
        } else {
            // Recarregar os jogos para atualizar o cache
            await obterJogosSalvos(true, true);
            await exibirMinhaLista();
            
            // Restaurar scroll da minha lista se estava em modo edição
            const scrollSalvo = sessionStorage.getItem('scrollAntesAvaliacao');
            if (scrollSalvo) {
                setTimeout(async () => {
                    await restaurarScrollPreciso(parseInt(scrollSalvo));
                }, 100);
                sessionStorage.removeItem('scrollAntesAvaliacao');
            }
        }
        
        mostrarNotificacao('Jogo adicionado com sucesso!', 'sucesso');
        
        const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
        botoesAdicionar.forEach(btn => {
            const jogoBtn = JSON.parse(btn.dataset.jogo);
            if (jogoBtn.id === jogo.id) {
                btn.classList.add('adicionado');
                btn.textContent = 'Adicionado';
            }
        });
        
        if (jogoDetalhesAtual && jogoDetalhesAtual.id === jogo.id) {
            atualizarBotaoModalDetalhes(true);
            // Não recarregar avaliações aqui se veio de detalhes, pois será recarregado após adicionar
            // Isso evita duplicação de avaliações
            if (!veioDeDetalhes) {
                await carregarAvaliacoes(jogo.id);
            }
        }
    } catch (erro) {
        console.error('Erro ao adicionar jogo:', erro);
        
        // Se o jogo foi adicionado mas houve erro ao recarregar, não mostrar erro
        if (jogoFoiAdicionado) {
            // Tentar recarregar a lista silenciosamente
            try {
                await obterJogosSalvos(true, true);
                await exibirMinhaLista();
                mostrarNotificacao('Jogo adicionado com sucesso!', 'sucesso');
            } catch (e) {
                // Se mesmo assim falhar, mostrar erro genérico
                mostrarNotificacao('Jogo pode ter sido adicionado, mas houve erro ao atualizar a lista. Recarregue a página.', 'erro');
            }
        } else {
            // Se o jogo não foi adicionado, mostrar erro
            mostrarNotificacao(erro.message || 'Erro ao adicionar jogo. Tente novamente.', 'erro');
        }
    }
}

async function editarStatusJogo(id, novoStatus, novaAvaliacao, novoComentario) {
    if (!usuarioLogado) {
        mostrarNotificacao('Você precisa estar logado!', 'erro');
        return;
    }
    
    try {
        // Separar atualização de status da avaliação para evitar conflitos
        // O id já deve ser o ID do registro em jogos_usuarios (garantido na chamada)
        const dadosAtualizacao = {
            status: novoStatus,
            atualizado_em: new Date().toISOString()
        };
        
        // Sempre atualizar avaliação e comentário com os valores fornecidos
        // Se forem null, vazios ou 0, isso limpa a avaliação/comentário
        // 0 não é um valor válido para avaliação (deve ser 1-5 ou null)
        dadosAtualizacao.avaliacao = (novaAvaliacao !== undefined && novaAvaliacao !== null && novaAvaliacao !== '' && novaAvaliacao !== 0) ? novaAvaliacao : null;
        dadosAtualizacao.comentario = (novoComentario !== undefined && novoComentario !== null && novoComentario.trim() !== '') ? novoComentario.trim() : null;
        
        await supabase.atualizarJogo(id, dadosAtualizacao);
        
        // Recarregar os jogos para atualizar o cache
        await obterJogosSalvos(true, true);
        await exibirMinhaLista();
        mostrarNotificacao('Jogo atualizado com sucesso!', 'sucesso');
    } catch (erro) {
        console.error('Erro ao editar jogo:', erro);
        mostrarNotificacao('Erro ao editar jogo. Tente novamente.', 'erro');
    }
}

async function removerJogo(id) {
    if (!usuarioLogado) {
        mostrarNotificacao('Você precisa estar logado!', 'erro');
        return;
    }
    
    const jogoRemovido = meusJogosCache.find(j => j.id === id);
    const nomeJogo = jogoRemovido ? jogoRemovido.nome : 'este jogo';
    
    mostrarConfirmacao(
        'Remover Jogo',
        `Tem certeza que deseja remover "${nomeJogo}" da sua lista?`,
        async () => {
            try {
                await supabase.removerJogo(id);
                await obterJogosSalvos(true, true);
                await exibirMinhaLista();
                mostrarNotificacao('Jogo removido com sucesso!', 'sucesso');
                
                if (jogoRemovido) {
                    const botoesAdicionar = document.querySelectorAll('.btn-adicionar');
                    botoesAdicionar.forEach(btn => {
                        const jogo = JSON.parse(btn.dataset.jogo);
                        if (jogo.id === jogoRemovido.jogo_id) {
                            btn.classList.remove('adicionado');
                            btn.textContent = 'Adicionar';
                        }
                    });
                    
                    // Se estiver na tela de detalhes do jogo removido, fechar e atualizar
                    if (jogoDetalhesAtual && jogoDetalhesAtual.id === jogoRemovido.jogo_id) {
                        fecharModalDetalhes();
                    }
                }
            } catch (erro) {
                console.error('Erro ao remover jogo:', erro);
                mostrarNotificacao('Erro ao remover jogo. Tente novamente.', 'erro');
            }
        }
    );
}

function formatarData(dataISO) {
    if (!dataISO) return 'Data desconhecida';
    
    const partes = dataISO.split('-');
    if (partes.length !== 3) return dataISO;
    
    const [ano, mes, dia] = partes;
    return `${dia}/${mes}/${ano}`;
}

function obterTextoStatus(status) {
    const textos = {
        'quero-jogar': 'Quero Jogar',
        'jogando': 'Jogando',
        'zerado': 'Zerado',
        'dropado': 'Dropado'
    };
    return textos[status] || status;
}

let sortableMinhaLista = null;
let dragAutoScrollRafId = null;
let dragAutoScrollState = null;

function destruirOrdenacaoMinhaLista() {
    if (sortableMinhaLista) {
        try {
            sortableMinhaLista.destroy();
        } catch (e) {
        }
        sortableMinhaLista = null;
    }
    pararAutoScrollDrag();
    document.body.classList.remove('is-dragging');
    tooltipDuranteDrag = false;
}

function inicializarOrdenacaoMinhaLista() {
    const container = document.getElementById('minhaLista');
    if (!container) return;
    destruirOrdenacaoMinhaLista();
    if (amigoVisualizando) return;
    if (termoBuscaLista.trim() !== '') return;
    const temHandle = !!container.querySelector('.drag-handle');
    if (!temHandle) return;
    if (typeof Sortable === 'undefined') {
        garantirSortableCarregado().then(() => {
            inicializarOrdenacaoMinhaLista();
        }).catch(() => {
        });
        return;
    }
    if (!container.dataset.dragStartBlockerAtivo) {
        container.addEventListener('dragstart', (e) => {
            const target = e.target;
            const handle = target?.closest?.('.drag-handle');
            if (!handle) {
                e.preventDefault();
                e.stopPropagation();
            }
        }, true);
        container.dataset.dragStartBlockerAtivo = 'true';
    }
    const autoScrollPlugin = obterAutoScrollPlugin();
    if (autoScrollPlugin && Sortable?.mount) {
        try {
            Sortable.mount(new autoScrollPlugin());
        } catch (e) {
        }
    }
    sortableMinhaLista = new Sortable(container, {
        animation: 160,
        easing: 'cubic-bezier(0.2, 0, 0, 1)',
        handle: '.drag-handle',
        draggable: '.jogo-card',
        forceFallback: true,
        fallbackOnBody: true,
        fallbackClass: 'sortable-fallback-custom',
        fallbackTolerance: 3,
        swapThreshold: 0.65,
        ghostClass: 'sortable-ghost',
        chosenClass: 'sortable-chosen',
        dragClass: 'sortable-drag',
        onStart: (evt) => {
            document.body.classList.add('is-dragging');
            tooltipDuranteDrag = true;
            esconderTooltipInformativoImediato();
            const handle = evt.item?.querySelector?.('.drag-handle');
            if (handle) {
                handle.addEventListener('click', bloquearCliqueHandleDuranteDrag, { capture: true, once: true });
            }
            iniciarAutoScrollDrag({
                startClientX: evt.originalEvent?.clientX,
                startClientY: evt.originalEvent?.clientY
            });
        },
        onMove: (evt) => {
            atualizarAutoScrollDrag({
                clientX: evt.originalEvent?.clientX,
                clientY: evt.originalEvent?.clientY
            });
            return true;
        },
        onEnd: async () => {
            pararAutoScrollDrag();
            document.body.classList.remove('is-dragging');
            tooltipDuranteDrag = false;
            await salvarNovaOrdem();
        }
    });
}

function bloquearCliqueHandleDuranteDrag(e) {
    e.preventDefault();
    e.stopPropagation();
}

function iniciarAutoScrollDrag({ startClientX, startClientY }) {
    pararAutoScrollDrag();
    dragAutoScrollState = {
        startClientX: typeof startClientX === 'number' ? startClientX : null,
        startClientY: typeof startClientY === 'number' ? startClientY : null,
        clientX: typeof startClientX === 'number' ? startClientX : null,
        clientY: typeof startClientY === 'number' ? startClientY : null,
        hasMoved: false,
        speed: 0
    };
    document.addEventListener('mousemove', handleAutoScrollPointerMove, { passive: true, capture: true });
    document.addEventListener('touchmove', handleAutoScrollTouchMove, { passive: true, capture: true });
    dragAutoScrollRafId = requestAnimationFrame(executarAutoScrollDrag);
}

function atualizarAutoScrollDrag({ clientX, clientY }) {
    if (!dragAutoScrollState) return;
    if (typeof clientX === 'number') dragAutoScrollState.clientX = clientX;
    if (typeof clientY === 'number') dragAutoScrollState.clientY = clientY;
    if (!dragAutoScrollState.hasMoved) {
        const startX = dragAutoScrollState.startClientX;
        const startY = dragAutoScrollState.startClientY;
        if (typeof startX === 'number' && typeof startY === 'number' && typeof dragAutoScrollState.clientX === 'number' && typeof dragAutoScrollState.clientY === 'number') {
            const dx = Math.abs(dragAutoScrollState.clientX - startX);
            const dy = Math.abs(dragAutoScrollState.clientY - startY);
            if (dx > 6 || dy > 6) dragAutoScrollState.hasMoved = true;
        } else if (typeof dragAutoScrollState.clientY === 'number') {
            dragAutoScrollState.hasMoved = true;
        }
    }
}

function pararAutoScrollDrag() {
    if (dragAutoScrollRafId) {
        cancelAnimationFrame(dragAutoScrollRafId);
        dragAutoScrollRafId = null;
    }
    dragAutoScrollState = null;
    document.removeEventListener('mousemove', handleAutoScrollPointerMove, { capture: true });
    document.removeEventListener('touchmove', handleAutoScrollTouchMove, { capture: true });
}

function handleAutoScrollPointerMove(e) {
    atualizarAutoScrollDrag({ clientX: e.clientX, clientY: e.clientY });
}

function handleAutoScrollTouchMove(e) {
    const touch = e.touches?.[0];
    if (!touch) return;
    atualizarAutoScrollDrag({ clientX: touch.clientX, clientY: touch.clientY });
}

function executarAutoScrollDrag() {
    if (!dragAutoScrollState) return;
    const clientY = dragAutoScrollState.clientY;
    if (!dragAutoScrollState.hasMoved || typeof clientY !== 'number') {
        dragAutoScrollRafId = requestAnimationFrame(executarAutoScrollDrag);
        return;
    }
    const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop || 0;
    const maxScroll = Math.max(0, (document.documentElement.scrollHeight || 0) - viewportHeight);
    const threshold = AUTO_SCROLL_THRESHOLD;
    const maxSpeed = AUTO_SCROLL_MAX_SPEED;
    const minSpeed = AUTO_SCROLL_MIN_SPEED;
    let targetSpeed = 0;
    if (clientY < threshold && scrollTop > 0) {
        const progress = 1 - Math.max(0, clientY / threshold);
        targetSpeed = -Math.max(minSpeed, Math.round(progress * maxSpeed));
    } else if (clientY > viewportHeight - threshold && scrollTop < maxScroll) {
        const distance = viewportHeight - clientY;
        const progress = 1 - Math.max(0, distance / threshold);
        targetSpeed = Math.max(minSpeed, Math.round(progress * maxSpeed));
    }
    dragAutoScrollState.speed = dragAutoScrollState.speed + ((targetSpeed - dragAutoScrollState.speed) * AUTO_SCROLL_SMOOTHING);
    const speed = Math.trunc(dragAutoScrollState.speed);
    if (speed !== 0) window.scrollBy(0, speed);
    dragAutoScrollRafId = requestAnimationFrame(executarAutoScrollDrag);
}

async function salvarNovaOrdem() {
    // Não permitir ordenar se estiver buscando
    if (termoBuscaLista.trim() !== '') {
        return;
    }
    
    const container = document.getElementById('minhaLista');
    if (!container) return;
    
    // Obter o status atual do filtro (pode ser 'todos' ou um status específico)
    const categoriaAtual = filtroAtual;
    
    const cards = Array.from(container.querySelectorAll('.jogo-card')).filter(c => c.querySelector('.drag-handle'));
    const novasOrdens = cards.map((card, index) => {
        const registroId = card.dataset.registroId;
        const statusJogo = card.dataset.statusJogo;
        if (!registroId || !statusJogo) {
            console.error('Card sem registroId ou statusJogo:', card, card.dataset);
            return null;
        }
        // registroId já é UUID (string), não precisa converter
        return {
            id: registroId,
            status: statusJogo,
            ordem: index + 1
        };
    }).filter(item => item !== null);
    
    if (novasOrdens.length === 0) {
        console.error('Nenhuma ordem válida encontrada para salvar');
        return;
    }

    try {
        const usuarioLogado = obterUsuarioLogado();
        if (!usuarioLogado) return;

        // Salvar ordem para a categoria atual (pode ser 'todos' ou um status específico)
        await supabase.atualizarOrdemJogosPorStatus(usuarioLogado.id, novasOrdens, categoriaAtual);
        
        const jogos = await obterJogosSalvos();
        jogosCache = jogos;
        meusJogosCache = jogos;
    } catch (erro) {
        console.error('Erro ao salvar ordem:', erro);
        mostrarNotificacao('A ordem foi alterada visualmente, mas não foi possível salvar no banco de dados.', 'erro');
    }
}

function atualizarContadores() {
    const jogos = jogosCache;
    
    cacheMemoizacao._verificarEAtualizarHash(jogos);
    const contadores = calcularContadoresMemoizado(jogos);
    
    Object.keys(contadores).forEach(status => {
        const elemento = document.getElementById(`contador-${status}`);
        if (elemento) {
            elemento.textContent = contadores[status];
        }
    });
}

function mostrarSkeletonContadores() {
    const ids = ['todos', 'quero-jogar', 'jogando', 'zerado', 'dropado'];
    for (const id of ids) {
        const el = document.getElementById(`contador-${id}`);
        if (!el) continue;
        el.textContent = '';
        el.classList.add('skeleton', 'skeleton-contador');
    }
}

function esconderSkeletonContadores() {
    const ids = ['todos', 'quero-jogar', 'jogando', 'zerado', 'dropado'];
    for (const id of ids) {
        const el = document.getElementById(`contador-${id}`);
        if (!el) continue;
        el.classList.remove('skeleton', 'skeleton-contador');
    }
}

async function exibirMinhaLista() {
    limparListaInfinita();
    if (amigoVisualizando || termoBuscaLista.trim() !== '') {
        destruirOrdenacaoMinhaLista();
    }
    let jogos = amigoVisualizando ? jogosCache : await obterJogosSalvos();
    
    // Garantir que os contadores sempre reflitam a lista que está sendo exibida agora
    jogosCache = jogos;
    cacheMemoizacao._verificarEAtualizarHash(jogos);
    atualizarContadores();
    esconderSkeletonContadores();

    jogos = await filtrarEOrdenarJogosMemoizado(jogos, filtroAtual, termoBuscaLista);

    if (jogos.length === 0) {
        let mensagem = 'Nenhum jogo adicionado ainda.';
        
        if (termoBuscaLista.trim() !== '') {
            mensagem = `Nenhum jogo encontrado com "${termoBuscaLista}".`;
        } else if (filtroAtual !== 'todos') {
            mensagem = `Nenhum jogo com status "${obterTextoStatus(filtroAtual)}".`;
        }
        
        minhaLista.innerHTML = `<div class="lista-vazia">${mensagem}</div>`;
        return Promise.resolve();
    }

    minhaLista.innerHTML = '';
    const podeArrastar = !amigoVisualizando && termoBuscaLista.trim() === '';
    const meusIdsSet = amigoVisualizando ? new Set((meusJogosCache || []).map(j => j.jogo_id)) : null;
    const criarCard = (jogo, index) => {
        const card = document.createElement('div');
        card.className = 'jogo-card';
        
        if (!amigoVisualizando) {
            card.dataset.registroId = jogo.id;
            card.dataset.jogoId = jogo.jogo_id;
            card.dataset.statusJogo = jogo.status;
            card.dataset.ordem = jogo.ordem || index + 1;
            if (!podeArrastar) card.dataset.dragDisabled = 'true';
            if (jogo.steam_appid) card.dataset.steamAppid = jogo.steam_appid;
        }

        const avaliacaoAtual = jogo.avaliacao || 0;
        const estrelasHTML = `
            <div class="estrelas-lista ${!amigoVisualizando ? 'estrelas-clicavel' : ''}" data-id="${jogo.id}" data-jogo-id="${jogo.jogo_id}">
                ${Array(avaliacaoAtual).fill('<i class="fas fa-star"></i>').join('')}
                ${Array(5 - avaliacaoAtual).fill('<i class="far fa-star"></i>').join('')}
            </div>
        `;
        
        const jogoNaMinhaLista = amigoVisualizando ? !!meusIdsSet?.has?.(jogo.jogo_id) : false;

        const jogoNomeEscaped = escapeHtml(jogo.nome);
        const jogoImagemEscaped = escapeHtml(jogo.imagem || '');
        const adjustedUrl = ConnectionManager.adjustImageUrl(jogoImagemEscaped, 'card');
        const loadingStrategy = ConnectionManager.getLoadingStrategy();
        const decodingStrategy = ConnectionManager.getDecodingStrategy();
        const fetchPriority = ConnectionManager.velocidade === 'slow' ? 'low' : 'auto';
        card.innerHTML = `
            ${podeArrastar ? '<div class="drag-handle" data-tooltip="Arraste para <span class=\'tooltip-destaque\'>reordenar</span> os jogos. A ordem é salva automaticamente por status."><i class="fas fa-grip-vertical"></i></div>' : ''}
            <div class="jogo-capa-wrapper">
                <img src="${IMG_PLACEHOLDER_SRC}" data-src="${adjustedUrl}" alt="${jogoNomeEscaped}" class="jogo-imagem skeleton-img-loading" data-id="${jogo.jogo_id}" draggable="false" loading="${loadingStrategy}" decoding="${decodingStrategy}" style="cursor: pointer;" fetchpriority="${fetchPriority}" width="200" height="250">
            </div>
            <div class="jogo-info">
                <div class="jogo-titulo-wrapper" data-id="${jogo.jogo_id}" style="cursor: pointer;">
                    <h3 class="jogo-titulo">${jogoNomeEscaped}</h3>
                    ${jogo.steam_appid ? `<span class="badge-steam-card"${amigoVisualizando ? ' title="Na biblioteca Steam dele"' : ''}><img src="https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" alt="Steam" width="18" height="18"></span>` : ''}
                </div>
                <p>${formatarData(jogo.lancamento)}</p>
                ${estrelasHTML}
                <span class="status-badge status-${jogo.status}" data-id="${jogo.id}" ${!amigoVisualizando ? 'style="cursor: pointer;"' : 'style="cursor: default;"'}>
                    ${obterTextoStatus(jogo.status)}
                </span>
                ${!amigoVisualizando ? `
                    <button class="btn-remover" data-id="${jogo.id}">
                        <i class="fas fa-trash"></i> Remover
                    </button>
                ` : ''}
                ${amigoVisualizando && !jogoNaMinhaLista ? `
                    <button class="btn-adicionar-da-lista-amigo" data-jogo-id="${jogo.jogo_id}" data-jogo-nome="${escapeHtml(jogo.nome)}" data-jogo-imagem="${jogo.imagem}" data-jogo-lancamento="${jogo.lancamento || ''}">
                        <i class="fas fa-plus"></i> Adicionar à Minha Lista
                    </button>
                ` : ''}
                ${amigoVisualizando && jogoNaMinhaLista ? `
                    <div class="badge-jogo-comum">
                        <i class="fas fa-check-circle"></i> Vocês têm esse jogo
                    </div>
                ` : ''}
            </div>
        `;
        const img = card.querySelector('img');
        registrarImagemLazy(img);
        
        if (ConnectionManager.velocidade === 'fast' && !jogo.steam_appid) {
            card.addEventListener('mouseenter', () => {
                prefetchDetalhesJogo(jogo.jogo_id);
            }, { once: true, passive: true });
        }
        
        return card;
    };

    if (amigoVisualizando && jogos.length > 30) {
        return renderizarListaInfinita({
            itens: jogos,
            criarElemento: criarCard,
            container: minhaLista,
            tamanhoPagina: 36
        });
    }

    renderizarEmLotes({
        itens: jogos,
        criarElemento: criarCard,
        container: minhaLista,
        tamanhoLote: jogos.length > 180 ? 16 : 32,
        onFim: () => {
            if (!amigoVisualizando) inicializarOrdenacaoMinhaLista();
        }
    });
}

btnConfirmar.addEventListener('click', async () => {
    if (jogoParaAdicionar) {
        const status = selectStatus.value;
        
        if (modoEdicao) {
            // Garantir que estamos usando o id do registro, não o jogo_id
            // O objeto jogo pode ter tanto 'id' (registro) quanto 'jogo_id' (API)
            // Preferir 'id' se existir, senão buscar no cache
            let registroId = jogoParaAdicionar.jogo.id;
            if (!registroId || (jogoParaAdicionar.jogo.jogo_id && registroId === jogoParaAdicionar.jogo.jogo_id)) {
                // Se o id for igual ao jogo_id ou não existir, buscar o registro correto no cache
                const jogoNoCache = meusJogosCache.find(j => 
                    j.jogo_id === jogoParaAdicionar.jogo.jogo_id || 
                    j.jogo_id === jogoParaAdicionar.jogo.id ||
                    j.id === jogoParaAdicionar.jogo.id
                );
                if (jogoNoCache) {
                    registroId = jogoNoCache.id;
                }
            }
            await editarStatusJogo(registroId, status, avaliacaoSelecionada, comentarioAtual);
        } else {
            await adicionarJogo(jogoParaAdicionar.jogo, status, avaliacaoSelecionada, comentarioAtual);
            if (jogoParaAdicionar.botao) {
                jogoParaAdicionar.botao.classList.add('adicionado');
                jogoParaAdicionar.botao.textContent = 'Adicionado';
            }
        }
        
        // Se veio da tela de detalhes, voltar para ela e atualizar
        if (veioDeDetalhes && jogoDetalhesAtual) {
            telaAvaliacao.style.display = 'none';
            telaDetalhes.style.display = 'block';
            veioDeDetalhes = false;
            
            // Atualizar botão e avaliações na tela de detalhes
            const jaAdicionado = jogoJaAdicionado(jogoDetalhesAtual.id);
            atualizarBotaoModalDetalhes(jaAdicionado);
            await carregarAvaliacoes(jogoDetalhesAtual.id);
        } else {
            // Fechar modal
            // Nota: quando adicionarJogo é chamado e estava vendo lista de amigo, o estado já foi restaurado dentro da função
            // Quando estava em modo edição, precisa restaurar estado aqui
            telaAvaliacao.style.display = 'none';
            appContainer.style.display = 'block';
            
            // Se estava em modo edição, restaurar estado (adicionarJogo já faz isso quando não está em modo edição)
            if (modoEdicao) {
                const estavaVendoAmigo = !!amigoVisualizando;
                
                if (estavaVendoAmigo) {
                    // Restaurar filtro e scroll salvos da lista do amigo
                    const filtroSalvoAmigo = sessionStorage.getItem('filtroAntesAvaliacaoAmigo');
                    const scrollSalvoAmigo = sessionStorage.getItem('scrollAntesAvaliacaoAmigo');
                    
                    if (filtroSalvoAmigo && filtroSalvoAmigo !== filtroAtual) {
                        filtroAtual = filtroSalvoAmigo;
                        sessionStorage.setItem('filtroAtual', filtroAtual);
                        
                        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
                        const btnFiltro = document.querySelector(`.filtro-btn[data-filtro="${filtroSalvoAmigo}"]`);
                        if (btnFiltro) {
                            btnFiltro.classList.add('ativo');
                        }
                        
                        await exibirMinhaLista();
                    }
                    
                    if (scrollSalvoAmigo) {
                        // Aguardar um pouco para garantir que a lista foi renderizada
                        setTimeout(async () => {
                            await restaurarScrollPreciso(parseInt(scrollSalvoAmigo));
                        }, 100);
                    }
                    
                    sessionStorage.removeItem('filtroAntesAvaliacaoAmigo');
                    sessionStorage.removeItem('scrollAntesAvaliacaoAmigo');
                } else {
                    // Restaurar filtro e scroll salvos
                    const filtroSalvo = sessionStorage.getItem('filtroAntesAvaliacao');
                    const scrollSalvo = sessionStorage.getItem('scrollAntesAvaliacao');
                    
                    if (filtroSalvo && filtroSalvo !== filtroAtual) {
                        filtroAtual = filtroSalvo;
                        sessionStorage.setItem('filtroAtual', filtroAtual);
                        
                        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
                        const btnFiltro = document.querySelector(`.filtro-btn[data-filtro="${filtroSalvo}"]`);
                        if (btnFiltro) {
                            btnFiltro.classList.add('ativo');
                        }
                        
                        await exibirMinhaLista();
                    }
                    
                    if (scrollSalvo) {
                        // Aguardar um pouco para garantir que a lista foi renderizada
                        setTimeout(async () => {
                            await restaurarScrollPreciso(parseInt(scrollSalvo));
                        }, 100);
                    }
                    
                    sessionStorage.removeItem('filtroAntesAvaliacao');
                    sessionStorage.removeItem('scrollAntesAvaliacao');
                }
            }
            if (sessionStorage.getItem('veioDoSteamAdicionar')) {
                sessionStorage.removeItem('veioDoSteamAdicionar');
                const sp = parseInt(sessionStorage.getItem('steamScrollPos') || '0', 10);
                sessionStorage.removeItem('steamScrollPos');
                abrirModalSteam({ scrollPos: sp });
            }
            sessionStorage.removeItem('telaAvaliacaoAberta');
            jogoParaAdicionar = null;
            modoEdicao = false;
            avaliacaoSelecionada = 0;
            comentarioAtual = '';
        }
        jogoParaAdicionar = null;
        modoEdicao = false;
    }
});

btnCancelar.addEventListener('click', fecharModal);

btnVoltarAvaliacao.addEventListener('click', fecharModal);

btnVoltarDetalhes.addEventListener('click', fecharModalDetalhes);

btnBuscar.addEventListener('click', () => {
    buscarJogos(campoBusca.value);
});

campoBusca.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        buscarJogos(campoBusca.value);
    }
});

btnCarregarMais.addEventListener('click', () => {
    paginaAtual++;
    buscarJogos(ultimaBusca, false);
});

document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
        btn.classList.add('ativo');
        filtroAtual = btn.dataset.filtro;
        
        // Salvar filtro atual
        sessionStorage.setItem('filtroAtual', filtroAtual);
        
        exibirMinhaLista();
    });
});

document.querySelectorAll('.estrela').forEach(estrela => {
    estrela.addEventListener('click', () => {
        const valor = parseInt(estrela.dataset.valor);
        // Se clicar na mesma estrela que já está selecionada, remove todas (toggle)
        if (avaliacaoSelecionada === valor) {
            atualizarEstrelas(0);
        } else {
            atualizarEstrelas(valor);
        }
    });
    
    estrela.addEventListener('mouseenter', () => {
        const valor = parseInt(estrela.dataset.valor);
        document.querySelectorAll('.estrela').forEach((e, index) => {
            if (index < valor) {
                e.classList.add('hover');
            } else {
                e.classList.remove('hover');
            }
        });
    });
});

document.querySelector('.avaliacao-estrelas').addEventListener('mouseleave', () => {
    document.querySelectorAll('.estrela').forEach(e => e.classList.remove('hover'));
});

campoBuscaLista.addEventListener('input', () => {
    termoBuscaLista = campoBuscaLista.value;
    if (timeoutBuscaListaId) clearTimeout(timeoutBuscaListaId);
    timeoutBuscaListaId = setTimeout(() => {
        minhaLista.innerHTML = gerarSkeletonGridHtml(12);
        exibirMinhaLista();
    }, 220);
});

btnVoltar.addEventListener('click', () => {
    resultadosBusca.innerHTML = '';
    campoBusca.value = '';
    btnVoltar.style.display = 'none';
    btnCarregarMais.style.display = 'none';
    paginaAtual = 1;
    document.querySelector('.lista-secao').scrollIntoView({ behavior: 'smooth' });
});

linkCadastroTela.addEventListener('click', (e) => {
    e.preventDefault();
    formLoginTela.classList.remove('ativo');
    formCadastroTela.classList.add('ativo');
});

linkLoginTela.addEventListener('click', (e) => {
    e.preventDefault();
    formCadastroTela.classList.remove('ativo');
    formLoginTela.classList.add('ativo');
});

btnLogout.addEventListener('click', () => {
    logout();
});

document.getElementById('formLoginCompleto').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const email = document.getElementById('loginEmailTela').value;
    const senha = document.getElementById('loginSenhaTela').value;
    
    try {
        const usuario = await supabase.login(email, senha);
        salvarUsuarioLogado(usuario);
        mostrarNotificacao(`Bem-vindo, ${usuario.usuario}!`, 'sucesso');
        atualizarInterfaceUsuario();
        atualizarBadgeFotoPerfil();
        await exibirMinhaLista();
        
        // Verificar e abrir Exchange Log após login (com delay para garantir DOM pronto)
        setTimeout(() => {
            verificarNovasAtualizacoes();
        }, 500);
        
        document.getElementById('formLoginCompleto').reset();
        const loginSenhaInput = document.getElementById('loginSenhaTela');
        const loginSenhaBtn = document.getElementById('btnToggleLoginSenha');
        const loginSenhaIcon = loginSenhaBtn.querySelector('i');
        loginSenhaInput.type = 'password';
        loginSenhaIcon.classList.remove('fa-eye-slash');
        loginSenhaIcon.classList.add('fa-eye');
        loginSenhaBtn.setAttribute('aria-label', 'Mostrar senha');
    } catch (erro) {
        console.error('Erro no login:', erro);
        mostrarNotificacao(erro.message, 'erro');
    }
});

document.getElementById('formCadastroCompleto').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const usuario = document.getElementById('cadastroUsuarioTela').value;
    const email = document.getElementById('cadastroEmailTela').value;
    const senha = document.getElementById('cadastroSenhaTela').value;
    
    try {
        await supabase.cadastrar(email, senha, usuario);
        mostrarNotificacao('Cadastro realizado com sucesso! Faça login para continuar.', 'sucesso');
        formCadastroTela.classList.remove('ativo');
        formLoginTela.classList.add('ativo');
        
        document.getElementById('formCadastroCompleto').reset();
        const cadastroSenhaInput = document.getElementById('cadastroSenhaTela');
        const cadastroSenhaBtn = document.getElementById('btnToggleCadastroSenha');
        const cadastroSenhaIcon = cadastroSenhaBtn.querySelector('i');
        cadastroSenhaInput.type = 'password';
        cadastroSenhaIcon.classList.remove('fa-eye-slash');
        cadastroSenhaIcon.classList.add('fa-eye');
        cadastroSenhaBtn.setAttribute('aria-label', 'Mostrar senha');
    } catch (erro) {
        console.error('Erro no cadastro:', erro);
        mostrarNotificacao(erro.message || 'Erro ao cadastrar. Tente novamente.', 'erro');
    }
});

function togglePasswordVisibility(inputId, buttonId) {
    const input = document.getElementById(inputId);
    const button = document.getElementById(buttonId);
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
        button.setAttribute('aria-label', 'Ocultar senha');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
        button.setAttribute('aria-label', 'Mostrar senha');
    }
}

document.getElementById('btnToggleLoginSenha').addEventListener('click', () => {
    togglePasswordVisibility('loginSenhaTela', 'btnToggleLoginSenha');
});

document.getElementById('btnToggleCadastroSenha').addEventListener('click', () => {
    togglePasswordVisibility('cadastroSenhaTela', 'btnToggleCadastroSenha');
});

usuarioLogado = obterUsuarioLogado();
atualizarInterfaceUsuario();

(async () => {
    const params = new URLSearchParams(location.search);
    const sc = params.get('steam_callback');
    const sid = params.get('steam_id');
    const sn = params.get('steam_nome') || '';
    const er = params.get('steam_erro');
    const limparUrlSteam = () => { if (history.replaceState) history.replaceState({}, '', (location.pathname || '/') + (location.hash || '')); };
    if (er) {
        limparUrlSteam();
        const msg = { '1': 'Resposta inválida da Steam.', '2': 'Não foi possível verificar o login Steam.', '3': 'Login Steam não validado.', '4': 'Não foi possível obter o ID Steam.' }[er] || 'Erro ao conectar à Steam.';
        mostrarNotificacao(msg, 'erro');
        return;
    }
    if (sc === '1' && sid && usuarioLogado) {
        try {
            await supabase.atualizarSteam(usuarioLogado.id, sid, sn);
            usuarioLogado.steam_id = sid;
            usuarioLogado.steam_nome = sn;
            salvarUsuarioLogado(usuarioLogado);
            mostrarNotificacao('Conta Steam conectada!', 'sucesso');
            setTimeout(() => abrirModalSteam(), 300);
        } catch (e) {
            mostrarNotificacao(e.message || 'Erro ao conectar Steam.', 'erro');
        }
        limparUrlSteam();
    } else if (sc === '1' && sid) {
        limparUrlSteam();
    }
})();

inicializarDelegacaoResultadosBusca();
inicializarDelegacaoMinhaLista();
inicializarDelegacaoDetalhes();

if (usuarioLogado) {
    (async () => {
        atualizarBadgeFotoPerfil();
        
        // Verificar se estava visualizando lista de amigo
        const amigoSalvo = sessionStorage.getItem('amigoVisualizando');
        const jogoDetalhesAberto = sessionStorage.getItem('jogoDetalhesAberto');
        const telaAvaliacaoAberta = sessionStorage.getItem('telaAvaliacaoAberta');
        
        // Se estava com a tela de avaliação aberta, fechar ela (não restaurar)
        if (telaAvaliacaoAberta) {
            sessionStorage.removeItem('telaAvaliacaoAberta');
        }
        
        // Restaurar filtro salvo primeiro (sempre)
        const filtroSalvo = sessionStorage.getItem('filtroAtual');
        if (filtroSalvo) {
            filtroAtual = filtroSalvo;
            document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
            const btnFiltro = document.querySelector(`.filtro-btn[data-filtro="${filtroSalvo}"]`);
            if (btnFiltro) {
                btnFiltro.classList.add('ativo');
            }
        }
        
        // Se estava vendo lista de amigo, restaurar isso
        if (amigoSalvo) {
            const amigo = JSON.parse(amigoSalvo);
            const contextoId = criarNovoContextoLista();
            amigoVisualizando = { ...amigo, contextoId };
            tituloLista.textContent = `Lista de ${escapeHtml(amigo.nome)}`;
            btnVoltarMinhaLista.style.display = 'flex';
            document.querySelector('.busca-secao').style.display = 'none';
            
            // Carregar jogos do amigo
            const jogos = await supabase.obterJogos(amigo.id);
            if (!amigoVisualizando || amigoVisualizando.id !== amigo.id || amigoVisualizando.contextoId !== contextoId) return;
            jogosCache = jogos;
            
            // Garantir que meusJogosCache tenha os MEUS jogos (sem atualizar jogosCache que tem jogos do amigo)
            await obterJogosSalvos(false);
            
            await exibirMinhaLista();
        } else {
            // Carregar minha lista normalmente
            await exibirMinhaLista();
        }
        
        if (jogoDetalhesAberto) {
            sessionStorage.removeItem('jogoDetalhesAbertoSteam');
            abrirModalDetalhes(parseInt(jogoDetalhesAberto));
        } else if (sessionStorage.getItem('steamModalBiblioteca') && usuarioLogado.steam_id) {
            sessionStorage.removeItem('steamModalBiblioteca');
            const sp = parseInt(sessionStorage.getItem('steamBibliotecaScroll') || '0', 10);
            sessionStorage.removeItem('steamBibliotecaScroll');
            abrirModalSteam({ scrollPos: sp });
        } else {
            const scrollSalvo = amigoVisualizando
                ? sessionStorage.getItem('scrollPositionListaAmigo')
                : sessionStorage.getItem('scrollPositionMinhaLista') || sessionStorage.getItem('scrollPosition');
            if (scrollSalvo) {
                setTimeout(async () => {
                    await restaurarScrollPreciso(parseInt(scrollSalvo));
                }, 300);
            }
        }
        
        atualizarContadorSolicitacoes();
        atualizarContadorNotificacoes();
        atualizarBadgeSolicitacoes();
        
        // Verificar e abrir Exchange Log na inicialização (com delay para garantir DOM pronto)
        setTimeout(() => {
            verificarNovasAtualizacoes();
        }, 500);
        
        // Atualizar notificações e solicitações a cada 30 segundos
        setInterval(() => {
            atualizarContadorNotificacoes();
            atualizarBadgeSolicitacoes();
        }, 30000);
    })();
}

// Salvar posição do scroll periodicamente
let scrollTimeout;
window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
        if (appContainer.style.display !== 'none') {
            const posicaoScroll = window.scrollY.toString();
            // Salvar scroll com chave específica baseada no contexto
            if (amigoVisualizando) {
                sessionStorage.setItem('scrollPositionListaAmigo', posicaoScroll);
                sessionStorage.setItem('scrollAntesAvaliacaoAmigo', posicaoScroll);
            } else {
                sessionStorage.setItem('scrollPositionMinhaLista', posicaoScroll);
                sessionStorage.setItem('scrollAntesAvaliacao', posicaoScroll);
            }
            // Manter chave genérica para compatibilidade
            sessionStorage.setItem('scrollPosition', posicaoScroll);
        }
    }, 100);
});

function verificarNovasAtualizacoes() {
    // Verificar se o usuário está logado antes de verificar atualizações
    const usuarioAtual = obterUsuarioLogado();
    if (!usuarioAtual) {
        return;
    }
    
    // Verificar se os elementos do DOM existem
    if (!badgeNovaAtualizacao || !modalAtualizacoes) {
        console.warn('Elementos do Exchange Log não encontrados no DOM');
        return;
    }
    
    const ultimaVersaoVista = localStorage.getItem('playshelf_ultima_versao');
    
    // Se não tem versão vista ou a versão é diferente da atual, há nova atualização
    if (!ultimaVersaoVista || ultimaVersaoVista !== VERSAO_ATUAL) {
        badgeNovaAtualizacao.style.display = 'inline-block';
        if (badgeNovaAtualizacaoMenu) {
            badgeNovaAtualizacaoMenu.style.display = 'inline-flex';
        }
        
        // Verificar se o modal já está aberto para evitar abrir duas vezes
        if (!modalAtualizacoes.classList.contains('ativo')) {
            // Abrir automaticamente após um pequeno delay para garantir que o DOM está pronto
            setTimeout(() => {
                // Verificar novamente se ainda precisa abrir e se o usuário ainda está logado
                const versaoAtualAgora = localStorage.getItem('playshelf_ultima_versao');
                const usuarioAindaLogado = obterUsuarioLogado();
                if (usuarioAindaLogado && (!versaoAtualAgora || versaoAtualAgora !== VERSAO_ATUAL)) {
                    if (!modalAtualizacoes.classList.contains('ativo')) {
                        abrirModalAtualizacoes();
                    }
                }
            }, 800);
        }
    }
}

function fecharModalComAnimacao(modal) {
    if (!modal || !modal.classList.contains('ativo')) return;
    modal.classList.add('fechando');
    setTimeout(() => {
        modal.classList.remove('ativo', 'fechando');
        if (modal === modalSteam) {
            sessionStorage.removeItem('steamModalBiblioteca');
            sessionStorage.removeItem('steamBibliotecaScroll');
        }
    }, 200);
}

function abrirModalAtualizacoes() {
    // Verificar se o modal já está aberto
    if (modalAtualizacoes.classList.contains('ativo')) {
        return;
    }
    
    listaAtualizacoes.innerHTML = gerarSkeletonGridHtml(3);
    exibirAtualizacoes();
    modalAtualizacoes.classList.add('ativo');
    
    // Marcar como visto apenas quando o modal é realmente aberto
    localStorage.setItem('playshelf_ultima_versao', VERSAO_ATUAL);
    badgeNovaAtualizacao.style.display = 'none';
    if (badgeNovaAtualizacaoMenu) {
        badgeNovaAtualizacaoMenu.style.display = 'none';
    }
}

function exibirAtualizacoes() {
    listaAtualizacoes.innerHTML = ATUALIZACOES.map(atualizacao => `
        <div class="atualizacao-card">
            <div class="atualizacao-header">
                <div class="atualizacao-versao">
                    <span class="versao-numero">v${atualizacao.versao}</span>
                    <span class="versao-data">${atualizacao.data}</span>
                </div>
                ${atualizacao.versao === VERSAO_ATUAL ? '<span class="badge-nova">NOVO</span>' : ''}
            </div>
            <h3 class="atualizacao-titulo">${atualizacao.titulo}</h3>
            <ul class="atualizacao-lista">
                ${atualizacao.itens.map(item => `<li><i class="fas fa-check-circle"></i> ${item}</li>`).join('')}
            </ul>
        </div>
    `).join('');
}

// Event listeners para modal de screenshot
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-fechar-screenshot') || e.target.closest('.btn-fechar-screenshot')) {
        fecharModalScreenshot();
    }
    
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) {
        if (e.target.closest('.screenshot-navegacao.anterior')) {
            navegarScreenshot(-1);
        }
        
        if (e.target.closest('.screenshot-navegacao.proxima')) {
            navegarScreenshot(1);
        }
    }
});

document.getElementById('modalScreenshot')?.addEventListener('click', (e) => {
    if (e.target.id === 'modalScreenshot') {
        fecharModalScreenshot();
    }
});

document.addEventListener('keydown', (e) => {
    const modalScreenshot = document.getElementById('modalScreenshot');
    if (modalScreenshot && modalScreenshot.classList.contains('ativo')) {
        const isMobile = window.innerWidth <= 768;
        if (e.key === 'Escape') {
            fecharModalScreenshot();
        } else if (!isMobile && e.key === 'ArrowLeft') {
            navegarScreenshot(-1);
        } else if (!isMobile && e.key === 'ArrowRight') {
            navegarScreenshot(1);
        }
    }
});

function abrirModalSteam(opcoes) {
    if (!modalSteam) return;
    if (!usuarioLogado) {
        mostrarNotificacao('Faça login para conectar sua Steam.', 'erro');
        return;
    }
    const temSteam = !!(usuarioLogado.steam_id && String(usuarioLogado.steam_id).trim());
    if (steamDesconectado) steamDesconectado.style.display = temSteam ? 'none' : 'flex';
    if (steamConectado) steamConectado.style.display = temSteam ? 'block' : 'none';
    if (steamNomeUsuario) steamNomeUsuario.textContent = usuarioLogado.steam_nome || usuarioLogado.steam_id || 'Steam';
    if (steamBibliotecaLoading) steamBibliotecaLoading.style.display = 'none';
    if (steamBibliotecaErro) steamBibliotecaErro.style.display = 'none';
    if (steamBibliotecaLista) steamBibliotecaLista.innerHTML = '';
    if (temSteam) {
        sessionStorage.setItem('steamModalBiblioteca', '1');
        if (opcoes && typeof opcoes.scrollPos === 'number') {
            carregarBibliotecaSteam({ scrollPos: opcoes.scrollPos });
        } else {
            carregarBibliotecaSteam();
        }
        modalSteam.classList.add('modal-steam-tela-inteira');
    } else {
        modalSteam.classList.remove('modal-steam-tela-inteira');
    }
    modalSteam.classList.add('ativo');
}

function extrairBaseNomeParaMatching(nome) {
    if (!nome || !String(nome).trim()) return '';
    const EDICOES = new Set(['edition','steam','legacy','enhanced','playtest','goty','deluxe','definitive','complete','remastered','remaster','beta','alpha','premium','digital','version','build','collector','gold','android','ios','pc']);
    let s = String(nome).trim().toLowerCase().replace(/\s+/g, ' ').replace(/[®©™]/g, '');
    let prev;
    do {
        prev = s;
        const mDash = s.match(/\s*-\s*([^-]+)\s*$/);
        if (mDash) {
            const sufixo = mDash[1].trim().toLowerCase();
            const palavras = sufixo.split(/\s+/).filter(Boolean);
            if (palavras.length > 0 && (EDICOES.has(sufixo) || palavras.every(p => EDICOES.has(p)))) {
                s = s.replace(/\s*-\s*[^-]+\s*$/, '').trim();
            }
        }
        const mPar = s.match(/\s*\(([^)]+)\)\s*$/);
        if (mPar && EDICOES.has(mPar[1].trim().toLowerCase())) {
            s = s.replace(/\s*\([^)]+\)\s*$/, '').trim();
        }
        const mLast = s.match(/\s+(\w+)\s*$/);
        if (mLast && EDICOES.has(mLast[1].toLowerCase())) {
            s = s.replace(/\s+\w+\s*$/, '').trim();
        }
    } while (prev !== s && s.length >= 2);
    return s.replace(/\s+/g, ' ').trim();
}

function renderizarSteamBiblioteca(jogos, meusJogos) {
    return jogos.map(j => {
        const nome = escapeHtml(j.name || 'Sem nome');
        const appid = j.appid || 0;
        const nameRaw = j.name || '';
        const imgSteam = `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
        const jaVinculado = (meusJogos || []).find(m => m.steam_appid === appid || String(m.jogo_id) === String(appid));
        const baseSteam = extrairBaseNomeParaMatching(nameRaw);
        const jaNaListaNaoVinculado = !jaVinculado && baseSteam.length >= 3
            ? (meusJogos || []).find(m => {
                if (m.steam_appid) return false;
                const baseLista = extrairBaseNomeParaMatching(m.nome);
                return baseLista.length >= 3 && baseSteam === baseLista;
            }) || null
            : null;
        const img = (jaVinculado || jaNaListaNaoVinculado)?.imagem || imgSteam;
        const min = Number(j.playtime_forever) || 0;
        const horas = min >= 60 ? (min / 60).toFixed(1) + ' h' : min + ' min';
        let btnHtml;
        if (jaVinculado) {
            btnHtml = `<button type="button" class="btn-steam-adicionado" disabled><i class="fas fa-check"></i> Adicionado</button><button type="button" class="btn-desvincular-steam-card" data-registro-id="${jaVinculado.id}"><i class="fas fa-unlink"></i> Desvincular</button>`;
        } else if (jaNaListaNaoVinculado) {
            btnHtml = `<button type="button" class="btn-vincular-steam" data-registro-id="${jaNaListaNaoVinculado.id}" data-jogo-nome="${escapeHtml(jaNaListaNaoVinculado.nome || '')}" data-jogo-imagem="${escapeHtml(jaNaListaNaoVinculado.imagem || '')}" data-jogo-lancamento="${escapeHtml(jaNaListaNaoVinculado.lancamento || '')}"><i class="fas fa-link"></i> Vincular à Steam</button>`;
        } else {
            btnHtml = `<button type="button" class="btn-steam-adicionar" data-appid="${appid}"><i class="fas fa-plus"></i> Adicionar</button>`;
        }
        return `<div class="steam-jogo-card" data-appid="${appid}"><img src="${escapeHtml(img)}" alt="${nome}" loading="lazy" decoding="async" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 460 215\\' fill=\\'%23333\\'><rect width=\\'460\\' height=\\'215\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%23888\\'>?</text></svg>'"><div class="steam-jogo-card-overlay"><div class="steam-jogo-info"><p class="steam-jogo-nome" title="${nome}">${nome}</p><p class="steam-jogo-horas">${horas}</p></div><div class="steam-jogo-acoes">${btnHtml}</div></div></div>`;
    }).join('');
}

async function buscarJogosSemelhantesRawg(nome) {
    if (!nome || !String(nome).trim()) return [];
    try {
        const url = `${API_BASE}/games?key=${API_KEY}&search=${encodeURIComponent(String(nome).trim())}&page_size=15`;
        const r = await fetch(url);
        const dados = await r.json();
        return Array.isArray(dados.results) ? dados.results : [];
    } catch (e) {
        return [];
    }
}

function fecharModalEscolherJogoSteam() {
    if (modalEscolherJogoSteam) fecharModalComAnimacao(modalEscolherJogoSteam);
    steamEscolherContexto = null;
}

async function aoConfirmarVincularSteam() {
    const ctx = steamEscolherContexto;
    fecharModalEscolherJogoSteam();
    if (!ctx?.apenasVincular || !ctx.registroId || !ctx.appid) return;
    try {
        await supabase.atualizarJogo(ctx.registroId, { steam_appid: Number(ctx.appid) });
        await obterJogosSalvos(true, true);
        await carregarBibliotecaSteam({ scrollPos: steamBibliotecaLista ? steamBibliotecaLista.scrollTop : 0 });
        mostrarNotificacao('Jogo vinculado à sua biblioteca Steam.', 'sucesso');
    } catch (err) {
        mostrarNotificacao(err.message || 'Erro ao vincular.', 'erro');
    }
}

async function aoEscolherJogoSteam(jogo) {
    const ctx = steamEscolherContexto;
    fecharModalEscolherJogoSteam();
    if (!ctx || !ctx.appid) return;
    const appid = Number(ctx.appid);
    const jogoComSteam = jogo
        ? { id: jogo.id, nome: jogo.nome, imagem: jogo.imagem || null, lancamento: jogo.lancamento || null, steam_appid: appid }
        : { id: appid, nome: ctx.nomeSteam, imagem: ctx.imgSteam || null, lancamento: null, steam_appid: appid };
    const meusJogos = await supabase.obterJogos(usuarioLogado.id, { forcarAtualizacao: false });
    const jaTem = (meusJogos || []).find(m => String(m.jogo_id) === String(jogoComSteam.id));
    if (jaTem) {
        try {
            await supabase.atualizarJogo(jaTem.id, { steam_appid: appid });
            await obterJogosSalvos(true, true);
            await carregarBibliotecaSteam({ scrollPos: steamBibliotecaLista ? steamBibliotecaLista.scrollTop : 0 });
            mostrarNotificacao('Jogo vinculado à sua biblioteca Steam.', 'sucesso');
        } catch (err) {
            mostrarNotificacao(err.message || 'Erro ao vincular.', 'erro');
        }
        return;
    }
    sessionStorage.setItem('veioDoSteamAdicionar', '1');
    sessionStorage.setItem('steamScrollPos', String(steamBibliotecaLista ? steamBibliotecaLista.scrollTop : 0));
    fecharModalComAnimacao(modalSteam);
    abrirModal(jogoComSteam, null);
}

async function abrirModalEscolherJogoSteam(nomeSteam, appid, imgSteam, opcoes) {
    if (!modalEscolherJogoSteam || !escolherJogoSteamLista || !escolherJogoSteamSubtitulo) return;
    const tituloEl = document.getElementById('escolherJogoSteamTituloTexto');
    const tooltipEl = document.getElementById('escolherJogoSteamTooltip');
    const rodapeEl = document.getElementById('escolherJogoSteamRodape');
    const apenasVincular = opcoes?.apenasVincular && opcoes?.registroId && opcoes?.jogoLista;
    if (apenasVincular) {
        steamEscolherContexto = { nomeSteam, appid, imgSteam, apenasVincular: true, registroId: opcoes.registroId, jogoLista: opcoes.jogoLista };
        if (tituloEl) tituloEl.textContent = 'Confirmar vínculo';
        if (tooltipEl) tooltipEl.setAttribute('data-tooltip', "Este jogo da Steam foi identificado como correspondente a um da sua lista. <span class='tooltip-destaque'>Confirme</span> se é o correto antes de vincular.");
        if (escolherJogoSteamSubtitulo) escolherJogoSteamSubtitulo.textContent = `Da Steam: ${nomeSteam}`;
        if (rodapeEl) rodapeEl.style.display = 'none';
        if (escolherJogoSteamLoading) escolherJogoSteamLoading.style.display = 'none';
        const j = opcoes.jogoLista;
        const nome = escapeHtml(j.nome || 'Sem nome');
        const ano = (j.lancamento || '').slice(0, 4) || '—';
        const img = j.imagem || '';
        escolherJogoSteamLista.innerHTML = `<div class="escolher-jogo-steam-item escolher-jogo-steam-item-apenas-vincular"><img src="${escapeHtml(img)}" alt="${nome}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 48 64\\' fill=\\'%23333\\'><rect width=\\'48\\' height=\\'64\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%23888\\' font-size=\\'10\\'>?</text></svg>'"><div class="escolher-jogo-steam-item-info"><span class="escolher-jogo-steam-item-nome">${nome}</span><span class="escolher-jogo-steam-item-ano">${ano}</span></div><button type="button" class="btn-vincular-escolher"><i class="fas fa-link"></i> Vincular</button></div>`;
        modalEscolherJogoSteam.classList.add('ativo');
        return;
    }
    steamEscolherContexto = { nomeSteam, appid, imgSteam };
    if (tituloEl) tituloEl.textContent = 'Escolher jogo para vincular';
    if (tooltipEl) tooltipEl.setAttribute('data-tooltip', "Escolha o jogo da base que corresponde ao da Steam para <span class='tooltip-destaque'>vincular e adicionar</span> à sua lista. Se não encontrar, use o botão abaixo para adicionar com o nome da Steam.");
    if (escolherJogoSteamSubtitulo) escolherJogoSteamSubtitulo.textContent = `Da Steam: ${nomeSteam}`;
    if (rodapeEl) rodapeEl.style.display = '';
    if (btnEscolherJogoSteamFallback) btnEscolherJogoSteamFallback.textContent = `Usar "${nomeSteam}" (não encontrado na base)`;
    escolherJogoSteamLista.innerHTML = '';
    if (escolherJogoSteamLoading) escolherJogoSteamLoading.style.display = 'block';
    modalEscolherJogoSteam.classList.add('ativo');
    const resultados = await buscarJogosSemelhantesRawg(nomeSteam);
    if (escolherJogoSteamLoading) escolherJogoSteamLoading.style.display = 'none';
    if (resultados.length === 0) {
        escolherJogoSteamLista.innerHTML = '<p class="steam-biblioteca-erro">Nenhum jogo semelhante encontrado na base. Use o botão abaixo para adicionar com o nome da Steam.</p>';
    } else {
        escolherJogoSteamLista.innerHTML = resultados.map(g => {
            const nome = escapeHtml(g.name || 'Sem nome');
            const ano = (g.released || '').slice(0, 4) || '—';
            const img = g.background_image || '';
            return `<div class="escolher-jogo-steam-item" data-id="${g.id}" data-nome="${escapeHtml(String(g.name || ''))}" data-imagem="${escapeHtml(img)}" data-lancamento="${escapeHtml(g.released || '')}"><img src="${escapeHtml(img)}" alt="${nome}" onerror="this.src='data:image/svg+xml,<svg xmlns=\\'http://www.w3.org/2000/svg\\' viewBox=\\'0 0 48 64\\' fill=\\'%23333\\'><rect width=\\'48\\' height=\\'64\\'/><text x=\\'50%\\' y=\\'50%\\' dominant-baseline=\\'middle\\' text-anchor=\\'middle\\' fill=\\'%23888\\' font-size=\\'10\\'>?</text></svg>'"><div class="escolher-jogo-steam-item-info"><span class="escolher-jogo-steam-item-nome">${nome}</span><span class="escolher-jogo-steam-item-ano">${ano}</span></div><button type="button" class="btn-vincular-escolher"><i class="fas fa-link"></i> Vincular e Adicionar</button></div>`;
        }).join('');
    }
}

async function obterBibliotecaSteam(steamId) {
    if (!steamId) return [];
    if (steamId === usuarioLogado?.steam_id && steamBibliotecaCache && steamBibliotecaCache.steamid === steamId && (Date.now() - steamBibliotecaCache.timestamp) < TTL_BIB_STEAM_POR_ID) {
        return steamBibliotecaCache.jogos || [];
    }
    const c = steamBibliotecaPorSteamIdCache[steamId];
    if (c && (Date.now() - c.timestamp) < TTL_BIB_STEAM_POR_ID) return c.jogos || [];
    try {
        const r = await fetch(`/api/steam-biblioteca?steamid=${encodeURIComponent(steamId)}`);
        const data = await r.json();
        const jogos = (r.ok && data.jogos) ? data.jogos : [];
        steamBibliotecaPorSteamIdCache[steamId] = { jogos, timestamp: Date.now() };
        return jogos;
    } catch (e) {
        return [];
    }
}

async function atualizarHorasSteamDetalhes(steamId, steamAppId, contextoId = null) {
    const el = document.getElementById('horasSteamDetalhes');
    if (!el) return;
    if (!steamId || !steamAppId) {
        el.style.display = 'none';
        el.textContent = '';
        return;
    }
    let min = 0;
    try {
        const jogos = await obterBibliotecaSteam(steamId);
        const j = jogos.find(x => String(x.appid) === String(steamAppId));
        min = j ? (Number(j.playtime_forever) || 0) : 0;
    } catch (e) {
        min = 0;
    }
    if (contextoId != null && !isContextoDetalhesAtivo(contextoId)) return;
    if (min <= 0) {
        el.style.display = 'none';
        el.textContent = '';
        return;
    }
    let texto;
    if (min < 60) {
        texto = min === 1 ? '1 minuto jogado na Steam' : `${min} minutos jogados na Steam`;
    } else {
        const h = min / 60;
        let numeroStr;
        if (h >= 1000) numeroStr = String(Math.round(h));
        else if (h === Math.floor(h)) numeroStr = String(Math.floor(h));
        else numeroStr = h.toFixed(1);
        texto = (numeroStr === '1' ? '1 hora jogada' : `${numeroStr} horas jogadas`) + ' na Steam';
    }
    el.textContent = ` • ${texto}`;
    el.style.display = 'inline';
}

async function carregarBibliotecaSteam(opcoes) {
    if (!steamBibliotecaLista || !steamBibliotecaLoading || !steamBibliotecaErro || !usuarioLogado?.steam_id) return;
    const steamBibliotecaContador = document.getElementById('steamBibliotecaContador');
    const sid = usuarioLogado.steam_id;
    steamBibliotecaErro.style.display = 'none';
    const TTL_BIB_STEAM = 2 * 60 * 1000;
    if (steamBibliotecaCache && steamBibliotecaCache.steamid === sid && (Date.now() - steamBibliotecaCache.timestamp) < TTL_BIB_STEAM) {
        steamBibliotecaLoading.style.display = 'none';
        steamJogosCache = steamBibliotecaCache.jogos;
        const meusJogos = await supabase.obterJogos(usuarioLogado.id, { forcarAtualizacao: false });
        steamMeusJogosCache = meusJogos || [];
        if (campoBuscaSteam) campoBuscaSteam.value = '';
        if (steamBibliotecaContador) steamBibliotecaContador.textContent = steamJogosCache.length === 1 ? '1 jogo' : `${steamJogosCache.length} jogos`;
        steamBibliotecaLista.innerHTML = renderizarSteamBiblioteca(steamJogosCache, steamMeusJogosCache);
        if (opcoes && typeof opcoes.scrollPos === 'number' && steamBibliotecaLista) {
            requestAnimationFrame(() => { steamBibliotecaLista.scrollTop = opcoes.scrollPos; });
        }
        return;
    }
    steamBibliotecaLista.innerHTML = gerarSkeletonGridHtml(12);
    steamBibliotecaLoading.style.display = 'none';
    if (steamBibliotecaContador) steamBibliotecaContador.textContent = '';
    if (campoBuscaSteam) campoBuscaSteam.value = '';
    steamBibliotecaCarregando = true;
    try {
        const [r, meusJogos] = await Promise.all([
            fetch(`/api/steam-biblioteca?steamid=${encodeURIComponent(sid)}`),
            supabase.obterJogos(usuarioLogado.id, { forcarAtualizacao: true })
        ]);
        const data = await r.json();
        if (!r.ok) {
            steamBibliotecaLista.innerHTML = '';
            steamBibliotecaErro.textContent = data.erro || 'Erro ao carregar biblioteca.';
            steamBibliotecaErro.style.display = 'block';
            if (steamBibliotecaContador) steamBibliotecaContador.textContent = '';
            return;
        }
        const jogos = data.jogos || [];
        steamBibliotecaCache = { steamid: sid, jogos, timestamp: Date.now() };
        steamJogosCache = jogos;
        steamMeusJogosCache = meusJogos || [];
        if (jogos.length === 0) {
            steamBibliotecaLista.innerHTML = '<p class="steam-biblioteca-erro">Nenhum jogo na biblioteca.</p>';
            if (steamBibliotecaContador) steamBibliotecaContador.textContent = '0 jogos';
            return;
        }
        if (steamBibliotecaContador) steamBibliotecaContador.textContent = jogos.length === 1 ? '1 jogo' : `${jogos.length} jogos`;
        steamBibliotecaLista.innerHTML = renderizarSteamBiblioteca(jogos, steamMeusJogosCache);
        if (opcoes && typeof opcoes.scrollPos === 'number' && steamBibliotecaLista) {
            requestAnimationFrame(() => { steamBibliotecaLista.scrollTop = opcoes.scrollPos; });
        }
    } catch (e) {
        steamBibliotecaLista.innerHTML = '';
        steamBibliotecaErro.textContent = 'Erro ao carregar biblioteca.';
        steamBibliotecaErro.style.display = 'block';
        if (steamBibliotecaContador) steamBibliotecaContador.textContent = '';
    } finally {
        steamBibliotecaCarregando = false;
    }
}

function filtrarBibliotecaSteam() {
    const termoRaw = (campoBuscaSteam?.value || '').trim();
    const termo = termoRaw.toLowerCase();
    const steamBibliotecaContador = document.getElementById('steamBibliotecaContador');
    if (!steamBibliotecaLista || !steamBibliotecaContador) return;
    if (steamBibliotecaCarregando) return;
    const jogos = termo
        ? steamJogosCache.filter(j => String(j.name || '').toLowerCase().includes(termo))
        : steamJogosCache;
    if (jogos.length === 0) {
        steamBibliotecaLista.innerHTML = termo
            ? `<p class="steam-biblioteca-erro">Nenhum jogo encontrado para "${escapeHtml(termoRaw)}".</p>`
            : '<p class="steam-biblioteca-erro">Nenhum jogo na biblioteca.</p>';
        steamBibliotecaContador.textContent = '0 jogos';
        return;
    }
    steamBibliotecaContador.textContent = jogos.length === 1 ? '1 jogo' : `${jogos.length} jogos`;
    steamBibliotecaLista.innerHTML = renderizarSteamBiblioteca(jogos, steamMeusJogosCache);
    steamBibliotecaLista.scrollTop = 0;
}

function abrirModalAmigos() {
    modalAmigos.classList.add('ativo');
    carregarAmigos();
}

// Event listeners para amigos
btnAmigos.addEventListener('click', abrirModalAmigos);

btnFecharAmigos.addEventListener('click', () => {
    fecharModalComAnimacao(modalAmigos);
});

modalAmigos.addEventListener('click', (e) => {
    if (e.target === modalAmigos) {
        fecharModalComAnimacao(modalAmigos);
    }
});

if (btnSteam) {
    btnSteam.addEventListener('click', abrirModalSteam);
}
if (btnFecharSteam) {
    btnFecharSteam.addEventListener('click', () => fecharModalComAnimacao(modalSteam));
}
if (modalSteam) {
    modalSteam.addEventListener('click', (e) => {
        if (e.target === modalSteam) fecharModalComAnimacao(modalSteam);
    });
}
if (btnFecharEscolherJogoSteam) {
    btnFecharEscolherJogoSteam.addEventListener('click', fecharModalEscolherJogoSteam);
}
if (modalEscolherJogoSteam) {
    modalEscolherJogoSteam.addEventListener('click', (e) => {
        if (e.target === modalEscolherJogoSteam) fecharModalEscolherJogoSteam();
        const item = e.target.closest('.escolher-jogo-steam-item');
        if (item) {
            if (steamEscolherContexto?.apenasVincular) {
                aoConfirmarVincularSteam();
                return;
            }
            const id = item.dataset.id;
            const nome = item.dataset.nome;
            const imagem = item.dataset.imagem || null;
            const lancamento = item.dataset.lancamento || null;
            if (id) aoEscolherJogoSteam({ id: Number(id), nome: nome || 'Sem nome', imagem, lancamento: lancamento || null });
        }
    });
}
if (btnEscolherJogoSteamFallback) {
    btnEscolherJogoSteamFallback.addEventListener('click', () => aoEscolherJogoSteam(null));
}
if (steamBibliotecaLista) {
    steamBibliotecaLista.addEventListener('scroll', () => {
        if (!modalSteam?.classList.contains('ativo') || !modalSteam.classList.contains('modal-steam-tela-inteira')) return;
        clearTimeout(steamScrollSaveTimeout);
        steamScrollSaveTimeout = setTimeout(() => {
            sessionStorage.setItem('steamBibliotecaScroll', String(steamBibliotecaLista.scrollTop));
        }, 200);
    });
}
if (campoBuscaSteam) {
    campoBuscaSteam.addEventListener('input', filtrarBibliotecaSteam);
}
if (btnConectarSteam) {
    btnConectarSteam.addEventListener('click', () => {
        const origin = location.origin;
        const returnTo = `${origin}/api/steam-callback?origin=${encodeURIComponent(origin)}`;
        const params = new URLSearchParams({
            'openid.ns': 'http://specs.openid.net/auth/2.0',
            'openid.identity': 'http://specs.openid.net/auth/2.0/identifier_select',
            'openid.claimed_id': 'http://specs.openid.net/auth/2.0/identifier_select',
            'openid.return_to': returnTo,
            'openid.realm': origin,
            'openid.mode': 'checkid_setup'
        });
        location.href = `https://steamcommunity.com/openid/login?${params.toString()}`;
    });
}
if (btnDesconectarSteam) {
    btnDesconectarSteam.addEventListener('click', () => {
        mostrarConfirmacao(
            'Desconectar Steam',
            'Desconectar sua conta Steam deste site? Os jogos da sua lista não serão apagados, mas perderão o vínculo com a Steam (badge, etc.).',
            async () => {
                try {
                    await supabase.removerSteam(usuarioLogado.id);
                    steamBibliotecaCache = null;
                    usuarioLogado.steam_id = null;
                    usuarioLogado.steam_nome = null;
                    salvarUsuarioLogado(usuarioLogado);
                    await obterJogosSalvos(true, true);
                    fecharModalComAnimacao(modalSteam);
                    mostrarNotificacao('Steam desconectada. Os jogos permanecem na sua lista e foram desvinculados da Steam.', 'sucesso');
                } catch (e) {
                    mostrarNotificacao(e.message || 'Erro ao desconectar.', 'erro');
                }
            }
        );
    });
}

if (steamBibliotecaLista) {
    steamBibliotecaLista.addEventListener('click', async (e) => {
        const btnDesvincular = e.target.closest('.btn-desvincular-steam-card');
        if (btnDesvincular) {
            const registroId = btnDesvincular.dataset.registroId;
            if (!registroId) return;
            const scrollSteam = steamBibliotecaLista ? steamBibliotecaLista.scrollTop : 0;
            mostrarConfirmacao(
                'Desvincular da Steam',
                'Remover o vínculo deste jogo com a Steam? A badge e os recursos Steam não serão mais exibidos para ele.',
                async () => {
                    try {
                        await supabase.atualizarJogo(registroId, { steam_appid: null });
                        await obterJogosSalvos(true, true);
                        await carregarBibliotecaSteam({ scrollPos: scrollSteam });
                        mostrarNotificacao('Jogo desvinculado da Steam.', 'sucesso');
                    } catch (err) {
                        mostrarNotificacao(err.message || 'Erro ao desvincular.', 'erro');
                    }
                }
            );
            return;
        }
        const btnAdicionado = e.target.closest('.btn-steam-adicionado');
        if (btnAdicionado) return;
        const btnVincular = e.target.closest('.btn-vincular-steam');
        if (btnVincular) {
            const card = btnVincular.closest('.steam-jogo-card');
            const appid = card?.dataset?.appid;
            const nomeSteam = card?.querySelector('.steam-jogo-nome')?.textContent || 'Sem nome';
            const imgSteam = card?.querySelector('img')?.src || `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
            if (!btnVincular.dataset.registroId || !appid) return;
            abrirModalEscolherJogoSteam(nomeSteam, appid, imgSteam, {
                apenasVincular: true,
                registroId: btnVincular.dataset.registroId,
                jogoLista: {
                    nome: btnVincular.dataset.jogoNome || '',
                    imagem: btnVincular.dataset.jogoImagem || null,
                    lancamento: btnVincular.dataset.jogoLancamento || null
                }
            });
            return;
        }
        const btnAdicionar = e.target.closest('.btn-steam-adicionar');
        if (btnAdicionar) {
            const card = btnAdicionar.closest('.steam-jogo-card');
            const appid = card?.dataset?.appid || btnAdicionar.dataset?.appid;
            const nome = card?.querySelector('.steam-jogo-nome')?.textContent || 'Sem nome';
            const imgSteam = card?.querySelector('img')?.src || `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
            if (!appid) return;
            abrirModalEscolherJogoSteam(nome, appid, imgSteam);
        }
    });
}

document.querySelectorAll('.tab-amigos').forEach(tab => {
    tab.addEventListener('click', () => {
        const tabName = tab.dataset.tab;
        
        document.querySelectorAll('.tab-amigos').forEach(t => t.classList.remove('ativo'));
        document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('ativo'));
        
        tab.classList.add('ativo');
        document.getElementById(`tab${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`).classList.add('ativo');
        
        if (tabName === 'lista') {
            carregarAmigos();
        } else if (tabName === 'solicitacoes') {
            carregarSolicitacoes();
        } else if (tabName === 'estatisticas') {
            carregarEstatisticasCompatibilidade();
        }
    });
});

btnEnviarSolicitacao.addEventListener('click', async () => {
    const nick = inputNickAmigo.value.trim();
    if (!nick) {
        mostrarNotificacao('Digite o nick do usuário!', 'erro');
        return;
    }
    
    try {
        await supabase.enviarSolicitacaoAmizade(usuarioLogado.id, nick);
        mostrarNotificacao('Solicitação enviada!', 'sucesso');
        inputNickAmigo.value = '';
    } catch (erro) {
        mostrarNotificacao(erro.message, 'erro');
    }
});

async function carregarAmigos() {
    try {
        const amigos = await supabase.obterAmigos(usuarioLogado.id);
        exibirAmigos(amigos);
    } catch (erro) {
        console.error('Erro ao carregar amigos:', erro);
        listaAmigos.innerHTML = '<p style="color: var(--cor-texto-secundario);">Erro ao carregar amigos.</p>';
    }
}

function exibirAmigos(amigos) {
    if (!amigos || amigos.length === 0) {
        listaAmigos.innerHTML = '<p style="color: var(--cor-texto-secundario);">Você ainda não tem amigos adicionados.</p>';
        return;
    }
    
    listaAmigos.innerHTML = amigos.map(amigo => {
        const amigoNomeEscaped = escapeHtml(amigo.usuario);
        const amigoFotoEscaped = amigo.foto_perfil ? escapeHtml(amigo.foto_perfil) : '';
        const avatarHTML = amigo.foto_perfil 
            ? `<img src="${amigoFotoEscaped}" alt="${amigoNomeEscaped}" class="amigo-foto">`
            : `<i class="fas fa-user-circle"></i>`;
        
        return `
            <div class="amigo-card">
                <div class="amigo-info">
                    ${avatarHTML}
                    <span>${amigoNomeEscaped}</span>
                </div>
                <div class="amigo-acoes">
                    <button class="btn-ver-lista" data-amigo-id="${amigo.id}" data-amigo-nome="${amigoNomeEscaped}" data-amigo-steam-id="${amigo.steam_id || ''}">
                        <i class="fas fa-list"></i> Ver Lista
                    </button>
                    <button class="btn-remover-amigo" data-amizade-id="${amigo.amizade_id}">
                        <i class="fas fa-user-times"></i>
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.btn-ver-lista').forEach(btn => {
        btn.addEventListener('click', () => {
            const amigoId = btn.dataset.amigoId;
            const amigoNome = btn.dataset.amigoNome;
            const amigoSteamId = btn.dataset.amigoSteamId || null;
            visualizarListaAmigo(amigoId, amigoNome, amigoSteamId);
            fecharModalComAnimacao(modalAmigos);
        });
    });
    
    document.querySelectorAll('.btn-remover-amigo').forEach(btn => {
        btn.addEventListener('click', async () => {
            mostrarConfirmacao(
                'Remover Amigo',
                'Tem certeza que deseja remover este amigo?',
                async () => {
                    try {
                        await supabase.removerAmigo(btn.dataset.amizadeId);
                        mostrarNotificacao('Amigo removido!', 'sucesso');
                        carregarAmigos();
                    } catch (erro) {
                        mostrarNotificacao('Erro ao remover amigo.', 'erro');
                    }
                }
            );
        });
    });
}

async function carregarSolicitacoes() {
    try {
        const solicitacoes = await supabase.obterSolicitacoesPendentes(usuarioLogado.id);
        exibirSolicitacoes(solicitacoes);
        atualizarContadorSolicitacoes();
        atualizarBadgeSolicitacoes();
    } catch (erro) {
        console.error('Erro ao carregar solicitações:', erro);
        listaSolicitacoes.innerHTML = '<p style="color: var(--cor-texto-secundario);">Erro ao carregar solicitações.</p>';
    }
}

function exibirSolicitacoes(solicitacoes) {
    if (!solicitacoes || solicitacoes.length === 0) {
        listaSolicitacoes.innerHTML = '<p style="color: var(--cor-texto-secundario);">Nenhuma solicitação pendente.</p>';
        return;
    }
    
    listaSolicitacoes.innerHTML = solicitacoes.map(sol => {
        const remetenteNomeEscaped = escapeHtml(sol.remetente_nome);
        const remetenteFotoEscaped = sol.remetente_foto ? escapeHtml(sol.remetente_foto) : '';
        const avatarHTML = sol.remetente_foto 
            ? `<img src="${remetenteFotoEscaped}" alt="${remetenteNomeEscaped}" class="amigo-foto">`
            : `<i class="fas fa-user-circle"></i>`;
        
        return `
            <div class="solicitacao-card">
                <div class="solicitacao-info">
                    ${avatarHTML}
                    <span>${remetenteNomeEscaped}</span>
                </div>
                <div class="solicitacao-acoes">
                    <button class="btn-aceitar" data-solicitacao-id="${sol.id}">
                        <i class="fas fa-check"></i> Aceitar
                    </button>
                    <button class="btn-recusar" data-solicitacao-id="${sol.id}">
                        <i class="fas fa-times"></i> Recusar
                    </button>
                </div>
            </div>
        `;
    }).join('');
    
    document.querySelectorAll('.btn-aceitar').forEach(btn => {
        btn.addEventListener('click', async () => {
            try {
                await supabase.aceitarSolicitacao(btn.dataset.solicitacaoId);
                mostrarNotificacao('Amigo adicionado!', 'sucesso');
                carregarSolicitacoes();
            } catch (erro) {
                mostrarNotificacao('Erro ao aceitar solicitação.', 'erro');
            }
        });
    });
    
    document.querySelectorAll('.btn-recusar').forEach(btn => {
        btn.addEventListener('click', async () => {
            try {
                await supabase.recusarSolicitacao(btn.dataset.solicitacaoId);
                mostrarNotificacao('Solicitação recusada.', 'sucesso');
                carregarSolicitacoes();
            } catch (erro) {
                mostrarNotificacao('Erro ao recusar solicitação.', 'erro');
            }
        });
    });
}

async function atualizarContadorSolicitacoes() {
    try {
        const solicitacoes = await supabase.obterSolicitacoesPendentes(usuarioLogado.id);
        const count = solicitacoes ? solicitacoes.length : 0;
        contadorSolicitacoes.textContent = count > 0 ? count : '';
        contadorSolicitacoes.style.display = count > 0 ? 'inline-block' : 'none';
    } catch (erro) {
        console.error('Erro ao atualizar contador:', erro);
    }
}

async function atualizarBadgeSolicitacoes() {
    if (!usuarioLogado) {
        badgeSolicitacoes.style.display = 'none';
        if (badgeSolicitacoesMenu) {
            badgeSolicitacoesMenu.style.display = 'none';
        }
        return;
    }
    
    try {
        const solicitacoes = await supabase.obterSolicitacoesPendentes(usuarioLogado.id);
        const count = solicitacoes ? solicitacoes.length : 0;
        
        if (count > 0) {
            badgeSolicitacoes.textContent = count > 99 ? '99+' : count;
            badgeSolicitacoes.style.display = 'inline-flex';
            if (badgeSolicitacoesMenu) {
                badgeSolicitacoesMenu.textContent = count > 99 ? '99+' : count.toString();
                badgeSolicitacoesMenu.style.display = 'inline-flex';
            }
        } else {
            badgeSolicitacoes.style.display = 'none';
            if (badgeSolicitacoesMenu) {
                badgeSolicitacoesMenu.style.display = 'none';
            }
        }
    } catch (erro) {
        console.error('Erro ao atualizar badge de solicitações:', erro);
        badgeSolicitacoes.style.display = 'none';
        if (badgeSolicitacoesMenu) {
            badgeSolicitacoesMenu.style.display = 'none';
        }
    }
}

async function carregarEstatisticasCompatibilidade() {
    if (!listaEstatisticas) return;
    
    listaEstatisticas.innerHTML = '<div class="carregando-estatisticas"><i class="fas fa-spinner fa-spin"></i> Calculando compatibilidade...</div>';
    
    try {
        const estatisticas = await supabase.obterEstatisticasCompatibilidade(usuarioLogado.id);
        exibirEstatisticasCompatibilidade(estatisticas);
    } catch (erro) {
        console.error('Erro ao carregar estatísticas:', erro);
        listaEstatisticas.innerHTML = '<p style="color: var(--cor-texto-secundario); text-align: center; padding: 20px;">Erro ao carregar estatísticas de compatibilidade.</p>';
    }
}

function exibirEstatisticasCompatibilidade(estatisticas) {
    if (!listaEstatisticas) return;
    
    if (!estatisticas || estatisticas.length === 0) {
        listaEstatisticas.innerHTML = '<p style="color: var(--cor-texto-secundario); text-align: center; padding: 20px;">Você ainda não tem amigos adicionados para calcular compatibilidade.</p>';
        return;
    }
    
    listaEstatisticas.innerHTML = estatisticas.map(stat => {
        if (stat.erro) {
            const amigoNomeEscaped = escapeHtml(stat.amigo_nome);
            const amigoFotoEscaped = stat.amigo_foto ? escapeHtml(stat.amigo_foto) : '';
            const avatarHTML = stat.amigo_foto 
                ? `<img src="${amigoFotoEscaped}" alt="${amigoNomeEscaped}" class="estatistica-foto">`
                : `<i class="fas fa-user-circle"></i>`;
            
            return `
                <div class="estatistica-card erro">
                    <div class="estatistica-header">
                        <div class="estatistica-info">
                            ${avatarHTML}
                            <span>${amigoNomeEscaped}</span>
                        </div>
                    </div>
                    <p style="color: var(--cor-texto-secundario); text-align: center; padding: 10px;">Erro ao calcular compatibilidade</p>
                </div>
            `;
        }
        
        const amigoNomeEscaped = escapeHtml(stat.amigo_nome);
        const amigoFotoEscaped = stat.amigo_foto ? escapeHtml(stat.amigo_foto) : '';
        const avatarHTML = stat.amigo_foto 
            ? `<img src="${amigoFotoEscaped}" alt="${amigoNomeEscaped}" class="estatistica-foto">`
            : `<i class="fas fa-user-circle"></i>`;
        
        const corCompatibilidade = stat.compatibilidade >= 80 ? '#22c55e' : 
                                   stat.compatibilidade >= 60 ? '#fbbf24' : 
                                   stat.compatibilidade >= 40 ? '#f59e0b' : '#ef4444';
        
        const textoCompatibilidade = stat.compatibilidade >= 80 ? 'Excelente' :
                                     stat.compatibilidade >= 60 ? 'Boa' :
                                     stat.compatibilidade >= 40 ? 'Média' : 'Baixa';
        
        return `
            <div class="estatistica-card">
                <div class="estatistica-header">
                    <div class="estatistica-info">
                        ${avatarHTML}
                        <div class="estatistica-nome-container">
                            <span class="estatistica-nome">${amigoNomeEscaped}</span>
                            <span class="estatistica-texto-compatibilidade" style="color: ${corCompatibilidade};">${textoCompatibilidade}</span>
                        </div>
                    </div>
                    <div class="estatistica-compatibilidade-principal" style="background: linear-gradient(135deg, ${corCompatibilidade}15, ${corCompatibilidade}05); border-color: ${corCompatibilidade};">
                        <div class="estatistica-porcentagem" style="color: ${corCompatibilidade};">${stat.compatibilidade}%</div>
                        <div class="estatistica-label">Compatibilidade</div>
                    </div>
                </div>
                <div class="estatistica-detalhes">
                    <div class="estatistica-metrica">
                        <div class="estatistica-metrica-icon" style="background: rgba(99, 102, 241, 0.1); color: var(--cor-primaria);">
                            <i class="fas fa-gamepad"></i>
                        </div>
                        <div class="estatistica-metrica-info">
                            <div class="estatistica-metrica-valor">${stat.jogos_comuns}</div>
                            <div class="estatistica-metrica-label">Jogos em Comum</div>
                        </div>
                    </div>
                    <div class="estatistica-metrica">
                        <div class="estatistica-metrica-icon" style="background: rgba(251, 191, 36, 0.1); color: #fbbf24;">
                            <i class="fas fa-star"></i>
                        </div>
                        <div class="estatistica-metrica-info">
                            <div class="estatistica-metrica-valor">${stat.porcentagem_avaliacoes_similares}%</div>
                            <div class="estatistica-metrica-label">Avaliações Similares</div>
                        </div>
                    </div>
                    <div class="estatistica-metrica">
                        <div class="estatistica-metrica-icon" style="background: rgba(34, 197, 94, 0.1); color: #22c55e;">
                            <i class="fas fa-check-circle"></i>
                        </div>
                        <div class="estatistica-metrica-info">
                            <div class="estatistica-metrica-valor">${stat.porcentagem_status_similares}%</div>
                            <div class="estatistica-metrica-label">Status Similares</div>
                        </div>
                    </div>
                </div>
                <div class="estatistica-info-adicional">
                    <div class="estatistica-info-item">
                        <span class="estatistica-info-label">Seus jogos:</span>
                        <span class="estatistica-info-valor">${stat.total_jogos_usuario}</span>
                    </div>
                    <div class="estatistica-info-item">
                        <span class="estatistica-info-label">Jogos do amigo:</span>
                        <span class="estatistica-info-valor">${stat.total_jogos_amigo}</span>
                    </div>
                    ${stat.jogos_com_avaliacao_comum > 0 ? `
                    <div class="estatistica-info-item">
                        <span class="estatistica-info-label">Com avaliações:</span>
                        <span class="estatistica-info-valor">${stat.jogos_com_avaliacao_comum}</span>
                    </div>
                    ` : ''}
                    ${((stat.jogos_vinculados_steam_usuario || 0) > 0 || (stat.jogos_vinculados_steam_amigo || 0) > 0) ? `
                    <div class="estatistica-info-item">
                        <span class="estatistica-info-label"><i class="fab fa-steam" style="color:#66c0f4;"></i> Steam (você):</span>
                        <span class="estatistica-info-valor">${stat.jogos_vinculados_steam_usuario || 0} vinculados</span>
                    </div>
                    <div class="estatistica-info-item">
                        <span class="estatistica-info-label"><i class="fab fa-steam" style="color:#66c0f4;"></i> Steam (amigo):</span>
                        <span class="estatistica-info-valor">${stat.jogos_vinculados_steam_amigo || 0} vinculados</span>
                    </div>
                    ${(stat.jogos_steam_comuns || 0) > 0 ? `
                    <div class="estatistica-info-item">
                        <span class="estatistica-info-label">Steam em comum:</span>
                        <span class="estatistica-info-valor">${stat.jogos_steam_comuns} jogos</span>
                    </div>
                    ` : ''}
                    ` : ''}
                </div>
            </div>
        `;
    }).join('');
}

async function carregarEstatisticasPessoais() {
    if (!conteudoEstatisticas) return;
    
    conteudoEstatisticas.innerHTML = '<div class="carregando-estatisticas"><i class="fas fa-spinner fa-spin"></i> Carregando estatísticas...</div>';
    
    try {
        const jogos = await supabase.obterJogos(usuarioLogado.id, { forcarAtualizacao: true });
        const estatisticas = calcularEstatisticasPessoais(jogos);
        estatisticas.jogosSteamNaLista = jogos.filter(j => j.steam_appid != null).length;
        let totalHorasSteam = 0;
        if (usuarioLogado?.steam_id && estatisticas.jogosSteamNaLista > 0) {
            try {
                const bib = await obterBibliotecaSteam(usuarioLogado.steam_id);
                const appIds = new Set(jogos.filter(j => j.steam_appid != null).map(j => String(j.steam_appid)));
                for (const g of bib) {
                    if (appIds.has(String(g.appid))) totalHorasSteam += (Number(g.playtime_forever) || 0) / 60;
                }
            } catch (e) { totalHorasSteam = 0; }
        }
        estatisticas.totalHorasSteam = totalHorasSteam;
        
        exibirEstatisticasPessoais(estatisticas, []);
        
        calcularEstatisticasGeneros(jogos).then(generosEstatisticas => {
            if (conteudoEstatisticas && modalEstatisticas.classList.contains('ativo')) {
                exibirEstatisticasPessoais(estatisticas, generosEstatisticas);
            }
        }).catch(erro => {
            console.error('Erro ao carregar gêneros:', erro);
        });
    } catch (erro) {
        console.error('Erro ao carregar estatísticas:', erro);
        conteudoEstatisticas.innerHTML = '<p style="color: var(--cor-texto-secundario); text-align: center; padding: 20px;">Erro ao carregar estatísticas.</p>';
    }
}

async function calcularEstatisticasGeneros(jogos) {
    const generosMap = new Map();
    const jogosUnicos = new Set();
    
    for (const jogo of jogos) {
        if (!jogo.jogo_id || jogosUnicos.has(jogo.jogo_id)) continue;
        jogosUnicos.add(jogo.jogo_id);
        
        try {
            const detalhes = await buscarDetalhesJogo(jogo.jogo_id);
            if (detalhes && detalhes.genres && Array.isArray(detalhes.genres)) {
                detalhes.genres.forEach(genre => {
                    const nomeGenero = genre.name;
                    if (nomeGenero) {
                        generosMap.set(nomeGenero, (generosMap.get(nomeGenero) || 0) + 1);
                    }
                });
            }
        } catch (erro) {
            console.warn(`Erro ao buscar gêneros do jogo ${jogo.jogo_id}:`, erro);
        }
    }
    
    const generosArray = Array.from(generosMap.entries())
        .map(([nome, quantidade]) => ({ nome, quantidade }))
        .sort((a, b) => b.quantidade - a.quantidade);
    
    const generosTraduzidos = await Promise.all(
        generosArray.map(async (genero) => {
            const nomeTraduzido = await traduzirTexto(genero.nome);
            return { nome: nomeTraduzido, quantidade: genero.quantidade };
        })
    );
    
    return generosTraduzidos;
}

function calcularEstatisticasPessoais(jogos) {
    const totalJogos = jogos.length;
    
    const porStatus = {
        'quero-jogar': 0,
        'jogando': 0,
        'zerado': 0,
        'dropado': 0
    };
    
    let totalAvaliacoes = 0;
    let jogosComAvaliacao = 0;
    const avaliacoesPorValor = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
    
    jogos.forEach(jogo => {
        if (jogo.status && porStatus.hasOwnProperty(jogo.status)) {
            porStatus[jogo.status]++;
        }
        
        if (jogo.avaliacao && jogo.avaliacao >= 1 && jogo.avaliacao <= 5) {
            totalAvaliacoes += jogo.avaliacao;
            jogosComAvaliacao++;
            avaliacoesPorValor[jogo.avaliacao]++;
        }
    });
    
    const mediaAvaliacoes = jogosComAvaliacao > 0 ? (totalAvaliacoes / jogosComAvaliacao).toFixed(1) : 0;
    const porcentagemAvaliados = totalJogos > 0 ? Math.round((jogosComAvaliacao / totalJogos) * 100) : 0;
    
    const jogosZerados = porStatus['zerado'];
    const jogosJogando = porStatus['jogando'];
    const jogosQueroJogar = porStatus['quero-jogar'];
    const jogosDropados = porStatus['dropado'];
    
    const porcentagemZerados = totalJogos > 0 ? Math.round((jogosZerados / totalJogos) * 100) : 0;
    
    const historicoMensal = calcularHistoricoMensal(jogos);
    
    return {
        totalJogos,
        porStatus,
        mediaAvaliacoes: parseFloat(mediaAvaliacoes),
        jogosComAvaliacao,
        porcentagemAvaliados,
        avaliacoesPorValor,
        jogosZerados,
        jogosJogando,
        jogosQueroJogar,
        jogosDropados,
        porcentagemZerados,
        historicoMensal
    };
}

function calcularHistoricoMensal(jogos) {
    if (!jogos || !Array.isArray(jogos) || jogos.length === 0) {
        return [];
    }
    
    const historicoAdicionados = new Map();
    const historicoZerados = new Map();
    
    const mesesNomes = [
        'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
        'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
    ];
    
    jogos.forEach(jogo => {
        if (!jogo) return;
        
        if (jogo.created_at) {
            try {
                const dataAdicao = new Date(jogo.created_at);
                if (!isNaN(dataAdicao.getTime())) {
                    const chaveMes = `${dataAdicao.getFullYear()}-${String(dataAdicao.getMonth() + 1).padStart(2, '0')}`;
                    const mesAno = `${mesesNomes[dataAdicao.getMonth()]} ${dataAdicao.getFullYear()}`;
                    
                    if (!historicoAdicionados.has(chaveMes)) {
                        historicoAdicionados.set(chaveMes, { mesAno, quantidade: 0 });
                    }
                    historicoAdicionados.get(chaveMes).quantidade++;
                }
            } catch (e) {
                console.warn('Erro ao processar data de criação do jogo:', e);
            }
        }
        
        if (jogo.status === 'zerado') {
            let dataZerado = null;
            
            if (jogo.zerado_em) {
                try {
                    dataZerado = new Date(jogo.zerado_em);
                    if (isNaN(dataZerado.getTime())) {
                        dataZerado = null;
                    }
                } catch (e) {
                    dataZerado = null;
                }
            }
            
            if (!dataZerado && jogo.atualizado_em) {
                try {
                    const dataAtualizacao = new Date(jogo.atualizado_em);
                    if (!isNaN(dataAtualizacao.getTime())) {
                        if (jogo.created_at) {
                            const dataCriacao = new Date(jogo.created_at);
                            if (!isNaN(dataCriacao.getTime()) && dataAtualizacao.getTime() > dataCriacao.getTime()) {
                                dataZerado = dataAtualizacao;
                            }
                        } else {
                            dataZerado = dataAtualizacao;
                        }
                    }
                } catch (e) {
                    dataZerado = null;
                }
            }
            
            if (!dataZerado && jogo.created_at) {
                try {
                    const dataCriacao = new Date(jogo.created_at);
                    if (!isNaN(dataCriacao.getTime())) {
                        dataZerado = dataCriacao;
                    }
                } catch (e) {
                    dataZerado = null;
                }
            }
            
            if (dataZerado) {
                try {
                    const chaveMes = `${dataZerado.getFullYear()}-${String(dataZerado.getMonth() + 1).padStart(2, '0')}`;
                    const mesAno = `${mesesNomes[dataZerado.getMonth()]} ${dataZerado.getFullYear()}`;
                    
                    if (!historicoZerados.has(chaveMes)) {
                        historicoZerados.set(chaveMes, { mesAno, quantidade: 0 });
                    }
                    historicoZerados.get(chaveMes).quantidade++;
                } catch (e) {
                    console.warn('Erro ao processar data de zerado do jogo:', e);
                }
            }
        }
    });
    
    const todosMeses = new Set([...historicoAdicionados.keys(), ...historicoZerados.keys()]);
    
    if (todosMeses.size === 0) {
        return [];
    }
    
    const historicoArray = Array.from(todosMeses)
        .sort()
        .map(chaveMes => {
            const adicionados = historicoAdicionados.get(chaveMes) || { mesAno: '', quantidade: 0 };
            const zerados = historicoZerados.get(chaveMes) || { mesAno: '', quantidade: 0 };
            
            return {
                chaveMes,
                mesAno: adicionados.mesAno || zerados.mesAno,
                adicionados: adicionados.quantidade || 0,
                zerados: zerados.quantidade || 0
            };
        });
    
    return historicoArray.slice(-12);
}

function exibirEstatisticasPessoais(stat, generos = []) {
    if (!conteudoEstatisticas) return;
    
    const cardsEstatisticas = `
        <div class="dashboard-grid">
            <div class="dashboard-card card-principal">
                <div class="dashboard-card-icon" style="background: linear-gradient(135deg, var(--cor-primaria), #4f46e5);">
                    <i class="fas fa-gamepad"></i>
                </div>
                <div class="dashboard-card-content">
                    <div class="dashboard-card-valor">${stat.totalJogos}</div>
                    <div class="dashboard-card-label">Total de Jogos</div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-icon" style="background: rgba(34, 197, 94, 0.1); color: #22c55e;">
                    <i class="fas fa-check-circle"></i>
                </div>
                <div class="dashboard-card-content">
                    <div class="dashboard-card-valor">${stat.jogosZerados}</div>
                    <div class="dashboard-card-label">Jogos Zerados</div>
                    <div class="dashboard-card-sub">${stat.porcentagemZerados}% da coleção</div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-icon" style="background: rgba(234, 179, 8, 0.1); color: #fbbf24;">
                    <i class="fas fa-play-circle"></i>
                </div>
                <div class="dashboard-card-content">
                    <div class="dashboard-card-valor">${stat.jogosJogando}</div>
                    <div class="dashboard-card-label">Jogando Agora</div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-icon" style="background: rgba(251, 191, 36, 0.1); color: #fbbf24;">
                    <i class="fas fa-star"></i>
                </div>
                <div class="dashboard-card-content">
                    <div class="dashboard-card-valor">${stat.mediaAvaliacoes > 0 ? stat.mediaAvaliacoes : '-'}</div>
                    <div class="dashboard-card-label">Média de Avaliações</div>
                    <div class="dashboard-card-sub">${stat.jogosComAvaliacao} jogos avaliados</div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-icon" style="background: rgba(102, 192, 244, 0.2); color: #66c0f4;">
                    <i class="fab fa-steam"></i>
                </div>
                <div class="dashboard-card-content">
                    <div class="dashboard-card-valor">${stat.jogosSteamNaLista ?? 0}</div>
                    <div class="dashboard-card-label">Jogos Vinculados à Steam</div>
                </div>
            </div>
            
            <div class="dashboard-card">
                <div class="dashboard-card-icon" style="background: rgba(102, 192, 244, 0.2); color: #66c0f4;">
                    <i class="fas fa-clock"></i>
                </div>
                <div class="dashboard-card-content">
                    <div class="dashboard-card-valor">${(stat.totalHorasSteam ?? 0) >= 1000 ? Math.round(stat.totalHorasSteam) + ' h' : (stat.totalHorasSteam ?? 0) >= 1 ? (stat.totalHorasSteam.toFixed(1).replace(/\\.0$/, '')) + ' h' : (stat.totalHorasSteam > 0 ? '< 1 h' : '—')}</div>
                    <div class="dashboard-card-label">Horas Jogadas (Steam)</div>
                </div>
            </div>
        </div>
        
        <div class="dashboard-secao">
            <h3><i class="fas fa-chart-pie"></i> Distribuição por Status</h3>
            <div class="dashboard-status-grid">
                <div class="dashboard-status-item">
                    <div class="dashboard-status-header">
                        <span class="dashboard-status-label">🎮 Quero Jogar</span>
                        <span class="dashboard-status-valor">${stat.jogosQueroJogar}</span>
                    </div>
                    <div class="dashboard-status-bar">
                        <div class="dashboard-status-bar-fill" style="width: ${stat.totalJogos > 0 ? (stat.jogosQueroJogar / stat.totalJogos * 100) : 0}%; background: #3b82f6;"></div>
                    </div>
                </div>
                
                <div class="dashboard-status-item">
                    <div class="dashboard-status-header">
                        <span class="dashboard-status-label">⚡ Jogando</span>
                        <span class="dashboard-status-valor">${stat.jogosJogando}</span>
                    </div>
                    <div class="dashboard-status-bar">
                        <div class="dashboard-status-bar-fill" style="width: ${stat.totalJogos > 0 ? (stat.jogosJogando / stat.totalJogos * 100) : 0}%; background: #fbbf24;"></div>
                    </div>
                </div>
                
                <div class="dashboard-status-item">
                    <div class="dashboard-status-header">
                        <span class="dashboard-status-label">✅ Zerado</span>
                        <span class="dashboard-status-valor">${stat.jogosZerados}</span>
                    </div>
                    <div class="dashboard-status-bar">
                        <div class="dashboard-status-bar-fill" style="width: ${stat.totalJogos > 0 ? (stat.jogosZerados / stat.totalJogos * 100) : 0}%; background: #22c55e;"></div>
                    </div>
                </div>
                
                <div class="dashboard-status-item">
                    <div class="dashboard-status-header">
                        <span class="dashboard-status-label">❌ Dropado</span>
                        <span class="dashboard-status-valor">${stat.jogosDropados}</span>
                    </div>
                    <div class="dashboard-status-bar">
                        <div class="dashboard-status-bar-fill" style="width: ${stat.totalJogos > 0 ? (stat.jogosDropados / stat.totalJogos * 100) : 0}%; background: #ef4444;"></div>
                    </div>
                </div>
            </div>
        </div>
        
        ${stat.jogosComAvaliacao > 0 ? `
        <div class="dashboard-secao">
            <h3><i class="fas fa-star"></i> Distribuição de Avaliações</h3>
            <div class="dashboard-avaliacoes-grid">
                ${[5, 4, 3, 2, 1].map(estrelas => {
                    const quantidade = stat.avaliacoesPorValor[estrelas] || 0;
                    const porcentagem = stat.jogosComAvaliacao > 0 ? (quantidade / stat.jogosComAvaliacao * 100) : 0;
                    return `
                        <div class="dashboard-avaliacao-item">
                            <div class="dashboard-avaliacao-header">
                                <div class="dashboard-avaliacao-estrelas">
                                    ${'★'.repeat(estrelas)}${'☆'.repeat(5 - estrelas)}
                                </div>
                                <span class="dashboard-avaliacao-valor">${quantidade}</span>
                            </div>
                            <div class="dashboard-status-bar">
                                <div class="dashboard-status-bar-fill" style="width: ${porcentagem}%; background: #fbbf24;"></div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
        ` : ''}
        
        ${generos.length > 0 ? `
        <div class="dashboard-secao">
            <h3><i class="fas fa-tags"></i> Jogos por Gênero</h3>
            <div class="dashboard-generos-container">
                ${generos.slice(0, 10).map((genero, index) => {
                    const porcentagem = stat.totalJogos > 0 ? (genero.quantidade / stat.totalJogos * 100) : 0;
                    const cores = [
                        'linear-gradient(135deg, #6366f1, #4f46e5)',
                        'linear-gradient(135deg, #22c55e, #16a34a)',
                        'linear-gradient(135deg, #fbbf24, #f59e0b)',
                        'linear-gradient(135deg, #ef4444, #dc2626)',
                        'linear-gradient(135deg, #8b5cf6, #7c3aed)',
                        'linear-gradient(135deg, #06b6d4, #0891b2)',
                        'linear-gradient(135deg, #f97316, #ea580c)',
                        'linear-gradient(135deg, #ec4899, #db2777)',
                        'linear-gradient(135deg, #14b8a6, #0d9488)',
                        'linear-gradient(135deg, #a855f7, #9333ea)'
                    ];
                    const cor = cores[index % cores.length];
                    
                    return `
                        <div class="dashboard-genero-item">
                            <div class="dashboard-genero-header">
                                <span class="dashboard-genero-nome">${escapeHtml(genero.nome)}</span>
                                <span class="dashboard-genero-quantidade">${genero.quantidade}</span>
                            </div>
                            <div class="dashboard-status-bar">
                                <div class="dashboard-status-bar-fill" style="width: ${porcentagem}%; background: ${cor};"></div>
                            </div>
                            <div class="dashboard-genero-porcentagem">${porcentagem.toFixed(1)}%</div>
                        </div>
                    `;
                }).join('')}
                ${generos.length > 10 ? `
                    <div class="dashboard-genero-info-extra">
                        <i class="fas fa-info-circle"></i>
                        Mostrando os 10 gêneros mais comuns de ${generos.length} gêneros diferentes
                    </div>
                ` : ''}
            </div>
        </div>
        ` : `
        <div class="dashboard-secao">
            <h3><i class="fas fa-tags"></i> Jogos por Gênero</h3>
            <p style="color: var(--cor-texto-secundario); text-align: center; padding: 20px;">
                <i class="fas fa-info-circle"></i> Carregando informações de gêneros dos jogos...
            </p>
        </div>
        `}
        
        ${stat.historicoMensal && stat.historicoMensal.length > 0 ? `
        <div class="dashboard-secao">
            <h3><i class="fas fa-calendar-alt"></i> Histórico Mensal</h3>
            <div class="dashboard-historico-container">
                <div class="dashboard-historico-legend">
                    <div class="dashboard-historico-legend-item">
                        <span class="dashboard-historico-legend-color" style="background: #6366f1;"></span>
                        <span>Jogos Adicionados</span>
                    </div>
                    <div class="dashboard-historico-legend-item">
                        <span class="dashboard-historico-legend-color" style="background: #22c55e;"></span>
                        <span>Jogos Zerados</span>
                    </div>
                </div>
                <div class="dashboard-historico-grafico-wrapper">
                    <div class="dashboard-historico-grafico" id="graficoHistoricoMensal">
                        ${(() => {
                            const maxValor = Math.max(...stat.historicoMensal.map(m => Math.max(m.adicionados || 0, m.zerados || 0)), 1);
                            return stat.historicoMensal.map((mes, index) => {
                                const alturaAdicionados = maxValor > 0 ? (Math.max(mes.adicionados || 0, 0) / maxValor * 100) : 0;
                                const alturaZerados = maxValor > 0 ? (Math.max(mes.zerados || 0, 0) / maxValor * 100) : 0;
                                const totalMes = (mes.adicionados || 0) + (mes.zerados || 0);
                                const mesAnoSeguro = mes.mesAno || `Mês ${index + 1}`;
                                
                                return `
                                    <div class="dashboard-historico-bar-container" data-mes-index="${index}">
                                        <div class="dashboard-historico-tooltip" id="tooltip-mes-${index}" style="display: none; visibility: hidden;">
                                            <div class="dashboard-historico-tooltip-header">${escapeHtml(mesAnoSeguro)}</div>
                                            <div class="dashboard-historico-tooltip-content">
                                                <div class="dashboard-historico-tooltip-item">
                                                    <span class="dashboard-historico-tooltip-label">
                                                        <i class="fas fa-plus-circle" style="color: #6366f1;"></i> Adicionados:
                                                    </span>
                                                    <span class="dashboard-historico-tooltip-value">${mes.adicionados || 0}</span>
                                                </div>
                                                <div class="dashboard-historico-tooltip-item">
                                                    <span class="dashboard-historico-tooltip-label">
                                                        <i class="fas fa-check-circle" style="color: #22c55e;"></i> Zerados:
                                                    </span>
                                                    <span class="dashboard-historico-tooltip-value">${mes.zerados || 0}</span>
                                                </div>
                                                <div class="dashboard-historico-tooltip-total">
                                                    Total: <strong>${totalMes}</strong> jogo${totalMes !== 1 ? 's' : ''}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="dashboard-historico-bars">
                                            <div class="dashboard-historico-bar dashboard-historico-bar-adicionados" 
                                                 style="height: ${Math.max(alturaAdicionados, 0)}%;"
                                                 data-mes-index="${index}"
                                                 data-tipo="adicionados"
                                                 data-valor="${mes.adicionados || 0}">
                                                ${(mes.adicionados || 0) > 0 ? `<span class="dashboard-historico-bar-valor">${mes.adicionados}</span>` : ''}
                                            </div>
                                            <div class="dashboard-historico-bar dashboard-historico-bar-zerados" 
                                                 style="height: ${Math.max(alturaZerados, 0)}%;"
                                                 data-mes-index="${index}"
                                                 data-tipo="zerados"
                                                 data-valor="${mes.zerados || 0}">
                                                ${(mes.zerados || 0) > 0 ? `<span class="dashboard-historico-bar-valor">${mes.zerados}</span>` : ''}
                                            </div>
                                        </div>
                                        <div class="dashboard-historico-mes">${escapeHtml(mesAnoSeguro)}</div>
                                    </div>
                                `;
                            }).join('');
                        })()}
                    </div>
                </div>
            </div>
        </div>
        ` : ''}
    `;
    
    conteudoEstatisticas.innerHTML = cardsEstatisticas;
    
    if (stat.historicoMensal && stat.historicoMensal.length > 0) {
        requestAnimationFrame(() => {
            setTimeout(() => {
                inicializarTooltipsHistorico();
            }, 200);
        });
    }
}

function inicializarTooltipsHistorico() {
    const grafico = document.getElementById('graficoHistoricoMensal');
    if (!grafico) return;
    
    const containers = grafico.querySelectorAll('.dashboard-historico-bar-container');
    
    containers.forEach(container => {
        const mesIndex = container.dataset.mesIndex;
        if (!mesIndex) return;
        
        let tooltip = document.getElementById(`tooltip-mes-${mesIndex}`);
        if (!tooltip) return;
        
        let hideTimeout = null;
        let isTooltipVisible = false;
        
        const moverTooltipParaBody = () => {
            if (tooltip.parentNode !== document.body) {
                document.body.appendChild(tooltip);
            }
        };
        
        const mostrarTooltip = () => {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
            
            moverTooltipParaBody();
            
            tooltip.style.setProperty('display', 'block', 'important');
            tooltip.style.setProperty('visibility', 'visible', 'important');
            tooltip.style.setProperty('opacity', '1', 'important');
            
            atualizarPosicaoTooltip(tooltip, container);
            isTooltipVisible = true;
        };
        
        const esconderTooltip = () => {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
            tooltip.style.setProperty('display', 'none', 'important');
            tooltip.style.setProperty('visibility', 'hidden', 'important');
            isTooltipVisible = false;
        };
        
        const cancelarEsconder = () => {
            if (hideTimeout) {
                clearTimeout(hideTimeout);
                hideTimeout = null;
            }
        };
        
        const atualizarPosicaoNoMove = () => {
            cancelarEsconder();
            if (isTooltipVisible) {
                atualizarPosicaoTooltip(tooltip, container);
            }
        };
        
        container.addEventListener('mouseenter', mostrarTooltip);
        container.addEventListener('mouseleave', esconderTooltip);
        container.addEventListener('mousemove', atualizarPosicaoNoMove);
        
        tooltip.addEventListener('mouseenter', cancelarEsconder);
        tooltip.addEventListener('mouseleave', esconderTooltip);
        
        moverTooltipParaBody();
        tooltip.style.setProperty('display', 'none', 'important');
        tooltip.style.setProperty('visibility', 'hidden', 'important');
    });
}

function atualizarPosicaoTooltip(tooltip, container) {
    if (!tooltip || !container) return;
    
    const containerRect = container.getBoundingClientRect();
    
    tooltip.style.setProperty('visibility', 'hidden', 'important');
    tooltip.style.setProperty('display', 'block', 'important');
    tooltip.style.setProperty('opacity', '0', 'important');
    
    const tooltipRect = tooltip.getBoundingClientRect();
    
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    const containerCenterX = containerRect.left + (containerRect.width / 2);
    const containerTop = containerRect.top;
    const containerBottom = containerRect.bottom;
    
    const margin = 20;
    const offset = 12;
    
    let left = containerCenterX - (tooltipRect.width / 2);
    let top = containerTop - tooltipRect.height - offset;
    let tooltipAcima = true;
    
    if (left < margin) {
        left = margin;
    } else if (left + tooltipRect.width > viewportWidth - margin) {
        left = Math.max(margin, viewportWidth - tooltipRect.width - margin);
    }
    
    if (top < margin) {
        top = containerBottom + offset;
        tooltipAcima = false;
        
        if (top + tooltipRect.height > viewportHeight - margin) {
            top = Math.max(margin, containerTop - tooltipRect.height - offset);
            tooltipAcima = true;
            if (top < margin) {
                top = margin;
            }
            if (top + tooltipRect.height > viewportHeight - margin) {
                top = Math.max(margin, viewportHeight - tooltipRect.height - margin);
            }
        }
    } else if (top + tooltipRect.height > viewportHeight - margin) {
        top = Math.max(margin, viewportHeight - tooltipRect.height - margin);
    }
    
    tooltip.style.setProperty('position', 'fixed', 'important');
    tooltip.style.setProperty('left', `${left}px`, 'important');
    tooltip.style.setProperty('top', `${top}px`, 'important');
    tooltip.style.setProperty('transform', 'none', 'important');
    tooltip.style.setProperty('z-index', '10000', 'important');
    tooltip.style.setProperty('visibility', 'visible', 'important');
    tooltip.style.setProperty('opacity', '1', 'important');
    
    tooltip.classList.remove('tooltip-acima', 'tooltip-abaixo');
    tooltip.classList.add(tooltipAcima ? 'tooltip-acima' : 'tooltip-abaixo');
}

let tooltipInformativoEl = null;
let tooltipInformativoShowTimeout = null;
let tooltipInformativoHideTimeout = null;
let tooltipInformativoTrigger = null;
let tooltipDuranteDrag = false;

function obterTooltipInformativoElemento() {
    if (!tooltipInformativoEl) {
        tooltipInformativoEl = document.createElement('div');
        tooltipInformativoEl.id = 'tooltip-informativo-global';
        tooltipInformativoEl.className = 'tooltip-informativo';
        tooltipInformativoEl.setAttribute('role', 'tooltip');
        document.body.appendChild(tooltipInformativoEl);
        tooltipInformativoEl.addEventListener('mouseenter', () => {
            if (tooltipInformativoHideTimeout) {
                clearTimeout(tooltipInformativoHideTimeout);
                tooltipInformativoHideTimeout = null;
            }
        });
        tooltipInformativoEl.addEventListener('mouseleave', esconderTooltipInformativo);
    }
    return tooltipInformativoEl;
}

function mostrarTooltipInformativo(trigger, conteudo) {
    if (!conteudo || !trigger) return;
    if (tooltipInformativoShowTimeout) {
        clearTimeout(tooltipInformativoShowTimeout);
        tooltipInformativoShowTimeout = null;
    }
    const el = obterTooltipInformativoElemento();
    el.innerHTML = conteudo;
    el.style.setProperty('display', 'block', 'important');
    atualizarPosicaoTooltip(el, trigger);
    el.style.setProperty('z-index', '100002', 'important');
    tooltipInformativoTrigger = trigger;
}

function esconderTooltipInformativo() {
    if (tooltipInformativoHideTimeout) {
        clearTimeout(tooltipInformativoHideTimeout);
        tooltipInformativoHideTimeout = null;
    }
    const el = obterTooltipInformativoElemento();
    el.style.setProperty('display', 'none', 'important');
    el.style.setProperty('visibility', 'hidden', 'important');
    tooltipInformativoTrigger = null;
}

function esconderTooltipInformativoImediato() {
    if (tooltipInformativoShowTimeout) {
        clearTimeout(tooltipInformativoShowTimeout);
        tooltipInformativoShowTimeout = null;
    }
    if (tooltipInformativoHideTimeout) {
        clearTimeout(tooltipInformativoHideTimeout);
        tooltipInformativoHideTimeout = null;
    }
    const el = tooltipInformativoEl || document.getElementById('tooltip-informativo-global');
    if (el) {
        el.style.setProperty('display', 'none', 'important');
        el.style.setProperty('visibility', 'hidden', 'important');
    }
    tooltipInformativoTrigger = null;
}

function inicializarTooltipsInformativos() {
    obterTooltipInformativoElemento();
    document.addEventListener('mouseenter', (e) => {
        if (tooltipDuranteDrag) return;
        const trigger = e.target.closest('[data-tooltip]');
        if (!trigger) return;
        const conteudo = trigger.getAttribute('data-tooltip');
        if (!conteudo) return;
        if (tooltipInformativoHideTimeout) {
            clearTimeout(tooltipInformativoHideTimeout);
            tooltipInformativoHideTimeout = null;
        }
        if (tooltipInformativoShowTimeout) {
            clearTimeout(tooltipInformativoShowTimeout);
            tooltipInformativoShowTimeout = null;
        }
        mostrarTooltipInformativo(trigger, conteudo);
    }, true);
    document.addEventListener('mouseleave', (e) => {
        const trigger = e.target.closest('[data-tooltip]');
        const rel = e.relatedTarget;
        if (trigger) {
            if (rel && trigger.contains(rel)) return;
            const el = tooltipInformativoEl || document.getElementById('tooltip-informativo-global');
            if (el && rel && el.contains(rel)) return;
            if (tooltipInformativoShowTimeout) {
                clearTimeout(tooltipInformativoShowTimeout);
                tooltipInformativoShowTimeout = null;
            }
            esconderTooltipInformativo();
            return;
        }
        if (!tooltipInformativoTrigger) return;
        const elTooltip = tooltipInformativoEl || document.getElementById('tooltip-informativo-global');
        if (!elTooltip) return;
        if (rel && (tooltipInformativoTrigger.contains(rel) || (elTooltip.contains && elTooltip.contains(rel)))) return;
        if (rel && rel.closest && rel.closest('[data-tooltip]')) return;
        esconderTooltipInformativoImediato();
    }, true);
}

inicializarTooltipsInformativos();

async function carregarComparacaoAmigos() {
    const conteudoComparacao = document.getElementById('conteudoComparacao');
    if (!conteudoComparacao) {
        console.error('Elemento conteudoComparacao não encontrado');
        return;
    }
    
    console.log('Carregando comparação com amigos...');
    conteudoComparacao.innerHTML = '<div class="carregando-estatisticas"><i class="fas fa-spinner fa-spin"></i> Carregando comparação com amigos...</div>';
    
    try {
        const amigos = await supabase.obterAmigos(usuarioLogado.id);
        
        if (!amigos || amigos.length === 0) {
            conteudoComparacao.innerHTML = `
                <div class="comparacao-vazia">
                    <i class="fas fa-user-friends"></i>
                    <h3>Nenhum amigo encontrado</h3>
                    <p>Adicione amigos para comparar suas estatísticas!</p>
                </div>
            `;
            return;
        }
        
        const [minhasEstatisticas, estatisticasAmigos] = await Promise.all([
            obterEstatisticasCompletas(usuarioLogado.id, { steamId: usuarioLogado.steam_id || null }),
            Promise.all(amigos.map(async (amigo) => {
                try {
                    const stats = await obterEstatisticasCompletas(amigo.id, { steamId: amigo.steam_id || null });
                    return {
                        ...amigo,
                        estatisticas: stats
                    };
                } catch (erro) {
                    console.error(`Erro ao obter estatísticas de ${amigo.usuario}:`, erro);
                    return {
                        ...amigo,
                        estatisticas: null,
                        erro: true
                    };
                }
            }))
        ]);
        
        exibirComparacaoAmigos(minhasEstatisticas, estatisticasAmigos);
    } catch (erro) {
        console.error('Erro ao carregar comparação:', erro);
        conteudoComparacao.innerHTML = '<p style="color: var(--cor-texto-secundario); text-align: center; padding: 20px;">Erro ao carregar comparação com amigos.</p>';
    }
}

async function obterEstatisticasCompletas(usuarioId, opts = {}) {
    const jogos = await supabase.obterJogos(usuarioId, { forcarAtualizacao: true });
    const stat = calcularEstatisticasPessoais(jogos);
    stat.jogosSteamNaLista = jogos.filter(j => j.steam_appid != null).length;
    let totalHorasSteam = 0;
    const steamId = opts.steamId;
    if (steamId && stat.jogosSteamNaLista > 0) {
        try {
            const bib = await obterBibliotecaSteam(steamId);
            const appIds = new Set(jogos.filter(j => j.steam_appid != null).map(j => String(j.steam_appid)));
            for (const g of bib) {
                if (appIds.has(String(g.appid))) totalHorasSteam += (Number(g.playtime_forever) || 0) / 60;
            }
        } catch (e) { totalHorasSteam = 0; }
    }
    stat.totalHorasSteam = totalHorasSteam;
    return stat;
}

function exibirComparacaoAmigos(minhasEstatisticas, estatisticasAmigos) {
    const conteudoComparacao = document.getElementById('conteudoComparacao');
    if (!conteudoComparacao) return;
    
    const amigosComEstatisticas = estatisticasAmigos.filter(a => a.estatisticas && !a.erro);
    
    if (amigosComEstatisticas.length === 0) {
        conteudoComparacao.innerHTML = `
            <div class="comparacao-vazia">
                <i class="fas fa-chart-line"></i>
                <h3>Nenhuma estatística disponível</h3>
                <p>Seus amigos ainda não têm jogos cadastrados para comparação.</p>
            </div>
        `;
        return;
    }
    
    const amigosComCompatibilidade = amigosComEstatisticas.map(amigo => {
        const stats = amigo.estatisticas;
        const comparacao = compararEstatisticas(minhasEstatisticas, stats);
        return {
            ...amigo,
            comparacao: comparacao,
            compatibilidade: comparacao.compatibilidadeGeral
        };
    });
    
    amigosComCompatibilidade.sort((a, b) => b.compatibilidade - a.compatibilidade);
    
    const htmlComparacao = `
        <div class="comparacao-header">
            <h3><i class="fas fa-users"></i> Comparação com ${amigosComCompatibilidade.length} amigo${amigosComCompatibilidade.length !== 1 ? 's' : ''}</h3>
            <p class="comparacao-subtitulo">Veja como suas estatísticas se comparam com as dos seus amigos (ordenados por compatibilidade)</p>
        </div>
        
        <div class="comparacao-amigos-grid">
            ${amigosComCompatibilidade.map(amigo => {
                const stats = amigo.estatisticas;
                const comparacao = amigo.comparacao;
                
                return `
                    <div class="comparacao-amigo-card">
                        <div class="comparacao-amigo-header">
                            <div class="comparacao-amigo-foto">
                                ${amigo.foto_perfil 
                                    ? `<img src="${amigo.foto_perfil}" alt="${escapeHtml(amigo.usuario)}" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">`
                                    : ''
                                }
                                <div class="comparacao-amigo-placeholder" style="${amigo.foto_perfil ? 'display: none;' : 'display: flex;'}">
                                    <i class="fas fa-user-circle"></i>
                                </div>
                            </div>
                            <div class="comparacao-amigo-info">
                                <h4>${escapeHtml(amigo.usuario)}</h4>
                                <div class="comparacao-compatibilidade">
                                    <span class="comparacao-compatibilidade-label">Compatibilidade:</span>
                                    <span class="comparacao-compatibilidade-valor" style="color: ${obterCorCompatibilidade(comparacao.compatibilidadeGeral)}">
                                        ${comparacao.compatibilidadeGeral}%
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div class="comparacao-metricas">
                            ${criarCardComparacao('Total de Jogos', minhasEstatisticas.totalJogos, stats.totalJogos, 'fas fa-gamepad', '#6366f1')}
                            ${criarCardComparacao('Jogos Zerados', minhasEstatisticas.jogosZerados, stats.jogosZerados, 'fas fa-check-circle', '#22c55e')}
                            ${criarCardComparacao('Jogando Agora', minhasEstatisticas.jogosJogando, stats.jogosJogando, 'fas fa-play-circle', '#fbbf24')}
                            ${criarCardComparacao('Média de Avaliações', minhasEstatisticas.mediaAvaliacoes, stats.mediaAvaliacoes, 'fas fa-star', '#fbbf24', true)}
                            ${criarCardComparacao('Taxa de Conclusão', minhasEstatisticas.porcentagemZerados, stats.porcentagemZerados, 'fas fa-percentage', '#22c55e', true)}
                            ${criarCardComparacao('Jogos Steam', minhasEstatisticas.jogosSteamNaLista ?? 0, stats.jogosSteamNaLista ?? 0, 'fab fa-steam', '#66c0f4')}
                            ${criarCardComparacao('Horas Steam', minhasEstatisticas.totalHorasSteam ?? 0, stats.totalHorasSteam ?? 0, 'fas fa-clock', '#66c0f4', true)}
                        </div>
                        
                        <div class="comparacao-distribuicao">
                            <h5><i class="fas fa-chart-pie"></i> Distribuição por Status</h5>
                            <div class="comparacao-distribuicao-grid">
                                ${criarBarraComparacaoStatus('Quero Jogar', minhasEstatisticas.jogosQueroJogar, stats.jogosQueroJogar, '#3b82f6')}
                                ${criarBarraComparacaoStatus('Jogando', minhasEstatisticas.jogosJogando, stats.jogosJogando, '#fbbf24')}
                                ${criarBarraComparacaoStatus('Zerado', minhasEstatisticas.jogosZerados, stats.jogosZerados, '#22c55e')}
                                ${criarBarraComparacaoStatus('Dropado', minhasEstatisticas.jogosDropados, stats.jogosDropados, '#ef4444')}
                            </div>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>
    `;
    
    conteudoComparacao.innerHTML = htmlComparacao;
}

function compararEstatisticas(minhas, amigo) {
    const diferencaTotal = Math.abs(minhas.totalJogos - amigo.totalJogos);
    const diferencaZerados = Math.abs(minhas.jogosZerados - amigo.jogosZerados);
    const diferencaMedia = Math.abs(minhas.mediaAvaliacoes - amigo.mediaAvaliacoes);
    
    const maxTotal = Math.max(minhas.totalJogos, amigo.totalJogos, 1);
    const maxZerados = Math.max(minhas.jogosZerados, amigo.jogosZerados, 1);
    const maxMedia = Math.max(minhas.mediaAvaliacoes, amigo.mediaAvaliacoes, 1);
    
    const similaridadeTotal = maxTotal > 0 ? Math.max(0, 100 - (diferencaTotal / maxTotal * 100)) : 0;
    const similaridadeZerados = maxZerados > 0 ? Math.max(0, 100 - (diferencaZerados / maxZerados * 100)) : 0;
    const similaridadeMedia = maxMedia > 0 ? Math.max(0, 100 - (diferencaMedia / maxMedia * 100)) : 0;
    
    const compatibilidadeGeral = Math.round(
        (similaridadeTotal * 0.4) + 
        (similaridadeZerados * 0.4) + 
        (similaridadeMedia * 0.2)
    );
    
    return {
        compatibilidadeGeral,
        similaridadeTotal,
        similaridadeZerados,
        similaridadeMedia
    };
}

function criarCardComparacao(label, meuValor, valorAmigo, icone, cor, isDecimal = false) {
    const diferenca = meuValor - valorAmigo;
    const diferencaAbs = Math.abs(diferenca);
    const isMaior = diferenca > 0;
    const isIgual = diferenca === 0;
    
    const formatarValor = (valor) => {
        if (isDecimal) {
            return valor > 0 ? valor.toFixed(1) : '-';
        }
        return valor || 0;
    };
    
    return `
        <div class="comparacao-metrica-card">
            <div class="comparacao-metrica-header">
                <i class="${icone}" style="color: ${cor};"></i>
                <span class="comparacao-metrica-label">${label}</span>
            </div>
            <div class="comparacao-metrica-valores">
                <div class="comparacao-metrica-valor ${isMaior ? 'maior' : isIgual ? 'igual' : 'menor'}">
                    <span class="comparacao-metrica-numero">${formatarValor(meuValor)}</span>
                    <span class="comparacao-metrica-tag">Você</span>
                </div>
                <div class="comparacao-metrica-separador">
                    <i class="fas fa-${isMaior ? 'arrow-up' : isIgual ? 'equals' : 'arrow-down'}" style="color: ${isMaior ? '#22c55e' : isIgual ? '#6b7280' : '#ef4444'};"></i>
                </div>
                <div class="comparacao-metrica-valor ${!isMaior ? 'maior' : isIgual ? 'igual' : 'menor'}">
                    <span class="comparacao-metrica-numero">${formatarValor(valorAmigo)}</span>
                    <span class="comparacao-metrica-tag">Amigo</span>
                </div>
            </div>
            ${!isIgual ? `
                <div class="comparacao-metrica-diferenca ${isMaior ? 'positiva' : 'negativa'}">
                    <i class="fas fa-${isMaior ? 'arrow-up' : 'arrow-down'}"></i>
                    ${diferencaAbs} ${isDecimal ? '' : 'jogo' + (diferencaAbs !== 1 ? 's' : '')} ${isMaior ? 'a mais' : 'a menos'}
                </div>
            ` : ''}
        </div>
    `;
}

function criarBarraComparacaoStatus(status, meuValor, valorAmigo, cor) {
    const maxValor = Math.max(meuValor, valorAmigo, 1);
    const porcentagemMeu = (meuValor / maxValor) * 100;
    const porcentagemAmigo = (valorAmigo / maxValor) * 100;
    
    return `
        <div class="comparacao-distribuicao-item">
            <div class="comparacao-distribuicao-label">${status}</div>
            <div class="comparacao-distribuicao-barras">
                <div class="comparacao-distribuicao-barra-container">
                    <div class="comparacao-distribuicao-barra" style="width: ${porcentagemMeu}%; background: ${cor};">
                        <span class="comparacao-distribuicao-valor">${meuValor}</span>
                    </div>
                    <span class="comparacao-distribuicao-tag">Você</span>
                </div>
                <div class="comparacao-distribuicao-barra-container">
                    <div class="comparacao-distribuicao-barra" style="width: ${porcentagemAmigo}%; background: ${cor}; opacity: 0.7;">
                        <span class="comparacao-distribuicao-valor">${valorAmigo}</span>
                    </div>
                    <span class="comparacao-distribuicao-tag">Amigo</span>
                </div>
            </div>
        </div>
    `;
}

function obterCorCompatibilidade(porcentagem) {
    if (porcentagem >= 80) return '#22c55e';
    if (porcentagem >= 60) return '#fbbf24';
    if (porcentagem >= 40) return '#f97316';
    return '#ef4444';
}

async function visualizarListaAmigo(amigoId, amigoNome, steamId = null) {
    destruirOrdenacaoMinhaLista();
    const contextoId = criarNovoContextoLista();
    amigoVisualizando = { id: amigoId, nome: amigoNome, steam_id: steamId || null, contextoId };
    tituloLista.textContent = `Lista de ${escapeHtml(amigoNome)}`;
    btnVoltarMinhaLista.style.display = 'flex';
    mostrarSkeletonContadores();
    
    sessionStorage.setItem('amigoVisualizando', JSON.stringify({ id: amigoId, nome: amigoNome, steam_id: steamId || null }));
    
    // Resetar filtro para "todos" ao visualizar lista de amigo
    filtroAtual = 'todos';
    sessionStorage.setItem('filtroAtual', 'todos');
    
    // Atualizar botões de filtro para mostrar "todos" como ativo
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('ativo');
        if (btn.dataset.filtro === 'todos') {
            btn.classList.add('ativo');
        }
    });
    
    // Ocultar barra de pesquisa de jogos quando estiver vendo lista de amigo
    document.querySelector('.busca-secao').style.display = 'none';
    minhaLista.innerHTML = gerarSkeletonGridHtml(12);
    
    try {
        // Carregar jogos do amigo (jogosCache terá os jogos do amigo)
        const jogos = await supabase.obterJogos(amigoId);
        if (!amigoVisualizando || amigoVisualizando.id !== amigoId || amigoVisualizando.contextoId !== contextoId) return;
        jogosCache = jogos;
        
        // Garantir que meusJogosCache tenha os MEUS jogos atualizados (sem atualizar jogosCache que tem jogos do amigo)
        if (!meusJogosCache || meusJogosCache.length === 0) {
            await obterJogosSalvos(false);
        }
        
        agendarRender(async () => {
            await exibirMinhaLista();
            // Restaurar scroll da lista do amigo após carregar
            const scrollSalvo = sessionStorage.getItem('scrollPositionListaAmigo');
            if (scrollSalvo) {
                setTimeout(async () => {
                    await restaurarScrollPreciso(parseInt(scrollSalvo));
                }, 300);
            }
        });
    } catch (erro) {
        console.error('Erro ao carregar lista do amigo:', erro);
        mostrarNotificacao('Erro ao carregar lista do amigo.', 'erro');
    }
}

function voltarMinhaLista() {
    destruirOrdenacaoMinhaLista();
    const contextoId = criarNovoContextoLista();
    amigoVisualizando = null;
    tituloLista.textContent = 'Minha Lista';
    btnVoltarMinhaLista.style.display = 'none';
    mostrarSkeletonContadores();
    
    // Remover do sessionStorage
    sessionStorage.removeItem('amigoVisualizando');
    
    // Resetar filtro para "todos" ao voltar para própria lista
    filtroAtual = 'todos';
    sessionStorage.setItem('filtroAtual', 'todos');
    
    // Atualizar botões de filtro para mostrar "todos" como ativo
    document.querySelectorAll('.filtro-btn').forEach(btn => {
        btn.classList.remove('ativo');
        if (btn.dataset.filtro === 'todos') {
            btn.classList.add('ativo');
        }
    });
    
    // Mostrar barra de pesquisa novamente ao voltar para minha lista
    document.querySelector('.busca-secao').style.display = 'block';
    minhaLista.innerHTML = gerarSkeletonGridHtml(12);
    
    obterJogosSalvos().then(async () => {
        if (amigoVisualizando) return;
        if (contextoListaAtualId !== contextoId) return;
        await exibirMinhaLista();
        // Restaurar scroll da minha lista após carregar
        const scrollSalvo = sessionStorage.getItem('scrollPositionMinhaLista');
        if (scrollSalvo) {
            setTimeout(async () => {
                await restaurarScrollPreciso(parseInt(scrollSalvo));
            }, 300);
        }
    });
}

btnVoltarMinhaLista.addEventListener('click', voltarMinhaLista);

btnAtualizacoes.addEventListener('click', abrirModalAtualizacoes);

if (btnEstatisticas) {
    btnEstatisticas.addEventListener('click', abrirModalEstatisticas);
}

if (btnFecharEstatisticas) {
    btnFecharEstatisticas.addEventListener('click', () => {
        fecharModalComAnimacao(modalEstatisticas);
    });
}

if (modalEstatisticas) {
    modalEstatisticas.addEventListener('click', (e) => {
        if (e.target === modalEstatisticas) {
            fecharModalComAnimacao(modalEstatisticas);
        }
    });
}

if (menuItemEstatisticas) {
    menuItemEstatisticas.addEventListener('click', () => {
        fecharMenuMobile();
        abrirModalEstatisticas();
    });
}

let estatisticasTabsInicializados = false;

function inicializarTabsEstatisticas() {
    const tabs = document.querySelectorAll('.estatisticas-tab');
    const conteudoEstatisticas = document.getElementById('conteudoEstatisticas');
    const conteudoComparacao = document.getElementById('conteudoComparacao');
    
    if (!tabs.length || !conteudoEstatisticas || !conteudoComparacao) {
        console.warn('Elementos das tabs de estatísticas não encontrados', {
            tabs: tabs.length,
            conteudoEstatisticas: !!conteudoEstatisticas,
            conteudoComparacao: !!conteudoComparacao
        });
        return;
    }
    
    if (!estatisticasTabsInicializados) {
        console.log('Inicializando tabs de estatísticas...');
        tabs.forEach(tab => {
            tab.addEventListener('click', () => {
                const tabName = tab.dataset.tab;
                console.log('Tab clicada:', tabName);
                
                tabs.forEach(t => t.classList.remove('ativo'));
                tab.classList.add('ativo');
                
                if (tabName === 'pessoais') {
                    conteudoEstatisticas.style.display = 'block';
                    conteudoComparacao.style.display = 'none';
                    carregarEstatisticasPessoais();
                } else if (tabName === 'comparacao') {
                    conteudoEstatisticas.style.display = 'none';
                    conteudoComparacao.style.display = 'block';
                    carregarComparacaoAmigos();
                }
            });
        });
        
        estatisticasTabsInicializados = true;
    }
    
    const tabAtiva = document.querySelector('.estatisticas-tab.ativo');
    if (tabAtiva) {
        const tabName = tabAtiva.dataset.tab;
        if (tabName === 'pessoais') {
            conteudoEstatisticas.style.display = 'block';
            conteudoComparacao.style.display = 'none';
        } else if (tabName === 'comparacao') {
            conteudoEstatisticas.style.display = 'none';
            conteudoComparacao.style.display = 'block';
        }
    } else {
        const primeiraTab = tabs[0];
        if (primeiraTab) {
            primeiraTab.classList.add('ativo');
            conteudoEstatisticas.style.display = 'block';
            conteudoComparacao.style.display = 'none';
        }
    }
}

function abrirModalEstatisticas() {
    if (modalEstatisticas.classList.contains('ativo')) {
        return;
    }
    
    inicializarTabsEstatisticas();
    modalEstatisticas.classList.add('ativo');
    carregarEstatisticasPessoais();
}

function abrirMenuMobile() {
    if (menuLateralMobile) {
        menuLateralMobile.classList.add('ativo');
        document.body.style.overflow = 'hidden';
    }
}

function fecharMenuMobile() {
    if (menuLateralMobile) {
        menuLateralMobile.classList.remove('ativo');
        document.body.style.overflow = 'auto';
    }
}

if (btnMenuMobile) {
    btnMenuMobile.addEventListener('click', abrirMenuMobile);
}

if (btnFecharMenuMobile) {
    btnFecharMenuMobile.addEventListener('click', fecharMenuMobile);
}

if (menuLateralMobile) {
    const overlay = menuLateralMobile.querySelector('.menu-lateral-overlay');
    if (overlay) {
        overlay.addEventListener('click', fecharMenuMobile);
    }
}

if (menuItemAtualizacoes) {
    menuItemAtualizacoes.addEventListener('click', () => {
        fecharMenuMobile();
        abrirModalAtualizacoes();
    });
}

if (menuItemNotificacoes) {
    menuItemNotificacoes.addEventListener('click', () => {
        fecharMenuMobile();
        abrirModalNotificacoes();
    });
}

if (menuItemAmigos) {
    menuItemAmigos.addEventListener('click', () => {
        fecharMenuMobile();
        abrirModalAmigos();
    });
}

if (menuItemLogout) {
    menuItemLogout.addEventListener('click', () => {
        fecharMenuMobile();
        logout();
    });
}

const menuItemUsuarioEl = document.getElementById('menuItemUsuario');
if (menuItemUsuarioEl) {
    menuItemUsuarioEl.addEventListener('click', () => {
        fecharMenuMobile();
        abrirModalFotoPerfil();
    });
}

btnFecharAtualizacoes.addEventListener('click', () => {
    fecharModalComAnimacao(modalAtualizacoes);
});

modalAtualizacoes.addEventListener('click', (e) => {
    if (e.target === modalAtualizacoes) {
        fecharModalComAnimacao(modalAtualizacoes);
    }
});

// Event listeners para notificações
btnNotificacoes.addEventListener('click', abrirModalNotificacoes);

btnFecharNotificacoes.addEventListener('click', () => {
    fecharModalComAnimacao(modalNotificacoes);
});

modalNotificacoes.addEventListener('click', (e) => {
    if (e.target === modalNotificacoes) {
        fecharModalComAnimacao(modalNotificacoes);
    }
});

btnMarcarTodasLidas.addEventListener('click', async () => {
    try {
        await supabase.marcarTodasNotificacoesComoLidas(usuarioLogado.id);
        await atualizarContadorNotificacoes();
        
        // Remover todas as notificações da lista
        listaNotificacoes.innerHTML = `
            <div class="sem-notificacoes">
                <i class="fas fa-bell-slash"></i>
                <p>Você não tem notificações</p>
            </div>
        `;
        
        mostrarNotificacao('Notificações marcadas como lidas!', 'sucesso');
    } catch (erro) {
        console.error('Erro ao marcar notificações:', erro);
        mostrarNotificacao('Erro ao marcar notificações.', 'erro');
    }
});

async function criarNotificacaoResposta(avaliacaoId, respostaId, respostaPaiId = null) {
    try {
        // Buscar a avaliação para saber quem é o dono
        if (!jogoDetalhesAtual || !jogoDetalhesAtual.id) {
            console.error('Jogo atual não encontrado');
            return;
        }
        
        const avaliacoes = await supabase.obterAvaliacoes(jogoDetalhesAtual.id);
        const avaliacao = avaliacoes.find(a => a.id === avaliacaoId);
        
        if (!avaliacao) {
            console.error('Avaliação não encontrada');
            return;
        }
        
        // Se for uma resposta a outra resposta (thread)
        if (respostaPaiId) {
            // Buscar a resposta pai para saber quem é o dono
            const respostas = await supabase.obterRespostas(avaliacaoId);
            const respostaPai = respostas.find(r => r.id === respostaPaiId);
            
            if (respostaPai && respostaPai.usuario_id !== usuarioLogado.id) {
                // Criar notificação para o dono da resposta pai
                await supabase.criarNotificacao(
                    respostaPai.usuario_id,
                    usuarioLogado.id,
                    avaliacaoId,
                    respostaId,
                    'resposta_resposta'
                );
            }
            
            // Não criar notificação para o dono da avaliação se for resposta a outra resposta
            // (apenas o dono da resposta pai recebe notificação)
            return;
        }
        
        // Criar notificação para o dono da avaliação (se não for resposta própria)
        if (avaliacao.usuario_id !== usuarioLogado.id) {
            await supabase.criarNotificacao(
                avaliacao.usuario_id,
                usuarioLogado.id,
                avaliacaoId,
                respostaId,
                'resposta_avaliacao'
            );
        }
    } catch (erro) {
        console.error('Erro ao criar notificação:', erro);
    }
}

async function abrirModalNotificacoes() {
    await carregarNotificacoes();
    modalNotificacoes.classList.add('ativo');
}

async function carregarNotificacoes() {
    if (!usuarioLogado) {
        listaNotificacoes.innerHTML = `
            <div class="sem-notificacoes">
                <i class="fas fa-bell-slash"></i>
                <p>Faça login para ver suas notificações</p>
            </div>
        `;
        return;
    }
    
    try {
        listaNotificacoes.innerHTML = gerarSkeletonGridHtml(4);
        const notificacoes = await supabase.obterNotificacoes(usuarioLogado.id);
        const notificacoesNaoLidas = notificacoes.filter(n => !n.lida);
        exibirNotificacoes(notificacoesNaoLidas);
    } catch (erro) {
        console.error('Erro ao carregar notificações:', erro);
        listaNotificacoes.innerHTML = `
            <div class="sem-notificacoes">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Erro ao carregar notificações</p>
            </div>
        `;
    }
}

function exibirNotificacoes(notificacoes) {
    if (!notificacoes || notificacoes.length === 0) {
        listaNotificacoes.innerHTML = `
            <div class="sem-notificacoes">
                <i class="fas fa-bell-slash"></i>
                <p>Você não tem notificações</p>
            </div>
        `;
        return;
    }
    
    listaNotificacoes.innerHTML = notificacoes.map(notif => {
        const remetenteNomeEscaped = escapeHtml(notif.remetente_nome);
        const remetenteFotoEscaped = notif.remetente_foto ? escapeHtml(notif.remetente_foto) : '';
        const avatarHTML = notif.remetente_foto 
            ? `<img src="${remetenteFotoEscaped}" alt="${remetenteNomeEscaped}" class="notificacao-avatar">`
            : `<div class="notificacao-avatar-placeholder"><i class="fas fa-user-circle"></i></div>`;
        
        // Truncar texto da resposta se for muito longo
        const textoResposta = notif.resposta_texto ? 
            (notif.resposta_texto.length > 100 ? 
                escapeHtml(notif.resposta_texto.substring(0, 100)) + '...' : 
                escapeHtml(notif.resposta_texto)) : '';
        
        // Determinar o texto da notificação baseado no tipo
        let textoNotificacao = '';
        if (notif.tipo === 'resposta_resposta') {
            textoNotificacao = `<strong>${remetenteNomeEscaped}</strong> respondeu sua resposta`;
        } else {
            textoNotificacao = `<strong>${remetenteNomeEscaped}</strong> respondeu sua avaliação`;
        }
        
        return `
            <div class="notificacao-item ${!notif.lida ? 'nao-lida' : ''}" data-notificacao-id="${notif.id}" data-jogo-id="${notif.jogo_id}">
                ${!notif.lida ? '<span class="notificacao-badge-nova">NOVA</span>' : ''}
                <div class="notificacao-item-header">
                    ${avatarHTML}
                    <div class="notificacao-conteudo">
                        <p class="notificacao-texto">
                            ${textoNotificacao}
                        </p>
                        <p class="notificacao-jogo">
                            <i class="fas fa-gamepad"></i> ${escapeHtml(notif.jogo_nome || 'Jogo')}
                        </p>
                        ${textoResposta ? `
                            <div class="notificacao-comentario">
                                "${textoResposta}"
                            </div>
                        ` : ''}
                        <span class="notificacao-data">
                            <i class="fas fa-clock"></i> ${formatarDataCompleta(notif.created_at)}
                        </span>
                    </div>
                </div>
                <button class="btn-marcar-lida" data-notificacao-id="${notif.id}" title="Marcar como lida">
                    <i class="fas fa-check"></i>
                </button>
            </div>
        `;
    }).join('');
    
    // Adicionar event listeners para clicar na notificação
    document.querySelectorAll('.notificacao-item').forEach(item => {
        item.addEventListener('click', async (e) => {
            // Não executar se clicou no botão de marcar como lida
            if (e.target.closest('.btn-marcar-lida')) {
                return;
            }
            
            const notificacaoId = item.dataset.notificacaoId;
            const jogoId = parseInt(item.dataset.jogoId);
            
            // Marcar como lida
            await supabase.marcarNotificacaoComoLida(notificacaoId);
            await atualizarContadorNotificacoes();
            
            // Remover a notificação da lista
            item.remove();
            
            // Verificar se não há mais notificações
            const notificacoesRestantes = document.querySelectorAll('.notificacao-item');
            if (notificacoesRestantes.length === 0) {
                listaNotificacoes.innerHTML = `
                    <div class="sem-notificacoes">
                        <i class="fas fa-bell-slash"></i>
                        <p>Você não tem notificações</p>
                    </div>
                `;
            }
            
            // Fechar modal
            fecharModalComAnimacao(modalNotificacoes);
            
            // Abrir detalhes do jogo
            if (jogoId && !isNaN(jogoId)) {
                abrirModalDetalhes(jogoId);
            }
        });
    });
    
    // Adicionar event listeners para o botão de marcar como lida
    document.querySelectorAll('.btn-marcar-lida').forEach(btn => {
        btn.addEventListener('click', async (e) => {
            e.stopPropagation();
            const notificacaoId = btn.dataset.notificacaoId;
            const notificacaoItem = btn.closest('.notificacao-item');
            
            try {
                await supabase.marcarNotificacaoComoLida(notificacaoId);
                await atualizarContadorNotificacoes();
                
                // Remover a notificação da lista
                notificacaoItem.remove();
                
                // Verificar se não há mais notificações
                const notificacoesRestantes = document.querySelectorAll('.notificacao-item');
                if (notificacoesRestantes.length === 0) {
                    listaNotificacoes.innerHTML = `
                        <div class="sem-notificacoes">
                            <i class="fas fa-bell-slash"></i>
                            <p>Você não tem notificações</p>
                        </div>
                    `;
                }
            } catch (erro) {
                console.error('Erro ao marcar notificação como lida:', erro);
                mostrarNotificacao('Erro ao marcar notificação como lida.', 'erro');
            }
        });
    });
}

async function atualizarContadorNotificacoes() {
    if (!usuarioLogado) {
        badgeNotificacoes.style.display = 'none';
        if (badgeNotificacoesMenu) {
            badgeNotificacoesMenu.style.display = 'none';
        }
        return;
    }
    
    try {
        const count = await supabase.contarNotificacoesNaoLidas(usuarioLogado.id);
        
        if (count > 0) {
            badgeNotificacoes.textContent = count > 99 ? '99+' : count;
            badgeNotificacoes.style.display = 'inline-flex';
            if (badgeNotificacoesMenu) {
                badgeNotificacoesMenu.textContent = count > 99 ? '99+' : count.toString();
                badgeNotificacoesMenu.style.display = 'inline-flex';
            }
        } else {
            badgeNotificacoes.style.display = 'none';
            if (badgeNotificacoesMenu) {
                badgeNotificacoesMenu.style.display = 'none';
            }
        }
    } catch (erro) {
        console.error('Erro ao atualizar contador de notificações:', erro);
        badgeNotificacoes.style.display = 'none';
        if (badgeNotificacoesMenu) {
            badgeNotificacoesMenu.style.display = 'none';
        }
    }
}

// Event listeners para foto de perfil
usuarioBadge.addEventListener('click', () => {
    abrirModalFotoPerfil();
});

btnFecharFotoPerfil.addEventListener('click', () => {
    fecharModalFotoPerfil();
});

modalFotoPerfil.addEventListener('click', (e) => {
    if (e.target === modalFotoPerfil) {
        fecharModalFotoPerfil();
    }
});

if (btnFecharFotoJogo) {
    btnFecharFotoJogo.addEventListener('click', () => {
        fecharModalFotoJogo();
    });
}

if (modalFotoJogo) {
    modalFotoJogo.addEventListener('click', (e) => {
        if (e.target === modalFotoJogo) {
            fecharModalFotoJogo();
        }
    });
}

if (btnCancelarFotoJogo) {
    btnCancelarFotoJogo.addEventListener('click', () => {
        fecharModalFotoJogo();
    });
}

if (btnConfirmarFotoJogo) {
    btnConfirmarFotoJogo.addEventListener('click', () => {
        postarFotoJogo();
    });
}

function atualizarPreviewFotos() {
    if (fotosSelecionadas.length === 0) {
        fotosJogoPreviewLista.style.display = 'none';
        fotoJogoPreview.style.display = 'none';
        fotoJogoPlaceholder.style.display = 'flex';
        btnConfirmarFotoJogo.disabled = true;
        return;
    }
    
    fotoJogoPlaceholder.style.display = 'none';
    
    if (fotosSelecionadas.length === 1) {
        fotosJogoPreviewLista.style.display = 'none';
        fotoJogoPreview.style.display = 'block';
        fotoJogoPreviewImg.src = fotosSelecionadas[0];
    } else {
        fotoJogoPreview.style.display = 'none';
        fotosJogoPreviewLista.style.display = 'grid';
        fotosJogoPreviewLista.innerHTML = fotosSelecionadas.map((foto, index) => `
            <div class="foto-preview-item">
                <img src="${foto}" alt="Preview ${index + 1}">
                <button type="button" class="btn-remover-foto-preview" data-index="${index}" aria-label="Remover foto">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `).join('');
        
        fotosJogoPreviewLista.querySelectorAll('.btn-remover-foto-preview').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const index = parseInt(btn.getAttribute('data-index'));
                fotosSelecionadas.splice(index, 1);
                atualizarPreviewFotos();
            });
        });
    }
    
    btnConfirmarFotoJogo.disabled = false;
}

if (inputFotoJogo) {
    inputFotoJogo.addEventListener('change', async (e) => {
        const arquivos = Array.from(e.target.files);
        
        if (arquivos.length === 0) return;
        
        const LIMITE_FOTOS = 5;
        const totalFotos = fotosSelecionadas.length + arquivos.length;
        
        if (totalFotos > LIMITE_FOTOS) {
            const fotosExcedentes = totalFotos - LIMITE_FOTOS;
            mostrarNotificacao(
                `Você pode selecionar no máximo ${LIMITE_FOTOS} fotos. Você já tem ${fotosSelecionadas.length} foto(s) selecionada(s) e tentou adicionar mais ${arquivos.length}. Remova ${fotosExcedentes} foto(s) antes de continuar.`,
                'erro'
            );
            inputFotoJogo.value = '';
            return;
        }
        
        for (const arquivo of arquivos) {
            if (arquivo.size > 5 * 1024 * 1024) {
                mostrarNotificacao(`A imagem "${arquivo.name}" deve ter no máximo 5MB`, 'erro');
                inputFotoJogo.value = '';
                return;
            }
            
            if (!arquivo.type.startsWith('image/')) {
                mostrarNotificacao(`O arquivo "${arquivo.name}" não é uma imagem válida`, 'erro');
                inputFotoJogo.value = '';
                return;
            }
            
            const reader = new FileReader();
            await new Promise((resolve, reject) => {
                reader.onload = (event) => {
                    fotosSelecionadas.push(event.target.result);
                    resolve();
                };
                reader.onerror = reject;
                reader.readAsDataURL(arquivo);
            });
        }
        
        atualizarPreviewFotos();
        inputFotoJogo.value = '';
    });
}

if (descricaoFotoJogo && contadorDescricaoFoto) {
    descricaoFotoJogo.addEventListener('input', () => {
        const length = descricaoFotoJogo.value.length;
        contadorDescricaoFoto.textContent = length;
    });
}

inputFotoPerfil.addEventListener('change', async (e) => {
    const arquivo = e.target.files[0];
    if (arquivo) {
        await uploadFotoPerfil(arquivo);
    }
});

btnRemoverFoto.addEventListener('click', () => {
    mostrarConfirmacao(
        'Remover Foto de Perfil',
        'Tem certeza que deseja remover sua foto de perfil?',
        async () => {
            await removerFotoPerfil();
        }
    );
});

function abrirModalFotoPerfil() {
    if (!usuarioLogado) return;
    
    // Atualizar preview com foto atual
    if (usuarioLogado.foto_perfil) {
        fotoPerfilPreview.src = usuarioLogado.foto_perfil;
        fotoPerfilPreview.style.display = 'block';
        fotoPerfilPlaceholder.style.display = 'none';
        btnRemoverFoto.style.display = 'inline-flex';
    } else {
        fotoPerfilPreview.style.display = 'none';
        fotoPerfilPlaceholder.style.display = 'block';
        btnRemoverFoto.style.display = 'none';
    }
    
    modalFotoPerfil.classList.add('ativo');
}

function fecharModalFotoPerfil() {
    fecharModalComAnimacao(modalFotoPerfil);
    inputFotoPerfil.value = '';
}

async function uploadFotoPerfil(arquivo) {
    // Validar tamanho (máx 2MB)
    if (arquivo.size > 2 * 1024 * 1024) {
        mostrarNotificacao('A imagem deve ter no máximo 2MB', 'erro');
        return;
    }
    
    // Validar tipo
    if (!arquivo.type.startsWith('image/')) {
        mostrarNotificacao('Por favor, selecione uma imagem válida', 'erro');
        return;
    }
    
    try {
        // Converter para base64
        const reader = new FileReader();
        reader.onload = async (e) => {
            const base64 = e.target.result;
            
            // Salvar no banco
            await supabase.atualizarFotoPerfil(usuarioLogado.id, base64);
            
            // Atualizar usuário logado
            usuarioLogado.foto_perfil = base64;
            salvarUsuarioLogado(usuarioLogado);
            
            // Atualizar preview
            fotoPerfilPreview.src = base64;
            fotoPerfilPreview.style.display = 'block';
            fotoPerfilPlaceholder.style.display = 'none';
            btnRemoverFoto.style.display = 'inline-flex';
            
            // Atualizar badge no header
            atualizarBadgeFotoPerfil();
            
            mostrarNotificacao('Foto de perfil atualizada!', 'sucesso');
        };
        reader.readAsDataURL(arquivo);
    } catch (erro) {
        console.error('Erro ao fazer upload:', erro);
        mostrarNotificacao('Erro ao atualizar foto de perfil', 'erro');
    }
}

async function removerFotoPerfil() {
    try {
        await supabase.atualizarFotoPerfil(usuarioLogado.id, null);
        
        // Atualizar usuário logado
        usuarioLogado.foto_perfil = null;
        salvarUsuarioLogado(usuarioLogado);
        
        // Atualizar preview
        fotoPerfilPreview.style.display = 'none';
        fotoPerfilPlaceholder.style.display = 'block';
        btnRemoverFoto.style.display = 'none';
        
        // Atualizar badge no header
        atualizarBadgeFotoPerfil();
        
        mostrarNotificacao('Foto de perfil removida', 'sucesso');
    } catch (erro) {
        console.error('Erro ao remover foto:', erro);
        mostrarNotificacao('Erro ao remover foto de perfil', 'erro');
    }
}

function atualizarBadgeFotoPerfil() {
    const badge = document.querySelector('.usuario-badge');
    if (badge) {
        const icone = badge.querySelector('i');
        
        // Remover imagem antiga se existir
        const imgAntiga = badge.querySelector('img');
        if (imgAntiga) {
            imgAntiga.remove();
        }
        
        if (usuarioLogado && usuarioLogado.foto_perfil) {
            // Ocultar ícone
            icone.style.display = 'none';
            
            // Adicionar imagem
            const img = document.createElement('img');
            img.src = usuarioLogado.foto_perfil;
            img.alt = 'Foto de perfil';
            img.style.width = '32px';
            img.style.height = '32px';
            img.style.borderRadius = '50%';
            img.style.objectFit = 'cover';
            badge.insertBefore(img, icone);
        } else {
            // Mostrar ícone
            icone.style.display = 'block';
        }
    }
    
    // Atualizar foto no menu mobile
    const menuUsuarioIcone = document.getElementById('menuUsuarioIcone');
    const menuUsuarioFoto = document.getElementById('menuUsuarioFoto');
    
    if (menuUsuarioIcone && menuUsuarioFoto) {
        if (usuarioLogado && usuarioLogado.foto_perfil) {
            menuUsuarioIcone.style.display = 'none';
            menuUsuarioFoto.src = usuarioLogado.foto_perfil;
            menuUsuarioFoto.style.display = 'block';
        } else {
            menuUsuarioIcone.style.display = 'block';
            menuUsuarioFoto.style.display = 'none';
        }
    }
}

async function toggleLikeDislike(avaliacaoId, respostaId, tipo) {
    if (!usuarioLogado) {
        mostrarNotificacao('Você precisa estar logado!', 'erro');
        return;
    }
    
    try {
        await supabase.salvarLikeDislike(usuarioLogado.id, tipo, avaliacaoId, respostaId);
        
        if (avaliacaoId) {
            // Atualizar apenas os contadores da avaliação específica, sem recarregar tudo
            await atualizarContadoresAvaliacao(avaliacaoId);
        } else if (respostaId) {
            const respostaElement = document.getElementById(`resposta-${respostaId}`);
            if (respostaElement) {
                const respostasContainer = respostaElement.closest('.respostas-container');
                if (respostasContainer) {
                    const avalId = respostasContainer.id.replace('respostas-', '');
                    await carregarRespostas(avalId, true);
                }
            }
        }
    } catch (erro) {
        console.error('Erro ao processar like/dislike:', erro);
        mostrarNotificacao('Erro ao processar ação.', 'erro');
    }
}

async function atualizarContadoresAvaliacao(avaliacaoId) {
    try {
        // Buscar contadores atualizados (forçar atualização)
        const contadores = await supabase.contarLikesDislikes(avaliacaoId, null, { forcarAtualizacao: true });
        
        // Buscar o estado do like/dislike do usuário (forçar atualização)
        const likeUsuario = await supabase.obterLikeDislike(usuarioLogado.id, avaliacaoId, null, { forcarAtualizacao: true });
        
        // Encontrar os botões desta avaliação específica
        const botoesLike = document.querySelectorAll(`.btn-like[data-avaliacao-id="${avaliacaoId}"]`);
        const botoesDislike = document.querySelectorAll(`.btn-dislike[data-avaliacao-id="${avaliacaoId}"]`);
        
        // Determinar se o usuário tem like ou dislike ativo
        const temLike = likeUsuario && likeUsuario.tipo === 'like';
        const temDislike = likeUsuario && likeUsuario.tipo === 'dislike';
        
        // Atualizar botões de like
        botoesLike.forEach(btn => {
            const contador = btn.querySelector('.contador-like');
            if (contador) {
                contador.textContent = contadores.likes || 0;
            }
            
            // Remover todas as classes primeiro
            btn.classList.remove('ativo');
            
            // Adicionar classe ativo apenas se tiver like
            if (temLike) {
                btn.classList.add('ativo');
            }
        });
        
        // Atualizar botões de dislike
        botoesDislike.forEach(btn => {
            const contador = btn.querySelector('.contador-dislike');
            if (contador) {
                contador.textContent = contadores.dislikes || 0;
            }
            
            // Remover todas as classes primeiro
            btn.classList.remove('ativo');
            
            // Adicionar classe ativo apenas se tiver dislike
            if (temDislike) {
                btn.classList.add('ativo');
            }
        });
    } catch (erro) {
        console.error('Erro ao atualizar contadores:', erro);
    }
}

