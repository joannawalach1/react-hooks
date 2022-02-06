import React, { useState } from "react";

const User = () => {
  const initialData = {
    human: {
      sex: "man",
      surname: "Detic",
    },
    accountBalance: 1000,
  };

  const [sex, setSex] = useState(initialData.human.sex);
  const [surname] = useState(initialData.human.surname);
  const [accountBalance, setAccountBalance] = useState(
    initialData.accountBalance
  );

  const handleSexChange = (e) => {
    e.preventDefault();
    setSex((a) => {
      sex === "male" ? setSex("female") : setSex("male");
    });
  };

  const addMoney = (e) => {
    setAccountBalance(accountBalance => accountBalance + 500);
  };

  const takeMoney = (e) => {
    setAccountBalance(accountBalance => accountBalance - 500)
  };

  return (
    <div>
      <p>surname: {surname}</p>
      <p>sex: {sex}</p>
      <button onClick={handleSexChange}>change sex</button>
      <p>Account Balance: {accountBalance}</p>
      <button onClick={addMoney}>+500</button>
      <button onClick={takeMoney}>-500</button>
    </div>
  );
};

export default User;
