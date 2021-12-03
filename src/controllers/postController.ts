import { Request, Response} from 'express'

import { PostServices } from '../services/PostServices'
import { UserServices } from '../services/UserServices'

export const all = async (req: Request, res: Response) => {
    const posts = await PostServices.getAll();

    res.json({ posts })
}

export const one = async (req: Request, res: Response) => {
    const { id } = req.params;
    const post = await PostServices.getOne(parseInt(id));

    if(post){
        res.json({ post })
    } else {
        res.json({error: 'No post found'})
    }
}

export const create = async (req: Request, res: Response) => {
    const  {title, body, author} = req.body;

    if(title && body && author) {
        const user = await UserServices.getOne({
            id: parseInt(author)
        })
        if(user) {
            const post = await PostServices.create({
                title, body, authorId: user.id
            })
            res.status(201).json(post)
        } else {
            res.json({error: 'could not find user'})
        }
    } else {
        res.json({error: 'imcompleted data'})
    }
}
