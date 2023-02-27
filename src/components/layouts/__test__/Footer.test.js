import { render, screen } from "@testing-library/react"
import Footer from "../Footer"

describe('Check for the footer copyrights', () =>{
    it('should display the footer copyrights', async () =>{
        render(<Footer/>)
        const footerHeading =  screen.getByRole('heading')
        expect(footerHeading).toBeTruthy()
    })
})