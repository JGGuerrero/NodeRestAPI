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
class Customer {
    constructor(norm) {
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
            ]
        ];
    }
    getAllClothing(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"]
            };
            let tshirtCtrl = model.controller;
            let resp = yield tshirtCtrl.get(req, null, null);
            res.json({ message: "Success", resp });
        });
    }
    getClothingByColor(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            req.body = {
                get: ["*"],
                where: {
                    color: req.params.color
                }
            };
            let tshirtCtrl = model.controller;
            let resp = yield tshirtCtrl.get(req, null, null);
            res.json({ message: "Success", resp });
        });
    }
    createClothing(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body ===> ', req.body);
            let tshirtCtrl = model.controller;
            let resp = yield tshirtCtrl.insert(req, null, null);
            res.json({ message: "Success", resp });
        });
    }
    deleteClothing(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body ===> ', req.body);
            let tshirtCtrl = model.controller;
            let resp = yield tshirtCtrl.remove(req, null, null);
            res.json({ message: "Success", resp });
        });
    }
    updateClothing(model) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            console.log('req.body ===> ', req.body);
            let tshirtCtrl = model.controller;
            let resp = yield tshirtCtrl.update(req, null, null);
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
exports.Customer = Customer;
