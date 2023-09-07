import express from "express";
const router = express.Router();
import ListFilterControllers from "../app/controllers/ListFilterControllers.js";
import itemControllers from "../app/controllers/itemControllers.js";
// ListFilter
router.get("/listFilters", ListFilterControllers.all);
router.get("/listFilters/:slug", ListFilterControllers.getFiltertBySlug);
// post
router.post("/addlistFilters", ListFilterControllers.addFilter);
router.post("/addorder/:userId", ListFilterControllers.addOder);

// item
router.get("/item/search", itemControllers.searchItem);
router.post("/item/addItem", itemControllers.addItem);
router.get("/item/:id", itemControllers.getItemById);
router.delete("/item/:id/delete", itemControllers.deleteItem);
router.put("/item/:id/edit", itemControllers.editItem);
router.get("/item", itemControllers.getItem);

export default router;
