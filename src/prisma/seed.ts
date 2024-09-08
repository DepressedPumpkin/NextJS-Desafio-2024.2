import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const products = [
    {
      title: 'Aurora - All my demons greeting me as a friend',
      description: 'Um álbum sobre música com um toque de mistério e introspecção.',
      price: 69.99,
      createdAt: new Date(),
      image: "/image/aurora.png",
    },
    {
      title: 'Melanie - Portals',
      description: 'Um álbum sobre música introspectiva e experimental.',
      price: 69.99,
      createdAt: new Date(),
      image: "/image/mela.png",
    },
    {
      title: 'Daft Punk - Random Access Memories',
      description: 'O icônico álbum que marcou uma geração, cheio de batidas eletrônicas.',
      price: 89.99,
      createdAt: new Date(),
      image: "/image/daftpunk.png",
    },
    {
      title: 'Radiohead - In Rainbows',
      description: 'Um dos álbuns mais influentes da banda, que trouxe novas sonoridades.',
      price: 79.99,
      createdAt: new Date(),
      image: "/image/radiohead.png",
    },
    {
      title: 'The Weeknd - After Hours',
      description: 'Álbum conceitual que explora sentimentos de perda e redenção.',
      price: 74.99,
      createdAt: new Date(),
      image: "/image/weeknd.png",
    },
    {
      title: 'Billie Eilish - When We All Fall Asleep, Where Do We Go?',
      description: 'Álbum premiado com batidas eletrônicas e uma abordagem vocal única.',
      price: 64.99,
      createdAt: new Date(),
      image: "/image/billie.png",
    },
    {
      title: 'Pink Floyd - The Dark Side of the Moon',
      description: 'Clássico do rock progressivo que definiu uma era.',
      price: 99.99,
      createdAt: new Date(),
      image: "/image/pinkfloyd.png",
    },
    {
      title: 'Taylor Swift - Folklore',
      description: 'Um álbum acústico e indie que explora histórias emocionais profundas.',
      price: 79.99,
      createdAt: new Date(),
      image: "/image/taylorswift.png",
    },
    {
      title: 'Adele - 30',
      description: 'O último álbum de Adele, trazendo temas de superação e amor.',
      price: 89.99,
      createdAt: new Date(),
      image: "/image/adele.png",
    },
    {
      title: 'Arctic Monkeys - AM',
      description: 'Álbum marcante com influências de rock alternativo e indie.',
      price: 69.99,
      createdAt: new Date(),
      image: "/image/arcticmonkeys.png",
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
