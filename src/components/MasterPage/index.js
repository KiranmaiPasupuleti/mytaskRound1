import {useState, useEffect} from 'react'

import './index.css'

const chooseNum = [
  {
    id: 'zero',
    name: 'Zero',
  },
  {
    id: 'one',
    name: 'One',
  },
  {
    id: 'two',
    name: 'Two',
  },
  {
    id: 'three',
    name: 'Three',
  },
  {
    id: 'four',
    name: 'Four',
  },
  {
    id: 'five',
    name: 'Five',
  },
  {
    id: 'six',
    name: 'Six',
  },
  {
    id: 'seven',
    name: 'Seven',
  },
  {
    id: 'eight',
    name: 'Eight',
  },
  {
    id: 'nine',
    name: 'Nine',
  },
]

const chooseOperator = [
  {
    id: 'plus',
    name: 'Pluse',
  },
  {
    id: 'minus',
    name: 'Minus',
  },
  {
    id: 'times',
    name: 'Times',
  },
  {
    id: 'dividedBy',
    name: 'DividedBy',
  },
]

const MasterPage = () => {
  const [leftNum, setLeftNum] = useState(chooseNum[0].id)
  const [operator, setOperatur] = useState(chooseOperator[0].id)
  const [rightNum, setRight] = useState(chooseNum[0].id)
  const [localData, setLocalData] = useState([])

  const onSubmitNumbersOperator = event => {
    event.preventDefault()

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
    console.log(leftNum, operator, rightNum)

    const answer = eval(`${leftNum}(${operator}(${rightNum}()))`)

    const finallocal = `${leftNum} ${operator} ${rightNum} = ${answer}`
    let tempData = []

    tempData.push(localData)
    tempData.push(finallocal)
    localStorage.setItem('Data', tempData)
    getDataLocal()
  }

  const onChangeUserLeft = event => {
    setLeftNum(event.target.value)
  }

  const onChangeUserOperator = event => {
    setOperatur(event.target.value)
  }

  const onChangeUserRight = event => {
    setRight(event.target.value)
  }

  const getDataLocal = () => {
    const data = localStorage.getItem('Data')
    console.log(data)

    const me = data.split(',')
    const len = me.length
    setLocalData(me.slice(1, len))
  }

  useEffect(() => {
    const data = localStorage.getItem('Data')
    if (data !== null) {
      getDataLocal()
    }
  }, [])

  console.log(localData)

  return (
    <div className="master-page-container">
      <div>
        <form
          onSubmit={onSubmitNumbersOperator}
          className="input-send-container"
        >
          <select
            value={leftNum}
            onChange={onChangeUserLeft}
            className="choose-container"
          >
            {chooseNum.map(eachOp => (
              <option key={eachOp.id} value={eachOp.id}>
                {eachOp.name}
              </option>
            ))}
          </select>
          <select
            value={operator}
            onChange={onChangeUserOperator}
            className="choose-container"
          >
            {chooseOperator.map(eachOp => (
              <option key={eachOp.id} value={eachOp.id}>
                {eachOp.name}
              </option>
            ))}
          </select>
          <select
            value={rightNum}
            onChange={onChangeUserRight}
            className="choose-container"
          >
            {chooseNum.map(eachOp => (
              <option key={eachOp.id} value={eachOp.id}>
                {eachOp.id}
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
        {localData.map(eachData => (
          <p className="para">{eachData}</p>
        ))}
      </div>
    </div>
  )
}

export default MasterPage
