const Modal = (props) => {
    if(!props.isShow) return null;

    return (
        <div className="modal">
            <div className="modal__background" onClick={props.handleShowModal}/>
            <div className="modal__content">
                <div className="modal__content-item"><span>Name:</span>{props.content.name}</div>
                <div className="modal__content-item"><span>Username:</span>{props.content.username}</div>
                <div className="modal__content-item"><span>Email:</span>{props.content.email}</div>
                <div className="modal__content-item"><span>Phone:</span>{props.content.phone}</div>
                <div className="modal__content-item"><span>Website:</span>{props.content.website}</div>
                <div className="modal__content-item"><span>Address:</span> <br/> city: {props.content.address.city}, <br/> street: {props.content.address.street},<br/> suite: {props.content.address.suite}</div>
                <div className="modal__content-item"><span>Company:</span>{props.content.company.name}</div>
            </div>
        </div>
    )
}

export default Modal;
