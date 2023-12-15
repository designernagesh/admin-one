export const Card = ({getIcon, card}) => {
    return (
        <div className="card">
            <div>
                <div className="numbers">{card.count}</div>
                <div className="cardName">{card.name}</div>
            </div>
            <div className="iconBx">
                {getIcon(card.icon)}
            </div>
        </div>
    )
}