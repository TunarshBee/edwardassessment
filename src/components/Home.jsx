import Footer from "./layouts/Footer";
import Films from "./films/Films";

const Home = ({films}) => {
  
  return (
    <div className="container-fluid pt-2">
      
      {films &&
        films.map((film) => (
          <ul className="d-flex" key={film.imdbID}>
            <Films film={film} />
          </ul>
        ))}
      <Footer />
    </div>
  );
};

export default Home;
