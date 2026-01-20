# 🎮 PlayShelf

Aplicação web para organizar e gerenciar sua biblioteca pessoal de jogos de PC.

## 📋 Funcionalidades Principais

### 🎯 Gerenciamento de Jogos
- Busca de jogos via API RAWG
- Integração Steam: conecte sua conta pelo botão na busca (login na janela oficial), veja sua biblioteca e adicione jogos direto na lista
- Vincule ou desvincule jogos da sua lista com os da Steam; adicione jogos que só existem na Steam (use o nome da Steam se não achar na base)
- Badge Steam nos cards e nos detalhes; horas jogadas da Steam exibidas nos detalhes do jogo
- Organização por status (Quero Jogar, Jogando, Zerado, Dropado)
- Avaliação com estrelas (1-5) e comentários personalizados
- Filtros dinâmicos e busca na lista pessoal
- Detalhes completos com tradução automática para português
- Paginação inteligente de resultados
- Galeria de screenshots com visualização ampliada e navegação
- Trailers e vídeos (API RAWG ou busca automática no YouTube)
- Classificação ESRB traduzida para português
- Score do Metacritic com código de cores
- Visualização de amigos que possuem o mesmo jogo
- Requisitos de hardware formatados e traduzidos (mínimo e recomendado)
- Lista de DLCs e conteúdo adicional
- Jogos relacionados (mesma série, desenvolvedora/distribuidora)
- Sistema de conquistas com tradução automática
- Ordenação customizável por status via drag and drop (arraste e solte para reordenar)
- Auto-scroll automático durante o arraste para facilitar reordenação de listas longas

### 👥 Sistema Social
- Sistema completo de amigos
- Compatibilidade com amigos considera jogos vinculados à Steam; "Na biblioteca Steam dele" para jogos de amigos
- Solicitações de amizade por nick
- Visualizar lista de jogos dos amigos
- Avaliações públicas visíveis para todos
- Sistema de comentários com respostas em threads
- Sistema de likes/dislikes em avaliações e respostas
- Foto de perfil personalizável
- Sistema de fotos de jogos da comunidade
- Upload de múltiplas fotos por jogo (até 5 por postagem)
- Carrossel de fotos com navegação e indicadores
- Descrição opcional para fotos (até 200 caracteres)
- Likes/dislikes em fotos da comunidade
- Edição de respostas próprias

### 📊 Estatísticas e Análises
- Dashboard completo de estatísticas pessoais
- Visualização de total de jogos e distribuição por status
- Média de avaliações e porcentagem de jogos avaliados
- Distribuição de avaliações por estrelas (1-5)
- Taxa de conclusão (porcentagem de jogos zerados)
- Histórico mensal de adição de jogos com timeline visual
- Estatísticas por gêneros com tradução automática
- Sistema de comparação com amigos (métricas lado a lado)
- Compatibilidade calculada entre amigos
- Classificação de compatibilidade (Excelente, Boa, Média, Baixa) com cores visuais

### 🔔 Interface e Experiência
- Sugerir melhorias ou reportar bugs: botão no header e no menu; envie sugestões ou reportes, com status (em análise, concluído, aplicado, recusado) e notificação quando o status mudar
- Tooltips (dicas) em botões e campos para orientar o uso
- Mais animações e fluidez na interface
- Sistema de atualizações/changelog com exibição automática
- Sistema de notificações em tempo real para respostas em avaliações
- Contador de notificações não lidas no header
- Badge de nova atualização disponível
- Modal de confirmação para ações importantes
- Persistência de estado ao atualizar página (mantém jogo aberto, filtros, scroll)
- Interface moderna, elegante e responsiva
- Cache de requisições da API para melhor performance
- Animações suaves e transições
- Design dark mode otimizado
- Responsividade otimizada para mobile e tablet
- Menu lateral mobile com navegação completa
- Sistema de skeleton loading para melhor UX
- Toggle de visibilidade de senha nos formulários
- Sistema de drag and drop para reordenar jogos na lista
- Auto-scroll durante arraste para facilitar reordenação em listas longas

## 🚀 Como Usar

