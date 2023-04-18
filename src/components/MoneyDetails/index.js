// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {balance, income, expenses} = props

  return (
    <>
      <div className="balance-cont">
        <img
          alt="balance"
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <div className="inner-balance">
          <p className="your-balance">Your Balance</p>
          <p data-testid="balanceAmount" className="display-blns">
            Rs {balance}
          </p>
        </div>
      </div>
      <div className="income-cont">
        <img
          alt="income"
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <div className="inner-balance">
          <p className="your-balance">Your Income</p>
          <p data-testid="incomeAmount" className="display-blns">
            Rs {income}
          </p>
        </div>
      </div>
      <div className="expenses-cont">
        <img
          alt="expenses"
          className="logo-img"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <div className="inner-balance">
          <p className="your-balance">Your Expenses</p>
          <p data-testid="expensesAmount" className="display-blns">
            Rs {expenses}
          </p>
        </div>
      </div>
    </>
  )
}

export default MoneyDetails
