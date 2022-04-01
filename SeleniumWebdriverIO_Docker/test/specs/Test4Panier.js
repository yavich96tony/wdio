import PanierPage from "../pageobjects/PanierPage";

describe('Panier',async () => {
    
    it('verification si un element existe dans le panier', async() => {
        PanierPage.open

    await expect( PanierPage.isInPanier).toExist()
    });

    it('clique pour l\'achat', async() => {
        await PanierPage.PayePanier.click()
    });

    it('remplissage du formulaire pour l\'achat ', async() => {
        
        await PanierPage.nom.setValue("TONY")

        await PanierPage.country.setValue("Congo")
        await PanierPage.card.setValue("21AZZ")
        await PanierPage.city.setValue("Brazzaville")
        await PanierPage.mounth.setValue("janvier")
        await PanierPage.year.setValue("2022")
       
        await  PanierPage.btnConfirmModal.click()
        
    });

    it('click apres avoir remplit le formulaire', async() => {
        await PanierPage.btnRecapPayeModal.click();
    });

});