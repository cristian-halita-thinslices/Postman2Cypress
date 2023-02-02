/// <reference types ="cypress" </>

describe("Twilio API test", () => {
  it("should send a message", () => {
    cy.api({
      method: "POST",
      url: "https://api.twilio.com/2010-04-01/Accounts/AC80d51b7090bda9f567760d998e90eb84/Messages.json",
      headers: {
        Authorization:
          "Basic QUM4MGQ1MWI3MDkwYmRhOWY1Njc3NjBkOTk4ZTkwZWI4NDplNjc4NmFhMjY3NjcxMTE2NjNkOGE0ODhjMzExNmMyYg==",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: {
        To: "+40756885030",
        Body: "Sent from Postman!",
        From: "+12512782080",
      },
    }).then((response) => {
      expect(response.status).to.equal(201);
    });
  });
});
