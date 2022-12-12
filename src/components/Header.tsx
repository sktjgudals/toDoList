import React, { useEffect } from "react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  path: string;
}

const Header: React.FC<Props> = ({ title, path }) => {
  useEffect(() => {
    document.title = `${title}`;
  }, [title]);

  return (
    <>
      <Link to={`${path}`} className="heading">
        {title}
      </Link>
    </>
  );
};
export default Header;
