import Item from "../models/Item.js";
import FilterList from "../models/FilterList.js";
class itemControllers {
  getItemPage(req, res, next) {
    const page = parseInt(req.query.page) || 1; // Mặc định là trang 1 nếu không có page
    const itemsPerPage = 24;

    Item.find({})
      .then((items) => {
        const totalItems = items.length;
        const startIndex = (page - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;

        if (startIndex >= totalItems) {
          return res.status(400).json({ message: "Invalid page number" });
        }

        const itemsOnPage = items.slice(startIndex, endIndex);
        res.status(200).json({
          items: itemsOnPage,
          currentPage: page,
          totalPages: Math.ceil(totalItems / itemsPerPage),
        });
      })
      .catch((error) => {
        res.status(500).json({ message: "An error occurred" });
      });
  }
  //   add Item
  addItem(req, res) {
    const item = new Item({
      ...req.body,
    });
    item
      .save()
      .then((savedItem) => {
        res
          .status(201)
          .json({ message: "Item added successfully", item: savedItem });
      })
      .catch((error) => {
        res
          .status(500)
          .json({ message: "Error adding item", error: error.message });
      });
  }
}

export default new itemControllers();
