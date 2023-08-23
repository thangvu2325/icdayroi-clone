import FilterList from "../models/FilterList.js";
import User from "../models/User.js";
class ListFilterControllers {
  all(req, res) {
    FilterList.find({}).then((item) => {
      res.json(item);
    });
  }
  FilterbyID(req, res) {
    const filterId = req.params.id;
    FilterList.findById({ _id: filterId })
      .exec()
      .then((item) => {
        res.json(item);
      });
  }
  addItem(req, res) {
    const {
      specificationsImg,
      specifications,
      filter,
      title,
      img,
      imgLarge,
      price,
      detail,
      qty,
    } = req.body;
    const array_img = specificationsImg ? specificationsImg.split("|") : [];
    const array = specifications ? specifications.split("|") : [];
    FilterList.findOne({ title: filter })
      .then((foundFilter) => {
        if (!foundFilter) {
          return FilterList.findOne({ "subFilter.subTitle": filter });
        }
        return foundFilter;
      })
      .then((foundFilter) => {
        if (!foundFilter) {
          throw new Error("Không tìm thấy bộ lọc");
        }
        return foundFilter;
      })
      .then((foundFilter) => {
        if (foundFilter.title === filter) {
          foundFilter.item.push({
            name: title,
            img_small: img,
            img_large: imgLarge,
            price_orginal: price,
            price_final: price,
            about: {
              detail,
              specifications: array,
              specifications_img: array_img,
            },
            qty,
          });
        } else {
          const subFilter = foundFilter.subFilter.find(
            (sub) => sub.subTitle === filter
          );
          if (!subFilter) {
            throw new Error("Không tìm thấy bộ lọc phụ");
          }
          subFilter.item.push({
            name: title,
            img_small: img,
            imgLarge: imgLarge,
            price_orginal: price,
            price_final: price,
            about: {
              detail,
              specifications: array,
              specifications_img: array_img,
            },
            qty,
          });
        }
        return foundFilter.save();
      })
      .then(() => {
        res.send("Đã lưu thành công!");
      })
      .catch((error) => {
        res.send(error);
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
    User.findById(req.body._id)
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }

        user.orders.push(order);

        return user.save();
      })
      .then(() => {
        return res.status(200).json({ success: true });
      })
      .catch((error) => {
        console.error(error);
        return res.status(500).json({ error: "Internal server error" });
      });
  }
}

export default new ListFilterControllers();
