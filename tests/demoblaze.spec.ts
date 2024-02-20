import { test, expect } from '@playwright/test';



// test for checking the title of the store...
test('has title Store', async ({ page }) => {
  await page.goto('https://www.demoblaze.com/index.html');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/STORE/);
});




// test for incremental add of products...
test('Check for Product adding functionalities', async ({ page }) => {

    
    await page.goto('https://www.demoblaze.com/index.html');
  
    // Open Product page
  //  await page.locator("(//a[normalize-space()='Samsung galaxy s6'])[1]").click()
    await page.locator("'Samsung galaxy s6'").click()
  // await page.getByRole('link', { name: 'Samsung galaxy s6' }).click()
 

    //increment the Product Quantity
    await page.getByText('Add to cart').click()

    //clicking on cart button from menu
    await page.locator("'Cart'").click()

    // check the total of cart
    await expect(page.locator("//h3[@id='totalp']")).toHaveText('360')

    await page.waitForTimeout(4000)

});



// test for removing product from Cart
test.only('test', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.waitForTimeout(2000)
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.waitForTimeout(2000)
    await expect(page).toHaveScreenshot("expected_cart.png", {fullPage:true})
    
    await page.getByRole('link', { name: 'Delete' }).click();

    // await page.waitForTimeout(4000)
  });
  


  // test for checkout

  test('for checkout order placmeent', async ({ page }) => {

    for(let i=1; i<6;i++){
    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Samsung galaxy s6' }).click();
    page.once('dialog', dialog => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {});
    });
    await page.getByRole('link', { name: 'Add to cart' }).click();
    await page.getByRole('link', { name: 'Cart', exact: true }).click();
    await page.getByRole('button', { name: 'Place Order' }).click();
    await page.getByLabel('Total:').click();
    await page.getByLabel('Total:').fill('Abbas');
    await page.getByLabel('Total:').press('Tab');
    await page.getByLabel('Country:').click();
    await page.getByLabel('Country:').fill('Pakistan');
    await page.getByLabel('Country:').press('Tab');
    await page.getByLabel('City:').fill('Karachi');
    await page.getByLabel('City:').press('Tab');
    await page.getByLabel('Credit card:').fill('1');
    await page.getByLabel('Credit card:').press('Tab');
    await page.getByLabel('Month:').fill('12');
    await page.getByLabel('Month:').press('Tab');
    await page.getByLabel('Year:').fill('1995');
    await page.getByLabel('Year:').press('Tab');
    await page.getByRole('button', { name: 'Purchase' }).click();
    // await page.getByText('Id: 345189Amount: 360 USDCard').click({
    //   button: 'right'
   
    let a= await page.locator("//div[@data-timer='null']/p").allInnerTexts()
    console.log(a)
}
});
    // await page.getByText('Id: 345189Amount: 360 USDCard').click({
    //   button: 'right'
    // });
//   }); 

