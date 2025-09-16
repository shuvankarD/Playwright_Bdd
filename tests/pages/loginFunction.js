
async function loginFeature(page){

    const url = "https://ecommerce-playground.lambdatest.io/";
    const emailAddress = "pranav@testroverautomation.com";
    const password = "Test1234";

    //browser open
    await page.goto(url);
    //click on my account
    await page.getByRole("button", {name: 'My Account'}).click()
    //enter email
    await page.getByPlaceholder('E-Mail Address').fill(emailAddress);
    //enter password
    await page.getByPlaceholder('Password').fill(password)
    //click on login button
    await page.getByRole("button", {name:'Login'}).click()

}

module.exports= {loginFeature};