import CartPage from "../pageobjects/CartPage";


describe('Cart', async () => {
    
    it('click pour ajouter dans le panier', async() => {
        CartPage.open

      await  CartPage.addCart.click()
    });

});