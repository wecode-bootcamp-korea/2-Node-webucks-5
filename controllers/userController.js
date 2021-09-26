import userService from "../services/userService";

const createUser = async (req, res) => {
  const { email, password, username, address, phone_number, policy_agreed } =
    req.body;
  const isExistEmail = await userService.isExistUser(email);
  if (!isExistEmail) {
    await userService.createUser(
      email,
      password,
      username,
      address,
      phone_number,
      policy_agreed
    );
    res.json({ message: "sign up success" });
  } else {
    res.json({ message: "the email is already taken!" });
  }
};

export default { createUser };
