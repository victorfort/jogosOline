class Cell {
    constructor(value) {
      this.value = value;
    }
  
    render() {
      return `<td>${this.value}</td>`;
    }
  }
  
  export default Cell;
  