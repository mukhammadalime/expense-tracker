const BalanceNavbar = ({
  changeActiveColumn,
  activeColumn,
}: {
  changeActiveColumn: (barName: string) => void;
  activeColumn: string;
}) => {
  const changeActiveBar = (barName: string) => {
    window.innerWidth < 900 && changeActiveColumn(barName);
  };

  return (
    <div className="balance-navbar grid">
      <div
        className={`balance-navbar__item${
          activeColumn === "expenses" ? " active-item" : ""
        }`}
        onClick={changeActiveBar.bind(this, "expenses")}
      >
        <div className="grid gap-4">
          <h4>Expenses</h4>
          <span>135.280k</span>
        </div>
      </div>

      <div
        className={`balance-navbar__item${
          activeColumn === "incomes" ? " active-item" : ""
        }`}
        onClick={changeActiveBar.bind(this, "incomes")}
      >
        <div className="grid gap-4">
          <h4>Incomes</h4>
          <span>610.280k</span>
        </div>
      </div>

      <div
        className={`balance-navbar__item${
          activeColumn === "loans" ? " active-item" : ""
        }`}
        onClick={changeActiveBar.bind(this, "loans")}
      >
        <div className="grid ">
          <h4>Loans</h4>
          <span>0.0k</span>
        </div>
      </div>
    </div>
  );
};

export default BalanceNavbar;
