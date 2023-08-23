import Role from "./app/models/Role.js";
async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();
    if (count === 0) {
      await new Role({
        name: "user",
      }).save();
      console.log("added 'User' to roles collection");

      await new Role({
        name: "Administrator",
      }).save();
      console.log("added 'Administrator' to roles collection");

      await new Role({
        name: "Moderator",
      }).save();
      console.log("added 'Moderator' to roles collection");
    }
  } catch (err) {
    console.log("error", err);
  }
}
export default initial;
