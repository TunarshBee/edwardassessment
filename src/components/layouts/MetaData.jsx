import { Helmet } from "react-helmet";

const MeteData = ({ title }) => {
  return (
    <Helmet>
      <title data-testid="JEdward"> {`${title}`}</title>
    </Helmet>
  );
};

export default MeteData;
