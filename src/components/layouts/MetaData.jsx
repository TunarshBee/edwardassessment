import { Helmet } from "react-helmet";

const MeteData = ({ title }) => {
  return (
    <Helmet>
      <title> {title} (JE) </title>
    </Helmet>
  );
};

export default MeteData;
