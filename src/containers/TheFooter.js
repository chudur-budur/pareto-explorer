import React from "react";
import { CFooter } from "@coreui/react";

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a
          href="http://localhost:3000/"
          target="_blank"
          rel="noopener noreferrer"
        >
          ParetoExplorer
        </a>
        &nbsp;&nbsp;
        <span className="ml-1">
          &copy; 2020&nbsp;&nbsp;
          <a
            href="https://coin-lab.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Computational Optimization and Innovation (COIN) Laboratory
          </a>
          ,&nbsp;&nbsp;
          <a
            href="https://cse.msu.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Department of CSE
          </a>
          ,&nbsp;&nbsp;
          <a
            href="https://www.msu.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            Michigan State University
          </a>
          , East Lansing, MI 48824, USA.
        </span>
      </div>
    </CFooter>
  );
};

export default React.memo(TheFooter);
