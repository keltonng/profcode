/* ===== DADOS ===== */
const baseSeriesImgs=[
  "imagens/1A367628-73EA-4CAD-86F7-F4ECCDB64FAF.png",
  "imagens/5D3ECED7-4E97-4D34-8887-4AFAD2BD6710.png",
  "imagens/8AC5165D-345E-4F63-B362-037D2E872DDD.png",
  "imagens/77EFDD95-FCD6-452C-BA87-F4E031CE8200.png",
  "imagens/32850CDC-312F-4B4E-9221-6824B8AFF888.png",
  "imagens/609255D5-4846-4FE7-8915-81ECFAB46C46.png",
  "imagens/D21AB934-FCDB-46BE-8D3E-1CA8448DE25D.png",
  "imagens/B017F1C7-AA19-4FD6-8C79-50BE06315997.jpeg",
  "imagens/434C7272-2212-4251-BF5C-9DC3CC9DB174.png",
  "imagens/030D457A-25AB-48DD-84CF-9159D9F1C227.png"
];
const baseFilmesImgs=[
  "imagens/23CBB367-FB29-4513-84BB-33AC781897B5.png",
  "imagens/2F7A1AF2-135E-40AE-A704-B0AC61056D68.png",
  "imagens/96E54436-1E31-4F39-8401-146C2C883E78.png",
  "imagens/FD5482DA-7C0E-45D1-8441-E18D90C44301.png",
  "imagens/1C53B792-6C51-425F-80FA-E78D7694A3D5.png",
  "imagens/2067991B-F3F7-4CC6-9CCD-00B54075773D.png",
  "imagens/476D7F40-F4C7-418C-AA88-0F0909975B40.png",
  "imagens/A2986097-CA04-4DBD-B793-C7E77587B2FF.png",
  "imagens/7CD60E4E-BB79-4329-A917-94B8DCF23B50.png",
  "imagens/A6D116F5-BAB3-4DCD-B722-876B951A6560.png"
];
const baseAnimesImgs=[
  "imagens/F48EB169-B8B0-40B5-9E87-1F9612536648.png",
  "imagens/9F7EB726-EF62-4580-9353-4EFA06C0F162.png",
  "imagens/33C7E6F9-CB03-4941-94E1-D4BD5DA5CB9B.png",
  "imagens/540DA89E-5729-4793-AE54-EFDA193AB31C.png",
  "imagens/0A6E959C-99D7-4F93-A23A-4746D0557834.png",
  "imagens/EAAAA7C2-270E-4E55-9CDD-D5BB583C6FA3.png",
  "imagens/72A4F491-9765-444F-A111-F35EA8DA761A.png",
  "imagens/1E27736A-CEB5-4699-8E14-3BB0BAF4A195.png",
  "imagens/FE3BA1F6-1225-4F92-B6B9-52F7D77D7A24.png",
  "imagens/3675C1E5-9175-4AA9-A2BA-641C33F5BF4D.png"
];

const episodiosPacotesModulosImgs=[
  "imagens/1A367628-73EA-4CAD-86F7-F4ECCDB64FAF.png",
  "imagens/609255D5-4846-4FE7-8915-81ECFAB46C46.png",
  "imagens/77EFDD95-FCD6-452C-BA87-F4E031CE8200.png",
  "imagens/434C7272-2212-4251-BF5C-9DC3CC9DB174.png",
  "imagens/32850CDC-312F-4B4E-9221-6824B8AFF888.png",
  "imagens/030D457A-25AB-48DD-84CF-9159D9F1C227.png",
  "imagens/8AC5165D-345E-4F63-B362-037D2E872DDD.png",
  "imagens/B017F1C7-AA19-4FD6-8C79-50BE06315997.jpeg",
  "imagens/D21AB934-FCDB-46BE-8D3E-1CA8448DE25D.png",
  "imagens/5D3ECED7-4E97-4D34-8887-4AFAD2BD6710.png"
];
const episodiosAvancadosImgs=[
  "imagens/23CBB367-FB29-4513-84BB-33AC781897B5.png",
  "imagens/2F7A1AF2-135E-40AE-A704-B0AC61056D68.png",
  "imagens/96E54436-1E31-4F39-8401-146C2C883E78.png",
  "imagens/FD5482DA-7C0E-45D1-8441-E18D90C44301.png",
  "imagens/1C53B792-6C51-425F-80FA-E78D7694A3D5.png",
  "imagens/2067991B-F3F7-4CC6-9CCD-00B54075773D.png",
  "imagens/476D7F40-F4C7-418C-AA88-0F0909975B40.png",
  "imagens/A2986097-CA04-4DBD-B793-C7E77587B2FF.png",
  "imagens/7CD60E4E-BB79-4329-A917-94B8DCF23B50.png",
  "imagens/A6D116F5-BAB3-4DCD-B722-876B951A6560.png"
];
const episodiosDocumentariosImgs=[
  "imagens/IMG_3085.jpeg",
  "imagens/9F7EB726-EF62-4580-9353-4EFA06C0F162.png",
  "imagens/33C7E6F9-CB03-4941-94E1-D4BD5DA5CB9B.png",
  "imagens/540DA89E-5729-4793-AE54-EFDA193AB31C.png",
  "imagens/0A6E959C-99D7-4F93-A23A-4746D0557834.png",
  "imagens/EAAAA7C2-270E-4E55-9CDD-D5BB583C6FA3.png",
  "imagens/72A4F491-9765-444F-A111-F35EA8DA761A.png",
  "imagens/1E27736A-CEB5-4699-8E14-3BB0BAF4A195.png",
  "imagens/FE3BA1F6-1225-4F92-B6B9-52F7D77D7A24.png",
  "imagens/3675C1E5-9175-4AA9-A2BA-641C33F5BF4D.png"
];

