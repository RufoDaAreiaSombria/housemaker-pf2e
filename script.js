const casaformfactors = {
    caravan1: "📜 <i>Form Benefit (3rd): </i>Escolha se a Caravana se locomove por mar ou terra. Se a casa for pelo menos nível 9, pode escolher voo em vez disso. Caravanas reduzem Pontos de Defesa ganhos por quartos com o traço Emplacement em 1 (normalmente para 0) e não podem ter Teleportation Chambers instaladas.<br> <strong>- Mover Caravana: </strong>A caravana se move dois hex, ou um hex se estiver voando.",
    caravan2: "📜 <i>Greater Benefit (7th): </i>Quando mover a Caravana, apenas um personagem precisa realizar a atividade enquanto os outros podem utilizar seu downtime para o que quiserem sem serem deixados para trás.",
    caravan3: "📜 <i>Major Benefit (15th): </i>Escolha um terreno entre aquático, ártico, deserto, floresta, montanha, planície, céu, pântano ou subterrâneo para ser o terreno favorito da Caravana. Terrenos difíceis maiores se tornam apenas terrenos difíceis padrão nesse terreno, e terreno difícil padrão conta como terreno regular.",
    caravan4: "📜 <i>Legendary Benefit (20th): </i>Quando mover a Caravana, o movimento dela é dobrado.",
    donjon1: "📜 <i>Form Benefit (3rd): </i>A casa ganha um Keep e uma Gatehouse que não contam no número de quartos. Também recebe o talento Extensive Fortifications como feat bônus.",
    donjon2: "📜 <i>Greater Benefit (7th): </i>A casa ganha uma Barracks (Watchhouse) que não conta no número de quartos. Você automaticamente recruta tropas para essa barracks. Sempre que a casa subir de nível, você pode trocar a tropa por outra tropa que se encaixe nos requisitos da barracks e da casa.",
    donjon3: "📜 <i>Major Benefit (15th): </i>Cada barracks da casa pode hospedar duas tropas em vez de uma. Você automaticamente recruta uma tropa adicional por conta do Greater Benefit. Dungeons e Expanded Cells tem a capacidade de criaturas dobrada, e Gauntlets tem a capacidade de armadilhas dobrada.",
    donjon4: "📜 <i>Legendary Benefit (20th): </i>Localidades amigaveis a casan que entrem em cerco ganham bônus de Pontos Defensivos igual ao número de quartos diferentes com o traço Emplacement que a casa possua. Além disso, a casa automaticamente recupera 1 Ponto Defensivo a cada dia durante um cerco.",
    enclave1: "📜 <i>Form Benefit (3rd): </i>A casa ganha um Guest Quarters (Guest Bedroom) que não conta no número de quartos. Recebe +2 de circunstância para Recrutar tropas caso tenha o quarto apropriado para ela. Sempre que realizar Access Amenities que te gere itens consumiveis, você recebe um item consumivel adicional.",
    enclave2: "📜 <i>Greater Benefit (7th): </i>Quando realizar Access Amenities, pode escolher uma opção qualquer adicional.",
    enclave3: "📜 <i>Major Benefit (15th): </i>A feature Central Attraction aumenta em 2. Recebe +2 de circunstância para Gather Information no hex.",
    enclave4: "📜 <i>Legendary Benefit (20th): </i>Quartos com o traço Annex não contam no limite de quartos da casa.",
    guildhall1: "📜 <i>Form Benefit (3rd): </i>A capacidade de quartos da casa aumenta igual ao número de feats que ela possui. A casa recebe um Guest Quarters (Guest Bedroom), uma Tavern OU um Trade Hall que não conta no número de quartos.",
    guildhall2: "📜 <i>Greater Benefit (7th): </i>A casa ganha uma Storefront (Grand) que não conta no número de quartos. Recebe +2 de circunstância pra fazer Earn Income.",
    guildhall3: "📜 <i>Major Benefit (15th): </i>Você recebe a opção Requisition Advice para Access Amenities.: <br> <strong>- Requisition Advice: </strong>Você se torna treinado em uma Lore a sua escolha e você recebe +2 de status em testes de Lore.",
    guildhall4: "📜 <i>Legendary Benefit (20th): </i>A casa recebe uma Teleportation Chamber que não conta no número de quartos. Você pode realizar a ação Set Up Outpost durante downtime: <br> <strong> - Set Up Outpost: </strong>Você constroi um Outpost em uma localidade de nível 5 ou superior. Esse Outpost tem uma Teleportation Chamber, e você pode usá-la para fazer Access Amenities como se estivesse na casa. Você só pode ter um Outpost por vez.",
    refuge1: "📜 <i>Form Benefit (3rd): </i>O número de quartos da casa é reduzido em 1. A casa ganha um Reconnaissance Den e duas Escape Routes que não contam no número de quartos. Tentativas de encontrar a casa sempre são feitas contra a Class CD da casa. As únicas entradas e saídas da casa são via Escape Routes. Enquanto todas as entradas não tiverem sido descobertas durante um cerco, reduza a perda de Pontos de Defesa por entrada bloqueada em 1, para o mínimo de 0.",
    refuge2: "📜 <i>Greater Benefit (7th): </i>A casa tenta fazer counteract contra tentativas de detecção, revelação ou scrying com um modificador igual a CD da casa -8 e rank igual metade do nível da casa arredondado pra cima. Nível 11, você pode escolher que a Central Attraction da casa apareça em um hex adjacente a casa em vez de no próprio hex.",
    refuge3: "📜 <i>Major Benefit (15th): </i>A CD da casa contra tentativas de localização recebe um bônus igual ao número de feats que a casa tem. Você pode fazer a atividade Realocate Hideout durante downtime: <br> <strong> - Realocate Hideout: </strong>Selecione um hex adjacente a casa. Ao longo da semana, a casa se moverá para lá, e então ela não pode ser upgradeada nem novos quartos construídos por um mês. Se a Central Attraction não estiver mais em um hex adjacente ao hex da casa, ela lentamente se move para um.",
    refuge4: "📜 <i>Legendary Benefit (20th): </i>Quando usa Realocate Hideout, a casa se move em apenas um dia devido a magias de teleporte. Ela pode se mover para qualquer hex em até 5 hex de alcance, não mais apenas adjacente.",
    sanctuary1: "📜 <i>Form Benefit (3rd): </i>A casa ganha o traço Arcano, Divino, Oculto ou Primal a sua escolha. Recebe +2 de circunstância pra recrutar criaturas que conjurem magias do traço da casa. Recebe a opção Draw Magic para Access Amenities.",
    sanctuary2: "📜 <i>Greater Benefit (7th): </i>A casa ganha Focused Magic como feat adicional. Quando conjura um ritual, a casa conta como conjurador secundario, fazendo testes da perícia da tradição da casa com proficiência igual a CD da casa e bônus igual a 4 + nível + proficiência da CD.",
    sanctuary3: "📜 <i>Major Benefit (15th): </i>Quando faz Access Amenities, pode realizar uma opção adicional entre Draw Magic, Staff Attunement, Wand Recalibration, ou uma opção dependendo da tradição da casa entre: <br> <strong>- Arcana: </strong>Plunder Scrolls <br> <strong>- Divina: </strong>Plunder Medicine ou Plunder Water <br> <strong>- Oculta: </strong>Plunder Talismans <br> <strong>- Primal: </strong>Plunder Medicine ou Plunder Poison ",
    sanctuary4: "📜 <i>Legendary Benefit (20th): </i>Selecione três magias comuns de rank 9 ou inferior da tradição da casa. No começo de uma rodada de um encontro no hex, a casa pode auxiliar os jogadores. Ela age em iniciativa 40 e pode conjurar uma magia, saindo da posição de um dos personagens, usando a CD da casa como CD da magia ou modificador de ataque igual a CD da casa -10. A magia é aumentada para rank 9 se for de rank menor. Cada magia só pode ser conjurada uma vez por dia.",
}

