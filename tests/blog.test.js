import * as actions from "../actions";

test("HelloWorld Component", async (done) => {
  let result = await actions.getBlogs();
  expect(result).equal("abacd");
  done();
});