const episodiosPacotesModulosVideos=[
  "videos/pacotes-modulos/ep01.mp4",
  "videos/pacotes-modulos/ep02.mp4",
  "videos/pacotes-modulos/ep03.mp4",
  "videos/pacotes-modulos/ep04.mp4",
  "videos/pacotes-modulos/ep05.mp4",
  "videos/pacotes-modulos/ep06.mp4",
  "videos/pacotes-modulos/ep07.mp4",
  "videos/pacotes-modulos/ep08.mp4",
  "videos/pacotes-modulos/ep09.mp4",
  "videos/pacotes-modulos/ep10.mp4"
];
const episodiosAvancadosVideos=[
  "videos/modulos-avancados/ep01.mp4",
  "videos/modulos-avancados/ep02.mp4",
  "videos/modulos-avancados/ep03.mp4",
  "videos/modulos-avancados/ep04.mp4",
  "videos/modulos-avancados/ep05.mp4",
  "videos/modulos-avancados/ep06.mp4",
  "videos/modulos-avancados/ep07.mp4",
  "videos/modulos-avancados/ep08.mp4",
  "videos/modulos-avancados/ep09.mp4",
  "videos/modulos-avancados/ep10.mp4"
];
const episodiosDocumentariosVideos=[
  "videos/documentarios/ep01.mp4",
  "videos/documentarios/ep02.mp4",
  "videos/documentarios/ep03.mp4",
  "videos/documentarios/ep04.mp4",
  "videos/documentarios/ep05.mp4",
  "videos/documentarios/ep06.mp4",
  "videos/documentarios/ep07.mp4",
  "videos/documentarios/ep08.mp4",
  "videos/documentarios/ep09.mp4",
  "videos/documentarios/ep10.mp4"
];

const searchTagsList=[
  "Lifestyle de casais",
  "Carros de luxo",
  "Viagens exclusivas",
  "Empreendedorismo",
  "Lei da atração",
  "Fitness premium",
  "Mentorias ARV",
  "Alta performance",
  "Investimentos",
  "Experiências de spa",
  "Moda premium",
  "Colecionáveis",
  "Imersões ao vivo",
  "Minimalismo",
  "Tecnologia e gadgets"
];

const searchItemsCatalog=searchTagsList.reduce((acc,tag,idx)=>{
  acc[tag]=[
    {titulo:`${tag} — Conteúdo 1`,img:baseSeriesImgs[idx%baseSeriesImgs.length]},
    {titulo:`${tag} — Conteúdo 2`,img:baseFilmesImgs[idx%baseFilmesImgs.length]},
    {titulo:`${tag} — Conteúdo 3`,img:baseAnimesImgs[idx%baseAnimesImgs.length]}
  ];
  return acc;
},{});

const imagensSeries=expandCarousel(baseSeriesImgs,10);
const imagensFilmes=expandCarousel(baseFilmesImgs,10);
const imagensAnimes=expandCarousel(baseAnimesImgs,10);

const seriesCatalog=[
  {
    titulo:"Pacotes e Módulos",
    banner:"https://i.imgur.com/0JpYpZK.jpg",
    episodios:Array.from({length:6}).map((_,i)=>({
      numero:i+1,
      titulo:`Episódio ${i+1}`,
      descricao:"Continue assistindo de onde parou.",
      thumb:episodiosPacotesModulosImgs[i%episodiosPacotesModulosImgs.length],
      video:episodiosPacotesModulosVideos[i%episodiosPacotesModulosVideos.length]
    }))
  },
  {
    titulo:"Módulos avançados",
    banner:"https://i.imgur.com/zvX7y7n.jpg",
    episodios:Array.from({length:8}).map((_,i)=>({
      numero:i+1,
      titulo:`Capítulo ${i+1}`,
      descricao:"Pronto para voltar à ação?",
      thumb:episodiosAvancadosImgs[i%episodiosAvancadosImgs.length],
      video:episodiosAvancadosVideos[i%episodiosAvancadosVideos.length]
    }))
  },
  {
    titulo:"Documentários de mentalidade",
    banner:"https://i.imgur.com/6YV1E1D.jpg",
    episodios:Array.from({length:5}).map((_,i)=>({
      numero:i+1,
      titulo:`Episódio ${i+1}`,
      descricao:"Retome imediatamente.",
      thumb:episodiosDocumentariosImgs[i%episodiosDocumentariosImgs.length],
      video:episodiosDocumentariosVideos[i%episodiosDocumentariosVideos.length]
    }))
  }
];

