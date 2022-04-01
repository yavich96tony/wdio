
class CartPage{

    get open()
    {
     return browser.url('https://www.demoblaze.com/prod.html?idp_=1')
    }

    get addCart()
    {
        return $('//*[@id="tbodyid"]/div[2]/div/a')
        
    }


}

export default new CartPage()