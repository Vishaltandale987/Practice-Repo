/* eslint-disable no-undef */
import initialState from "../fixtures/initialState.json";
import cartItems from "../fixtures/getCartItems.json";
import results from "../../results.json";

// import data from "../../submissionData.json"; // do not create this file
const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];
function generateScore(a, s, weight) {
  const attempt = cy.state("runnable")._currentRetry;
  s = attempt === 1 ? -weight : weight;
  a += s;
  a = a < 0 ? 0 : a;
  return a;
}

const getStore = (win) => win.store.getState();
const getAuth = (win) => win.store.getState().auth;
const getProduct = (win) => win.store.getState().product;
const getCart = (win) => win.store.getState().cart;

describe("RCT-201-B20-C3", function () {
  let acc_score = 0;
  let score = 0;

  data.map((user) => {
    beforeEach(() => {
      cy.visit(user.submission_link, {
        onBeforeLoad: (win) => {
          win.initialState = initialState;
        },
      });
      cy.window().its("store").should("exist");
      cy.window().its("store").invoke("dispatch", { type: "auth/reset" });
      cy.window().its("store").invoke("dispatch", { type: "products/reset" });
      cy.window().its("store").invoke("dispatch", { type: "cart/items/reset" });
    });
    it("should check store structure", () => {
      cy.window().then(getStore).should("deep.equal", initialState);

      acc_score = generateScore(0, score, 2);
    });

    it("Login and Logout should work and auth state should update accordingly", () => {
      // self redirect to login page
      cy.url().should("eq", "http://localhost:3000/login");

      cy.intercept("GET", "**/products", { fixture: "getProducts.json" }).as(
        "getProducts"
      );
      cy.intercept("GET", "**/cartItems", { fixture: "getCartItems.json" }).as(
        "getCartItems"
      );
      cy.intercept("POST", "**/api/login").as("login");

      cy.get("[data-cy=login-email").clear().type("eve.holt@reqres.in");
      cy.get("[data-cy=login-password").clear().type("cityslicka");
      cy.get("[data-cy=login-submit").click();

      cy.window().then(getAuth).its("loading").should("equal", true);
      cy.window().then(getAuth).its("loading").should("equal", true);
      cy.window().then(getAuth).its("error").should("equal", false);
      cy.window()
        .then(getAuth)
        .its("data")
        .its("isAuthenticated")
        .should("equal", false);

      cy.wait(["@login"]);

      cy.window().then(getAuth).its("loading").should("equal", false);
      cy.window().then(getAuth).its("error").should("equal", false);
      cy.window()
        .then(getAuth)
        .its("data")
        .its("isAuthenticated")
        .should("equal", true);

      cy.url().should("eq", "http://localhost:3000/");
      cy.get("[data-cy=navbar-login-logout-button").click();
      cy.url().should("eq", "http://localhost:3000/login");

      cy.window().then(getAuth).its("loading").should("equal", false);
      cy.window().then(getAuth).its("error").should("equal", false);
      cy.window()
        .then(getAuth)
        .its("data")
        .its("isAuthenticated")
        .should("equal", false);
      acc_score = generateScore(0, score, 2);
    });

    it("Check Data Rendering and cart and product state", () => {
      cy.url().should("eq", "http://localhost:3000/login");
      cy.intercept("GET", "**/products", { fixture: "getProducts.json" }).as(
        "getProducts"
      );
      cy.intercept("GET", "**/cartItems", { fixture: "getCartItems.json" }).as(
        "getCartItems"
      );
      cy.get("[data-cy=login-email").clear().type("eve.holt@reqres.in");
      cy.get("[data-cy=login-password").clear().type("cityslicka");
      cy.get("[data-cy=login-submit").click();

      cy.url().should("eq", "http://localhost:3000/");
      cy.wait("@getProducts").then((interception) => {
        cy.window().then(getProduct).its("loading").should("equal", false);
        cy.window().then(getProduct).should("deep.equal", {
          loading: false,
          error: false,
          data: interception.response.body,
        });
        cy.get("[data-cy=product-name]").should("have.length", 9);
        acc_score = generateScore(acc_score, score, 2);
      });
      cy.wait("@getCartItems").then((interception) => {
        cy.window()
          .then(getCart)
          .its("getCartItems")
          .should("deep.equal", { loading: false, error: false });
        cy.window()
          .then(getCart)
          .its("data")
          .should("deep.equal", interception.response.body);

        acc_score = generateScore(acc_score, score, 2);
      });
    });

    it("Check Add/Remove Product to Cart", () => {
      cy.url().should("eq", "http://localhost:3000/login");
      cy.intercept("GET", "**/products", { fixture: "getProducts.json" }).as(
        "getProducts"
      );
      cy.intercept("GET", "**/cartItems", { fixture: "getCartItems.json" }).as(
        "getCartItems"
      );
      cy.intercept("POST", "**/cartItems", (req) => {
        const body = req.body;
        expect(body).to.deep.equal({ productId: 5, count: 1 });
        req.reply({ fixture: "postCartItem.json", delay: 500 });
      }).as("postCartItems");

      cy.intercept("DELETE", "**/cartItems/**", (req) => {
        expect(req.method).to.equal("DELETE");
        expect(req.url).to.match(/cartItems\/5$/);
        req.reply({}, { status: 200 });
      }).as("deleteCartItem");
      cy.get("[data-cy=login-email").clear().type("eve.holt@reqres.in");
      cy.get("[data-cy=login-password").clear().type("cityslicka");
      cy.get("[data-cy=login-submit").click();
      cy.wait(["@getProducts", "@getCartItems"]);

      cy.get("[data-cy=product-add-item-to-cart-button]").eq(0).click();
      cy.wait("@postCartItems");
      acc_score = generateScore(acc_score, score, 1);

      cy.get("[data-cy=product-remove-cart-item-button]").eq(-1).click();
      cy.wait("@deleteCartItem");
      acc_score = generateScore(acc_score, score, 1);
    });

    it("Increment and Decrement Should Update Value", () => {
      cy.url().should("eq", "http://localhost:3000/login");
      cy.intercept("GET", "**/products", { fixture: "getProducts.json" }).as(
        "getProducts"
      );
      cy.intercept("GET", "**/cartItems", { fixture: "getCartItems.json" }).as(
        "getCartItems"
      );

      cy.intercept("PATCH", "**/cartItems/**", (req) => {
        const body = req.body;
        const id = Number(req.url.split("cartItems/")[1]);
        const cartItem = cartItems.find((cI) => cI.id === id);
        if (body.count < cartItem.count) {
          req.reply({ ...cartItem, count: cartItem.count - 1 });
        } else {
          req.reply({ ...cartItem, count: cartItem.count + 1 });
        }
      }).as("patchCartItems");
      cy.get("[data-cy=login-email").clear().type("eve.holt@reqres.in");
      cy.get("[data-cy=login-password").clear().type("cityslicka");
      cy.get("[data-cy=login-submit").click();
      cy.wait(["@getProducts", "@getCartItems"]);

      cartItems.forEach((cI) => {
        cy.get(`[data-cy=product-${cI.productId}]`).within(() => {
          cy.get("[data-cy=product-increment-cart-item-count-button]").click();

          cy.wait("@patchCartItems").then((interception) => {
            let body = interception.response.body;
            cy.get("[data-cy=product-count]").contains(body.count);
          });

          cy.get("[data-cy=product-decrement-cart-item-count-button]").click();

          cy.wait("@patchCartItems").then((interception) => {
            let body = interception.response.body;
            cy.get("[data-cy=product-count]").contains(body.count);
          });
        });
      });
      acc_score = generateScore(acc_score, score, 2);
    });

    it(`${user.submission_link} Generate score`, () => {
      acc_score = acc_score === 0 ? 1 : acc_score;
      acc_score = acc_score === 10 ? 9 : acc_score;
      console.log(`Final Score is `, acc_score);

      let result = {
        id: user.id,
        marks: acc_score,
      };
      results.push(result);
      JSON.stringify(results);
      cy.writeFile("results.json", `\n${results},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
    });
  });
});
