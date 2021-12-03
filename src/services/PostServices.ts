import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient();

type createDataProp = {
    title: string,
    body: string,
    authorId: number
}

export const PostServices = {
    getAll: async () => {
        return await prisma.post.findMany({
            where: {
                published: true,
            },
            orderBy: {
                id: 'desc',
            }
        })
    },
    getOne: async (id: number) => {
        return await prisma.post.findUnique({
            where: {
                id
            }
        })
    },
    create: async (data: createDataProp) => {
        return await prisma.post.create({ data })
    }
}