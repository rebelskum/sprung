import React, { Component } from 'react';

class PostClass extends Component {
  static defaultProps = {
    onCloseModal() {},
    hideX: false,
    buttonText: '',
    className: '',
    wrap: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      isOpen: true,
    };
    this.closeModal = this.closeModal.bind(this);
}

  componentWillReceiveProps() {
    this.setState({ isOpen: true });
  }

  @keydown('esc', 'enter')
  closeModal(e) {
    const shouldClose = (
      (e && e.type === 'click') ||
      (e && e.keyCode === 13 && this.props.buttonText) ||
      (e && e.keyCode === 27 && !this.props.hideX)
    );
    if (shouldClose) {
      if (this.props.closeModal) {
        this.props.closeModal();
      } else {
        this.setState({ isOpen: false }, this.props.onCloseModal);
      }
    }
  }
}
