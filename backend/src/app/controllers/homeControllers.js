import FilterList from "../models/FilterList.js";
// import mutipleMongooseToObject from "../util/mongoose.js";
import util from "../util/mongoose.js";
class homeControllers {
  index(req, res, next) {
    Promise.all([FilterList.find({}), FilterList.countDocumentsDeleted()])
      .then(([filterList, deletedCount]) => {
        res.render("home", {
          deletedCount,
          data: util.mutipleMongooseToObject(filterList),
        });
      })
      .catch(next);
  }
  showFilter(req, res, next) {
    const filterId = req.params.filterSlug;
    FilterList.findOne({ slug: filterId })
      .then((filter) => {
        if (!filter) {
          return FilterList.findOne({ "subFilter.slug": filterId }).select(
            "subFilter"
          );
        }
        return filter;
      })
      .then((filter) => {
        if (!filter) {
          return;
        }
        return Promise.all([
          filter,
          filterId,
          FilterList.countDocumentsDeleted(),
        ]);
      })
      .then(([filter, deletedCount]) => {
        let data = filter;
        if (filter.subFilter) {
          data = filter.subFilter.find(
            (subFilter) => subFilter.slug === filterId
          );
        }
        if (!data) {
          data = filter; // Trả về bộ lọc chính ban đầu
        }
        res.render("filter", {
          deletedCount,
          data: data.toObject(),
        });
      })
      .catch(next);
  }
  showSubFilter(req, res, next) {
    const filterId = req.params.filterSlug;
    FilterList.findOne({ slug: filterId })
      .then((filter) => {
        if (!filter) {
          return FilterList.findOne({ "subFilter.slug": filterId }).select(
            "subFilter"
          );
        }
        return filter;
      })
      .then((filter) => {
        if (!filter) {
          throw new Error("Không tìm thấy bộ lọc");
        }
        return Promise.all([
          filter,
          FilterList,
          FilterList.countDocumentsDeleted(),
        ]);
      })
      .then(([filter, filterId, deletedCount]) => {
        let data = filter;
        if (filter.subFilter) {
          data = filter.subFilter.find(
            (subFilter) => subFilter.slug === filterId
          );
        }
        if (!data) {
          data = filter; // Trả về bộ lọc chính ban đầu
        }
        res.render("filter", {
          deletedCount,
          data: data.toObject(),
        });
      })
      .catch(next);
  }
  async add(req, res, next) {
    Promise.all([FilterList.find({}), FilterList.countDocumentsDeleted()])
      .then(([filterList, deletedCount]) =>
        res.render("addItem", {
          deletedCount,
          data: util.mutipleMongooseToObject(filterList),
        })
      )
      .catch(next);
  }
  async addFilter(req, res) {
    try {
      const array = await FilterList.find({});
      res.render("addFilter", { data: array });
    } catch (error) {
      console.error(error);
    }
  }
}

export default new homeControllers();
