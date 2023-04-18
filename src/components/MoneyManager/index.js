import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: 'Income',
    transactionLists: [],
    balance: 0,
    income: 0,
    expenses: 0,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({amount: event.target.value})
  }

  onChangeType = event => {
    const triggerValue = event.target.value
    let makeValue = null
    if (triggerValue === 'INCOME') {
      makeValue = 'Income'
    } else {
      makeValue = 'Expenses'
    }
    this.setState({type: event.target.value})
  }

  calculateTheBlns = () => {
    const {type, amount} = this.state
    if (type === 'Income') {
      this.setState({balance: amount, income: amount})
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        balance: prevState.balance - amount,
        expenses: amount,
      }))
    }
  }

  addTransaction = event => {
    event.preventDefault()
    this.calculateTheBlns()

    const {title, amount, type} = this.state

    this.setState(prevState => ({
      transactionLists: [
        ...prevState.transactionLists,
        {
          id: uuidv4(),
          title,
          amount,
          type,
        },
      ],
    }))
    this.setState({title: '', amount: '', type: 'Income'})
  }

  onClickDelete = id => {
    const {transactionLists} = this.state
    const getDetails = transactionLists.filter(each => each.id === id)

    const {type, amount} = getDetails[0]

    if (type === 'Income') {
      this.setState(prevState => ({
        balance: prevState.balance - amount,
        income: prevState.income - amount,
      }))
    } else if (type === 'Expenses') {
      this.setState(prevState => ({
        balance: prevState.balance + parseInt(amount),
        expenses: prevState.expenses - amount,
      }))
    }
    const filteredList = transactionLists.filter(each => each.id !== id)
    this.setState({transactionLists: filteredList})
  }

  render() {
    const {
      title,
      amount,
      type,
      transactionLists,
      balance,
      income,
      expenses,
    } = this.state

    return (
      <div className="bg-cont">
        <div className="card">
          <div className="profile-cont">
            <h1 className="user-name">Hi, Richard</h1>
            <p className="role">
              Welcome back to your{' '}
              <span className="role-style">Money Manager</span>
            </p>
          </div>
          <div className="balance-details-cont">
            <MoneyDetails
              balance={balance}
              income={income}
              expenses={expenses}
            />
          </div>
          <div className="form-transactions-cont">
            <form className="input-form">
              <h1 className="form-title">Add Transaction</h1>
              <label className="label-style" htmlFor="transactionTitle">
                TITLE
              </label>
              <input
                placeholder="TITLE"
                value={title}
                id="transactionTitle"
                className="input-title"
                onChange={this.onChangeTitle}
              />
              <label className="label-style" htmlFor="amount">
                AMOUNT
              </label>
              <input
                placeholder="AMOUNT"
                value={amount}
                id="amount"
                className="amount-input"
                onChange={this.onChangeAmount}
              />
              <label className="label-style" htmlFor="type">
                TYPE
              </label>
              <select
                value={type}
                onChange={this.onChangeType}
                className="type-select"
              >
                {transactionTypeOptions.map(each => (
                  <option
                    key={each.optionId}
                    value={each.optionId}
                    className="option-type"
                  >
                    {each.displayText}
                  </option>
                ))}
              </select>
              <button
                className="submit-btn"
                onClick={this.addTransaction}
                type="submit"
              >
                Add
              </button>
            </form>
            <div className="transaction-cont">
              <h1 className="history">History</h1>
              <ul className="transaction-lists">
                <li className="list-style">
                  <p className="list-title">Title</p>
                  <p className="list-amount">Amount</p>
                  <p className="list-type">Type</p>
                </li>
                <hr className="line-separator" />
                {transactionLists.map(each => (
                  <TransactionItem
                    key={each.id}
                    transactionDetails={each}
                    onClickDelete={this.onClickDelete}
                  />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