const casafeats = {
  mines: "<i>📜 Bountiful Mines: </i>Toda semana, a casa gera materiais de minério bruto no valor de um sucesso de Earn Income Expert do nível da casa -1 x7. Pode ser trocado por material equivalente de material precioso de minério comum ou incomum (como prata ou adamante) de nível da casa ou menor.",
  extraentry: "<i>📜 Extradimensional Entry: </i>A casa fica localizada em um demiplano em vez do plano material. Enquanto a entrada estiver fechada efeitos não conseguem atravessar o outro lado.",
  freerealstate: "<i>📜 Free Real State: </i>Aumenta o limite de quartos da casa em 2.",
  hazardrous: "<i>📜 Hazardrous Hallways: </i>Selecione um hazard simples com traço Enviromental ou Trap de nível menor que a casa. A casa recebe um número dessas armadilhas igual metade do seu nível, e elas podem ser colocadas apenas na área dos quartos da casa, como os corredores. No começo de cada dia, qualquer armadilha ativada é armada novamente automaticamente.",
  lumber: "<i>📜 Industrious Lumber Yards: </i>Toda semana, a casa gera materiais de minério bruto no valor de um sucesso de Earn Income Expert do nível da casa -1 x7. Pode ser trocado por material equivalente de material precioso de madeiras.",
  camouflage: "<i>📜 Natural Camouflage: </i>Tentativas de encontrar a casa sempre são feitas contra a CD da casa.",
  farmland: "<i>📜 Rich Farmland: </i>Toda semana, a casa gera materiais de minério bruto no valor de um sucesso de Earn Income Trained do nível da casa -1 x7. Além disso, a casa e seus habitantes ficam protegidos de eventos de fome ou escaces de comida de larga escala.",
  abomination: "<i>📜 Abomination Vault: </i>Pode sempre tentar recrutar criaturas sem o traço humanoide que sejam comuns ou incomuns. Barracks da casa podem hospedar criaturas não humanoides, assim como criaturas únicas e não apenas tropas.",
  alternate: "<i>📜 Alternate Movement: </i>Recebe um tipo de movimento adicional que a caravana ainda não tenha.",
  arcaneforge: "<i>📜 Arcane Forge: </i>A casa ganha um Nexus que não conta no número de quartos. A casa pode prover magias para craftar itens que requerem magias se o rank delas for menor que a metade do nível da casa. Recebe +1 de circunstância pra craftar itens com o mesmo traço mágico da casa.",
  caravanguards: "<i>📜 Caravan Guards: </i>A casa ganha uma Barracks (Watchhouse) que não conta no número de quartos. Uma tropa é automaticamente recrutada para se hospedar nessa Barracks.",
  communitygarden: "<i>📜 Community Garden: </i>A casa ganha um Garden que não conta no número de quartos. Recebe +1 de circunstância em testes de Diplomacia e Enganação com criaturas que moram no hex da casa.",
  deepreserves: "<i>📜 Deep Reserves: </i>Quando faz Access Amenities, você pode performar uma opção com 'Plunder' no nome em adição a outras opções que selecionar.",
  efficientworkspaces: "<i>📜 Efficient Workspaces: </i>Quando realiza uma atividade de downtime, como Craft ou Earn Income, a cada 3 dias recebe 1 dia adicional gratuito.",
  extensivefortifications: "<i>📜 Extensive Fortifications: </i>Os Pontos de Defesa ganhos por quartos com o traço Emplacement aumentam em 1. Criaturas recebem +1 de circunstância em atividades de downtime voltadas para siege.",
  friends: "<i>📜 Friends in Low Places: </i>Você tem Underground Network dentro do hex da casa. Ao comprar itens no hex, trata a raridade do item como um passo menor. Recebe +2 de circunstância pra recrutar criminosos.",
  hustle: "<i>Hustle: </i>📜 Durante o Hustle, dobra o movimento da caravana. Criaturas movendo a caravana ficam fatigadas até passarem um dia descansando. A caravana pode fazer Hustle por um número de dias igual ao número de feats que ela tem, e só pode fazer Hustle de novo após uma semana.",
  ironclad: "<i>📜 Ironclad Defenses: Armadilhas e armas de cerco da casa recebem bônus na CD igual a quantidade de feats que a casa tem. A primeira vez no dia que um hazard simples da casa for desativado, ela se arma novamente em um minuto.</i>",
  legitimate: "<i>📜 Legitimate Business: A casa ganha uma Storefront e uma Escape Route que não contam no número de quartos. A Escape Route liga a casa até a Storefront. A Storefront conta como uma parte separada da casa e descobrir ela não conta como descobrir a casa. Você pode designar qualquer número de quartos para o Negócio Legitmo, conectando eles a Storefront e fazendo com que descobrir eles também não faça a casa em si ser descoberta.</i>",
  pathfinder: "<i>📜 Pathfinder Outpost: A casa fica associada a Pathfinder Society. Quando comprar itens em locais próximos a casa, você ganha acesso a qualquer item que membros da Pathfinder Society tem acesso. Você recebe +2 de circunstância pra recrutar criaturas humanoides que podem ser encontradas na Pathfinder Society.</i>",
  ritualnexus: "<i>📜 Ritual Nexus: A casa ganha um Ritual Chamber que não conta no limite de quartos. Conjuradores Secundários em rituais recebem +2 de status no teste. Se a casa for no mínimo nível 11, qualquer componente material necessário para rituais pode ser encontrado e comprado no hex da casa, desde que não sejam únicos ou artefatos.</i>",
  crowd: "<i>📜 Vanish Into the Crowd: Durante o modo de exploração, área em volta e dentro da casa contam como terreno difícil causado por multidões. Criaturas amigáveis a casa podem ignorar esse terreno. Quando faz Hide, Sneak ou Avoid Notice em volta da casa, você recebe +2 de circunstância no teste.</i>",
  warfareprep: "<i>📜 Warfare Preparations: Quando faz Access Amenities, pode fazer uma opção adicional que venha de uma sala com o traço Emplacement.</i>",
  wardens: "<i>📜 Watchful Wardens: Quando usar a CD de Percepção de criaturas amigáveis a casa, pode usar a CD da casa se for maior. Criaturas amigaveis a casa recebem +2 de circunstância pra Scout Blockade e Track Patrols.</i>",
  blessedground: "<i>📜 Blessed Ground: Selecione uma divindade. A casa, assim como uma área de 500 foot em volta dela, fica sob os efeitos do ritual Consecrate para essa divindade. Se a casa for de nível 17 ou mais, os efeitos de Consecrate são aumentados para rank 7.</i>",
  counter: "<i>📜 Counter-Magical Warding: Criaturas amigáveis a casa recebem +1 de status pra resistir a efeitos mágicos se estiverem no hex. Quando uma magia hostil vinda de fora da casa tenta atingir a casa ou localizar a casa, a casa faz um counteract com modificador igual a CD da casa -8 e rank igual a metade do nível da casa arredondado pra cima.</i>",
  focusedmagic: "<i>📜 Focused Magic: Recebe as opções Heightened Focus e Additional Magic para Access Amenities.</i>",
  lockdown: "<i>📜 Initiate Lockdown: Usa duas ações para falar uma palavra de comando, bloqueando paredes internas e portas com Wall of Force, tentando dar counteract em qualquer efeito de teleporte usado para entrar ou sair da casa e tocando uma frase de 25 palavras na casa inteira enquanto ela é trancada. Ao selecionar esse feat, escolha um lugar na casa onde uma runa de emergência será localizada. Uma criatura pode gastar 3 ações de Interact consecutivas pra desativar o lockdown. Se não for desativado, o lockdown dura 24 horas.</i>",
  pillarcommunity: "<i>📜 Pillar of the Community: Você recebe +2 de circunstância pra Gather Information, Gossip, Investigate e Make an Impression dentro do hex. Uma vez por dia, pode conjurar Charm dentro do hex, usando a sua CD de magia ou a CD da casa, o que for maior. Independente de passar ou falhar no teste, a criatura não sabe que você tentou encantá-la.</i>",
  safeguards: "<i>📜 Sentries and Safeguards: Selecione três opções entre Mensagens Assustadoras, Portas Falsas, Corredores com Névoa, Trancas Mágicas e Corredores com Vento. Se a casa for nível 13 ou mais, pode escolher Corredores Confusos e Miragem. A casa ganha esses três sistemas mágicos de segurança. Criaturas que possuam a senha são imunes e não ativam os sistemas de segurança.</i>",
  tyrant: "<i>📜 Tyrant's Grasp: VOcê recebe +2 de circunstância pra Coerce, Gather Information e Make an Impression no hex. Uma vez por dia, pode conjurar Command dentro do hex, usando a sua CD de magia ou a CD da casa, o que for maior.</i>",
  communitycenter: "<i>📜 Community Center: O nível da Central Attraction aumenta em 2.</i>",
  councilthieves: "<i>📜 Council of Thieves: A casa ganha uma Message Room que não conta no número de quartos. Essa Message Room está conectada a uma rede de contatos de espiões, ladrões e figuras clandestinas. Apenas locais de nível 10 ou maior podem ter uma conexão com ela. Uma vez por dia, você pode gastar um minuto pegando informações da sua rede de contatos pra fazer um Recall Knowledge com +2 de circunstância. Se passar, você ganha uma informação ou contexto adicional. A frequência dessa habilidade é separada pra cada localidade na qual a sua rede de contatos está conectada.</i>",
  acquisition: "<i>📜 Ease of Acquisition: A casa ganha uma Auction Room que não conta no número de quartos. O nível dos itens vendidos no hex aumenta em 4. Além disso, itens consumiveis incomuns podem ser comprados como se fossem comuns.</i>",
  epicenter: "<i>📜 Epicenter of Trade: Você pode comprar itens como se eles fossem uma raridade a menos desde que eles sejam de nível menor que a casa, ou que o nível menor que a casa + 4 caso possua o feat Ease of Acquisition.</i>",
  planar: "<i>📜 Planar Lodging: Quando uma criatura fecha a porta da casa, a porta pode ficar invisível. Além disso, a casa ganha um número de servos mágicos igual a 3 vezes o nível da casa, como Phantasmal Minion, mas eles são visíveis com a aparência que você escolher.</i>",
  strenghtthousands: "<i>📜 The Strenght of Thousands: Você ganha +1 de circunstância em atividades de downtime. Você sempre pode achar conjuradores secundários para rituais. Eles contam como sendo expert na perícia e com um bônus igual ao nível da casa.</i>",
  additionalterrain: "<i>📜 Additional Terrain: Selecione dois terrenos adicionais para serem terrenos favoritos da caravana.</i>",
}

