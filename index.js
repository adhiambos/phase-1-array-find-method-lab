const record = [
  { year: "2015", result: "W"},
  { year: "2014", result: "N/A"},
  { year: "2013", result: "L"},
  //...
]

function superbowlWin(winningRecord) {
    const winPeriod = winningRecord.find(item => item.result === "W");
    if (winPeriod) {
      return winPeriod.year;
    } else {
      return undefined;
    }
  }