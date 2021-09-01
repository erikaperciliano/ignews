import { NextApiRequest, NextApiResponse} from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
    const users = [
        {id: 1, name: 'Erika'},
        {id: 2, name: 'Ícaro'},
        {id: 3, name: 'Natuza'}
    ]

    return response.json(users)
}