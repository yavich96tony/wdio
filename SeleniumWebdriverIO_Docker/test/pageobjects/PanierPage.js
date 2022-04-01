
class PanierPage{
    
    get open()
    {
        return browser.url('https://www.demoblaze.com/cart.html')
    }

    
    get isInPanier()
    {
        return $('//*[@id="tbodyid"]/tr');
    }

    get PayePanier()
    {
        return $('//*[@id="page-wrapper"]/div/div[2]/button')
        
    }

    get nom()
    {
        return $('//*[@id="name"]')
    }

    get country()
    {
        return $('//*[@id="country"]')
    }

    get city()
    {
        return $('//*[@id="city"]')
    }

    get mounth()
    {
        return $('//*[@id="month"]')
    }

    get year()
    {
        return $('//*[@id="year"]')
    }

   get card(){
       return $('//*[@id="card"]')
   }

   get btnConfirmModal()
   {
       return $('//*[@id="orderModal"]/div/div/div[3]/button[2]');
   }

   get btnRecapPayeModal(){
       return $('/html/body/div[10]/div[7]/div/button');
   }

}

export default new PanierPage();