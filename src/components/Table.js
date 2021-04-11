export const TableRow = (props) => {
    const onClick = () => props.onClick(props.id);

    return (
        <div className="table__row" onClick={onClick}>
            <div className="table__row-col">{props.name}</div>
            <div className="table__row-col">{props.username}</div>
            <div className="table__row-col">{props.email}</div>
            <div className="table__row-col">{props.phone}</div>
            <div className="table__row-col">{props.website}</div>
        </div>
    )
}

export const TableHeader = () => {
    return (
        <div className="table__header">
            <div className="table__header-col">Name</div>
            <div className="table__header-col">Username</div>
            <div className="table__header-col">Email</div>
            <div className="table__header-col">Phone</div>
            <div className="table__header-col">Website</div>
        </div>
    )
}
