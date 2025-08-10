class Vehicle {
  name: string
  year: number
  company: string

  constructor(name: string, year: number, company: string) {
    this.name = name
    this.year = year
    this.company = company
  }

  hienThiThongTin(): void {
    console.log(`Tên phương tiện: ${this.name}`)
    console.log(`Năm sản xuất: ${this. Year}`)
    console.log(`Hãng xe: ${this.company}`)
    console.log('---------------------')
  }
}

const xe1 = new Vehicle("Camry", 2020, "Toyota")
const xe2 = new Vehicle("Civic", 2022, "Honda")

xe1.hienThiThongTin()
xe2.hienThiThongTin()
