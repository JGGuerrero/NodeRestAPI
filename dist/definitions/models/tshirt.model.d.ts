import { Request, Response, NextFunction } from 'express';
export declare class Tshirt {
    _model: any;
    constructor(norm: any);
    getAllTshirts(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getTshirtByColor(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
