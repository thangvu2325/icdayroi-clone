import express from "express";
const router = express.Router();
import ListFilterControllers from "../app/controllers/ListFilterControllers.js";
import itemControllers from "../app/controllers/itemControllers.js";
// ListFilter
router.get("/listFilters", ListFilterControllers.all);
router.get("/listFilters/:id", ListFilterControllers.FilterbyID);
// post
router.post("/addlistFilters", ListFilterControllers.addFilter);
router.post("/addorder", ListFilterControllers.addOder);
router.post("/addItem", ListFilterControllers.addItem);

// item
router.get("/item", itemControllers.getItemPage);
router.post("/item/addItem", itemControllers.addItem);

export default router;
