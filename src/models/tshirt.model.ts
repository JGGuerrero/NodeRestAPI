import {Request, Response, NextFunction} from 'express';

export class Tshirt {
  _model: any;
  constructor(norm: any) {
    this.model = [
      {
        id: { type: Number, key: "primary" },
        tshirt_name: { type: String, maxlength: 200 },
        brand: { type: String, maxlength: 48 },
        color: { type: String, maxlength: 24 },
        size: { type: String, maxlength: 24 },
        user_id: {
          type: Number,
          key: "foreign",
          references: { table: "User", foreignKey: "id" },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
      },
      "A table to store tshirt model",
      [
        {
          route: "/get-all-tshirts",
          method: "POST",
          callback: this.getAllTshirts,
          requireToken: true,
        },
        {
          route: "/get-tshirt-by-color/:color",
          method: "POST",
          callback: this.getTshirtByColor,
          requireToken: true,
        }
      ]];
  }

  getAllTshirts(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"]
      }
      let tshirtCtrl = model.controller;
      let resp = await tshirtCtrl.get(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  getTshirtByColor(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"],
          where: {
            color: req.params.color
          }
      }
      let tshirtCtrl = model.controller;
      let resp = await tshirtCtrl.get(req, null, null);
      res.json({ message: "Success", resp });
    }
  }


  set model(model: any) {
    this._model = model;
  }

  get model() {
    return this._model;
  }
}
