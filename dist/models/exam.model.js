"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class Exam {
    constructor(norm) {
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
                }
            ]];
    }
    getAllExams(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let examCtrl = model.controller;
            let resp = yield examCtrl.get(req, null, null);
            res.json({ message: "Success", resp });
        });
    }
    getExamById(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    id: req.params.id
                }
            };
            let examCtrl = model.controller;
            let resp = yield examCtrl.get(req, null, null);
            res.json({ message: "Success", resp });
        });
    }
    createExam(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body ===> ', req.body);
            let examCtrl = model.controller;
            let resp = yield examCtrl.insert(req, null, null);
            res.json({ message: "Success", resp });
        });
    }
    set model(model) {
        this._model = model;
    }
    get model() {
        return this._model;
    }
}
exports.Exam = Exam;
