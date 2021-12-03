import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

const main = async () => {
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});

    const user = await prisma.user.create({
        data: {
            email: "joaogustavosilva2001@gmail.com",
            nome: "joao gustavo silva",
            age: 20
        }
    });

    const post = await prisma.post.create({
        data: {
            title: "Post de test criado via seed",
            body: "Aki vai o conteúdo do post....",
            authorId: user.id
        }
    })
}


main()