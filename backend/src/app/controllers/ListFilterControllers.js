import FilterList from "../models/FilterList.js";
import User from "../models/User.js";
class ListFilterControllers {
  all(req, res) {
    FilterList.find({}).then((item) => {
      res.json(item);
    });
  }

  getFiltertBySlug(req, res) {
    const filterSlug = req.params.slug;
    FilterList.findOne({ slug: filterSlug })
      .then((item) => {
        res.status(200).json(item);
      })
      .catch((err) => {
        res.status(500).json({ err: "err" });
      });
  }
  addFilter(req, res) {
    const array = [];
    if (req.body.subfilter) {
      req.body.subfilter.split("|").forEach((item) => {
        array.push({
          subTitle: item,
        });
      });
    }
    const filter = new FilterList({
      title: req.body.title,
      subFilter: array,
    });
    filter
      .save()
      .then(() => res.redirect("/addFilter"))
      .catch((error) => {
        console.log(error);
      });
  }
  addOder(req, res) {
    const order = {
      date: Date.now(),
      ...req.body,
    };
    User.findById(req.params.userId)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        user.orders.push(order);
        return user.save();
      })
      .then(() => {
        return res.status(200).json({ status: "add Thành công" });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      });
  }
}

export default new ListFilterControllers();
