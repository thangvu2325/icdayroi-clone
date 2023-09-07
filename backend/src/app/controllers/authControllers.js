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

        const accessToken = jwt.sign({ id: user._id }, env.AccessToken_HIDEN, {
          expiresIn: "20s",
        });
        const refreshToken = jwt.sign({ id: user.id }, env.RefreshToken_HIDEN, {
          expiresIn: "3600s",
        });
        refreshTokens.push(refreshToken);
        res.cookie("refreshToken", refreshToken, {
          httpOnly: true,
          secure: false,
          path: "/",
          sameSite: "strict",
        });
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
        console.log(1);
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
    res.status(200).json({ message: "Logged out successfully!" });
  }

  refreshToken(req, res) {
    const refreshToken = req.cookies.refreshToken;
    if (!refreshToken) {
      return res.status(401).json("You're not authenticated");
    }

    if (!refreshTokens.includes(refreshToken)) {
      return res.status(403).json("Refresh Token is not valid");
    }

    jwt.verify(refreshToken, env.RefreshToken_SECRET_KEY, (err, user) => {
      if (err) {
        return res.status(403).json("Refresh Token verification failed");
      }

      // Xoá refreshToken cũ khỏi danh sách
      refreshTokens = refreshTokens.filter((token) => token !== refreshToken);

      // Tạo mã thông báo mới
      const newAccessToken = jwt.sign(
        { id: user.id },
        process.env.AccessToken_HIDEN,
        { expiresIn: "1800s" }
      );
      const newRefreshToken = jwt.sign(
        { id: user.id },
        process.env.RefreshToken_HIDEN,
        { expiresIn: "3600s" }
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
