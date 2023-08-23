import mongoose from "mongoose";
import mongooseDelete from "mongoose-delete";
import slug from "mongoose-slug-updater";
const Schema = mongoose.Schema;

mongoose.plugin(slug);
const FilterList = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    filterListID: {
      type: Schema.Types.ObjectId,
      ref: "filterList",
    },
    slug: {
      type: String,
      slug: "title",
      unique: true,
    },
    subFilter: {
      type: [
        {
          subTitle: {
            type: String,
          },
          subFilterID: {
            type: Schema.Types.ObjectId,
            ref: "subFilter",
          },
          slug: {
            type: String,
            slug: "subTitle",
            unique: true,
          },
        },
      ],
      default: [],
    },
  },
  { timestamps: true }
);
FilterList.plugin(mongooseDelete, {
  deletedAt: true,
  overrideMethods: "all",
});

export default mongoose.model("FilterLists", FilterList);
