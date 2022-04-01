import SignPage from '../pageobjects/SignPage';

describe('Page Sign', async() => {

   
    it('ouvrir le menu de la creation de compte', async () => {
      await SignPage.open

     await  SignPage.btnNavSign.click();

      await expect(SignPage.btnNavSign).toHaveText('Sign up')

    });

    it('verification si nous somme bien sur la page',async () => {
      await expect(browser).toHaveUrl('https://www.demoblaze.com/index.html')
    });

    it('tentative de creer un compte', async () => {
       
       
      await  SignPage.username.setValue("yavich10")

      await  SignPage.password.setValue("yavich10")

      await SignPage.btnSaveSign.click()
    });

    

});