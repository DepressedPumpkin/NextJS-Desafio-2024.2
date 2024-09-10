import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Aurora - All My Demons Greeting Me As A Friend',
      description: 'Lançado em 2016, este álbum de estreia da cantora norueguesa Aurora é uma viagem introspectiva, combinando pop alternativo e atmosferas etéreas com letras reflexivas e carregadas de simbolismo. Aurora explora temas como o relacionamento humano com a natureza, a luta interna contra os medos e a aceitação de si mesmo, proporcionando uma experiência emocional e sonora única. Destaques incluem "Runaway" e "Conqueror".',
      price: 69.99,
      createdAt: new Date(),
      image: "/image/aurora.png",
    },
    {
      title: 'Melanie Martinez - Portals',
      description: 'Com "Portals", Melanie Martinez continua sua exploração temática única, unindo arte visual e música em uma narrativa que gira em torno de renascimento, morte e transformação. Suas músicas apresentam letras profundas e muitas vezes provocativas, sempre envoltas em uma produção experimental e teatral. Martinez é conhecida por criar álbuns conceituais, e "Portals" expande ainda mais seu universo musical, destacando faixas como "DEATH" e "VOID".',
      price: 69.99,
      createdAt: new Date(),
      image: "/image/mela.png",
    },
    {
      title: 'Daft Punk - Random Access Memories',
      description: 'O icônico álbum de 2013 do duo francês Daft Punk se distancia do som eletrônico puro, abraçando uma estética mais orgânica e analógica. "Random Access Memories" é uma celebração da música disco, funk e soul dos anos 70 e 80, enquanto ainda mantém a identidade única do Daft Punk. Com participações de artistas como Pharrell Williams e Nile Rodgers, o álbum apresenta sucessos como "Get Lucky" e "Instant Crush", consolidando sua posição como uma obra-prima atemporal.',
      price: 89.99,
      createdAt: new Date(),
      image: "/image/daftpunk.jpg",
    },
    {
      title: 'Radiohead - In Rainbows',
      description: 'Lançado em 2007, "In Rainbows" é amplamente considerado um dos álbuns mais importantes do Radiohead, misturando elementos de rock alternativo, eletrônica e experimentações sonoras. As letras abordam temas existenciais e emocionais, enquanto as texturas sonoras criam uma atmosfera intimista e ao mesmo tempo expansiva. A inovação do álbum não ficou apenas na música, mas também no lançamento, permitindo que os fãs escolhessem quanto pagar. Canções como "Nude" e "Weird Fishes/Arpeggi" são destaques.',
      price: 79.99,
      createdAt: new Date(),
      image: "/image/radiohead.jpg",
    },
    {
      title: 'The Weeknd - After Hours',
      description: 'Lançado em 2020, "After Hours" marca um ponto alto na carreira de The Weeknd, trazendo uma narrativa sombria e melancólica sobre amor, perda e redenção. Com uma produção impecável que mistura synth-pop com influências dos anos 80, o álbum foi um sucesso comercial e crítico. "Blinding Lights", o maior sucesso do álbum, se tornou uma das músicas mais populares da década. O álbum é uma fusão de emoções pessoais e sons nostálgicos, oferecendo uma experiência auditiva imersiva.',
      price: 74.99,
      createdAt: new Date(),
      image: "/image/weekend.jpeg",
    },
    {
      title: 'Billie Eilish - When We All Fall Asleep, Where Do We Go?',
      description: 'O álbum de estreia de Billie Eilish, lançado em 2019, redefiniu o pop contemporâneo com sua estética sombria e minimalista. Produzido em colaboração com seu irmão Finneas, o álbum mistura batidas eletrônicas experimentais com letras profundamente pessoais e, por vezes, perturbadoras. Com sucessos como "Bad Guy" e "Bury a Friend", Billie Eilish trouxe uma nova abordagem ao mainstream, criando um universo próprio que ressoa com jovens ao redor do mundo.',
      price: 64.99,
      createdAt: new Date(),
      image: "/image/billie.jpg",
    },
    {
      title: 'Pink Floyd - The Dark Side of the Moon',
      description: 'Lançado em 1973, "The Dark Side of the Moon" é considerado um dos maiores álbuns da história do rock progressivo e da música em geral. A obra-prima do Pink Floyd explora temas como o tempo, a morte, o conflito e a insanidade, com uma sonoridade atmosférica e altamente experimental. Faixas como "Time" e "Money" se tornaram clássicos atemporais. Combinando letras filosóficas e uma produção inovadora, o álbum transcendeu gerações e permanece relevante até hoje.',
      price: 99.99,
      createdAt: new Date(),
      image: "/image/pink.jpg",
    },
    {
      title: 'Nas - Illmatic',
      description: 'Considerado um dos maiores álbuns de rap de todos os tempos, "Illmatic" é uma obra-prima do hip-hop lançada em 1994. O álbum de estreia de Nas combina rimas incisivas com produções impecáveis de produtores como DJ Premier e Pete Rock. Com letras que capturam a essência da vida nas ruas de Nova York, "Illmatic" definiu o rap dos anos 90 e influenciou gerações de artistas. Faixas como "N.Y. State of Mind" e "The World Is Yours" são reverenciadas até hoje.',
      price: 79.99,
      createdAt: new Date(),
      image: "/image/nas.png",
    },
    {
      title: 'Adele - 30',
      description: 'Lançado em 2021, "30" é o álbum mais pessoal e vulnerável de Adele até o momento, abordando temas de divórcio, maternidade e crescimento pessoal. Suas letras cruas, combinadas com sua inconfundível voz poderosa, criam uma narrativa emocional que ressoa com milhões de ouvintes. O álbum foi amplamente elogiado pela crítica e pelos fãs, consolidando ainda mais o status de Adele como uma das maiores cantoras contemporâneas. Destaques incluem "Easy On Me" e "To Be Loved".',
      price: 89.99,
      createdAt: new Date(),
      image: "/image/adele.jpg",
    },
    {
      title: 'Arctic Monkeys - AM',
      description: 'Lançado em 2013, "AM" marcou um ponto de virada para o Arctic Monkeys, combinando o som cru do rock alternativo com influências do R&B, hip-hop e psicodelia. O álbum foi aclamado pela crítica por sua ousadia e sofisticação musical, com sucessos como "Do I Wanna Know?" e "R U Mine?" se tornando hinos de uma nova geração. O disco mostra a evolução da banda e se destaca como um dos maiores lançamentos da década.',
      price: 69.99,
      createdAt: new Date(),
      image: "/image/arcticmonkeys.jpeg",
    },
    {
      title: 'The Beatles - Abbey Road',
      description: 'Lançado em 1969, "Abbey Road" é o penúltimo álbum dos Beatles e um dos mais reverenciados pela crítica e pelo público. Sua capa icônica, mostrando os quatro integrantes atravessando a famosa faixa de pedestres, se tornou um símbolo cultural. O álbum apresenta clássicos como "Come Together" e "Here Comes the Sun", que exemplificam a habilidade única da banda em misturar inovação sonora com melodias cativantes.',
      price: 99.99,
      createdAt: new Date(),
      image: "/image/abbeyroad.jpg",
    },
    {
      title: 'Michael Jackson - Thriller',
      description: 'Lançado em 1982, "Thriller" não é apenas o álbum mais vendido de todos os tempos, mas também um marco na história da música pop. Michael Jackson mistura pop, funk, soul e rock em um álbum que transcende gêneros e gerações. Hits como "Billie Jean", "Beat It" e "Thriller" moldaram a cultura popular e tornaram Jackson uma lenda da música. Com produção de Quincy Jones, "Thriller" continua a influenciar artistas em todo o mundo.',
      price: 109.99,
      createdAt: new Date(),
      image: "/image/thriller.jpg",
    },
    {
      title: 'Nirvana - Nevermind',
      description: 'Lançado em 1991, "Nevermind" do Nirvana não apenas catapultou a banda ao estrelato, mas também trouxe o movimento grunge ao mainstream. Liderado por Kurt Cobain, o álbum é famoso por sua energia crua e emocional, com sucessos como "Smells Like Teen Spirit" e "Come as You Are". "Nevermind" mudou a paisagem musical dos anos 90 e é considerado um dos álbuns mais influentes da história do rock.',
      price: 89.99,
      createdAt: new Date(),
      image: "/image/nevermind.jpg",
    },
    {
      title: 'Fleetwood Mac - Rumours',
      description: 'Lançado em 1977, "Rumours" é um dos álbuns mais vendidos e aclamados de todos os tempos. Com letras profundamente pessoais que refletem as turbulências emocionais dentro da banda na época, o álbum é uma mistura perfeita de rock, pop e soft rock. Faixas como "Go Your Own Way" e "Dreams" continuam a ser influentes e amadas por fãs de todas as idades.',
      price: 79.99,
      createdAt: new Date(),
      image: "/image/rumours.jpg",
    },
    {
      title: 'Led Zeppelin - IV',
      description: 'Lançado em 1971, o quarto álbum de estúdio do Led Zeppelin, muitas vezes referido apenas como "IV", é um dos mais importantes álbuns da história do rock. Com faixas como "Stairway to Heaven", "Black Dog" e "Rock and Roll", o álbum combina o poder do hard rock com elementos de folk e blues, consolidando o Led Zeppelin como uma das maiores bandas de todos os tempos.',
      price: 94.99,
      createdAt: new Date(),
      image: "/image/ledzeppelin.jpg",
    },
    {
      title: 'Bob Dylan - Highway 61 Revisited',
      description: 'Lançado em 1965, "Highway 61 Revisited" é um dos álbuns mais importantes de Bob Dylan e do movimento folk-rock. Com a icônica "Like a Rolling Stone", Dylan desafiou as normas da música pop e expandiu os limites da composição musical, unindo poesia, rock e narrativa social. Este álbum cimentou sua posição como um dos maiores letristas da história.',
      price: 89.99,
      createdAt: new Date(),
      image: "/image/dylan.jpg",
    },
    {
    title: 'Elis Regina & Tom Jobim - Elis & Tom',
    description: 'Lançado em 1974, "Elis & Tom" é uma colaboração entre a icônica cantora Elis Regina e o lendário compositor Tom Jobim. O álbum é uma obra-prima da bossa nova e MPB, com interpretações impecáveis de clássicos como "Águas de Março" e "Corcovado". Considerado um dos maiores duetos da música brasileira, este álbum é atemporal.',
    price: 94.99,
    createdAt: new Date(),
    image: "/image/elisetom.jpg",
  },
  {
    title: 'Chico Buarque - Construção',
    description: 'Lançado em 1971, "Construção" é um dos álbuns mais aclamados da carreira de Chico Buarque. Com uma mistura de bossa nova, samba e MPB, o álbum se destaca pela sua complexidade lírica e crítica social. A faixa-título "Construção" é especialmente notável por sua inovação melódica e narrativa trágica sobre a vida de um trabalhador brasileiro.',
    price: 84.99,
    createdAt: new Date(),
    image: "/image/construcao.jpg",
  },
  {
    title: 'Gilberto Gil - Expresso 2222',
    description: 'Lançado em 1972, "Expresso 2222" marcou o retorno de Gilberto Gil ao Brasil após seu exílio político. O álbum mistura samba, baião, e elementos de rock, refletindo a fusão cultural e a liberdade criativa que Gil sempre representou. Faixas como "Expresso 2222" e "O Canto da Ema" continuam a ser símbolos de sua inovação musical.',
    price: 79.99,
    createdAt: new Date(),
    image: "/image/expresso2222.jpg",
  },
  {
    title: 'Laufey - Bewitched',
    description: 'Lançado em 2023, "Bewitched" é o segundo álbum de Laufey, onde ela explora temas de amor, magia e crescimento pessoal com sua mistura característica de jazz contemporâneo, pop clássico e folk. A suavidade de sua voz e a elegância dos arranjos criam uma atmosfera encantadora em faixas como "From The Start" e "Bewitched", mostrando sua habilidade como uma das vozes mais cativantes da nova geração.',
    price: 74.99,
    createdAt: new Date(),
    image: "/image/laufey.png",
  },
  {
    title: 'Polyphia - Remember That You Will Die',
    description: 'Lançado em 2022, "Remember That You Will Die" é o quinto álbum de estúdio da banda americana Polyphia. Combinando elementos de math rock, hip-hop, metal e música eletrônica, o álbum representa o ápice da evolução musical da banda. Destaque para as faixas "Playing God" e "ABC", que trazem uma mistura de técnica instrumental impressionante e uma sonoridade futurista, consolidando Polyphia como uma das bandas mais inovadoras do cenário musical atual.',
    price: 89.99,
    createdAt: new Date(),
    image: "/image/polyphia.jpg",
  },
  {
    title: 'YOASOBI - The Book',
    description: 'Lançado em 2021, "The Book" é o primeiro álbum da dupla japonesa YOASOBI. Conhecida por transformar histórias e novelas em música, YOASOBI mistura pop, rock e elementos eletrônicos para criar sons cativantes e líricos profundos. O álbum contém sucessos como "Yoru ni Kakeru" e "Halzion", que conquistaram o público global e os tornaram uma das duplas mais influentes do Japão.',
    price: 79.99,
    createdAt: new Date(),
    image: "/image/yoasobi.jpg",
  },
  {
    title: 'Bôa - Twilight',
    description: 'Lançado em 2001, "Twilight" da banda britânica Bôa ganhou notoriedade global após sua faixa "Duvet" ser usada como tema de abertura do anime Serial Experiments Lain. Com uma mistura única de trip hop, rock alternativo e jazz, o álbum oferece uma viagem atmosférica e emocional, com letras introspectivas e sons envolventes.',
    price: 84.99,
    createdAt: new Date(),
    image: "/image/boa.jpg",
  },
  {
    title: 'System of a Down - Toxicity',
    description: 'Lançado em 2001, "Toxicity" é o segundo álbum de estúdio da banda de metal alternativo System of a Down. Com faixas icônicas como "Chop Suey!", "Toxicity" e "Aerials", o álbum aborda temas políticos, sociais e psicológicos com uma combinação única de agressividade e melodia. "Toxicity" é amplamente considerado um dos álbuns de metal mais importantes do século XXI.',
    price: 99.99,
    createdAt: new Date(),
    image: "/image/toxicity.jpg",
  },
  {
    title: 'Toe - For Long Tomorrow',
    description: 'Lançado em 2009, "For Long Tomorrow" é o segundo álbum da banda japonesa de math rock Toe. O álbum combina intricadas batidas de bateria com guitarras melódicas, criando um som atmosférico e emocionalmente envolvente. Toe é conhecida por suas composições instrumentais detalhadas e altamente técnicas, e este álbum é um exemplo perfeito de sua maestria musical.',
    price: 79.99,
    createdAt: new Date(),
    image: "/image/toe.jpg",
  },
  {
    title: 'Bocchi the Rock! - 結束バンド (Kessoku Band)',
    description: 'Lançado em 2022, o álbum "結束バンド" (Kessoku Band) da série de anime "Bocchi the Rock!" traz uma poderosa mistura de rock alternativo, pop-punk e indie, refletindo o espírito jovem e energético do show. Com faixas como "Guitar, Loneliness and Blue Planet" e "That Band", a trilha sonora capturou a atenção de fãs de anime e amantes de música por sua autenticidade, letras emocionais e arranjos dinâmicos.',
    price: 79.99,
    createdAt: new Date(),
    image: "/image/bocchi.jpg",
  },

];

  

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
