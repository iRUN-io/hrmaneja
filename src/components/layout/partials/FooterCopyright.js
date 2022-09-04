import React from "react";
import classNames from "classnames";

const FooterCopyright = ({ className, ...props }) => {
  const classes = classNames("footer footer-bar", className);

  return (
    <footer className={classes}>
      <div className="container text-center">
        <div className="row align-items-center">
          <div className="col-sm-6">
            <div className="text-sm-start">
              <p className="mb-0">© {new Date().getFullYear()} iRUN Technology </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterCopyright;
