import Item from "../models/Item.js";
import FilterList from "../models/FilterList.js";
class itemControllers {
  getItem(req, res) {
    const dataQuery = req.query;
    const itemsPerPage = 24;
    const propertyList = Object.keys(dataQuery);
    const failMessage = {};
    let page = 0;
    let itemsData = [];
    const kq = {};
    Item.find({})
      .then((items) => {
        itemsData = items;
        // Check if there's a "filter" property in the query
        if ("filter" in dataQuery) {
          itemsData = items.filter((item) => item.Filter === dataQuery.filter);
          if (itemsData.length === 0) {
            failMessage.filter = "Không có vật phẩm nào theo filter này";
          }
        }
        // Process other query parameters
        propertyList.forEach((property) => {
          switch (property) {
            case "page":
              page = parseInt(dataQuery.page) || 1; // Default to page 1 if not provided
              const totalItems = itemsData.length;
              const startIndex = (page - 1) * itemsPerPage;
              const endIndex = startIndex + itemsPerPage;

              if (startIndex >= totalItems) {
                failMessage[property] = "Invalid page number";
                itemsData = [];
              } else {
                itemsData = itemsData.slice(startIndex, endIndex);
              }
              kq.totalPages = Math.ceil(totalItems / itemsPerPage);
              break;
            default:
            // Handle other query parameters if needed
          }
        });
        if (page) {
          res.status(200).json({
            itemsData,
            currentPage: page,
            totalPages: kq.totalPages,
            failMessage: failMessage,
          });
        } else {
          res.status(200).json({ itemsData, failMessage: failMessage });
        }
      })
      .catch((error) => {
        res.status(500).json({ message: "An error occurred" });
      });
  }
  getItemById(req, res, next) {
    const itemId = req.params.id;
    Item.findById(itemId)
      .then((item) => {
        if (!item) {
          return res.status(404).json({ message: "Item not found" });
        }
        res.status(200).json(item);
      })
      .catch((error) => {
        res.status(500).json({ message: "An error occurred" });
      });
  }
  // Search Item
  searchItem(req, res) {
    const q = req.query.q;
    Item.find({})
      .then((items) => {
        const lowerCaseSearchText = q.toLowerCase();
        const data = items.filter((item) => {
          const lowerCaseItemName = item.name.toLowerCase();
          return lowerCaseItemName.includes(lowerCaseSearchText);
        });
        res.status(200).json(data);
      })
      .catch((error) => {
        res.status(500).json({ error: "An error occurred" });
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
  // delete Item
  deleteItem(req, res) {
    const itemId = req.params.id;
    Item.findById(itemId)
      .then((item) => {
        if (!item) {
          return res.status(404).json({ error: "Item not found" });
        }
        return item.deleteOne();
      })
      .then(() => {
        res.status(200).json({ status: "Xóa thành công!" });
      })
      .catch((err) => {
        console.error("Error deleting item:", err);
        res.status(500).json({ error: "Internal server error" });
      });
  }
  // edit Item
  editItem(req, res) {
    const itemId = req.params.id;
    const updatedData = req.body;
    console.log(req.body);
    const propertyList = Object.keys(updatedData);
    Item.findById(itemId)
      .then((item) => {
        if (!item) {
          return res.status(404).json({ error: "Item not found" });
        }
        propertyList.forEach((property) => {
          item[property] = updatedData[property];
        });
        // Save the updated item
        return item.save();
      })
      .then(() => {
        res.status(200).json({ status: "sửa item thành công!" });
      })
      .catch((err) => {
        console.error("Error edit item:", err);
        res.status(500).json({ error: "Internal server error" });
      });
  }
}

export default new itemControllers();
