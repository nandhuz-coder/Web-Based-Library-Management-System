import { Selector } from "testcafe";
// fixture("authentication suite").page("https://qa-automation-practice.netlify.app/login.html");

// prettier-ignore
fixture `addcomment suite`.page `http://localhost:3000/auth/user-signup`
test("User signup scenario", async (t) => {
  const firstname = Selector("#firstname");
  const lastname = Selector("#lastname");
  const username = Selector("#username");
  const email = Selector("#email");
  const password = Selector("#password");
  const gender = Selector("#gender");
  const address = Selector("#address");
  const submituser = Selector("#btnsubmit");

  await t
    .typeText(firstname, "Nimal")
    .typeText(lastname, "Thalawa")
    .typeText(username, "nimal123")
    .typeText(email, "nimal@gmail.com")
    .typeText(password, "nimal123")
    .typeText(gender, "Male")
    .typeText(address, "Maradana")
    .click(submituser);
});