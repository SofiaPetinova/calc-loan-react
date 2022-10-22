import {useState} from "react";
import LoanJs from 'loanjs'
import ResultForm from "./ResultForm";

function Calculator() {
  const [loan, setLoan] = useState(
    {
      amount: '',
      term: '',
      interest: '',
    })
  const [selectValue, setSelectValue] = useState('months')
  // const [selectPaymentOption, setSelectPaymentOption] = useState('annuity')

  const [result, setResult] = useState([])
  const [resultForm, setResultForm] = useState({
    amount: 0,
    interestSum: 0,
    capitalSum: 0,
    sum: 0
  })

  const [openTable, setOpenTable] = useState(false)

  function toggleOpen(){
    setOpenTable(!openTable)
  }

  function calculateResult(amount, term, interest){
    const calcTerm = selectValue === 'years' ? Number(term) * 12 : Number(term)
    const loan = new LoanJs.Loan(amount, calcTerm, interest)
    setResult(loan.installments)
    setResultForm(loan)
    console.log(loan)
  }


  // function calculateResultAnnuity(amount, interest, term){
  //     const userAmount = Number(amount)
  //     const calcInterest = Number(interest) / 100 / 12
  //     const calcTerm = selectValue === 'years' ? Number(term) * 12 : Number(term)
  //
  //     const square = Math.pow(1 + calcInterest, calcTerm)
  //     const monthlyPaymentCalc = ((userAmount * square * calcInterest) / (square - 1)).toFixed(2)
  //     const totalPaymentCalc = (monthlyPaymentCalc * calcTerm).toFixed(2)
  //     const totalInterestCalc = (monthlyPaymentCalc * calcTerm - userAmount).toFixed(2)
  //     setResult({
  //         monthlyPayment: monthlyPaymentCalc,
  //         totalPayment: totalPaymentCalc,
  //         totalInterest: totalInterestCalc
  //     })
  // }
  //
  // function calculateResultDiff(amount, interest, term){
  //     let userAmount = Number(amount)
  //     // const calcInterest = Number(interest) / 100 / 12
  //     const calcTerm = selectValue === 'years' ? Number(term) * 12 : Number(term)
  //
  //     let monthlyPayment = 0
  //     let interestRate = 0
  //     const monthRate = Number(interest) / 12
  //     let remainAmount = userAmount
  //     let mainDebt = userAmount / calcTerm
  //     for(let i = 0; i < calcTerm; i++){
  //         interestRate = remainAmount * monthRate
  //         remainAmount -= mainDebt
  //         monthlyPayment = interestRate + mainDebt
  //     }
  //     setResult({
  //         monthlyPayment,
  //         // totalPayment: userAmount,
  //         totalInterest: interestRate
  //     })
  // }

  function clearForm(){
    setLoan({
      amount: '',
      term: '',
      interest: ''
    })
  }


  return (
    <div>
      <h1>Loan Calculator</h1>
      <form>
        <div>
          <label>Amount:</label>
          <input type='number' placeholder='Loan amount'
                 value={loan.amount}
                 onChange={(e) => setLoan({...loan, amount: e.target.value})}/>
        </div>
        <div>
          <label>Loan term:
            <input type='number' placeholder='Loan term'
                   value={loan.term}
                   onChange={(e) => setLoan({...loan, term: e.target.value})}/>
            <select value={selectValue} onChange={(e) => setSelectValue(e.target.value)}>
              <option value="months">Month</option>
              <option value="years">Years</option>
            </select>
          </label>
        </div>
        <div>
          <label>Interest:</label>
          <input type='number' placeholder='Interest rate'
                 value={loan.interest}
                 onChange={(e) => setLoan({...loan, interest: e.target.value})}/>
        </div>
      </form>
      <button onClick={clearForm}>Clear form</button>
      <button onClick={()=>calculateResult(loan.amount, loan.term, loan.interest)}>Calculate</button>

      <ResultForm loan={loan}
                  selectValue={selectValue}
                  result={result}
                  resultForm={resultForm}
                  openTable={openTable}
                  calculateResult={calculateResult}
                  toggleOpen={toggleOpen}/>
    </div>
  )
}

export default Calculator