import { Request, Response, NextFunction } from 'express';
export declare class Car {
    _model: any;
    constructor(norm: any);
    deleteCar(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    updateCar(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    createCar(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getAllCars(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getCarById(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
