const GitUser = require("../models/GitUser");

exports.searchUser = async (req, res) => {
  try {
    const { login } = req.params;

    const user = await GitUser.findOne({ login });

    if (user) {
      res.status(200).send({ data: user });
    }

    const data = await fetch(`https://api.github.com/users/${login}`);
    const json = await data.json();

    const { followers_url, following_url } = json;

    if (followers_url && following_url) {
      const followers = await fetch(followers_url);
      const followersData = await followers.json();

      const following = await fetch(following_url);
      const followingData = await following.json();

      const friends = followersData.filter((object1) =>
        followingData.some(
          (object2) => JSON.stringify(object1) === JSON.stringify(object2)
        )
      );

      json.friends = friends;
      await GitUser.create(json);
    } else {
      res.status(400).json({
        msg: "Somthing went wrong wile lookin for followers and following",
      });
    }
    res.status(200).send(json);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ msg: "Internal Server Error" });
  }
};

exports.getUsers = async (req, res) => {
  const { sortBy } = req.query;

  try {
    const users = await GitUser.find().sort({ [sortBy]: 1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.patchUser = async (req, res) => {
  const { login } = req.params;
  const updates = req.body;

  try {
    const user = await GitUser.findOneAndUpdate({ login }, updates, {
      new: true,
    });
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    res.status(200).json({ message: "User updated successfully.", user });
  } catch (error) {
    res.status(500).json({ error});
  }
};

exports.deleteUser = async (req, res) => {
  const { login } = req.params;

  try {
    await GitUser.findOneAndDelete({ login });

    res.status(200).json({ message: "User deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
