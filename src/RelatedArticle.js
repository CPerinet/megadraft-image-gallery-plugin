/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */

/* global __ */

import React, {Component} from "react";

import {MegadraftPlugin, MegadraftIcons} from "megadraft";


const {BlockInput} = MegadraftPlugin;


export default class RelatedArticle extends Component {
  constructor(props) {
    super(props);

    this._handleImgChange = :: this._handleImgChange;
    this._handleDescChange = ::this._handleDescChange;
  }

  _handleImgChange(event) {
    this.props.updateArticle(this.props.item.key, "img", event.target.value);
  }

  _handleDescChange(event) {
    this.props.updateArticle(this.props.item.key, "desc", event.target.value);
  }

  _handleDeleteClick(event) {
    this.props.removeArticle(this.props.item.key);
  }

  render() {
    return (
      <div className="related-articles">
        <div className="related-articles__inputs">
          <BlockInput
            placeholder={__("Image Link")}
            value={this.props.item.img}
            styles={{ padding: "small" }}
            onChange={this._handleImgChange} />
          <BlockInput
            placeholder={__("Caption")}
            value={this.props.item.desc}
            styles={{padding: "small"}}
            onChange={this._handleDescChange} />
        </div>
        <div className="related-articles__trash" onClick={this._handleDeleteClick}>
          <MegadraftIcons.DeleteIcon/>
        </div>
      </div>
    );
  }
}
