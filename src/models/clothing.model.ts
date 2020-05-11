import {Request, Response, NextFunction} from 'express';

export class Clothing {
  _model: any;
  constructor(norm: any) {
    this.model = [
      {
        id: { type: Number, key: "primary" },
        clothing_type: { type: String, maxlength: 200 },
        gender: { type: String, maxlength: 200 },
        age: { type: String, maxlength: 200 },
        clothing_name: { type: String, maxlength: 200 },
        brand: { type: String, maxlength: 100 },
        color: { type: String, maxlength: 24 },
        size: { type: String, maxlength: 24 },
        price: { type: String, maxlength: 200 },
        quantity: { type: String, maxlength: 200 },
        clothing_url: { type: String, maxlength: 2000 },
        user_id: {
          type: String,
          key: "foreign",
          references: { table: "User", foreignKey: "color" },
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
          route: "/get-clothing-by-color/:color",
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
            color: req.params.pink
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
