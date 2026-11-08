const researchCopy = {
  fr: {
    'T-1': 'La T‑1 Classique est la plus traditionnelle de la famille. Inspirée par le travail du grand maître Antonio de Torres, elle s’adresse aux guitaristes qui aiment la tradition de la guitare classique. Quelques détails esthétiques lui donnent une touche contemporaine.',
    'T-2': 'Un barrage lattice pour une sonorité moderne, ancrée dans la tradition. Avec la T‑2 Lattice, je cherche à garder un son rond et chaleureux, avec une attaque nette et des notes bien définies, même quand le jeu se fait plus énergique. Pensée pour ceux qui apprécient le confort de jeu, cette guitare invite à savourer la musique.',
    'T-3': 'Avec sa table en cèdre à cœur de balsa, la T‑3 Signature associe une réponse tout en finesse à une projection généreuse, des harmoniques riches et des notes bien définies qui se prolongent. Elle conserve le confort de jeu ainsi que la chaleur et la douceur de la guitare classique espagnole. Elle accompagne aussi bien le répertoire traditionnel que les œuvres contemporaines.',
    ECO: 'Avec Écoresponsable, j’explore les possibilités sonores de bois moins courants en lutherie. Ce projet relie mes racines argentines au savoir-faire que j’ai acquis en France. Je choisis les bois avec soin, en tenant compte des ressources, et j’explore ce que chaque association peut apporter à l’équilibre et à la voix de la guitare. La diversité des teintes du bois et, surtout, les rosaces en corne de vache donnent à chaque guitare une identité singulière.',
    custom: 'Tout commence par un échange sur votre façon de jouer, votre répertoire, vos goûts musicaux et le son que vous recherchez. Nous prenons le temps d’en discuter et de choisir ensemble les bois qui donneront à votre guitare son caractère. Pas à pas, nous donnons forme à une guitare qui vous ressemble.'
  },
  es: {
    'T-1': 'La T‑1 Clásica es la más tradicional de la familia. Inspirada en el trabajo del gran maestro Antonio de Torres, está pensada para quienes aman la tradición de la guitarra clásica. Algunos detalles estéticos le dan un toque contemporáneo.',
    'T-2': 'Un varetaje lattice para una sonoridad moderna, arraigada en la tradición. Con la T‑2 Lattice busco conservar un sonido redondo y cálido, con un ataque nítido y notas bien definidas, incluso al tocar con más energía. Pensada para quienes aprecian la comodidad al tocar, esta guitarra invita a disfrutar de la música.',
    'T-3': 'Con su tapa de cedro y corazón de balsa, la T‑3 Signature combina una respuesta delicada con una proyección generosa, armónicos ricos y notas bien definidas que se prolongan. Conserva la comodidad al tocar, así como la calidez y la dulzura de la guitarra clásica española. Acompaña tanto el repertorio tradicional como las obras contemporáneas.',
    ECO: 'Con Écoresponsable exploro las posibilidades sonoras de maderas poco habituales en la luthería. Este proyecto une mis raíces argentinas con el oficio que aprendí en Francia. Elijo las maderas con cuidado, teniendo en cuenta los recursos, y exploro lo que cada combinación aporta al equilibrio y a la voz de la guitarra. La variedad de tonos de las maderas y, sobre todo, las rosetas de cuerno de vaca le dan a cada guitarra una identidad propia.',
    custom: 'Todo empieza con una conversación sobre tu forma de tocar, tu repertorio, tus gustos musicales y el sonido que buscás. Nos tomamos el tiempo de hablarlo y elegir juntos las maderas que le darán carácter a tu guitarra. Paso a paso, le damos forma a una guitarra que se parece a vos.'
  },
  en: {
    'T-1': 'The T‑1 Classical is the most traditional guitar in the family. Inspired by the work of the great master Antonio de Torres, it is made for players who love the classical guitar tradition. A few design details give it a contemporary touch.',
    'T-2': 'Lattice bracing for a modern sound rooted in tradition. With the T‑2 Lattice, I aim for a round, warm sound with a clear attack and well-defined notes, even when playing more energetically. Designed for players who value playing comfort, this guitar invites you to savour the music.',
    'T-3': 'With its cedar soundboard and balsa core, the T‑3 Signature combines a delicate response with generous projection, rich harmonics and well-defined notes that sustain. It retains playing comfort and the warmth and sweetness of the Spanish classical guitar. It suits traditional repertoire as well as contemporary works.',
    ECO: 'With Écoresponsable, I explore the tonal possibilities of woods less commonly used in guitar making. The project connects my Argentine roots with the craft I learned in France. I select the woods carefully, mindful of resources, and explore what each pairing can bring to the balance and voice of the guitar. The variety of tones in the woods and, above all, the cow horn rosettes give each guitar its own distinct identity.',
    custom: 'It starts with a conversation about how you play, your repertoire, your musical tastes and the sound you are looking for. We take the time to talk it through and choose the woods that will give your guitar its character. Step by step, we shape a guitar that reflects you.'
  }
};

