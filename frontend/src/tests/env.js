const Env = {
    fullName: "example full name",
    DOB: new Date("2001-10-24T10:44:16.063Z"),
    email: `exampleemail104@example.com`,
    username: `exampleUserName104`,
    password: "2304asdfASDFA@$12541",
    AccountId: "",
    bio: null
}

export function resetEnvToDefault() {
    Env.fullName = "example full name";
    Env.DOB = new Date("2001-10-24T10:44:16.063Z");
    Env.email = `exampleemail104@example.com`;
    Env.username = `exampleUserName104`;
    Env.password = "2304asdfASDFA@$12541";
    Env.AccountId = "";
    Env.bio = null;
}

export default Env;