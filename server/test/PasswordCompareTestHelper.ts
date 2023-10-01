import bcrypt from "bcrypt";

const PasswordCompareTestHelper = {
  async comparePassword(
    password: string,
    oldPassword: string
  ): Promise<boolean> {
    const match = await bcrypt.compare(password, oldPassword);
    return match;
  },
};

export default PasswordCompareTestHelper;