const casarooms = {
  airship: ["🛩️ <i>Airship Dock: </i>", "a", 1000],
  alchemist1: ["⚗️ <i>Alchemist's Laboratory: </i>", "a", 80],
  alchemist2: ["⚗️ <i>Alchemist's Laboratory (Sophisticated): </i>", "a", 850],
  apothecary1: ["💊 <i>Apothecary: </i>", "a", 45],
  apothecary2: ["💊 <i>Apothecary (Grand): </i>", "a", 600],
  archive: ["🗄️ <i>Archive: </i>", "a", 45],
  armory1: ["🗡️ <i>Armory: </i>", "a", 1000],
  armory2: ["🗡️ <i>Armory (Masterwork): </i>", "a", 10000],
  atrium1: ["🏛️ <i>Atrium: </i>", "a", 200],
  atrium2: ["🏛️ <i>Atrium (Grand): </i>", "a", 1200],
  auction: ["🔨 <i>Auction Room: </i>", "a", 500],
  auditorium1: ["🎭 <i>Auditorium: </i>", "a", 200],
  auditorium2: ["🎭 <i>Auditorium (Grand): </i>", "a", 1200],
  aviary: ["🦜 <i>Aviary: </i>", "a", 160],
  banner: ["🚩 <i>Banner Pole: </i>", "a", 1300],
  barracks1: ["🛏️ <i>Barracks (Watchhouse): </i>", "a", 320],
  barracks2: ["🛏️ <i>Barracks: </i>", "a", 1250],
  barracks3: ["🛏️ <i>Barracks (Garrison): </i>", "a", 5600],
  barracks4: ["🛏️ <i>Barracks (Bastion): </i>", "a", 31500],
  bathroom: ["🛁 <i>Bathroom: </i>", "a", 45],
  battle: ["⚔️ <i>Battle Ring: </i>", "a", 850],
  binding: ["🔗 <i>Binding Chamber: </i>", "a", 900],
  boat1: ["⛵ <i>Boat House: </i>", "a", 25],
  boat2: ["⛵ <i>Boat House (Deckyard): </i>", "a", 200],
  boundary1: ["🌐 <i>Boundary Chamber: </i>", "a", 6200],
  boundary2: ["🌐 <i>Boundary Chamber (Planar Gate): </i>", "a", 6200],
  boundary3: ["🌐 <i>Boundary Chamber (Portal Chamber): </i>", "a", 6200],
  brewery1: ["🍺 <i>Brewery: </i>", "a", 25],
  brewery2: ["🍺 <i>Brewery (Destilery): </i>", "a", 415],
  carriage1: ["🚗 <i>Carriage House: </i>", "a", 25],
  carriage2: ["🚗 <i>Carriage House (Garage): </i>", "a", 200],
  carriage3: ["🚗 <i>Carriage House (Depot): </i>", "a", 1160],
  cellar: ["🍷 <i>Cellar: </i>", "a", 40],
  closet: ["👗 <i>Closet: </i>", "a", 25],
  conservatory: ["🌿 <i>Conservatory: </i>", "a", 60],
  crypt: ["⚰️ <i>Crypt: </i>", "a", 70],
  wall1: ["🧱 <i>Defensive Wall (Wooden): </i>", "a", 500],
  wall2: ["🧱 <i>Defensive Wall (Stone): </i>", "a", 2000],
  wall3: ["🧱 <i>Defensive Wall (Steel-Reinforced): </i>", "a", 6000],
  wall4: ["🧱 <i>Defensive Wall (Standart Adamantine): </i>", "a", 14000],
  wall5: ["🧱 <i>Defensive Wall (High Grade Adamantine): </i>", "a", 28000],
  dinning1: ["🍽️ <i>Dinning Hall: </i>", "a", 45],
  dinning2: ["🍽️ <i>Dinning Hall (Grand): </i>", "a", 350],
  dungeon1: ["⛓️ <i>Dungeon (Holding Cells): </i>", "a", 250],
  dungeon2: ["⛓️ <i>Dungeon: </i>", "a", 250],
  dungeon3: ["⛓️ <i>Dungeon (Bastile): </i>", "a", 6100],
  escape: ["🏃 <i>Escape Route: </i>", "a", 35],
  execution: ["🪓 <i>Execution Balcony: </i>", "a", 300],
  expandedcells: ["🔒 <i>Expanded Cells: </i>", "a", 250],
  falconry: ["🦅 <i>Falconry Tower: </i>", "a", 160],
  flesh: ["🧬 <i>Flesh Laboratory: </i>", "a", 900],
  gaming1: ["🎲 <i>Gaming Hall (Gambler's Den): </i>", "a", 50],
  gaming2: ["🎲 <i>Gaming Hall: </i>", "a", 850],
  garden: ["🌸 <i>Garden: </i>", "a", 60],
  gatehouse1: ["🏰 <i>Gatehouse: </i>", "a", 400],
  gatehouse2: ["🏰 <i>Gatehouse (Adamantine): </i>", "a", 14000],
  gauntlet1: ["🥊 <i>Gauntlet (Basic): </i>", "a", 450],
  gauntlet2: ["🥊 <i>Gauntlet: </i>", "a", 1200],
  gauntlet3: ["🥊 <i>Gauntlet (Fortified): </i>", "a", 2800],
  gauntlet4: ["🥊 <i>Gauntlet (Crucible): </i>", "a", 21500],
  guestquarters1: ["🛌 <i>Guest Quarters (Guest Bedroom): </i>", "a", 45],
  guestquarters2: ["🛌 <i>Guest Quarters (Inn): </i>", "a", 300],
  guestquarters3: ["🛌 <i>Guest Quarters: </i>", "a", 1200],
  guestquarters4: ["🛌 <i>Guest Quarters (Embassy): </i>", "a", 3000],
  guestquarters5: ["🛌 <i>Guest Quarters (Luxury Suites): </i>", "a", 3600],
  curiosities1: ["🧿 <i>Hall of Curiosities: </i>", "a", 130],
  curiosities2: ["🧿 <i>Hall of Curiosities (Exquisite): </i>", "a", 845],
  pool: ["🏊 <i>Indoor Pool: </i>", "a", 140],
  infirmary1: ["🏥 <i>Infirmary (Medicine Closet): </i>", "a", 30],
  infirmary2: ["🏥 <i>Infirmary: </i>", "a", 430],
  infirmary3: ["🏥 <i>Infirmary (Medical Ward): </i>", "a", 5400],
  keep: ["🏯 <i>Keep: </i>", "a", 440],
  loading: ["📦 <i>Loading Room: </i>", "a", 55],
  machinarium: ["⚙️ <i>Machinarium: </i>", "a", 140],
  menagerie: ["🐾 <i>Menagerie: </i>", "a", 50],
  message: ["📜 <i>Message Room: </i>", "a", 6300],
  nexus: ["🪄 <i>Nexus: </i>", "a", 6200],
  orrery: ["🌌 <i>Orrery: </i>", "a", 850],
  reconnaissance: ["👁️ <i>Reconnaissance Den: </i>", "a", 160],
  ritual1: ["🕯️ <i>Ritual Chamber: </i>", "a", 200],
  ritual2: ["🕯️ <i>Ritual Chamber: </i>", "a", 600],
  ritual3: ["🕯️ <i>Ritual Chamber: </i>", "a", 1200],
  runeforge: ["🔨 <i>Runeforge: </i>", "a", 5400],
  saloon: ["🥃 <i>Saloon: </i>", "a", 45],
  sanctum: ["🔮 <i>Sanctum: </i>", "a", 850],
  scriptorium: ["✍️ <i>Scriptorium: </i>", "a", 45],
  scrying: ["👁️‍🗨️ <i>Scrying Room: </i>", "a", 850],
  shrine1: ["⛪ <i>Shrine Room: </i>", "a", 45],
  shrine2: ["⛪ <i>Shrine Room: </i>", "a", 300],
  shrine3: ["⛪ <i>Shrine Room: </i>", "a", 1200],
  stables: ["🐎 <i>Stables: </i>", "a", 200],
  storefront1: ["🏪 <i>Storefront: </i>", "a", 35],
  storefront2: ["🏪 <i>Storefront (Grand): </i>", "a", 350],
  storefront3: ["🏪 <i>Storefront (Emporium): </i>", "a", 5500],
  study: ["📖 <i>Study: </i>", "a", 45],
  tavern: ["🍺 <i>Tavern: </i>", "a", 45],
  teleport: ["🌀 <i>Teleportation Chamber: </i>", "a", 6200],
  torture: ["🩸 <i>Torture Chamber: </i>", "a", 425],
  tradehall1: ["💱 <i>Trade Hall: </i>", "a", 200],
  tradehall2: ["💱 <i>Trade Hall: </i>", "a", 1200],
  training1: ["🏋️ <i>Training Ground: </i>", "a", 200],
  training2: ["🏋️ <i>Training Ground (Drill Field): </i>", "a", 1200],
  translocation: ["🚪 <i>Translocation Room: </i>", "a", 6200],
  trauma: ["🩹 <i>Trauma Ward: </i>", "a", 5400],
  vault1: ["🔐 <i>Vault: </i>", "a", 70],
  vault2: ["🔐 <i>Vault (Warded): </i>", "a", 5000],
  vault3: ["🔐 <i>Vault (Antimagic): </i>", "a", 28000],
  venarium1: ["☠️ <i>Venarium: </i>", "a", 50],
  venarium2: ["☠️ <i>Venarium (Grand): </i>", "a", 600],
  war1: ["🧭 <i>War Room: </i>", "a", 50],
  war2: ["🧭 <i>War Room (Exquisite): </i>", "a", 850],
  wine: ["🍷 <i>Wine Cellar: </i>", "a", 60],
  workshop1: ["🛠️ <i>Workshop: </i>", "a", 50],
  workshop2: ["🛠️ <i>Workshop (Professional): </i>", "a", 430],
  workshop3: ["🛠️ <i>Workshop (Exquisite): </i>", "a", 5400],
};



