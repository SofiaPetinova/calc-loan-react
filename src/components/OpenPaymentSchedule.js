function OpenPaymentSchedule(props){
  return (
    <table>
      <thead>
      <tr>
        <th>Month</th>
        <th>Payment amount</th>
        <th>Interest Paid</th>
        <th>Principal paid</th>
        <th>Remain</th>
      </tr>
      </thead>
      <tbody>
      {props.result.map((el, index)=> (
        <tr key={index}>
          <td>{index}</td>
          <td>{el.installment}</td>
          <td>{el.interest}</td>
          <td>{Number(el.capital).toFixed(2)}</td>
          <td>{Number(el.remain).toFixed(2)}</td>
        </tr>
      ))}
      </tbody>
    </table>
  )
}
export default OpenPaymentSchedule