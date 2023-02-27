import Search from "./Search";

const Nav = () => {
  return (
    <div className="bg-primary mx-2 position-fixed fixed-top w-100 rounded d-flex justify-content-around align-items-center mb-2">
      <h3
        data-testid="navHeader"
        className="text-center pt-2 pb-2 text-light d-inline "
      >
        {" "}
        Get movie details from OMDB website{" "}
      </h3>
      <Search />
    </div>
  );
};

export default Nav;
