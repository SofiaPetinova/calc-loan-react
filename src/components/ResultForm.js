import OpenPaymentSchedule from "./OpenPaymentSchedule";

function ResultForm(props) {

  return (
    <div>
      <h4>
        Loan amount: ${props.loan.amount}
        <br/>
        Term: {props.loan.term} {props.selectValue}
        <br/>
        Interest: {props.loan.interest} %
      </h4>

      <div>
        {!props.openTable && <h3>Answer:</h3>}
        <p>Amount = $ {props.resultForm.amount}  </p>
        <p>Total Interest = $ {props.resultForm.interestSum} </p>
        <p>Total payment = $ {props.resultForm.sum}</p>
        <button onClick={props.toggleOpen}>View schedule table</button>
      </div>
      {props.openTable && <OpenPaymentSchedule loan={props.loan}
                                               result={props.result}
                                               calculateResult={props.calculateResult}/>}
    </div>
  )
}

export default ResultForm