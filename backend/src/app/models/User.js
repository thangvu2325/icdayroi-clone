import mongoose from "mongoose";
const Schema = mongoose.Schema;
const Item = new Schema(
  {
    productId: {
      type: Schema.Types.ObjectId,
      ref: "name",
    },
    qty: {
      type: Number,
      default: 0,
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
const Order = new Schema({
  orderId: {
    type: mongoose.Schema.Types.ObjectId,
  },
  addressReceive: {
    type: String,
  },
  province: {
    type: String,
  },
  district: {
    type: String,
  },
  phone: {
    type: String,
  },
  email: {
    type: String,
  },
  note: {
    type: String,
  },
  items: {
    type: [Item],
    default: [],
  },
  orderValue: {
    type: Number,
  },
  status: {
    type: String,
  },
  date: {
    type: Date,
  },
  receiver: {
    type: String,
  },
});
const Adress = new Schema({
  addressID: {
    type: mongoose.Schema.Types.ObjectId,
  },
  location: {
    type: Array,
  },
  lastName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  companyName: {
    type: String,
  },
  province: {
    type: String,
  },
  nation: {
    type: String,
  },
  zip: {
    type: Number,
  },
  phone: {
    type: String,
  },
  default: {
    type: Boolean,
  },
});
const User = new Schema(
  {
    email: {
      type: String,
      require: true,
      max: 50,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      min: 6,
    },
    phone: {
      type: String,
      max: 12,
    },
    name: {
      type: String,
    },
    roles: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
      },
    ],
    addresses: {
      type: [Adress],
    },
    orders: {
      type: [Order],
      default: [],
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", User);
