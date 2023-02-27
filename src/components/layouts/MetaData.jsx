import { Helmet } from "react-helmet";

const MeteData = ({ title }) => {
  return (
    <Helmet>
      <title> {title}</title>
    </Helmet>
  );
};

export default MeteData;
