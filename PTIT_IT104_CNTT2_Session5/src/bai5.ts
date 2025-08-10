class Rectangle {
  private width: number
  private height: number

  constructor(width: number, height: number) {
    this.width = width
    this.height = height
  }

  public getWidth(): number {
    return this.width
  }

  public setWidth(width: number): void {
    if (width > 0) {
      this.width = width
    }
  }

  public getHeight(): number {
    return this.height
  }

  public setHeight(height: number): void {
    if (height > 0) {
      this.height = height
    }
  }

  public getArea(): number {
    return this.width * this.height
  }

  public getPerimeter(): number {
    return 2 * (this.width + this.height)
  }
}

const rect = new Rectangle(10, 5)

console.log("Chiều rộng:", rect.getWidth())
console.log("Chiều dài:", rect.getHeight())
console.log("Diện tích:", rect.getArea())
console.log("Chu vi:", rect.getPerimeter())

rect.setWidth(20)
rect.setHeight(15)

console.log("Chiều rộng sau khi cập nhật:", rect.getWidth())
console.log("Chiều dài sau khi cập nhật:", rect.getHeight())
console.log("Diện tích sau khi cập nhật:", rect.getArea())
console.log("Chu vi sau khi cập nhật:", rect.getPerimeter())
