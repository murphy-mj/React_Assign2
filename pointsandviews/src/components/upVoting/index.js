import React, {Component, Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";



const withUpVoting = (WrappedComponent) =>
    class VotableComponent extends Component {
      hanleVote = () => ths.props.upvoteHandler(this.props.source.id);


      render () {
          return (
              <Fragment>
                <span className="ptr" onClick={this.handleVote}>
                    <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" ?>
          {`${this.props.source.upvotes}`}
              </span>
              <<WrappedComponent {...this.props} />
              </Fragment>
          );
      }
    }