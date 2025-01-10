class Stack {
    constructor() {
        this.top = -1
        this.items = {}
    }
    get peek() {
        return this.items[this.top]
    }
    push(item) {
        this.top += 1;
        this.items[this.top] = item;
    }
    pop() {
        let item = this.items[this.top]
        delete this.items[this.top];
        this.top = this.top - 1
        return item
    }

}

describe("My stack", () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })
    test("is created Empty", () => {
        expect(stack.top).toBe(-1);
        expect(stack.items).toEqual({})
    });
    it("can push to the top", () => {
        stack.push("1");
        expect(stack.top).toBe(0);
        expect(stack.peek).toBe("1");
    });
    it("can pop off", () => {
        let item = stack.pop();
        expect(item).toBe(stack.peek)
        expect(stack.top).toBe(-2)
    });
})