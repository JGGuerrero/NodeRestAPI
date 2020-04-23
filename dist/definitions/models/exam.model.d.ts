import { Request, Response, NextFunction } from 'express';
export declare class Exam {
    _model: any;
    constructor(norm: any);
    getAllExams(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    getExamById(model: any): (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/ExamAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => Promise<void>;
    model: any;
}
