import { Request, Response, } from 'express';

class User{

    public ListAllUsers(req:Request, res:Response){
        return res.json({
            response: "Nao foi encontrado usuarios"
        })
    }

    public ListUserById(req:Request, res:Response){
        return res.json({
            response: `Nao foi encontrado usuarios com esse id: ${req.params.id}`
        })
    }

    public RegisterUser(req:Request, res:Response){
        return res.json({
            response: "Nao foi possivel cadastrar usuarios, tente novamente ou entre em contato com o Suporte"
        })
    }

    public UpdateUser(req:Request, res:Response){
        return res.json({
            response: "Nao foi possivel atualizar o usuario, tente novamente ou entre em contato com o Suporte"
        })
    }

    public DeleteUser(req:Request, res:Response){
        return res.json({
            response: "Nao foi possivel deletar o usuario"
        })
    }
}

export const users = new User();