// Objeto central: moduloId -> lista de episódios
const episodiosCatalog={
  pacotes_modulos:{
    moduloId:"pacotes_modulos",
    titulo:"Pacotes e Módulos",
    episodios:[
      {id:"pm-01",titulo:"Boas-vindas ao Pack",descricao:"Comece entendendo a estrutura do módulo.",imagem:episodiosPacotesModulosImgs[0],video:episodiosPacotesModulosVideos[0]},
      {id:"pm-02",titulo:"Rotina de Ativação",descricao:"Prepare sua rotina para resultados consistentes.",imagem:episodiosPacotesModulosImgs[1],video:episodiosPacotesModulosVideos[1]},
      {id:"pm-03",titulo:"Execução do Método",descricao:"Como aplicar o método passo a passo.",imagem:episodiosPacotesModulosImgs[2],video:episodiosPacotesModulosVideos[2]},
      {id:"pm-04",titulo:"Checkpoints de Progresso",descricao:"Avalie seu progresso sem perder o foco.",imagem:episodiosPacotesModulosImgs[3],video:episodiosPacotesModulosVideos[3]},
      {id:"pm-05",titulo:"Ferramentas do Pack",descricao:"Recursos essenciais para acelerar a prática.",imagem:episodiosPacotesModulosImgs[4],video:episodiosPacotesModulosVideos[4]},
      {id:"pm-06",titulo:"Alinhamento de Metas",descricao:"Conecte seus objetivos aos módulos.",imagem:episodiosPacotesModulosImgs[5],video:episodiosPacotesModulosVideos[5]},
      {id:"pm-07",titulo:"Mentalidade de Constância",descricao:"Como manter o ritmo durante o processo.",imagem:episodiosPacotesModulosImgs[6],video:episodiosPacotesModulosVideos[6]},
      {id:"pm-08",titulo:"Aplicação no Dia a Dia",descricao:"Exemplos práticos para usar imediatamente.",imagem:episodiosPacotesModulosImgs[7],video:episodiosPacotesModulosVideos[7]},
      {id:"pm-09",titulo:"Ajustes Finos",descricao:"Refine a execução para melhores resultados.",imagem:episodiosPacotesModulosImgs[8],video:episodiosPacotesModulosVideos[8]},
      {id:"pm-10",titulo:"Fechamento do Pack",descricao:"Consolide o aprendizado com clareza.",imagem:episodiosPacotesModulosImgs[9],video:episodiosPacotesModulosVideos[9]}
    ]
  },
  so_na_arv:{
    moduloId:"so_na_arv",
    titulo:"Só na ARV",
    episodios:[
      {id:"sa-01",titulo:"Coleção Premium",descricao:"Seleção exclusiva com foco em resultados.",imagem:baseFilmesImgs[0],video:episodiosAvancadosVideos[0]},
      {id:"sa-02",titulo:"Mapa de Crescimento",descricao:"Defina o mapa de evolução pessoal.",imagem:baseFilmesImgs[1],video:episodiosAvancadosVideos[1]},
      {id:"sa-03",titulo:"Ativação de Potência",descricao:"Aumente sua energia para execução total.",imagem:baseFilmesImgs[2],video:episodiosAvancadosVideos[2]},
      {id:"sa-04",titulo:"Estratégia de Foco",descricao:"Filtre distrações e mantenha clareza.",imagem:baseFilmesImgs[3],video:episodiosAvancadosVideos[3]},
      {id:"sa-05",titulo:"Disciplina Invisível",descricao:"Técnicas para manter a consistência.",imagem:baseFilmesImgs[4],video:episodiosAvancadosVideos[4]},
      {id:"sa-06",titulo:"Visão de Longo Prazo",descricao:"Ajuste metas com visão estratégica.",imagem:baseFilmesImgs[5],video:episodiosAvancadosVideos[5]},
      {id:"sa-07",titulo:"Tomada de Decisão",descricao:"Como decidir com mais segurança.",imagem:baseFilmesImgs[6],video:episodiosAvancadosVideos[6]},
      {id:"sa-08",titulo:"Ritual de Performance",descricao:"Crie rituais para alta performance.",imagem:baseFilmesImgs[7],video:episodiosAvancadosVideos[7]},
      {id:"sa-09",titulo:"Mentoria Intensiva",descricao:"Aprofundamento com foco em execução.",imagem:baseFilmesImgs[8],video:episodiosAvancadosVideos[8]},
      {id:"sa-10",titulo:"Exclusivo ARV",descricao:"Síntese final do conteúdo premium.",imagem:baseFilmesImgs[9],video:episodiosAvancadosVideos[9]}
    ]
  },
  documentarios_mentalidade:{
    moduloId:"documentarios_mentalidade",
    titulo:"Documentários de mentalidade",
    episodios:[
      {id:"dm-01",titulo:"Lei da Atração",descricao:"Entenda os fundamentos da atração.",imagem:episodiosDocumentariosImgs[0],video:episodiosDocumentariosVideos[0]},
      {id:"dm-02",titulo:"Programação Mental",descricao:"Como reprogramar padrões limitantes.",imagem:episodiosDocumentariosImgs[1],video:episodiosDocumentariosVideos[1]},
      {id:"dm-03",titulo:"Foco e Presença",descricao:"Treine a mente para estar no agora.",imagem:episodiosDocumentariosImgs[2],video:episodiosDocumentariosVideos[2]},
      {id:"dm-04",titulo:"Ambiente e Energia",descricao:"Ajuste seu ambiente para prosperar.",imagem:episodiosDocumentariosImgs[3],video:episodiosDocumentariosVideos[3]},
      {id:"dm-05",titulo:"Ciclos de Evolução",descricao:"Identifique ciclos e mantenha o ritmo.",imagem:episodiosDocumentariosImgs[4],video:episodiosDocumentariosVideos[4]},
      {id:"dm-06",titulo:"Autoimagem",descricao:"Construa uma autoimagem vencedora.",imagem:episodiosDocumentariosImgs[5],video:episodiosDocumentariosVideos[5]},
      {id:"dm-07",titulo:"Afirmações Guiadas",descricao:"Afirmações para consolidar mudanças.",imagem:episodiosDocumentariosImgs[6],video:episodiosDocumentariosVideos[6]},
      {id:"dm-08",titulo:"Persistência",descricao:"Como sustentar a prática diária.",imagem:episodiosDocumentariosImgs[7],video:episodiosDocumentariosVideos[7]},
      {id:"dm-09",titulo:"Sabotadores Internos",descricao:"Reconheça e neutralize sabotadores.",imagem:episodiosDocumentariosImgs[8],video:episodiosDocumentariosVideos[8]},
      {id:"dm-10",titulo:"O Segredo em Ação",descricao:"Integração final para resultados reais.",imagem:episodiosDocumentariosImgs[9],video:episodiosDocumentariosVideos[9]}
    ]
  },
  modulos_avancados:{
    moduloId:"modulos_avancados",
    titulo:"Módulos avançados",
    episodios:[
      {id:"ma-01",titulo:"Entrada Avançada",descricao:"Introdução ao conteúdo avançado.",imagem:episodiosAvancadosImgs[0],video:episodiosAvancadosVideos[0]},
      {id:"ma-02",titulo:"Mentalidade de Elite",descricao:"Eleve sua mentalidade para o próximo nível.",imagem:episodiosAvancadosImgs[1],video:episodiosAvancadosVideos[1]},
      {id:"ma-03",titulo:"Execução Acelerada",descricao:"Ganhe velocidade com precisão.",imagem:episodiosAvancadosImgs[2],video:episodiosAvancadosVideos[2]},
      {id:"ma-04",titulo:"Gestão de Energia",descricao:"Controle energia para máxima performance.",imagem:episodiosAvancadosImgs[3],video:episodiosAvancadosVideos[3]},
      {id:"ma-05",titulo:"Estratégia Profunda",descricao:"Aprofunde técnicas estratégicas.",imagem:episodiosAvancadosImgs[4],video:episodiosAvancadosVideos[4]},
      {id:"ma-06",titulo:"Hábito Inquebrável",descricao:"Construa hábitos que sustentam resultados.",imagem:episodiosAvancadosImgs[5],video:episodiosAvancadosVideos[5]},
      {id:"ma-07",titulo:"Momentum",descricao:"Crie e mantenha o momentum.",imagem:episodiosAvancadosImgs[6],video:episodiosAvancadosVideos[6]},
      {id:"ma-08",titulo:"Ajustes de Performance",descricao:"Calibre seu desempenho com precisão.",imagem:episodiosAvancadosImgs[7],video:episodiosAvancadosVideos[7]},
      {id:"ma-09",titulo:"Liderança Interna",descricao:"Lidere suas ações com autoridade.",imagem:episodiosAvancadosImgs[8],video:episodiosAvancadosVideos[8]},
      {id:"ma-10",titulo:"Conclusão Avançada",descricao:"Feche o módulo com visão clara.",imagem:episodiosAvancadosImgs[9],video:episodiosAvancadosVideos[9]}
    ]
  },
  inicio:{
    moduloId:"inicio",
    titulo:"Início",
    episodios:[
      {id:"in-01",titulo:"Atualizações da Semana",descricao:"O que há de novo no ARV.",imagem:baseAnimesImgs[0],video:episodiosDocumentariosVideos[0]},
      {id:"in-02",titulo:"Destaques ARV",descricao:"Principais conteúdos recomendados.",imagem:baseAnimesImgs[1],video:episodiosDocumentariosVideos[1]},
      {id:"in-03",titulo:"Próximos Passos",descricao:"Prepare-se para continuar evoluindo.",imagem:baseAnimesImgs[2],video:episodiosDocumentariosVideos[2]},
      {id:"in-04",titulo:"Clareza de Metas",descricao:"Organize suas metas pessoais.",imagem:baseAnimesImgs[3],video:episodiosDocumentariosVideos[3]},
      {id:"in-05",titulo:"Ritmo da Semana",descricao:"Acompanhe o seu ritmo ideal.",imagem:baseAnimesImgs[4],video:episodiosDocumentariosVideos[4]},
      {id:"in-06",titulo:"Rotina Inteligente",descricao:"Ative hábitos simples e consistentes.",imagem:baseAnimesImgs[5],video:episodiosDocumentariosVideos[5]},
      {id:"in-07",titulo:"Plano de Continuidade",descricao:"Garanta constância no aprendizado.",imagem:baseAnimesImgs[6],video:episodiosDocumentariosVideos[6]},
      {id:"in-08",titulo:"Novo na Plataforma",descricao:"Conheça recursos recém-lançados.",imagem:baseAnimesImgs[7],video:episodiosDocumentariosVideos[7]},
      {id:"in-09",titulo:"Revisão Rápida",descricao:"Reforce os pontos principais.",imagem:baseAnimesImgs[8],video:episodiosDocumentariosVideos[8]},
      {id:"in-10",titulo:"Aquecimento ARV",descricao:"Prepare-se para o próximo módulo.",imagem:baseAnimesImgs[9],video:episodiosDocumentariosVideos[9]}
    ]
  }
};

