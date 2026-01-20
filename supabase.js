// Configuração do Supabase - PlayShelf
// NOTA: Estas credenciais são públicas (anon key) e seguras para uso no frontend
// A segurança real está nas políticas RLS do Supabase (atualmente desabilitadas para simplicidade)
const SUPABASE_URL = 'https://hidnjnmpdajzfjmcflum.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpZG5qbm1wZGFqemZqbWNmbHVtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjM1MjAwMTUsImV4cCI6MjA3OTA5NjAxNX0.ZFC_0qkNkVBV2nntp-uFl8vkDtcE_a0qIzLlHksH1j8';

var PLAY_SHELF_DONO_EMAIL = 'nickcarva31@gmail.com';

// Cliente Supabase customizado usando REST API
class SupabaseClient {
    constructor(url, key) {
        this.url = url;
        this.key = key;
        this.headers = {
            'apikey': key,
            'Authorization': `Bearer ${key}`,
            'Content-Type': 'application/json',
            'Prefer': 'return=representation'
        };
        this._cacheGet = new Map();
        this._requisicoesGet = new Map();
    }

    _invalidarCacheGetPorPrefixo(prefixos = []) {
        if (!Array.isArray(prefixos) || prefixos.length === 0) return;
        for (const chave of Array.from(this._cacheGet.keys())) {
            for (const prefixo of prefixos) {
                if (typeof prefixo === 'string' && chave.startsWith(prefixo)) {
                    this._cacheGet.delete(chave);
                    break;
                }
            }
        }
    }

    async _buscarJsonGet(url, { ttlMs = 15000 } = {}) {
        const agora = Date.now();
        const emCache = this._cacheGet.get(url);
        if (emCache && (agora - emCache.timestamp) < ttlMs) return emCache.value;
        const existente = this._requisicoesGet.get(url);
        if (existente) return await existente;
        const promise = (async () => {
            const response = await fetch(url, { method: 'GET', headers: this.headers });
            if (!response.ok) {
                const erroTexto = await response.text();
                throw new Error(erroTexto || 'Erro ao conectar com o servidor');
            }
            const dados = await response.json();
            this._cacheGet.set(url, { value: dados, timestamp: Date.now() });
            return dados;
        })().finally(() => {
            this._requisicoesGet.delete(url);
        });
        this._requisicoesGet.set(url, promise);
        return await promise;
    }

    async cadastrar(email, senha, usuario) {
        // Validações básicas
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            throw new Error('Email inválido. Use o formato: exemplo@email.com');
        }
        
        if (!senha || senha.length < 6) {
            throw new Error('A senha deve ter no mínimo 6 caracteres');
        }
        
        if (!usuario || usuario.trim().length < 3) {
            throw new Error('O nome de usuário deve ter no mínimo 3 caracteres');
        }
        
