// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onClickDelete} = props

  const {id, title, amount, type} = transactionDetails
  const onClickDeleteIcon = () => {
    onClickDelete(id)
  }

  return (
    <>
      <li className="list-item">
        <p className="list-title1">{title}</p>
        <p className="list-amount1">{amount}</p>
        <p className="list-type1">{type}</p>
        <button
          data-testid="delete"
          className="delete-btn"
          type="button"
          onClick={onClickDeleteIcon}
        >
          <img
            className="delete-icon-style"
            alt="delete"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          />
        </button>
      </li>
      <hr className="line-separator" />
    </>
  )
}

export default TransactionItem
