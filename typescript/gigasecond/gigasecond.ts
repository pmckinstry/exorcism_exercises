
class Gigasecond {

  gigasecond: number = Math.pow(10, 9) * 1000; //  (millisconds)
  birthday: Date;

  //constructor
  constructor(birthday : Date) {
    this.birthday = birthday;
  }

  date() {
    return new Date(this.birthday.getTime() + this.gigasecond);
  }
}

export default Gigasecond