const casaaccess = {
  casahall: "🏰 <i>Requisition Advice: </i>",
  casasanct: "✨ <i>Draw Magic: </i>",
  focusedmagic: "🔮 <i>Hightened Focus: </i>aaa. <br> 💫 <i>Additional Magic: </i>",
  alchemist: "⚗️ <i>Plunder Alchemy: </i>aaa <br> 🧪 <i>Alchemist's Preparations: </i>",
  apothecary: "💊 <i>Plunder Medicine: </i>aaa <br> 🌿 <i>Herbalist's Preparations: </i>",
  barracks: "🏕️ <i>Shore Leave: </i>",
  binding: "🔗 <i>Awaken Eidolon: </i>",
  boundary: "🌍 <i>Wedge Portal: </i> <br> 🌐 <i>Entwine Portal: </i>",
  brewery: "🍻 <i>Plunder Alcohol: </i> <br> 💉 <i>Plunder Narcotics: </i>",
  cellar: "🍞 <i>Plunder Food Reserves: </i> <br> 🍖 <i>Plunder Rations: </i>",
  closet: "👗 <i>Dress for Success: </i> <br> 🕵️‍♀️ <i>Perfect Disguise: </i>",
  falconry: "🦅 <i>Requisition Falcon: </i>",
  gatehouse: "🛡️ <i>Hardened Wills: </i>",
  curiosities: "🔮 <i>Plunder Talismans: </i> <br> ✨ <i>Talismancer's Preparations: </i>",
  keep: "🏰 <i>Guardian's Preparations: </i> <br> 🛡️ <i>Prepare Defenses: </i>",
  kitchen: "🍴 <i>Chef's Preparations: </i>",
  library: "📚 <i>Library Card: </i> <br> 🧙‍♂️ <i>Spellcaster's Preparations: </i>",
  loading: "💣 <i>Plunder Ammunition: </i> <br> 💥 <i>Plunder Explosives: </i>",
  machinarium: "⚙️ <i>Plunder Doohickeys: </i> <br> 🛠️ <i>Inventor's Preparations: </i>",
  menagerie: "🐾 <i>Pamper Menagerie: </i>",
  message: "📜 <i>Spread Ahead: </i>",
  necromancer: "⚰️ <i>Study the Grave: </i>",
  nexus: "🪄 <i>Wand Recalibration: </i> <br> 🌟 <i>Staff Attunement: </i>",
  orrery: "🌌 <i>Otherworldy Empowerment: </i>",
  runeforge: "🔨 <i>Runesmith Preparations: </i>",
  sanctum: "🔮 <i>Bolster Familiar: </i>",
  scriptorium: "📜 <i>Plunder Scrolls: </i> <br> ✍️ <i>Scribe's Preparations: </i>",
  shrine: "⛪ <i>Plunder Water: </i> <br> 💧 <i>Boon of Favor: </i>",
  stables: "🐎 <i>Companion Speed: </i>",
  training: "⚔️ <i>Skirmish Preparation: </i> <br> 🏋️‍♂️ <i>Train Companions: </i> <br> 🥋 <i>Fighter's Preparations: </i>",
  venarium: "☠️ <i>Plunder Poisons: </i> <br> 🧪 <i>Poisoner's Preparations: </i>",
  war: "🔰 <i>Commander's Preparations: </i>",
}


