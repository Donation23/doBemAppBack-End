import { Request, Response, } from 'express';
import pool from '../../connection/database';

class User{

    public async ListAllUsers(req:Request, res:Response){

        async function getAllDatasFromUsers(){
            try {
                const client = await pool.connect();
                const result = await client.query('SELECT * FROM usuarios');
                client.release();

                return result.rows;
            }
            catch (err) {
                console.error('Erro na consulta:', err);
                throw err;
            }
            // precisamos arrumar o end nas proximas subidas
            // finally{
            //     pool.end()
            // }
        }

        return getAllDatasFromUsers()
            .then( (data) => { 
                if (data.length === 0){
                    let UserData = {response: "Nao foi encontrado usuarios"}
                    return res.json(UserData);
                }
                else{
                    let UserData = data;  
                    return res.json(UserData);
                }})
            .catch((err) => console.log('Erro', err))
        
    }

    public ListUserById(req:Request, res:Response){

        let id = req.params.id;

        async function listById() {
            try {
                const client = await pool.connect();
                const result = await client.query(`SELECT * FROM usuarios WHERE id = ${id}`);
                client.release();

                return result.rows;
            }
            catch (err) {
                console.error('Erro na consulta:', err);
                throw err;
            }
        }

        listById()
            .then( (data) => { 
                if (data.length === 0){
                    let UserData = {response: `Nao foi encontrado usuarios com esse id: ${id}`}
                    return res.json(UserData);
                }
                else{
                    let UserData = data;  
                    return res.json(UserData);
                }})
            .catch((err) => console.log('Erro', err))
        
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