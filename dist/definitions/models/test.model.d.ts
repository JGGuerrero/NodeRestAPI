import { Request, Response, NextFunction } from 'express';
export declare class Test {
    private norm;
    _model: any;
    constructor(norm: any);
    model: any;
    testFunc: (model: any) => (req: Request<import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/NodeRestAPI/node_modules/@types/express-serve-static-core").ParamsDictionary, any, any, import("../../../../../../../../Users/Joshuah/Desktop/Fresno State Classes/IS183/NodeRestAPI/node_modules/@types/express-serve-static-core").Query>, res: Response<any>, next: NextFunction) => void;
}
