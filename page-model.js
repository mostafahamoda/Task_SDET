import { Selector } from 'testcafe';

class Page {
    constructor () {
        this.firstName = Selector('input[type=text]').withAttribute('name','firstname') ;
		this.secondName = Selector('input[type=text]').withAttribute('name','lastname') ;
		this.mobileNumber = Selector('input[type=text]').withAttribute('name','phone') ;
		this.email = Selector('input[type=text]').withAttribute('name','email') ;
		this.passWord = Selector('input[type=password]').withAttribute('name','password') ;
		this.passWordConfirm = Selector('input[type=password]').withAttribute('name','confirmpassword') ;
		this.submitButton = Selector('#headersignupform > div:nth-child(8) > button') ; 
    }
}

export default new Page();