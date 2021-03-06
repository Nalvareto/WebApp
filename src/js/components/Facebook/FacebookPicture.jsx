import React, {PropTypes } from "react";

import FacebookConstants from "../../constants/FacebookConstants";

export default class FacebookPicture extends React.Component {
    static propTypes = {
      facebookPictureStatus: PropTypes.string,
      facebookPictureUrl: PropTypes.string
    };

    constructor (props) {
        super(props);
    }

    get facebookStatus () {
        let msg;

        if (this.props.facebookPictureStatus === FacebookConstants.FACEBOOK_GETTING_PICTURE) {
            msg = "Downloading picture...";
        }

        if (this.props.facebookPictureStatus === FacebookConstants.FACEBOOK_RECEIVED_PICTURE) {
            msg = "Received picture!";
        }

        return <h3 className="h3">{msg}</h3>;
    }

    get facebookPicture () {
        if (this.props.facebookPictureUrl) {
            return <img src={this.props.facebookPictureUrl} />;
        }
        return <span />;
    }

    render () {
        return <div>
                    {this.facebookStatus}
                    {this.facebookPicture}
                </div>;
    }
}
