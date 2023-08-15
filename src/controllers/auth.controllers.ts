import { Request, Response } from 'express';


export const signupHandler = (req: Request, res: Response) => {
    try {
        console.log(req.body)
    } catch (error) {
        console.error(error);
    }
}

export const signinHandler = (req: Request, res: Response) => {
    try {
        console.log(req.body)
    } catch (error) {
        console.error(error);
    }
}