function expandCarousel(baseArray,count){
  return Array.from({length:count},(_,i)=>baseArray[i%baseArray.length]);
}

function renderSearchTags(filter=""){
  const container=document.getElementById("searchTags");
  if(!container) return;
  const normalized=filter.toLowerCase();
  const tags=searchTagsList.filter(tag=>tag.toLowerCase().includes(normalized));
  container.innerHTML=tags.map(tag=>`
    <button class="search-chip" type="button" onclick="selectSearchTag('${tag}')"><i data-lucide="bookmark"></i>${tag}</button>
  `).join("");
  lucide.createIcons();
}

function renderSearchResults(filter=""){
  const container=document.getElementById("searchResults");
  const carousel=document.getElementById("searchCarousel");
  if(!container) return;
  const normalized=filter.toLowerCase();
  const matchedTags=searchTagsList.filter(tag=>tag.toLowerCase().includes(normalized));
  const results=matchedTags.flatMap(tag=>searchItemsCatalog[tag]||[]);
  if(results.length===0){
    container.innerHTML="<p class=\"payment-info\">Nenhum item encontrado para este tema.</p>";
    if(carousel){
      carousel.innerHTML="";
    }
    return;
  }
  container.innerHTML=results.map(item=>`
    <div class="search-result" onclick="openPlayer()">
      <img src="${item.img}" alt="${item.titulo}">
      <div>
        <h4>${item.titulo}</h4>
        <p>Toque para visualizar os itens relacionados.</p>
      </div>
    </div>
  `).join("");
  if(carousel){
    carousel.innerHTML=results.map(item=>`
      <div class="search-card" onclick="openPlayer()">
        <img src="${item.img}" alt="${item.titulo}">
        <span>${item.titulo}</span>
      </div>
    `).join("");
  }
}

