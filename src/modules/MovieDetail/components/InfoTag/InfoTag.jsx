import React from "react";
import Tags from "../Tags";
import { PropTypes } from 'prop-types';

import "./InfoTag.scss";

function InfoTag(props) {
  const { infoTitle, content } = props;

  const renderTags = () => {
    return content.map((item, i) => {
      return <Tags key={i} text={item} />;
    })
  }

  return (
    <div className="info-tag">
      <label className="info-tag__text">{infoTitle}: </label>
      <div className="info-tag__tags">
        {renderTags()}
      </div>
    </div>
  );
}

InfoTag.propTypes = {
  infoTitle: PropTypes.string.isRequired,
  content: PropTypes.array.isRequired,
}

export default InfoTag;