### Primeira Utilização
1. Crie sua conta com email, senha e nick
2. Faça login
3. Busque jogos na barra de pesquisa
4. Adicione jogos à sua lista com status e avaliação
5. Adicione amigos pelo nick deles
6. Interaja com avaliações de outros usuários

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Supabase (PostgreSQL)
- **APIs**: RAWG (jogos), Google Translate (tradução), Steam (login OpenID e biblioteca de jogos)
- **Ícones**: Font Awesome 6.5.1
- **PWA**: Service Worker para cache offline e melhor performance
- **Web Workers**: Processamento em background (ordenação e processamento de texto)
- **Compressão**: Pako.js para compressão de dados no localStorage
- **Drag and Drop**: SortableJS para reordenação de jogos via arraste e solte

## 📝 Estrutura do Projeto

```
PlayShelf/
├── api/
│   ├── steam-biblioteca.js  # API serverless: biblioteca de jogos da Steam
│   └── steam-callback.js    # API serverless: callback do login Steam (OpenID)
├── index.html               # Estrutura HTML principal
├── styles.css               # Estilos e design responsivo
├── script.js                # Lógica da aplicação
├── supabase.js              # Cliente Supabase customizado
├── sw.js                    # Service Worker (PWA e cache offline)
├── worker-sort.js           # Web Worker para ordenação de jogos
├── worker-process-text.js   # Web Worker para processamento de texto
├── manifest.webmanifest     # Manifesto PWA
├── .gitignore               # Arquivos ignorados pelo Git
├── README.md                # Documentação do projeto
└── NOTAS.md                 # Notas de desenvolvimento e roadmap
```

## ⚡ Performance e Otimizações

- **Cache Inteligente**: Sistema de cache em múltiplas camadas
  - Cache de requisições API (RAWG) com TTL configurável
  - Cache de traduções para evitar requisições repetidas
  - Cache de dados do Supabase com invalidação automática
  - Cache de busca com paginação pré-carregada
- **Memoização**: Sistema avançado de memoização para operações custosas
  - Memoização de filtros e ordenação de jogos
  - Memoização de cálculos de contadores
  - Invalidação automática quando dados mudam
- **Web Workers**: Processamento em background
  - Worker de ordenação para listas grandes (>300 itens)
  - Worker de processamento de texto para requisitos e traduções
  - Não bloqueia a thread principal da UI
- **Service Worker (PWA)**: Cache offline e estratégias avançadas
  - Cache de assets principais (stale-while-revalidate)
  - Cache de imagens e APIs externas
  - Funcionamento offline básico
- **Compressão**: Dados comprimidos no localStorage usando Pako.js
  - Reduz uso de espaço em até 80%
  - Fallback automático se compressão falhar
- **Prefetch Inteligente**: Pré-carregamento de dados prováveis
  - Pré-carrega detalhes de jogos ao passar o mouse
  - Pré-carrega próxima página de busca
- **Drag and Drop**: Sistema completo de reordenação
  - Reordenação via arraste e solte usando SortableJS
  - Ordem personalizada por status (cada status tem sua própria ordem)
  - Auto-scroll automático durante arraste (suporte a listas longas)
  - Suporte completo para touch (mobile/tablet)
  - Salvamento automático da nova ordem após reordenação
  - Handle visual (ícone de arraste) para melhor UX

## 🔒 Segurança

- Projeto privado para uso pessoal e círculo de amigos
- Credenciais Supabase são públicas (anon key)
- RLS (Row Level Security) desabilitado para simplicidade
- Escape HTML automático para prevenir XSS básico
- Validação de inputs no frontend e backend

## 📊 Versão Atual

**v1.10.0** - Integração Steam, Sugerir/Reportar e Refinamentos de UX (20/01/2026)
- Integração Steam: conectar conta, biblioteca, vincular/desvincular e adicionar jogos
- Sugerir melhorias ou reportar bugs, com status e notificação quando mudar
- Mais animações, fluidez e tooltips em botões e campos

## 📜 Changelog

Ver arquivo `NOTAS.md` ou acessar o modal de atualizações dentro da aplicação.

## 🤝 Contribuição

Este é um projeto pessoal, mas sugestões são bem-vindas através de issues.

---

**Desenvolvido com 💜 para organização pessoal de jogos** 🎮