/* ===== LOGIN ===== */
function deriveFirstName(email){
  const local=email.split("@")[0]||email;
  const cleaned=local.replace(/[^a-zA-ZÀ-ÿ]+/g," ").trim();
  const surnames=["silva","souza","oliveira","santos","neves","pereira","almeida","lima","costa","martins","rocha","ferreira","gomes","rodrigues","dias","barbosa","araujo"]; 
  const lower=cleaned.toLowerCase().replace(/\s+/g,"");
  let candidate="";
  surnames.forEach(sn=>{
    const idx=lower.indexOf(sn);
    if(idx>2 && (candidate==="" || idx<candidate.length)){
      candidate=lower.slice(0,idx);
    }
  });
  const basis=candidate||cleaned.split(/\s+/)[0]||local;
  return basis.charAt(0).toUpperCase()+basis.slice(1);
}

function login(){
  const email=document.getElementById("email").value.trim();
  const password=document.getElementById("password").value.trim();
  if(!email || !password) return;
  localStorage.setItem("arv_email",email);
  localStorage.setItem("arv_pass",password);
  start();
}

function start(){
  const email=localStorage.getItem("arv_email");
  if(!email){
    show("login");
    return;
  }
  const profileLabel=deriveFirstName(email);
  show("home");
  document.getElementById("welcome").innerText=profileLabel;
  document.getElementById("profileName").innerText=profileLabel;
  renderHome();
  renderClips();
  renderSearchTags();
  renderSearchResults("");
  setActiveNav("home");
}

