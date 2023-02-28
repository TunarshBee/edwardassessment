import { BrowserRouter } from "react-router-dom"
import Films from "../Films"
import { render, screen } from '@testing-library/react';

const film = {
    Poster: 'http://images.google.com',
    Title: 'Film title',
    Year: '2014',
    imdbID: 'slfdfiowje0ioe0weee2'

}
const MockedComponent = (film)=>{
    return(
        <BrowserRouter>
            <Films film={film}/>
        </BrowserRouter>
    )
}

describe('Should display film info', () => { 
    it('should display the image of the film', async () => {
        render(<MockedComponent/>)
        const imageElement = await screen.findByTestId("film-poster");
        expect(imageElement).toBeVisible()
    })
 })