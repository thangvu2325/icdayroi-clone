import express from "express";
const router = express.Router();
import homeControllers from "../app/controllers/homeControllers.js";

router.get("/", homeControllers.index);
router.get("/additem", homeControllers.add);
router.get("/addFilter", homeControllers.addFilter);

// Group 2: Filter routes
router.get("/:filterSlug", homeControllers.showFilter);

// Group 3: Item routes
router.get("/item/:itemSlug", homeControllers.addFilter);
router.get("/item/:itemSlug/edit", homeControllers.addFilter);
router.get("/item/:itemSlug/delete", homeControllers.addFilter);

export default router;
