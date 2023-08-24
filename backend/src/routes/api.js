import express from "express";
const router = express.Router();
import ListFilterControllers from "../app/controllers/ListFilterControllers.js";
import itemControllers from "../app/controllers/itemControllers.js";
// ListFilter
router.get("/listFilters", ListFilterControllers.all);
router.get("/listFilters/:slug", ListFilterControllers.getFiltertBySlug);
// post
router.post("/addlistFilters", ListFilterControllers.addFilter);
router.post("/addorder", ListFilterControllers.addOder);

// item
router.get("/item", itemControllers.getItem);
router.get("/item/:filter", itemControllers.getItemFilter);
router.post("/item/addItem", itemControllers.addItem);
router.delete("/item/:id/delete", itemControllers.deleteItem);
router.put("/item/:id/edit", itemControllers.editItem);

export default router;