const casarenda = {
  mines: ["⛏️ Bountiful Mines", 0, 1, 2, 3, 5, 7, 14, 17, 21, 28, 35, 42, 56, 70, 105, 140, 196, 210, 315, 420],
  lumber: ["🌲 Industrious Lumber Yards", 0, 1, 2, 3, 5, 7, 14, 17, 21, 28, 35, 42, 56, 70, 105, 140, 196, 210, 315, 420],
  farmland: ["🌾 Rich Farmland", 0, 1, 2, 3, 4, 6, 10, 14, 17, 21, 28, 35, 42, 49, 56, 70, 91, 105, 140, 210],
  guestquarters1: ["🛌 Guest Quarters (Guest Bedrooms)", 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
  guestquarters2: ["🛌 Guest Quarters (Inn)", 0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8],
  guestquarters3: ["🛌 Guest Quarters", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 50, 50, 50, 50, 50, 50, 50, 50, 50, 50],
  guestquarters4: ["🛌 Guest Quarters (Embassy)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 90, 90, 90, 90, 90, 90, 90, 90],
  guestquarters5: ["🛌 Guest Quarters (Luxury Suites)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 110, 110, 110, 110, 110, 110, 110],
  storefront1: ["🏪 Storefront", 0, 0, 1, 2, 3, 4, 6, 10, 14, 17, 21, 28, 35, 42, 49, 56, 70, 91, 105, 140],
  storefront2: ["🏪 Storefront (Grand)", 0, 0, 0, 0, 0, 0, 5, 7, 14, 21, 28, 35, 42, 56, 70, 105, 140, 196, 252, 315],
  storefront3: ["🏪 Storefront (Emporium)", 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 105, 140, 196, 252, 315, 490],
  tavern: ["🍺 Tavern", 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 2, 2, 2, 2, 2, 2, 2, 2, 10, 10, 10, 10, 40, 40],
  brewery1: ["🍺 Brewery", 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 2, 2, 2, 2, 20, 20],
  brewery2: ["🍺 Distillery", 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 0.2, 6, 6, 6, 6, 30, 30],
  kitchen2: ["🍳 Cookery", 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 4, 4, 4, 4, 20, 20],
  kitchen3: ["🔥 Hearth Hall", 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 8, 8, 8, 8, 40, 40],
  kitchen4: ["🍽️ Culinary Suite", 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 0.3, 12, 12, 12, 12, 60, 60]
};

const casavalores = [20, 35, 60, 100, 160, 250, 360, 500, 700, 1000, 1400, 2000, 3000, 4500, 6500, 10000, 15000, 24000, 40000, 70000]



function atualizarFeats() {
  const nivelSelecionado =
  document.querySelector('input[name="nivel"]:checked');

  const nivelAtual = nivelSelecionado
  ? Number(nivelSelecionado.id.replace('nivel', ''))
  : 0;

  const tipoSelecionado =
    document.querySelector('input[name="tipodacasa"]:checked');

  const estados = {
    caravan: document.getElementById('caravan')?.checked,
    refuge:  document.getElementById('refuge')?.checked,
    guildhall: document.getElementById('guildhall')?.checked,
    enclave:  document.getElementById('enclave')?.checked,
    donjon: document.getElementById('donjon')?.checked,
    sanctuary:  document.getElementById('sanctuary')?.checked,
    extraentry: document.getElementById('extraentry')?.checked,
    friends: document.getElementById('friends')?.checked,
  };

  const regras = [
    {
      id: 'mines',
      bloqueia: ['caravan']
    },
    {
      id: 'extraentry'
    },
    {
      id: 'freerealstate'
    },
    {
      id: 'hazardrous'
    },
    {
      id: 'lumber',
      bloqueia: ['caravan', 'refuge']
    },
    {
      id: 'farmland',
      bloqueia: ['caravan', 'refuge']
    },
    {
      id: 'camouflage',
      bloqueia: ['refuge']
    },
    {
        id: 'abomination',
        bloqueia: ['caravan', 'guildhall', 'enclave'],
        nivelMin: 5,
    },
    {
        id: 'alternate',
        bloqueia: ['donjon', 'enclave', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'arcaneforge',
        bloqueia: ['caravan', 'donjon', 'enclave', 'guildhall', 'refuge'],
        nivelMin: 5
    },
    {
        id: 'caravanguards',
        bloqueia: ['donjon', 'enclave', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'communitygarden',
        bloqueia: ['caravan', 'donjon', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'deepreserves',
        bloqueia: [],
        nivelMin: 5
    },
    {
        id: 'efficientworkspaces',
        bloqueia: ['caravan', 'donjon', 'enclave', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'extensivefortifications',
        bloqueia: [],
        nivelMin: 5
    },
    {
        id: 'friends',
        bloqueia: ['caravan', 'donjon', 'enclave', 'guildhall', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'hustle',
        bloqueia: ['donjon', 'enclave', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'ironclad',
        bloqueia: ['caravan', 'enclave', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'legitimate',
        bloqueia: ['caravan', 'donjon', 'enclave', 'guildhall', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'pathfinder',
        bloqueia: ['caravan', 'donjon', 'enclave', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'ritualnexus',
        bloqueia: ['caravan', 'donjon', 'enclave', 'guildhall', 'refuge'],
        nivelMin: 5
    },
    {
        id: 'crowd',
        bloqueia: ['caravan', 'donjon', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'warfareprep',
        bloqueia: [],
        nivelMin: 5
    },
    {
        id: 'wardens',
        bloqueia: ['caravan', 'enclave', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 5
    },
    {
        id: 'blessedground',
        bloqueia: [],
        nivelMin: 9
    },
    {
        id: 'counter',
        bloqueia: ['caravan', 'donjon', 'enclave', 'guildhall', 'refuge'],
        nivelMin: 9
    },
    {
        id: 'focusedmagic',
        bloqueia: [],
        nivelMin: 9
    },
    {
        id: 'lockdown',
        bloqueia: ['caravan', 'enclave'],
        nivelMin: 9
    },
    {
        id: 'pillarcommunity',
        bloqueia: ['caravan', 'donjon', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 9
    },
    {
        id: 'safeguards',
        bloqueia: [],
        nivelMin: 9
    },
    {
        id: 'tyrant',
        bloqueia: ['caravan', 'enclave', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 9
    },
    {
        id: 'communitycenter',
        bloqueia: ['refuge'],
        nivelMin: 13
    },
    {
        id: 'councilthieves',
        bloqueia: [],
        requer: ['friends'],
        nivelMin: 13
    },
    {
        id: 'acquisition',
        bloqueia: [],
        nivelMin: 13
    },
    {
        id: 'epicenter',
        bloqueia: ['caravan', 'donjon', 'enclave', 'refuge', 'sanctuary'],
        nivelMin: 13
    },
    {
        id: 'planar',
        bloqueia: [],
        requer: ['extraentry'],
        nivelMin: 13
    },
    {
        id: 'strenghtthousands',
        bloqueia: ['caravan', 'donjon', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 13
    },
    {
        id: 'additionalterrain',
        bloqueia: ['donjon', 'enclave', 'guildhall', 'refuge', 'sanctuary'],
        nivelMin: 17
    }
  ];

  regras.forEach(feat => {
    const podeMostrar =
    nivelAtual >= (feat.nivelMin || 1) &&
    tipoSelecionado &&
    !(feat.bloqueia || []).some(
      tipo => estados[tipo]
    ) &&
    (feat.requer || []).every(
      id => document.getElementById(id)?.checked
    );

    toggleFeat(feat.id, podeMostrar);
  });
}

function toggleFeat(id, mostrar) {
  const label = document.querySelector(`label[for="${id}"]`);
  const desc  = document.querySelector(`.${id}`);
  const input = document.getElementById(id);

  if (!label || !desc || !input) return;

  label.style.display = mostrar ? 'flex' : 'none';
  desc.style.display  = mostrar ? 'block' : 'none';

  if (!mostrar) {
    input.checked = false;
  }
}

function atualizarRooms() {
  const nivelSelecionado =
    document.querySelector('input[name="nivel"]:checked');

  const nivelAtual = nivelSelecionado
    ? Number(nivelSelecionado.id.replace('nivel', ''))
    : 0;

  const estados = {
    
  };

  const regrasRooms = [
    {
      id: 'airship',
      nivelMin: 10
    },
    {
      id: 'alchemist1',
      nivelMin: 4
    },
    {
      id: 'alchemist2',
      nivelMin: 10
    },
    {
      id: 'apothecary1',
      nivelMin: 3
    },
    {
      id: 'apothecary2',
      nivelMin: 9
    },
    {
      id: 'archive',
      requerGrupo: ['library'],
      nivelMin: 3
    },
    {
      id: 'armory1',
      requerGrupo: ['barracks'],
      requer: ['keep'],
      nivelMin: 10
    },
    {
      id: 'armory2',
      requerGrupo: ['barracks'],
      requer: ['keep'],
      nivelMin: 16
    },
    {
      id: 'atrium1',
      nivelMin: 6
    },
    {
      id: 'atrium2',
      nivelMin: 11
    },
    {
      id: 'auction',
      requerGrupo: ['tradehall'],
      nivelMin: 8
    },
    {
      id: 'auditorium1',
      nivelMin: 4
    },
    {
      id: 'auditorium2',
      nivelMin: 12
    },
    {
      id: 'aviary',
      nivelMin: 7
    },
    {
      id: 'banner',
      requer: ['keep'],
      nivelMin: 11
    },
    {
      id: 'barracks1',
      nivelMin: 7
    },
    {
      id: 'barracks2',
      nivelMin: 11
    },
    {
      id: 'barracks3',
      nivelMin: 15
    },
    {
      id: 'barracks4',
      nivelMin: 19
    },
    {
      id: 'bathroom',
      nivelMin: 3
    },
    {
      id: 'battle',
      nivelMin: 2
    },
    {
      id: 'binding',
      requerGrupo: ['ritual'],
      nivelMin: 5
    },
    {
      id: 'boat1',
      nivelMin: 3
    },
    {
      id: 'boat2',
      nivelMin: 8
    },
    {
      id: 'boundary1',
      requerGrupo: ['ritual'],
      nivelMin: 5
    },
    {
      id: 'boundary2',
      requerGrupo: ['ritual'],
      nivelMin: 11
    },
    {
      id: 'boundary3',
      requerGrupo: ['ritual'],
      nivelMin: 16
    },
    {
      id: 'brewery1',
      nivelMin: 2
    },
    {
      id: 'brewery2',
      nivelMin: 8
    },
    {
      id: 'carriage1',
      nivelMin: 2
    },
    {
      id: 'carriage2',
      nivelMin: 6
    },
    {
      id: 'carriage3',
      nivelMin: 11
    },
    {
      id: 'cellar',
      nivelMin: 2
    },
    {
      id: 'closet',
      nivelMin: 2
    },
    {
      id: 'conservatory',
      requerGrupo: ['library'],
      nivelMin: 5
    },
    {
      id: 'crypt',
      nivelMin: 6
    },
    {
      id: 'wall1',
      nivelMin: 2
    },
    {
      id: 'wall2',
      nivelMin: 5
    },
    {
      id: 'wall3',
      nivelMin: 8
    },
    {
      id: 'wall4',
      nivelMin: 10
    },
    {
      id: 'wall5',
      nivelMin: 18
    },
    {
      id: 'dinning1',
      nivelMin: 6
    },
    {
      id: 'dinning2',
      nivelMin: 14
    },
    {
      id: 'dungeon1',
      nivelMin: 3
    },
    {
      id: 'dungeon2',
      nivelMin: 7
    },
    {
      id: 'dungeon3',
      nivelMin: 15
    },
    {
      id: 'escape',
      nivelMin: 2
    },
    {
      id: 'execution',
      requerGrupo: ['dungeon'],
      nivelMin: 7
    },
    {
      id: 'expandedcells',
      requerGrupo: ['dungeon'],
      nivelMin: 6
    },
    {
      id: 'falconry',
      nivelMin: 5
    },
    {
      id: 'flesh',
      requerGrupo: ['dungeon'],
      nivelMin: 10
    },
    {
      id: 'gaming1',
      nivelMin: 3
    },
    {
      id: 'gaming2',
      nivelMin: 10
    },
    {
      id: 'garden',
      requerAlgum: ['alchemist', 'apothecary', 'brewery', 'cellar', 'venarium'],
      nivelMin: 1
    },
    {
      id: 'gatehouse1',
      requer: ['keep'],
      nivelMin: 8
    },
    {
      id: 'gatehouse2',
      requer: ['keep'],
      nivelMin: 16
    },
    {
      id: 'gauntlet1',
      nivelMin: 3
    },
    {
      id: 'gauntlet2',
      nivelMin: 8
    },
    {
      id: 'gauntlet3',
      nivelMin: 13
    },
    {
      id: 'gauntlet4',
      nivelMin: 18
    },
    {
      id: 'guestquarters1',
      nivelMin: 3
    },
    {
      id: 'guestquarters2',
      nivelMin: 7
    },
    {
      id: 'guestquarters3',
      nivelMin: 11
    },
    {
      id: 'guestquarters4',
      nivelMin: 13
    },
    {
      id: 'guestquarters5',
      nivelMin: 14
    },
    {
      id: 'curiosities1',
      nivelMin: 5
    },
    {
      id: 'curiosities2',
      nivelMin: 10
    },
    {
      id: 'pool',
      nivelMin: 5
    },
    {
      id: 'infirmary1',
      nivelMin: 2
    },
    {
      id: 'infirmary2',
      nivelMin: 8
    },
    {
      id: 'infirmary3',
      nivelMin: 15
    },
    {
      id: 'keep',
      nivelMin: 8
    },
    {
      id: 'kitchen1',
      nivelMin: 2
    },
    {
      id: 'kitchen2',
      nivelMin: 7
    },
    {
      id: 'kitchen3',
      nivelMin: 11
    },
    {
      id: 'kitchen4',
      nivelMin: 14
    },
    {
      id: 'library1',
      nivelMin: 3
    },
    {
      id: 'library2',
      nivelMin: 7
    },
    {
      id: 'library3',
      nivelMin: 14
    },
    {
      id: 'loading',
      requerGrupo: ['workshop'],
      nivelMin: 3
    },
    {
      id: 'machinarium',
      requerGrupo: ['workshop'],
      nivelMin: 5
    },
    {
      id: 'menagerie',
      nivelMin: 3
    },
    {
      id: 'message',
      nivelMin: 15
    },
    {
      id: 'necromancer',
      requer: ['crypt'],
      nivelMin: 6
    },
    {
      id: 'nexus',
      requerGrupo: ['workshop'],
      nivelMin: 1
    },
    {
      id: 'orrery',
      requerGrupo: ['library'],
      nivelMin: 5
    },
    {
      id: 'reconnaissance',
      nivelMin: 2
    },
    {
      id: 'ritual1',
      nivelMin: 3
    },
    {
      id: 'ritual2',
      nivelMin: 9
    },
    {
      id: 'ritual3',
      nivelMin: 17
    },
    {
      id: 'runeforge',
      requerGrupo: ['workshop'],
      nivelMin: 6
    },
    {
      id: 'saloon',
      requer: ['tavern'],
      nivelMin: 3
    },
    {
      id: 'sanctum',
      requerGrupo: ['library'],
      nivelMin: 7
    },
    {
      id: 'scriptorium',
      requerGrupo: ['library'],
      nivelMin: 5
    },
    {
      id: 'scrying',
      nivelMin: 10
    },
    {
      id: 'shrine1',
      nivelMin: 2
    },
    {
      id: 'shrine2',
      nivelMin: 8
    },
    {
      id: 'shrine3',
      nivelMin: 15
    },
    {
      id: 'stables',
      nivelMin: 2
    },
    {
      id: 'storefront1',
      nivelMin: 2
    },
    {
      id: 'storefront2',
      nivelMin: 7
    },
    {
      id: 'storefront3',
      nivelMin: 15
    },
    {
      id: 'study',
      requerGrupo: ['library'],
      nivelMin: 3
    },
    {
      id: 'tavern',
      nivelMin: 3
    },
    {
      id: 'teleport',
      nivelMin: 15
    },
    {
      id: 'torture',
      requerGrupo: ['dungeon'],
      nivelMin: 8
    },
    {
      id: 'tradehall1',
      nivelMin: 5
    },
    {
      id: 'tradehall2',
      nivelMin: 10
    },
    {
      id: 'training1',
      nivelMin: 4
    },
    {
      id: 'training2',
      nivelMin: 10
    },
    {
      id: 'translocation',
      nivelMin: 8
    },
    {
      id: 'trauma',
      requerGrupo: ['infirmary'],
      nivelMin: 4
    },
    {
      id: 'vault1',
      nivelMin: 3
    },
    {
      id: 'vault2',
      nivelMin: 14
    },
    {
      id: 'vault3',
      nivelMin: 18
    },
    {
      id: 'venarium1',
      nivelMin: 3
    },
    {
      id: 'venarium2',
      nivelMin: 9
    },
    {
      id: 'war1',
      nivelMin: 3
    },
    {
      id: 'war2',
      nivelMin: 10
    },
    {
      id: 'wine',
      requerGrupo: ['brewery'],
      nivelMin: 3
    },
    {
      id: 'workshop1',
      nivelMin: 3
    },
    {
      id: 'workshop2',
      nivelMin: 8
    },
    {
      id: 'workshop3',
      nivelMin: 15
    }
  ];

  regrasRooms.forEach(room => {
    const podeMostrar =
    nivelAtual >= (room.nivelMin || 1) &&

    (room.requer || []).every(
      id => document.getElementById(id)?.checked
    ) &&
    (
      !room.requerAlgum ||
      room.requerAlgum.some(id =>
        Array.from(document.querySelectorAll('input:checked'))
          .some(input => input.id?.startsWith(id))
      )
    ) &&
    (
      !room.requerGrupo ||
      room.requerGrupo.some(grupo =>
        document.querySelector(`input[name="${grupo}"]:checked`)
      )
    );

    toggleRoom(room.id, podeMostrar);
  });
}

function toggleRoom(id, mostrar) {
  const label = document.querySelector(`label[for="${id}"]`);
  const desc  = document.querySelector(`.${id}`);
  const input = document.getElementById(id);

  if (!label || !desc || !input) return;

  label.style.display = mostrar ? 'flex' : 'none';
  desc.style.display  = mostrar ? 'block' : 'none';

  if (!mostrar) {
    input.checked = false;
  }
}

document.addEventListener('change', () => {
  atualizarFeats();
  atualizarRooms();
});

/* estado inicial */
atualizarFeats();
atualizarRooms();

document.querySelectorAll('label[for]').forEach(label => {
  const input = document.getElementById(label.htmlFor);
  if (!input || input.type !== 'radio') return;

  const span = label.querySelector('span'); // pode não existir (níveis)

  label.addEventListener('click', () => {
    const wasChecked = input.checked;

    // deixa o browser marcar primeiro
    setTimeout(() => {
      if (wasChecked) {
        // desmarca
        input.checked = false;
        span?.classList.remove('ativo');
      } else {
        // limpa o grupo inteiro
        document
          .querySelectorAll(`input[name="${input.name}"]`)
          .forEach(r => {
            const l = document.querySelector(`label[for="${r.id}"]`);
            const s = l?.querySelector('span');
            r.checked = false;
            s?.classList.remove('ativo');
          });

        // marca este
        input.checked = true;
        span?.classList.add('ativo');
      }
    }, 0);
  });
});

/* =========================================================
   HELPERS GERAIS
========================================================= */

const $  = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);

const getNivelCasa = () => {
  const n = $('input[name="nivel"]:checked');
  return n ? Number(n.id.match(/\d+/)[0]) : null;
};

const safeListener = (el, fn) =>
  el && el.addEventListener("click", () => setTimeout(fn, 0));

function toggleLi({ ul, id, html, shouldExist, before = null }) {
  const existing = ul.querySelector(`#${id}`);
  if (shouldExist && !existing) {
    const li = document.createElement("li");
    li.id = id;
    li.innerHTML = html;
    before ? ul.insertBefore(li, before) : ul.appendChild(li);
  }
  if (!shouldExist && existing) existing.remove();
}

function ensureLi(ul, selector, setupFn) {
  let li = ul.querySelector(selector);
  if (!li) {
    li = document.createElement("li");
    setupFn(li);
    ul.appendChild(li);
  }
  return li;
}

/* =========================================================
   1️⃣ FORM FACTOR DA CASA
========================================================= */

function atualizarCasaFormFactor() {
  const ul = $("#excasa ul");
  if (!ul) return;
  ul.innerHTML = "";

  const nivel = getNivelCasa();
  const form  = $('input[name="tipodacasa"]:checked')?.id;
  if (!nivel || !form) return;

  [
    { s: 1, n: 3 },
    { s: 2, n: 7 },
    { s: 3, n: 15 },
    { s: 4, n: 20 }
  ].forEach(({ s, n }) => {
    if (nivel >= n && casaformfactors[`${form}${s}`]) {
      const li = document.createElement("li");
      li.innerHTML = casaformfactors[`${form}${s}`];
      ul.appendChild(li);
    }
  });
}

$$('input[name="nivel"], input[name="tipodacasa"]')
  .forEach(el => el.addEventListener("change", atualizarCasaFormFactor));

/* =========================================================
   2️⃣ FEATS
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const ul = $("#exfeats ul");

  $$("input[type='checkbox'], input[type='radio']").forEach(input => {
    const key = input.id;
    if (!casafeats[key]) return;

    input.addEventListener("change", () => {
      toggleLi({
        ul,
        id: `feat-${key}`,
        html: casafeats[key],
        shouldExist: input.checked
      });
    });
  });
});

/* =========================================================
   3️⃣ ACCESS AMENITIES
========================================================= */

const examenitiesUl = $("#examenities ul");

const hasNivelMin = min =>
  getNivelCasa() !== null && getNivelCasa() >= min;

function atualizarAmenities() {
  $$("input[name]").forEach(input => {
    const key = input.name;
    if (!casaaccess[key]) return;

    toggleLi({
      ul: examenitiesUl,
      id: `access-${key}`,
      html: casaaccess[key],
      shouldExist: !!$(`input[name="${key}"]:checked`)
    });
  });

  toggleLi({
    ul: examenitiesUl,
    id: "access-casahall",
    html: casaaccess.casahall,
    shouldExist: $("#guildhall")?.checked && hasNivelMin(15)
  });

  toggleLi({
    ul: examenitiesUl,
    id: "access-casasanct",
    html: casaaccess.casasanct,
    shouldExist: $("#sanctuary")?.checked && hasNivelMin(3)
  });
}

$$("input").forEach(el => safeListener(el, atualizarAmenities));

/* =========================================================
   4️⃣ RENDA
========================================================= */

const rendaUL = $("#exrenda ul");
const rendaTotalLI = ensureLi(rendaUL, "li.total", li => li.className = "total");

function atualizarRenda() {
  const nivel = getNivelCasa();
  let total = 0;

  Object.entries(casarenda).forEach(([id, dados]) => {
    const input = $(`#${id}`);
    const li = rendaUL.querySelector(`[data-renda="${id}"]`);

    if (!input?.checked || !nivel) return li?.remove();

    const valor = dados[nivel] ?? 0;
    total += valor;

    if (!li) {
      const novo = document.createElement("li");
      novo.dataset.renda = id;
      novo.innerHTML = `${dados[0]}: ${valor} PO.`;
      rendaUL.insertBefore(novo, rendaTotalLI);
    } else {
      li.innerHTML = `${dados[0]}: ${valor} PO.`;
    }
  });

  rendaTotalLI.innerHTML = `<br>💰 <i>Total:</i> ${total} PO`;
}

Object.keys(casarenda).forEach(id =>
  safeListener($(`#${id}`), atualizarRenda)
);
$$('input[name="nivel"]').forEach(el =>
  safeListener(el, atualizarRenda)
);

/* =========================================================
   5️⃣ QUARTOS + VALORES
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const quartosUL = $("#exquartos ul");
  const valoresUL = $("#exvalores ul");

  if (!quartosUL || !valoresUL) return;

  const liCasa = ensureLi(valoresUL, "[data-casa]", li => {
    li.dataset.casa = true;
    li.innerHTML = "🏠 <i>Casa:</i> — PO";
  });

  const liTotal = ensureLi(valoresUL, "[data-total]", li => {
    li.dataset.total = true;
  });

  function atualizarRooms() {
    Object.entries(casarooms).forEach(([id, [nome, desc, valor]]) => {
      const input = $(`#${id}`);

      toggleLi({
        ul: quartosUL,
        id: `room-${id}`,
        html: `${nome} ${desc}`,
        shouldExist: input?.checked
      });

      toggleLi({
        ul: valoresUL,
        id: `value-${id}`,
        html: `${nome}${valor} PO`,
        shouldExist: input?.checked,
        before: liTotal
      });
    });

    atualizarTotal();
  }

  function atualizarTotal() {
    let total = 0;
    const nivel = getNivelCasa();

    if (nivel) total += casavalores[nivel - 1] ?? 0;

    valoresUL.querySelectorAll("li").forEach(li => {
      const m = li.textContent.match(/(\d+)\s*PO/);
      if (m) total += Number(m[1]);
    });

    liCasa.innerHTML = nivel
      ? `🏠 <i>Casa nível ${nivel}: ${casavalores[nivel - 1]} PO</i>`
      : "🏠 <i>Casa:</i> — PO";

    liTotal.innerHTML = `<br>💰 <i>Total:</i> ${total} PO`;
  }

  Object.keys(casarooms).forEach(id =>
    safeListener($(`#${id}`), atualizarRooms)
  );

  $$('input[name="nivel"]').forEach(el =>
    safeListener(el, atualizarTotal)
  );

  atualizarTotal();
});

/* =========================================================
   6️⃣ EXPORT / COPY
========================================================= */

$(".butao")?.addEventListener("click", () => {
  const base = $(".example2");
  if (!base) return alert("example2 não encontrada");

  const clone = base.cloneNode(true);

  clone.querySelectorAll("h1.apsj-title")
    .forEach(e => e.style.color = "#192841");

  clone.querySelectorAll("img")
    .forEach(e => e.style.cssText = "display:block;margin:3px auto;border:none");

  clone.querySelectorAll("p.apsj-text")
    .forEach(e => e.style.cssText =
      "box-shadow: 3px 3px 3px rgb(0,0,0,0.4); padding: 5px; border-radius: 10px; background-color: rgba(255, 240, 219, 0.4); text-align: justify)"
    );

  clone.querySelectorAll("ul")
    .forEach(e => e.style.cssText =
      "list-style:none;box-shadow:3px 3px 3px rgb(0,0,0,0.4);padding:5px;border-radius:10px;background-color:rgba(255, 240, 219, 0.4)"
    );

  const wrapper = document.createElement("div");
  wrapper.style.cssText = "background-image:url();background-repeat:no-repeat;background-size:contain;background-attachment:fixed;background-position:60% 50%;background-color:#000";

  const section = document.createElement("section");
  section.className = "readaloud";
  section.style.cssText =
    "border-radius:10px;background:rgba(255,240,219,.4);padding:12px";

  section.innerHTML = `
    <h1 class="apsj-title" style="color:#192841">Nome da Localidade</h1>
    <blockquote>
      <img src="" width="45" height="45">
      <p class="apsj-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique repellat et odio reprehenderit in ad? Similique officiis odit optio ipsa quam nulla, quasi tempore eius sed explicabo fuga adipisci qui..</p>
    </blockquote>
  `;

  section.appendChild(clone);
  wrapper.appendChild(section);

  navigator.clipboard.writeText(wrapper.outerHTML)
    .then(() => alert("Conteúdo copiado com CSS inline correto!"));
});
