
import LoginPage from "../pageobjects/LoginPage";


describe('Login', async () => {

    it('aller sur le login', async () => {
      LoginPage.open

      await LoginPage.btnNavLogin.click();
    });

    it('tentative de connexion', async () => {
      await LoginPage.username.setValue('yavich10');
      await LoginPage.password.setValue('yavich10');

      await LoginPage.btnSaveLogin.click();

    });

});