const modelLabels = {
  fr: { handmade:'Guitares classiques fabriquées à la main', research:'La recherche derrière cet instrument', specs:'Caractéristiques', fields:['Diapason','Table','Barrage','Fond et éclisses','Manche','Chevalet','Touche'], tops:['Épicéa ou cèdre','Cèdre','Cèdre ou épicéa'], rosewood:'Palissandre des Indes', option:'autre bois en option', mahogany:'Acajou', ebony:'Ébène Crelicam', alternative:'Essences alternatives', guitarron:'Guitarrón argentin', artists:'Artistes', demo:'Portraits et noms fictifs pour la maquette.' },
  es: { handmade:'Guitarras clásicas hechas a mano', research:'La búsqueda detrás de este instrumento', specs:'Características', fields:['Tiro de cuerdas','Tapa','Varetaje','Fondo y aros','Mástil','Puente','Diapasón'], tops:['Abeto o cedro','Cedro','Cedro o abeto'], rosewood:'Palo santo de Indias', option:'otra madera como opción', mahogany:'Caoba', ebony:'Ébano Crelicam', alternative:'Maderas alternativas', guitarron:'Guitarrón argentino', artists:'Artistas', demo:'Retratos y nombres ficticios para la maqueta.' },
  en: { handmade:'Handmade classical guitars', research:'The research behind this instrument', specs:'Specifications', fields:['Scale length','Soundboard','Bracing','Back and sides','Neck','Bridge','Fingerboard'], tops:['Spruce or cedar','Cedar','Cedar or spruce'], rosewood:'Indian rosewood', option:'other woods optional', mahogany:'Mahogany', ebony:'Crelicam ebony', alternative:'Alternative woods', guitarron:'Argentine guitarrón', artists:'Artists', demo:'Fictional portraits and names for this preview.' }
};

const modelSummary = {
  fr:{'T-1':['Tradition','Sobriété','Élégance'],'T-2':['Attaque','Chaleur','Confort'],'T-3':['Finesse','Projection','Harmoniques'],ECO:['Bois','Rosaces','Singularité'],special:['Registres','Traditions','Exploration'],custom:['Écoute','Bois','Caractère']},
  es:{'T-1':['Tradición','Sobriedad','Elegancia'],'T-2':['Ataque','Calidez','Comodidad'],'T-3':['Finura','Proyección','Armónicos'],ECO:['Maderas','Rosetas','Identidad'],special:['Registros','Tradiciones','Exploración'],custom:['Escucha','Maderas','Carácter']},
  en:{'T-1':['Tradition','Simplicity','Elegance'],'T-2':['Attack','Warmth','Comfort'],'T-3':['Finesse','Projection','Harmonics'],ECO:['Woods','Rosettes','Identity'],special:['Registers','Traditions','Exploration'],custom:['Listening','Woods','Character']}
};

const specOptions = {
  fr: {torres:'Traditionnel, style Torres', or:'ou', spruce:'Version en épicéa en développement.', tuning:'Accordage', octave:'octave grave'},
  es: {torres:'Tradicional, estilo Torres', or:'o', spruce:'Versión en abeto en desarrollo.', tuning:'Afinación', octave:'octava grave'},
  en: {torres:'Traditional, Torres style', or:'or', spruce:'Spruce version in development.', tuning:'Tuning', octave:'lower octave'}
};

function modelSpecifications(key){
  if(key === 'custom') return '';
  const c = modelLabels[lang];
  const o = specOptions[lang];
  const traditional = key === 'T-1' || key === 'special';
  const values = key === 'ECO'
    ? ['650 mm', c.tops[2], 'Lattice ' + o.or + ' ' + o.torres.toLowerCase().replace('torres','Torres'), c.alternative, c.alternative, c.alternative, c.alternative]
    : [key === 'special' ? '670 mm' : '650 mm', c.tops[key === 'T-3' ? 1 : 0], traditional ? o.torres : 'Lattice', c.rosewood, c.mahogany, c.rosewood, c.ebony];

  const rows = c.fields.map((field,i) => {
    const option = [3,5,6].includes(i) ? ` <small>(${c.option})</small>` : '';
    const spruce = i === 1 && key === 'T-3' ? ` <small class="spruce-note">(${o.spruce})</small>` : '';
    return `<div><dt>${field}</dt><dd>${values[i] || '—'}${option}${spruce}</dd></div>`;
  }).join('');

  const list = (name, tuning) => `${name ? `<h3>${name}</h3>` : ''}<dl>${rows}${tuning ? `<div><dt>${o.tuning}</dt><dd>${tuning}</dd></div>` : ''}</dl>`;
  const content = key === 'special'
    ? list(c.guitarron,'B – E – A – D – G – B – E') + list('BASS',`E – A – D – G – B – E <small>(${o.octave})</small>`)
    : list();
  return `<section class="model-specs"><h2>${c.specs}</h2>${content}</section>`;
}

function renderArtists(){
  const c = modelLabels[lang];
  const names = ['Clara Valmont','Mateo Varela','Nora Delcourt','Adrián Ledesma'];
  main.innerHTML = `<section class="practical-page artists-page"><a class="breadcrumbs" href="#/">${tr('back')} / ${c.artists}</a><h1>${c.artists}</h1><p>${c.demo}</p><div class="artist-list">${names.map((name,i) => `<figure><div class="artist-portrait artist-portrait-${i}" role="img" aria-label="${name}"></div><figcaption>${name}</figcaption></figure>`).join('')}</div></section>`;
  applyLanguage();
}
