import {Request, Response, NextFunction} from 'express';

export class Customer {
  _model: any;
  constructor(norm: any) {
    this.model = [
      {
        id: { type: Number, key: "primary" },
        first_name: { type: String, maxlength: 50 },
        last_name: { type: String, maxlength: 50 },
        email: { type: String, maxlength: 100 },
        address: { type: String, maxlength: 100 },
        password: { type: String, maxlength: 100 },
        user_id: {
          type: Number,
          key: "foreign",
          references: { table: "User", foreignKey: "id" },
          onDelete: "cascade",
          onUpdate: "cascade",
        },
      },
      "A table to store clothing model",
      [
        {
          route: "/get-all-clothing",
          method: "POST",
          callback: this.getAllClothing,
          requireToken: true,
        },
        {
          route: "/get-tshirt-by-color/:color",
          method: "POST",
          callback: this.getClothingByColor,
          requireToken: true,
        },
        {
          route: "/create-tshirt",
          method: "POST",
          callback: this.createClothing,
          requireToken: true,
        },
        {
          route: "/update-tshirt/id/:id",
          method: "PUT",
          callback: this.updateClothing,
          requireToken: true,
        },
        {
          route: "/delete-tshirt/id/:id",
          method: "DELETE",
          callback: this.deleteClothing,
          requireToken: true,
        }
      ]];
  }

  getAllClothing(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"]
      }
      let tshirtCtrl = model.controller;
      let resp = await tshirtCtrl.get(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  getClothingByColor(model: any) {
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

  createClothing(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body ===> ', req.body);
      let tshirtCtrl = model.controller;
      let resp = await tshirtCtrl.insert(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  deleteClothing(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body ===> ', req.body);
      let tshirtCtrl = model.controller;
      let resp = await tshirtCtrl.remove(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  updateClothing(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body ===> ', req.body);
      let tshirtCtrl = model.controller;
      let resp = await tshirtCtrl.update(req, null, null);
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
