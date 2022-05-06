import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import MenuItem from "../menu-item/menu-item.component";
import { selectDirectorySections } from "../../redux/directory/directory.selectors";

import "./directory.styles.scss";

const Directory = ({ sections }) => {
  // we need to move this state in redux because when we want to create our mobile component, again we will need these data and we dont want to do tunneling to get the props

  return (
    <div className="directory-menu">
      {sections.map(({ id, ...otherProps }) => {
        return <MenuItem key={id} {...otherProps} />;
      })}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections,
});
export default connect(mapStateToProps)(Directory);
