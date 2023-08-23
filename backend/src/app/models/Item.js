import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Item = new Schema(
  {
    qty: {
      type: Number,
      default: 0,
    },
    Filter: {
      type: String,
    },
    price_orginal: {
      type: Number,
      default: 0,
    },
    price_final: {
      type: Number,
      default: 0,
    },
    name: {
      type: String,
    },
    productCode: {
      type: String,
    },
    about: {
      type: {
        detail: {
          type: String,
        },
        specifications: {
          type: Array,
        },
        specifications_img: {
          type: Array,
        },
      },
    },
    img_small: {
      type: String,
    },
    img_large: {
      type: String,
    },
    slug: {
      type: String,
      slug: "name",
      unique: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", Item);
