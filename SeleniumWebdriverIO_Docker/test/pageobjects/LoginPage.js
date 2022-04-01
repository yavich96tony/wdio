class LoginPage{
    
    get open()
    {
     return browser.url('https://www.demoblaze.com/index.html')
    }

     get btnNavLogin()
    {
        return   $('//*[@id="login2"]');
    }

     get username()
    {
        return   $('//*[@id="loginusername"]');
    }

     get password()
    {
        return  $('//*[@id="loginpassword"]')
    }

     get btnSaveLogin()
     {
        return  $('//*[@id="logInModal"]/div/div/div[3]/button[2]')
    }

    get navUser(){
        return $('//*[@id="nameofuser"]');
    }
}

export default new LoginPage();