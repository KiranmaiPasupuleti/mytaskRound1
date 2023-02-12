import {Component} from 'react'

import './index.css'

const chooseNum = [
  {uniqueId: 'zero', display: 'Zero'},
  {uniqueId: 'one', display: 'One'},
  {uniqueId: 'two', display: 'Two'},
  {uniqueId: 'three', display: 'Three'},
  {uniqueId: 'four', display: 'Four'},
  {uniqueId: 'five', display: 'Five'},
  {uniqueId: 'six', display: 'Six'},
  {uniqueId: 'seven', display: 'Seven'},
  {uniqueId: 'eight', display: 'Eight'},
  {uniqueId: 'nine', display: 'Nine'},
]

const chooseOperator = [
  {
    uniqueId: 'plus',
    display: 'Pluse',
  },
  {
    uniqueId: 'minus',
    display: 'Minus',
  },
  {uniqueId: 'times', display: 'Times'},
  {uniqueId: 'dividedBy', display: 'DividedBy'},
]

class MasterPage extends Component {
  state = {
    leftNum: '',
    operator: '',
    rightNum: '',
  }

  onSubmitNumbersOperator = () => {
    function checkNum(num, temp) {
      if (temp === undefined) {
        return num
      }
      return temp(num)
    }

    function zero(temp) {
      return checkNum(0, temp)
    }
    function one(temp) {
      return checkNum(1, temp)
    }
    function two(temp) {
      return checkNum(2, temp)
    }
    function three(temp) {
      return checkNum(3, temp)
    }
    function four(temp) {
      return checkNum(4, temp)
    }
    function five(temp) {
      return checkNum(5, temp)
    }
    function six(temp) {
      return checkNum(6, temp)
    }
    function seven(temp) {
      return checkNum(7, temp)
    }
    function eight(temp) {
      return checkNum(8, temp)
    }
    function nine(temp) {
      return checkNum(9, temp)
    }

    function plus(right) {
      return function (left) {
        return left + right
      }
    }
    function minus(right) {
      return function (left) {
        return left - right
      }
    }
    function times(right) {
      return function (left) {
        return left * right
      }
    }
    function dividedBy(right) {
      return function (left) {
        return Math.round(left / right)
      }
    }

    const {leftNum, operator, rightNum} = this.state

    const answer = eval(`${leftNum}(${operator}(${rightNum}()))`)

    console.log(answer)
  }

  onChangeUserLeft = event => {
    this.setState({leftNum: event.target.value})
  }

  onChangeUserOperator = event => {
    this.setState({operator: event.target.value})
  }

  onChangeUserRight = event => {
    this.setState({rightNum: event.target.value})
  }

  render() {
    const {leftNum, operator, rightNum} = this.state
    console.log(leftNum, operator, rightNum)
    return (
      <div className="master-page-container">
        <div>
          <form
            onSubmit={this.onSubmitNumbersOperator}
            className="input-send-container"
          >
            <select
              value={leftNum}
              onChange={this.onChangeUserLeft}
              className="choose-container"
            >
              {chooseNum.map(eachOp => (
                <option key={eachOp.uniqueId} value={eachOp.uniqueId}>
                  {eachOp.display}
                </option>
              ))}
            </select>
            <select
              value={operator}
              onChange={this.onChangeUserOperator}
              className="choose-container"
            >
              {chooseOperator.map(eachOp => (
                <option key={eachOp.uniqueId} value={eachOp.uniqueId}>
                  {eachOp.display}
                </option>
              ))}
            </select>
            <select
              value={rightNum}
              onChange={this.onChangeUserRight}
              className="choose-container"
            >
              {chooseNum.map(eachOp => (
                <option key={eachOp.uniqueId} value={eachOp.uniqueId}>
                  {eachOp.display}
                </option>
              ))}
            </select>
            <div>
              <button className="output-btn" type="submit">
                Get Output
              </button>
            </div>
          </form>
        </div>

        <div className="question-answer-container">
          <h1>Hello</h1>
        </div>
      </div>
    )
  }
}

export default MasterPage
