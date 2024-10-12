import { Router, Request, Response } from 'express'
const routes = Router()
const link: any = []

routes.get('/', (request: Request, response: Response) => {
    response.status(200).send(link)
})

routes.post('/', (request: Request, response: Response) =>{
    const {title, url} = request.body
    const linke = {
        title,
        url,
        id: link.length? link[link.length-1].id + 1 : 1 
    }

    link.push(linke)
    response.status(201).send(linke)
})

routes.put('/:id', (request: Request, response: Response) => {
    const {title, url} = request.body
    const index = link.findIndex((link: any) => link.id === parseInt(request.params.id))

    const modfiedLink = {
        title,
        url,
        id: request.params.id
    }

    link[index] = modfiedLink
    response.status(200).send(modfiedLink)
})

routes.delete('/:id', (request: Request, response: Response) => {
    const index = link.findIndex((link: any) => link.id === parseInt(request.params.id))
    link.splice(index, 1)

    response.status(200).send(link)
})

export default routes