function logout(){
  localStorage.clear();
  location.reload();
}

/* ===== HOME ===== */
function renderHome(){
  const content=document.getElementById("content");
  content.innerHTML="";
  const sections=[
    {titulo:"Pacotes e Módulos",moduloId:"pacotes_modulos",tipo:"Modalidade",imagens:imagensSeries},
    {titulo:"Só na ARV",moduloId:"so_na_arv",tipo:"packs",imagens:imagensFilmes},
    {titulo:"Documentários de mentalidade",moduloId:"documentarios_mentalidade",tipo:"Modalidade",imagens:imagensAnimes},
    {titulo:"Módulos avançados",moduloId:"modulos_avancados",tipo:"categorias",imagens:imagensFilmes},
    {titulo:"Inicio",moduloId:"inicio",tipo:"inicio",imagens:imagensAnimes}
  ];

  sections.forEach(sec=>{
    const section=document.createElement("div");
    section.className="section";
    section.dataset.type=sec.tipo;
    section.innerHTML=`
      <div class="section-title">${sec.titulo}</div>
      <div class="carousel"></div>
    `;
    content.appendChild(section);
    montarCarousel(section.querySelector(".carousel"),sec.imagens,sec.moduloId);
  });
}

function renderClips(){
  const clipsContent=document.getElementById("clipsContent");
  clipsContent.innerHTML="";

  seriesCatalog.forEach(series=>{
    const section=document.createElement("div");
    section.className="section";
    section.innerHTML=`
      <div class="section-title">${series.titulo}</div>
    `;

    series.episodios.forEach(ep=>{
      const epEl=document.createElement("div");
      epEl.className="episode";
      epEl.innerHTML=`
        <img src="${ep.thumb}" alt="Thumb do ${ep.titulo}">
        <div>
          <h4>${series.titulo} — ${ep.titulo}</h4>
          <p>${ep.descricao}</p>
          <button class="ghost-btn small-ghost" style="margin-top:8px" onclick="openPlayerFromClip('${series.titulo}','${ep.titulo}','${ep.video}','${ep.thumb}');event.stopPropagation();">Continuar episódio</button>
        </div>
      `;
      epEl.onclick=()=>openPlayerFromClip(series.titulo,ep.titulo,ep.video,ep.thumb);
      section.appendChild(epEl);
    });

    clipsContent.appendChild(section);
  });
}

function montarCarousel(carouselElement,imagens,moduloId){
  carouselElement.innerHTML="";
  imagens.forEach(img=>{
    carouselElement.innerHTML+=`
      <div class="card" onclick="openEpisodes('${moduloId}')">
        <img src="${img}" alt="Capa">
        <span class="badge">Novo</span>
      </div>
    `;
  });
}

function filterContent(type,el){
  if(type==="all"){
    goHome();
  }
  const showAll = type==="all" || type==="categorias" || type==="inicio";
  document.querySelectorAll(".section").forEach(sec=>{
    sec.style.display=showAll || sec.dataset.type===type ? "block" : "none";
  });
  document.querySelectorAll(".filter").forEach(f=>f.classList.remove("active"));
  el.classList.add("active");
  toggleBadgeFlash();
}

/* ===== BUSCA ===== */
function openSearch(){
  const overlay=document.getElementById("searchOverlay");
  const input=document.getElementById("searchInput");
  if(!overlay) return;
  overlay.style.display="flex";
  if(input && !input.value){
    input.value="Lifestyle de casais";
  }
  renderSearchTags(input?.value||"");
  renderSearchResults(input?.value||"");
  setTimeout(()=>input?.focus(),120);
}

function closeSearch(){
  const overlay=document.getElementById("searchOverlay");
  if(overlay){
    overlay.style.display="none";
  }
}

function filterSearchTags(value){
  renderSearchTags(value||"");
  renderSearchResults(value||"");
}

function selectSearchTag(tag){
  const input=document.getElementById("searchInput");
  if(input){
    input.value=tag;
  }
  renderSearchTags(tag);
  renderSearchResults(tag);
}

/* ===== EPISÓDIOS ===== */
function openPlayerWithEpisode(episodeId,videoSrc,posterSrc) {
  const player = document.getElementById("player");
  const video = player.querySelector("video");
  const playerSource = document.getElementById("playerSource");
  const episodeVideo = videoSrc || "";

  player.dataset.episodeId = episodeId;

  if(playerSource){
    playerSource.src = episodeVideo;
  }
  if(video && posterSrc){
    video.setAttribute("poster",posterSrc);
  }
  if(video){
    video.load();
  }

  video.onended = () => {
    localStorage.setItem("watched_" + episodeId, "true");
  };

  openPlayer();
}

