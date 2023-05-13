class Programmer {
  name: string;
  earning: number;
  age: number;

  constructor(name: string, earning: number, age: number) {
    this.name = name;
    this.earning = earning;
    this.age = age;
  }

  writeCodeAt(hour: number): string {
    return `the programmer write code every day at ${hour} am/pm`;
  }
}

class Programmer1 extends Programmer {
  constructor(name: string, earning: number, age: number) {
    super(name, earning, age);
  }
  ExtraWork(hour: number): string {
    return `the programmer earning  extra money after regular work`;
  }
}

class Programmer2 extends Programmer {
  constructor(name: string, earning: number, age: number) {
    super(name, earning, age);
  }

  spentTimeWithFamily(hour: number): string {
    return `the programmer spend time his family after regular work`;
  }
}

const firsConsole = new Programmer1("jasim", 500, 18)

