import React,{Fragment} from "react";
import { TopBar } from "./TopBar";
import { Footer } from "./Footer";
import { ContentRowTop } from './ContentRowTop'

export function ContentWrapper() {
  return (
    <Fragment>
    <div id="content-wrapper" className="d-flex flex-column">
      <div id="content">
        <TopBar />
        <ContentRowTop />
      </div>
      <Footer />
    </div>
    </Fragment>
  );
}
