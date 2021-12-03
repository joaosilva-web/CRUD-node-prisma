import { Request, Response} from 'express'

import { PostServices } from '../services/PostServices'
import { UserServices } from '../services/UserServices'

export const one = async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await UserServices.getOne(parseInt(id));

    if(user) {
        res.json({ user })
    } else {
        res.json({ error: 'User not found'})
    }
}