function openEpisodes(moduloId="pacotes_modulos") {
  const content = document.getElementById("content");
  const sectionData = episodiosCatalog[moduloId] || episodiosCatalog.pacotes_modulos;
  const titulo = sectionData.titulo;
  const episodios = sectionData.episodios;

  content.innerHTML = `
    <div class="section">
      <div class="section-title">${titulo}</div>
    </div>
  `;

  episodios.forEach(ep=>{
    const episodeId = `${sectionData.moduloId}_${ep.id}`;
    const watched = localStorage.getItem("watched_" + episodeId);

    content.innerHTML += `
      <div class="episode" onclick="openPlayerWithEpisode('${episodeId}','${ep.video}','${ep.imagem}')">
        <video muted playsinline preload="metadata" poster="${ep.imagem}">
          <source src="${ep.video}" type="video/mp4">
        </video>
        <div>
          <h4>${ep.titulo}</h4>
          <p>${ep.descricao}</p>
          ${watched ? "" : "<span class='badge'>Novo</span>"}
        </div>
      </div>
    `;
  });
}

/* ===== PLAYER ===== */
function openPlayerFromClip(seriesTitle,episodeTitle,videoSrc,posterSrc){
  const player=document.getElementById("player");
  const video=player.querySelector("video");
  const playerSource=document.getElementById("playerSource");
  player.dataset.current=`${seriesTitle} — ${episodeTitle}`;
  if(playerSource && videoSrc){
    playerSource.src=videoSrc;
    video.load();
  }
  if(video && posterSrc){
    video.setAttribute("poster",posterSrc);
  }
  openPlayer();
}

function openPlayer(){
  document.getElementById("player").style.display="block";
  toggleNavigationVisibility(false);
  toggleHomeFab(false);
}
function closePlayer(goStart){
  document.getElementById("player").style.display="none";
  toggleNavigationVisibility(true);
  if(goStart){
    goHome();
  }else{
    toggleHomeFab(true);
  }
}

/* ===== NAVEGAÇÃO ===== */
function toggleHomeFab(show){
  const fab=document.getElementById("homeFab");
  if(!fab) return;
  fab.style.display=show?"block":"none";
}

function toggleNavigationVisibility(show){
  const bottom=document.getElementById("bottom");
  if(bottom){
    bottom.style.display=show?"flex":"none";
  }
  document.querySelectorAll(".badge").forEach(badge=>{
    badge.style.display=show?"inline-flex":"none";
  });
}

function setActiveNav(target){
  document.querySelectorAll(".nav-item").forEach(item=>{
    const isTarget=item.dataset.target===target;
    item.classList.toggle("active",isTarget);
    const icon=item.dataset.icon;
    if(icon){
      const i=item.querySelector("i");
      i.setAttribute("data-lucide",isTarget?`${icon}-filled`:icon);
    }
  });
  lucide.createIcons();
}

function go(id,el){
  if(id==="clips") renderClips();
  if(id==="home") renderHome();
  show(id);
  const target=el?.dataset?.target || id;
  setActiveNav(target);
  toggleBadgeFlash();
}

