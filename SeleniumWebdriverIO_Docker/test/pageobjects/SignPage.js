
 class SignPage
{
   

     get open()
    {
     return browser.url('https://www.demoblaze.com/index.html')
    }

 

     get btnNavSign()
    {
        return    $('//*[@id="signin2"]');
    }

     get username()
    {
        return   $('//*[@id="sign-username"]');
    }

     get password()
    {
        return  $('//*[@id="sign-password"]');
    }

     get btnSaveSign(){
        return  $('//*[@id="signInModal"]/div/div/div[3]/button[2]');
    }
}
export default new SignPage();