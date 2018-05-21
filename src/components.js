import React, { Component } from 'react';
import { AvForm, AvFeedback, AvGroup, AvInput } from 'availity-reactstrap-validation';
import { Modal, Button, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';

export class HelloLib extends Component {
    render() { 
        return (
            <div>Hello World</div>
        );
    }
}

export class CdiConfirmModal extends Component { 
    constructor(props) {
        super(props); 
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    } 

    save () { 
        this.props.onConfirmClose(true); 
    }
    
    cancel () { 
        this.props.onConfirmClose(false); 
    }

    render() { 
        return (
            <span>
                <Modal isOpen={this.props.modalState} className={this.props.className}>
                    <ModalHeader>{this.props.modalData.header}</ModalHeader>
                    <ModalBody> 
                        <Label>{this.props.modalData.message}</Label>
                        <div className="row">
                            <div className="col text-right">
                                <Button color="primary" onClick={this.save}>Yes</Button>&nbsp;
                                <Button color="secondary" onClick={this.cancel}>No</Button>
                            </div>
                        </div>
                    </ModalBody> 
                </Modal>
            </span>
        );
    }
}