function show(id){
  document.querySelectorAll(".screen").forEach(s=>s.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  const showNav=id!=="login";
  const bottom=document.getElementById("bottom");
  if(bottom){
    bottom.style.display=showNav?"flex":"none";
  }
  toggleHomeFab(showNav && document.getElementById("player").style.display!=="block");
}

function goHome(){
  renderHome();
  const homeNav=document.getElementById("navHome");
  if(homeNav){
    go("home",homeNav);
  }else{
    show("home");
    setActiveNav("home");
  }
}

function returnHome(){
  closePlayer(true);
}

function returnHomeFromPlayer(){
  closePlayer(true);
}

function openPlanos(){
  show("planos");
  setActiveNav("perfil");
  toggleBadgeFlash();
}

function openTermos(){
  show("termos");
  setActiveNav("perfil");
  toggleBadgeFlash();
}

function returnToProfile(){
  show("perfil");
  setActiveNav("perfil");
  toggleBadgeFlash();
}

let selectedPlan="";

function selectPlano(nome){
  selectedPlan=nome;
  document.querySelectorAll(".plan-card").forEach(card=>{
    card.classList.toggle("selected",card.dataset.plan===nome);
  });
}

const paymentQrCode="00020126580014br.gov.bcb.pix013632ee26a2-085a-4766-a7c4-58ecdd1d59745204000053039865802BR5925NEVESKELTON202305161115416009Sao Paulo610901227-20062240520daqr1375965046879887630493A7";

function renderPaymentQr(){
  const qrContainer=document.getElementById("paymentQr");
  if(!qrContainer || typeof QRCode==="undefined") return;
  qrContainer.innerHTML="";
  new QRCode(qrContainer,{
    text:paymentQrCode,
    width:140,
    height:140,
    colorDark:"#111",
    colorLight:"#fff",
    correctLevel:QRCode.CorrectLevel.M
  });
}

function openPaymentModal(method,plan){
  const modal=document.getElementById("paymentModal");
  const title=document.getElementById("paymentTitle");
  const planLabel=document.getElementById("paymentPlan");
  const info=document.getElementById("paymentInfo");
  const qr=document.getElementById("paymentQr");
  const cardForm=document.getElementById("paymentCardForm");
  if(!modal || !title || !planLabel || !info) return;
  title.textContent=`Pagamento via ${method}`;
  planLabel.textContent=`Plano selecionado: ${plan}`;
  if(method==="Cartão"){
    if(cardForm){
      cardForm.style.display="flex";
    }
    if(qr){
      qr.style.display="none";
    }
    info.textContent="Preencha os dados do cartão para concluir o pagamento.";
  }else{
    if(cardForm){
      cardForm.style.display="none";
    }
    if(qr){
      qr.style.display="grid";
    }
    info.textContent=`Use este QR Code para finalizar o pagamento em ${method}. Banco Mercado Pago • Agência 0001 • Conta 86456720223.`;
    renderPaymentQr();
  }
  modal.style.display="flex";
}

function closePaymentModal(){
  const modal=document.getElementById("paymentModal");
  if(modal){
    modal.style.display="none";
  }
}

function confirmPayment(){
  closePaymentModal();
  if(selectedPlan){
    alert(`Pagamento recebido para o plano ${selectedPlan}.`);
  }
}

function toggleBadgeFlash(){
  const badges=document.querySelectorAll(".badge");
  badges.forEach(badge=>badge.classList.add("badge-hidden"));
  setTimeout(()=>badges.forEach(badge=>badge.classList.remove("badge-hidden")),220);
}

/* ===== FOTO DE PERFIL ===== */
function trocarFoto(){document.getElementById("uploadFoto").click();}

document.getElementById("uploadFoto").addEventListener("change",e=>{
  const file=e.target.files[0];
  if(!file) return;
  const reader=new FileReader();
  reader.onload=()=>{
    document.getElementById("avatar").src=reader.result;
    document.getElementById("avatarMini").src=reader.result;
    const avatarMiniTop=document.getElementById("avatarMiniTop");
    if(avatarMiniTop){
      avatarMiniTop.src=reader.result;
    }
    localStorage.setItem("arv_avatar",reader.result);
  };
  reader.readAsDataURL(file);
});

const savedAvatar=localStorage.getItem("arv_avatar");
if(savedAvatar){
  document.getElementById("avatar").src=savedAvatar;
  document.getElementById("avatarMini").src=savedAvatar;
  const avatarMiniTop=document.getElementById("avatarMiniTop");
  if(avatarMiniTop){
    avatarMiniTop.src=savedAvatar;
  }
}

const savedTheme=localStorage.getItem("arv_theme")||"dark";
setTheme(savedTheme,true);

function setTheme(mode,skipSave){
  const isLight=mode==="light";
  const storedMode=isLight?"light":"dark";
  const root=document.documentElement;
  root.style.setProperty("--bg",isLight?"#f4f4f5":"#080808");
  root.style.setProperty("--card",isLight?"#ffffff":"#141414");
  root.style.setProperty("--soft",isLight?"#e5e7eb":"#1f1f1f");
  root.style.setProperty("--text",isLight?"#0f172a":"#fff");
  root.style.setProperty("--muted",isLight?"#475569":"#9ca3af");
  root.style.setProperty("--red","#e50914");
  root.style.setProperty("--badge",isLight?"#2563eb":"#e50914");
  root.style.setProperty("--gold",isLight?"#b48a2b":"#c7a45b");
  root.style.setProperty("--nav-bg",isLight?"linear-gradient(180deg,rgba(255,255,255,.9),#e5e7eb)":"linear-gradient(180deg,rgba(12,12,12,.85),#000)");
  root.style.setProperty("--nav-border",isLight?"rgba(0,0,0,.08)":"rgba(255,255,255,.05)");
  root.style.setProperty("--nav-text",isLight?"#475569":"#a5a5a5");
  root.style.setProperty("--nav-active",isLight?"#0f172a":"#fff");
  document.body.style.background=isLight
    ? "radial-gradient(circle at 20% 20%,rgba(120,120,120,.15),transparent 30%),#f4f4f5"
    : "radial-gradient(circle at 20% 20%,rgba(63,63,63,.22),transparent 30%),#080808";

  document.querySelectorAll(".theme-card").forEach(card=>{
    card.classList.toggle("active",card.dataset.mode===storedMode);
  });

  if(!skipSave){
    localStorage.setItem("arv_theme",storedMode);
  }
}

lucide.createIcons();
start();

document.querySelectorAll(".toggle").forEach(toggle=>{
  toggle.addEventListener("click",()=>{
    toggle.classList.toggle("active");
  });
});
