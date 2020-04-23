import {Request, Response, NextFunction} from 'express';

export class Exam {
  _model: any;
  constructor(norm: any) {
    this.model = [{
      id: { type: Number, key: 'primary' },
      exam_name: { type: String, maxlength: 24 },
      user_id: {
        type: Number,
        key: 'foreign',
        references: { table: 'User', foreignKey: 'id' },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
    }, 'A table to store exam model', [
      {
        route: "/get-all-exams",
        method: "POST",
        callback: this.getAllExams,
        requireToken: true,
      },
      {
        route: "/get-exam-by-id/:id",
        method: "POST",
        callback: this.getExamById,
        requireToken: true,
      },
      {
        route: "/create-exam",
        method: "POST",
        callback: this.createExam,
        requireToken: true,
      },
      {
        route: "/update-exam/id/:id",
        method: "PUT",
        callback: this.updateExam,
        requireToken: true,
      },
      {
        route: "/delete-exam/id/:id",
        method: "DELETE",
        callback: this.deleteExam,
        requireToken: true,
      }
    ]];
  }

  getAllExams(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"]
      }
      let examCtrl = model.controller;
      let resp = await examCtrl.get(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  getExamById(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      req.body = {
          get: ["*"],
          where: {
            id: req.params.id
          }
      }
      let examCtrl = model.controller;
      let resp = await examCtrl.get(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  createExam(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body ===> ', req.body);
      let examCtrl = model.controller;
      let resp = await examCtrl.insert(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  deleteExam(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body ===> ', req.body);
      let examCtrl = model.controller;
      let resp = await examCtrl.remove(req, null, null);
      res.json({ message: "Success", resp });
    }
  }

  updateExam(model: any) {
    return async (req: Request, res: Response, next: NextFunction) => {
      console.log('req.body ===> ', req.body);
      let examCtrl = model.controller;
      let resp = await examCtrl.update(req, null, null);
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