        const response = await fetch(`${this.url}/rest/v1/usuarios`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({ email, senha, usuario })
        });
        
        if (!response.ok) {
            const erro = await response.json();
            
            // Tratamento específico para erros comuns
            if (erro.code === '23505') {
                // Erro de duplicação (unique constraint)
                if (erro.message.includes('email')) {
                    throw new Error('Este email já está cadastrado');
                } else if (erro.message.includes('usuario')) {
                    throw new Error('Este nome de usuário já está em uso');
                }
            }
            
            throw new Error(erro.message || 'Erro ao cadastrar. Tente novamente.');
        }
        
        const dados = await response.json();
        return dados[0];
    }

    async login(email, senha) {
        // Validações básicas
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            throw new Error('Email inválido. Use o formato: exemplo@email.com');
        }
        
        if (!senha) {
            throw new Error('Senha é obrigatória');
        }
        
        const url = `${this.url}/rest/v1/usuarios?email=eq.${encodeURIComponent(email)}&senha=eq.${encodeURIComponent(senha)}&select=id,usuario,email,foto_perfil,steam_id,steam_nome`;
        const usuarios = await this._buscarJsonGet(url, { ttlMs: 5000 });
        
        if (usuarios.length === 0) {
            throw new Error('Email ou senha incorretos');
        }
        
        return usuarios[0];
    }

    async atualizarSteam(usuarioId, steamId, steamNome) {
        if (!usuarioId) throw new Error('ID do usuário é obrigatório');
        const body = { steam_id: steamId || null, steam_nome: (steamNome && String(steamNome).trim()) || null };
        const response = await fetch(`${this.url}/rest/v1/usuarios?id=eq.${usuarioId}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify(body)
        });
        if (!response.ok) {
            const t = await response.text();
            let e;
            try { e = JSON.parse(t); } catch (_) { e = { message: t }; }
            throw new Error(e.message || 'Erro ao vincular Steam');
        }
        return true;
    }

    async removerSteam(usuarioId) {
        if (!usuarioId) throw new Error('ID do usuário é obrigatório');
        const resJogos = await fetch(`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({ steam_appid: null })
        });
        if (!resJogos.ok) {
            const t = await resJogos.text();
            let e;
            try { e = JSON.parse(t); } catch (_) { e = { message: t }; }
            throw new Error(e.message || 'Erro ao desvincular jogos da Steam');
        }
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`]);
        const response = await fetch(`${this.url}/rest/v1/usuarios?id=eq.${usuarioId}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({ steam_id: null, steam_nome: null })
        });
        if (!response.ok) {
            const t = await response.text();
            let e;
            try { e = JSON.parse(t); } catch (_) { e = { message: t }; }
            throw new Error(e.message || 'Erro ao desconectar Steam');
        }
        return true;
    }

    async salvarJogo(usuarioId, jogo) {
        if (!jogo || !jogo.id || !jogo.nome) {
            throw new Error('Dados do jogo inválidos');
        }
        if (!jogo.status || !['quero-jogar', 'jogando', 'zerado', 'dropado'].includes(jogo.status)) {
            throw new Error('Status do jogo inválido');
        }
        let comentarioLimpo = null;
        if (jogo.comentario) {
            if (typeof jogo.comentario !== 'string') {
                throw new Error('Comentário deve ser texto');
            }
            comentarioLimpo = jogo.comentario.trim();
            if (comentarioLimpo.length > 500) {
                throw new Error('Comentário não pode ter mais de 500 caracteres');
            }
            comentarioLimpo = comentarioLimpo.length > 0 ? comentarioLimpo : null;
        }
        
        const dadosJogo = {
            usuario_id: usuarioId,
            jogo_id: jogo.id,
            nome: jogo.nome,
            imagem: jogo.imagem || null,
            lancamento: jogo.lancamento || null,
            status: jogo.status,
            avaliacao: (jogo.avaliacao && jogo.avaliacao >= 1 && jogo.avaliacao <= 5) ? jogo.avaliacao : null,
            comentario: comentarioLimpo,
            steam_appid: (jogo.steam_appid != null && Number.isInteger(Number(jogo.steam_appid))) ? Number(jogo.steam_appid) : null
        };

        // Tentar adicionar ordem/ordem_por_status apenas se os campos existirem
        try {
            const jogosExistentes = await this.obterJogos(usuarioId, { forcarAtualizacao: true });

            const status = jogo.status;

            const obterMenorOrdemCategoria = (categoria) => {
                let menor = null;
                for (const j of jogosExistentes) {
                    let valor = null;
                    if (j.ordem_por_status && typeof j.ordem_por_status === 'object') {
                        valor = j.ordem_por_status[categoria];
                    }
                    if (valor === null || valor === undefined) {
                        valor = j.ordem;
                    }
                    if (typeof valor !== 'number') continue;
                    if (menor === null || valor < menor) menor = valor;
                }
                return menor;
            };

            const menorTodos = obterMenorOrdemCategoria('todos');
            const menorStatus = obterMenorOrdemCategoria(status);

            const novaOrdemTodos = (typeof menorTodos === 'number') ? (menorTodos - 1) : -1;
            const novaOrdemStatus = (typeof menorStatus === 'number') ? (menorStatus - 1) : -1;

            dadosJogo.ordem_por_status = {
                todos: novaOrdemTodos,
                [status]: novaOrdemStatus
            };

            // Fallback caso não exista ordem_por_status no banco: usar ordem simples (topo)
            dadosJogo.ordem = Math.min(novaOrdemTodos, novaOrdemStatus);
        } catch (e) {
            // Se não conseguir obter ordem, continua sem o campo
        }
        
        const response = await fetch(`${this.url}/rest/v1/jogos_usuarios`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(dadosJogo)
        });
        
        if (!response.ok) {
            const erroTexto = await response.text();
            let erro;
            try {
                erro = JSON.parse(erroTexto);
            } catch (e) {
                erro = { message: erroTexto || 'Erro ao salvar jogo' };
            }
            
            // Se o erro for relacionado aos campos de ordem, tentar sem eles
            if ((dadosJogo.ordem !== undefined || dadosJogo.ordem_por_status !== undefined) && (erro.message?.includes('ordem') || erro.message?.includes('column') || erro.code === '42703')) {
                delete dadosJogo.ordem;
                delete dadosJogo.ordem_por_status;
                const retryResponse = await fetch(`${this.url}/rest/v1/jogos_usuarios`, {
                    method: 'POST',
                    headers: this.headers,
                    body: JSON.stringify(dadosJogo)
                });
                
                if (!retryResponse.ok) {
                    const retryErroTexto = await retryResponse.text();
                    let retryErro;
                    try {
                        retryErro = JSON.parse(retryErroTexto);
                    } catch (e) {
                        retryErro = { message: retryErroTexto || 'Erro ao salvar jogo' };
                    }
                    
                    if (retryErro.code === '23505') {
                        throw new Error('Este jogo já está na sua lista');
                    }
                    throw new Error(retryErro.message || 'Erro ao salvar jogo');
                }
                
                // Retry foi bem-sucedido - processar resposta
                const retryTexto = await retryResponse.text();
                if (retryTexto && retryTexto.trim()) {
                    try {
                        const dados = JSON.parse(retryTexto);
                        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`]);
                        return Array.isArray(dados) ? dados[0] : dados;
                    } catch (e) {
                        // Se não conseguir parsear, mas response.ok é true, considerar sucesso
                        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`]);
                        return { sucesso: true, jogo_id: dadosJogo.jogo_id };
                    }
                }
                // Resposta vazia mas status OK - considerar sucesso
                this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`]);
                return { sucesso: true, jogo_id: dadosJogo.jogo_id };
            }
            
            // Verificar se é erro de duplicação (jogo já existe)
            if (erro.code === '23505') {
                throw new Error('Este jogo já está na sua lista');
            }
            throw new Error(erro.message || 'Erro ao salvar jogo');
        }
        
        // Resposta foi bem-sucedida - processar resposta
        const texto = await response.text();
        if (texto && texto.trim()) {
            try {
                const dados = JSON.parse(texto);
                this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`]);
                return Array.isArray(dados) ? dados[0] : dados;
            } catch (e) {
                // Se não conseguir parsear, mas response.ok é true, considerar sucesso
                this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`]);
                return { sucesso: true, jogo_id: dadosJogo.jogo_id };
            }
        }
        // Resposta vazia mas status OK (201 Created) - considerar sucesso
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}`]);
        return { sucesso: true, jogo_id: dadosJogo.jogo_id };
    }

    async obterJogos(usuarioId, { forcarAtualizacao = false } = {}) {
        const url = `${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.${usuarioId}&select=id,usuario_id,jogo_id,nome,imagem,lancamento,status,avaliacao,comentario,ordem,ordem_por_status,created_at,atualizado_em,steam_appid&order=created_at.desc`;
        if (forcarAtualizacao) this._cacheGet.delete(url);
        const jogos = await this._buscarJsonGet(url, { ttlMs: forcarAtualizacao ? 0 : 15000 });
        
        // Ordenar por status primeiro, depois por ordem dentro de cada status
        jogos.sort((a, b) => {
            // Primeiro ordenar por status (ordem alfabética)
            if (a.status !== b.status) {
                return a.status.localeCompare(b.status);
            }
            
            // Dentro do mesmo status, verificar ordem_por_status primeiro, depois ordem
            let ordemA = null;
            let ordemB = null;
            
            // Tentar obter ordem do campo ordem_por_status (JSON)
            if (a.ordem_por_status && typeof a.ordem_por_status === 'object') {
                ordemA = a.ordem_por_status[a.status];
            }
            if (b.ordem_por_status && typeof b.ordem_por_status === 'object') {
                ordemB = b.ordem_por_status[b.status];
            }
            
            // Se não tiver em ordem_por_status, usar ordem normal
            if (ordemA === null || ordemA === undefined) {
                ordemA = a.ordem;
            }
            if (ordemB === null || ordemB === undefined) {
                ordemB = b.ordem;
            }
            
            // Ordenar por ordem
            if (ordemA !== undefined && ordemA !== null && ordemB !== undefined && ordemB !== null) {
                return ordemA - ordemB;
            }
            if (ordemA !== undefined && ordemA !== null) {
                return -1;
            }
            if (ordemB !== undefined && ordemB !== null) {
                return 1;
            }
            // Se não tem ordem, manter ordem original (created_at)
            return 0;
        });
        
        return jogos;
    }

    async atualizarJogo(id, dados) {
        if (!id) {
            throw new Error('ID do jogo é obrigatório');
        }
        const dadosLimpos = { ...dados };
        if (dados.status && !['quero-jogar', 'jogando', 'zerado', 'dropado'].includes(dados.status)) {
            throw new Error('Status do jogo inválido');
        }
        if (dados.avaliacao !== undefined && dados.avaliacao !== null) {
            if (dados.avaliacao < 1 || dados.avaliacao > 5) {
                throw new Error('Avaliação deve estar entre 1 e 5');
            }
        }
        if (dados.comentario !== undefined) {
            if (dados.comentario === null || dados.comentario === '') {
                dadosLimpos.comentario = null;
            } else {
                if (typeof dados.comentario !== 'string') {
                    throw new Error('Comentário deve ser texto');
                }
                const comentarioLimpo = dados.comentario.trim();
                if (comentarioLimpo.length > 500) {
                    throw new Error('Comentário não pode ter mais de 500 caracteres');
                }
                dadosLimpos.comentario = comentarioLimpo.length > 0 ? comentarioLimpo : null;
            }
        }
        if (dados.status) {
            try {
                const resReg = await fetch(
                    `${this.url}/rest/v1/jogos_usuarios?id=eq.${id}&select=usuario_id,status,ordem_por_status`,
                    { method: 'GET', headers: this.headers }
                );
                const arr = await resReg.json();
                if (resReg.ok && Array.isArray(arr) && arr.length > 0) {
                    const reg = arr[0];
                    if (reg.status !== dados.status) {
                        const usuarioId = reg.usuario_id;
                        const jogos = await this.obterJogos(usuarioId, { forcarAtualizacao: true });
                        const obterValorOrdem = (j, chave) => {
                            if (j.ordem_por_status && typeof j.ordem_por_status === 'object' && (j.ordem_por_status[chave] !== null && j.ordem_por_status[chave] !== undefined)) {
                                return j.ordem_por_status[chave];
                            }
                            return j.ordem;
                        };
                        const novoStatus = dados.status;
                        let menorNovoStatus = null;
                        for (const j of jogos) {
                            if (j.status !== novoStatus) continue;
                            const v = obterValorOrdem(j, novoStatus);
                            if (typeof v === 'number' && (menorNovoStatus === null || v < menorNovoStatus)) menorNovoStatus = v;
                        }
                        const novaOrdemNovoStatus = (menorNovoStatus !== null) ? menorNovoStatus - 1 : -1;
                        let ordemPorStatus = {};
                        if (reg.ordem_por_status && typeof reg.ordem_por_status === 'object') {
                            ordemPorStatus = { ...reg.ordem_por_status };
                        }
                        ordemPorStatus[novoStatus] = novaOrdemNovoStatus;
                        dadosLimpos.ordem_por_status = ordemPorStatus;
                    }
                }
            } catch (e) {
            }
        }
        const response = await fetch(
            `${this.url}/rest/v1/jogos_usuarios?id=eq.${id}`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify(dadosLimpos)
            }
        );
        
        if (!response.ok) {
            const erroTexto = await response.text();
            let erro;
            try {
                erro = JSON.parse(erroTexto);
            } catch (e) {
                erro = { message: erroTexto || 'Erro ao atualizar jogo' };
            }
            throw new Error(erro.message || 'Erro ao atualizar jogo');
        }
        
        const texto = await response.text();
        if (texto && texto.trim()) {
            try {
                const dados = JSON.parse(texto);
                this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.`]);
                return Array.isArray(dados) ? dados : dados;
            } catch (e) {
                // Se não conseguir parsear, mas response.ok é true, considerar sucesso
                this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.`]);
                return { sucesso: true };
            }
        }
        // Resposta vazia mas status OK - considerar sucesso
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.`]);
        return { sucesso: true };
    }

    async atualizarOrdemJogos(usuarioId, novasOrdens) {
        // Tentar atualizar todos de uma vez primeiro
        try {
            const updates = novasOrdens.map(({ id, ordem }) => ({
                id: id,
                ordem: ordem
            }));
            
            // Atualizar um por um para ter melhor controle de erros
            const resultados = [];
            for (const { id, ordem } of novasOrdens) {
                try {
                    await this.atualizarJogo(id, { ordem });
                    resultados.push({ id, sucesso: true });
                } catch (erro) {
                    // Se o erro for relacionado ao campo ordem não existir, tentar sem ele
                    if (erro.message && (erro.message.includes('ordem') || erro.message.includes('column') || erro.message.includes('42703'))) {
                        console.warn(`Campo ordem não existe para o jogo ${id}. Pulando atualização.`);
                        resultados.push({ id, sucesso: false, erro: 'Campo ordem não existe' });
                    } else {
                        throw erro;
                    }
                }
            }
            
            // Verificar se pelo menos uma atualização funcionou
            const sucessos = resultados.filter(r => r.sucesso);
            if (sucessos.length === 0) {
                throw new Error('Nenhuma atualização foi bem-sucedida. Verifique se a coluna ordem existe no banco de dados.');
            }
            
            return true;
        } catch (erro) {
            throw erro;
        }
    }

    async atualizarOrdemJogosPorStatus(usuarioId, novasOrdens, categoriaAtual) {
        try {
            // Buscar todos os jogos do usuário para atualizar ordem_por_status
            const todosJogos = await this.obterJogos(usuarioId, { forcarAtualizacao: true });
            const jogosMap = new Map(todosJogos.map(j => [j.id, j]));
            
            const resultados = [];
            for (const { id, status, ordem } of novasOrdens) {
                try {
                    const jogo = jogosMap.get(id);
                    if (!jogo) {
                        console.warn(`Jogo ${id} não encontrado`);
                        continue;
                    }
                    
                    // Obter ordem_por_status atual ou criar novo objeto
                    let ordemPorStatus = {};
                    if (jogo.ordem_por_status && typeof jogo.ordem_por_status === 'object') {
                        ordemPorStatus = { ...jogo.ordem_por_status };
                    }
                    
                    // Atualizar a ordem para a categoria atual (pode ser 'todos' ou um status específico)
                    ordemPorStatus[categoriaAtual] = ordem;
                    
                    // Tentar atualizar com ordem_por_status
                    const dadosAtualizacao = { 
                        ordem_por_status: ordemPorStatus
                    };
                    
                    await this.atualizarJogo(id, dadosAtualizacao);
                    resultados.push({ id, sucesso: true });
                } catch (erro) {
                    console.warn(`Erro ao atualizar ordem do jogo ${id}:`, erro);
                    // Se falhar, tentar apenas com ordem (fallback)
                    try {
                        await this.atualizarJogo(id, { ordem });
                        resultados.push({ id, sucesso: true });
                    } catch (erro2) {
                        resultados.push({ id, sucesso: false, erro: erro2.message });
                    }
                }
            }
            
            // Verificar se pelo menos uma atualização funcionou
            const sucessos = resultados.filter(r => r.sucesso);
            if (sucessos.length === 0 && novasOrdens.length > 0) {
                const erros = resultados.map(r => r.erro).filter(e => e).join('; ');
                throw new Error(`Nenhuma atualização foi bem-sucedida. Erros: ${erros || 'Desconhecido'}`);
            }
            
            return true;
        } catch (erro) {
            throw erro;
        }
    }

    async removerJogo(id) {
        const response = await fetch(
            `${this.url}/rest/v1/jogos_usuarios?id=eq.${id}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            throw new Error('Erro ao remover jogo');
        }
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/jogos_usuarios?usuario_id=eq.`]);
        return true;
    }

    async obterAvaliacoes(jogoId) {
        const response = await fetch(
            `${this.url}/rest/v1/jogos_usuarios?jogo_id=eq.${jogoId}&select=id,usuario_id,jogo_id,avaliacao,comentario,created_at,atualizado_em,usuarios(usuario,foto_perfil)&order=atualizado_em.desc.nullslast,created_at.desc`,
            {
                method: 'GET',
                headers: this.headers
            }
        );

        if (!response.ok) {
            throw new Error('Erro ao buscar avaliações');
        }

        const dados = await response.json();
        return dados.map(item => ({
            ...item,
            usuario_nome: item.usuarios?.usuario || 'Usuário',
            usuario_foto: item.usuarios?.foto_perfil || null,
            // Sempre priorizar atualizado_em se existir e for diferente de created_at
            data_exibicao: (item.atualizado_em && item.atualizado_em !== item.created_at) ? item.atualizado_em : item.created_at
        }));
    }

    async salvarResposta(avaliacaoId, usuarioId, usuarioNome, texto, respostaPaiId = null) {
        if (!texto || typeof texto !== 'string') {
            throw new Error('Texto da resposta é obrigatório');
        }
        const textoLimpo = texto.trim();
        if (textoLimpo.length === 0) {
            throw new Error('Texto da resposta não pode estar vazio');
        }
        if (textoLimpo.length > 300) {
            throw new Error('Texto da resposta não pode ter mais de 300 caracteres');
        }
        if (!usuarioNome || typeof usuarioNome !== 'string' || usuarioNome.trim().length === 0) {
            throw new Error('Nome do usuário inválido');
        }
        
        const response = await fetch(`${this.url}/rest/v1/respostas`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                avaliacao_id: avaliacaoId,
                usuario_id: usuarioId,
                usuario_nome: usuarioNome.trim(),
                texto: textoLimpo,
                resposta_pai_id: respostaPaiId
            })
        });
        
        if (!response.ok) {
            const erroTexto = await response.text();
            let erro;
            try {
                erro = JSON.parse(erroTexto);
            } catch (e) {
                erro = { message: erroTexto || 'Erro ao salvar resposta' };
            }
            throw new Error(erro.message || 'Erro ao salvar resposta');
        }
        
        const texto_resposta = await response.text();
        if (texto_resposta && texto_resposta.trim()) {
            try {
                const dados = JSON.parse(texto_resposta);
                this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/respostas?avaliacao_id=eq.${avaliacaoId}`]);
                return Array.isArray(dados) ? dados[0] : dados;
            } catch (e) {
                // Se não conseguir parsear, mas response.ok é true, considerar sucesso
                this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/respostas?avaliacao_id=eq.${avaliacaoId}`]);
                return { sucesso: true };
            }
        }
        // Resposta vazia mas status OK - considerar sucesso
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/respostas?avaliacao_id=eq.${avaliacaoId}`]);
        return { sucesso: true };
    }

    async obterRespostas(avaliacaoId, { forcarAtualizacao = false } = {}) {
        const url = `${this.url}/rest/v1/respostas?avaliacao_id=eq.${avaliacaoId}&select=id,avaliacao_id,usuario_id,usuario_nome,texto,resposta_pai_id,created_at,atualizado_em,usuarios(foto_perfil)&order=created_at.asc`;
        if (forcarAtualizacao) this._cacheGet.delete(url);
        const dados = await this._buscarJsonGet(url, { ttlMs: forcarAtualizacao ? 0 : 12000 });
        return dados.map(item => ({
            ...item,
            usuario_foto: item.usuarios?.foto_perfil || null,
            // Usar atualizado_em se foi editado, senão created_at
            data_exibicao: (item.atualizado_em && item.atualizado_em !== item.created_at) ? item.atualizado_em : item.created_at
        }));
    }

    async enviarSolicitacaoAmizade(remetenteId, destinatarioNick) {
        if (!destinatarioNick || typeof destinatarioNick !== 'string') {
            throw new Error('Nick do destinatário é obrigatório');
        }
        const nickLimpo = destinatarioNick.trim();
        if (nickLimpo.length < 3) {
            throw new Error('Nick deve ter no mínimo 3 caracteres');
        }
        if (nickLimpo.length > 50) {
            throw new Error('Nick não pode ter mais de 50 caracteres');
        }
        
        // Buscar usuário pelo nick
        const response = await fetch(
            `${this.url}/rest/v1/usuarios?usuario=eq.${encodeURIComponent(nickLimpo)}&select=id`,
            {
                method: 'GET',
                headers: this.headers
            }
        );
        
        const usuarios = await response.json();
        
        if (usuarios.length === 0) {
            throw new Error('Usuário não encontrado');
        }
        
        const destinatarioId = usuarios[0].id;
        
        if (!destinatarioId || destinatarioId === remetenteId) {
            throw new Error('Você não pode adicionar a si mesmo');
        }
        
        if (destinatarioId === remetenteId) {
            throw new Error('Você não pode adicionar a si mesmo');
        }
        
        // Criar solicitação
        const solicitacao = await fetch(`${this.url}/rest/v1/amizades`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                remetente_id: remetenteId,
                destinatario_id: destinatarioId,
                status: 'pendente'
            })
        });
        
        if (!solicitacao.ok) {
            const erro = await solicitacao.json();
            throw new Error(erro.message || 'Erro ao enviar solicitação');
        }
        
        return true;
    }

    async obterSolicitacoesPendentes(usuarioId) {
        const response = await fetch(
            `${this.url}/rest/v1/amizades?destinatario_id=eq.${usuarioId}&status=eq.pendente&select=id,remetente_id,usuarios!amizades_remetente_id_fkey(usuario,foto_perfil)`,
            {
                method: 'GET',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            throw new Error('Erro ao buscar solicitações');
        }
        
        const dados = await response.json();
        return dados.map(item => ({
            id: item.id,
            remetente_id: item.remetente_id,
            remetente_nome: item.usuarios?.usuario || 'Usuário',
            remetente_foto: item.usuarios?.foto_perfil || null
        }));
    }

    async aceitarSolicitacao(solicitacaoId) {
        const response = await fetch(
            `${this.url}/rest/v1/amizades?id=eq.${solicitacaoId}`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ status: 'aceita' })
            }
        );
        
        if (!response.ok) {
            throw new Error('Erro ao aceitar solicitação');
        }
        
        return true;
    }

    async recusarSolicitacao(solicitacaoId) {
        const response = await fetch(
            `${this.url}/rest/v1/amizades?id=eq.${solicitacaoId}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            throw new Error('Erro ao recusar solicitação');
        }
        
        return true;
    }

    async obterAmigos(usuarioId) {
        // Buscar amizades onde o usuário é remetente
        const response1 = await fetch(
            `${this.url}/rest/v1/amizades?remetente_id=eq.${usuarioId}&status=eq.aceita&select=id,destinatario_id`,
            {
                method: 'GET',
                headers: this.headers
            }
        );
        
        // Buscar amizades onde o usuário é destinatário
        const response2 = await fetch(
            `${this.url}/rest/v1/amizades?destinatario_id=eq.${usuarioId}&status=eq.aceita&select=id,remetente_id`,
            {
                method: 'GET',
                headers: this.headers
            }
        );
        
        if (!response1.ok || !response2.ok) {
            throw new Error('Erro ao buscar amigos');
        }
        
        const amizadesComoRemetente = await response1.json();
        const amizadesComoDestinatario = await response2.json();
        
        const idsAmigos = [
            ...amizadesComoRemetente.map(a => ({ amizadeId: a.id, usuarioId: a.destinatario_id })),
            ...amizadesComoDestinatario.map(a => ({ amizadeId: a.id, usuarioId: a.remetente_id }))
        ];
        
        if (idsAmigos.length === 0) {
            return [];
        }
        
        // Buscar dados dos usuários amigos (incluindo foto de perfil e steam_id)
        const idsString = idsAmigos.map(a => a.usuarioId).join(',');
        const responseUsuarios = await fetch(
            `${this.url}/rest/v1/usuarios?id=in.(${idsString})&select=id,usuario,foto_perfil,steam_id`,
            {
                method: 'GET',
                headers: this.headers
            }
        );
        
        const usuarios = await responseUsuarios.json();
        
        return idsAmigos.map(item => {
            const usuario = usuarios.find(u => u.id === item.usuarioId);
            return {
                amizade_id: item.amizadeId,
                id: usuario.id,
                usuario: usuario.usuario,
                foto_perfil: usuario.foto_perfil,
                steam_id: usuario.steam_id || null
            };
        });
    }

    async removerAmigo(amizadeId) {
        const response = await fetch(
            `${this.url}/rest/v1/amizades?id=eq.${amizadeId}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            throw new Error('Erro ao remover amigo');
        }
        
        return true;
    }

    async calcularCompatibilidade(usuarioId, amigoId) {
        try {
            const [meusJogos, jogosAmigo] = await Promise.all([
                this.obterJogos(usuarioId, { forcarAtualizacao: true }),
                this.obterJogos(amigoId, { forcarAtualizacao: true })
            ]);

            const meusJogosMap = new Map(meusJogos.map(j => [j.jogo_id, j]));
            const jogosAmigoMap = new Map(jogosAmigo.map(j => [j.jogo_id, j]));

            const jogosComuns = [];
            let somaDiferencaAvaliacoes = 0;
            let jogosComAvaliacaoComum = 0;
            let jogosMesmoStatus = 0;
            let jogosSteamComuns = 0;

            const jogosVinculadosSteamUsuario = meusJogos.filter(j => j.steam_appid != null).length;
            const jogosVinculadosSteamAmigo = jogosAmigo.filter(j => j.steam_appid != null).length;

            for (const [jogoId, meuJogo] of meusJogosMap) {
                const jogoAmigo = jogosAmigoMap.get(jogoId);
                if (jogoAmigo) {
                    if (meuJogo.steam_appid != null && jogoAmigo.steam_appid != null) {
                        jogosSteamComuns++;
                    }
                    jogosComuns.push({
                        jogo_id: jogoId,
                        nome: meuJogo.nome,
                        minha_avaliacao: meuJogo.avaliacao,
                        avaliacao_amigo: jogoAmigo.avaliacao,
                        meu_status: meuJogo.status,
                        status_amigo: jogoAmigo.status
                    });

                    if (meuJogo.avaliacao && jogoAmigo.avaliacao) {
                        const diferenca = Math.abs(meuJogo.avaliacao - jogoAmigo.avaliacao);
                        somaDiferencaAvaliacoes += diferenca;
                        jogosComAvaliacaoComum++;
                    }

                    if (meuJogo.status === jogoAmigo.status) {
                        jogosMesmoStatus++;
                    }
                }
            }

            const totalJogos = meusJogos.length + jogosAmigo.length - jogosComuns.length;
            const porcentagemJogosComuns = totalJogos > 0 
                ? (jogosComuns.length / totalJogos) * 100 
                : 0;

            const mediaDiferencaAvaliacoes = jogosComAvaliacaoComum > 0
                ? somaDiferencaAvaliacoes / jogosComAvaliacaoComum
                : 0;

            const porcentagemAvaliacoesSimilares = jogosComAvaliacaoComum > 0
                ? Math.max(0, 100 - (mediaDiferencaAvaliacoes * 20))
                : 0;

            const porcentagemStatusSimilares = jogosComuns.length > 0
                ? (jogosMesmoStatus / jogosComuns.length) * 100
                : 0;

            const compatibilidadeGeral = (
                porcentagemJogosComuns * 0.4 +
                porcentagemAvaliacoesSimilares * 0.4 +
                porcentagemStatusSimilares * 0.2
            );

            return {
                compatibilidade: Math.round(compatibilidadeGeral),
                jogos_comuns: jogosComuns.length,
                total_jogos_usuario: meusJogos.length,
                total_jogos_amigo: jogosAmigo.length,
                porcentagem_jogos_comuns: Math.round(porcentagemJogosComuns),
                porcentagem_avaliacoes_similares: Math.round(porcentagemAvaliacoesSimilares),
                porcentagem_status_similares: Math.round(porcentagemStatusSimilares),
                jogos_com_avaliacao_comum: jogosComAvaliacaoComum,
                jogos_mesmo_status: jogosMesmoStatus,
                jogos_vinculados_steam_usuario: jogosVinculadosSteamUsuario,
                jogos_vinculados_steam_amigo: jogosVinculadosSteamAmigo,
                jogos_steam_comuns: jogosSteamComuns,
                detalhes: jogosComuns.slice(0, 10)
            };
        } catch (erro) {
            console.error('Erro ao calcular compatibilidade:', erro);
            throw new Error('Erro ao calcular compatibilidade');
        }
    }

    async obterEstatisticasCompatibilidade(usuarioId) {
        try {
            const amigos = await this.obterAmigos(usuarioId);
            
            if (amigos.length === 0) {
                return [];
            }

            const estatisticas = await Promise.all(
                amigos.map(async (amigo) => {
                    try {
                        const compatibilidade = await this.calcularCompatibilidade(usuarioId, amigo.id);
                        return {
                            amigo_id: amigo.id,
                            amigo_nome: amigo.usuario,
                            amigo_foto: amigo.foto_perfil,
                            ...compatibilidade
                        };
                    } catch (erro) {
                        console.error(`Erro ao calcular compatibilidade com ${amigo.usuario}:`, erro);
                        return {
                            amigo_id: amigo.id,
                            amigo_nome: amigo.usuario,
                            amigo_foto: amigo.foto_perfil,
                            compatibilidade: 0,
                            erro: true
                        };
                    }
                })
            );

            return estatisticas.sort((a, b) => b.compatibilidade - a.compatibilidade);
        } catch (erro) {
            console.error('Erro ao obter estatísticas de compatibilidade:', erro);
            throw new Error('Erro ao obter estatísticas de compatibilidade');
        }
    }

    async removerResposta(respostaId) {
        const response = await fetch(
            `${this.url}/rest/v1/respostas?id=eq.${respostaId}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            throw new Error('Erro ao remover resposta');
        }
        
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/respostas?avaliacao_id=eq.`]);
        return true;
    }

    async atualizarResposta(respostaId, novoTexto) {
        if (!novoTexto || typeof novoTexto !== 'string') {
            throw new Error('Texto da resposta é obrigatório');
        }
        const textoLimpo = novoTexto.trim();
        if (textoLimpo.length === 0) {
            throw new Error('Texto da resposta não pode estar vazio');
        }
        if (textoLimpo.length > 300) {
            throw new Error('Texto da resposta não pode ter mais de 300 caracteres');
        }
        
        const response = await fetch(
            `${this.url}/rest/v1/respostas?id=eq.${respostaId}`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ 
                    texto: textoLimpo,
                    atualizado_em: new Date().toISOString()
                })
            }
        );

        if (!response.ok) {
            throw new Error('Erro ao atualizar resposta');
        }

        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/respostas?avaliacao_id=eq.`]);
        return true;
    }

    async atualizarFotoPerfil(usuarioId, fotoBase64) {
        const response = await fetch(
            `${this.url}/rest/v1/usuarios?id=eq.${usuarioId}`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ foto_perfil: fotoBase64 })
            }
        );
        
        if (!response.ok) {
            throw new Error('Erro ao atualizar foto de perfil');
        }
        
        return true;
    }

    _invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId) {
        // Invalidar cache de likes/dislikes do usuário para esta avaliação/resposta
        const prefixos = [`${this.url}/rest/v1/likes_dislikes?usuario_id=eq.${usuarioId}`];
        this._invalidarCacheGetPorPrefixo(prefixos);
        
        // Invalidar cache de contadores também
        if (avaliacaoId !== null && avaliacaoId !== undefined) {
            this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/likes_dislikes?avaliacao_id=eq.${avaliacaoId}`]);
        }
        if (respostaId !== null && respostaId !== undefined) {
            this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/likes_dislikes?resposta_id=eq.${respostaId}`]);
        }
    }

    async obterLikeDislike(usuarioId, avaliacaoId = null, respostaId = null, { forcarAtualizacao = false } = {}) {
        let query = `${this.url}/rest/v1/likes_dislikes?usuario_id=eq.${usuarioId}`;
        
        if (avaliacaoId !== null && avaliacaoId !== undefined) {
            query += `&avaliacao_id=eq.${avaliacaoId}`;
        } else {
            query += `&avaliacao_id=is.null`;
        }
        
        if (respostaId !== null && respostaId !== undefined) {
            query += `&resposta_id=eq.${respostaId}`;
        } else {
            query += `&resposta_id=is.null`;
        }
        
        query += `&select=id,usuario_id,avaliacao_id,resposta_id,tipo`;
        if (forcarAtualizacao) this._cacheGet.delete(query);
        let dados;
        try {
            dados = await this._buscarJsonGet(query, { ttlMs: forcarAtualizacao ? 0 : 8000 });
        } catch (e) {
            console.error('Erro ao obter like/dislike:', e);
            return null;
        }
        return dados.length > 0 ? dados[0] : null;
    }

    async salvarLikeDislike(usuarioId, tipo, avaliacaoId = null, respostaId = null) {
        const existente = await this.obterLikeDislike(usuarioId, avaliacaoId, respostaId);
        
        if (existente) {
            if (existente.tipo === tipo) {
                // Remover usando os filtros compostos
                await this.removerLikeDislikeComposto(usuarioId, avaliacaoId, respostaId);
                this._invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId);
                return { acao: 'removido' };
            }
            // Atualizar usando os filtros compostos
            await this.atualizarLikeDislikeComposto(usuarioId, avaliacaoId, respostaId, tipo);
            this._invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId);
            return { acao: 'atualizado' };
        }
        
        const dados = {
            usuario_id: usuarioId,
            tipo: tipo
        };
        
        // Sempre incluir os campos, mesmo que sejam null
        if (avaliacaoId !== null && avaliacaoId !== undefined) {
            dados.avaliacao_id = avaliacaoId;
        } else {
            dados.avaliacao_id = null;
        }
        
        if (respostaId !== null && respostaId !== undefined) {
            dados.resposta_id = respostaId;
        } else {
            dados.resposta_id = null;
        }
        
        const response = await fetch(`${this.url}/rest/v1/likes_dislikes`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(dados)
        });
        
        if (!response.ok) {
            const erroTexto = await response.text();
            let erro;
            try {
                erro = JSON.parse(erroTexto);
            } catch (e) {
                erro = { message: erroTexto || 'Erro ao salvar like/dislike' };
            }
            console.error('Erro ao salvar like/dislike:', erro);
            throw new Error(erro.message || 'Erro ao salvar like/dislike');
        }
        
        const texto = await response.text();
        if (texto && texto.trim()) {
            try {
                const resultado = JSON.parse(texto);
                this._invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId);
                return Array.isArray(resultado) ? resultado[0] : resultado;
            } catch (e) {
                // Se não conseguir parsear, mas response.ok é true, considerar sucesso
                this._invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId);
                return { acao: 'criado' };
            }
        }
        // Resposta vazia mas status OK - considerar sucesso
        this._invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId);
        return { acao: 'criado' };
    }

    async atualizarLikeDislikeComposto(usuarioId, avaliacaoId, respostaId, tipo) {
        let query = `${this.url}/rest/v1/likes_dislikes?usuario_id=eq.${usuarioId}`;
        
        if (avaliacaoId !== null && avaliacaoId !== undefined) {
            query += `&avaliacao_id=eq.${avaliacaoId}`;
        } else {
            query += `&avaliacao_id=is.null`;
        }
        
        if (respostaId !== null && respostaId !== undefined) {
            query += `&resposta_id=eq.${respostaId}`;
        } else {
            query += `&resposta_id=is.null`;
        }
        
        const response = await fetch(query, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({ tipo: tipo })
        });
        
        if (!response.ok) {
            const erro = await response.json();
            console.error('Erro ao atualizar like/dislike:', erro);
            throw new Error('Erro ao atualizar like/dislike');
        }
        
        this._invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId);
        return true;
    }

    async removerLikeDislikeComposto(usuarioId, avaliacaoId, respostaId) {
        let query = `${this.url}/rest/v1/likes_dislikes?usuario_id=eq.${usuarioId}`;
        
        if (avaliacaoId !== null && avaliacaoId !== undefined) {
            query += `&avaliacao_id=eq.${avaliacaoId}`;
        } else {
            query += `&avaliacao_id=is.null`;
        }
        
        if (respostaId !== null && respostaId !== undefined) {
            query += `&resposta_id=eq.${respostaId}`;
        } else {
            query += `&resposta_id=is.null`;
        }
        
        const response = await fetch(query, {
            method: 'DELETE',
            headers: this.headers
        });
        
        if (!response.ok) {
            const erro = await response.json();
            console.error('Erro ao remover like/dislike:', erro);
            throw new Error('Erro ao remover like/dislike');
        }
        
        this._invalidarCacheLikeDislike(usuarioId, avaliacaoId, respostaId);
        return true;
    }

    async removerTodosLikesDislikesAvaliacao(avaliacaoId) {
        const response = await fetch(
            `${this.url}/rest/v1/likes_dislikes?avaliacao_id=eq.${avaliacaoId}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            const erro = await response.json();
            console.error('Erro ao remover likes/dislikes da avaliação:', erro);
            throw new Error('Erro ao remover likes/dislikes da avaliação');
        }
        
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/likes_dislikes?avaliacao_id=eq.${avaliacaoId}`]);
        return true;
    }

    async removerTodasRespostasAvaliacao(avaliacaoId) {
        const response = await fetch(
            `${this.url}/rest/v1/respostas?avaliacao_id=eq.${avaliacaoId}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            const erro = await response.json();
            console.error('Erro ao remover respostas da avaliação:', erro);
            throw new Error('Erro ao remover respostas da avaliação');
        }
        
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/respostas?avaliacao_id=eq.${avaliacaoId}`]);
        return true;
    }

    async removerTodosLikesDislikesRespostasAvaliacao(avaliacaoId) {
        try {
            const respostas = await this.obterRespostas(avaliacaoId, { forcarAtualizacao: true });
            const respostaIds = respostas.map(r => r.id);
            
            if (respostaIds.length === 0) {
                return true;
            }
            
            const idsString = respostaIds.join(',');
            const response = await fetch(
                `${this.url}/rest/v1/likes_dislikes?resposta_id=in.(${idsString})`,
                {
                    method: 'DELETE',
                    headers: this.headers
                }
            );
            
            if (!response.ok) {
                const erro = await response.json();
                console.error('Erro ao remover likes/dislikes das respostas:', erro);
                throw new Error('Erro ao remover likes/dislikes das respostas');
            }
            
            this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/likes_dislikes?resposta_id=in.(${idsString})`]);
            return true;
        } catch (erro) {
            console.error('Erro ao remover likes/dislikes das respostas:', erro);
            return false;
        }
    }

    async contarLikesDislikes(avaliacaoId = null, respostaId = null, { forcarAtualizacao = false } = {}) {
        let query = `${this.url}/rest/v1/likes_dislikes?select=tipo`;
        
        if (avaliacaoId !== null && avaliacaoId !== undefined) {
            query += `&avaliacao_id=eq.${avaliacaoId}`;
        } else {
            query += `&avaliacao_id=is.null`;
        }
        
        if (respostaId !== null && respostaId !== undefined) {
            query += `&resposta_id=eq.${respostaId}`;
        } else {
            query += `&resposta_id=is.null`;
        }
        
        if (forcarAtualizacao) this._cacheGet.delete(query);
        const response = await fetch(query, {
            method: 'GET',
            headers: this.headers
        });
        
        if (!response.ok) {
            return { likes: 0, dislikes: 0 };
        }
        
        const dados = await response.json();
        const likes = dados.filter(d => d.tipo === 'like').length;
        const dislikes = dados.filter(d => d.tipo === 'dislike').length;
        
        return { likes, dislikes };
    }

    async obterAmigosComJogo(usuarioId, jogoId) {
        // Primeiro, obter lista de amigos
        const amigos = await this.obterAmigos(usuarioId);
        
        if (amigos.length === 0) {
            return [];
        }
        
        // Buscar quais amigos têm o jogo
        const idsAmigos = amigos.map(a => a.id).join(',');
        const response = await fetch(
            `${this.url}/rest/v1/jogos_usuarios?usuario_id=in.(${idsAmigos})&jogo_id=eq.${jogoId}&select=usuario_id,status,usuarios(usuario,foto_perfil)`,
            {
                method: 'GET',
                headers: this.headers
            }
        );
        
        if (!response.ok) {
            return [];
        }
        
        const dados = await response.json();
        return dados.map(item => ({
            usuario_id: item.usuario_id,
            usuario_nome: item.usuarios?.usuario || 'Usuário',
            foto_perfil: item.usuarios?.foto_perfil || null,
            status: item.status
        }));
    }

    async criarNotificacao(destinatarioId, remetenteId, avaliacaoId, respostaId, tipo = 'resposta_avaliacao') {
        const dados = {
            destinatario_id: destinatarioId,
            remetente_id: remetenteId,
            avaliacao_id: avaliacaoId,
            resposta_id: respostaId,
            tipo: tipo,
            lida: false
        };

        const response = await fetch(`${this.url}/rest/v1/notificacoes`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(dados)
        });
        
        if (!response.ok) {
            console.error('Erro ao criar notificação');
            return null;
        }
        
        const texto = await response.text();
        if (texto && texto.trim()) {
            try {
                const resultado = JSON.parse(texto);
                return Array.isArray(resultado) ? resultado[0] : resultado;
            } catch (e) {
                // Se não conseguir parsear, mas response.ok é true, considerar sucesso
                return { sucesso: true };
            }
        }
        // Resposta vazia mas status OK - considerar sucesso
        return { sucesso: true };
    }

    async obterNotificacoes(usuarioId) {
        const response = await fetch(
            `${this.url}/rest/v1/notificacoes?destinatario_id=eq.${usuarioId}&select=*,remetente:usuarios!notificacoes_remetente_id_fkey(usuario,foto_perfil),avaliacao:jogos_usuarios!notificacoes_avaliacao_id_fkey(jogo_id,nome),resposta:respostas!notificacoes_resposta_id_fkey(texto)&order=created_at.desc`,
            {
                method: 'GET',
                headers: this.headers
            }
        );

        if (!response.ok) {
            console.error('Erro ao buscar notificações');
            return [];
        }

        const dados = await response.json();
        return dados.map(item => ({
            id: item.id,
            tipo: item.tipo,
            lida: item.lida,
            created_at: item.created_at,
            remetente_id: item.remetente_id,
            remetente_nome: item.remetente?.usuario || 'Usuário',
            remetente_foto: item.remetente?.foto_perfil || null,
            jogo_id: item.avaliacao?.jogo_id || null,
            jogo_nome: item.avaliacao?.nome || null,
            resposta_texto: item.resposta?.texto || null,
            avaliacao_id: item.avaliacao_id,
            resposta_id: item.resposta_id,
            sugestao_reporte_id: item.sugestao_reporte_id || null,
            feedback_tag: item.feedback_tag || null,
            feedback_tag_anterior: item.feedback_tag_anterior || null,
            feedback_titulo: item.feedback_titulo || '',
            feedback_tipo: item.feedback_tipo || 'sugestao'
        }));
    }

    async marcarNotificacaoComoLida(notificacaoId) {
        const response = await fetch(
            `${this.url}/rest/v1/notificacoes?id=eq.${notificacaoId}`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ lida: true })
            }
        );

        if (!response.ok) {
            console.error('Erro ao marcar notificação como lida');
            return false;
        }

        return true;
    }

    async marcarTodasNotificacoesComoLidas(usuarioId) {
        const response = await fetch(
            `${this.url}/rest/v1/notificacoes?destinatario_id=eq.${usuarioId}&lida=eq.false`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ lida: true })
            }
        );

        if (!response.ok) {
            console.error('Erro ao marcar notificações como lidas');
            return false;
        }

        return true;
    }

    async contarNotificacoesNaoLidas(usuarioId) {
        const response = await fetch(
            `${this.url}/rest/v1/notificacoes?destinatario_id=eq.${usuarioId}&lida=eq.false&select=id`,
            {
                method: 'GET',
                headers: this.headers
            }
        );

        if (!response.ok) {
            return 0;
        }

        const dados = await response.json();
        return dados.length;
    }

    async criarFotoJogo(usuarioId, jogoId, nomeJogo, fotoBase64, descricao = null) {
        const response = await fetch(`${this.url}/rest/v1/fotos_jogos`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                usuario_id: usuarioId,
                jogo_id: jogoId,
                nome_jogo: nomeJogo,
                foto: fotoBase64,
                descricao: descricao
            })
        });

        if (!response.ok) {
            const erro = await response.json();
            throw new Error(erro.message || 'Erro ao postar foto');
        }

        const dados = await response.json();
        this._invalidarCacheGetPorPrefixo([
            `${this.url}/rest/v1/fotos_jogos?jogo_id=eq.${jogoId}`,
            `${this.url}/rest/v1/fotos_jogos`
        ]);
        return dados[0];
    }

    async obterFotosJogo(jogoId, { forcarAtualizacao = false } = {}) {
        const url = `${this.url}/rest/v1/fotos_jogos?jogo_id=eq.${jogoId}&select=id,usuario_id,jogo_id,nome_jogo,foto,descricao,created_at,usuarios(usuario,foto_perfil)&order=created_at.desc`;
        if (forcarAtualizacao) this._cacheGet.delete(url);
        const fotos = await this._buscarJsonGet(url, { ttlMs: forcarAtualizacao ? 0 : 15000 });
        
        return fotos.map(item => ({
            id: item.id,
            usuario_id: item.usuario_id,
            jogo_id: item.jogo_id,
            nome_jogo: item.nome_jogo,
            foto: item.foto,
            descricao: item.descricao,
            created_at: item.created_at,
            usuario_nome: item.usuarios?.usuario || 'Usuário desconhecido',
            usuario_foto: item.usuarios?.foto_perfil || null
        }));
    }

    async deletarFotoJogo(fotoId, usuarioId) {
        const response = await fetch(
            `${this.url}/rest/v1/fotos_jogos?id=eq.${fotoId}&usuario_id=eq.${usuarioId}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );

        if (!response.ok) {
            throw new Error('Erro ao deletar foto');
        }

        this._invalidarCacheGetPorPrefixo([
            `${this.url}/rest/v1/fotos_jogos`,
            `${this.url}/rest/v1/likes_dislikes?foto_id=eq.${fotoId}`
        ]);
        return true;
    }

    async obterFotosJogoComLikes(jogoId, usuarioId, { forcarAtualizacao = false } = {}) {
        const url = `${this.url}/rest/v1/fotos_jogos?jogo_id=eq.${jogoId}&select=id,usuario_id,jogo_id,nome_jogo,foto,descricao,created_at,usuarios(usuario,foto_perfil)&order=created_at.desc`;
        if (forcarAtualizacao) this._cacheGet.delete(url);
        const fotos = await this._buscarJsonGet(url, { ttlMs: forcarAtualizacao ? 0 : 15000 });
        
        const fotosComLikes = await Promise.all(fotos.map(async (item) => {
            const fotoId = item.id;
            
            const contadores = await this.contarLikesDislikesFoto(fotoId, { forcarAtualizacao });
            const meuLike = usuarioId ? await this.obterLikeDislikeFoto(usuarioId, fotoId, { forcarAtualizacao }) : null;
            
            return {
                id: item.id,
                usuario_id: item.usuario_id,
                jogo_id: item.jogo_id,
                nome_jogo: item.nome_jogo,
                foto: item.foto,
                descricao: item.descricao,
                created_at: item.created_at,
                usuario_nome: item.usuarios?.usuario || 'Usuário desconhecido',
                usuario_foto: item.usuarios?.foto_perfil || null,
                contador_likes: contadores.likes || 0,
                contador_dislikes: contadores.dislikes || 0,
                meu_like: meuLike ? meuLike.tipo : null
            };
        }));
        
        return fotosComLikes;
    }

    async contarLikesDislikesFoto(fotoId, { forcarAtualizacao = false } = {}) {
        const query = `${this.url}/rest/v1/likes_dislikes?foto_id=eq.${fotoId}&select=tipo`;
        if (forcarAtualizacao) this._cacheGet.delete(query);
        const response = await fetch(query, {
            method: 'GET',
            headers: this.headers
        });
        
        if (!response.ok) {
            return { likes: 0, dislikes: 0 };
        }
        
        const dados = await response.json();
        const likes = dados.filter(item => item.tipo === 'like').length;
        const dislikes = dados.filter(item => item.tipo === 'dislike').length;
        
        return { likes, dislikes };
    }

    async obterLikeDislikeFoto(usuarioId, fotoId, { forcarAtualizacao = false } = {}) {
        const query = `${this.url}/rest/v1/likes_dislikes?usuario_id=eq.${usuarioId}&foto_id=eq.${fotoId}&select=id,usuario_id,foto_id,tipo`;
        if (forcarAtualizacao) this._cacheGet.delete(query);
        let dados;
        try {
            dados = await this._buscarJsonGet(query, { ttlMs: forcarAtualizacao ? 0 : 8000 });
        } catch (e) {
            console.error('Erro ao obter like/dislike da foto:', e);
            return null;
        }
        return dados.length > 0 ? dados[0] : null;
    }

    async salvarLikeDislikeFoto(usuarioId, fotoId, tipo) {
        const existente = await this.obterLikeDislikeFoto(usuarioId, fotoId);
        
        if (existente) {
            if (existente.tipo === tipo) {
                await this.deletarLikeDislikeFoto(usuarioId, fotoId);
                return { acao: 'removido' };
            }
            const response = await fetch(
                `${this.url}/rest/v1/likes_dislikes?usuario_id=eq.${usuarioId}&foto_id=eq.${fotoId}`,
                {
                    method: 'PATCH',
                    headers: this.headers,
                    body: JSON.stringify({ tipo: tipo })
                }
            );
            
            if (!response.ok) {
                throw new Error('Erro ao atualizar like/dislike');
            }
            
            this._invalidarCacheGetPorPrefixo([
                `${this.url}/rest/v1/likes_dislikes?foto_id=eq.${fotoId}`,
                `${this.url}/rest/v1/fotos_jogos?jogo_id`
            ]);
            return { acao: 'atualizado' };
        }
        
        const dados = {
            usuario_id: usuarioId,
            foto_id: fotoId,
            tipo: tipo
        };

        const response = await fetch(`${this.url}/rest/v1/likes_dislikes`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify(dados)
        });

        if (!response.ok) {
            const erroTexto = await response.text();
            let erro;
            try {
                erro = JSON.parse(erroTexto);
            } catch (e) {
                erro = { message: erroTexto || 'Erro ao curtir/descurtir foto' };
            }
            throw new Error(erro.message || 'Erro ao curtir/descurtir foto');
        }

        this._invalidarCacheGetPorPrefixo([
            `${this.url}/rest/v1/likes_dislikes?foto_id=eq.${fotoId}`,
            `${this.url}/rest/v1/fotos_jogos?jogo_id`
        ]);
        return { acao: 'criado' };
    }

    async deletarLikeDislikeFoto(usuarioId, fotoId) {
        const response = await fetch(
            `${this.url}/rest/v1/likes_dislikes?usuario_id=eq.${usuarioId}&foto_id=eq.${fotoId}`,
            {
                method: 'DELETE',
                headers: this.headers
            }
        );

        if (!response.ok) {
            throw new Error('Erro ao remover like/dislike');
        }

        this._invalidarCacheGetPorPrefixo([
            `${this.url}/rest/v1/likes_dislikes?foto_id=eq.${fotoId}`,
            `${this.url}/rest/v1/fotos_jogos?jogo_id`
        ]);
        return true;
    }

    async criarSugestaoOuReporte(usuarioId, usuarioNome, { tipo, titulo, descricao }) {
        if (!tipo || !['sugestao', 'bug'].includes(tipo)) {
            throw new Error('Tipo inválido. Use "sugestao" ou "bug".');
        }
        if (!titulo || typeof titulo !== 'string') {
            throw new Error('Título é obrigatório.');
        }
        const tituloLimpo = titulo.trim();
        if (tituloLimpo.length < 3) {
            throw new Error('Título deve ter no mínimo 3 caracteres.');
        }
        if (tituloLimpo.length > 200) {
            throw new Error('Título não pode ter mais de 200 caracteres.');
        }
        let descricaoLimpa = null;
        if (descricao && typeof descricao === 'string') {
            descricaoLimpa = descricao.trim();
            if (descricaoLimpa.length > 2000) {
                throw new Error('Descrição não pode ter mais de 2000 caracteres.');
            }
            descricaoLimpa = descricaoLimpa.length > 0 ? descricaoLimpa : null;
        }
        const response = await fetch(`${this.url}/rest/v1/sugestoes_reportes`, {
            method: 'POST',
            headers: this.headers,
            body: JSON.stringify({
                tipo,
                usuario_id: usuarioId,
                titulo: tituloLimpo,
                descricao: descricaoLimpa
            })
        });
        if (!response.ok) {
            const erroTexto = await response.text();
            let erro;
            try {
                erro = JSON.parse(erroTexto);
            } catch (e) {
                erro = { message: erroTexto || 'Erro ao enviar.' };
            }
            throw new Error(erro.message || 'Erro ao enviar sugestão ou reporte.');
        }
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/sugestoes_reportes`]);
        const texto = await response.text();
        if (texto && texto.trim()) {
            try {
                const dados = JSON.parse(texto);
                return Array.isArray(dados) ? dados[0] : dados;
            } catch (e) {
                return { sucesso: true };
            }
        }
        return { sucesso: true };
    }

    async obterSugestoesReportes({ tipo = null, lido = null, busca = '', tag = null } = {}) {
        let query = `${this.url}/rest/v1/sugestoes_reportes?select=id,tipo,usuario_id,titulo,descricao,lido,tag,created_at,usuarios(usuario)&order=created_at.desc`;
        if (tipo && ['sugestao', 'bug'].includes(tipo)) {
            query += `&tipo=eq.${encodeURIComponent(tipo)}`;
        }
        if (lido === true) query += `&lido=eq.true`;
        if (lido === false) query += `&lido=eq.false`;
        if (tag === 'sem_tag') {
            query += `&tag=is.null`;
        } else if (tag && ['em_analise', 'concluido', 'aplicado', 'recusado'].includes(tag)) {
            query += `&tag=eq.${encodeURIComponent(tag)}`;
        }
        const termo = (typeof busca === 'string' ? busca : '').replace(/[*%\\]/g, '').trim();
        if (termo.length > 0) {
            const padrao = '*' + termo + '*';
            query += `&or=(titulo.ilike.${encodeURIComponent(padrao)},descricao.ilike.${encodeURIComponent(padrao)})`;
        }
        const dados = await this._buscarJsonGet(query, { ttlMs: 5000 });
        return dados.map(item => ({
            id: item.id,
            tipo: item.tipo,
            usuario_id: item.usuario_id,
            usuario_nome: (item.usuarios && item.usuarios.usuario) ? item.usuarios.usuario : 'Usuário removido',
            titulo: item.titulo,
            descricao: item.descricao || '',
            lido: !!item.lido,
            tag: item.tag || null,
            created_at: item.created_at
        }));
    }

    async atualizarSugestaoReporteTag(id, tag, remetenteId) {
        const res = await fetch(`${this.url}/rest/v1/sugestoes_reportes?id=eq.${id}&select=usuario_id,titulo,tipo,tag`, { method: 'GET', headers: this.headers });
        if (!res.ok) throw new Error('Erro ao buscar item.');
        const arr = await res.json();
        if (!Array.isArray(arr) || arr.length === 0) throw new Error('Item não encontrado.');
        const atual = arr[0];
        const tagAnterior = atual.tag || null;
        const tagNova = (tag && String(tag).trim()) ? String(tag).trim() : null;
        const response = await fetch(`${this.url}/rest/v1/sugestoes_reportes?id=eq.${id}`, {
            method: 'PATCH',
            headers: this.headers,
            body: JSON.stringify({ tag: tagNova })
        });
        if (!response.ok) {
            const t = await response.text();
            let e;
            try { e = JSON.parse(t); } catch (_) { e = { message: t }; }
            throw new Error(e.message || 'Erro ao atualizar tag.');
        }
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/sugestoes_reportes`]);
        if (tagNova !== tagAnterior && tagNova) {
            await this.criarNotificacaoFeedback(atual.usuario_id, remetenteId, id, tagNova, tagAnterior, atual.titulo, atual.tipo);
        }
        return true;
    }

    async criarNotificacaoFeedback(destinatarioId, remetenteId, sugestaoReporteId, tag, tagAnterior, titulo, tipoFeedback) {
        const body = {
            destinatario_id: destinatarioId,
            remetente_id: remetenteId,
            avaliacao_id: null,
            resposta_id: null,
            sugestao_reporte_id: sugestaoReporteId,
            feedback_tag: tag,
            feedback_tag_anterior: tagAnterior || null,
            feedback_titulo: titulo || '',
            feedback_tipo: tipoFeedback || 'sugestao',
            tipo: 'feedback_tag',
            lida: false
        };
        const response = await fetch(`${this.url}/rest/v1/notificacoes`, { method: 'POST', headers: this.headers, body: JSON.stringify(body) });
        if (!response.ok) {
            const t = await response.text();
            console.error('Erro ao criar notificação de feedback:', t);
            if (/avaliacao_id|resposta_id|null value/i.test(t)) {
                console.warn('Dica: se avaliacao_id ou resposta_id forem NOT NULL, rode no Supabase: ALTER TABLE notificacoes ALTER COLUMN avaliacao_id DROP NOT NULL; ALTER TABLE notificacoes ALTER COLUMN resposta_id DROP NOT NULL;');
            }
            return null;
        }
        return true;
    }

    async atualizarSugestaoReporteLido(id, lido) {
        const response = await fetch(
            `${this.url}/rest/v1/sugestoes_reportes?id=eq.${id}`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ lido: !!lido })
            }
        );
        if (!response.ok) {
            const erroTexto = await response.text();
            throw new Error(erroTexto || 'Erro ao atualizar.');
        }
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/sugestoes_reportes`]);
        return true;
    }

    async marcarTodasSugestoesReportesComoLidas() {
        const response = await fetch(
            `${this.url}/rest/v1/sugestoes_reportes?lido=eq.false`,
            {
                method: 'PATCH',
                headers: this.headers,
                body: JSON.stringify({ lido: true })
            }
        );
        if (!response.ok) {
            throw new Error('Erro ao marcar todas como lidas.');
        }
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/sugestoes_reportes`]);
        return true;
    }

    async excluirSugestaoReporte(id) {
        const response = await fetch(
            `${this.url}/rest/v1/sugestoes_reportes?id=eq.${id}`,
            { method: 'DELETE', headers: this.headers }
        );
        if (!response.ok) {
            throw new Error('Erro ao excluir.');
        }
        this._invalidarCacheGetPorPrefixo([`${this.url}/rest/v1/sugestoes_reportes`]);
        return true;
    }

    async contarSugestoesReportesNaoLidas() {
        const url = `${this.url}/rest/v1/sugestoes_reportes?lido=eq.false&select=id`;
        const dados = await this._buscarJsonGet(url, { ttlMs: 8000 });
        return Array.isArray(dados) ? dados.length : 0;
    }

    async contarSugestoesEBugs() {
        const statusFinalizados = ['concluido', 'aplicado', 'recusado'];
        const urlSugestoes = `${this.url}/rest/v1/sugestoes_reportes?tipo=eq.sugestao&select=id,tag`;
        const urlBugs = `${this.url}/rest/v1/sugestoes_reportes?tipo=eq.bug&select=id,tag`;
        const [dadosSugestoes, dadosBugs] = await Promise.all([
            this._buscarJsonGet(urlSugestoes, { ttlMs: 8000 }),
            this._buscarJsonGet(urlBugs, { ttlMs: 8000 })
        ]);
        const sugestoesFiltradas = Array.isArray(dadosSugestoes) 
            ? dadosSugestoes.filter(item => !item.tag || !statusFinalizados.includes(item.tag))
            : [];
        const bugsFiltrados = Array.isArray(dadosBugs)
            ? dadosBugs.filter(item => !item.tag || !statusFinalizados.includes(item.tag))
            : [];
        return {
            sugestoes: sugestoesFiltradas.length,
            bugs: bugsFiltrados.length
        };
    }
}

const supabase = new SupabaseClient(SUPABASE_URL, SUPABASE_KEY);

