import Search from "./Search";

const Nav = () => {
  return (
    <div className="bg-primary mx-lg-2 position-fixed fixed-top w-100 rounded d-flex justify-content-around align-items-center mb-lg-2">
      <h3
        data-testid="navHeader"
        className="text-center pt-sm-2 pb-sm-2 text-light d-inline "
      >
        {" "}
        Get movie details from OMDB website{" "}
      </h3>
      <Search />
    </div>
  );
};

export default Nav;
