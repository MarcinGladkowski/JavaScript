/**
 * Simple set up https://www.typescriptlang.org/download
 *
 * Generic type - typing other types
 *
 * Generic types, interfaces, classes
 * Generic constraints
 * Generic functions
 * Generic functions with parametrized type
 */
const combine = (a: any, b: any) => ({ a, b })
type Combine<A, B> = { a: A, b: B}

// generic T is required
type TestStorage<T> = {
    data: T[],
    add(t: T): void
}

interface IStorage<T> {
    data: T[],
    add(t: T): void
}

class StorageClass<T>  {
    // implements TestStorage require <T>!
    // implements IStorage require <T>!
    public data: T[]

    /**
     * How to enable TypeScript Constructor Assignment
     */
    constructor(data: T[]) {
        this.data = data
    }

    add(t: T) {
        this.data.push(t)
    }
}


/**
 * Using Generic constraint: extends { id: Number }
 */
class AnotherStorageClass<T extends { id: Number }>  {
    // implements TestStorage require <T>!
    // implements IStorage require <T>!
    public data: T[]

    /**
     * How to enable TypeScript Constructor Assignment
     */
    constructor(data: T[]) {
        this.data = data
    }

    findById(id: Number) {
        return this.data.filter((el) => el.id = id)
    }
}

const genericArrow = <T>(a: T, b: T) => ({a, b})
function genericFn<T>(a: T, b: T): {a: T, b: T} {
    return {a, b}
}

const combineString = genericArrow<string>('a', 'b')
const combineNumber = genericArrow<Number>(1, 2)

// Generic function vs parametrized type
// Type starts with Uppercase letter!
type GenericFn = <T>(a: T, b: T) => {a: T, b: T}
type ParametrizedFn<T> = (a: T, b: T) => {a: T, b: T}

declare let parametrizedFn: ParametrizedFn<string> // type is REQUIRED!
declare let genericFnDec: GenericFn // type is not REQUIRED

// Mapped types
// type Reveal<T> = { [P in keyof T]: T[P] }

export interface Transfer {
    id: string,
    amount: number,
    title: string,
    beneficiaryAddress?: string
}

type T1 = Partial<Transfer>
type T2 = Required<Transfer>
type T3 = Pick<Transfer, "id" | "amount">
type T4 = Omit<Transfer, "id" | "amount">

type Reveal<T> = { [P in keyof T]: T[P] }
type RequiredFields<T, K extends keyof T> = Reveal<
    Required<Pick<T, K>> & Omit<T, K>
>

type x  = RequiredFields<{ a?: number, b?: number }, 'a'>

// Statement types
