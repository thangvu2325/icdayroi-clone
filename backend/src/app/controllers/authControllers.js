import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "process";

let refreshTokens = [];
class authControllers {
  index(req, res, next) {
    res.send("home");
  }
  handleLogin(req, res) {
    User.findOne({ email: req.body.email })
      .populate("roles", "-__v")
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }
        const passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );
        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
        const accessToken = jwt.sign(
          { id: user._id },
          env.JSON_WEB_TOKEN_HIDEN,
          {
            expiresIn: "20s",
          }
        );
        const refreshToken = jwt.sign(
          { id: user.id },
          env.JSON_WEB_TOKEN_HIDEN,
          {
            expiresIn: "60s",
          }
        );
        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
        const { password, ...props } = user;
        const _doc = {
          _id: user._id,
          name: user.name,
          addressList: user.addressList,
          order: user.orders,
          roles: user.roles ? user.roles : "",
          email: user.email,
          phone: user.phone,
        };
        res.status(200).json({ _doc, accessToken });
      })
      .catch((err) => {
        res.status(500).send({ message: err });
      });
  }
  async signup(req, res) {
    const salt = await bcrypt.genSalt(10);
    const user = new User({
      email: req.body.email,
      name: req.body.name,
      password: bcrypt.hashSync(req.body.password, salt),
    });
    user
      .save()
      .then((user) => {
        if (req.body.roles) {
          return Role.find({
            name: { $in: req.body.roles },
          }).then((roles) => {
            user.roles = roles.map((role) => role._id);
            return user.save();
          });
        } else {
          return Role.findOne({ name: "user" }).then((role) => {
            user.roles = [role._id];
            return user.save();
          });
        }
      })
      .then(() => {
        res.send({ message: "User was registered successfully!" });
      })
      .catch((err) => {
        res.status(500).send({ message: err });
      });
  }
  logOut(req, res) {
    const refreshToken = req.cookies.refreshToken;
    refreshTokens = refreshTokens.filter((token) => token !== refreshToken);
    res.clearCookie("refreshToken");
    res.status(200).json("Logged out successfully!");
  }
  generateAccessToken(user) {
    return jwt.sign(
      {
        id: user.id,
      },
      process.env.JSON_WEB_TOKEN_HIDEN,
      { expiresIn: "300s" }
    );
  }
  refreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("You're not authenticated");
    }

    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh Token is not valid");
    }

    jwt.verify(refreshToken, process.env.JSON_WEB_TOKEN_HIDEN, (err, user) => {
      if (err) {
        return res.status(403).json("Refresh Token verification failed");
      }

      // Xoá refreshToken cũ khỏi danh sách
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      // Tạo mã thông báo mới
      const newAccessToken = jwt.sign(
        { id: user.id },
        process.env.JSON_WEB_TOKEN_HIDEN,
        { expiresIn: "30s" }
      );
      const newRefreshToken = jwt.sign(
        { id: user.id },
        process.env.JSON_WEB_TOKEN_HIDEN,
        { expiresIn: "60s" }
      );

      // Thêm refreshToken mới vào danh sách
      refreshTokens.push(newRefreshToken);

      // Gửi refreshToken mới về trình duyệt
      res.cookie("refreshToken", newRefreshToken, {
        httpOnly: true,
        secure: false,
        path: "/",
        sameSite: "strict",
      });

      // Trả về accessToken mới
      res.status(200).json({ accessToken: newAccessToken });
    });
  }
}

export default new authControllers();
