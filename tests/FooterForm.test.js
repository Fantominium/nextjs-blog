import {render, fireEvent} from "@testing-library/react"
import puppeteer from "puppeteer"
// import FooterFormRender from "../lib/FooterFormLogic"
// import app from "../pages/_app"

// it('should render correctly', () => {
//     const {queryByPlaceholderText} = render(<FooterFormRender/>)
//     const firstName = queryByPlaceholderText("First Name")
//     expect(firstName).toBeTruthy()
// });

describe('Puppeteer tests', () => {

    test('h1 loads correctly', async () => {
        const browser = await puppeteer.launch({
            headless: true,
            slowMo: 80,
        })
        const page = await browser.newPage()
        await page.goto('http://localhost:3000/')

        await page.click('input#firstName')
        await page.type('input#firstName', 'Malcolm')

        await page.click('input#lastName')
        await page.type('input#lastName', 'Garner')

        await page.click('input#email')
        await page.type('input#email', 'malcolm@gmail.com')

        await page.click('#submit')

        const textRes = await page.$eval("#sucMsg", el => el.textContent)

        expect(textRes).toBe("sent successfully");
    }, 100000)


})