
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Service
 * 
 */
export type Service = $Result.DefaultSelection<Prisma.$ServicePayload>
/**
 * Model Supplier
 * 
 */
export type Supplier = $Result.DefaultSelection<Prisma.$SupplierPayload>
/**
 * Model TherapeuticClass
 * 
 */
export type TherapeuticClass = $Result.DefaultSelection<Prisma.$TherapeuticClassPayload>
/**
 * Model SubClass
 * 
 */
export type SubClass = $Result.DefaultSelection<Prisma.$SubClassPayload>
/**
 * Model Medication
 * 
 */
export type Medication = $Result.DefaultSelection<Prisma.$MedicationPayload>
/**
 * Model MedicationBatch
 * 
 */
export type MedicationBatch = $Result.DefaultSelection<Prisma.$MedicationBatchPayload>
/**
 * Model StockEntry
 * 
 */
export type StockEntry = $Result.DefaultSelection<Prisma.$StockEntryPayload>
/**
 * Model StockExit
 * 
 */
export type StockExit = $Result.DefaultSelection<Prisma.$StockExitPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderItem
 * 
 */
export type OrderItem = $Result.DefaultSelection<Prisma.$OrderItemPayload>
/**
 * Model DeliveryNote
 * 
 */
export type DeliveryNote = $Result.DefaultSelection<Prisma.$DeliveryNotePayload>
/**
 * Model Alert
 * 
 */
export type Alert = $Result.DefaultSelection<Prisma.$AlertPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  PHARMACIST: 'PHARMACIST',
  SERVICE_COORDINATOR: 'SERVICE_COORDINATOR',
  ORDER_PREPARER: 'ORDER_PREPARER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const MedicationForm: {
  TABLET: 'TABLET',
  CAPSULE: 'CAPSULE',
  INJECTION: 'INJECTION',
  CREAM: 'CREAM',
  OINTMENT: 'OINTMENT',
  SUPPOSITORY: 'SUPPOSITORY',
  INHALER: 'INHALER',
  PATCH: 'PATCH',
  DROPS: 'DROPS',
  POWDER: 'POWDER',
  SYRUP: 'SYRUP',
  OTHER: 'OTHER'
};

export type MedicationForm = (typeof MedicationForm)[keyof typeof MedicationForm]


export const PackagingUnit: {
  FLACON: 'FLACON',
  TUBE: 'TUBE',
  BOITE: 'BOITE',
  AMPOULE: 'AMPOULE',
  BLISTER: 'BLISTER',
  SACHET: 'SACHET',
  FLACON_POUDRE: 'FLACON_POUDRE',
  PILULIER: 'PILULIER'
};

export type PackagingUnit = (typeof PackagingUnit)[keyof typeof PackagingUnit]


export const ExitReason: {
  ORDER_FULFILLMENT: 'ORDER_FULFILLMENT',
  EXPIRATION: 'EXPIRATION',
  DAMAGE: 'DAMAGE',
  RETURN: 'RETURN',
  OTHER: 'OTHER'
};

export type ExitReason = (typeof ExitReason)[keyof typeof ExitReason]


export const OrderStatus: {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  VALIDATED: 'VALIDATED',
  PARTIALLY_VALIDATED: 'PARTIALLY_VALIDATED',
  IN_PREPARATION: 'IN_PREPARATION',
  PREPARED: 'PREPARED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

export type OrderStatus = (typeof OrderStatus)[keyof typeof OrderStatus]


export const OrderItemStatus: {
  PENDING: 'PENDING',
  VALIDATED: 'VALIDATED',
  PARTIALLY_VALIDATED: 'PARTIALLY_VALIDATED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
  PREPARED: 'PREPARED',
  DELIVERED: 'DELIVERED'
};

export type OrderItemStatus = (typeof OrderItemStatus)[keyof typeof OrderItemStatus]


export const AlertType: {
  LOW_STOCK: 'LOW_STOCK',
  EXPIRATION: 'EXPIRATION',
  ORDER_WAITING_VALIDATION: 'ORDER_WAITING_VALIDATION',
  ORDER_READY: 'ORDER_READY',
  SYSTEM: 'SYSTEM'
};

export type AlertType = (typeof AlertType)[keyof typeof AlertType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type MedicationForm = $Enums.MedicationForm

export const MedicationForm: typeof $Enums.MedicationForm

export type PackagingUnit = $Enums.PackagingUnit

export const PackagingUnit: typeof $Enums.PackagingUnit

export type ExitReason = $Enums.ExitReason

export const ExitReason: typeof $Enums.ExitReason

export type OrderStatus = $Enums.OrderStatus

export const OrderStatus: typeof $Enums.OrderStatus

export type OrderItemStatus = $Enums.OrderItemStatus

export const OrderItemStatus: typeof $Enums.OrderItemStatus

export type AlertType = $Enums.AlertType

export const AlertType: typeof $Enums.AlertType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.service`: Exposes CRUD operations for the **Service** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Services
    * const services = await prisma.service.findMany()
    * ```
    */
  get service(): Prisma.ServiceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.supplier`: Exposes CRUD operations for the **Supplier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Suppliers
    * const suppliers = await prisma.supplier.findMany()
    * ```
    */
  get supplier(): Prisma.SupplierDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.therapeuticClass`: Exposes CRUD operations for the **TherapeuticClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TherapeuticClasses
    * const therapeuticClasses = await prisma.therapeuticClass.findMany()
    * ```
    */
  get therapeuticClass(): Prisma.TherapeuticClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.subClass`: Exposes CRUD operations for the **SubClass** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SubClasses
    * const subClasses = await prisma.subClass.findMany()
    * ```
    */
  get subClass(): Prisma.SubClassDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medication`: Exposes CRUD operations for the **Medication** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Medications
    * const medications = await prisma.medication.findMany()
    * ```
    */
  get medication(): Prisma.MedicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.medicationBatch`: Exposes CRUD operations for the **MedicationBatch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MedicationBatches
    * const medicationBatches = await prisma.medicationBatch.findMany()
    * ```
    */
  get medicationBatch(): Prisma.MedicationBatchDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockEntry`: Exposes CRUD operations for the **StockEntry** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockEntries
    * const stockEntries = await prisma.stockEntry.findMany()
    * ```
    */
  get stockEntry(): Prisma.StockEntryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.stockExit`: Exposes CRUD operations for the **StockExit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StockExits
    * const stockExits = await prisma.stockExit.findMany()
    * ```
    */
  get stockExit(): Prisma.StockExitDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderItem`: Exposes CRUD operations for the **OrderItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderItems
    * const orderItems = await prisma.orderItem.findMany()
    * ```
    */
  get orderItem(): Prisma.OrderItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.deliveryNote`: Exposes CRUD operations for the **DeliveryNote** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DeliveryNotes
    * const deliveryNotes = await prisma.deliveryNote.findMany()
    * ```
    */
  get deliveryNote(): Prisma.DeliveryNoteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.alert`: Exposes CRUD operations for the **Alert** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alert.findMany()
    * ```
    */
  get alert(): Prisma.AlertDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Service: 'Service',
    Supplier: 'Supplier',
    TherapeuticClass: 'TherapeuticClass',
    SubClass: 'SubClass',
    Medication: 'Medication',
    MedicationBatch: 'MedicationBatch',
    StockEntry: 'StockEntry',
    StockExit: 'StockExit',
    Order: 'Order',
    OrderItem: 'OrderItem',
    DeliveryNote: 'DeliveryNote',
    Alert: 'Alert'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "service" | "supplier" | "therapeuticClass" | "subClass" | "medication" | "medicationBatch" | "stockEntry" | "stockExit" | "order" | "orderItem" | "deliveryNote" | "alert"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Service: {
        payload: Prisma.$ServicePayload<ExtArgs>
        fields: Prisma.ServiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findFirst: {
            args: Prisma.ServiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          findMany: {
            args: Prisma.ServiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          create: {
            args: Prisma.ServiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          createMany: {
            args: Prisma.ServiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          delete: {
            args: Prisma.ServiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          update: {
            args: Prisma.ServiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          deleteMany: {
            args: Prisma.ServiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServiceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>[]
          }
          upsert: {
            args: Prisma.ServiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicePayload>
          }
          aggregate: {
            args: Prisma.ServiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateService>
          }
          groupBy: {
            args: Prisma.ServiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServiceCountArgs<ExtArgs>
            result: $Utils.Optional<ServiceCountAggregateOutputType> | number
          }
        }
      }
      Supplier: {
        payload: Prisma.$SupplierPayload<ExtArgs>
        fields: Prisma.SupplierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SupplierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SupplierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findFirst: {
            args: Prisma.SupplierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SupplierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          findMany: {
            args: Prisma.SupplierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          create: {
            args: Prisma.SupplierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          createMany: {
            args: Prisma.SupplierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SupplierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          delete: {
            args: Prisma.SupplierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          update: {
            args: Prisma.SupplierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          deleteMany: {
            args: Prisma.SupplierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SupplierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SupplierUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>[]
          }
          upsert: {
            args: Prisma.SupplierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SupplierPayload>
          }
          aggregate: {
            args: Prisma.SupplierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSupplier>
          }
          groupBy: {
            args: Prisma.SupplierGroupByArgs<ExtArgs>
            result: $Utils.Optional<SupplierGroupByOutputType>[]
          }
          count: {
            args: Prisma.SupplierCountArgs<ExtArgs>
            result: $Utils.Optional<SupplierCountAggregateOutputType> | number
          }
        }
      }
      TherapeuticClass: {
        payload: Prisma.$TherapeuticClassPayload<ExtArgs>
        fields: Prisma.TherapeuticClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TherapeuticClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TherapeuticClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>
          }
          findFirst: {
            args: Prisma.TherapeuticClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TherapeuticClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>
          }
          findMany: {
            args: Prisma.TherapeuticClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>[]
          }
          create: {
            args: Prisma.TherapeuticClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>
          }
          createMany: {
            args: Prisma.TherapeuticClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TherapeuticClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>[]
          }
          delete: {
            args: Prisma.TherapeuticClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>
          }
          update: {
            args: Prisma.TherapeuticClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>
          }
          deleteMany: {
            args: Prisma.TherapeuticClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TherapeuticClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TherapeuticClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>[]
          }
          upsert: {
            args: Prisma.TherapeuticClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TherapeuticClassPayload>
          }
          aggregate: {
            args: Prisma.TherapeuticClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTherapeuticClass>
          }
          groupBy: {
            args: Prisma.TherapeuticClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<TherapeuticClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.TherapeuticClassCountArgs<ExtArgs>
            result: $Utils.Optional<TherapeuticClassCountAggregateOutputType> | number
          }
        }
      }
      SubClass: {
        payload: Prisma.$SubClassPayload<ExtArgs>
        fields: Prisma.SubClassFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SubClassFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SubClassFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>
          }
          findFirst: {
            args: Prisma.SubClassFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SubClassFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>
          }
          findMany: {
            args: Prisma.SubClassFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>[]
          }
          create: {
            args: Prisma.SubClassCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>
          }
          createMany: {
            args: Prisma.SubClassCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SubClassCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>[]
          }
          delete: {
            args: Prisma.SubClassDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>
          }
          update: {
            args: Prisma.SubClassUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>
          }
          deleteMany: {
            args: Prisma.SubClassDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SubClassUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SubClassUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>[]
          }
          upsert: {
            args: Prisma.SubClassUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SubClassPayload>
          }
          aggregate: {
            args: Prisma.SubClassAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSubClass>
          }
          groupBy: {
            args: Prisma.SubClassGroupByArgs<ExtArgs>
            result: $Utils.Optional<SubClassGroupByOutputType>[]
          }
          count: {
            args: Prisma.SubClassCountArgs<ExtArgs>
            result: $Utils.Optional<SubClassCountAggregateOutputType> | number
          }
        }
      }
      Medication: {
        payload: Prisma.$MedicationPayload<ExtArgs>
        fields: Prisma.MedicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findFirst: {
            args: Prisma.MedicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          findMany: {
            args: Prisma.MedicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          create: {
            args: Prisma.MedicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          createMany: {
            args: Prisma.MedicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          delete: {
            args: Prisma.MedicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          update: {
            args: Prisma.MedicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          deleteMany: {
            args: Prisma.MedicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>[]
          }
          upsert: {
            args: Prisma.MedicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationPayload>
          }
          aggregate: {
            args: Prisma.MedicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedication>
          }
          groupBy: {
            args: Prisma.MedicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationCountAggregateOutputType> | number
          }
        }
      }
      MedicationBatch: {
        payload: Prisma.$MedicationBatchPayload<ExtArgs>
        fields: Prisma.MedicationBatchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MedicationBatchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MedicationBatchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>
          }
          findFirst: {
            args: Prisma.MedicationBatchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MedicationBatchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>
          }
          findMany: {
            args: Prisma.MedicationBatchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>[]
          }
          create: {
            args: Prisma.MedicationBatchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>
          }
          createMany: {
            args: Prisma.MedicationBatchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MedicationBatchCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>[]
          }
          delete: {
            args: Prisma.MedicationBatchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>
          }
          update: {
            args: Prisma.MedicationBatchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>
          }
          deleteMany: {
            args: Prisma.MedicationBatchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MedicationBatchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MedicationBatchUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>[]
          }
          upsert: {
            args: Prisma.MedicationBatchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MedicationBatchPayload>
          }
          aggregate: {
            args: Prisma.MedicationBatchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMedicationBatch>
          }
          groupBy: {
            args: Prisma.MedicationBatchGroupByArgs<ExtArgs>
            result: $Utils.Optional<MedicationBatchGroupByOutputType>[]
          }
          count: {
            args: Prisma.MedicationBatchCountArgs<ExtArgs>
            result: $Utils.Optional<MedicationBatchCountAggregateOutputType> | number
          }
        }
      }
      StockEntry: {
        payload: Prisma.$StockEntryPayload<ExtArgs>
        fields: Prisma.StockEntryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockEntryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockEntryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          findFirst: {
            args: Prisma.StockEntryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockEntryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          findMany: {
            args: Prisma.StockEntryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          create: {
            args: Prisma.StockEntryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          createMany: {
            args: Prisma.StockEntryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockEntryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          delete: {
            args: Prisma.StockEntryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          update: {
            args: Prisma.StockEntryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          deleteMany: {
            args: Prisma.StockEntryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockEntryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockEntryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>[]
          }
          upsert: {
            args: Prisma.StockEntryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockEntryPayload>
          }
          aggregate: {
            args: Prisma.StockEntryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockEntry>
          }
          groupBy: {
            args: Prisma.StockEntryGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockEntryGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockEntryCountArgs<ExtArgs>
            result: $Utils.Optional<StockEntryCountAggregateOutputType> | number
          }
        }
      }
      StockExit: {
        payload: Prisma.$StockExitPayload<ExtArgs>
        fields: Prisma.StockExitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StockExitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StockExitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          findFirst: {
            args: Prisma.StockExitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StockExitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          findMany: {
            args: Prisma.StockExitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>[]
          }
          create: {
            args: Prisma.StockExitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          createMany: {
            args: Prisma.StockExitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StockExitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>[]
          }
          delete: {
            args: Prisma.StockExitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          update: {
            args: Prisma.StockExitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          deleteMany: {
            args: Prisma.StockExitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StockExitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StockExitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>[]
          }
          upsert: {
            args: Prisma.StockExitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StockExitPayload>
          }
          aggregate: {
            args: Prisma.StockExitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStockExit>
          }
          groupBy: {
            args: Prisma.StockExitGroupByArgs<ExtArgs>
            result: $Utils.Optional<StockExitGroupByOutputType>[]
          }
          count: {
            args: Prisma.StockExitCountArgs<ExtArgs>
            result: $Utils.Optional<StockExitCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderItem: {
        payload: Prisma.$OrderItemPayload<ExtArgs>
        fields: Prisma.OrderItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findFirst: {
            args: Prisma.OrderItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          findMany: {
            args: Prisma.OrderItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          create: {
            args: Prisma.OrderItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          createMany: {
            args: Prisma.OrderItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          delete: {
            args: Prisma.OrderItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          update: {
            args: Prisma.OrderItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          deleteMany: {
            args: Prisma.OrderItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>[]
          }
          upsert: {
            args: Prisma.OrderItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderItemPayload>
          }
          aggregate: {
            args: Prisma.OrderItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderItem>
          }
          groupBy: {
            args: Prisma.OrderItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderItemCountArgs<ExtArgs>
            result: $Utils.Optional<OrderItemCountAggregateOutputType> | number
          }
        }
      }
      DeliveryNote: {
        payload: Prisma.$DeliveryNotePayload<ExtArgs>
        fields: Prisma.DeliveryNoteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DeliveryNoteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DeliveryNoteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>
          }
          findFirst: {
            args: Prisma.DeliveryNoteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DeliveryNoteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>
          }
          findMany: {
            args: Prisma.DeliveryNoteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>[]
          }
          create: {
            args: Prisma.DeliveryNoteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>
          }
          createMany: {
            args: Prisma.DeliveryNoteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DeliveryNoteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>[]
          }
          delete: {
            args: Prisma.DeliveryNoteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>
          }
          update: {
            args: Prisma.DeliveryNoteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>
          }
          deleteMany: {
            args: Prisma.DeliveryNoteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DeliveryNoteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DeliveryNoteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>[]
          }
          upsert: {
            args: Prisma.DeliveryNoteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DeliveryNotePayload>
          }
          aggregate: {
            args: Prisma.DeliveryNoteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDeliveryNote>
          }
          groupBy: {
            args: Prisma.DeliveryNoteGroupByArgs<ExtArgs>
            result: $Utils.Optional<DeliveryNoteGroupByOutputType>[]
          }
          count: {
            args: Prisma.DeliveryNoteCountArgs<ExtArgs>
            result: $Utils.Optional<DeliveryNoteCountAggregateOutputType> | number
          }
        }
      }
      Alert: {
        payload: Prisma.$AlertPayload<ExtArgs>
        fields: Prisma.AlertFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findFirst: {
            args: Prisma.AlertFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          findMany: {
            args: Prisma.AlertFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          create: {
            args: Prisma.AlertCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          createMany: {
            args: Prisma.AlertCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          delete: {
            args: Prisma.AlertDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          update: {
            args: Prisma.AlertUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          deleteMany: {
            args: Prisma.AlertDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>[]
          }
          upsert: {
            args: Prisma.AlertUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertPayload>
          }
          aggregate: {
            args: Prisma.AlertAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlert>
          }
          groupBy: {
            args: Prisma.AlertGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertCountArgs<ExtArgs>
            result: $Utils.Optional<AlertCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    service?: ServiceOmit
    supplier?: SupplierOmit
    therapeuticClass?: TherapeuticClassOmit
    subClass?: SubClassOmit
    medication?: MedicationOmit
    medicationBatch?: MedicationBatchOmit
    stockEntry?: StockEntryOmit
    stockExit?: StockExitOmit
    order?: OrderOmit
    orderItem?: OrderItemOmit
    deliveryNote?: DeliveryNoteOmit
    alert?: AlertOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    createdOrders: number
    validatedOrders: number
    preparedOrders: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrders?: boolean | UserCountOutputTypeCountCreatedOrdersArgs
    validatedOrders?: boolean | UserCountOutputTypeCountValidatedOrdersArgs
    preparedOrders?: boolean | UserCountOutputTypeCountPreparedOrdersArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountValidatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPreparedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type ServiceCountOutputType
   */

  export type ServiceCountOutputType = {
    users: number
    orders: number
  }

  export type ServiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | ServiceCountOutputTypeCountUsersArgs
    orders?: boolean | ServiceCountOutputTypeCountOrdersArgs
  }

  // Custom InputTypes
  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServiceCountOutputType
     */
    select?: ServiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ServiceCountOutputType without action
   */
  export type ServiceCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type SupplierCountOutputType
   */

  export type SupplierCountOutputType = {
    stockEntries: number
  }

  export type SupplierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockEntries?: boolean | SupplierCountOutputTypeCountStockEntriesArgs
  }

  // Custom InputTypes
  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SupplierCountOutputType
     */
    select?: SupplierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SupplierCountOutputType without action
   */
  export type SupplierCountOutputTypeCountStockEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockEntryWhereInput
  }


  /**
   * Count Type TherapeuticClassCountOutputType
   */

  export type TherapeuticClassCountOutputType = {
    medications: number
    subClasses: number
  }

  export type TherapeuticClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | TherapeuticClassCountOutputTypeCountMedicationsArgs
    subClasses?: boolean | TherapeuticClassCountOutputTypeCountSubClassesArgs
  }

  // Custom InputTypes
  /**
   * TherapeuticClassCountOutputType without action
   */
  export type TherapeuticClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClassCountOutputType
     */
    select?: TherapeuticClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TherapeuticClassCountOutputType without action
   */
  export type TherapeuticClassCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }

  /**
   * TherapeuticClassCountOutputType without action
   */
  export type TherapeuticClassCountOutputTypeCountSubClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubClassWhereInput
  }


  /**
   * Count Type SubClassCountOutputType
   */

  export type SubClassCountOutputType = {
    medications: number
  }

  export type SubClassCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | SubClassCountOutputTypeCountMedicationsArgs
  }

  // Custom InputTypes
  /**
   * SubClassCountOutputType without action
   */
  export type SubClassCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClassCountOutputType
     */
    select?: SubClassCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SubClassCountOutputType without action
   */
  export type SubClassCountOutputTypeCountMedicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
  }


  /**
   * Count Type MedicationCountOutputType
   */

  export type MedicationCountOutputType = {
    batches: number
    orderItems: number
  }

  export type MedicationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batches?: boolean | MedicationCountOutputTypeCountBatchesArgs
    orderItems?: boolean | MedicationCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationCountOutputType
     */
    select?: MedicationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountBatchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationBatchWhereInput
  }

  /**
   * MedicationCountOutputType without action
   */
  export type MedicationCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type MedicationBatchCountOutputType
   */

  export type MedicationBatchCountOutputType = {
    stockEntries: number
    stockExits: number
  }

  export type MedicationBatchCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockEntries?: boolean | MedicationBatchCountOutputTypeCountStockEntriesArgs
    stockExits?: boolean | MedicationBatchCountOutputTypeCountStockExitsArgs
  }

  // Custom InputTypes
  /**
   * MedicationBatchCountOutputType without action
   */
  export type MedicationBatchCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatchCountOutputType
     */
    select?: MedicationBatchCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MedicationBatchCountOutputType without action
   */
  export type MedicationBatchCountOutputTypeCountStockEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockEntryWhereInput
  }

  /**
   * MedicationBatchCountOutputType without action
   */
  export type MedicationBatchCountOutputTypeCountStockExitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    orderItems: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orderItems?: boolean | OrderCountOutputTypeCountOrderItemsArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
  }


  /**
   * Count Type OrderItemCountOutputType
   */

  export type OrderItemCountOutputType = {
    stockExits: number
  }

  export type OrderItemCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockExits?: boolean | OrderItemCountOutputTypeCountStockExitsArgs
  }

  // Custom InputTypes
  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItemCountOutputType
     */
    select?: OrderItemCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderItemCountOutputType without action
   */
  export type OrderItemCountOutputTypeCountStockExitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    serviceId: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    passwordHash: string | null
    role: $Enums.UserRole | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    serviceId: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    firstName: number
    lastName: number
    email: number
    passwordHash: number
    role: number
    isActive: number
    createdAt: number
    updatedAt: number
    serviceId: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    serviceId?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    serviceId?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    firstName?: true
    lastName?: true
    email?: true
    passwordHash?: true
    role?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    serviceId?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    serviceId: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    validatedOrders?: boolean | User$validatedOrdersArgs<ExtArgs>
    preparedOrders?: boolean | User$preparedOrdersArgs<ExtArgs>
    service?: boolean | User$serviceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
    service?: boolean | User$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
    service?: boolean | User$serviceArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    passwordHash?: boolean
    role?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    serviceId?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "firstName" | "lastName" | "email" | "passwordHash" | "role" | "isActive" | "createdAt" | "updatedAt" | "serviceId", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdOrders?: boolean | User$createdOrdersArgs<ExtArgs>
    validatedOrders?: boolean | User$validatedOrdersArgs<ExtArgs>
    preparedOrders?: boolean | User$preparedOrdersArgs<ExtArgs>
    service?: boolean | User$serviceArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | User$serviceArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | User$serviceArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      createdOrders: Prisma.$OrderPayload<ExtArgs>[]
      validatedOrders: Prisma.$OrderPayload<ExtArgs>[]
      preparedOrders: Prisma.$OrderPayload<ExtArgs>[]
      service: Prisma.$ServicePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      firstName: string
      lastName: string
      email: string
      passwordHash: string
      role: $Enums.UserRole
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      serviceId: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdOrders<T extends User$createdOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    validatedOrders<T extends User$validatedOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$validatedOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    preparedOrders<T extends User$preparedOrdersArgs<ExtArgs> = {}>(args?: Subset<T, User$preparedOrdersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    service<T extends User$serviceArgs<ExtArgs> = {}>(args?: Subset<T, User$serviceArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly serviceId: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.createdOrders
   */
  export type User$createdOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.validatedOrders
   */
  export type User$validatedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.preparedOrders
   */
  export type User$preparedOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User.service
   */
  export type User$serviceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    where?: ServiceWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Service
   */

  export type AggregateService = {
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  export type ServiceMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ServiceCountAggregateOutputType = {
    id: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ServiceMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ServiceCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ServiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Service to aggregate.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Services
    **/
    _count?: true | ServiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServiceMaxAggregateInputType
  }

  export type GetServiceAggregateType<T extends ServiceAggregateArgs> = {
        [P in keyof T & keyof AggregateService]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateService[P]>
      : GetScalarType<T[P], AggregateService[P]>
  }




  export type ServiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServiceWhereInput
    orderBy?: ServiceOrderByWithAggregationInput | ServiceOrderByWithAggregationInput[]
    by: ServiceScalarFieldEnum[] | ServiceScalarFieldEnum
    having?: ServiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServiceCountAggregateInputType | true
    _min?: ServiceMinAggregateInputType
    _max?: ServiceMaxAggregateInputType
  }

  export type ServiceGroupByOutputType = {
    id: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: ServiceCountAggregateOutputType | null
    _min: ServiceMinAggregateOutputType | null
    _max: ServiceMaxAggregateOutputType | null
  }

  type GetServiceGroupByPayload<T extends ServiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServiceGroupByOutputType[P]>
            : GetScalarType<T[P], ServiceGroupByOutputType[P]>
        }
      >
    >


  export type ServiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Service$usersArgs<ExtArgs>
    orders?: boolean | Service$ordersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["service"]>

  export type ServiceSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ServiceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["service"]>
  export type ServiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Service$usersArgs<ExtArgs>
    orders?: boolean | Service$ordersArgs<ExtArgs>
    _count?: boolean | ServiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServiceIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Service"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      orders: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["service"]>
    composites: {}
  }

  type ServiceGetPayload<S extends boolean | null | undefined | ServiceDefaultArgs> = $Result.GetResult<Prisma.$ServicePayload, S>

  type ServiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServiceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServiceCountAggregateInputType | true
    }

  export interface ServiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Service'], meta: { name: 'Service' } }
    /**
     * Find zero or one Service that matches the filter.
     * @param {ServiceFindUniqueArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServiceFindUniqueArgs>(args: SelectSubset<T, ServiceFindUniqueArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Service that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServiceFindUniqueOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ServiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServiceFindFirstArgs>(args?: SelectSubset<T, ServiceFindFirstArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Service that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindFirstOrThrowArgs} args - Arguments to find a Service
     * @example
     * // Get one Service
     * const service = await prisma.service.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ServiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Services that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Services
     * const services = await prisma.service.findMany()
     * 
     * // Get first 10 Services
     * const services = await prisma.service.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const serviceWithIdOnly = await prisma.service.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServiceFindManyArgs>(args?: SelectSubset<T, ServiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Service.
     * @param {ServiceCreateArgs} args - Arguments to create a Service.
     * @example
     * // Create one Service
     * const Service = await prisma.service.create({
     *   data: {
     *     // ... data to create a Service
     *   }
     * })
     * 
     */
    create<T extends ServiceCreateArgs>(args: SelectSubset<T, ServiceCreateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Services.
     * @param {ServiceCreateManyArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServiceCreateManyArgs>(args?: SelectSubset<T, ServiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Services and returns the data saved in the database.
     * @param {ServiceCreateManyAndReturnArgs} args - Arguments to create many Services.
     * @example
     * // Create many Services
     * const service = await prisma.service.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ServiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Service.
     * @param {ServiceDeleteArgs} args - Arguments to delete one Service.
     * @example
     * // Delete one Service
     * const Service = await prisma.service.delete({
     *   where: {
     *     // ... filter to delete one Service
     *   }
     * })
     * 
     */
    delete<T extends ServiceDeleteArgs>(args: SelectSubset<T, ServiceDeleteArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Service.
     * @param {ServiceUpdateArgs} args - Arguments to update one Service.
     * @example
     * // Update one Service
     * const service = await prisma.service.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServiceUpdateArgs>(args: SelectSubset<T, ServiceUpdateArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Services.
     * @param {ServiceDeleteManyArgs} args - Arguments to filter Services to delete.
     * @example
     * // Delete a few Services
     * const { count } = await prisma.service.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServiceDeleteManyArgs>(args?: SelectSubset<T, ServiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServiceUpdateManyArgs>(args: SelectSubset<T, ServiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Services and returns the data updated in the database.
     * @param {ServiceUpdateManyAndReturnArgs} args - Arguments to update many Services.
     * @example
     * // Update many Services
     * const service = await prisma.service.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Services and only return the `id`
     * const serviceWithIdOnly = await prisma.service.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ServiceUpdateManyAndReturnArgs>(args: SelectSubset<T, ServiceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Service.
     * @param {ServiceUpsertArgs} args - Arguments to update or create a Service.
     * @example
     * // Update or create a Service
     * const service = await prisma.service.upsert({
     *   create: {
     *     // ... data to create a Service
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Service we want to update
     *   }
     * })
     */
    upsert<T extends ServiceUpsertArgs>(args: SelectSubset<T, ServiceUpsertArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Services.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceCountArgs} args - Arguments to filter Services to count.
     * @example
     * // Count the number of Services
     * const count = await prisma.service.count({
     *   where: {
     *     // ... the filter for the Services we want to count
     *   }
     * })
    **/
    count<T extends ServiceCountArgs>(
      args?: Subset<T, ServiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ServiceAggregateArgs>(args: Subset<T, ServiceAggregateArgs>): Prisma.PrismaPromise<GetServiceAggregateType<T>>

    /**
     * Group by Service.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ServiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServiceGroupByArgs['orderBy'] }
        : { orderBy?: ServiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ServiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Service model
   */
  readonly fields: ServiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Service.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Service$usersArgs<ExtArgs> = {}>(args?: Subset<T, Service$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends Service$ordersArgs<ExtArgs> = {}>(args?: Subset<T, Service$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Service model
   */
  interface ServiceFieldRefs {
    readonly id: FieldRef<"Service", 'String'>
    readonly name: FieldRef<"Service", 'String'>
    readonly description: FieldRef<"Service", 'String'>
    readonly isActive: FieldRef<"Service", 'Boolean'>
    readonly createdAt: FieldRef<"Service", 'DateTime'>
    readonly updatedAt: FieldRef<"Service", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Service findUnique
   */
  export type ServiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findUniqueOrThrow
   */
  export type ServiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service findFirst
   */
  export type ServiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findFirstOrThrow
   */
  export type ServiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Service to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Services.
     */
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service findMany
   */
  export type ServiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter, which Services to fetch.
     */
    where?: ServiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Services to fetch.
     */
    orderBy?: ServiceOrderByWithRelationInput | ServiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Services.
     */
    cursor?: ServiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Services from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Services.
     */
    skip?: number
    distinct?: ServiceScalarFieldEnum | ServiceScalarFieldEnum[]
  }

  /**
   * Service create
   */
  export type ServiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Service.
     */
    data: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
  }

  /**
   * Service createMany
   */
  export type ServiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service createManyAndReturn
   */
  export type ServiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to create many Services.
     */
    data: ServiceCreateManyInput | ServiceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Service update
   */
  export type ServiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Service.
     */
    data: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
    /**
     * Choose, which Service to update.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service updateMany
   */
  export type ServiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service updateManyAndReturn
   */
  export type ServiceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * The data used to update Services.
     */
    data: XOR<ServiceUpdateManyMutationInput, ServiceUncheckedUpdateManyInput>
    /**
     * Filter which Services to update
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to update.
     */
    limit?: number
  }

  /**
   * Service upsert
   */
  export type ServiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Service to update in case it exists.
     */
    where: ServiceWhereUniqueInput
    /**
     * In case the Service found by the `where` argument doesn't exist, create a new Service with this data.
     */
    create: XOR<ServiceCreateInput, ServiceUncheckedCreateInput>
    /**
     * In case the Service was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServiceUpdateInput, ServiceUncheckedUpdateInput>
  }

  /**
   * Service delete
   */
  export type ServiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
    /**
     * Filter which Service to delete.
     */
    where: ServiceWhereUniqueInput
  }

  /**
   * Service deleteMany
   */
  export type ServiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Services to delete
     */
    where?: ServiceWhereInput
    /**
     * Limit how many Services to delete.
     */
    limit?: number
  }

  /**
   * Service.users
   */
  export type Service$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Service.orders
   */
  export type Service$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Service without action
   */
  export type ServiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Service
     */
    select?: ServiceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Service
     */
    omit?: ServiceOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServiceInclude<ExtArgs> | null
  }


  /**
   * Model Supplier
   */

  export type AggregateSupplier = {
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  export type SupplierMinAggregateOutputType = {
    id: string | null
    name: string | null
    contactName: string | null
    email: string | null
    phone: string | null
    address: string | null
    nif: string | null
    rc: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierMaxAggregateOutputType = {
    id: string | null
    name: string | null
    contactName: string | null
    email: string | null
    phone: string | null
    address: string | null
    nif: string | null
    rc: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SupplierCountAggregateOutputType = {
    id: number
    name: number
    contactName: number
    email: number
    phone: number
    address: number
    nif: number
    rc: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SupplierMinAggregateInputType = {
    id?: true
    name?: true
    contactName?: true
    email?: true
    phone?: true
    address?: true
    nif?: true
    rc?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierMaxAggregateInputType = {
    id?: true
    name?: true
    contactName?: true
    email?: true
    phone?: true
    address?: true
    nif?: true
    rc?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SupplierCountAggregateInputType = {
    id?: true
    name?: true
    contactName?: true
    email?: true
    phone?: true
    address?: true
    nif?: true
    rc?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SupplierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Supplier to aggregate.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Suppliers
    **/
    _count?: true | SupplierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SupplierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SupplierMaxAggregateInputType
  }

  export type GetSupplierAggregateType<T extends SupplierAggregateArgs> = {
        [P in keyof T & keyof AggregateSupplier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSupplier[P]>
      : GetScalarType<T[P], AggregateSupplier[P]>
  }




  export type SupplierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SupplierWhereInput
    orderBy?: SupplierOrderByWithAggregationInput | SupplierOrderByWithAggregationInput[]
    by: SupplierScalarFieldEnum[] | SupplierScalarFieldEnum
    having?: SupplierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SupplierCountAggregateInputType | true
    _min?: SupplierMinAggregateInputType
    _max?: SupplierMaxAggregateInputType
  }

  export type SupplierGroupByOutputType = {
    id: string
    name: string
    contactName: string | null
    email: string | null
    phone: string | null
    address: string | null
    nif: string
    rc: string
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: SupplierCountAggregateOutputType | null
    _min: SupplierMinAggregateOutputType | null
    _max: SupplierMaxAggregateOutputType | null
  }

  type GetSupplierGroupByPayload<T extends SupplierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SupplierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SupplierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SupplierGroupByOutputType[P]>
            : GetScalarType<T[P], SupplierGroupByOutputType[P]>
        }
      >
    >


  export type SupplierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    nif?: boolean
    rc?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    stockEntries?: boolean | Supplier$stockEntriesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    nif?: boolean
    rc?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    nif?: boolean
    rc?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["supplier"]>

  export type SupplierSelectScalar = {
    id?: boolean
    name?: boolean
    contactName?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    nif?: boolean
    rc?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SupplierOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "contactName" | "email" | "phone" | "address" | "nif" | "rc" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["supplier"]>
  export type SupplierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    stockEntries?: boolean | Supplier$stockEntriesArgs<ExtArgs>
    _count?: boolean | SupplierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SupplierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SupplierIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SupplierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Supplier"
    objects: {
      stockEntries: Prisma.$StockEntryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      contactName: string | null
      email: string | null
      phone: string | null
      address: string | null
      nif: string
      rc: string
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["supplier"]>
    composites: {}
  }

  type SupplierGetPayload<S extends boolean | null | undefined | SupplierDefaultArgs> = $Result.GetResult<Prisma.$SupplierPayload, S>

  type SupplierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SupplierFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SupplierCountAggregateInputType | true
    }

  export interface SupplierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Supplier'], meta: { name: 'Supplier' } }
    /**
     * Find zero or one Supplier that matches the filter.
     * @param {SupplierFindUniqueArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SupplierFindUniqueArgs>(args: SelectSubset<T, SupplierFindUniqueArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Supplier that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SupplierFindUniqueOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SupplierFindUniqueOrThrowArgs>(args: SelectSubset<T, SupplierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SupplierFindFirstArgs>(args?: SelectSubset<T, SupplierFindFirstArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Supplier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindFirstOrThrowArgs} args - Arguments to find a Supplier
     * @example
     * // Get one Supplier
     * const supplier = await prisma.supplier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SupplierFindFirstOrThrowArgs>(args?: SelectSubset<T, SupplierFindFirstOrThrowArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Suppliers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Suppliers
     * const suppliers = await prisma.supplier.findMany()
     * 
     * // Get first 10 Suppliers
     * const suppliers = await prisma.supplier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const supplierWithIdOnly = await prisma.supplier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SupplierFindManyArgs>(args?: SelectSubset<T, SupplierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Supplier.
     * @param {SupplierCreateArgs} args - Arguments to create a Supplier.
     * @example
     * // Create one Supplier
     * const Supplier = await prisma.supplier.create({
     *   data: {
     *     // ... data to create a Supplier
     *   }
     * })
     * 
     */
    create<T extends SupplierCreateArgs>(args: SelectSubset<T, SupplierCreateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Suppliers.
     * @param {SupplierCreateManyArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SupplierCreateManyArgs>(args?: SelectSubset<T, SupplierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Suppliers and returns the data saved in the database.
     * @param {SupplierCreateManyAndReturnArgs} args - Arguments to create many Suppliers.
     * @example
     * // Create many Suppliers
     * const supplier = await prisma.supplier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SupplierCreateManyAndReturnArgs>(args?: SelectSubset<T, SupplierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Supplier.
     * @param {SupplierDeleteArgs} args - Arguments to delete one Supplier.
     * @example
     * // Delete one Supplier
     * const Supplier = await prisma.supplier.delete({
     *   where: {
     *     // ... filter to delete one Supplier
     *   }
     * })
     * 
     */
    delete<T extends SupplierDeleteArgs>(args: SelectSubset<T, SupplierDeleteArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Supplier.
     * @param {SupplierUpdateArgs} args - Arguments to update one Supplier.
     * @example
     * // Update one Supplier
     * const supplier = await prisma.supplier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SupplierUpdateArgs>(args: SelectSubset<T, SupplierUpdateArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Suppliers.
     * @param {SupplierDeleteManyArgs} args - Arguments to filter Suppliers to delete.
     * @example
     * // Delete a few Suppliers
     * const { count } = await prisma.supplier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SupplierDeleteManyArgs>(args?: SelectSubset<T, SupplierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SupplierUpdateManyArgs>(args: SelectSubset<T, SupplierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Suppliers and returns the data updated in the database.
     * @param {SupplierUpdateManyAndReturnArgs} args - Arguments to update many Suppliers.
     * @example
     * // Update many Suppliers
     * const supplier = await prisma.supplier.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Suppliers and only return the `id`
     * const supplierWithIdOnly = await prisma.supplier.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SupplierUpdateManyAndReturnArgs>(args: SelectSubset<T, SupplierUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Supplier.
     * @param {SupplierUpsertArgs} args - Arguments to update or create a Supplier.
     * @example
     * // Update or create a Supplier
     * const supplier = await prisma.supplier.upsert({
     *   create: {
     *     // ... data to create a Supplier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Supplier we want to update
     *   }
     * })
     */
    upsert<T extends SupplierUpsertArgs>(args: SelectSubset<T, SupplierUpsertArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Suppliers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierCountArgs} args - Arguments to filter Suppliers to count.
     * @example
     * // Count the number of Suppliers
     * const count = await prisma.supplier.count({
     *   where: {
     *     // ... the filter for the Suppliers we want to count
     *   }
     * })
    **/
    count<T extends SupplierCountArgs>(
      args?: Subset<T, SupplierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SupplierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SupplierAggregateArgs>(args: Subset<T, SupplierAggregateArgs>): Prisma.PrismaPromise<GetSupplierAggregateType<T>>

    /**
     * Group by Supplier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SupplierGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SupplierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SupplierGroupByArgs['orderBy'] }
        : { orderBy?: SupplierGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SupplierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSupplierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Supplier model
   */
  readonly fields: SupplierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Supplier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SupplierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    stockEntries<T extends Supplier$stockEntriesArgs<ExtArgs> = {}>(args?: Subset<T, Supplier$stockEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Supplier model
   */
  interface SupplierFieldRefs {
    readonly id: FieldRef<"Supplier", 'String'>
    readonly name: FieldRef<"Supplier", 'String'>
    readonly contactName: FieldRef<"Supplier", 'String'>
    readonly email: FieldRef<"Supplier", 'String'>
    readonly phone: FieldRef<"Supplier", 'String'>
    readonly address: FieldRef<"Supplier", 'String'>
    readonly nif: FieldRef<"Supplier", 'String'>
    readonly rc: FieldRef<"Supplier", 'String'>
    readonly isActive: FieldRef<"Supplier", 'Boolean'>
    readonly createdAt: FieldRef<"Supplier", 'DateTime'>
    readonly updatedAt: FieldRef<"Supplier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Supplier findUnique
   */
  export type SupplierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findUniqueOrThrow
   */
  export type SupplierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier findFirst
   */
  export type SupplierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findFirstOrThrow
   */
  export type SupplierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Supplier to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Suppliers.
     */
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier findMany
   */
  export type SupplierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter, which Suppliers to fetch.
     */
    where?: SupplierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Suppliers to fetch.
     */
    orderBy?: SupplierOrderByWithRelationInput | SupplierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Suppliers.
     */
    cursor?: SupplierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Suppliers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Suppliers.
     */
    skip?: number
    distinct?: SupplierScalarFieldEnum | SupplierScalarFieldEnum[]
  }

  /**
   * Supplier create
   */
  export type SupplierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to create a Supplier.
     */
    data: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
  }

  /**
   * Supplier createMany
   */
  export type SupplierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier createManyAndReturn
   */
  export type SupplierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to create many Suppliers.
     */
    data: SupplierCreateManyInput | SupplierCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Supplier update
   */
  export type SupplierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The data needed to update a Supplier.
     */
    data: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
    /**
     * Choose, which Supplier to update.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier updateMany
   */
  export type SupplierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier updateManyAndReturn
   */
  export type SupplierUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * The data used to update Suppliers.
     */
    data: XOR<SupplierUpdateManyMutationInput, SupplierUncheckedUpdateManyInput>
    /**
     * Filter which Suppliers to update
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to update.
     */
    limit?: number
  }

  /**
   * Supplier upsert
   */
  export type SupplierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * The filter to search for the Supplier to update in case it exists.
     */
    where: SupplierWhereUniqueInput
    /**
     * In case the Supplier found by the `where` argument doesn't exist, create a new Supplier with this data.
     */
    create: XOR<SupplierCreateInput, SupplierUncheckedCreateInput>
    /**
     * In case the Supplier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SupplierUpdateInput, SupplierUncheckedUpdateInput>
  }

  /**
   * Supplier delete
   */
  export type SupplierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
    /**
     * Filter which Supplier to delete.
     */
    where: SupplierWhereUniqueInput
  }

  /**
   * Supplier deleteMany
   */
  export type SupplierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Suppliers to delete
     */
    where?: SupplierWhereInput
    /**
     * Limit how many Suppliers to delete.
     */
    limit?: number
  }

  /**
   * Supplier.stockEntries
   */
  export type Supplier$stockEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    where?: StockEntryWhereInput
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    cursor?: StockEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * Supplier without action
   */
  export type SupplierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Supplier
     */
    select?: SupplierSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Supplier
     */
    omit?: SupplierOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SupplierInclude<ExtArgs> | null
  }


  /**
   * Model TherapeuticClass
   */

  export type AggregateTherapeuticClass = {
    _count: TherapeuticClassCountAggregateOutputType | null
    _min: TherapeuticClassMinAggregateOutputType | null
    _max: TherapeuticClassMaxAggregateOutputType | null
  }

  export type TherapeuticClassMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapeuticClassMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TherapeuticClassCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TherapeuticClassMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapeuticClassMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TherapeuticClassCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TherapeuticClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapeuticClass to aggregate.
     */
    where?: TherapeuticClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapeuticClasses to fetch.
     */
    orderBy?: TherapeuticClassOrderByWithRelationInput | TherapeuticClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TherapeuticClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapeuticClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapeuticClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TherapeuticClasses
    **/
    _count?: true | TherapeuticClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TherapeuticClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TherapeuticClassMaxAggregateInputType
  }

  export type GetTherapeuticClassAggregateType<T extends TherapeuticClassAggregateArgs> = {
        [P in keyof T & keyof AggregateTherapeuticClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTherapeuticClass[P]>
      : GetScalarType<T[P], AggregateTherapeuticClass[P]>
  }




  export type TherapeuticClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TherapeuticClassWhereInput
    orderBy?: TherapeuticClassOrderByWithAggregationInput | TherapeuticClassOrderByWithAggregationInput[]
    by: TherapeuticClassScalarFieldEnum[] | TherapeuticClassScalarFieldEnum
    having?: TherapeuticClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TherapeuticClassCountAggregateInputType | true
    _min?: TherapeuticClassMinAggregateInputType
    _max?: TherapeuticClassMaxAggregateInputType
  }

  export type TherapeuticClassGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    _count: TherapeuticClassCountAggregateOutputType | null
    _min: TherapeuticClassMinAggregateOutputType | null
    _max: TherapeuticClassMaxAggregateOutputType | null
  }

  type GetTherapeuticClassGroupByPayload<T extends TherapeuticClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TherapeuticClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TherapeuticClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TherapeuticClassGroupByOutputType[P]>
            : GetScalarType<T[P], TherapeuticClassGroupByOutputType[P]>
        }
      >
    >


  export type TherapeuticClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medications?: boolean | TherapeuticClass$medicationsArgs<ExtArgs>
    subClasses?: boolean | TherapeuticClass$subClassesArgs<ExtArgs>
    _count?: boolean | TherapeuticClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["therapeuticClass"]>

  export type TherapeuticClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapeuticClass"]>

  export type TherapeuticClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["therapeuticClass"]>

  export type TherapeuticClassSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TherapeuticClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "isActive" | "createdAt" | "updatedAt", ExtArgs["result"]["therapeuticClass"]>
  export type TherapeuticClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medications?: boolean | TherapeuticClass$medicationsArgs<ExtArgs>
    subClasses?: boolean | TherapeuticClass$subClassesArgs<ExtArgs>
    _count?: boolean | TherapeuticClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TherapeuticClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TherapeuticClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TherapeuticClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TherapeuticClass"
    objects: {
      medications: Prisma.$MedicationPayload<ExtArgs>[]
      subClasses: Prisma.$SubClassPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["therapeuticClass"]>
    composites: {}
  }

  type TherapeuticClassGetPayload<S extends boolean | null | undefined | TherapeuticClassDefaultArgs> = $Result.GetResult<Prisma.$TherapeuticClassPayload, S>

  type TherapeuticClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TherapeuticClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TherapeuticClassCountAggregateInputType | true
    }

  export interface TherapeuticClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TherapeuticClass'], meta: { name: 'TherapeuticClass' } }
    /**
     * Find zero or one TherapeuticClass that matches the filter.
     * @param {TherapeuticClassFindUniqueArgs} args - Arguments to find a TherapeuticClass
     * @example
     * // Get one TherapeuticClass
     * const therapeuticClass = await prisma.therapeuticClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TherapeuticClassFindUniqueArgs>(args: SelectSubset<T, TherapeuticClassFindUniqueArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TherapeuticClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TherapeuticClassFindUniqueOrThrowArgs} args - Arguments to find a TherapeuticClass
     * @example
     * // Get one TherapeuticClass
     * const therapeuticClass = await prisma.therapeuticClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TherapeuticClassFindUniqueOrThrowArgs>(args: SelectSubset<T, TherapeuticClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TherapeuticClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapeuticClassFindFirstArgs} args - Arguments to find a TherapeuticClass
     * @example
     * // Get one TherapeuticClass
     * const therapeuticClass = await prisma.therapeuticClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TherapeuticClassFindFirstArgs>(args?: SelectSubset<T, TherapeuticClassFindFirstArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TherapeuticClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapeuticClassFindFirstOrThrowArgs} args - Arguments to find a TherapeuticClass
     * @example
     * // Get one TherapeuticClass
     * const therapeuticClass = await prisma.therapeuticClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TherapeuticClassFindFirstOrThrowArgs>(args?: SelectSubset<T, TherapeuticClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TherapeuticClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapeuticClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TherapeuticClasses
     * const therapeuticClasses = await prisma.therapeuticClass.findMany()
     * 
     * // Get first 10 TherapeuticClasses
     * const therapeuticClasses = await prisma.therapeuticClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const therapeuticClassWithIdOnly = await prisma.therapeuticClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TherapeuticClassFindManyArgs>(args?: SelectSubset<T, TherapeuticClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TherapeuticClass.
     * @param {TherapeuticClassCreateArgs} args - Arguments to create a TherapeuticClass.
     * @example
     * // Create one TherapeuticClass
     * const TherapeuticClass = await prisma.therapeuticClass.create({
     *   data: {
     *     // ... data to create a TherapeuticClass
     *   }
     * })
     * 
     */
    create<T extends TherapeuticClassCreateArgs>(args: SelectSubset<T, TherapeuticClassCreateArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TherapeuticClasses.
     * @param {TherapeuticClassCreateManyArgs} args - Arguments to create many TherapeuticClasses.
     * @example
     * // Create many TherapeuticClasses
     * const therapeuticClass = await prisma.therapeuticClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TherapeuticClassCreateManyArgs>(args?: SelectSubset<T, TherapeuticClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TherapeuticClasses and returns the data saved in the database.
     * @param {TherapeuticClassCreateManyAndReturnArgs} args - Arguments to create many TherapeuticClasses.
     * @example
     * // Create many TherapeuticClasses
     * const therapeuticClass = await prisma.therapeuticClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TherapeuticClasses and only return the `id`
     * const therapeuticClassWithIdOnly = await prisma.therapeuticClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TherapeuticClassCreateManyAndReturnArgs>(args?: SelectSubset<T, TherapeuticClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TherapeuticClass.
     * @param {TherapeuticClassDeleteArgs} args - Arguments to delete one TherapeuticClass.
     * @example
     * // Delete one TherapeuticClass
     * const TherapeuticClass = await prisma.therapeuticClass.delete({
     *   where: {
     *     // ... filter to delete one TherapeuticClass
     *   }
     * })
     * 
     */
    delete<T extends TherapeuticClassDeleteArgs>(args: SelectSubset<T, TherapeuticClassDeleteArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TherapeuticClass.
     * @param {TherapeuticClassUpdateArgs} args - Arguments to update one TherapeuticClass.
     * @example
     * // Update one TherapeuticClass
     * const therapeuticClass = await prisma.therapeuticClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TherapeuticClassUpdateArgs>(args: SelectSubset<T, TherapeuticClassUpdateArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TherapeuticClasses.
     * @param {TherapeuticClassDeleteManyArgs} args - Arguments to filter TherapeuticClasses to delete.
     * @example
     * // Delete a few TherapeuticClasses
     * const { count } = await prisma.therapeuticClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TherapeuticClassDeleteManyArgs>(args?: SelectSubset<T, TherapeuticClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapeuticClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapeuticClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TherapeuticClasses
     * const therapeuticClass = await prisma.therapeuticClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TherapeuticClassUpdateManyArgs>(args: SelectSubset<T, TherapeuticClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TherapeuticClasses and returns the data updated in the database.
     * @param {TherapeuticClassUpdateManyAndReturnArgs} args - Arguments to update many TherapeuticClasses.
     * @example
     * // Update many TherapeuticClasses
     * const therapeuticClass = await prisma.therapeuticClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TherapeuticClasses and only return the `id`
     * const therapeuticClassWithIdOnly = await prisma.therapeuticClass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TherapeuticClassUpdateManyAndReturnArgs>(args: SelectSubset<T, TherapeuticClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TherapeuticClass.
     * @param {TherapeuticClassUpsertArgs} args - Arguments to update or create a TherapeuticClass.
     * @example
     * // Update or create a TherapeuticClass
     * const therapeuticClass = await prisma.therapeuticClass.upsert({
     *   create: {
     *     // ... data to create a TherapeuticClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TherapeuticClass we want to update
     *   }
     * })
     */
    upsert<T extends TherapeuticClassUpsertArgs>(args: SelectSubset<T, TherapeuticClassUpsertArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TherapeuticClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapeuticClassCountArgs} args - Arguments to filter TherapeuticClasses to count.
     * @example
     * // Count the number of TherapeuticClasses
     * const count = await prisma.therapeuticClass.count({
     *   where: {
     *     // ... the filter for the TherapeuticClasses we want to count
     *   }
     * })
    **/
    count<T extends TherapeuticClassCountArgs>(
      args?: Subset<T, TherapeuticClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TherapeuticClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TherapeuticClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapeuticClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TherapeuticClassAggregateArgs>(args: Subset<T, TherapeuticClassAggregateArgs>): Prisma.PrismaPromise<GetTherapeuticClassAggregateType<T>>

    /**
     * Group by TherapeuticClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TherapeuticClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TherapeuticClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TherapeuticClassGroupByArgs['orderBy'] }
        : { orderBy?: TherapeuticClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TherapeuticClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTherapeuticClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TherapeuticClass model
   */
  readonly fields: TherapeuticClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TherapeuticClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TherapeuticClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medications<T extends TherapeuticClass$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, TherapeuticClass$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    subClasses<T extends TherapeuticClass$subClassesArgs<ExtArgs> = {}>(args?: Subset<T, TherapeuticClass$subClassesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TherapeuticClass model
   */
  interface TherapeuticClassFieldRefs {
    readonly id: FieldRef<"TherapeuticClass", 'String'>
    readonly code: FieldRef<"TherapeuticClass", 'String'>
    readonly name: FieldRef<"TherapeuticClass", 'String'>
    readonly description: FieldRef<"TherapeuticClass", 'String'>
    readonly isActive: FieldRef<"TherapeuticClass", 'Boolean'>
    readonly createdAt: FieldRef<"TherapeuticClass", 'DateTime'>
    readonly updatedAt: FieldRef<"TherapeuticClass", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TherapeuticClass findUnique
   */
  export type TherapeuticClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * Filter, which TherapeuticClass to fetch.
     */
    where: TherapeuticClassWhereUniqueInput
  }

  /**
   * TherapeuticClass findUniqueOrThrow
   */
  export type TherapeuticClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * Filter, which TherapeuticClass to fetch.
     */
    where: TherapeuticClassWhereUniqueInput
  }

  /**
   * TherapeuticClass findFirst
   */
  export type TherapeuticClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * Filter, which TherapeuticClass to fetch.
     */
    where?: TherapeuticClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapeuticClasses to fetch.
     */
    orderBy?: TherapeuticClassOrderByWithRelationInput | TherapeuticClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapeuticClasses.
     */
    cursor?: TherapeuticClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapeuticClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapeuticClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapeuticClasses.
     */
    distinct?: TherapeuticClassScalarFieldEnum | TherapeuticClassScalarFieldEnum[]
  }

  /**
   * TherapeuticClass findFirstOrThrow
   */
  export type TherapeuticClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * Filter, which TherapeuticClass to fetch.
     */
    where?: TherapeuticClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapeuticClasses to fetch.
     */
    orderBy?: TherapeuticClassOrderByWithRelationInput | TherapeuticClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TherapeuticClasses.
     */
    cursor?: TherapeuticClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapeuticClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapeuticClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TherapeuticClasses.
     */
    distinct?: TherapeuticClassScalarFieldEnum | TherapeuticClassScalarFieldEnum[]
  }

  /**
   * TherapeuticClass findMany
   */
  export type TherapeuticClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * Filter, which TherapeuticClasses to fetch.
     */
    where?: TherapeuticClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TherapeuticClasses to fetch.
     */
    orderBy?: TherapeuticClassOrderByWithRelationInput | TherapeuticClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TherapeuticClasses.
     */
    cursor?: TherapeuticClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TherapeuticClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TherapeuticClasses.
     */
    skip?: number
    distinct?: TherapeuticClassScalarFieldEnum | TherapeuticClassScalarFieldEnum[]
  }

  /**
   * TherapeuticClass create
   */
  export type TherapeuticClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * The data needed to create a TherapeuticClass.
     */
    data: XOR<TherapeuticClassCreateInput, TherapeuticClassUncheckedCreateInput>
  }

  /**
   * TherapeuticClass createMany
   */
  export type TherapeuticClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TherapeuticClasses.
     */
    data: TherapeuticClassCreateManyInput | TherapeuticClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TherapeuticClass createManyAndReturn
   */
  export type TherapeuticClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * The data used to create many TherapeuticClasses.
     */
    data: TherapeuticClassCreateManyInput | TherapeuticClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TherapeuticClass update
   */
  export type TherapeuticClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * The data needed to update a TherapeuticClass.
     */
    data: XOR<TherapeuticClassUpdateInput, TherapeuticClassUncheckedUpdateInput>
    /**
     * Choose, which TherapeuticClass to update.
     */
    where: TherapeuticClassWhereUniqueInput
  }

  /**
   * TherapeuticClass updateMany
   */
  export type TherapeuticClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TherapeuticClasses.
     */
    data: XOR<TherapeuticClassUpdateManyMutationInput, TherapeuticClassUncheckedUpdateManyInput>
    /**
     * Filter which TherapeuticClasses to update
     */
    where?: TherapeuticClassWhereInput
    /**
     * Limit how many TherapeuticClasses to update.
     */
    limit?: number
  }

  /**
   * TherapeuticClass updateManyAndReturn
   */
  export type TherapeuticClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * The data used to update TherapeuticClasses.
     */
    data: XOR<TherapeuticClassUpdateManyMutationInput, TherapeuticClassUncheckedUpdateManyInput>
    /**
     * Filter which TherapeuticClasses to update
     */
    where?: TherapeuticClassWhereInput
    /**
     * Limit how many TherapeuticClasses to update.
     */
    limit?: number
  }

  /**
   * TherapeuticClass upsert
   */
  export type TherapeuticClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * The filter to search for the TherapeuticClass to update in case it exists.
     */
    where: TherapeuticClassWhereUniqueInput
    /**
     * In case the TherapeuticClass found by the `where` argument doesn't exist, create a new TherapeuticClass with this data.
     */
    create: XOR<TherapeuticClassCreateInput, TherapeuticClassUncheckedCreateInput>
    /**
     * In case the TherapeuticClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TherapeuticClassUpdateInput, TherapeuticClassUncheckedUpdateInput>
  }

  /**
   * TherapeuticClass delete
   */
  export type TherapeuticClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
    /**
     * Filter which TherapeuticClass to delete.
     */
    where: TherapeuticClassWhereUniqueInput
  }

  /**
   * TherapeuticClass deleteMany
   */
  export type TherapeuticClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TherapeuticClasses to delete
     */
    where?: TherapeuticClassWhereInput
    /**
     * Limit how many TherapeuticClasses to delete.
     */
    limit?: number
  }

  /**
   * TherapeuticClass.medications
   */
  export type TherapeuticClass$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * TherapeuticClass.subClasses
   */
  export type TherapeuticClass$subClassesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    where?: SubClassWhereInput
    orderBy?: SubClassOrderByWithRelationInput | SubClassOrderByWithRelationInput[]
    cursor?: SubClassWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SubClassScalarFieldEnum | SubClassScalarFieldEnum[]
  }

  /**
   * TherapeuticClass without action
   */
  export type TherapeuticClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TherapeuticClass
     */
    select?: TherapeuticClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TherapeuticClass
     */
    omit?: TherapeuticClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TherapeuticClassInclude<ExtArgs> | null
  }


  /**
   * Model SubClass
   */

  export type AggregateSubClass = {
    _count: SubClassCountAggregateOutputType | null
    _min: SubClassMinAggregateOutputType | null
    _max: SubClassMaxAggregateOutputType | null
  }

  export type SubClassMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    therapeuticClassId: string | null
  }

  export type SubClassMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    therapeuticClassId: string | null
  }

  export type SubClassCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    isActive: number
    createdAt: number
    updatedAt: number
    therapeuticClassId: number
    _all: number
  }


  export type SubClassMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    therapeuticClassId?: true
  }

  export type SubClassMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    therapeuticClassId?: true
  }

  export type SubClassCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    therapeuticClassId?: true
    _all?: true
  }

  export type SubClassAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubClass to aggregate.
     */
    where?: SubClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubClasses to fetch.
     */
    orderBy?: SubClassOrderByWithRelationInput | SubClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SubClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SubClasses
    **/
    _count?: true | SubClassCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SubClassMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SubClassMaxAggregateInputType
  }

  export type GetSubClassAggregateType<T extends SubClassAggregateArgs> = {
        [P in keyof T & keyof AggregateSubClass]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSubClass[P]>
      : GetScalarType<T[P], AggregateSubClass[P]>
  }




  export type SubClassGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SubClassWhereInput
    orderBy?: SubClassOrderByWithAggregationInput | SubClassOrderByWithAggregationInput[]
    by: SubClassScalarFieldEnum[] | SubClassScalarFieldEnum
    having?: SubClassScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SubClassCountAggregateInputType | true
    _min?: SubClassMinAggregateInputType
    _max?: SubClassMaxAggregateInputType
  }

  export type SubClassGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    therapeuticClassId: string
    _count: SubClassCountAggregateOutputType | null
    _min: SubClassMinAggregateOutputType | null
    _max: SubClassMaxAggregateOutputType | null
  }

  type GetSubClassGroupByPayload<T extends SubClassGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SubClassGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SubClassGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SubClassGroupByOutputType[P]>
            : GetScalarType<T[P], SubClassGroupByOutputType[P]>
        }
      >
    >


  export type SubClassSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    medications?: boolean | SubClass$medicationsArgs<ExtArgs>
    _count?: boolean | SubClassCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subClass"]>

  export type SubClassSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subClass"]>

  export type SubClassSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["subClass"]>

  export type SubClassSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
  }

  export type SubClassOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "isActive" | "createdAt" | "updatedAt" | "therapeuticClassId", ExtArgs["result"]["subClass"]>
  export type SubClassInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    medications?: boolean | SubClass$medicationsArgs<ExtArgs>
    _count?: boolean | SubClassCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SubClassIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
  }
  export type SubClassIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
  }

  export type $SubClassPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SubClass"
    objects: {
      therapeuticClass: Prisma.$TherapeuticClassPayload<ExtArgs>
      medications: Prisma.$MedicationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      therapeuticClassId: string
    }, ExtArgs["result"]["subClass"]>
    composites: {}
  }

  type SubClassGetPayload<S extends boolean | null | undefined | SubClassDefaultArgs> = $Result.GetResult<Prisma.$SubClassPayload, S>

  type SubClassCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SubClassFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SubClassCountAggregateInputType | true
    }

  export interface SubClassDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SubClass'], meta: { name: 'SubClass' } }
    /**
     * Find zero or one SubClass that matches the filter.
     * @param {SubClassFindUniqueArgs} args - Arguments to find a SubClass
     * @example
     * // Get one SubClass
     * const subClass = await prisma.subClass.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SubClassFindUniqueArgs>(args: SelectSubset<T, SubClassFindUniqueArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SubClass that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SubClassFindUniqueOrThrowArgs} args - Arguments to find a SubClass
     * @example
     * // Get one SubClass
     * const subClass = await prisma.subClass.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SubClassFindUniqueOrThrowArgs>(args: SelectSubset<T, SubClassFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubClass that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubClassFindFirstArgs} args - Arguments to find a SubClass
     * @example
     * // Get one SubClass
     * const subClass = await prisma.subClass.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SubClassFindFirstArgs>(args?: SelectSubset<T, SubClassFindFirstArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SubClass that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubClassFindFirstOrThrowArgs} args - Arguments to find a SubClass
     * @example
     * // Get one SubClass
     * const subClass = await prisma.subClass.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SubClassFindFirstOrThrowArgs>(args?: SelectSubset<T, SubClassFindFirstOrThrowArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SubClasses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubClassFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SubClasses
     * const subClasses = await prisma.subClass.findMany()
     * 
     * // Get first 10 SubClasses
     * const subClasses = await prisma.subClass.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const subClassWithIdOnly = await prisma.subClass.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SubClassFindManyArgs>(args?: SelectSubset<T, SubClassFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SubClass.
     * @param {SubClassCreateArgs} args - Arguments to create a SubClass.
     * @example
     * // Create one SubClass
     * const SubClass = await prisma.subClass.create({
     *   data: {
     *     // ... data to create a SubClass
     *   }
     * })
     * 
     */
    create<T extends SubClassCreateArgs>(args: SelectSubset<T, SubClassCreateArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SubClasses.
     * @param {SubClassCreateManyArgs} args - Arguments to create many SubClasses.
     * @example
     * // Create many SubClasses
     * const subClass = await prisma.subClass.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SubClassCreateManyArgs>(args?: SelectSubset<T, SubClassCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SubClasses and returns the data saved in the database.
     * @param {SubClassCreateManyAndReturnArgs} args - Arguments to create many SubClasses.
     * @example
     * // Create many SubClasses
     * const subClass = await prisma.subClass.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SubClasses and only return the `id`
     * const subClassWithIdOnly = await prisma.subClass.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SubClassCreateManyAndReturnArgs>(args?: SelectSubset<T, SubClassCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SubClass.
     * @param {SubClassDeleteArgs} args - Arguments to delete one SubClass.
     * @example
     * // Delete one SubClass
     * const SubClass = await prisma.subClass.delete({
     *   where: {
     *     // ... filter to delete one SubClass
     *   }
     * })
     * 
     */
    delete<T extends SubClassDeleteArgs>(args: SelectSubset<T, SubClassDeleteArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SubClass.
     * @param {SubClassUpdateArgs} args - Arguments to update one SubClass.
     * @example
     * // Update one SubClass
     * const subClass = await prisma.subClass.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SubClassUpdateArgs>(args: SelectSubset<T, SubClassUpdateArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SubClasses.
     * @param {SubClassDeleteManyArgs} args - Arguments to filter SubClasses to delete.
     * @example
     * // Delete a few SubClasses
     * const { count } = await prisma.subClass.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SubClassDeleteManyArgs>(args?: SelectSubset<T, SubClassDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubClassUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SubClasses
     * const subClass = await prisma.subClass.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SubClassUpdateManyArgs>(args: SelectSubset<T, SubClassUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SubClasses and returns the data updated in the database.
     * @param {SubClassUpdateManyAndReturnArgs} args - Arguments to update many SubClasses.
     * @example
     * // Update many SubClasses
     * const subClass = await prisma.subClass.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SubClasses and only return the `id`
     * const subClassWithIdOnly = await prisma.subClass.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SubClassUpdateManyAndReturnArgs>(args: SelectSubset<T, SubClassUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SubClass.
     * @param {SubClassUpsertArgs} args - Arguments to update or create a SubClass.
     * @example
     * // Update or create a SubClass
     * const subClass = await prisma.subClass.upsert({
     *   create: {
     *     // ... data to create a SubClass
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SubClass we want to update
     *   }
     * })
     */
    upsert<T extends SubClassUpsertArgs>(args: SelectSubset<T, SubClassUpsertArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SubClasses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubClassCountArgs} args - Arguments to filter SubClasses to count.
     * @example
     * // Count the number of SubClasses
     * const count = await prisma.subClass.count({
     *   where: {
     *     // ... the filter for the SubClasses we want to count
     *   }
     * })
    **/
    count<T extends SubClassCountArgs>(
      args?: Subset<T, SubClassCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SubClassCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SubClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubClassAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SubClassAggregateArgs>(args: Subset<T, SubClassAggregateArgs>): Prisma.PrismaPromise<GetSubClassAggregateType<T>>

    /**
     * Group by SubClass.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SubClassGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SubClassGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SubClassGroupByArgs['orderBy'] }
        : { orderBy?: SubClassGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SubClassGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSubClassGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SubClass model
   */
  readonly fields: SubClassFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SubClass.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SubClassClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapeuticClass<T extends TherapeuticClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapeuticClassDefaultArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medications<T extends SubClass$medicationsArgs<ExtArgs> = {}>(args?: Subset<T, SubClass$medicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SubClass model
   */
  interface SubClassFieldRefs {
    readonly id: FieldRef<"SubClass", 'String'>
    readonly code: FieldRef<"SubClass", 'String'>
    readonly name: FieldRef<"SubClass", 'String'>
    readonly description: FieldRef<"SubClass", 'String'>
    readonly isActive: FieldRef<"SubClass", 'Boolean'>
    readonly createdAt: FieldRef<"SubClass", 'DateTime'>
    readonly updatedAt: FieldRef<"SubClass", 'DateTime'>
    readonly therapeuticClassId: FieldRef<"SubClass", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SubClass findUnique
   */
  export type SubClassFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * Filter, which SubClass to fetch.
     */
    where: SubClassWhereUniqueInput
  }

  /**
   * SubClass findUniqueOrThrow
   */
  export type SubClassFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * Filter, which SubClass to fetch.
     */
    where: SubClassWhereUniqueInput
  }

  /**
   * SubClass findFirst
   */
  export type SubClassFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * Filter, which SubClass to fetch.
     */
    where?: SubClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubClasses to fetch.
     */
    orderBy?: SubClassOrderByWithRelationInput | SubClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubClasses.
     */
    cursor?: SubClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubClasses.
     */
    distinct?: SubClassScalarFieldEnum | SubClassScalarFieldEnum[]
  }

  /**
   * SubClass findFirstOrThrow
   */
  export type SubClassFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * Filter, which SubClass to fetch.
     */
    where?: SubClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubClasses to fetch.
     */
    orderBy?: SubClassOrderByWithRelationInput | SubClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SubClasses.
     */
    cursor?: SubClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubClasses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SubClasses.
     */
    distinct?: SubClassScalarFieldEnum | SubClassScalarFieldEnum[]
  }

  /**
   * SubClass findMany
   */
  export type SubClassFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * Filter, which SubClasses to fetch.
     */
    where?: SubClassWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SubClasses to fetch.
     */
    orderBy?: SubClassOrderByWithRelationInput | SubClassOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SubClasses.
     */
    cursor?: SubClassWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SubClasses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SubClasses.
     */
    skip?: number
    distinct?: SubClassScalarFieldEnum | SubClassScalarFieldEnum[]
  }

  /**
   * SubClass create
   */
  export type SubClassCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * The data needed to create a SubClass.
     */
    data: XOR<SubClassCreateInput, SubClassUncheckedCreateInput>
  }

  /**
   * SubClass createMany
   */
  export type SubClassCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SubClasses.
     */
    data: SubClassCreateManyInput | SubClassCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SubClass createManyAndReturn
   */
  export type SubClassCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * The data used to create many SubClasses.
     */
    data: SubClassCreateManyInput | SubClassCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubClass update
   */
  export type SubClassUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * The data needed to update a SubClass.
     */
    data: XOR<SubClassUpdateInput, SubClassUncheckedUpdateInput>
    /**
     * Choose, which SubClass to update.
     */
    where: SubClassWhereUniqueInput
  }

  /**
   * SubClass updateMany
   */
  export type SubClassUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SubClasses.
     */
    data: XOR<SubClassUpdateManyMutationInput, SubClassUncheckedUpdateManyInput>
    /**
     * Filter which SubClasses to update
     */
    where?: SubClassWhereInput
    /**
     * Limit how many SubClasses to update.
     */
    limit?: number
  }

  /**
   * SubClass updateManyAndReturn
   */
  export type SubClassUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * The data used to update SubClasses.
     */
    data: XOR<SubClassUpdateManyMutationInput, SubClassUncheckedUpdateManyInput>
    /**
     * Filter which SubClasses to update
     */
    where?: SubClassWhereInput
    /**
     * Limit how many SubClasses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SubClass upsert
   */
  export type SubClassUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * The filter to search for the SubClass to update in case it exists.
     */
    where: SubClassWhereUniqueInput
    /**
     * In case the SubClass found by the `where` argument doesn't exist, create a new SubClass with this data.
     */
    create: XOR<SubClassCreateInput, SubClassUncheckedCreateInput>
    /**
     * In case the SubClass was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SubClassUpdateInput, SubClassUncheckedUpdateInput>
  }

  /**
   * SubClass delete
   */
  export type SubClassDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    /**
     * Filter which SubClass to delete.
     */
    where: SubClassWhereUniqueInput
  }

  /**
   * SubClass deleteMany
   */
  export type SubClassDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SubClasses to delete
     */
    where?: SubClassWhereInput
    /**
     * Limit how many SubClasses to delete.
     */
    limit?: number
  }

  /**
   * SubClass.medications
   */
  export type SubClass$medicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    cursor?: MedicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * SubClass without action
   */
  export type SubClassDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
  }


  /**
   * Model Medication
   */

  export type AggregateMedication = {
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  export type MedicationAvgAggregateOutputType = {
    unitsPerPackage: number | null
    minStockLevel: number | null
  }

  export type MedicationSumAggregateOutputType = {
    unitsPerPackage: number | null
    minStockLevel: number | null
  }

  export type MedicationMinAggregateOutputType = {
    id: string | null
    dci: string | null
    codedci: string | null
    commercialName: string | null
    form: $Enums.MedicationForm | null
    dosage: string | null
    packagingUnit: $Enums.PackagingUnit | null
    unitsPerPackage: number | null
    minStockLevel: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    therapeuticClassId: string | null
    subClassId: string | null
  }

  export type MedicationMaxAggregateOutputType = {
    id: string | null
    dci: string | null
    codedci: string | null
    commercialName: string | null
    form: $Enums.MedicationForm | null
    dosage: string | null
    packagingUnit: $Enums.PackagingUnit | null
    unitsPerPackage: number | null
    minStockLevel: number | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    therapeuticClassId: string | null
    subClassId: string | null
  }

  export type MedicationCountAggregateOutputType = {
    id: number
    dci: number
    codedci: number
    commercialName: number
    form: number
    dosage: number
    packagingUnit: number
    unitsPerPackage: number
    minStockLevel: number
    isActive: number
    createdAt: number
    updatedAt: number
    therapeuticClassId: number
    subClassId: number
    _all: number
  }


  export type MedicationAvgAggregateInputType = {
    unitsPerPackage?: true
    minStockLevel?: true
  }

  export type MedicationSumAggregateInputType = {
    unitsPerPackage?: true
    minStockLevel?: true
  }

  export type MedicationMinAggregateInputType = {
    id?: true
    dci?: true
    codedci?: true
    commercialName?: true
    form?: true
    dosage?: true
    packagingUnit?: true
    unitsPerPackage?: true
    minStockLevel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    therapeuticClassId?: true
    subClassId?: true
  }

  export type MedicationMaxAggregateInputType = {
    id?: true
    dci?: true
    codedci?: true
    commercialName?: true
    form?: true
    dosage?: true
    packagingUnit?: true
    unitsPerPackage?: true
    minStockLevel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    therapeuticClassId?: true
    subClassId?: true
  }

  export type MedicationCountAggregateInputType = {
    id?: true
    dci?: true
    codedci?: true
    commercialName?: true
    form?: true
    dosage?: true
    packagingUnit?: true
    unitsPerPackage?: true
    minStockLevel?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    therapeuticClassId?: true
    subClassId?: true
    _all?: true
  }

  export type MedicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medication to aggregate.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Medications
    **/
    _count?: true | MedicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationMaxAggregateInputType
  }

  export type GetMedicationAggregateType<T extends MedicationAggregateArgs> = {
        [P in keyof T & keyof AggregateMedication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedication[P]>
      : GetScalarType<T[P], AggregateMedication[P]>
  }




  export type MedicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationWhereInput
    orderBy?: MedicationOrderByWithAggregationInput | MedicationOrderByWithAggregationInput[]
    by: MedicationScalarFieldEnum[] | MedicationScalarFieldEnum
    having?: MedicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationCountAggregateInputType | true
    _avg?: MedicationAvgAggregateInputType
    _sum?: MedicationSumAggregateInputType
    _min?: MedicationMinAggregateInputType
    _max?: MedicationMaxAggregateInputType
  }

  export type MedicationGroupByOutputType = {
    id: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    therapeuticClassId: string
    subClassId: string | null
    _count: MedicationCountAggregateOutputType | null
    _avg: MedicationAvgAggregateOutputType | null
    _sum: MedicationSumAggregateOutputType | null
    _min: MedicationMinAggregateOutputType | null
    _max: MedicationMaxAggregateOutputType | null
  }

  type GetMedicationGroupByPayload<T extends MedicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationGroupByOutputType[P]>
        }
      >
    >


  export type MedicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dci?: boolean
    codedci?: boolean
    commercialName?: boolean
    form?: boolean
    dosage?: boolean
    packagingUnit?: boolean
    unitsPerPackage?: boolean
    minStockLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
    subClassId?: boolean
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    subClass?: boolean | Medication$subClassArgs<ExtArgs>
    batches?: boolean | Medication$batchesArgs<ExtArgs>
    orderItems?: boolean | Medication$orderItemsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dci?: boolean
    codedci?: boolean
    commercialName?: boolean
    form?: boolean
    dosage?: boolean
    packagingUnit?: boolean
    unitsPerPackage?: boolean
    minStockLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
    subClassId?: boolean
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    subClass?: boolean | Medication$subClassArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    dci?: boolean
    codedci?: boolean
    commercialName?: boolean
    form?: boolean
    dosage?: boolean
    packagingUnit?: boolean
    unitsPerPackage?: boolean
    minStockLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
    subClassId?: boolean
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    subClass?: boolean | Medication$subClassArgs<ExtArgs>
  }, ExtArgs["result"]["medication"]>

  export type MedicationSelectScalar = {
    id?: boolean
    dci?: boolean
    codedci?: boolean
    commercialName?: boolean
    form?: boolean
    dosage?: boolean
    packagingUnit?: boolean
    unitsPerPackage?: boolean
    minStockLevel?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    therapeuticClassId?: boolean
    subClassId?: boolean
  }

  export type MedicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "dci" | "codedci" | "commercialName" | "form" | "dosage" | "packagingUnit" | "unitsPerPackage" | "minStockLevel" | "isActive" | "createdAt" | "updatedAt" | "therapeuticClassId" | "subClassId", ExtArgs["result"]["medication"]>
  export type MedicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    subClass?: boolean | Medication$subClassArgs<ExtArgs>
    batches?: boolean | Medication$batchesArgs<ExtArgs>
    orderItems?: boolean | Medication$orderItemsArgs<ExtArgs>
    _count?: boolean | MedicationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    subClass?: boolean | Medication$subClassArgs<ExtArgs>
  }
  export type MedicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    therapeuticClass?: boolean | TherapeuticClassDefaultArgs<ExtArgs>
    subClass?: boolean | Medication$subClassArgs<ExtArgs>
  }

  export type $MedicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Medication"
    objects: {
      therapeuticClass: Prisma.$TherapeuticClassPayload<ExtArgs>
      subClass: Prisma.$SubClassPayload<ExtArgs> | null
      batches: Prisma.$MedicationBatchPayload<ExtArgs>[]
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      dci: string
      codedci: string
      commercialName: string
      form: $Enums.MedicationForm
      dosage: string
      packagingUnit: $Enums.PackagingUnit
      unitsPerPackage: number
      minStockLevel: number
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      therapeuticClassId: string
      subClassId: string | null
    }, ExtArgs["result"]["medication"]>
    composites: {}
  }

  type MedicationGetPayload<S extends boolean | null | undefined | MedicationDefaultArgs> = $Result.GetResult<Prisma.$MedicationPayload, S>

  type MedicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationCountAggregateInputType | true
    }

  export interface MedicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Medication'], meta: { name: 'Medication' } }
    /**
     * Find zero or one Medication that matches the filter.
     * @param {MedicationFindUniqueArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationFindUniqueArgs>(args: SelectSubset<T, MedicationFindUniqueArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Medication that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationFindUniqueOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationFindFirstArgs>(args?: SelectSubset<T, MedicationFindFirstArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Medication that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindFirstOrThrowArgs} args - Arguments to find a Medication
     * @example
     * // Get one Medication
     * const medication = await prisma.medication.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Medications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Medications
     * const medications = await prisma.medication.findMany()
     * 
     * // Get first 10 Medications
     * const medications = await prisma.medication.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationWithIdOnly = await prisma.medication.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationFindManyArgs>(args?: SelectSubset<T, MedicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Medication.
     * @param {MedicationCreateArgs} args - Arguments to create a Medication.
     * @example
     * // Create one Medication
     * const Medication = await prisma.medication.create({
     *   data: {
     *     // ... data to create a Medication
     *   }
     * })
     * 
     */
    create<T extends MedicationCreateArgs>(args: SelectSubset<T, MedicationCreateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Medications.
     * @param {MedicationCreateManyArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationCreateManyArgs>(args?: SelectSubset<T, MedicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Medications and returns the data saved in the database.
     * @param {MedicationCreateManyAndReturnArgs} args - Arguments to create many Medications.
     * @example
     * // Create many Medications
     * const medication = await prisma.medication.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Medication.
     * @param {MedicationDeleteArgs} args - Arguments to delete one Medication.
     * @example
     * // Delete one Medication
     * const Medication = await prisma.medication.delete({
     *   where: {
     *     // ... filter to delete one Medication
     *   }
     * })
     * 
     */
    delete<T extends MedicationDeleteArgs>(args: SelectSubset<T, MedicationDeleteArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Medication.
     * @param {MedicationUpdateArgs} args - Arguments to update one Medication.
     * @example
     * // Update one Medication
     * const medication = await prisma.medication.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationUpdateArgs>(args: SelectSubset<T, MedicationUpdateArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Medications.
     * @param {MedicationDeleteManyArgs} args - Arguments to filter Medications to delete.
     * @example
     * // Delete a few Medications
     * const { count } = await prisma.medication.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationDeleteManyArgs>(args?: SelectSubset<T, MedicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationUpdateManyArgs>(args: SelectSubset<T, MedicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Medications and returns the data updated in the database.
     * @param {MedicationUpdateManyAndReturnArgs} args - Arguments to update many Medications.
     * @example
     * // Update many Medications
     * const medication = await prisma.medication.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Medications and only return the `id`
     * const medicationWithIdOnly = await prisma.medication.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Medication.
     * @param {MedicationUpsertArgs} args - Arguments to update or create a Medication.
     * @example
     * // Update or create a Medication
     * const medication = await prisma.medication.upsert({
     *   create: {
     *     // ... data to create a Medication
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Medication we want to update
     *   }
     * })
     */
    upsert<T extends MedicationUpsertArgs>(args: SelectSubset<T, MedicationUpsertArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Medications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationCountArgs} args - Arguments to filter Medications to count.
     * @example
     * // Count the number of Medications
     * const count = await prisma.medication.count({
     *   where: {
     *     // ... the filter for the Medications we want to count
     *   }
     * })
    **/
    count<T extends MedicationCountArgs>(
      args?: Subset<T, MedicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationAggregateArgs>(args: Subset<T, MedicationAggregateArgs>): Prisma.PrismaPromise<GetMedicationAggregateType<T>>

    /**
     * Group by Medication.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationGroupByArgs['orderBy'] }
        : { orderBy?: MedicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Medication model
   */
  readonly fields: MedicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Medication.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    therapeuticClass<T extends TherapeuticClassDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TherapeuticClassDefaultArgs<ExtArgs>>): Prisma__TherapeuticClassClient<$Result.GetResult<Prisma.$TherapeuticClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    subClass<T extends Medication$subClassArgs<ExtArgs> = {}>(args?: Subset<T, Medication$subClassArgs<ExtArgs>>): Prisma__SubClassClient<$Result.GetResult<Prisma.$SubClassPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    batches<T extends Medication$batchesArgs<ExtArgs> = {}>(args?: Subset<T, Medication$batchesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orderItems<T extends Medication$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Medication$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Medication model
   */
  interface MedicationFieldRefs {
    readonly id: FieldRef<"Medication", 'String'>
    readonly dci: FieldRef<"Medication", 'String'>
    readonly codedci: FieldRef<"Medication", 'String'>
    readonly commercialName: FieldRef<"Medication", 'String'>
    readonly form: FieldRef<"Medication", 'MedicationForm'>
    readonly dosage: FieldRef<"Medication", 'String'>
    readonly packagingUnit: FieldRef<"Medication", 'PackagingUnit'>
    readonly unitsPerPackage: FieldRef<"Medication", 'Int'>
    readonly minStockLevel: FieldRef<"Medication", 'Int'>
    readonly isActive: FieldRef<"Medication", 'Boolean'>
    readonly createdAt: FieldRef<"Medication", 'DateTime'>
    readonly updatedAt: FieldRef<"Medication", 'DateTime'>
    readonly therapeuticClassId: FieldRef<"Medication", 'String'>
    readonly subClassId: FieldRef<"Medication", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Medication findUnique
   */
  export type MedicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findUniqueOrThrow
   */
  export type MedicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication findFirst
   */
  export type MedicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findFirstOrThrow
   */
  export type MedicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medication to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Medications.
     */
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication findMany
   */
  export type MedicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter, which Medications to fetch.
     */
    where?: MedicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Medications to fetch.
     */
    orderBy?: MedicationOrderByWithRelationInput | MedicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Medications.
     */
    cursor?: MedicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Medications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Medications.
     */
    skip?: number
    distinct?: MedicationScalarFieldEnum | MedicationScalarFieldEnum[]
  }

  /**
   * Medication create
   */
  export type MedicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Medication.
     */
    data: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
  }

  /**
   * Medication createMany
   */
  export type MedicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Medication createManyAndReturn
   */
  export type MedicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to create many Medications.
     */
    data: MedicationCreateManyInput | MedicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication update
   */
  export type MedicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Medication.
     */
    data: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
    /**
     * Choose, which Medication to update.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication updateMany
   */
  export type MedicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
  }

  /**
   * Medication updateManyAndReturn
   */
  export type MedicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * The data used to update Medications.
     */
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyInput>
    /**
     * Filter which Medications to update
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Medication upsert
   */
  export type MedicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Medication to update in case it exists.
     */
    where: MedicationWhereUniqueInput
    /**
     * In case the Medication found by the `where` argument doesn't exist, create a new Medication with this data.
     */
    create: XOR<MedicationCreateInput, MedicationUncheckedCreateInput>
    /**
     * In case the Medication was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationUpdateInput, MedicationUncheckedUpdateInput>
  }

  /**
   * Medication delete
   */
  export type MedicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
    /**
     * Filter which Medication to delete.
     */
    where: MedicationWhereUniqueInput
  }

  /**
   * Medication deleteMany
   */
  export type MedicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Medications to delete
     */
    where?: MedicationWhereInput
    /**
     * Limit how many Medications to delete.
     */
    limit?: number
  }

  /**
   * Medication.subClass
   */
  export type Medication$subClassArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SubClass
     */
    select?: SubClassSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SubClass
     */
    omit?: SubClassOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SubClassInclude<ExtArgs> | null
    where?: SubClassWhereInput
  }

  /**
   * Medication.batches
   */
  export type Medication$batchesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    where?: MedicationBatchWhereInput
    orderBy?: MedicationBatchOrderByWithRelationInput | MedicationBatchOrderByWithRelationInput[]
    cursor?: MedicationBatchWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MedicationBatchScalarFieldEnum | MedicationBatchScalarFieldEnum[]
  }

  /**
   * Medication.orderItems
   */
  export type Medication$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Medication without action
   */
  export type MedicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Medication
     */
    select?: MedicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Medication
     */
    omit?: MedicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationInclude<ExtArgs> | null
  }


  /**
   * Model MedicationBatch
   */

  export type AggregateMedicationBatch = {
    _count: MedicationBatchCountAggregateOutputType | null
    _avg: MedicationBatchAvgAggregateOutputType | null
    _sum: MedicationBatchSumAggregateOutputType | null
    _min: MedicationBatchMinAggregateOutputType | null
    _max: MedicationBatchMaxAggregateOutputType | null
  }

  export type MedicationBatchAvgAggregateOutputType = {
    currentQuantity: number | null
    initialQuantity: number | null
  }

  export type MedicationBatchSumAggregateOutputType = {
    currentQuantity: number | null
    initialQuantity: number | null
  }

  export type MedicationBatchMinAggregateOutputType = {
    id: string | null
    medicationId: string | null
    batchNumber: string | null
    expirationDate: Date | null
    currentQuantity: number | null
    initialQuantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationBatchMaxAggregateOutputType = {
    id: string | null
    medicationId: string | null
    batchNumber: string | null
    expirationDate: Date | null
    currentQuantity: number | null
    initialQuantity: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type MedicationBatchCountAggregateOutputType = {
    id: number
    medicationId: number
    batchNumber: number
    expirationDate: number
    currentQuantity: number
    initialQuantity: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type MedicationBatchAvgAggregateInputType = {
    currentQuantity?: true
    initialQuantity?: true
  }

  export type MedicationBatchSumAggregateInputType = {
    currentQuantity?: true
    initialQuantity?: true
  }

  export type MedicationBatchMinAggregateInputType = {
    id?: true
    medicationId?: true
    batchNumber?: true
    expirationDate?: true
    currentQuantity?: true
    initialQuantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationBatchMaxAggregateInputType = {
    id?: true
    medicationId?: true
    batchNumber?: true
    expirationDate?: true
    currentQuantity?: true
    initialQuantity?: true
    createdAt?: true
    updatedAt?: true
  }

  export type MedicationBatchCountAggregateInputType = {
    id?: true
    medicationId?: true
    batchNumber?: true
    expirationDate?: true
    currentQuantity?: true
    initialQuantity?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type MedicationBatchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationBatch to aggregate.
     */
    where?: MedicationBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationBatches to fetch.
     */
    orderBy?: MedicationBatchOrderByWithRelationInput | MedicationBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MedicationBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MedicationBatches
    **/
    _count?: true | MedicationBatchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MedicationBatchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MedicationBatchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MedicationBatchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MedicationBatchMaxAggregateInputType
  }

  export type GetMedicationBatchAggregateType<T extends MedicationBatchAggregateArgs> = {
        [P in keyof T & keyof AggregateMedicationBatch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMedicationBatch[P]>
      : GetScalarType<T[P], AggregateMedicationBatch[P]>
  }




  export type MedicationBatchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MedicationBatchWhereInput
    orderBy?: MedicationBatchOrderByWithAggregationInput | MedicationBatchOrderByWithAggregationInput[]
    by: MedicationBatchScalarFieldEnum[] | MedicationBatchScalarFieldEnum
    having?: MedicationBatchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MedicationBatchCountAggregateInputType | true
    _avg?: MedicationBatchAvgAggregateInputType
    _sum?: MedicationBatchSumAggregateInputType
    _min?: MedicationBatchMinAggregateInputType
    _max?: MedicationBatchMaxAggregateInputType
  }

  export type MedicationBatchGroupByOutputType = {
    id: string
    medicationId: string
    batchNumber: string
    expirationDate: Date
    currentQuantity: number
    initialQuantity: number
    createdAt: Date
    updatedAt: Date
    _count: MedicationBatchCountAggregateOutputType | null
    _avg: MedicationBatchAvgAggregateOutputType | null
    _sum: MedicationBatchSumAggregateOutputType | null
    _min: MedicationBatchMinAggregateOutputType | null
    _max: MedicationBatchMaxAggregateOutputType | null
  }

  type GetMedicationBatchGroupByPayload<T extends MedicationBatchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MedicationBatchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MedicationBatchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MedicationBatchGroupByOutputType[P]>
            : GetScalarType<T[P], MedicationBatchGroupByOutputType[P]>
        }
      >
    >


  export type MedicationBatchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    currentQuantity?: boolean
    initialQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    stockEntries?: boolean | MedicationBatch$stockEntriesArgs<ExtArgs>
    stockExits?: boolean | MedicationBatch$stockExitsArgs<ExtArgs>
    _count?: boolean | MedicationBatchCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationBatch"]>

  export type MedicationBatchSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    currentQuantity?: boolean
    initialQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationBatch"]>

  export type MedicationBatchSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    medicationId?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    currentQuantity?: boolean
    initialQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["medicationBatch"]>

  export type MedicationBatchSelectScalar = {
    id?: boolean
    medicationId?: boolean
    batchNumber?: boolean
    expirationDate?: boolean
    currentQuantity?: boolean
    initialQuantity?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type MedicationBatchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "medicationId" | "batchNumber" | "expirationDate" | "currentQuantity" | "initialQuantity" | "createdAt" | "updatedAt", ExtArgs["result"]["medicationBatch"]>
  export type MedicationBatchInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    stockEntries?: boolean | MedicationBatch$stockEntriesArgs<ExtArgs>
    stockExits?: boolean | MedicationBatch$stockExitsArgs<ExtArgs>
    _count?: boolean | MedicationBatchCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MedicationBatchIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type MedicationBatchIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $MedicationBatchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MedicationBatch"
    objects: {
      medication: Prisma.$MedicationPayload<ExtArgs>
      stockEntries: Prisma.$StockEntryPayload<ExtArgs>[]
      stockExits: Prisma.$StockExitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      medicationId: string
      batchNumber: string
      expirationDate: Date
      currentQuantity: number
      initialQuantity: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["medicationBatch"]>
    composites: {}
  }

  type MedicationBatchGetPayload<S extends boolean | null | undefined | MedicationBatchDefaultArgs> = $Result.GetResult<Prisma.$MedicationBatchPayload, S>

  type MedicationBatchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MedicationBatchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MedicationBatchCountAggregateInputType | true
    }

  export interface MedicationBatchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MedicationBatch'], meta: { name: 'MedicationBatch' } }
    /**
     * Find zero or one MedicationBatch that matches the filter.
     * @param {MedicationBatchFindUniqueArgs} args - Arguments to find a MedicationBatch
     * @example
     * // Get one MedicationBatch
     * const medicationBatch = await prisma.medicationBatch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MedicationBatchFindUniqueArgs>(args: SelectSubset<T, MedicationBatchFindUniqueArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MedicationBatch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MedicationBatchFindUniqueOrThrowArgs} args - Arguments to find a MedicationBatch
     * @example
     * // Get one MedicationBatch
     * const medicationBatch = await prisma.medicationBatch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MedicationBatchFindUniqueOrThrowArgs>(args: SelectSubset<T, MedicationBatchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationBatch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationBatchFindFirstArgs} args - Arguments to find a MedicationBatch
     * @example
     * // Get one MedicationBatch
     * const medicationBatch = await prisma.medicationBatch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MedicationBatchFindFirstArgs>(args?: SelectSubset<T, MedicationBatchFindFirstArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MedicationBatch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationBatchFindFirstOrThrowArgs} args - Arguments to find a MedicationBatch
     * @example
     * // Get one MedicationBatch
     * const medicationBatch = await prisma.medicationBatch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MedicationBatchFindFirstOrThrowArgs>(args?: SelectSubset<T, MedicationBatchFindFirstOrThrowArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MedicationBatches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationBatchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MedicationBatches
     * const medicationBatches = await prisma.medicationBatch.findMany()
     * 
     * // Get first 10 MedicationBatches
     * const medicationBatches = await prisma.medicationBatch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const medicationBatchWithIdOnly = await prisma.medicationBatch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MedicationBatchFindManyArgs>(args?: SelectSubset<T, MedicationBatchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MedicationBatch.
     * @param {MedicationBatchCreateArgs} args - Arguments to create a MedicationBatch.
     * @example
     * // Create one MedicationBatch
     * const MedicationBatch = await prisma.medicationBatch.create({
     *   data: {
     *     // ... data to create a MedicationBatch
     *   }
     * })
     * 
     */
    create<T extends MedicationBatchCreateArgs>(args: SelectSubset<T, MedicationBatchCreateArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MedicationBatches.
     * @param {MedicationBatchCreateManyArgs} args - Arguments to create many MedicationBatches.
     * @example
     * // Create many MedicationBatches
     * const medicationBatch = await prisma.medicationBatch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MedicationBatchCreateManyArgs>(args?: SelectSubset<T, MedicationBatchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MedicationBatches and returns the data saved in the database.
     * @param {MedicationBatchCreateManyAndReturnArgs} args - Arguments to create many MedicationBatches.
     * @example
     * // Create many MedicationBatches
     * const medicationBatch = await prisma.medicationBatch.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MedicationBatches and only return the `id`
     * const medicationBatchWithIdOnly = await prisma.medicationBatch.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MedicationBatchCreateManyAndReturnArgs>(args?: SelectSubset<T, MedicationBatchCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MedicationBatch.
     * @param {MedicationBatchDeleteArgs} args - Arguments to delete one MedicationBatch.
     * @example
     * // Delete one MedicationBatch
     * const MedicationBatch = await prisma.medicationBatch.delete({
     *   where: {
     *     // ... filter to delete one MedicationBatch
     *   }
     * })
     * 
     */
    delete<T extends MedicationBatchDeleteArgs>(args: SelectSubset<T, MedicationBatchDeleteArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MedicationBatch.
     * @param {MedicationBatchUpdateArgs} args - Arguments to update one MedicationBatch.
     * @example
     * // Update one MedicationBatch
     * const medicationBatch = await prisma.medicationBatch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MedicationBatchUpdateArgs>(args: SelectSubset<T, MedicationBatchUpdateArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MedicationBatches.
     * @param {MedicationBatchDeleteManyArgs} args - Arguments to filter MedicationBatches to delete.
     * @example
     * // Delete a few MedicationBatches
     * const { count } = await prisma.medicationBatch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MedicationBatchDeleteManyArgs>(args?: SelectSubset<T, MedicationBatchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationBatchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MedicationBatches
     * const medicationBatch = await prisma.medicationBatch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MedicationBatchUpdateManyArgs>(args: SelectSubset<T, MedicationBatchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MedicationBatches and returns the data updated in the database.
     * @param {MedicationBatchUpdateManyAndReturnArgs} args - Arguments to update many MedicationBatches.
     * @example
     * // Update many MedicationBatches
     * const medicationBatch = await prisma.medicationBatch.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MedicationBatches and only return the `id`
     * const medicationBatchWithIdOnly = await prisma.medicationBatch.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MedicationBatchUpdateManyAndReturnArgs>(args: SelectSubset<T, MedicationBatchUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MedicationBatch.
     * @param {MedicationBatchUpsertArgs} args - Arguments to update or create a MedicationBatch.
     * @example
     * // Update or create a MedicationBatch
     * const medicationBatch = await prisma.medicationBatch.upsert({
     *   create: {
     *     // ... data to create a MedicationBatch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MedicationBatch we want to update
     *   }
     * })
     */
    upsert<T extends MedicationBatchUpsertArgs>(args: SelectSubset<T, MedicationBatchUpsertArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MedicationBatches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationBatchCountArgs} args - Arguments to filter MedicationBatches to count.
     * @example
     * // Count the number of MedicationBatches
     * const count = await prisma.medicationBatch.count({
     *   where: {
     *     // ... the filter for the MedicationBatches we want to count
     *   }
     * })
    **/
    count<T extends MedicationBatchCountArgs>(
      args?: Subset<T, MedicationBatchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MedicationBatchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MedicationBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationBatchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MedicationBatchAggregateArgs>(args: Subset<T, MedicationBatchAggregateArgs>): Prisma.PrismaPromise<GetMedicationBatchAggregateType<T>>

    /**
     * Group by MedicationBatch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MedicationBatchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MedicationBatchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MedicationBatchGroupByArgs['orderBy'] }
        : { orderBy?: MedicationBatchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MedicationBatchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMedicationBatchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MedicationBatch model
   */
  readonly fields: MedicationBatchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MedicationBatch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MedicationBatchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stockEntries<T extends MedicationBatch$stockEntriesArgs<ExtArgs> = {}>(args?: Subset<T, MedicationBatch$stockEntriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    stockExits<T extends MedicationBatch$stockExitsArgs<ExtArgs> = {}>(args?: Subset<T, MedicationBatch$stockExitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MedicationBatch model
   */
  interface MedicationBatchFieldRefs {
    readonly id: FieldRef<"MedicationBatch", 'String'>
    readonly medicationId: FieldRef<"MedicationBatch", 'String'>
    readonly batchNumber: FieldRef<"MedicationBatch", 'String'>
    readonly expirationDate: FieldRef<"MedicationBatch", 'DateTime'>
    readonly currentQuantity: FieldRef<"MedicationBatch", 'Int'>
    readonly initialQuantity: FieldRef<"MedicationBatch", 'Int'>
    readonly createdAt: FieldRef<"MedicationBatch", 'DateTime'>
    readonly updatedAt: FieldRef<"MedicationBatch", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * MedicationBatch findUnique
   */
  export type MedicationBatchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * Filter, which MedicationBatch to fetch.
     */
    where: MedicationBatchWhereUniqueInput
  }

  /**
   * MedicationBatch findUniqueOrThrow
   */
  export type MedicationBatchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * Filter, which MedicationBatch to fetch.
     */
    where: MedicationBatchWhereUniqueInput
  }

  /**
   * MedicationBatch findFirst
   */
  export type MedicationBatchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * Filter, which MedicationBatch to fetch.
     */
    where?: MedicationBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationBatches to fetch.
     */
    orderBy?: MedicationBatchOrderByWithRelationInput | MedicationBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationBatches.
     */
    cursor?: MedicationBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationBatches.
     */
    distinct?: MedicationBatchScalarFieldEnum | MedicationBatchScalarFieldEnum[]
  }

  /**
   * MedicationBatch findFirstOrThrow
   */
  export type MedicationBatchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * Filter, which MedicationBatch to fetch.
     */
    where?: MedicationBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationBatches to fetch.
     */
    orderBy?: MedicationBatchOrderByWithRelationInput | MedicationBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MedicationBatches.
     */
    cursor?: MedicationBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationBatches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MedicationBatches.
     */
    distinct?: MedicationBatchScalarFieldEnum | MedicationBatchScalarFieldEnum[]
  }

  /**
   * MedicationBatch findMany
   */
  export type MedicationBatchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * Filter, which MedicationBatches to fetch.
     */
    where?: MedicationBatchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MedicationBatches to fetch.
     */
    orderBy?: MedicationBatchOrderByWithRelationInput | MedicationBatchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MedicationBatches.
     */
    cursor?: MedicationBatchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MedicationBatches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MedicationBatches.
     */
    skip?: number
    distinct?: MedicationBatchScalarFieldEnum | MedicationBatchScalarFieldEnum[]
  }

  /**
   * MedicationBatch create
   */
  export type MedicationBatchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * The data needed to create a MedicationBatch.
     */
    data: XOR<MedicationBatchCreateInput, MedicationBatchUncheckedCreateInput>
  }

  /**
   * MedicationBatch createMany
   */
  export type MedicationBatchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MedicationBatches.
     */
    data: MedicationBatchCreateManyInput | MedicationBatchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MedicationBatch createManyAndReturn
   */
  export type MedicationBatchCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * The data used to create many MedicationBatches.
     */
    data: MedicationBatchCreateManyInput | MedicationBatchCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationBatch update
   */
  export type MedicationBatchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * The data needed to update a MedicationBatch.
     */
    data: XOR<MedicationBatchUpdateInput, MedicationBatchUncheckedUpdateInput>
    /**
     * Choose, which MedicationBatch to update.
     */
    where: MedicationBatchWhereUniqueInput
  }

  /**
   * MedicationBatch updateMany
   */
  export type MedicationBatchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MedicationBatches.
     */
    data: XOR<MedicationBatchUpdateManyMutationInput, MedicationBatchUncheckedUpdateManyInput>
    /**
     * Filter which MedicationBatches to update
     */
    where?: MedicationBatchWhereInput
    /**
     * Limit how many MedicationBatches to update.
     */
    limit?: number
  }

  /**
   * MedicationBatch updateManyAndReturn
   */
  export type MedicationBatchUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * The data used to update MedicationBatches.
     */
    data: XOR<MedicationBatchUpdateManyMutationInput, MedicationBatchUncheckedUpdateManyInput>
    /**
     * Filter which MedicationBatches to update
     */
    where?: MedicationBatchWhereInput
    /**
     * Limit how many MedicationBatches to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MedicationBatch upsert
   */
  export type MedicationBatchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * The filter to search for the MedicationBatch to update in case it exists.
     */
    where: MedicationBatchWhereUniqueInput
    /**
     * In case the MedicationBatch found by the `where` argument doesn't exist, create a new MedicationBatch with this data.
     */
    create: XOR<MedicationBatchCreateInput, MedicationBatchUncheckedCreateInput>
    /**
     * In case the MedicationBatch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MedicationBatchUpdateInput, MedicationBatchUncheckedUpdateInput>
  }

  /**
   * MedicationBatch delete
   */
  export type MedicationBatchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
    /**
     * Filter which MedicationBatch to delete.
     */
    where: MedicationBatchWhereUniqueInput
  }

  /**
   * MedicationBatch deleteMany
   */
  export type MedicationBatchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MedicationBatches to delete
     */
    where?: MedicationBatchWhereInput
    /**
     * Limit how many MedicationBatches to delete.
     */
    limit?: number
  }

  /**
   * MedicationBatch.stockEntries
   */
  export type MedicationBatch$stockEntriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    where?: StockEntryWhereInput
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    cursor?: StockEntryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * MedicationBatch.stockExits
   */
  export type MedicationBatch$stockExitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    where?: StockExitWhereInput
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    cursor?: StockExitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * MedicationBatch without action
   */
  export type MedicationBatchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MedicationBatch
     */
    select?: MedicationBatchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MedicationBatch
     */
    omit?: MedicationBatchOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MedicationBatchInclude<ExtArgs> | null
  }


  /**
   * Model StockEntry
   */

  export type AggregateStockEntry = {
    _count: StockEntryCountAggregateOutputType | null
    _avg: StockEntryAvgAggregateOutputType | null
    _sum: StockEntrySumAggregateOutputType | null
    _min: StockEntryMinAggregateOutputType | null
    _max: StockEntryMaxAggregateOutputType | null
  }

  export type StockEntryAvgAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type StockEntrySumAggregateOutputType = {
    quantity: number | null
    unitPrice: number | null
  }

  export type StockEntryMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    entryDate: Date | null
    invoiceNumber: string | null
    unitPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    batchId: string | null
    supplierId: string | null
  }

  export type StockEntryMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    entryDate: Date | null
    invoiceNumber: string | null
    unitPrice: number | null
    createdAt: Date | null
    updatedAt: Date | null
    batchId: string | null
    supplierId: string | null
  }

  export type StockEntryCountAggregateOutputType = {
    id: number
    quantity: number
    entryDate: number
    invoiceNumber: number
    unitPrice: number
    createdAt: number
    updatedAt: number
    batchId: number
    supplierId: number
    _all: number
  }


  export type StockEntryAvgAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type StockEntrySumAggregateInputType = {
    quantity?: true
    unitPrice?: true
  }

  export type StockEntryMinAggregateInputType = {
    id?: true
    quantity?: true
    entryDate?: true
    invoiceNumber?: true
    unitPrice?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
    supplierId?: true
  }

  export type StockEntryMaxAggregateInputType = {
    id?: true
    quantity?: true
    entryDate?: true
    invoiceNumber?: true
    unitPrice?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
    supplierId?: true
  }

  export type StockEntryCountAggregateInputType = {
    id?: true
    quantity?: true
    entryDate?: true
    invoiceNumber?: true
    unitPrice?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
    supplierId?: true
    _all?: true
  }

  export type StockEntryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockEntry to aggregate.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockEntries
    **/
    _count?: true | StockEntryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockEntryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockEntrySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockEntryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockEntryMaxAggregateInputType
  }

  export type GetStockEntryAggregateType<T extends StockEntryAggregateArgs> = {
        [P in keyof T & keyof AggregateStockEntry]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockEntry[P]>
      : GetScalarType<T[P], AggregateStockEntry[P]>
  }




  export type StockEntryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockEntryWhereInput
    orderBy?: StockEntryOrderByWithAggregationInput | StockEntryOrderByWithAggregationInput[]
    by: StockEntryScalarFieldEnum[] | StockEntryScalarFieldEnum
    having?: StockEntryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockEntryCountAggregateInputType | true
    _avg?: StockEntryAvgAggregateInputType
    _sum?: StockEntrySumAggregateInputType
    _min?: StockEntryMinAggregateInputType
    _max?: StockEntryMaxAggregateInputType
  }

  export type StockEntryGroupByOutputType = {
    id: string
    quantity: number
    entryDate: Date
    invoiceNumber: string | null
    unitPrice: number | null
    createdAt: Date
    updatedAt: Date
    batchId: string
    supplierId: string
    _count: StockEntryCountAggregateOutputType | null
    _avg: StockEntryAvgAggregateOutputType | null
    _sum: StockEntrySumAggregateOutputType | null
    _min: StockEntryMinAggregateOutputType | null
    _max: StockEntryMaxAggregateOutputType | null
  }

  type GetStockEntryGroupByPayload<T extends StockEntryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockEntryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockEntryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockEntryGroupByOutputType[P]>
            : GetScalarType<T[P], StockEntryGroupByOutputType[P]>
        }
      >
    >


  export type StockEntrySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    entryDate?: boolean
    invoiceNumber?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    supplierId?: boolean
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    entryDate?: boolean
    invoiceNumber?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    supplierId?: boolean
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    entryDate?: boolean
    invoiceNumber?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    supplierId?: boolean
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["stockEntry"]>

  export type StockEntrySelectScalar = {
    id?: boolean
    quantity?: boolean
    entryDate?: boolean
    invoiceNumber?: boolean
    unitPrice?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    supplierId?: boolean
  }

  export type StockEntryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "entryDate" | "invoiceNumber" | "unitPrice" | "createdAt" | "updatedAt" | "batchId" | "supplierId", ExtArgs["result"]["stockEntry"]>
  export type StockEntryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type StockEntryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }
  export type StockEntryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    supplier?: boolean | SupplierDefaultArgs<ExtArgs>
  }

  export type $StockEntryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockEntry"
    objects: {
      batch: Prisma.$MedicationBatchPayload<ExtArgs>
      supplier: Prisma.$SupplierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      entryDate: Date
      invoiceNumber: string | null
      unitPrice: number | null
      createdAt: Date
      updatedAt: Date
      batchId: string
      supplierId: string
    }, ExtArgs["result"]["stockEntry"]>
    composites: {}
  }

  type StockEntryGetPayload<S extends boolean | null | undefined | StockEntryDefaultArgs> = $Result.GetResult<Prisma.$StockEntryPayload, S>

  type StockEntryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockEntryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockEntryCountAggregateInputType | true
    }

  export interface StockEntryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockEntry'], meta: { name: 'StockEntry' } }
    /**
     * Find zero or one StockEntry that matches the filter.
     * @param {StockEntryFindUniqueArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockEntryFindUniqueArgs>(args: SelectSubset<T, StockEntryFindUniqueArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockEntry that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockEntryFindUniqueOrThrowArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockEntryFindUniqueOrThrowArgs>(args: SelectSubset<T, StockEntryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockEntry that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindFirstArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockEntryFindFirstArgs>(args?: SelectSubset<T, StockEntryFindFirstArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockEntry that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindFirstOrThrowArgs} args - Arguments to find a StockEntry
     * @example
     * // Get one StockEntry
     * const stockEntry = await prisma.stockEntry.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockEntryFindFirstOrThrowArgs>(args?: SelectSubset<T, StockEntryFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockEntries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockEntries
     * const stockEntries = await prisma.stockEntry.findMany()
     * 
     * // Get first 10 StockEntries
     * const stockEntries = await prisma.stockEntry.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockEntryFindManyArgs>(args?: SelectSubset<T, StockEntryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockEntry.
     * @param {StockEntryCreateArgs} args - Arguments to create a StockEntry.
     * @example
     * // Create one StockEntry
     * const StockEntry = await prisma.stockEntry.create({
     *   data: {
     *     // ... data to create a StockEntry
     *   }
     * })
     * 
     */
    create<T extends StockEntryCreateArgs>(args: SelectSubset<T, StockEntryCreateArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockEntries.
     * @param {StockEntryCreateManyArgs} args - Arguments to create many StockEntries.
     * @example
     * // Create many StockEntries
     * const stockEntry = await prisma.stockEntry.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockEntryCreateManyArgs>(args?: SelectSubset<T, StockEntryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockEntries and returns the data saved in the database.
     * @param {StockEntryCreateManyAndReturnArgs} args - Arguments to create many StockEntries.
     * @example
     * // Create many StockEntries
     * const stockEntry = await prisma.stockEntry.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockEntries and only return the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockEntryCreateManyAndReturnArgs>(args?: SelectSubset<T, StockEntryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockEntry.
     * @param {StockEntryDeleteArgs} args - Arguments to delete one StockEntry.
     * @example
     * // Delete one StockEntry
     * const StockEntry = await prisma.stockEntry.delete({
     *   where: {
     *     // ... filter to delete one StockEntry
     *   }
     * })
     * 
     */
    delete<T extends StockEntryDeleteArgs>(args: SelectSubset<T, StockEntryDeleteArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockEntry.
     * @param {StockEntryUpdateArgs} args - Arguments to update one StockEntry.
     * @example
     * // Update one StockEntry
     * const stockEntry = await prisma.stockEntry.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockEntryUpdateArgs>(args: SelectSubset<T, StockEntryUpdateArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockEntries.
     * @param {StockEntryDeleteManyArgs} args - Arguments to filter StockEntries to delete.
     * @example
     * // Delete a few StockEntries
     * const { count } = await prisma.stockEntry.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockEntryDeleteManyArgs>(args?: SelectSubset<T, StockEntryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockEntries
     * const stockEntry = await prisma.stockEntry.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockEntryUpdateManyArgs>(args: SelectSubset<T, StockEntryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockEntries and returns the data updated in the database.
     * @param {StockEntryUpdateManyAndReturnArgs} args - Arguments to update many StockEntries.
     * @example
     * // Update many StockEntries
     * const stockEntry = await prisma.stockEntry.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockEntries and only return the `id`
     * const stockEntryWithIdOnly = await prisma.stockEntry.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockEntryUpdateManyAndReturnArgs>(args: SelectSubset<T, StockEntryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockEntry.
     * @param {StockEntryUpsertArgs} args - Arguments to update or create a StockEntry.
     * @example
     * // Update or create a StockEntry
     * const stockEntry = await prisma.stockEntry.upsert({
     *   create: {
     *     // ... data to create a StockEntry
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockEntry we want to update
     *   }
     * })
     */
    upsert<T extends StockEntryUpsertArgs>(args: SelectSubset<T, StockEntryUpsertArgs<ExtArgs>>): Prisma__StockEntryClient<$Result.GetResult<Prisma.$StockEntryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockEntries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryCountArgs} args - Arguments to filter StockEntries to count.
     * @example
     * // Count the number of StockEntries
     * const count = await prisma.stockEntry.count({
     *   where: {
     *     // ... the filter for the StockEntries we want to count
     *   }
     * })
    **/
    count<T extends StockEntryCountArgs>(
      args?: Subset<T, StockEntryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockEntryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockEntryAggregateArgs>(args: Subset<T, StockEntryAggregateArgs>): Prisma.PrismaPromise<GetStockEntryAggregateType<T>>

    /**
     * Group by StockEntry.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockEntryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockEntryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockEntryGroupByArgs['orderBy'] }
        : { orderBy?: StockEntryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockEntryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockEntryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockEntry model
   */
  readonly fields: StockEntryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockEntry.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockEntryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends MedicationBatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationBatchDefaultArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    supplier<T extends SupplierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SupplierDefaultArgs<ExtArgs>>): Prisma__SupplierClient<$Result.GetResult<Prisma.$SupplierPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockEntry model
   */
  interface StockEntryFieldRefs {
    readonly id: FieldRef<"StockEntry", 'String'>
    readonly quantity: FieldRef<"StockEntry", 'Int'>
    readonly entryDate: FieldRef<"StockEntry", 'DateTime'>
    readonly invoiceNumber: FieldRef<"StockEntry", 'String'>
    readonly unitPrice: FieldRef<"StockEntry", 'Float'>
    readonly createdAt: FieldRef<"StockEntry", 'DateTime'>
    readonly updatedAt: FieldRef<"StockEntry", 'DateTime'>
    readonly batchId: FieldRef<"StockEntry", 'String'>
    readonly supplierId: FieldRef<"StockEntry", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockEntry findUnique
   */
  export type StockEntryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry findUniqueOrThrow
   */
  export type StockEntryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry findFirst
   */
  export type StockEntryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockEntries.
     */
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry findFirstOrThrow
   */
  export type StockEntryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntry to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockEntries.
     */
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry findMany
   */
  export type StockEntryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter, which StockEntries to fetch.
     */
    where?: StockEntryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockEntries to fetch.
     */
    orderBy?: StockEntryOrderByWithRelationInput | StockEntryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockEntries.
     */
    cursor?: StockEntryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockEntries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockEntries.
     */
    skip?: number
    distinct?: StockEntryScalarFieldEnum | StockEntryScalarFieldEnum[]
  }

  /**
   * StockEntry create
   */
  export type StockEntryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The data needed to create a StockEntry.
     */
    data: XOR<StockEntryCreateInput, StockEntryUncheckedCreateInput>
  }

  /**
   * StockEntry createMany
   */
  export type StockEntryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockEntries.
     */
    data: StockEntryCreateManyInput | StockEntryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockEntry createManyAndReturn
   */
  export type StockEntryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * The data used to create many StockEntries.
     */
    data: StockEntryCreateManyInput | StockEntryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockEntry update
   */
  export type StockEntryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The data needed to update a StockEntry.
     */
    data: XOR<StockEntryUpdateInput, StockEntryUncheckedUpdateInput>
    /**
     * Choose, which StockEntry to update.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry updateMany
   */
  export type StockEntryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockEntries.
     */
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyInput>
    /**
     * Filter which StockEntries to update
     */
    where?: StockEntryWhereInput
    /**
     * Limit how many StockEntries to update.
     */
    limit?: number
  }

  /**
   * StockEntry updateManyAndReturn
   */
  export type StockEntryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * The data used to update StockEntries.
     */
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyInput>
    /**
     * Filter which StockEntries to update
     */
    where?: StockEntryWhereInput
    /**
     * Limit how many StockEntries to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockEntry upsert
   */
  export type StockEntryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * The filter to search for the StockEntry to update in case it exists.
     */
    where: StockEntryWhereUniqueInput
    /**
     * In case the StockEntry found by the `where` argument doesn't exist, create a new StockEntry with this data.
     */
    create: XOR<StockEntryCreateInput, StockEntryUncheckedCreateInput>
    /**
     * In case the StockEntry was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockEntryUpdateInput, StockEntryUncheckedUpdateInput>
  }

  /**
   * StockEntry delete
   */
  export type StockEntryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
    /**
     * Filter which StockEntry to delete.
     */
    where: StockEntryWhereUniqueInput
  }

  /**
   * StockEntry deleteMany
   */
  export type StockEntryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockEntries to delete
     */
    where?: StockEntryWhereInput
    /**
     * Limit how many StockEntries to delete.
     */
    limit?: number
  }

  /**
   * StockEntry without action
   */
  export type StockEntryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockEntry
     */
    select?: StockEntrySelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockEntry
     */
    omit?: StockEntryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockEntryInclude<ExtArgs> | null
  }


  /**
   * Model StockExit
   */

  export type AggregateStockExit = {
    _count: StockExitCountAggregateOutputType | null
    _avg: StockExitAvgAggregateOutputType | null
    _sum: StockExitSumAggregateOutputType | null
    _min: StockExitMinAggregateOutputType | null
    _max: StockExitMaxAggregateOutputType | null
  }

  export type StockExitAvgAggregateOutputType = {
    quantity: number | null
  }

  export type StockExitSumAggregateOutputType = {
    quantity: number | null
  }

  export type StockExitMinAggregateOutputType = {
    id: string | null
    quantity: number | null
    exitDate: Date | null
    reason: $Enums.ExitReason | null
    createdAt: Date | null
    updatedAt: Date | null
    batchId: string | null
    orderItemId: string | null
  }

  export type StockExitMaxAggregateOutputType = {
    id: string | null
    quantity: number | null
    exitDate: Date | null
    reason: $Enums.ExitReason | null
    createdAt: Date | null
    updatedAt: Date | null
    batchId: string | null
    orderItemId: string | null
  }

  export type StockExitCountAggregateOutputType = {
    id: number
    quantity: number
    exitDate: number
    reason: number
    createdAt: number
    updatedAt: number
    batchId: number
    orderItemId: number
    _all: number
  }


  export type StockExitAvgAggregateInputType = {
    quantity?: true
  }

  export type StockExitSumAggregateInputType = {
    quantity?: true
  }

  export type StockExitMinAggregateInputType = {
    id?: true
    quantity?: true
    exitDate?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
    orderItemId?: true
  }

  export type StockExitMaxAggregateInputType = {
    id?: true
    quantity?: true
    exitDate?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
    orderItemId?: true
  }

  export type StockExitCountAggregateInputType = {
    id?: true
    quantity?: true
    exitDate?: true
    reason?: true
    createdAt?: true
    updatedAt?: true
    batchId?: true
    orderItemId?: true
    _all?: true
  }

  export type StockExitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExit to aggregate.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StockExits
    **/
    _count?: true | StockExitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: StockExitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: StockExitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StockExitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StockExitMaxAggregateInputType
  }

  export type GetStockExitAggregateType<T extends StockExitAggregateArgs> = {
        [P in keyof T & keyof AggregateStockExit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStockExit[P]>
      : GetScalarType<T[P], AggregateStockExit[P]>
  }




  export type StockExitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StockExitWhereInput
    orderBy?: StockExitOrderByWithAggregationInput | StockExitOrderByWithAggregationInput[]
    by: StockExitScalarFieldEnum[] | StockExitScalarFieldEnum
    having?: StockExitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StockExitCountAggregateInputType | true
    _avg?: StockExitAvgAggregateInputType
    _sum?: StockExitSumAggregateInputType
    _min?: StockExitMinAggregateInputType
    _max?: StockExitMaxAggregateInputType
  }

  export type StockExitGroupByOutputType = {
    id: string
    quantity: number
    exitDate: Date
    reason: $Enums.ExitReason
    createdAt: Date
    updatedAt: Date
    batchId: string
    orderItemId: string | null
    _count: StockExitCountAggregateOutputType | null
    _avg: StockExitAvgAggregateOutputType | null
    _sum: StockExitSumAggregateOutputType | null
    _min: StockExitMinAggregateOutputType | null
    _max: StockExitMaxAggregateOutputType | null
  }

  type GetStockExitGroupByPayload<T extends StockExitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StockExitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StockExitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StockExitGroupByOutputType[P]>
            : GetScalarType<T[P], StockExitGroupByOutputType[P]>
        }
      >
    >


  export type StockExitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    exitDate?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    orderItemId?: boolean
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    orderItem?: boolean | StockExit$orderItemArgs<ExtArgs>
  }, ExtArgs["result"]["stockExit"]>

  export type StockExitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    exitDate?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    orderItemId?: boolean
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    orderItem?: boolean | StockExit$orderItemArgs<ExtArgs>
  }, ExtArgs["result"]["stockExit"]>

  export type StockExitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    exitDate?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    orderItemId?: boolean
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    orderItem?: boolean | StockExit$orderItemArgs<ExtArgs>
  }, ExtArgs["result"]["stockExit"]>

  export type StockExitSelectScalar = {
    id?: boolean
    quantity?: boolean
    exitDate?: boolean
    reason?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    batchId?: boolean
    orderItemId?: boolean
  }

  export type StockExitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "exitDate" | "reason" | "createdAt" | "updatedAt" | "batchId" | "orderItemId", ExtArgs["result"]["stockExit"]>
  export type StockExitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    orderItem?: boolean | StockExit$orderItemArgs<ExtArgs>
  }
  export type StockExitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    orderItem?: boolean | StockExit$orderItemArgs<ExtArgs>
  }
  export type StockExitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    batch?: boolean | MedicationBatchDefaultArgs<ExtArgs>
    orderItem?: boolean | StockExit$orderItemArgs<ExtArgs>
  }

  export type $StockExitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StockExit"
    objects: {
      batch: Prisma.$MedicationBatchPayload<ExtArgs>
      orderItem: Prisma.$OrderItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      quantity: number
      exitDate: Date
      reason: $Enums.ExitReason
      createdAt: Date
      updatedAt: Date
      batchId: string
      orderItemId: string | null
    }, ExtArgs["result"]["stockExit"]>
    composites: {}
  }

  type StockExitGetPayload<S extends boolean | null | undefined | StockExitDefaultArgs> = $Result.GetResult<Prisma.$StockExitPayload, S>

  type StockExitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StockExitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StockExitCountAggregateInputType | true
    }

  export interface StockExitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StockExit'], meta: { name: 'StockExit' } }
    /**
     * Find zero or one StockExit that matches the filter.
     * @param {StockExitFindUniqueArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StockExitFindUniqueArgs>(args: SelectSubset<T, StockExitFindUniqueArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StockExit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StockExitFindUniqueOrThrowArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StockExitFindUniqueOrThrowArgs>(args: SelectSubset<T, StockExitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockExit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitFindFirstArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StockExitFindFirstArgs>(args?: SelectSubset<T, StockExitFindFirstArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StockExit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitFindFirstOrThrowArgs} args - Arguments to find a StockExit
     * @example
     * // Get one StockExit
     * const stockExit = await prisma.stockExit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StockExitFindFirstOrThrowArgs>(args?: SelectSubset<T, StockExitFindFirstOrThrowArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StockExits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StockExits
     * const stockExits = await prisma.stockExit.findMany()
     * 
     * // Get first 10 StockExits
     * const stockExits = await prisma.stockExit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const stockExitWithIdOnly = await prisma.stockExit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StockExitFindManyArgs>(args?: SelectSubset<T, StockExitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StockExit.
     * @param {StockExitCreateArgs} args - Arguments to create a StockExit.
     * @example
     * // Create one StockExit
     * const StockExit = await prisma.stockExit.create({
     *   data: {
     *     // ... data to create a StockExit
     *   }
     * })
     * 
     */
    create<T extends StockExitCreateArgs>(args: SelectSubset<T, StockExitCreateArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StockExits.
     * @param {StockExitCreateManyArgs} args - Arguments to create many StockExits.
     * @example
     * // Create many StockExits
     * const stockExit = await prisma.stockExit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StockExitCreateManyArgs>(args?: SelectSubset<T, StockExitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StockExits and returns the data saved in the database.
     * @param {StockExitCreateManyAndReturnArgs} args - Arguments to create many StockExits.
     * @example
     * // Create many StockExits
     * const stockExit = await prisma.stockExit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StockExits and only return the `id`
     * const stockExitWithIdOnly = await prisma.stockExit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StockExitCreateManyAndReturnArgs>(args?: SelectSubset<T, StockExitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StockExit.
     * @param {StockExitDeleteArgs} args - Arguments to delete one StockExit.
     * @example
     * // Delete one StockExit
     * const StockExit = await prisma.stockExit.delete({
     *   where: {
     *     // ... filter to delete one StockExit
     *   }
     * })
     * 
     */
    delete<T extends StockExitDeleteArgs>(args: SelectSubset<T, StockExitDeleteArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StockExit.
     * @param {StockExitUpdateArgs} args - Arguments to update one StockExit.
     * @example
     * // Update one StockExit
     * const stockExit = await prisma.stockExit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StockExitUpdateArgs>(args: SelectSubset<T, StockExitUpdateArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StockExits.
     * @param {StockExitDeleteManyArgs} args - Arguments to filter StockExits to delete.
     * @example
     * // Delete a few StockExits
     * const { count } = await prisma.stockExit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StockExitDeleteManyArgs>(args?: SelectSubset<T, StockExitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockExits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StockExits
     * const stockExit = await prisma.stockExit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StockExitUpdateManyArgs>(args: SelectSubset<T, StockExitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StockExits and returns the data updated in the database.
     * @param {StockExitUpdateManyAndReturnArgs} args - Arguments to update many StockExits.
     * @example
     * // Update many StockExits
     * const stockExit = await prisma.stockExit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StockExits and only return the `id`
     * const stockExitWithIdOnly = await prisma.stockExit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StockExitUpdateManyAndReturnArgs>(args: SelectSubset<T, StockExitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StockExit.
     * @param {StockExitUpsertArgs} args - Arguments to update or create a StockExit.
     * @example
     * // Update or create a StockExit
     * const stockExit = await prisma.stockExit.upsert({
     *   create: {
     *     // ... data to create a StockExit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StockExit we want to update
     *   }
     * })
     */
    upsert<T extends StockExitUpsertArgs>(args: SelectSubset<T, StockExitUpsertArgs<ExtArgs>>): Prisma__StockExitClient<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StockExits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitCountArgs} args - Arguments to filter StockExits to count.
     * @example
     * // Count the number of StockExits
     * const count = await prisma.stockExit.count({
     *   where: {
     *     // ... the filter for the StockExits we want to count
     *   }
     * })
    **/
    count<T extends StockExitCountArgs>(
      args?: Subset<T, StockExitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StockExitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StockExit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends StockExitAggregateArgs>(args: Subset<T, StockExitAggregateArgs>): Prisma.PrismaPromise<GetStockExitAggregateType<T>>

    /**
     * Group by StockExit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StockExitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends StockExitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StockExitGroupByArgs['orderBy'] }
        : { orderBy?: StockExitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, StockExitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStockExitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StockExit model
   */
  readonly fields: StockExitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StockExit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StockExitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    batch<T extends MedicationBatchDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationBatchDefaultArgs<ExtArgs>>): Prisma__MedicationBatchClient<$Result.GetResult<Prisma.$MedicationBatchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    orderItem<T extends StockExit$orderItemArgs<ExtArgs> = {}>(args?: Subset<T, StockExit$orderItemArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StockExit model
   */
  interface StockExitFieldRefs {
    readonly id: FieldRef<"StockExit", 'String'>
    readonly quantity: FieldRef<"StockExit", 'Int'>
    readonly exitDate: FieldRef<"StockExit", 'DateTime'>
    readonly reason: FieldRef<"StockExit", 'ExitReason'>
    readonly createdAt: FieldRef<"StockExit", 'DateTime'>
    readonly updatedAt: FieldRef<"StockExit", 'DateTime'>
    readonly batchId: FieldRef<"StockExit", 'String'>
    readonly orderItemId: FieldRef<"StockExit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StockExit findUnique
   */
  export type StockExitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit findUniqueOrThrow
   */
  export type StockExitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit findFirst
   */
  export type StockExitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExits.
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExits.
     */
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * StockExit findFirstOrThrow
   */
  export type StockExitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExit to fetch.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StockExits.
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StockExits.
     */
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * StockExit findMany
   */
  export type StockExitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter, which StockExits to fetch.
     */
    where?: StockExitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StockExits to fetch.
     */
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StockExits.
     */
    cursor?: StockExitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StockExits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StockExits.
     */
    skip?: number
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * StockExit create
   */
  export type StockExitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * The data needed to create a StockExit.
     */
    data: XOR<StockExitCreateInput, StockExitUncheckedCreateInput>
  }

  /**
   * StockExit createMany
   */
  export type StockExitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StockExits.
     */
    data: StockExitCreateManyInput | StockExitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StockExit createManyAndReturn
   */
  export type StockExitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * The data used to create many StockExits.
     */
    data: StockExitCreateManyInput | StockExitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockExit update
   */
  export type StockExitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * The data needed to update a StockExit.
     */
    data: XOR<StockExitUpdateInput, StockExitUncheckedUpdateInput>
    /**
     * Choose, which StockExit to update.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit updateMany
   */
  export type StockExitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StockExits.
     */
    data: XOR<StockExitUpdateManyMutationInput, StockExitUncheckedUpdateManyInput>
    /**
     * Filter which StockExits to update
     */
    where?: StockExitWhereInput
    /**
     * Limit how many StockExits to update.
     */
    limit?: number
  }

  /**
   * StockExit updateManyAndReturn
   */
  export type StockExitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * The data used to update StockExits.
     */
    data: XOR<StockExitUpdateManyMutationInput, StockExitUncheckedUpdateManyInput>
    /**
     * Filter which StockExits to update
     */
    where?: StockExitWhereInput
    /**
     * Limit how many StockExits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StockExit upsert
   */
  export type StockExitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * The filter to search for the StockExit to update in case it exists.
     */
    where: StockExitWhereUniqueInput
    /**
     * In case the StockExit found by the `where` argument doesn't exist, create a new StockExit with this data.
     */
    create: XOR<StockExitCreateInput, StockExitUncheckedCreateInput>
    /**
     * In case the StockExit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StockExitUpdateInput, StockExitUncheckedUpdateInput>
  }

  /**
   * StockExit delete
   */
  export type StockExitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    /**
     * Filter which StockExit to delete.
     */
    where: StockExitWhereUniqueInput
  }

  /**
   * StockExit deleteMany
   */
  export type StockExitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StockExits to delete
     */
    where?: StockExitWhereInput
    /**
     * Limit how many StockExits to delete.
     */
    limit?: number
  }

  /**
   * StockExit.orderItem
   */
  export type StockExit$orderItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
  }

  /**
   * StockExit without action
   */
  export type StockExitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderMinAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    validatedAt: Date | null
    preparedAt: Date | null
    deliveredAt: Date | null
    notes: string | null
    serviceId: string | null
    createdById: string | null
    validatedById: string | null
    preparedById: string | null
  }

  export type OrderMaxAggregateOutputType = {
    id: string | null
    orderNumber: string | null
    status: $Enums.OrderStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    validatedAt: Date | null
    preparedAt: Date | null
    deliveredAt: Date | null
    notes: string | null
    serviceId: string | null
    createdById: string | null
    validatedById: string | null
    preparedById: string | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    orderNumber: number
    status: number
    createdAt: number
    updatedAt: number
    validatedAt: number
    preparedAt: number
    deliveredAt: number
    notes: number
    serviceId: number
    createdById: number
    validatedById: number
    preparedById: number
    _all: number
  }


  export type OrderMinAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    validatedAt?: true
    preparedAt?: true
    deliveredAt?: true
    notes?: true
    serviceId?: true
    createdById?: true
    validatedById?: true
    preparedById?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    validatedAt?: true
    preparedAt?: true
    deliveredAt?: true
    notes?: true
    serviceId?: true
    createdById?: true
    validatedById?: true
    preparedById?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    orderNumber?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    validatedAt?: true
    preparedAt?: true
    deliveredAt?: true
    notes?: true
    serviceId?: true
    createdById?: true
    validatedById?: true
    preparedById?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt: Date
    updatedAt: Date
    validatedAt: Date | null
    preparedAt: Date | null
    deliveredAt: Date | null
    notes: string | null
    serviceId: string
    createdById: string
    validatedById: string | null
    preparedById: string | null
    _count: OrderCountAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    validatedAt?: boolean
    preparedAt?: boolean
    deliveredAt?: boolean
    notes?: boolean
    serviceId?: boolean
    createdById?: boolean
    validatedById?: boolean
    preparedById?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | Order$validatedByArgs<ExtArgs>
    preparedBy?: boolean | Order$preparedByArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    deliveryNote?: boolean | Order$deliveryNoteArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    validatedAt?: boolean
    preparedAt?: boolean
    deliveredAt?: boolean
    notes?: boolean
    serviceId?: boolean
    createdById?: boolean
    validatedById?: boolean
    preparedById?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | Order$validatedByArgs<ExtArgs>
    preparedBy?: boolean | Order$preparedByArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    validatedAt?: boolean
    preparedAt?: boolean
    deliveredAt?: boolean
    notes?: boolean
    serviceId?: boolean
    createdById?: boolean
    validatedById?: boolean
    preparedById?: boolean
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | Order$validatedByArgs<ExtArgs>
    preparedBy?: boolean | Order$preparedByArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    orderNumber?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    validatedAt?: boolean
    preparedAt?: boolean
    deliveredAt?: boolean
    notes?: boolean
    serviceId?: boolean
    createdById?: boolean
    validatedById?: boolean
    preparedById?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "orderNumber" | "status" | "createdAt" | "updatedAt" | "validatedAt" | "preparedAt" | "deliveredAt" | "notes" | "serviceId" | "createdById" | "validatedById" | "preparedById", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | Order$validatedByArgs<ExtArgs>
    preparedBy?: boolean | Order$preparedByArgs<ExtArgs>
    orderItems?: boolean | Order$orderItemsArgs<ExtArgs>
    deliveryNote?: boolean | Order$deliveryNoteArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | Order$validatedByArgs<ExtArgs>
    preparedBy?: boolean | Order$preparedByArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    service?: boolean | ServiceDefaultArgs<ExtArgs>
    createdBy?: boolean | UserDefaultArgs<ExtArgs>
    validatedBy?: boolean | Order$validatedByArgs<ExtArgs>
    preparedBy?: boolean | Order$preparedByArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      service: Prisma.$ServicePayload<ExtArgs>
      createdBy: Prisma.$UserPayload<ExtArgs>
      validatedBy: Prisma.$UserPayload<ExtArgs> | null
      preparedBy: Prisma.$UserPayload<ExtArgs> | null
      orderItems: Prisma.$OrderItemPayload<ExtArgs>[]
      deliveryNote: Prisma.$DeliveryNotePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      orderNumber: string
      status: $Enums.OrderStatus
      createdAt: Date
      updatedAt: Date
      validatedAt: Date | null
      preparedAt: Date | null
      deliveredAt: Date | null
      notes: string | null
      serviceId: string
      createdById: string
      validatedById: string | null
      preparedById: string | null
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    service<T extends ServiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServiceDefaultArgs<ExtArgs>>): Prisma__ServiceClient<$Result.GetResult<Prisma.$ServicePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    validatedBy<T extends Order$validatedByArgs<ExtArgs> = {}>(args?: Subset<T, Order$validatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    preparedBy<T extends Order$preparedByArgs<ExtArgs> = {}>(args?: Subset<T, Order$preparedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orderItems<T extends Order$orderItemsArgs<ExtArgs> = {}>(args?: Subset<T, Order$orderItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deliveryNote<T extends Order$deliveryNoteArgs<ExtArgs> = {}>(args?: Subset<T, Order$deliveryNoteArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'String'>
    readonly orderNumber: FieldRef<"Order", 'String'>
    readonly status: FieldRef<"Order", 'OrderStatus'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly validatedAt: FieldRef<"Order", 'DateTime'>
    readonly preparedAt: FieldRef<"Order", 'DateTime'>
    readonly deliveredAt: FieldRef<"Order", 'DateTime'>
    readonly notes: FieldRef<"Order", 'String'>
    readonly serviceId: FieldRef<"Order", 'String'>
    readonly createdById: FieldRef<"Order", 'String'>
    readonly validatedById: FieldRef<"Order", 'String'>
    readonly preparedById: FieldRef<"Order", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.validatedBy
   */
  export type Order$validatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.preparedBy
   */
  export type Order$preparedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Order.orderItems
   */
  export type Order$orderItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    cursor?: OrderItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * Order.deliveryNote
   */
  export type Order$deliveryNoteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    where?: DeliveryNoteWhereInput
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderItem
   */

  export type AggregateOrderItem = {
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  export type OrderItemAvgAggregateOutputType = {
    requestedQuantity: number | null
    validatedQuantity: number | null
    preparedQuantity: number | null
  }

  export type OrderItemSumAggregateOutputType = {
    requestedQuantity: number | null
    validatedQuantity: number | null
    preparedQuantity: number | null
  }

  export type OrderItemMinAggregateOutputType = {
    id: string | null
    requestedQuantity: number | null
    validatedQuantity: number | null
    preparedQuantity: number | null
    status: $Enums.OrderItemStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    medicationId: string | null
  }

  export type OrderItemMaxAggregateOutputType = {
    id: string | null
    requestedQuantity: number | null
    validatedQuantity: number | null
    preparedQuantity: number | null
    status: $Enums.OrderItemStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
    orderId: string | null
    medicationId: string | null
  }

  export type OrderItemCountAggregateOutputType = {
    id: number
    requestedQuantity: number
    validatedQuantity: number
    preparedQuantity: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    orderId: number
    medicationId: number
    _all: number
  }


  export type OrderItemAvgAggregateInputType = {
    requestedQuantity?: true
    validatedQuantity?: true
    preparedQuantity?: true
  }

  export type OrderItemSumAggregateInputType = {
    requestedQuantity?: true
    validatedQuantity?: true
    preparedQuantity?: true
  }

  export type OrderItemMinAggregateInputType = {
    id?: true
    requestedQuantity?: true
    validatedQuantity?: true
    preparedQuantity?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    medicationId?: true
  }

  export type OrderItemMaxAggregateInputType = {
    id?: true
    requestedQuantity?: true
    validatedQuantity?: true
    preparedQuantity?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    medicationId?: true
  }

  export type OrderItemCountAggregateInputType = {
    id?: true
    requestedQuantity?: true
    validatedQuantity?: true
    preparedQuantity?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    orderId?: true
    medicationId?: true
    _all?: true
  }

  export type OrderItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItem to aggregate.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderItems
    **/
    _count?: true | OrderItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderItemMaxAggregateInputType
  }

  export type GetOrderItemAggregateType<T extends OrderItemAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderItem[P]>
      : GetScalarType<T[P], AggregateOrderItem[P]>
  }




  export type OrderItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderItemWhereInput
    orderBy?: OrderItemOrderByWithAggregationInput | OrderItemOrderByWithAggregationInput[]
    by: OrderItemScalarFieldEnum[] | OrderItemScalarFieldEnum
    having?: OrderItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderItemCountAggregateInputType | true
    _avg?: OrderItemAvgAggregateInputType
    _sum?: OrderItemSumAggregateInputType
    _min?: OrderItemMinAggregateInputType
    _max?: OrderItemMaxAggregateInputType
  }

  export type OrderItemGroupByOutputType = {
    id: string
    requestedQuantity: number
    validatedQuantity: number | null
    preparedQuantity: number | null
    status: $Enums.OrderItemStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    orderId: string
    medicationId: string
    _count: OrderItemCountAggregateOutputType | null
    _avg: OrderItemAvgAggregateOutputType | null
    _sum: OrderItemSumAggregateOutputType | null
    _min: OrderItemMinAggregateOutputType | null
    _max: OrderItemMaxAggregateOutputType | null
  }

  type GetOrderItemGroupByPayload<T extends OrderItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
            : GetScalarType<T[P], OrderItemGroupByOutputType[P]>
        }
      >
    >


  export type OrderItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestedQuantity?: boolean
    validatedQuantity?: boolean
    preparedQuantity?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    medicationId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    stockExits?: boolean | OrderItem$stockExitsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestedQuantity?: boolean
    validatedQuantity?: boolean
    preparedQuantity?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    medicationId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    requestedQuantity?: boolean
    validatedQuantity?: boolean
    preparedQuantity?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    medicationId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderItem"]>

  export type OrderItemSelectScalar = {
    id?: boolean
    requestedQuantity?: boolean
    validatedQuantity?: boolean
    preparedQuantity?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    orderId?: boolean
    medicationId?: boolean
  }

  export type OrderItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "requestedQuantity" | "validatedQuantity" | "preparedQuantity" | "status" | "notes" | "createdAt" | "updatedAt" | "orderId" | "medicationId", ExtArgs["result"]["orderItem"]>
  export type OrderItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
    stockExits?: boolean | OrderItem$stockExitsArgs<ExtArgs>
    _count?: boolean | OrderItemCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }
  export type OrderItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    medication?: boolean | MedicationDefaultArgs<ExtArgs>
  }

  export type $OrderItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderItem"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      medication: Prisma.$MedicationPayload<ExtArgs>
      stockExits: Prisma.$StockExitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      requestedQuantity: number
      validatedQuantity: number | null
      preparedQuantity: number | null
      status: $Enums.OrderItemStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
      orderId: string
      medicationId: string
    }, ExtArgs["result"]["orderItem"]>
    composites: {}
  }

  type OrderItemGetPayload<S extends boolean | null | undefined | OrderItemDefaultArgs> = $Result.GetResult<Prisma.$OrderItemPayload, S>

  type OrderItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderItemCountAggregateInputType | true
    }

  export interface OrderItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderItem'], meta: { name: 'OrderItem' } }
    /**
     * Find zero or one OrderItem that matches the filter.
     * @param {OrderItemFindUniqueArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderItemFindUniqueArgs>(args: SelectSubset<T, OrderItemFindUniqueArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderItemFindUniqueOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderItemFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderItemFindFirstArgs>(args?: SelectSubset<T, OrderItemFindFirstArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindFirstOrThrowArgs} args - Arguments to find a OrderItem
     * @example
     * // Get one OrderItem
     * const orderItem = await prisma.orderItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderItemFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderItems
     * const orderItems = await prisma.orderItem.findMany()
     * 
     * // Get first 10 OrderItems
     * const orderItems = await prisma.orderItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderItemFindManyArgs>(args?: SelectSubset<T, OrderItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderItem.
     * @param {OrderItemCreateArgs} args - Arguments to create a OrderItem.
     * @example
     * // Create one OrderItem
     * const OrderItem = await prisma.orderItem.create({
     *   data: {
     *     // ... data to create a OrderItem
     *   }
     * })
     * 
     */
    create<T extends OrderItemCreateArgs>(args: SelectSubset<T, OrderItemCreateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderItems.
     * @param {OrderItemCreateManyArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderItemCreateManyArgs>(args?: SelectSubset<T, OrderItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderItems and returns the data saved in the database.
     * @param {OrderItemCreateManyAndReturnArgs} args - Arguments to create many OrderItems.
     * @example
     * // Create many OrderItems
     * const orderItem = await prisma.orderItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderItemCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderItem.
     * @param {OrderItemDeleteArgs} args - Arguments to delete one OrderItem.
     * @example
     * // Delete one OrderItem
     * const OrderItem = await prisma.orderItem.delete({
     *   where: {
     *     // ... filter to delete one OrderItem
     *   }
     * })
     * 
     */
    delete<T extends OrderItemDeleteArgs>(args: SelectSubset<T, OrderItemDeleteArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderItem.
     * @param {OrderItemUpdateArgs} args - Arguments to update one OrderItem.
     * @example
     * // Update one OrderItem
     * const orderItem = await prisma.orderItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderItemUpdateArgs>(args: SelectSubset<T, OrderItemUpdateArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderItems.
     * @param {OrderItemDeleteManyArgs} args - Arguments to filter OrderItems to delete.
     * @example
     * // Delete a few OrderItems
     * const { count } = await prisma.orderItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderItemDeleteManyArgs>(args?: SelectSubset<T, OrderItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderItemUpdateManyArgs>(args: SelectSubset<T, OrderItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderItems and returns the data updated in the database.
     * @param {OrderItemUpdateManyAndReturnArgs} args - Arguments to update many OrderItems.
     * @example
     * // Update many OrderItems
     * const orderItem = await prisma.orderItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderItems and only return the `id`
     * const orderItemWithIdOnly = await prisma.orderItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrderItemUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderItem.
     * @param {OrderItemUpsertArgs} args - Arguments to update or create a OrderItem.
     * @example
     * // Update or create a OrderItem
     * const orderItem = await prisma.orderItem.upsert({
     *   create: {
     *     // ... data to create a OrderItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderItem we want to update
     *   }
     * })
     */
    upsert<T extends OrderItemUpsertArgs>(args: SelectSubset<T, OrderItemUpsertArgs<ExtArgs>>): Prisma__OrderItemClient<$Result.GetResult<Prisma.$OrderItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemCountArgs} args - Arguments to filter OrderItems to count.
     * @example
     * // Count the number of OrderItems
     * const count = await prisma.orderItem.count({
     *   where: {
     *     // ... the filter for the OrderItems we want to count
     *   }
     * })
    **/
    count<T extends OrderItemCountArgs>(
      args?: Subset<T, OrderItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrderItemAggregateArgs>(args: Subset<T, OrderItemAggregateArgs>): Prisma.PrismaPromise<GetOrderItemAggregateType<T>>

    /**
     * Group by OrderItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrderItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderItemGroupByArgs['orderBy'] }
        : { orderBy?: OrderItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrderItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderItem model
   */
  readonly fields: OrderItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    medication<T extends MedicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MedicationDefaultArgs<ExtArgs>>): Prisma__MedicationClient<$Result.GetResult<Prisma.$MedicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    stockExits<T extends OrderItem$stockExitsArgs<ExtArgs> = {}>(args?: Subset<T, OrderItem$stockExitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StockExitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the OrderItem model
   */
  interface OrderItemFieldRefs {
    readonly id: FieldRef<"OrderItem", 'String'>
    readonly requestedQuantity: FieldRef<"OrderItem", 'Int'>
    readonly validatedQuantity: FieldRef<"OrderItem", 'Int'>
    readonly preparedQuantity: FieldRef<"OrderItem", 'Int'>
    readonly status: FieldRef<"OrderItem", 'OrderItemStatus'>
    readonly notes: FieldRef<"OrderItem", 'String'>
    readonly createdAt: FieldRef<"OrderItem", 'DateTime'>
    readonly updatedAt: FieldRef<"OrderItem", 'DateTime'>
    readonly orderId: FieldRef<"OrderItem", 'String'>
    readonly medicationId: FieldRef<"OrderItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * OrderItem findUnique
   */
  export type OrderItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findUniqueOrThrow
   */
  export type OrderItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem findFirst
   */
  export type OrderItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findFirstOrThrow
   */
  export type OrderItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItem to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderItems.
     */
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem findMany
   */
  export type OrderItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter, which OrderItems to fetch.
     */
    where?: OrderItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderItems to fetch.
     */
    orderBy?: OrderItemOrderByWithRelationInput | OrderItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderItems.
     */
    cursor?: OrderItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderItems.
     */
    skip?: number
    distinct?: OrderItemScalarFieldEnum | OrderItemScalarFieldEnum[]
  }

  /**
   * OrderItem create
   */
  export type OrderItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderItem.
     */
    data: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
  }

  /**
   * OrderItem createMany
   */
  export type OrderItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderItem createManyAndReturn
   */
  export type OrderItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to create many OrderItems.
     */
    data: OrderItemCreateManyInput | OrderItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem update
   */
  export type OrderItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderItem.
     */
    data: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
    /**
     * Choose, which OrderItem to update.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem updateMany
   */
  export type OrderItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
  }

  /**
   * OrderItem updateManyAndReturn
   */
  export type OrderItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * The data used to update OrderItems.
     */
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyInput>
    /**
     * Filter which OrderItems to update
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderItem upsert
   */
  export type OrderItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderItem to update in case it exists.
     */
    where: OrderItemWhereUniqueInput
    /**
     * In case the OrderItem found by the `where` argument doesn't exist, create a new OrderItem with this data.
     */
    create: XOR<OrderItemCreateInput, OrderItemUncheckedCreateInput>
    /**
     * In case the OrderItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderItemUpdateInput, OrderItemUncheckedUpdateInput>
  }

  /**
   * OrderItem delete
   */
  export type OrderItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
    /**
     * Filter which OrderItem to delete.
     */
    where: OrderItemWhereUniqueInput
  }

  /**
   * OrderItem deleteMany
   */
  export type OrderItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderItems to delete
     */
    where?: OrderItemWhereInput
    /**
     * Limit how many OrderItems to delete.
     */
    limit?: number
  }

  /**
   * OrderItem.stockExits
   */
  export type OrderItem$stockExitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StockExit
     */
    select?: StockExitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StockExit
     */
    omit?: StockExitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StockExitInclude<ExtArgs> | null
    where?: StockExitWhereInput
    orderBy?: StockExitOrderByWithRelationInput | StockExitOrderByWithRelationInput[]
    cursor?: StockExitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StockExitScalarFieldEnum | StockExitScalarFieldEnum[]
  }

  /**
   * OrderItem without action
   */
  export type OrderItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderItem
     */
    select?: OrderItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderItem
     */
    omit?: OrderItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderItemInclude<ExtArgs> | null
  }


  /**
   * Model DeliveryNote
   */

  export type AggregateDeliveryNote = {
    _count: DeliveryNoteCountAggregateOutputType | null
    _min: DeliveryNoteMinAggregateOutputType | null
    _max: DeliveryNoteMaxAggregateOutputType | null
  }

  export type DeliveryNoteMinAggregateOutputType = {
    id: string | null
    noteNumber: string | null
    createdAt: Date | null
    printedAt: Date | null
    orderId: string | null
  }

  export type DeliveryNoteMaxAggregateOutputType = {
    id: string | null
    noteNumber: string | null
    createdAt: Date | null
    printedAt: Date | null
    orderId: string | null
  }

  export type DeliveryNoteCountAggregateOutputType = {
    id: number
    noteNumber: number
    createdAt: number
    printedAt: number
    orderId: number
    _all: number
  }


  export type DeliveryNoteMinAggregateInputType = {
    id?: true
    noteNumber?: true
    createdAt?: true
    printedAt?: true
    orderId?: true
  }

  export type DeliveryNoteMaxAggregateInputType = {
    id?: true
    noteNumber?: true
    createdAt?: true
    printedAt?: true
    orderId?: true
  }

  export type DeliveryNoteCountAggregateInputType = {
    id?: true
    noteNumber?: true
    createdAt?: true
    printedAt?: true
    orderId?: true
    _all?: true
  }

  export type DeliveryNoteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryNote to aggregate.
     */
    where?: DeliveryNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNoteOrderByWithRelationInput | DeliveryNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DeliveryNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DeliveryNotes
    **/
    _count?: true | DeliveryNoteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DeliveryNoteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DeliveryNoteMaxAggregateInputType
  }

  export type GetDeliveryNoteAggregateType<T extends DeliveryNoteAggregateArgs> = {
        [P in keyof T & keyof AggregateDeliveryNote]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDeliveryNote[P]>
      : GetScalarType<T[P], AggregateDeliveryNote[P]>
  }




  export type DeliveryNoteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DeliveryNoteWhereInput
    orderBy?: DeliveryNoteOrderByWithAggregationInput | DeliveryNoteOrderByWithAggregationInput[]
    by: DeliveryNoteScalarFieldEnum[] | DeliveryNoteScalarFieldEnum
    having?: DeliveryNoteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DeliveryNoteCountAggregateInputType | true
    _min?: DeliveryNoteMinAggregateInputType
    _max?: DeliveryNoteMaxAggregateInputType
  }

  export type DeliveryNoteGroupByOutputType = {
    id: string
    noteNumber: string
    createdAt: Date
    printedAt: Date | null
    orderId: string
    _count: DeliveryNoteCountAggregateOutputType | null
    _min: DeliveryNoteMinAggregateOutputType | null
    _max: DeliveryNoteMaxAggregateOutputType | null
  }

  type GetDeliveryNoteGroupByPayload<T extends DeliveryNoteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DeliveryNoteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DeliveryNoteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DeliveryNoteGroupByOutputType[P]>
            : GetScalarType<T[P], DeliveryNoteGroupByOutputType[P]>
        }
      >
    >


  export type DeliveryNoteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteNumber?: boolean
    createdAt?: boolean
    printedAt?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryNote"]>

  export type DeliveryNoteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteNumber?: boolean
    createdAt?: boolean
    printedAt?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryNote"]>

  export type DeliveryNoteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    noteNumber?: boolean
    createdAt?: boolean
    printedAt?: boolean
    orderId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["deliveryNote"]>

  export type DeliveryNoteSelectScalar = {
    id?: boolean
    noteNumber?: boolean
    createdAt?: boolean
    printedAt?: boolean
    orderId?: boolean
  }

  export type DeliveryNoteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "noteNumber" | "createdAt" | "printedAt" | "orderId", ExtArgs["result"]["deliveryNote"]>
  export type DeliveryNoteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type DeliveryNoteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }
  export type DeliveryNoteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
  }

  export type $DeliveryNotePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DeliveryNote"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      noteNumber: string
      createdAt: Date
      printedAt: Date | null
      orderId: string
    }, ExtArgs["result"]["deliveryNote"]>
    composites: {}
  }

  type DeliveryNoteGetPayload<S extends boolean | null | undefined | DeliveryNoteDefaultArgs> = $Result.GetResult<Prisma.$DeliveryNotePayload, S>

  type DeliveryNoteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DeliveryNoteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DeliveryNoteCountAggregateInputType | true
    }

  export interface DeliveryNoteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DeliveryNote'], meta: { name: 'DeliveryNote' } }
    /**
     * Find zero or one DeliveryNote that matches the filter.
     * @param {DeliveryNoteFindUniqueArgs} args - Arguments to find a DeliveryNote
     * @example
     * // Get one DeliveryNote
     * const deliveryNote = await prisma.deliveryNote.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DeliveryNoteFindUniqueArgs>(args: SelectSubset<T, DeliveryNoteFindUniqueArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DeliveryNote that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DeliveryNoteFindUniqueOrThrowArgs} args - Arguments to find a DeliveryNote
     * @example
     * // Get one DeliveryNote
     * const deliveryNote = await prisma.deliveryNote.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DeliveryNoteFindUniqueOrThrowArgs>(args: SelectSubset<T, DeliveryNoteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryNote that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNoteFindFirstArgs} args - Arguments to find a DeliveryNote
     * @example
     * // Get one DeliveryNote
     * const deliveryNote = await prisma.deliveryNote.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DeliveryNoteFindFirstArgs>(args?: SelectSubset<T, DeliveryNoteFindFirstArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DeliveryNote that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNoteFindFirstOrThrowArgs} args - Arguments to find a DeliveryNote
     * @example
     * // Get one DeliveryNote
     * const deliveryNote = await prisma.deliveryNote.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DeliveryNoteFindFirstOrThrowArgs>(args?: SelectSubset<T, DeliveryNoteFindFirstOrThrowArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DeliveryNotes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNoteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNote.findMany()
     * 
     * // Get first 10 DeliveryNotes
     * const deliveryNotes = await prisma.deliveryNote.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const deliveryNoteWithIdOnly = await prisma.deliveryNote.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DeliveryNoteFindManyArgs>(args?: SelectSubset<T, DeliveryNoteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DeliveryNote.
     * @param {DeliveryNoteCreateArgs} args - Arguments to create a DeliveryNote.
     * @example
     * // Create one DeliveryNote
     * const DeliveryNote = await prisma.deliveryNote.create({
     *   data: {
     *     // ... data to create a DeliveryNote
     *   }
     * })
     * 
     */
    create<T extends DeliveryNoteCreateArgs>(args: SelectSubset<T, DeliveryNoteCreateArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DeliveryNotes.
     * @param {DeliveryNoteCreateManyArgs} args - Arguments to create many DeliveryNotes.
     * @example
     * // Create many DeliveryNotes
     * const deliveryNote = await prisma.deliveryNote.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DeliveryNoteCreateManyArgs>(args?: SelectSubset<T, DeliveryNoteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DeliveryNotes and returns the data saved in the database.
     * @param {DeliveryNoteCreateManyAndReturnArgs} args - Arguments to create many DeliveryNotes.
     * @example
     * // Create many DeliveryNotes
     * const deliveryNote = await prisma.deliveryNote.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DeliveryNotes and only return the `id`
     * const deliveryNoteWithIdOnly = await prisma.deliveryNote.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DeliveryNoteCreateManyAndReturnArgs>(args?: SelectSubset<T, DeliveryNoteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DeliveryNote.
     * @param {DeliveryNoteDeleteArgs} args - Arguments to delete one DeliveryNote.
     * @example
     * // Delete one DeliveryNote
     * const DeliveryNote = await prisma.deliveryNote.delete({
     *   where: {
     *     // ... filter to delete one DeliveryNote
     *   }
     * })
     * 
     */
    delete<T extends DeliveryNoteDeleteArgs>(args: SelectSubset<T, DeliveryNoteDeleteArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DeliveryNote.
     * @param {DeliveryNoteUpdateArgs} args - Arguments to update one DeliveryNote.
     * @example
     * // Update one DeliveryNote
     * const deliveryNote = await prisma.deliveryNote.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DeliveryNoteUpdateArgs>(args: SelectSubset<T, DeliveryNoteUpdateArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DeliveryNotes.
     * @param {DeliveryNoteDeleteManyArgs} args - Arguments to filter DeliveryNotes to delete.
     * @example
     * // Delete a few DeliveryNotes
     * const { count } = await prisma.deliveryNote.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DeliveryNoteDeleteManyArgs>(args?: SelectSubset<T, DeliveryNoteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNoteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DeliveryNotes
     * const deliveryNote = await prisma.deliveryNote.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DeliveryNoteUpdateManyArgs>(args: SelectSubset<T, DeliveryNoteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DeliveryNotes and returns the data updated in the database.
     * @param {DeliveryNoteUpdateManyAndReturnArgs} args - Arguments to update many DeliveryNotes.
     * @example
     * // Update many DeliveryNotes
     * const deliveryNote = await prisma.deliveryNote.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DeliveryNotes and only return the `id`
     * const deliveryNoteWithIdOnly = await prisma.deliveryNote.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DeliveryNoteUpdateManyAndReturnArgs>(args: SelectSubset<T, DeliveryNoteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DeliveryNote.
     * @param {DeliveryNoteUpsertArgs} args - Arguments to update or create a DeliveryNote.
     * @example
     * // Update or create a DeliveryNote
     * const deliveryNote = await prisma.deliveryNote.upsert({
     *   create: {
     *     // ... data to create a DeliveryNote
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DeliveryNote we want to update
     *   }
     * })
     */
    upsert<T extends DeliveryNoteUpsertArgs>(args: SelectSubset<T, DeliveryNoteUpsertArgs<ExtArgs>>): Prisma__DeliveryNoteClient<$Result.GetResult<Prisma.$DeliveryNotePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DeliveryNotes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNoteCountArgs} args - Arguments to filter DeliveryNotes to count.
     * @example
     * // Count the number of DeliveryNotes
     * const count = await prisma.deliveryNote.count({
     *   where: {
     *     // ... the filter for the DeliveryNotes we want to count
     *   }
     * })
    **/
    count<T extends DeliveryNoteCountArgs>(
      args?: Subset<T, DeliveryNoteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DeliveryNoteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DeliveryNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNoteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DeliveryNoteAggregateArgs>(args: Subset<T, DeliveryNoteAggregateArgs>): Prisma.PrismaPromise<GetDeliveryNoteAggregateType<T>>

    /**
     * Group by DeliveryNote.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DeliveryNoteGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DeliveryNoteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DeliveryNoteGroupByArgs['orderBy'] }
        : { orderBy?: DeliveryNoteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DeliveryNoteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDeliveryNoteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DeliveryNote model
   */
  readonly fields: DeliveryNoteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DeliveryNote.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DeliveryNoteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DeliveryNote model
   */
  interface DeliveryNoteFieldRefs {
    readonly id: FieldRef<"DeliveryNote", 'String'>
    readonly noteNumber: FieldRef<"DeliveryNote", 'String'>
    readonly createdAt: FieldRef<"DeliveryNote", 'DateTime'>
    readonly printedAt: FieldRef<"DeliveryNote", 'DateTime'>
    readonly orderId: FieldRef<"DeliveryNote", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DeliveryNote findUnique
   */
  export type DeliveryNoteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNote to fetch.
     */
    where: DeliveryNoteWhereUniqueInput
  }

  /**
   * DeliveryNote findUniqueOrThrow
   */
  export type DeliveryNoteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNote to fetch.
     */
    where: DeliveryNoteWhereUniqueInput
  }

  /**
   * DeliveryNote findFirst
   */
  export type DeliveryNoteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNote to fetch.
     */
    where?: DeliveryNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNoteOrderByWithRelationInput | DeliveryNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryNotes.
     */
    cursor?: DeliveryNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryNotes.
     */
    distinct?: DeliveryNoteScalarFieldEnum | DeliveryNoteScalarFieldEnum[]
  }

  /**
   * DeliveryNote findFirstOrThrow
   */
  export type DeliveryNoteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNote to fetch.
     */
    where?: DeliveryNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNoteOrderByWithRelationInput | DeliveryNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DeliveryNotes.
     */
    cursor?: DeliveryNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DeliveryNotes.
     */
    distinct?: DeliveryNoteScalarFieldEnum | DeliveryNoteScalarFieldEnum[]
  }

  /**
   * DeliveryNote findMany
   */
  export type DeliveryNoteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * Filter, which DeliveryNotes to fetch.
     */
    where?: DeliveryNoteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DeliveryNotes to fetch.
     */
    orderBy?: DeliveryNoteOrderByWithRelationInput | DeliveryNoteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DeliveryNotes.
     */
    cursor?: DeliveryNoteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DeliveryNotes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DeliveryNotes.
     */
    skip?: number
    distinct?: DeliveryNoteScalarFieldEnum | DeliveryNoteScalarFieldEnum[]
  }

  /**
   * DeliveryNote create
   */
  export type DeliveryNoteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * The data needed to create a DeliveryNote.
     */
    data: XOR<DeliveryNoteCreateInput, DeliveryNoteUncheckedCreateInput>
  }

  /**
   * DeliveryNote createMany
   */
  export type DeliveryNoteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DeliveryNotes.
     */
    data: DeliveryNoteCreateManyInput | DeliveryNoteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DeliveryNote createManyAndReturn
   */
  export type DeliveryNoteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * The data used to create many DeliveryNotes.
     */
    data: DeliveryNoteCreateManyInput | DeliveryNoteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryNote update
   */
  export type DeliveryNoteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * The data needed to update a DeliveryNote.
     */
    data: XOR<DeliveryNoteUpdateInput, DeliveryNoteUncheckedUpdateInput>
    /**
     * Choose, which DeliveryNote to update.
     */
    where: DeliveryNoteWhereUniqueInput
  }

  /**
   * DeliveryNote updateMany
   */
  export type DeliveryNoteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DeliveryNotes.
     */
    data: XOR<DeliveryNoteUpdateManyMutationInput, DeliveryNoteUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryNotes to update
     */
    where?: DeliveryNoteWhereInput
    /**
     * Limit how many DeliveryNotes to update.
     */
    limit?: number
  }

  /**
   * DeliveryNote updateManyAndReturn
   */
  export type DeliveryNoteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * The data used to update DeliveryNotes.
     */
    data: XOR<DeliveryNoteUpdateManyMutationInput, DeliveryNoteUncheckedUpdateManyInput>
    /**
     * Filter which DeliveryNotes to update
     */
    where?: DeliveryNoteWhereInput
    /**
     * Limit how many DeliveryNotes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DeliveryNote upsert
   */
  export type DeliveryNoteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * The filter to search for the DeliveryNote to update in case it exists.
     */
    where: DeliveryNoteWhereUniqueInput
    /**
     * In case the DeliveryNote found by the `where` argument doesn't exist, create a new DeliveryNote with this data.
     */
    create: XOR<DeliveryNoteCreateInput, DeliveryNoteUncheckedCreateInput>
    /**
     * In case the DeliveryNote was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DeliveryNoteUpdateInput, DeliveryNoteUncheckedUpdateInput>
  }

  /**
   * DeliveryNote delete
   */
  export type DeliveryNoteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
    /**
     * Filter which DeliveryNote to delete.
     */
    where: DeliveryNoteWhereUniqueInput
  }

  /**
   * DeliveryNote deleteMany
   */
  export type DeliveryNoteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DeliveryNotes to delete
     */
    where?: DeliveryNoteWhereInput
    /**
     * Limit how many DeliveryNotes to delete.
     */
    limit?: number
  }

  /**
   * DeliveryNote without action
   */
  export type DeliveryNoteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DeliveryNote
     */
    select?: DeliveryNoteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DeliveryNote
     */
    omit?: DeliveryNoteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DeliveryNoteInclude<ExtArgs> | null
  }


  /**
   * Model Alert
   */

  export type AggregateAlert = {
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  export type AlertMinAggregateOutputType = {
    id: string | null
    alertType: $Enums.AlertType | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    medicationId: string | null
    batchId: string | null
    relatedEntityId: string | null
  }

  export type AlertMaxAggregateOutputType = {
    id: string | null
    alertType: $Enums.AlertType | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
    medicationId: string | null
    batchId: string | null
    relatedEntityId: string | null
  }

  export type AlertCountAggregateOutputType = {
    id: number
    alertType: number
    message: number
    isRead: number
    createdAt: number
    medicationId: number
    batchId: number
    relatedEntityId: number
    _all: number
  }


  export type AlertMinAggregateInputType = {
    id?: true
    alertType?: true
    message?: true
    isRead?: true
    createdAt?: true
    medicationId?: true
    batchId?: true
    relatedEntityId?: true
  }

  export type AlertMaxAggregateInputType = {
    id?: true
    alertType?: true
    message?: true
    isRead?: true
    createdAt?: true
    medicationId?: true
    batchId?: true
    relatedEntityId?: true
  }

  export type AlertCountAggregateInputType = {
    id?: true
    alertType?: true
    message?: true
    isRead?: true
    createdAt?: true
    medicationId?: true
    batchId?: true
    relatedEntityId?: true
    _all?: true
  }

  export type AlertAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alert to aggregate.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertMaxAggregateInputType
  }

  export type GetAlertAggregateType<T extends AlertAggregateArgs> = {
        [P in keyof T & keyof AggregateAlert]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlert[P]>
      : GetScalarType<T[P], AggregateAlert[P]>
  }




  export type AlertGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertWhereInput
    orderBy?: AlertOrderByWithAggregationInput | AlertOrderByWithAggregationInput[]
    by: AlertScalarFieldEnum[] | AlertScalarFieldEnum
    having?: AlertScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertCountAggregateInputType | true
    _min?: AlertMinAggregateInputType
    _max?: AlertMaxAggregateInputType
  }

  export type AlertGroupByOutputType = {
    id: string
    alertType: $Enums.AlertType
    message: string
    isRead: boolean
    createdAt: Date
    medicationId: string | null
    batchId: string | null
    relatedEntityId: string | null
    _count: AlertCountAggregateOutputType | null
    _min: AlertMinAggregateOutputType | null
    _max: AlertMaxAggregateOutputType | null
  }

  type GetAlertGroupByPayload<T extends AlertGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertGroupByOutputType[P]>
            : GetScalarType<T[P], AlertGroupByOutputType[P]>
        }
      >
    >


  export type AlertSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertType?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    medicationId?: boolean
    batchId?: boolean
    relatedEntityId?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertType?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    medicationId?: boolean
    batchId?: boolean
    relatedEntityId?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    alertType?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    medicationId?: boolean
    batchId?: boolean
    relatedEntityId?: boolean
  }, ExtArgs["result"]["alert"]>

  export type AlertSelectScalar = {
    id?: boolean
    alertType?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
    medicationId?: boolean
    batchId?: boolean
    relatedEntityId?: boolean
  }

  export type AlertOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "alertType" | "message" | "isRead" | "createdAt" | "medicationId" | "batchId" | "relatedEntityId", ExtArgs["result"]["alert"]>

  export type $AlertPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alert"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      alertType: $Enums.AlertType
      message: string
      isRead: boolean
      createdAt: Date
      medicationId: string | null
      batchId: string | null
      relatedEntityId: string | null
    }, ExtArgs["result"]["alert"]>
    composites: {}
  }

  type AlertGetPayload<S extends boolean | null | undefined | AlertDefaultArgs> = $Result.GetResult<Prisma.$AlertPayload, S>

  type AlertCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertCountAggregateInputType | true
    }

  export interface AlertDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alert'], meta: { name: 'Alert' } }
    /**
     * Find zero or one Alert that matches the filter.
     * @param {AlertFindUniqueArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertFindUniqueArgs>(args: SelectSubset<T, AlertFindUniqueArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alert that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertFindUniqueOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertFindFirstArgs>(args?: SelectSubset<T, AlertFindFirstArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alert that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindFirstOrThrowArgs} args - Arguments to find a Alert
     * @example
     * // Get one Alert
     * const alert = await prisma.alert.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alert.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alert.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertWithIdOnly = await prisma.alert.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertFindManyArgs>(args?: SelectSubset<T, AlertFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alert.
     * @param {AlertCreateArgs} args - Arguments to create a Alert.
     * @example
     * // Create one Alert
     * const Alert = await prisma.alert.create({
     *   data: {
     *     // ... data to create a Alert
     *   }
     * })
     * 
     */
    create<T extends AlertCreateArgs>(args: SelectSubset<T, AlertCreateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertCreateManyArgs>(args?: SelectSubset<T, AlertCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alert = await prisma.alert.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alert.
     * @param {AlertDeleteArgs} args - Arguments to delete one Alert.
     * @example
     * // Delete one Alert
     * const Alert = await prisma.alert.delete({
     *   where: {
     *     // ... filter to delete one Alert
     *   }
     * })
     * 
     */
    delete<T extends AlertDeleteArgs>(args: SelectSubset<T, AlertDeleteArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alert.
     * @param {AlertUpdateArgs} args - Arguments to update one Alert.
     * @example
     * // Update one Alert
     * const alert = await prisma.alert.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertUpdateArgs>(args: SelectSubset<T, AlertUpdateArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alert.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertDeleteManyArgs>(args?: SelectSubset<T, AlertDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertUpdateManyArgs>(args: SelectSubset<T, AlertUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alert = await prisma.alert.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertWithIdOnly = await prisma.alert.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AlertUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alert.
     * @param {AlertUpsertArgs} args - Arguments to update or create a Alert.
     * @example
     * // Update or create a Alert
     * const alert = await prisma.alert.upsert({
     *   create: {
     *     // ... data to create a Alert
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alert we want to update
     *   }
     * })
     */
    upsert<T extends AlertUpsertArgs>(args: SelectSubset<T, AlertUpsertArgs<ExtArgs>>): Prisma__AlertClient<$Result.GetResult<Prisma.$AlertPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alert.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertCountArgs>(
      args?: Subset<T, AlertCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlertAggregateArgs>(args: Subset<T, AlertAggregateArgs>): Prisma.PrismaPromise<GetAlertAggregateType<T>>

    /**
     * Group by Alert.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlertGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertGroupByArgs['orderBy'] }
        : { orderBy?: AlertGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlertGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alert model
   */
  readonly fields: AlertFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alert.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Alert model
   */
  interface AlertFieldRefs {
    readonly id: FieldRef<"Alert", 'String'>
    readonly alertType: FieldRef<"Alert", 'AlertType'>
    readonly message: FieldRef<"Alert", 'String'>
    readonly isRead: FieldRef<"Alert", 'Boolean'>
    readonly createdAt: FieldRef<"Alert", 'DateTime'>
    readonly medicationId: FieldRef<"Alert", 'String'>
    readonly batchId: FieldRef<"Alert", 'String'>
    readonly relatedEntityId: FieldRef<"Alert", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Alert findUnique
   */
  export type AlertFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findUniqueOrThrow
   */
  export type AlertFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert findFirst
   */
  export type AlertFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findFirstOrThrow
   */
  export type AlertFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alert to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert findMany
   */
  export type AlertFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertOrderByWithRelationInput | AlertOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertScalarFieldEnum | AlertScalarFieldEnum[]
  }

  /**
   * Alert create
   */
  export type AlertCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data needed to create a Alert.
     */
    data: XOR<AlertCreateInput, AlertUncheckedCreateInput>
  }

  /**
   * Alert createMany
   */
  export type AlertCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert createManyAndReturn
   */
  export type AlertCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertCreateManyInput | AlertCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alert update
   */
  export type AlertUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data needed to update a Alert.
     */
    data: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
    /**
     * Choose, which Alert to update.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert updateMany
   */
  export type AlertUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert updateManyAndReturn
   */
  export type AlertUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertUpdateManyMutationInput, AlertUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alert upsert
   */
  export type AlertUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * The filter to search for the Alert to update in case it exists.
     */
    where: AlertWhereUniqueInput
    /**
     * In case the Alert found by the `where` argument doesn't exist, create a new Alert with this data.
     */
    create: XOR<AlertCreateInput, AlertUncheckedCreateInput>
    /**
     * In case the Alert was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertUpdateInput, AlertUncheckedUpdateInput>
  }

  /**
   * Alert delete
   */
  export type AlertDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
    /**
     * Filter which Alert to delete.
     */
    where: AlertWhereUniqueInput
  }

  /**
   * Alert deleteMany
   */
  export type AlertDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alert without action
   */
  export type AlertDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alert
     */
    select?: AlertSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alert
     */
    omit?: AlertOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    passwordHash: 'passwordHash',
    role: 'role',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    serviceId: 'serviceId'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ServiceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ServiceScalarFieldEnum = (typeof ServiceScalarFieldEnum)[keyof typeof ServiceScalarFieldEnum]


  export const SupplierScalarFieldEnum: {
    id: 'id',
    name: 'name',
    contactName: 'contactName',
    email: 'email',
    phone: 'phone',
    address: 'address',
    nif: 'nif',
    rc: 'rc',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SupplierScalarFieldEnum = (typeof SupplierScalarFieldEnum)[keyof typeof SupplierScalarFieldEnum]


  export const TherapeuticClassScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TherapeuticClassScalarFieldEnum = (typeof TherapeuticClassScalarFieldEnum)[keyof typeof TherapeuticClassScalarFieldEnum]


  export const SubClassScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    therapeuticClassId: 'therapeuticClassId'
  };

  export type SubClassScalarFieldEnum = (typeof SubClassScalarFieldEnum)[keyof typeof SubClassScalarFieldEnum]


  export const MedicationScalarFieldEnum: {
    id: 'id',
    dci: 'dci',
    codedci: 'codedci',
    commercialName: 'commercialName',
    form: 'form',
    dosage: 'dosage',
    packagingUnit: 'packagingUnit',
    unitsPerPackage: 'unitsPerPackage',
    minStockLevel: 'minStockLevel',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    therapeuticClassId: 'therapeuticClassId',
    subClassId: 'subClassId'
  };

  export type MedicationScalarFieldEnum = (typeof MedicationScalarFieldEnum)[keyof typeof MedicationScalarFieldEnum]


  export const MedicationBatchScalarFieldEnum: {
    id: 'id',
    medicationId: 'medicationId',
    batchNumber: 'batchNumber',
    expirationDate: 'expirationDate',
    currentQuantity: 'currentQuantity',
    initialQuantity: 'initialQuantity',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type MedicationBatchScalarFieldEnum = (typeof MedicationBatchScalarFieldEnum)[keyof typeof MedicationBatchScalarFieldEnum]


  export const StockEntryScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    entryDate: 'entryDate',
    invoiceNumber: 'invoiceNumber',
    unitPrice: 'unitPrice',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    batchId: 'batchId',
    supplierId: 'supplierId'
  };

  export type StockEntryScalarFieldEnum = (typeof StockEntryScalarFieldEnum)[keyof typeof StockEntryScalarFieldEnum]


  export const StockExitScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    exitDate: 'exitDate',
    reason: 'reason',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    batchId: 'batchId',
    orderItemId: 'orderItemId'
  };

  export type StockExitScalarFieldEnum = (typeof StockExitScalarFieldEnum)[keyof typeof StockExitScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    orderNumber: 'orderNumber',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    validatedAt: 'validatedAt',
    preparedAt: 'preparedAt',
    deliveredAt: 'deliveredAt',
    notes: 'notes',
    serviceId: 'serviceId',
    createdById: 'createdById',
    validatedById: 'validatedById',
    preparedById: 'preparedById'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderItemScalarFieldEnum: {
    id: 'id',
    requestedQuantity: 'requestedQuantity',
    validatedQuantity: 'validatedQuantity',
    preparedQuantity: 'preparedQuantity',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    orderId: 'orderId',
    medicationId: 'medicationId'
  };

  export type OrderItemScalarFieldEnum = (typeof OrderItemScalarFieldEnum)[keyof typeof OrderItemScalarFieldEnum]


  export const DeliveryNoteScalarFieldEnum: {
    id: 'id',
    noteNumber: 'noteNumber',
    createdAt: 'createdAt',
    printedAt: 'printedAt',
    orderId: 'orderId'
  };

  export type DeliveryNoteScalarFieldEnum = (typeof DeliveryNoteScalarFieldEnum)[keyof typeof DeliveryNoteScalarFieldEnum]


  export const AlertScalarFieldEnum: {
    id: 'id',
    alertType: 'alertType',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt',
    medicationId: 'medicationId',
    batchId: 'batchId',
    relatedEntityId: 'relatedEntityId'
  };

  export type AlertScalarFieldEnum = (typeof AlertScalarFieldEnum)[keyof typeof AlertScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'MedicationForm'
   */
  export type EnumMedicationFormFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicationForm'>
    


  /**
   * Reference to a field of type 'MedicationForm[]'
   */
  export type ListEnumMedicationFormFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MedicationForm[]'>
    


  /**
   * Reference to a field of type 'PackagingUnit'
   */
  export type EnumPackagingUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackagingUnit'>
    


  /**
   * Reference to a field of type 'PackagingUnit[]'
   */
  export type ListEnumPackagingUnitFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PackagingUnit[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'ExitReason'
   */
  export type EnumExitReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExitReason'>
    


  /**
   * Reference to a field of type 'ExitReason[]'
   */
  export type ListEnumExitReasonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ExitReason[]'>
    


  /**
   * Reference to a field of type 'OrderStatus'
   */
  export type EnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus'>
    


  /**
   * Reference to a field of type 'OrderStatus[]'
   */
  export type ListEnumOrderStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderStatus[]'>
    


  /**
   * Reference to a field of type 'OrderItemStatus'
   */
  export type EnumOrderItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderItemStatus'>
    


  /**
   * Reference to a field of type 'OrderItemStatus[]'
   */
  export type ListEnumOrderItemStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OrderItemStatus[]'>
    


  /**
   * Reference to a field of type 'AlertType'
   */
  export type EnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType'>
    


  /**
   * Reference to a field of type 'AlertType[]'
   */
  export type ListEnumAlertTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    serviceId?: StringNullableFilter<"User"> | string | null
    createdOrders?: OrderListRelationFilter
    validatedOrders?: OrderListRelationFilter
    preparedOrders?: OrderListRelationFilter
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    createdOrders?: OrderOrderByRelationAggregateInput
    validatedOrders?: OrderOrderByRelationAggregateInput
    preparedOrders?: OrderOrderByRelationAggregateInput
    service?: ServiceOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    serviceId?: StringNullableFilter<"User"> | string | null
    createdOrders?: OrderListRelationFilter
    validatedOrders?: OrderListRelationFilter
    preparedOrders?: OrderListRelationFilter
    service?: XOR<ServiceNullableScalarRelationFilter, ServiceWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    firstName?: StringWithAggregatesFilter<"User"> | string
    lastName?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringWithAggregatesFilter<"User"> | string
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    serviceId?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type ServiceWhereInput = {
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    id?: StringFilter<"Service"> | string
    name?: StringFilter<"Service"> | string
    description?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    users?: UserListRelationFilter
    orders?: OrderListRelationFilter
  }

  export type ServiceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    orders?: OrderOrderByRelationAggregateInput
  }

  export type ServiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ServiceWhereInput | ServiceWhereInput[]
    OR?: ServiceWhereInput[]
    NOT?: ServiceWhereInput | ServiceWhereInput[]
    description?: StringNullableFilter<"Service"> | string | null
    isActive?: BoolFilter<"Service"> | boolean
    createdAt?: DateTimeFilter<"Service"> | Date | string
    updatedAt?: DateTimeFilter<"Service"> | Date | string
    users?: UserListRelationFilter
    orders?: OrderListRelationFilter
  }, "id" | "name">

  export type ServiceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ServiceCountOrderByAggregateInput
    _max?: ServiceMaxOrderByAggregateInput
    _min?: ServiceMinOrderByAggregateInput
  }

  export type ServiceScalarWhereWithAggregatesInput = {
    AND?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    OR?: ServiceScalarWhereWithAggregatesInput[]
    NOT?: ServiceScalarWhereWithAggregatesInput | ServiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Service"> | string
    name?: StringWithAggregatesFilter<"Service"> | string
    description?: StringNullableWithAggregatesFilter<"Service"> | string | null
    isActive?: BoolWithAggregatesFilter<"Service"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Service"> | Date | string
  }

  export type SupplierWhereInput = {
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    id?: StringFilter<"Supplier"> | string
    name?: StringFilter<"Supplier"> | string
    contactName?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    nif?: StringFilter<"Supplier"> | string
    rc?: StringFilter<"Supplier"> | string
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    stockEntries?: StockEntryListRelationFilter
  }

  export type SupplierOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    nif?: SortOrder
    rc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    stockEntries?: StockEntryOrderByRelationAggregateInput
  }

  export type SupplierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: SupplierWhereInput | SupplierWhereInput[]
    OR?: SupplierWhereInput[]
    NOT?: SupplierWhereInput | SupplierWhereInput[]
    contactName?: StringNullableFilter<"Supplier"> | string | null
    email?: StringNullableFilter<"Supplier"> | string | null
    phone?: StringNullableFilter<"Supplier"> | string | null
    address?: StringNullableFilter<"Supplier"> | string | null
    nif?: StringFilter<"Supplier"> | string
    rc?: StringFilter<"Supplier"> | string
    isActive?: BoolFilter<"Supplier"> | boolean
    createdAt?: DateTimeFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeFilter<"Supplier"> | Date | string
    stockEntries?: StockEntryListRelationFilter
  }, "id" | "name">

  export type SupplierOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    nif?: SortOrder
    rc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SupplierCountOrderByAggregateInput
    _max?: SupplierMaxOrderByAggregateInput
    _min?: SupplierMinOrderByAggregateInput
  }

  export type SupplierScalarWhereWithAggregatesInput = {
    AND?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    OR?: SupplierScalarWhereWithAggregatesInput[]
    NOT?: SupplierScalarWhereWithAggregatesInput | SupplierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Supplier"> | string
    name?: StringWithAggregatesFilter<"Supplier"> | string
    contactName?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    email?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    address?: StringNullableWithAggregatesFilter<"Supplier"> | string | null
    nif?: StringWithAggregatesFilter<"Supplier"> | string
    rc?: StringWithAggregatesFilter<"Supplier"> | string
    isActive?: BoolWithAggregatesFilter<"Supplier"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Supplier"> | Date | string
  }

  export type TherapeuticClassWhereInput = {
    AND?: TherapeuticClassWhereInput | TherapeuticClassWhereInput[]
    OR?: TherapeuticClassWhereInput[]
    NOT?: TherapeuticClassWhereInput | TherapeuticClassWhereInput[]
    id?: StringFilter<"TherapeuticClass"> | string
    code?: StringFilter<"TherapeuticClass"> | string
    name?: StringFilter<"TherapeuticClass"> | string
    description?: StringNullableFilter<"TherapeuticClass"> | string | null
    isActive?: BoolFilter<"TherapeuticClass"> | boolean
    createdAt?: DateTimeFilter<"TherapeuticClass"> | Date | string
    updatedAt?: DateTimeFilter<"TherapeuticClass"> | Date | string
    medications?: MedicationListRelationFilter
    subClasses?: SubClassListRelationFilter
  }

  export type TherapeuticClassOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medications?: MedicationOrderByRelationAggregateInput
    subClasses?: SubClassOrderByRelationAggregateInput
  }

  export type TherapeuticClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    name?: string
    AND?: TherapeuticClassWhereInput | TherapeuticClassWhereInput[]
    OR?: TherapeuticClassWhereInput[]
    NOT?: TherapeuticClassWhereInput | TherapeuticClassWhereInput[]
    description?: StringNullableFilter<"TherapeuticClass"> | string | null
    isActive?: BoolFilter<"TherapeuticClass"> | boolean
    createdAt?: DateTimeFilter<"TherapeuticClass"> | Date | string
    updatedAt?: DateTimeFilter<"TherapeuticClass"> | Date | string
    medications?: MedicationListRelationFilter
    subClasses?: SubClassListRelationFilter
  }, "id" | "code" | "name">

  export type TherapeuticClassOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TherapeuticClassCountOrderByAggregateInput
    _max?: TherapeuticClassMaxOrderByAggregateInput
    _min?: TherapeuticClassMinOrderByAggregateInput
  }

  export type TherapeuticClassScalarWhereWithAggregatesInput = {
    AND?: TherapeuticClassScalarWhereWithAggregatesInput | TherapeuticClassScalarWhereWithAggregatesInput[]
    OR?: TherapeuticClassScalarWhereWithAggregatesInput[]
    NOT?: TherapeuticClassScalarWhereWithAggregatesInput | TherapeuticClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TherapeuticClass"> | string
    code?: StringWithAggregatesFilter<"TherapeuticClass"> | string
    name?: StringWithAggregatesFilter<"TherapeuticClass"> | string
    description?: StringNullableWithAggregatesFilter<"TherapeuticClass"> | string | null
    isActive?: BoolWithAggregatesFilter<"TherapeuticClass"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"TherapeuticClass"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TherapeuticClass"> | Date | string
  }

  export type SubClassWhereInput = {
    AND?: SubClassWhereInput | SubClassWhereInput[]
    OR?: SubClassWhereInput[]
    NOT?: SubClassWhereInput | SubClassWhereInput[]
    id?: StringFilter<"SubClass"> | string
    code?: StringFilter<"SubClass"> | string
    name?: StringFilter<"SubClass"> | string
    description?: StringNullableFilter<"SubClass"> | string | null
    isActive?: BoolFilter<"SubClass"> | boolean
    createdAt?: DateTimeFilter<"SubClass"> | Date | string
    updatedAt?: DateTimeFilter<"SubClass"> | Date | string
    therapeuticClassId?: StringFilter<"SubClass"> | string
    therapeuticClass?: XOR<TherapeuticClassScalarRelationFilter, TherapeuticClassWhereInput>
    medications?: MedicationListRelationFilter
  }

  export type SubClassOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
    therapeuticClass?: TherapeuticClassOrderByWithRelationInput
    medications?: MedicationOrderByRelationAggregateInput
  }

  export type SubClassWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    name?: string
    AND?: SubClassWhereInput | SubClassWhereInput[]
    OR?: SubClassWhereInput[]
    NOT?: SubClassWhereInput | SubClassWhereInput[]
    description?: StringNullableFilter<"SubClass"> | string | null
    isActive?: BoolFilter<"SubClass"> | boolean
    createdAt?: DateTimeFilter<"SubClass"> | Date | string
    updatedAt?: DateTimeFilter<"SubClass"> | Date | string
    therapeuticClassId?: StringFilter<"SubClass"> | string
    therapeuticClass?: XOR<TherapeuticClassScalarRelationFilter, TherapeuticClassWhereInput>
    medications?: MedicationListRelationFilter
  }, "id" | "code" | "name">

  export type SubClassOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
    _count?: SubClassCountOrderByAggregateInput
    _max?: SubClassMaxOrderByAggregateInput
    _min?: SubClassMinOrderByAggregateInput
  }

  export type SubClassScalarWhereWithAggregatesInput = {
    AND?: SubClassScalarWhereWithAggregatesInput | SubClassScalarWhereWithAggregatesInput[]
    OR?: SubClassScalarWhereWithAggregatesInput[]
    NOT?: SubClassScalarWhereWithAggregatesInput | SubClassScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SubClass"> | string
    code?: StringWithAggregatesFilter<"SubClass"> | string
    name?: StringWithAggregatesFilter<"SubClass"> | string
    description?: StringNullableWithAggregatesFilter<"SubClass"> | string | null
    isActive?: BoolWithAggregatesFilter<"SubClass"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"SubClass"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"SubClass"> | Date | string
    therapeuticClassId?: StringWithAggregatesFilter<"SubClass"> | string
  }

  export type MedicationWhereInput = {
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    id?: StringFilter<"Medication"> | string
    dci?: StringFilter<"Medication"> | string
    codedci?: StringFilter<"Medication"> | string
    commercialName?: StringFilter<"Medication"> | string
    form?: EnumMedicationFormFilter<"Medication"> | $Enums.MedicationForm
    dosage?: StringFilter<"Medication"> | string
    packagingUnit?: EnumPackagingUnitFilter<"Medication"> | $Enums.PackagingUnit
    unitsPerPackage?: IntFilter<"Medication"> | number
    minStockLevel?: IntFilter<"Medication"> | number
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    therapeuticClassId?: StringFilter<"Medication"> | string
    subClassId?: StringNullableFilter<"Medication"> | string | null
    therapeuticClass?: XOR<TherapeuticClassScalarRelationFilter, TherapeuticClassWhereInput>
    subClass?: XOR<SubClassNullableScalarRelationFilter, SubClassWhereInput> | null
    batches?: MedicationBatchListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }

  export type MedicationOrderByWithRelationInput = {
    id?: SortOrder
    dci?: SortOrder
    codedci?: SortOrder
    commercialName?: SortOrder
    form?: SortOrder
    dosage?: SortOrder
    packagingUnit?: SortOrder
    unitsPerPackage?: SortOrder
    minStockLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
    subClassId?: SortOrderInput | SortOrder
    therapeuticClass?: TherapeuticClassOrderByWithRelationInput
    subClass?: SubClassOrderByWithRelationInput
    batches?: MedicationBatchOrderByRelationAggregateInput
    orderItems?: OrderItemOrderByRelationAggregateInput
  }

  export type MedicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    codedci?: string
    AND?: MedicationWhereInput | MedicationWhereInput[]
    OR?: MedicationWhereInput[]
    NOT?: MedicationWhereInput | MedicationWhereInput[]
    dci?: StringFilter<"Medication"> | string
    commercialName?: StringFilter<"Medication"> | string
    form?: EnumMedicationFormFilter<"Medication"> | $Enums.MedicationForm
    dosage?: StringFilter<"Medication"> | string
    packagingUnit?: EnumPackagingUnitFilter<"Medication"> | $Enums.PackagingUnit
    unitsPerPackage?: IntFilter<"Medication"> | number
    minStockLevel?: IntFilter<"Medication"> | number
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    therapeuticClassId?: StringFilter<"Medication"> | string
    subClassId?: StringNullableFilter<"Medication"> | string | null
    therapeuticClass?: XOR<TherapeuticClassScalarRelationFilter, TherapeuticClassWhereInput>
    subClass?: XOR<SubClassNullableScalarRelationFilter, SubClassWhereInput> | null
    batches?: MedicationBatchListRelationFilter
    orderItems?: OrderItemListRelationFilter
  }, "id" | "codedci">

  export type MedicationOrderByWithAggregationInput = {
    id?: SortOrder
    dci?: SortOrder
    codedci?: SortOrder
    commercialName?: SortOrder
    form?: SortOrder
    dosage?: SortOrder
    packagingUnit?: SortOrder
    unitsPerPackage?: SortOrder
    minStockLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
    subClassId?: SortOrderInput | SortOrder
    _count?: MedicationCountOrderByAggregateInput
    _avg?: MedicationAvgOrderByAggregateInput
    _max?: MedicationMaxOrderByAggregateInput
    _min?: MedicationMinOrderByAggregateInput
    _sum?: MedicationSumOrderByAggregateInput
  }

  export type MedicationScalarWhereWithAggregatesInput = {
    AND?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    OR?: MedicationScalarWhereWithAggregatesInput[]
    NOT?: MedicationScalarWhereWithAggregatesInput | MedicationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Medication"> | string
    dci?: StringWithAggregatesFilter<"Medication"> | string
    codedci?: StringWithAggregatesFilter<"Medication"> | string
    commercialName?: StringWithAggregatesFilter<"Medication"> | string
    form?: EnumMedicationFormWithAggregatesFilter<"Medication"> | $Enums.MedicationForm
    dosage?: StringWithAggregatesFilter<"Medication"> | string
    packagingUnit?: EnumPackagingUnitWithAggregatesFilter<"Medication"> | $Enums.PackagingUnit
    unitsPerPackage?: IntWithAggregatesFilter<"Medication"> | number
    minStockLevel?: IntWithAggregatesFilter<"Medication"> | number
    isActive?: BoolWithAggregatesFilter<"Medication"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Medication"> | Date | string
    therapeuticClassId?: StringWithAggregatesFilter<"Medication"> | string
    subClassId?: StringNullableWithAggregatesFilter<"Medication"> | string | null
  }

  export type MedicationBatchWhereInput = {
    AND?: MedicationBatchWhereInput | MedicationBatchWhereInput[]
    OR?: MedicationBatchWhereInput[]
    NOT?: MedicationBatchWhereInput | MedicationBatchWhereInput[]
    id?: StringFilter<"MedicationBatch"> | string
    medicationId?: StringFilter<"MedicationBatch"> | string
    batchNumber?: StringFilter<"MedicationBatch"> | string
    expirationDate?: DateTimeFilter<"MedicationBatch"> | Date | string
    currentQuantity?: IntFilter<"MedicationBatch"> | number
    initialQuantity?: IntFilter<"MedicationBatch"> | number
    createdAt?: DateTimeFilter<"MedicationBatch"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationBatch"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    stockEntries?: StockEntryListRelationFilter
    stockExits?: StockExitListRelationFilter
  }

  export type MedicationBatchOrderByWithRelationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    currentQuantity?: SortOrder
    initialQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    medication?: MedicationOrderByWithRelationInput
    stockEntries?: StockEntryOrderByRelationAggregateInput
    stockExits?: StockExitOrderByRelationAggregateInput
  }

  export type MedicationBatchWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_medication_batch?: MedicationBatchUnique_medication_batchCompoundUniqueInput
    AND?: MedicationBatchWhereInput | MedicationBatchWhereInput[]
    OR?: MedicationBatchWhereInput[]
    NOT?: MedicationBatchWhereInput | MedicationBatchWhereInput[]
    medicationId?: StringFilter<"MedicationBatch"> | string
    batchNumber?: StringFilter<"MedicationBatch"> | string
    expirationDate?: DateTimeFilter<"MedicationBatch"> | Date | string
    currentQuantity?: IntFilter<"MedicationBatch"> | number
    initialQuantity?: IntFilter<"MedicationBatch"> | number
    createdAt?: DateTimeFilter<"MedicationBatch"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationBatch"> | Date | string
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    stockEntries?: StockEntryListRelationFilter
    stockExits?: StockExitListRelationFilter
  }, "id" | "unique_medication_batch">

  export type MedicationBatchOrderByWithAggregationInput = {
    id?: SortOrder
    medicationId?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    currentQuantity?: SortOrder
    initialQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: MedicationBatchCountOrderByAggregateInput
    _avg?: MedicationBatchAvgOrderByAggregateInput
    _max?: MedicationBatchMaxOrderByAggregateInput
    _min?: MedicationBatchMinOrderByAggregateInput
    _sum?: MedicationBatchSumOrderByAggregateInput
  }

  export type MedicationBatchScalarWhereWithAggregatesInput = {
    AND?: MedicationBatchScalarWhereWithAggregatesInput | MedicationBatchScalarWhereWithAggregatesInput[]
    OR?: MedicationBatchScalarWhereWithAggregatesInput[]
    NOT?: MedicationBatchScalarWhereWithAggregatesInput | MedicationBatchScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"MedicationBatch"> | string
    medicationId?: StringWithAggregatesFilter<"MedicationBatch"> | string
    batchNumber?: StringWithAggregatesFilter<"MedicationBatch"> | string
    expirationDate?: DateTimeWithAggregatesFilter<"MedicationBatch"> | Date | string
    currentQuantity?: IntWithAggregatesFilter<"MedicationBatch"> | number
    initialQuantity?: IntWithAggregatesFilter<"MedicationBatch"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MedicationBatch"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MedicationBatch"> | Date | string
  }

  export type StockEntryWhereInput = {
    AND?: StockEntryWhereInput | StockEntryWhereInput[]
    OR?: StockEntryWhereInput[]
    NOT?: StockEntryWhereInput | StockEntryWhereInput[]
    id?: StringFilter<"StockEntry"> | string
    quantity?: IntFilter<"StockEntry"> | number
    entryDate?: DateTimeFilter<"StockEntry"> | Date | string
    invoiceNumber?: StringNullableFilter<"StockEntry"> | string | null
    unitPrice?: FloatNullableFilter<"StockEntry"> | number | null
    createdAt?: DateTimeFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StockEntry"> | Date | string
    batchId?: StringFilter<"StockEntry"> | string
    supplierId?: StringFilter<"StockEntry"> | string
    batch?: XOR<MedicationBatchScalarRelationFilter, MedicationBatchWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }

  export type StockEntryOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    entryDate?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    unitPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    supplierId?: SortOrder
    batch?: MedicationBatchOrderByWithRelationInput
    supplier?: SupplierOrderByWithRelationInput
  }

  export type StockEntryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockEntryWhereInput | StockEntryWhereInput[]
    OR?: StockEntryWhereInput[]
    NOT?: StockEntryWhereInput | StockEntryWhereInput[]
    quantity?: IntFilter<"StockEntry"> | number
    entryDate?: DateTimeFilter<"StockEntry"> | Date | string
    invoiceNumber?: StringNullableFilter<"StockEntry"> | string | null
    unitPrice?: FloatNullableFilter<"StockEntry"> | number | null
    createdAt?: DateTimeFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StockEntry"> | Date | string
    batchId?: StringFilter<"StockEntry"> | string
    supplierId?: StringFilter<"StockEntry"> | string
    batch?: XOR<MedicationBatchScalarRelationFilter, MedicationBatchWhereInput>
    supplier?: XOR<SupplierScalarRelationFilter, SupplierWhereInput>
  }, "id">

  export type StockEntryOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    entryDate?: SortOrder
    invoiceNumber?: SortOrderInput | SortOrder
    unitPrice?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    supplierId?: SortOrder
    _count?: StockEntryCountOrderByAggregateInput
    _avg?: StockEntryAvgOrderByAggregateInput
    _max?: StockEntryMaxOrderByAggregateInput
    _min?: StockEntryMinOrderByAggregateInput
    _sum?: StockEntrySumOrderByAggregateInput
  }

  export type StockEntryScalarWhereWithAggregatesInput = {
    AND?: StockEntryScalarWhereWithAggregatesInput | StockEntryScalarWhereWithAggregatesInput[]
    OR?: StockEntryScalarWhereWithAggregatesInput[]
    NOT?: StockEntryScalarWhereWithAggregatesInput | StockEntryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockEntry"> | string
    quantity?: IntWithAggregatesFilter<"StockEntry"> | number
    entryDate?: DateTimeWithAggregatesFilter<"StockEntry"> | Date | string
    invoiceNumber?: StringNullableWithAggregatesFilter<"StockEntry"> | string | null
    unitPrice?: FloatNullableWithAggregatesFilter<"StockEntry"> | number | null
    createdAt?: DateTimeWithAggregatesFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockEntry"> | Date | string
    batchId?: StringWithAggregatesFilter<"StockEntry"> | string
    supplierId?: StringWithAggregatesFilter<"StockEntry"> | string
  }

  export type StockExitWhereInput = {
    AND?: StockExitWhereInput | StockExitWhereInput[]
    OR?: StockExitWhereInput[]
    NOT?: StockExitWhereInput | StockExitWhereInput[]
    id?: StringFilter<"StockExit"> | string
    quantity?: IntFilter<"StockExit"> | number
    exitDate?: DateTimeFilter<"StockExit"> | Date | string
    reason?: EnumExitReasonFilter<"StockExit"> | $Enums.ExitReason
    createdAt?: DateTimeFilter<"StockExit"> | Date | string
    updatedAt?: DateTimeFilter<"StockExit"> | Date | string
    batchId?: StringFilter<"StockExit"> | string
    orderItemId?: StringNullableFilter<"StockExit"> | string | null
    batch?: XOR<MedicationBatchScalarRelationFilter, MedicationBatchWhereInput>
    orderItem?: XOR<OrderItemNullableScalarRelationFilter, OrderItemWhereInput> | null
  }

  export type StockExitOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    orderItemId?: SortOrderInput | SortOrder
    batch?: MedicationBatchOrderByWithRelationInput
    orderItem?: OrderItemOrderByWithRelationInput
  }

  export type StockExitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StockExitWhereInput | StockExitWhereInput[]
    OR?: StockExitWhereInput[]
    NOT?: StockExitWhereInput | StockExitWhereInput[]
    quantity?: IntFilter<"StockExit"> | number
    exitDate?: DateTimeFilter<"StockExit"> | Date | string
    reason?: EnumExitReasonFilter<"StockExit"> | $Enums.ExitReason
    createdAt?: DateTimeFilter<"StockExit"> | Date | string
    updatedAt?: DateTimeFilter<"StockExit"> | Date | string
    batchId?: StringFilter<"StockExit"> | string
    orderItemId?: StringNullableFilter<"StockExit"> | string | null
    batch?: XOR<MedicationBatchScalarRelationFilter, MedicationBatchWhereInput>
    orderItem?: XOR<OrderItemNullableScalarRelationFilter, OrderItemWhereInput> | null
  }, "id">

  export type StockExitOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    orderItemId?: SortOrderInput | SortOrder
    _count?: StockExitCountOrderByAggregateInput
    _avg?: StockExitAvgOrderByAggregateInput
    _max?: StockExitMaxOrderByAggregateInput
    _min?: StockExitMinOrderByAggregateInput
    _sum?: StockExitSumOrderByAggregateInput
  }

  export type StockExitScalarWhereWithAggregatesInput = {
    AND?: StockExitScalarWhereWithAggregatesInput | StockExitScalarWhereWithAggregatesInput[]
    OR?: StockExitScalarWhereWithAggregatesInput[]
    NOT?: StockExitScalarWhereWithAggregatesInput | StockExitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"StockExit"> | string
    quantity?: IntWithAggregatesFilter<"StockExit"> | number
    exitDate?: DateTimeWithAggregatesFilter<"StockExit"> | Date | string
    reason?: EnumExitReasonWithAggregatesFilter<"StockExit"> | $Enums.ExitReason
    createdAt?: DateTimeWithAggregatesFilter<"StockExit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"StockExit"> | Date | string
    batchId?: StringWithAggregatesFilter<"StockExit"> | string
    orderItemId?: StringNullableWithAggregatesFilter<"StockExit"> | string | null
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    validatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    preparedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    serviceId?: StringFilter<"Order"> | string
    createdById?: StringFilter<"Order"> | string
    validatedById?: StringNullableFilter<"Order"> | string | null
    preparedById?: StringNullableFilter<"Order"> | string | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    validatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    preparedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    deliveryNote?: XOR<DeliveryNoteNullableScalarRelationFilter, DeliveryNoteWhereInput> | null
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    validatedAt?: SortOrderInput | SortOrder
    preparedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    createdById?: SortOrder
    validatedById?: SortOrderInput | SortOrder
    preparedById?: SortOrderInput | SortOrder
    service?: ServiceOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    validatedBy?: UserOrderByWithRelationInput
    preparedBy?: UserOrderByWithRelationInput
    orderItems?: OrderItemOrderByRelationAggregateInput
    deliveryNote?: DeliveryNoteOrderByWithRelationInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    orderNumber?: string
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    validatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    preparedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    serviceId?: StringFilter<"Order"> | string
    createdById?: StringFilter<"Order"> | string
    validatedById?: StringNullableFilter<"Order"> | string | null
    preparedById?: StringNullableFilter<"Order"> | string | null
    service?: XOR<ServiceScalarRelationFilter, ServiceWhereInput>
    createdBy?: XOR<UserScalarRelationFilter, UserWhereInput>
    validatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    preparedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    orderItems?: OrderItemListRelationFilter
    deliveryNote?: XOR<DeliveryNoteNullableScalarRelationFilter, DeliveryNoteWhereInput> | null
  }, "id" | "orderNumber">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    validatedAt?: SortOrderInput | SortOrder
    preparedAt?: SortOrderInput | SortOrder
    deliveredAt?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    serviceId?: SortOrder
    createdById?: SortOrder
    validatedById?: SortOrderInput | SortOrder
    preparedById?: SortOrderInput | SortOrder
    _count?: OrderCountOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Order"> | string
    orderNumber?: StringWithAggregatesFilter<"Order"> | string
    status?: EnumOrderStatusWithAggregatesFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    validatedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    preparedAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableWithAggregatesFilter<"Order"> | Date | string | null
    notes?: StringNullableWithAggregatesFilter<"Order"> | string | null
    serviceId?: StringWithAggregatesFilter<"Order"> | string
    createdById?: StringWithAggregatesFilter<"Order"> | string
    validatedById?: StringNullableWithAggregatesFilter<"Order"> | string | null
    preparedById?: StringNullableWithAggregatesFilter<"Order"> | string | null
  }

  export type OrderItemWhereInput = {
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    requestedQuantity?: IntFilter<"OrderItem"> | number
    validatedQuantity?: IntNullableFilter<"OrderItem"> | number | null
    preparedQuantity?: IntNullableFilter<"OrderItem"> | number | null
    status?: EnumOrderItemStatusFilter<"OrderItem"> | $Enums.OrderItemStatus
    notes?: StringNullableFilter<"OrderItem"> | string | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    orderId?: StringFilter<"OrderItem"> | string
    medicationId?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    stockExits?: StockExitListRelationFilter
  }

  export type OrderItemOrderByWithRelationInput = {
    id?: SortOrder
    requestedQuantity?: SortOrder
    validatedQuantity?: SortOrderInput | SortOrder
    preparedQuantity?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    medicationId?: SortOrder
    order?: OrderOrderByWithRelationInput
    medication?: MedicationOrderByWithRelationInput
    stockExits?: StockExitOrderByRelationAggregateInput
  }

  export type OrderItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OrderItemWhereInput | OrderItemWhereInput[]
    OR?: OrderItemWhereInput[]
    NOT?: OrderItemWhereInput | OrderItemWhereInput[]
    requestedQuantity?: IntFilter<"OrderItem"> | number
    validatedQuantity?: IntNullableFilter<"OrderItem"> | number | null
    preparedQuantity?: IntNullableFilter<"OrderItem"> | number | null
    status?: EnumOrderItemStatusFilter<"OrderItem"> | $Enums.OrderItemStatus
    notes?: StringNullableFilter<"OrderItem"> | string | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    orderId?: StringFilter<"OrderItem"> | string
    medicationId?: StringFilter<"OrderItem"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    medication?: XOR<MedicationScalarRelationFilter, MedicationWhereInput>
    stockExits?: StockExitListRelationFilter
  }, "id">

  export type OrderItemOrderByWithAggregationInput = {
    id?: SortOrder
    requestedQuantity?: SortOrder
    validatedQuantity?: SortOrderInput | SortOrder
    preparedQuantity?: SortOrderInput | SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    medicationId?: SortOrder
    _count?: OrderItemCountOrderByAggregateInput
    _avg?: OrderItemAvgOrderByAggregateInput
    _max?: OrderItemMaxOrderByAggregateInput
    _min?: OrderItemMinOrderByAggregateInput
    _sum?: OrderItemSumOrderByAggregateInput
  }

  export type OrderItemScalarWhereWithAggregatesInput = {
    AND?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    OR?: OrderItemScalarWhereWithAggregatesInput[]
    NOT?: OrderItemScalarWhereWithAggregatesInput | OrderItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"OrderItem"> | string
    requestedQuantity?: IntWithAggregatesFilter<"OrderItem"> | number
    validatedQuantity?: IntNullableWithAggregatesFilter<"OrderItem"> | number | null
    preparedQuantity?: IntNullableWithAggregatesFilter<"OrderItem"> | number | null
    status?: EnumOrderItemStatusWithAggregatesFilter<"OrderItem"> | $Enums.OrderItemStatus
    notes?: StringNullableWithAggregatesFilter<"OrderItem"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"OrderItem"> | Date | string
    orderId?: StringWithAggregatesFilter<"OrderItem"> | string
    medicationId?: StringWithAggregatesFilter<"OrderItem"> | string
  }

  export type DeliveryNoteWhereInput = {
    AND?: DeliveryNoteWhereInput | DeliveryNoteWhereInput[]
    OR?: DeliveryNoteWhereInput[]
    NOT?: DeliveryNoteWhereInput | DeliveryNoteWhereInput[]
    id?: StringFilter<"DeliveryNote"> | string
    noteNumber?: StringFilter<"DeliveryNote"> | string
    createdAt?: DateTimeFilter<"DeliveryNote"> | Date | string
    printedAt?: DateTimeNullableFilter<"DeliveryNote"> | Date | string | null
    orderId?: StringFilter<"DeliveryNote"> | string
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }

  export type DeliveryNoteOrderByWithRelationInput = {
    id?: SortOrder
    noteNumber?: SortOrder
    createdAt?: SortOrder
    printedAt?: SortOrderInput | SortOrder
    orderId?: SortOrder
    order?: OrderOrderByWithRelationInput
  }

  export type DeliveryNoteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    noteNumber?: string
    orderId?: string
    AND?: DeliveryNoteWhereInput | DeliveryNoteWhereInput[]
    OR?: DeliveryNoteWhereInput[]
    NOT?: DeliveryNoteWhereInput | DeliveryNoteWhereInput[]
    createdAt?: DateTimeFilter<"DeliveryNote"> | Date | string
    printedAt?: DateTimeNullableFilter<"DeliveryNote"> | Date | string | null
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
  }, "id" | "noteNumber" | "orderId">

  export type DeliveryNoteOrderByWithAggregationInput = {
    id?: SortOrder
    noteNumber?: SortOrder
    createdAt?: SortOrder
    printedAt?: SortOrderInput | SortOrder
    orderId?: SortOrder
    _count?: DeliveryNoteCountOrderByAggregateInput
    _max?: DeliveryNoteMaxOrderByAggregateInput
    _min?: DeliveryNoteMinOrderByAggregateInput
  }

  export type DeliveryNoteScalarWhereWithAggregatesInput = {
    AND?: DeliveryNoteScalarWhereWithAggregatesInput | DeliveryNoteScalarWhereWithAggregatesInput[]
    OR?: DeliveryNoteScalarWhereWithAggregatesInput[]
    NOT?: DeliveryNoteScalarWhereWithAggregatesInput | DeliveryNoteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DeliveryNote"> | string
    noteNumber?: StringWithAggregatesFilter<"DeliveryNote"> | string
    createdAt?: DateTimeWithAggregatesFilter<"DeliveryNote"> | Date | string
    printedAt?: DateTimeNullableWithAggregatesFilter<"DeliveryNote"> | Date | string | null
    orderId?: StringWithAggregatesFilter<"DeliveryNote"> | string
  }

  export type AlertWhereInput = {
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    id?: StringFilter<"Alert"> | string
    alertType?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    message?: StringFilter<"Alert"> | string
    isRead?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    medicationId?: StringNullableFilter<"Alert"> | string | null
    batchId?: StringNullableFilter<"Alert"> | string | null
    relatedEntityId?: StringNullableFilter<"Alert"> | string | null
  }

  export type AlertOrderByWithRelationInput = {
    id?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    medicationId?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    relatedEntityId?: SortOrderInput | SortOrder
  }

  export type AlertWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertWhereInput | AlertWhereInput[]
    OR?: AlertWhereInput[]
    NOT?: AlertWhereInput | AlertWhereInput[]
    alertType?: EnumAlertTypeFilter<"Alert"> | $Enums.AlertType
    message?: StringFilter<"Alert"> | string
    isRead?: BoolFilter<"Alert"> | boolean
    createdAt?: DateTimeFilter<"Alert"> | Date | string
    medicationId?: StringNullableFilter<"Alert"> | string | null
    batchId?: StringNullableFilter<"Alert"> | string | null
    relatedEntityId?: StringNullableFilter<"Alert"> | string | null
  }, "id">

  export type AlertOrderByWithAggregationInput = {
    id?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    medicationId?: SortOrderInput | SortOrder
    batchId?: SortOrderInput | SortOrder
    relatedEntityId?: SortOrderInput | SortOrder
    _count?: AlertCountOrderByAggregateInput
    _max?: AlertMaxOrderByAggregateInput
    _min?: AlertMinOrderByAggregateInput
  }

  export type AlertScalarWhereWithAggregatesInput = {
    AND?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    OR?: AlertScalarWhereWithAggregatesInput[]
    NOT?: AlertScalarWhereWithAggregatesInput | AlertScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alert"> | string
    alertType?: EnumAlertTypeWithAggregatesFilter<"Alert"> | $Enums.AlertType
    message?: StringWithAggregatesFilter<"Alert"> | string
    isRead?: BoolWithAggregatesFilter<"Alert"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Alert"> | Date | string
    medicationId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    batchId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
    relatedEntityId?: StringNullableWithAggregatesFilter<"Alert"> | string | null
  }

  export type UserCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    validatedOrders?: OrderCreateNestedManyWithoutValidatedByInput
    preparedOrders?: OrderCreateNestedManyWithoutPreparedByInput
    service?: ServiceCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    validatedOrders?: OrderUncheckedCreateNestedManyWithoutValidatedByInput
    preparedOrders?: OrderUncheckedCreateNestedManyWithoutPreparedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    validatedOrders?: OrderUpdateManyWithoutValidatedByNestedInput
    preparedOrders?: OrderUpdateManyWithoutPreparedByNestedInput
    service?: ServiceUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    validatedOrders?: OrderUncheckedUpdateManyWithoutValidatedByNestedInput
    preparedOrders?: OrderUncheckedUpdateManyWithoutPreparedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ServiceCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutServiceInput
    orders?: OrderCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutServiceInput
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutServiceNestedInput
    orders?: OrderUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutServiceNestedInput
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServiceCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ServiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ServiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierCreateInput = {
    id?: string
    name: string
    contactName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    nif: string
    rc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockEntries?: StockEntryCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUncheckedCreateInput = {
    id?: string
    name: string
    contactName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    nif: string
    rc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutSupplierInput
  }

  export type SupplierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: StringFieldUpdateOperationsInput | string
    rc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockEntries?: StockEntryUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: StringFieldUpdateOperationsInput | string
    rc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockEntries?: StockEntryUncheckedUpdateManyWithoutSupplierNestedInput
  }

  export type SupplierCreateManyInput = {
    id?: string
    name: string
    contactName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    nif: string
    rc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: StringFieldUpdateOperationsInput | string
    rc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: StringFieldUpdateOperationsInput | string
    rc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapeuticClassCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutTherapeuticClassInput
    subClasses?: SubClassCreateNestedManyWithoutTherapeuticClassInput
  }

  export type TherapeuticClassUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutTherapeuticClassInput
    subClasses?: SubClassUncheckedCreateNestedManyWithoutTherapeuticClassInput
  }

  export type TherapeuticClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutTherapeuticClassNestedInput
    subClasses?: SubClassUpdateManyWithoutTherapeuticClassNestedInput
  }

  export type TherapeuticClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutTherapeuticClassNestedInput
    subClasses?: SubClassUncheckedUpdateManyWithoutTherapeuticClassNestedInput
  }

  export type TherapeuticClassCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TherapeuticClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TherapeuticClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubClassCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClass: TherapeuticClassCreateNestedOneWithoutSubClassesInput
    medications?: MedicationCreateNestedManyWithoutSubClassInput
  }

  export type SubClassUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
    medications?: MedicationUncheckedCreateNestedManyWithoutSubClassInput
  }

  export type SubClassUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClass?: TherapeuticClassUpdateOneRequiredWithoutSubClassesNestedInput
    medications?: MedicationUpdateManyWithoutSubClassNestedInput
  }

  export type SubClassUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
    medications?: MedicationUncheckedUpdateManyWithoutSubClassNestedInput
  }

  export type SubClassCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
  }

  export type SubClassUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SubClassUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClass: TherapeuticClassCreateNestedOneWithoutMedicationsInput
    subClass?: SubClassCreateNestedOneWithoutMedicationsInput
    batches?: MedicationBatchCreateNestedManyWithoutMedicationInput
    orderItems?: OrderItemCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
    subClassId?: string | null
    batches?: MedicationBatchUncheckedCreateNestedManyWithoutMedicationInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClass?: TherapeuticClassUpdateOneRequiredWithoutMedicationsNestedInput
    subClass?: SubClassUpdateOneWithoutMedicationsNestedInput
    batches?: MedicationBatchUpdateManyWithoutMedicationNestedInput
    orderItems?: OrderItemUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
    subClassId?: NullableStringFieldUpdateOperationsInput | string | null
    batches?: MedicationBatchUncheckedUpdateManyWithoutMedicationNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationCreateManyInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
    subClassId?: string | null
  }

  export type MedicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
    subClassId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MedicationBatchCreateInput = {
    id?: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutBatchesInput
    stockEntries?: StockEntryCreateNestedManyWithoutBatchInput
    stockExits?: StockExitCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchUncheckedCreateInput = {
    id?: string
    medicationId: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutBatchInput
    stockExits?: StockExitUncheckedCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutBatchesNestedInput
    stockEntries?: StockEntryUpdateManyWithoutBatchNestedInput
    stockExits?: StockExitUpdateManyWithoutBatchNestedInput
  }

  export type MedicationBatchUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockEntries?: StockEntryUncheckedUpdateManyWithoutBatchNestedInput
    stockExits?: StockExitUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type MedicationBatchCreateManyInput = {
    id?: string
    medicationId: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationBatchUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationBatchUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryCreateInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: MedicationBatchCreateNestedOneWithoutStockEntriesInput
    supplier: SupplierCreateNestedOneWithoutStockEntriesInput
  }

  export type StockEntryUncheckedCreateInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
    supplierId: string
  }

  export type StockEntryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: MedicationBatchUpdateOneRequiredWithoutStockEntriesNestedInput
    supplier?: SupplierUpdateOneRequiredWithoutStockEntriesNestedInput
  }

  export type StockEntryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type StockEntryCreateManyInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
    supplierId: string
  }

  export type StockEntryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockEntryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type StockExitCreateInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: MedicationBatchCreateNestedOneWithoutStockExitsInput
    orderItem?: OrderItemCreateNestedOneWithoutStockExitsInput
  }

  export type StockExitUncheckedCreateInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
    orderItemId?: string | null
  }

  export type StockExitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: MedicationBatchUpdateOneRequiredWithoutStockExitsNestedInput
    orderItem?: OrderItemUpdateOneWithoutStockExitsNestedInput
  }

  export type StockExitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitCreateManyInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
    orderItemId?: string | null
  }

  export type StockExitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StockExitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderCreateInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    service: ServiceCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    validatedBy?: UserCreateNestedOneWithoutValidatedOrdersInput
    preparedBy?: UserCreateNestedOneWithoutPreparedOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    validatedById?: string | null
    preparedById?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedOrdersNestedInput
    preparedBy?: UserUpdateOneWithoutPreparedOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    validatedById?: string | null
    preparedById?: string | null
  }

  export type OrderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    medication: MedicationCreateNestedOneWithoutOrderItemsInput
    stockExits?: StockExitCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    medicationId: string
    stockExits?: StockExitUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    medication?: MedicationUpdateOneRequiredWithoutOrderItemsNestedInput
    stockExits?: StockExitUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    stockExits?: StockExitUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemCreateManyInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    medicationId: string
  }

  export type OrderItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveryNoteCreateInput = {
    id?: string
    noteNumber: string
    createdAt?: Date | string
    printedAt?: Date | string | null
    order: OrderCreateNestedOneWithoutDeliveryNoteInput
  }

  export type DeliveryNoteUncheckedCreateInput = {
    id?: string
    noteNumber: string
    createdAt?: Date | string
    printedAt?: Date | string | null
    orderId: string
  }

  export type DeliveryNoteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order?: OrderUpdateOneRequiredWithoutDeliveryNoteNestedInput
  }

  export type DeliveryNoteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type DeliveryNoteCreateManyInput = {
    id?: string
    noteNumber: string
    createdAt?: Date | string
    printedAt?: Date | string | null
    orderId: string
  }

  export type DeliveryNoteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryNoteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type AlertCreateInput = {
    id?: string
    alertType: $Enums.AlertType
    message: string
    isRead?: boolean
    createdAt?: Date | string
    medicationId?: string | null
    batchId?: string | null
    relatedEntityId?: string | null
  }

  export type AlertUncheckedCreateInput = {
    id?: string
    alertType: $Enums.AlertType
    message: string
    isRead?: boolean
    createdAt?: Date | string
    medicationId?: string | null
    batchId?: string | null
    relatedEntityId?: string | null
  }

  export type AlertUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationId?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationId?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertCreateManyInput = {
    id?: string
    alertType: $Enums.AlertType
    message: string
    isRead?: boolean
    createdAt?: Date | string
    medicationId?: string | null
    batchId?: string | null
    relatedEntityId?: string | null
  }

  export type AlertUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationId?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlertUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    alertType?: EnumAlertTypeFieldUpdateOperationsInput | $Enums.AlertType
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationId?: NullableStringFieldUpdateOperationsInput | string | null
    batchId?: NullableStringFieldUpdateOperationsInput | string | null
    relatedEntityId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type ServiceNullableScalarRelationFilter = {
    is?: ServiceWhereInput | null
    isNot?: ServiceWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    serviceId?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ServiceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ServiceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StockEntryListRelationFilter = {
    every?: StockEntryWhereInput
    some?: StockEntryWhereInput
    none?: StockEntryWhereInput
  }

  export type StockEntryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SupplierCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nif?: SortOrder
    rc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nif?: SortOrder
    rc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SupplierMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    contactName?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    nif?: SortOrder
    rc?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationListRelationFilter = {
    every?: MedicationWhereInput
    some?: MedicationWhereInput
    none?: MedicationWhereInput
  }

  export type SubClassListRelationFilter = {
    every?: SubClassWhereInput
    some?: SubClassWhereInput
    none?: SubClassWhereInput
  }

  export type MedicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SubClassOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TherapeuticClassCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapeuticClassMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapeuticClassMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TherapeuticClassScalarRelationFilter = {
    is?: TherapeuticClassWhereInput
    isNot?: TherapeuticClassWhereInput
  }

  export type SubClassCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
  }

  export type SubClassMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
  }

  export type SubClassMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
  }

  export type EnumMedicationFormFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationForm | EnumMedicationFormFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationFormFilter<$PrismaModel> | $Enums.MedicationForm
  }

  export type EnumPackagingUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagingUnit | EnumPackagingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPackagingUnitFilter<$PrismaModel> | $Enums.PackagingUnit
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type SubClassNullableScalarRelationFilter = {
    is?: SubClassWhereInput | null
    isNot?: SubClassWhereInput | null
  }

  export type MedicationBatchListRelationFilter = {
    every?: MedicationBatchWhereInput
    some?: MedicationBatchWhereInput
    none?: MedicationBatchWhereInput
  }

  export type OrderItemListRelationFilter = {
    every?: OrderItemWhereInput
    some?: OrderItemWhereInput
    none?: OrderItemWhereInput
  }

  export type MedicationBatchOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationCountOrderByAggregateInput = {
    id?: SortOrder
    dci?: SortOrder
    codedci?: SortOrder
    commercialName?: SortOrder
    form?: SortOrder
    dosage?: SortOrder
    packagingUnit?: SortOrder
    unitsPerPackage?: SortOrder
    minStockLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
    subClassId?: SortOrder
  }

  export type MedicationAvgOrderByAggregateInput = {
    unitsPerPackage?: SortOrder
    minStockLevel?: SortOrder
  }

  export type MedicationMaxOrderByAggregateInput = {
    id?: SortOrder
    dci?: SortOrder
    codedci?: SortOrder
    commercialName?: SortOrder
    form?: SortOrder
    dosage?: SortOrder
    packagingUnit?: SortOrder
    unitsPerPackage?: SortOrder
    minStockLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
    subClassId?: SortOrder
  }

  export type MedicationMinOrderByAggregateInput = {
    id?: SortOrder
    dci?: SortOrder
    codedci?: SortOrder
    commercialName?: SortOrder
    form?: SortOrder
    dosage?: SortOrder
    packagingUnit?: SortOrder
    unitsPerPackage?: SortOrder
    minStockLevel?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    therapeuticClassId?: SortOrder
    subClassId?: SortOrder
  }

  export type MedicationSumOrderByAggregateInput = {
    unitsPerPackage?: SortOrder
    minStockLevel?: SortOrder
  }

  export type EnumMedicationFormWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationForm | EnumMedicationFormFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationFormWithAggregatesFilter<$PrismaModel> | $Enums.MedicationForm
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedicationFormFilter<$PrismaModel>
    _max?: NestedEnumMedicationFormFilter<$PrismaModel>
  }

  export type EnumPackagingUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagingUnit | EnumPackagingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPackagingUnitWithAggregatesFilter<$PrismaModel> | $Enums.PackagingUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackagingUnitFilter<$PrismaModel>
    _max?: NestedEnumPackagingUnitFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type MedicationScalarRelationFilter = {
    is?: MedicationWhereInput
    isNot?: MedicationWhereInput
  }

  export type StockExitListRelationFilter = {
    every?: StockExitWhereInput
    some?: StockExitWhereInput
    none?: StockExitWhereInput
  }

  export type StockExitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MedicationBatchUnique_medication_batchCompoundUniqueInput = {
    medicationId: string
    batchNumber: string
  }

  export type MedicationBatchCountOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    currentQuantity?: SortOrder
    initialQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationBatchAvgOrderByAggregateInput = {
    currentQuantity?: SortOrder
    initialQuantity?: SortOrder
  }

  export type MedicationBatchMaxOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    currentQuantity?: SortOrder
    initialQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationBatchMinOrderByAggregateInput = {
    id?: SortOrder
    medicationId?: SortOrder
    batchNumber?: SortOrder
    expirationDate?: SortOrder
    currentQuantity?: SortOrder
    initialQuantity?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MedicationBatchSumOrderByAggregateInput = {
    currentQuantity?: SortOrder
    initialQuantity?: SortOrder
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type MedicationBatchScalarRelationFilter = {
    is?: MedicationBatchWhereInput
    isNot?: MedicationBatchWhereInput
  }

  export type SupplierScalarRelationFilter = {
    is?: SupplierWhereInput
    isNot?: SupplierWhereInput
  }

  export type StockEntryCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    entryDate?: SortOrder
    invoiceNumber?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    supplierId?: SortOrder
  }

  export type StockEntryAvgOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type StockEntryMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    entryDate?: SortOrder
    invoiceNumber?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    supplierId?: SortOrder
  }

  export type StockEntryMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    entryDate?: SortOrder
    invoiceNumber?: SortOrder
    unitPrice?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    supplierId?: SortOrder
  }

  export type StockEntrySumOrderByAggregateInput = {
    quantity?: SortOrder
    unitPrice?: SortOrder
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type EnumExitReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.ExitReason | EnumExitReasonFieldRefInput<$PrismaModel>
    in?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumExitReasonFilter<$PrismaModel> | $Enums.ExitReason
  }

  export type OrderItemNullableScalarRelationFilter = {
    is?: OrderItemWhereInput | null
    isNot?: OrderItemWhereInput | null
  }

  export type StockExitCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    orderItemId?: SortOrder
  }

  export type StockExitAvgOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type StockExitMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    orderItemId?: SortOrder
  }

  export type StockExitMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    exitDate?: SortOrder
    reason?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    batchId?: SortOrder
    orderItemId?: SortOrder
  }

  export type StockExitSumOrderByAggregateInput = {
    quantity?: SortOrder
  }

  export type EnumExitReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExitReason | EnumExitReasonFieldRefInput<$PrismaModel>
    in?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumExitReasonWithAggregatesFilter<$PrismaModel> | $Enums.ExitReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExitReasonFilter<$PrismaModel>
    _max?: NestedEnumExitReasonFilter<$PrismaModel>
  }

  export type EnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type ServiceScalarRelationFilter = {
    is?: ServiceWhereInput
    isNot?: ServiceWhereInput
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type DeliveryNoteNullableScalarRelationFilter = {
    is?: DeliveryNoteWhereInput | null
    isNot?: DeliveryNoteWhereInput | null
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    validatedAt?: SortOrder
    preparedAt?: SortOrder
    deliveredAt?: SortOrder
    notes?: SortOrder
    serviceId?: SortOrder
    createdById?: SortOrder
    validatedById?: SortOrder
    preparedById?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    validatedAt?: SortOrder
    preparedAt?: SortOrder
    deliveredAt?: SortOrder
    notes?: SortOrder
    serviceId?: SortOrder
    createdById?: SortOrder
    validatedById?: SortOrder
    preparedById?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    orderNumber?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    validatedAt?: SortOrder
    preparedAt?: SortOrder
    deliveredAt?: SortOrder
    notes?: SortOrder
    serviceId?: SortOrder
    createdById?: SortOrder
    validatedById?: SortOrder
    preparedById?: SortOrder
  }

  export type EnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type EnumOrderItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemStatus | EnumOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemStatusFilter<$PrismaModel> | $Enums.OrderItemStatus
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderItemCountOrderByAggregateInput = {
    id?: SortOrder
    requestedQuantity?: SortOrder
    validatedQuantity?: SortOrder
    preparedQuantity?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    medicationId?: SortOrder
  }

  export type OrderItemAvgOrderByAggregateInput = {
    requestedQuantity?: SortOrder
    validatedQuantity?: SortOrder
    preparedQuantity?: SortOrder
  }

  export type OrderItemMaxOrderByAggregateInput = {
    id?: SortOrder
    requestedQuantity?: SortOrder
    validatedQuantity?: SortOrder
    preparedQuantity?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    medicationId?: SortOrder
  }

  export type OrderItemMinOrderByAggregateInput = {
    id?: SortOrder
    requestedQuantity?: SortOrder
    validatedQuantity?: SortOrder
    preparedQuantity?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    orderId?: SortOrder
    medicationId?: SortOrder
  }

  export type OrderItemSumOrderByAggregateInput = {
    requestedQuantity?: SortOrder
    validatedQuantity?: SortOrder
    preparedQuantity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type EnumOrderItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemStatus | EnumOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderItemStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderItemStatusFilter<$PrismaModel>
  }

  export type DeliveryNoteCountOrderByAggregateInput = {
    id?: SortOrder
    noteNumber?: SortOrder
    createdAt?: SortOrder
    printedAt?: SortOrder
    orderId?: SortOrder
  }

  export type DeliveryNoteMaxOrderByAggregateInput = {
    id?: SortOrder
    noteNumber?: SortOrder
    createdAt?: SortOrder
    printedAt?: SortOrder
    orderId?: SortOrder
  }

  export type DeliveryNoteMinOrderByAggregateInput = {
    id?: SortOrder
    noteNumber?: SortOrder
    createdAt?: SortOrder
    printedAt?: SortOrder
    orderId?: SortOrder
  }

  export type EnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type AlertCountOrderByAggregateInput = {
    id?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    medicationId?: SortOrder
    batchId?: SortOrder
    relatedEntityId?: SortOrder
  }

  export type AlertMaxOrderByAggregateInput = {
    id?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    medicationId?: SortOrder
    batchId?: SortOrder
    relatedEntityId?: SortOrder
  }

  export type AlertMinOrderByAggregateInput = {
    id?: SortOrder
    alertType?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    medicationId?: SortOrder
    batchId?: SortOrder
    relatedEntityId?: SortOrder
  }

  export type EnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type OrderCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<OrderCreateWithoutValidatedByInput, OrderUncheckedCreateWithoutValidatedByInput> | OrderCreateWithoutValidatedByInput[] | OrderUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutValidatedByInput | OrderCreateOrConnectWithoutValidatedByInput[]
    createMany?: OrderCreateManyValidatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutPreparedByInput = {
    create?: XOR<OrderCreateWithoutPreparedByInput, OrderUncheckedCreateWithoutPreparedByInput> | OrderCreateWithoutPreparedByInput[] | OrderUncheckedCreateWithoutPreparedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreparedByInput | OrderCreateOrConnectWithoutPreparedByInput[]
    createMany?: OrderCreateManyPreparedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type ServiceCreateNestedOneWithoutUsersInput = {
    create?: XOR<ServiceCreateWithoutUsersInput, ServiceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutUsersInput
    connect?: ServiceWhereUniqueInput
  }

  export type OrderUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutValidatedByInput = {
    create?: XOR<OrderCreateWithoutValidatedByInput, OrderUncheckedCreateWithoutValidatedByInput> | OrderCreateWithoutValidatedByInput[] | OrderUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutValidatedByInput | OrderCreateOrConnectWithoutValidatedByInput[]
    createMany?: OrderCreateManyValidatedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutPreparedByInput = {
    create?: XOR<OrderCreateWithoutPreparedByInput, OrderUncheckedCreateWithoutPreparedByInput> | OrderCreateWithoutPreparedByInput[] | OrderUncheckedCreateWithoutPreparedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreparedByInput | OrderCreateOrConnectWithoutPreparedByInput[]
    createMany?: OrderCreateManyPreparedByInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type OrderUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput | OrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput | OrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByInput | OrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<OrderCreateWithoutValidatedByInput, OrderUncheckedCreateWithoutValidatedByInput> | OrderCreateWithoutValidatedByInput[] | OrderUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutValidatedByInput | OrderCreateOrConnectWithoutValidatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutValidatedByInput | OrderUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: OrderCreateManyValidatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutValidatedByInput | OrderUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutValidatedByInput | OrderUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutPreparedByNestedInput = {
    create?: XOR<OrderCreateWithoutPreparedByInput, OrderUncheckedCreateWithoutPreparedByInput> | OrderCreateWithoutPreparedByInput[] | OrderUncheckedCreateWithoutPreparedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreparedByInput | OrderCreateOrConnectWithoutPreparedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPreparedByInput | OrderUpsertWithWhereUniqueWithoutPreparedByInput[]
    createMany?: OrderCreateManyPreparedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPreparedByInput | OrderUpdateWithWhereUniqueWithoutPreparedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPreparedByInput | OrderUpdateManyWithWhereWithoutPreparedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ServiceUpdateOneWithoutUsersNestedInput = {
    create?: XOR<ServiceCreateWithoutUsersInput, ServiceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutUsersInput
    upsert?: ServiceUpsertWithoutUsersInput
    disconnect?: ServiceWhereInput | boolean
    delete?: ServiceWhereInput | boolean
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutUsersInput, ServiceUpdateWithoutUsersInput>, ServiceUncheckedUpdateWithoutUsersInput>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput> | OrderCreateWithoutCreatedByInput[] | OrderUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutCreatedByInput | OrderCreateOrConnectWithoutCreatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutCreatedByInput | OrderUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: OrderCreateManyCreatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutCreatedByInput | OrderUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutCreatedByInput | OrderUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutValidatedByNestedInput = {
    create?: XOR<OrderCreateWithoutValidatedByInput, OrderUncheckedCreateWithoutValidatedByInput> | OrderCreateWithoutValidatedByInput[] | OrderUncheckedCreateWithoutValidatedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutValidatedByInput | OrderCreateOrConnectWithoutValidatedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutValidatedByInput | OrderUpsertWithWhereUniqueWithoutValidatedByInput[]
    createMany?: OrderCreateManyValidatedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutValidatedByInput | OrderUpdateWithWhereUniqueWithoutValidatedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutValidatedByInput | OrderUpdateManyWithWhereWithoutValidatedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutPreparedByNestedInput = {
    create?: XOR<OrderCreateWithoutPreparedByInput, OrderUncheckedCreateWithoutPreparedByInput> | OrderCreateWithoutPreparedByInput[] | OrderUncheckedCreateWithoutPreparedByInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutPreparedByInput | OrderCreateOrConnectWithoutPreparedByInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutPreparedByInput | OrderUpsertWithWhereUniqueWithoutPreparedByInput[]
    createMany?: OrderCreateManyPreparedByInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutPreparedByInput | OrderUpdateWithWhereUniqueWithoutPreparedByInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutPreparedByInput | OrderUpdateManyWithWhereWithoutPreparedByInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutServiceInput = {
    create?: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput> | UserCreateWithoutServiceInput[] | UserUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutServiceInput | UserCreateOrConnectWithoutServiceInput[]
    createMany?: UserCreateManyServiceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutServiceInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput> | UserCreateWithoutServiceInput[] | UserUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutServiceInput | UserCreateOrConnectWithoutServiceInput[]
    createMany?: UserCreateManyServiceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutServiceNestedInput = {
    create?: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput> | UserCreateWithoutServiceInput[] | UserUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutServiceInput | UserCreateOrConnectWithoutServiceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutServiceInput | UserUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: UserCreateManyServiceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutServiceInput | UserUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutServiceInput | UserUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutServiceInput | OrderUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutServiceInput | OrderUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutServiceInput | OrderUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput> | UserCreateWithoutServiceInput[] | UserUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutServiceInput | UserCreateOrConnectWithoutServiceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutServiceInput | UserUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: UserCreateManyServiceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutServiceInput | UserUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutServiceInput | UserUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput> | OrderCreateWithoutServiceInput[] | OrderUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutServiceInput | OrderCreateOrConnectWithoutServiceInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutServiceInput | OrderUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: OrderCreateManyServiceInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutServiceInput | OrderUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutServiceInput | OrderUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type StockEntryCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockEntryCreateWithoutSupplierInput, StockEntryUncheckedCreateWithoutSupplierInput> | StockEntryCreateWithoutSupplierInput[] | StockEntryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutSupplierInput | StockEntryCreateOrConnectWithoutSupplierInput[]
    createMany?: StockEntryCreateManySupplierInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StockEntryUncheckedCreateNestedManyWithoutSupplierInput = {
    create?: XOR<StockEntryCreateWithoutSupplierInput, StockEntryUncheckedCreateWithoutSupplierInput> | StockEntryCreateWithoutSupplierInput[] | StockEntryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutSupplierInput | StockEntryCreateOrConnectWithoutSupplierInput[]
    createMany?: StockEntryCreateManySupplierInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StockEntryUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockEntryCreateWithoutSupplierInput, StockEntryUncheckedCreateWithoutSupplierInput> | StockEntryCreateWithoutSupplierInput[] | StockEntryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutSupplierInput | StockEntryCreateOrConnectWithoutSupplierInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutSupplierInput | StockEntryUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockEntryCreateManySupplierInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutSupplierInput | StockEntryUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutSupplierInput | StockEntryUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type StockEntryUncheckedUpdateManyWithoutSupplierNestedInput = {
    create?: XOR<StockEntryCreateWithoutSupplierInput, StockEntryUncheckedCreateWithoutSupplierInput> | StockEntryCreateWithoutSupplierInput[] | StockEntryUncheckedCreateWithoutSupplierInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutSupplierInput | StockEntryCreateOrConnectWithoutSupplierInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutSupplierInput | StockEntryUpsertWithWhereUniqueWithoutSupplierInput[]
    createMany?: StockEntryCreateManySupplierInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutSupplierInput | StockEntryUpdateWithWhereUniqueWithoutSupplierInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutSupplierInput | StockEntryUpdateManyWithWhereWithoutSupplierInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type MedicationCreateNestedManyWithoutTherapeuticClassInput = {
    create?: XOR<MedicationCreateWithoutTherapeuticClassInput, MedicationUncheckedCreateWithoutTherapeuticClassInput> | MedicationCreateWithoutTherapeuticClassInput[] | MedicationUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutTherapeuticClassInput | MedicationCreateOrConnectWithoutTherapeuticClassInput[]
    createMany?: MedicationCreateManyTherapeuticClassInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type SubClassCreateNestedManyWithoutTherapeuticClassInput = {
    create?: XOR<SubClassCreateWithoutTherapeuticClassInput, SubClassUncheckedCreateWithoutTherapeuticClassInput> | SubClassCreateWithoutTherapeuticClassInput[] | SubClassUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: SubClassCreateOrConnectWithoutTherapeuticClassInput | SubClassCreateOrConnectWithoutTherapeuticClassInput[]
    createMany?: SubClassCreateManyTherapeuticClassInputEnvelope
    connect?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutTherapeuticClassInput = {
    create?: XOR<MedicationCreateWithoutTherapeuticClassInput, MedicationUncheckedCreateWithoutTherapeuticClassInput> | MedicationCreateWithoutTherapeuticClassInput[] | MedicationUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutTherapeuticClassInput | MedicationCreateOrConnectWithoutTherapeuticClassInput[]
    createMany?: MedicationCreateManyTherapeuticClassInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type SubClassUncheckedCreateNestedManyWithoutTherapeuticClassInput = {
    create?: XOR<SubClassCreateWithoutTherapeuticClassInput, SubClassUncheckedCreateWithoutTherapeuticClassInput> | SubClassCreateWithoutTherapeuticClassInput[] | SubClassUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: SubClassCreateOrConnectWithoutTherapeuticClassInput | SubClassCreateOrConnectWithoutTherapeuticClassInput[]
    createMany?: SubClassCreateManyTherapeuticClassInputEnvelope
    connect?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
  }

  export type MedicationUpdateManyWithoutTherapeuticClassNestedInput = {
    create?: XOR<MedicationCreateWithoutTherapeuticClassInput, MedicationUncheckedCreateWithoutTherapeuticClassInput> | MedicationCreateWithoutTherapeuticClassInput[] | MedicationUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutTherapeuticClassInput | MedicationCreateOrConnectWithoutTherapeuticClassInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutTherapeuticClassInput | MedicationUpsertWithWhereUniqueWithoutTherapeuticClassInput[]
    createMany?: MedicationCreateManyTherapeuticClassInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutTherapeuticClassInput | MedicationUpdateWithWhereUniqueWithoutTherapeuticClassInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutTherapeuticClassInput | MedicationUpdateManyWithWhereWithoutTherapeuticClassInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type SubClassUpdateManyWithoutTherapeuticClassNestedInput = {
    create?: XOR<SubClassCreateWithoutTherapeuticClassInput, SubClassUncheckedCreateWithoutTherapeuticClassInput> | SubClassCreateWithoutTherapeuticClassInput[] | SubClassUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: SubClassCreateOrConnectWithoutTherapeuticClassInput | SubClassCreateOrConnectWithoutTherapeuticClassInput[]
    upsert?: SubClassUpsertWithWhereUniqueWithoutTherapeuticClassInput | SubClassUpsertWithWhereUniqueWithoutTherapeuticClassInput[]
    createMany?: SubClassCreateManyTherapeuticClassInputEnvelope
    set?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    disconnect?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    delete?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    connect?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    update?: SubClassUpdateWithWhereUniqueWithoutTherapeuticClassInput | SubClassUpdateWithWhereUniqueWithoutTherapeuticClassInput[]
    updateMany?: SubClassUpdateManyWithWhereWithoutTherapeuticClassInput | SubClassUpdateManyWithWhereWithoutTherapeuticClassInput[]
    deleteMany?: SubClassScalarWhereInput | SubClassScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutTherapeuticClassNestedInput = {
    create?: XOR<MedicationCreateWithoutTherapeuticClassInput, MedicationUncheckedCreateWithoutTherapeuticClassInput> | MedicationCreateWithoutTherapeuticClassInput[] | MedicationUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutTherapeuticClassInput | MedicationCreateOrConnectWithoutTherapeuticClassInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutTherapeuticClassInput | MedicationUpsertWithWhereUniqueWithoutTherapeuticClassInput[]
    createMany?: MedicationCreateManyTherapeuticClassInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutTherapeuticClassInput | MedicationUpdateWithWhereUniqueWithoutTherapeuticClassInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutTherapeuticClassInput | MedicationUpdateManyWithWhereWithoutTherapeuticClassInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type SubClassUncheckedUpdateManyWithoutTherapeuticClassNestedInput = {
    create?: XOR<SubClassCreateWithoutTherapeuticClassInput, SubClassUncheckedCreateWithoutTherapeuticClassInput> | SubClassCreateWithoutTherapeuticClassInput[] | SubClassUncheckedCreateWithoutTherapeuticClassInput[]
    connectOrCreate?: SubClassCreateOrConnectWithoutTherapeuticClassInput | SubClassCreateOrConnectWithoutTherapeuticClassInput[]
    upsert?: SubClassUpsertWithWhereUniqueWithoutTherapeuticClassInput | SubClassUpsertWithWhereUniqueWithoutTherapeuticClassInput[]
    createMany?: SubClassCreateManyTherapeuticClassInputEnvelope
    set?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    disconnect?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    delete?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    connect?: SubClassWhereUniqueInput | SubClassWhereUniqueInput[]
    update?: SubClassUpdateWithWhereUniqueWithoutTherapeuticClassInput | SubClassUpdateWithWhereUniqueWithoutTherapeuticClassInput[]
    updateMany?: SubClassUpdateManyWithWhereWithoutTherapeuticClassInput | SubClassUpdateManyWithWhereWithoutTherapeuticClassInput[]
    deleteMany?: SubClassScalarWhereInput | SubClassScalarWhereInput[]
  }

  export type TherapeuticClassCreateNestedOneWithoutSubClassesInput = {
    create?: XOR<TherapeuticClassCreateWithoutSubClassesInput, TherapeuticClassUncheckedCreateWithoutSubClassesInput>
    connectOrCreate?: TherapeuticClassCreateOrConnectWithoutSubClassesInput
    connect?: TherapeuticClassWhereUniqueInput
  }

  export type MedicationCreateNestedManyWithoutSubClassInput = {
    create?: XOR<MedicationCreateWithoutSubClassInput, MedicationUncheckedCreateWithoutSubClassInput> | MedicationCreateWithoutSubClassInput[] | MedicationUncheckedCreateWithoutSubClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubClassInput | MedicationCreateOrConnectWithoutSubClassInput[]
    createMany?: MedicationCreateManySubClassInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type MedicationUncheckedCreateNestedManyWithoutSubClassInput = {
    create?: XOR<MedicationCreateWithoutSubClassInput, MedicationUncheckedCreateWithoutSubClassInput> | MedicationCreateWithoutSubClassInput[] | MedicationUncheckedCreateWithoutSubClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubClassInput | MedicationCreateOrConnectWithoutSubClassInput[]
    createMany?: MedicationCreateManySubClassInputEnvelope
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
  }

  export type TherapeuticClassUpdateOneRequiredWithoutSubClassesNestedInput = {
    create?: XOR<TherapeuticClassCreateWithoutSubClassesInput, TherapeuticClassUncheckedCreateWithoutSubClassesInput>
    connectOrCreate?: TherapeuticClassCreateOrConnectWithoutSubClassesInput
    upsert?: TherapeuticClassUpsertWithoutSubClassesInput
    connect?: TherapeuticClassWhereUniqueInput
    update?: XOR<XOR<TherapeuticClassUpdateToOneWithWhereWithoutSubClassesInput, TherapeuticClassUpdateWithoutSubClassesInput>, TherapeuticClassUncheckedUpdateWithoutSubClassesInput>
  }

  export type MedicationUpdateManyWithoutSubClassNestedInput = {
    create?: XOR<MedicationCreateWithoutSubClassInput, MedicationUncheckedCreateWithoutSubClassInput> | MedicationCreateWithoutSubClassInput[] | MedicationUncheckedCreateWithoutSubClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubClassInput | MedicationCreateOrConnectWithoutSubClassInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutSubClassInput | MedicationUpsertWithWhereUniqueWithoutSubClassInput[]
    createMany?: MedicationCreateManySubClassInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutSubClassInput | MedicationUpdateWithWhereUniqueWithoutSubClassInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutSubClassInput | MedicationUpdateManyWithWhereWithoutSubClassInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type MedicationUncheckedUpdateManyWithoutSubClassNestedInput = {
    create?: XOR<MedicationCreateWithoutSubClassInput, MedicationUncheckedCreateWithoutSubClassInput> | MedicationCreateWithoutSubClassInput[] | MedicationUncheckedCreateWithoutSubClassInput[]
    connectOrCreate?: MedicationCreateOrConnectWithoutSubClassInput | MedicationCreateOrConnectWithoutSubClassInput[]
    upsert?: MedicationUpsertWithWhereUniqueWithoutSubClassInput | MedicationUpsertWithWhereUniqueWithoutSubClassInput[]
    createMany?: MedicationCreateManySubClassInputEnvelope
    set?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    disconnect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    delete?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    connect?: MedicationWhereUniqueInput | MedicationWhereUniqueInput[]
    update?: MedicationUpdateWithWhereUniqueWithoutSubClassInput | MedicationUpdateWithWhereUniqueWithoutSubClassInput[]
    updateMany?: MedicationUpdateManyWithWhereWithoutSubClassInput | MedicationUpdateManyWithWhereWithoutSubClassInput[]
    deleteMany?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
  }

  export type TherapeuticClassCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<TherapeuticClassCreateWithoutMedicationsInput, TherapeuticClassUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: TherapeuticClassCreateOrConnectWithoutMedicationsInput
    connect?: TherapeuticClassWhereUniqueInput
  }

  export type SubClassCreateNestedOneWithoutMedicationsInput = {
    create?: XOR<SubClassCreateWithoutMedicationsInput, SubClassUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: SubClassCreateOrConnectWithoutMedicationsInput
    connect?: SubClassWhereUniqueInput
  }

  export type MedicationBatchCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationBatchCreateWithoutMedicationInput, MedicationBatchUncheckedCreateWithoutMedicationInput> | MedicationBatchCreateWithoutMedicationInput[] | MedicationBatchUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutMedicationInput | MedicationBatchCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationBatchCreateManyMedicationInputEnvelope
    connect?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
  }

  export type OrderItemCreateNestedManyWithoutMedicationInput = {
    create?: XOR<OrderItemCreateWithoutMedicationInput, OrderItemUncheckedCreateWithoutMedicationInput> | OrderItemCreateWithoutMedicationInput[] | OrderItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMedicationInput | OrderItemCreateOrConnectWithoutMedicationInput[]
    createMany?: OrderItemCreateManyMedicationInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type MedicationBatchUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<MedicationBatchCreateWithoutMedicationInput, MedicationBatchUncheckedCreateWithoutMedicationInput> | MedicationBatchCreateWithoutMedicationInput[] | MedicationBatchUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutMedicationInput | MedicationBatchCreateOrConnectWithoutMedicationInput[]
    createMany?: MedicationBatchCreateManyMedicationInputEnvelope
    connect?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
  }

  export type OrderItemUncheckedCreateNestedManyWithoutMedicationInput = {
    create?: XOR<OrderItemCreateWithoutMedicationInput, OrderItemUncheckedCreateWithoutMedicationInput> | OrderItemCreateWithoutMedicationInput[] | OrderItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMedicationInput | OrderItemCreateOrConnectWithoutMedicationInput[]
    createMany?: OrderItemCreateManyMedicationInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type EnumMedicationFormFieldUpdateOperationsInput = {
    set?: $Enums.MedicationForm
  }

  export type EnumPackagingUnitFieldUpdateOperationsInput = {
    set?: $Enums.PackagingUnit
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type TherapeuticClassUpdateOneRequiredWithoutMedicationsNestedInput = {
    create?: XOR<TherapeuticClassCreateWithoutMedicationsInput, TherapeuticClassUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: TherapeuticClassCreateOrConnectWithoutMedicationsInput
    upsert?: TherapeuticClassUpsertWithoutMedicationsInput
    connect?: TherapeuticClassWhereUniqueInput
    update?: XOR<XOR<TherapeuticClassUpdateToOneWithWhereWithoutMedicationsInput, TherapeuticClassUpdateWithoutMedicationsInput>, TherapeuticClassUncheckedUpdateWithoutMedicationsInput>
  }

  export type SubClassUpdateOneWithoutMedicationsNestedInput = {
    create?: XOR<SubClassCreateWithoutMedicationsInput, SubClassUncheckedCreateWithoutMedicationsInput>
    connectOrCreate?: SubClassCreateOrConnectWithoutMedicationsInput
    upsert?: SubClassUpsertWithoutMedicationsInput
    disconnect?: SubClassWhereInput | boolean
    delete?: SubClassWhereInput | boolean
    connect?: SubClassWhereUniqueInput
    update?: XOR<XOR<SubClassUpdateToOneWithWhereWithoutMedicationsInput, SubClassUpdateWithoutMedicationsInput>, SubClassUncheckedUpdateWithoutMedicationsInput>
  }

  export type MedicationBatchUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationBatchCreateWithoutMedicationInput, MedicationBatchUncheckedCreateWithoutMedicationInput> | MedicationBatchCreateWithoutMedicationInput[] | MedicationBatchUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutMedicationInput | MedicationBatchCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationBatchUpsertWithWhereUniqueWithoutMedicationInput | MedicationBatchUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationBatchCreateManyMedicationInputEnvelope
    set?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    disconnect?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    delete?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    connect?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    update?: MedicationBatchUpdateWithWhereUniqueWithoutMedicationInput | MedicationBatchUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationBatchUpdateManyWithWhereWithoutMedicationInput | MedicationBatchUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationBatchScalarWhereInput | MedicationBatchScalarWhereInput[]
  }

  export type OrderItemUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<OrderItemCreateWithoutMedicationInput, OrderItemUncheckedCreateWithoutMedicationInput> | OrderItemCreateWithoutMedicationInput[] | OrderItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMedicationInput | OrderItemCreateOrConnectWithoutMedicationInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMedicationInput | OrderItemUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: OrderItemCreateManyMedicationInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMedicationInput | OrderItemUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMedicationInput | OrderItemUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type MedicationBatchUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<MedicationBatchCreateWithoutMedicationInput, MedicationBatchUncheckedCreateWithoutMedicationInput> | MedicationBatchCreateWithoutMedicationInput[] | MedicationBatchUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutMedicationInput | MedicationBatchCreateOrConnectWithoutMedicationInput[]
    upsert?: MedicationBatchUpsertWithWhereUniqueWithoutMedicationInput | MedicationBatchUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: MedicationBatchCreateManyMedicationInputEnvelope
    set?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    disconnect?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    delete?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    connect?: MedicationBatchWhereUniqueInput | MedicationBatchWhereUniqueInput[]
    update?: MedicationBatchUpdateWithWhereUniqueWithoutMedicationInput | MedicationBatchUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: MedicationBatchUpdateManyWithWhereWithoutMedicationInput | MedicationBatchUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: MedicationBatchScalarWhereInput | MedicationBatchScalarWhereInput[]
  }

  export type OrderItemUncheckedUpdateManyWithoutMedicationNestedInput = {
    create?: XOR<OrderItemCreateWithoutMedicationInput, OrderItemUncheckedCreateWithoutMedicationInput> | OrderItemCreateWithoutMedicationInput[] | OrderItemUncheckedCreateWithoutMedicationInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutMedicationInput | OrderItemCreateOrConnectWithoutMedicationInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutMedicationInput | OrderItemUpsertWithWhereUniqueWithoutMedicationInput[]
    createMany?: OrderItemCreateManyMedicationInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutMedicationInput | OrderItemUpdateWithWhereUniqueWithoutMedicationInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutMedicationInput | OrderItemUpdateManyWithWhereWithoutMedicationInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type MedicationCreateNestedOneWithoutBatchesInput = {
    create?: XOR<MedicationCreateWithoutBatchesInput, MedicationUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutBatchesInput
    connect?: MedicationWhereUniqueInput
  }

  export type StockEntryCreateNestedManyWithoutBatchInput = {
    create?: XOR<StockEntryCreateWithoutBatchInput, StockEntryUncheckedCreateWithoutBatchInput> | StockEntryCreateWithoutBatchInput[] | StockEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutBatchInput | StockEntryCreateOrConnectWithoutBatchInput[]
    createMany?: StockEntryCreateManyBatchInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StockExitCreateNestedManyWithoutBatchInput = {
    create?: XOR<StockExitCreateWithoutBatchInput, StockExitUncheckedCreateWithoutBatchInput> | StockExitCreateWithoutBatchInput[] | StockExitUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutBatchInput | StockExitCreateOrConnectWithoutBatchInput[]
    createMany?: StockExitCreateManyBatchInputEnvelope
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
  }

  export type StockEntryUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<StockEntryCreateWithoutBatchInput, StockEntryUncheckedCreateWithoutBatchInput> | StockEntryCreateWithoutBatchInput[] | StockEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutBatchInput | StockEntryCreateOrConnectWithoutBatchInput[]
    createMany?: StockEntryCreateManyBatchInputEnvelope
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
  }

  export type StockExitUncheckedCreateNestedManyWithoutBatchInput = {
    create?: XOR<StockExitCreateWithoutBatchInput, StockExitUncheckedCreateWithoutBatchInput> | StockExitCreateWithoutBatchInput[] | StockExitUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutBatchInput | StockExitCreateOrConnectWithoutBatchInput[]
    createMany?: StockExitCreateManyBatchInputEnvelope
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
  }

  export type MedicationUpdateOneRequiredWithoutBatchesNestedInput = {
    create?: XOR<MedicationCreateWithoutBatchesInput, MedicationUncheckedCreateWithoutBatchesInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutBatchesInput
    upsert?: MedicationUpsertWithoutBatchesInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutBatchesInput, MedicationUpdateWithoutBatchesInput>, MedicationUncheckedUpdateWithoutBatchesInput>
  }

  export type StockEntryUpdateManyWithoutBatchNestedInput = {
    create?: XOR<StockEntryCreateWithoutBatchInput, StockEntryUncheckedCreateWithoutBatchInput> | StockEntryCreateWithoutBatchInput[] | StockEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutBatchInput | StockEntryCreateOrConnectWithoutBatchInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutBatchInput | StockEntryUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: StockEntryCreateManyBatchInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutBatchInput | StockEntryUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutBatchInput | StockEntryUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type StockExitUpdateManyWithoutBatchNestedInput = {
    create?: XOR<StockExitCreateWithoutBatchInput, StockExitUncheckedCreateWithoutBatchInput> | StockExitCreateWithoutBatchInput[] | StockExitUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutBatchInput | StockExitCreateOrConnectWithoutBatchInput[]
    upsert?: StockExitUpsertWithWhereUniqueWithoutBatchInput | StockExitUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: StockExitCreateManyBatchInputEnvelope
    set?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    disconnect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    delete?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    update?: StockExitUpdateWithWhereUniqueWithoutBatchInput | StockExitUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: StockExitUpdateManyWithWhereWithoutBatchInput | StockExitUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
  }

  export type StockEntryUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<StockEntryCreateWithoutBatchInput, StockEntryUncheckedCreateWithoutBatchInput> | StockEntryCreateWithoutBatchInput[] | StockEntryUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockEntryCreateOrConnectWithoutBatchInput | StockEntryCreateOrConnectWithoutBatchInput[]
    upsert?: StockEntryUpsertWithWhereUniqueWithoutBatchInput | StockEntryUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: StockEntryCreateManyBatchInputEnvelope
    set?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    disconnect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    delete?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    connect?: StockEntryWhereUniqueInput | StockEntryWhereUniqueInput[]
    update?: StockEntryUpdateWithWhereUniqueWithoutBatchInput | StockEntryUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: StockEntryUpdateManyWithWhereWithoutBatchInput | StockEntryUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
  }

  export type StockExitUncheckedUpdateManyWithoutBatchNestedInput = {
    create?: XOR<StockExitCreateWithoutBatchInput, StockExitUncheckedCreateWithoutBatchInput> | StockExitCreateWithoutBatchInput[] | StockExitUncheckedCreateWithoutBatchInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutBatchInput | StockExitCreateOrConnectWithoutBatchInput[]
    upsert?: StockExitUpsertWithWhereUniqueWithoutBatchInput | StockExitUpsertWithWhereUniqueWithoutBatchInput[]
    createMany?: StockExitCreateManyBatchInputEnvelope
    set?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    disconnect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    delete?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    update?: StockExitUpdateWithWhereUniqueWithoutBatchInput | StockExitUpdateWithWhereUniqueWithoutBatchInput[]
    updateMany?: StockExitUpdateManyWithWhereWithoutBatchInput | StockExitUpdateManyWithWhereWithoutBatchInput[]
    deleteMany?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
  }

  export type MedicationBatchCreateNestedOneWithoutStockEntriesInput = {
    create?: XOR<MedicationBatchCreateWithoutStockEntriesInput, MedicationBatchUncheckedCreateWithoutStockEntriesInput>
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutStockEntriesInput
    connect?: MedicationBatchWhereUniqueInput
  }

  export type SupplierCreateNestedOneWithoutStockEntriesInput = {
    create?: XOR<SupplierCreateWithoutStockEntriesInput, SupplierUncheckedCreateWithoutStockEntriesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockEntriesInput
    connect?: SupplierWhereUniqueInput
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type MedicationBatchUpdateOneRequiredWithoutStockEntriesNestedInput = {
    create?: XOR<MedicationBatchCreateWithoutStockEntriesInput, MedicationBatchUncheckedCreateWithoutStockEntriesInput>
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutStockEntriesInput
    upsert?: MedicationBatchUpsertWithoutStockEntriesInput
    connect?: MedicationBatchWhereUniqueInput
    update?: XOR<XOR<MedicationBatchUpdateToOneWithWhereWithoutStockEntriesInput, MedicationBatchUpdateWithoutStockEntriesInput>, MedicationBatchUncheckedUpdateWithoutStockEntriesInput>
  }

  export type SupplierUpdateOneRequiredWithoutStockEntriesNestedInput = {
    create?: XOR<SupplierCreateWithoutStockEntriesInput, SupplierUncheckedCreateWithoutStockEntriesInput>
    connectOrCreate?: SupplierCreateOrConnectWithoutStockEntriesInput
    upsert?: SupplierUpsertWithoutStockEntriesInput
    connect?: SupplierWhereUniqueInput
    update?: XOR<XOR<SupplierUpdateToOneWithWhereWithoutStockEntriesInput, SupplierUpdateWithoutStockEntriesInput>, SupplierUncheckedUpdateWithoutStockEntriesInput>
  }

  export type MedicationBatchCreateNestedOneWithoutStockExitsInput = {
    create?: XOR<MedicationBatchCreateWithoutStockExitsInput, MedicationBatchUncheckedCreateWithoutStockExitsInput>
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutStockExitsInput
    connect?: MedicationBatchWhereUniqueInput
  }

  export type OrderItemCreateNestedOneWithoutStockExitsInput = {
    create?: XOR<OrderItemCreateWithoutStockExitsInput, OrderItemUncheckedCreateWithoutStockExitsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutStockExitsInput
    connect?: OrderItemWhereUniqueInput
  }

  export type EnumExitReasonFieldUpdateOperationsInput = {
    set?: $Enums.ExitReason
  }

  export type MedicationBatchUpdateOneRequiredWithoutStockExitsNestedInput = {
    create?: XOR<MedicationBatchCreateWithoutStockExitsInput, MedicationBatchUncheckedCreateWithoutStockExitsInput>
    connectOrCreate?: MedicationBatchCreateOrConnectWithoutStockExitsInput
    upsert?: MedicationBatchUpsertWithoutStockExitsInput
    connect?: MedicationBatchWhereUniqueInput
    update?: XOR<XOR<MedicationBatchUpdateToOneWithWhereWithoutStockExitsInput, MedicationBatchUpdateWithoutStockExitsInput>, MedicationBatchUncheckedUpdateWithoutStockExitsInput>
  }

  export type OrderItemUpdateOneWithoutStockExitsNestedInput = {
    create?: XOR<OrderItemCreateWithoutStockExitsInput, OrderItemUncheckedCreateWithoutStockExitsInput>
    connectOrCreate?: OrderItemCreateOrConnectWithoutStockExitsInput
    upsert?: OrderItemUpsertWithoutStockExitsInput
    disconnect?: OrderItemWhereInput | boolean
    delete?: OrderItemWhereInput | boolean
    connect?: OrderItemWhereUniqueInput
    update?: XOR<XOR<OrderItemUpdateToOneWithWhereWithoutStockExitsInput, OrderItemUpdateWithoutStockExitsInput>, OrderItemUncheckedUpdateWithoutStockExitsInput>
  }

  export type ServiceCreateNestedOneWithoutOrdersInput = {
    create?: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOrdersInput
    connect?: ServiceWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedOrdersInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutValidatedOrdersInput = {
    create?: XOR<UserCreateWithoutValidatedOrdersInput, UserUncheckedCreateWithoutValidatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPreparedOrdersInput = {
    create?: XOR<UserCreateWithoutPreparedOrdersInput, UserUncheckedCreateWithoutPreparedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreparedOrdersInput
    connect?: UserWhereUniqueInput
  }

  export type OrderItemCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DeliveryNoteCreateNestedOneWithoutOrderInput = {
    create?: XOR<DeliveryNoteCreateWithoutOrderInput, DeliveryNoteUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DeliveryNoteCreateOrConnectWithoutOrderInput
    connect?: DeliveryNoteWhereUniqueInput
  }

  export type OrderItemUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
  }

  export type DeliveryNoteUncheckedCreateNestedOneWithoutOrderInput = {
    create?: XOR<DeliveryNoteCreateWithoutOrderInput, DeliveryNoteUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DeliveryNoteCreateOrConnectWithoutOrderInput
    connect?: DeliveryNoteWhereUniqueInput
  }

  export type EnumOrderStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderStatus
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type ServiceUpdateOneRequiredWithoutOrdersNestedInput = {
    create?: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: ServiceCreateOrConnectWithoutOrdersInput
    upsert?: ServiceUpsertWithoutOrdersInput
    connect?: ServiceWhereUniqueInput
    update?: XOR<XOR<ServiceUpdateToOneWithWhereWithoutOrdersInput, ServiceUpdateWithoutOrdersInput>, ServiceUncheckedUpdateWithoutOrdersInput>
  }

  export type UserUpdateOneRequiredWithoutCreatedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedOrdersInput
    upsert?: UserUpsertWithoutCreatedOrdersInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedOrdersInput, UserUpdateWithoutCreatedOrdersInput>, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type UserUpdateOneWithoutValidatedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutValidatedOrdersInput, UserUncheckedCreateWithoutValidatedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutValidatedOrdersInput
    upsert?: UserUpsertWithoutValidatedOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutValidatedOrdersInput, UserUpdateWithoutValidatedOrdersInput>, UserUncheckedUpdateWithoutValidatedOrdersInput>
  }

  export type UserUpdateOneWithoutPreparedOrdersNestedInput = {
    create?: XOR<UserCreateWithoutPreparedOrdersInput, UserUncheckedCreateWithoutPreparedOrdersInput>
    connectOrCreate?: UserCreateOrConnectWithoutPreparedOrdersInput
    upsert?: UserUpsertWithoutPreparedOrdersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPreparedOrdersInput, UserUpdateWithoutPreparedOrdersInput>, UserUncheckedUpdateWithoutPreparedOrdersInput>
  }

  export type OrderItemUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type DeliveryNoteUpdateOneWithoutOrderNestedInput = {
    create?: XOR<DeliveryNoteCreateWithoutOrderInput, DeliveryNoteUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DeliveryNoteCreateOrConnectWithoutOrderInput
    upsert?: DeliveryNoteUpsertWithoutOrderInput
    disconnect?: DeliveryNoteWhereInput | boolean
    delete?: DeliveryNoteWhereInput | boolean
    connect?: DeliveryNoteWhereUniqueInput
    update?: XOR<XOR<DeliveryNoteUpdateToOneWithWhereWithoutOrderInput, DeliveryNoteUpdateWithoutOrderInput>, DeliveryNoteUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput> | OrderItemCreateWithoutOrderInput[] | OrderItemUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderItemCreateOrConnectWithoutOrderInput | OrderItemCreateOrConnectWithoutOrderInput[]
    upsert?: OrderItemUpsertWithWhereUniqueWithoutOrderInput | OrderItemUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderItemCreateManyOrderInputEnvelope
    set?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    disconnect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    delete?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    connect?: OrderItemWhereUniqueInput | OrderItemWhereUniqueInput[]
    update?: OrderItemUpdateWithWhereUniqueWithoutOrderInput | OrderItemUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderItemUpdateManyWithWhereWithoutOrderInput | OrderItemUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
  }

  export type DeliveryNoteUncheckedUpdateOneWithoutOrderNestedInput = {
    create?: XOR<DeliveryNoteCreateWithoutOrderInput, DeliveryNoteUncheckedCreateWithoutOrderInput>
    connectOrCreate?: DeliveryNoteCreateOrConnectWithoutOrderInput
    upsert?: DeliveryNoteUpsertWithoutOrderInput
    disconnect?: DeliveryNoteWhereInput | boolean
    delete?: DeliveryNoteWhereInput | boolean
    connect?: DeliveryNoteWhereUniqueInput
    update?: XOR<XOR<DeliveryNoteUpdateToOneWithWhereWithoutOrderInput, DeliveryNoteUpdateWithoutOrderInput>, DeliveryNoteUncheckedUpdateWithoutOrderInput>
  }

  export type OrderCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
  }

  export type MedicationCreateNestedOneWithoutOrderItemsInput = {
    create?: XOR<MedicationCreateWithoutOrderItemsInput, MedicationUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutOrderItemsInput
    connect?: MedicationWhereUniqueInput
  }

  export type StockExitCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<StockExitCreateWithoutOrderItemInput, StockExitUncheckedCreateWithoutOrderItemInput> | StockExitCreateWithoutOrderItemInput[] | StockExitUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutOrderItemInput | StockExitCreateOrConnectWithoutOrderItemInput[]
    createMany?: StockExitCreateManyOrderItemInputEnvelope
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
  }

  export type StockExitUncheckedCreateNestedManyWithoutOrderItemInput = {
    create?: XOR<StockExitCreateWithoutOrderItemInput, StockExitUncheckedCreateWithoutOrderItemInput> | StockExitCreateWithoutOrderItemInput[] | StockExitUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutOrderItemInput | StockExitCreateOrConnectWithoutOrderItemInput[]
    createMany?: StockExitCreateManyOrderItemInputEnvelope
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumOrderItemStatusFieldUpdateOperationsInput = {
    set?: $Enums.OrderItemStatus
  }

  export type OrderUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderItemsInput
    upsert?: OrderUpsertWithoutOrderItemsInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderItemsInput, OrderUpdateWithoutOrderItemsInput>, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MedicationUpdateOneRequiredWithoutOrderItemsNestedInput = {
    create?: XOR<MedicationCreateWithoutOrderItemsInput, MedicationUncheckedCreateWithoutOrderItemsInput>
    connectOrCreate?: MedicationCreateOrConnectWithoutOrderItemsInput
    upsert?: MedicationUpsertWithoutOrderItemsInput
    connect?: MedicationWhereUniqueInput
    update?: XOR<XOR<MedicationUpdateToOneWithWhereWithoutOrderItemsInput, MedicationUpdateWithoutOrderItemsInput>, MedicationUncheckedUpdateWithoutOrderItemsInput>
  }

  export type StockExitUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<StockExitCreateWithoutOrderItemInput, StockExitUncheckedCreateWithoutOrderItemInput> | StockExitCreateWithoutOrderItemInput[] | StockExitUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutOrderItemInput | StockExitCreateOrConnectWithoutOrderItemInput[]
    upsert?: StockExitUpsertWithWhereUniqueWithoutOrderItemInput | StockExitUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: StockExitCreateManyOrderItemInputEnvelope
    set?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    disconnect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    delete?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    update?: StockExitUpdateWithWhereUniqueWithoutOrderItemInput | StockExitUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: StockExitUpdateManyWithWhereWithoutOrderItemInput | StockExitUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
  }

  export type StockExitUncheckedUpdateManyWithoutOrderItemNestedInput = {
    create?: XOR<StockExitCreateWithoutOrderItemInput, StockExitUncheckedCreateWithoutOrderItemInput> | StockExitCreateWithoutOrderItemInput[] | StockExitUncheckedCreateWithoutOrderItemInput[]
    connectOrCreate?: StockExitCreateOrConnectWithoutOrderItemInput | StockExitCreateOrConnectWithoutOrderItemInput[]
    upsert?: StockExitUpsertWithWhereUniqueWithoutOrderItemInput | StockExitUpsertWithWhereUniqueWithoutOrderItemInput[]
    createMany?: StockExitCreateManyOrderItemInputEnvelope
    set?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    disconnect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    delete?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    connect?: StockExitWhereUniqueInput | StockExitWhereUniqueInput[]
    update?: StockExitUpdateWithWhereUniqueWithoutOrderItemInput | StockExitUpdateWithWhereUniqueWithoutOrderItemInput[]
    updateMany?: StockExitUpdateManyWithWhereWithoutOrderItemInput | StockExitUpdateManyWithWhereWithoutOrderItemInput[]
    deleteMany?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutDeliveryNoteInput = {
    create?: XOR<OrderCreateWithoutDeliveryNoteInput, OrderUncheckedCreateWithoutDeliveryNoteInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryNoteInput
    connect?: OrderWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutDeliveryNoteNestedInput = {
    create?: XOR<OrderCreateWithoutDeliveryNoteInput, OrderUncheckedCreateWithoutDeliveryNoteInput>
    connectOrCreate?: OrderCreateOrConnectWithoutDeliveryNoteInput
    upsert?: OrderUpsertWithoutDeliveryNoteInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutDeliveryNoteInput, OrderUpdateWithoutDeliveryNoteInput>, OrderUncheckedUpdateWithoutDeliveryNoteInput>
  }

  export type EnumAlertTypeFieldUpdateOperationsInput = {
    set?: $Enums.AlertType
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumMedicationFormFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationForm | EnumMedicationFormFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationFormFilter<$PrismaModel> | $Enums.MedicationForm
  }

  export type NestedEnumPackagingUnitFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagingUnit | EnumPackagingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPackagingUnitFilter<$PrismaModel> | $Enums.PackagingUnit
  }

  export type NestedEnumMedicationFormWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MedicationForm | EnumMedicationFormFieldRefInput<$PrismaModel>
    in?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    notIn?: $Enums.MedicationForm[] | ListEnumMedicationFormFieldRefInput<$PrismaModel>
    not?: NestedEnumMedicationFormWithAggregatesFilter<$PrismaModel> | $Enums.MedicationForm
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMedicationFormFilter<$PrismaModel>
    _max?: NestedEnumMedicationFormFilter<$PrismaModel>
  }

  export type NestedEnumPackagingUnitWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PackagingUnit | EnumPackagingUnitFieldRefInput<$PrismaModel>
    in?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    notIn?: $Enums.PackagingUnit[] | ListEnumPackagingUnitFieldRefInput<$PrismaModel>
    not?: NestedEnumPackagingUnitWithAggregatesFilter<$PrismaModel> | $Enums.PackagingUnit
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPackagingUnitFilter<$PrismaModel>
    _max?: NestedEnumPackagingUnitFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedEnumExitReasonFilter<$PrismaModel = never> = {
    equals?: $Enums.ExitReason | EnumExitReasonFieldRefInput<$PrismaModel>
    in?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumExitReasonFilter<$PrismaModel> | $Enums.ExitReason
  }

  export type NestedEnumExitReasonWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ExitReason | EnumExitReasonFieldRefInput<$PrismaModel>
    in?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    notIn?: $Enums.ExitReason[] | ListEnumExitReasonFieldRefInput<$PrismaModel>
    not?: NestedEnumExitReasonWithAggregatesFilter<$PrismaModel> | $Enums.ExitReason
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumExitReasonFilter<$PrismaModel>
    _max?: NestedEnumExitReasonFilter<$PrismaModel>
  }

  export type NestedEnumOrderStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusFilter<$PrismaModel> | $Enums.OrderStatus
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderStatus | EnumOrderStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderStatus[] | ListEnumOrderStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderItemStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemStatus | EnumOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemStatusFilter<$PrismaModel> | $Enums.OrderItemStatus
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedEnumOrderItemStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OrderItemStatus | EnumOrderItemStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OrderItemStatus[] | ListEnumOrderItemStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOrderItemStatusWithAggregatesFilter<$PrismaModel> | $Enums.OrderItemStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOrderItemStatusFilter<$PrismaModel>
    _max?: NestedEnumOrderItemStatusFilter<$PrismaModel>
  }

  export type NestedEnumAlertTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeFilter<$PrismaModel> | $Enums.AlertType
  }

  export type NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertType | EnumAlertTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertType[] | ListEnumAlertTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertTypeWithAggregatesFilter<$PrismaModel> | $Enums.AlertType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertTypeFilter<$PrismaModel>
    _max?: NestedEnumAlertTypeFilter<$PrismaModel>
  }

  export type OrderCreateWithoutCreatedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    service: ServiceCreateNestedOneWithoutOrdersInput
    validatedBy?: UserCreateNestedOneWithoutValidatedOrdersInput
    preparedBy?: UserCreateNestedOneWithoutPreparedOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutCreatedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    validatedById?: string | null
    preparedById?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderCreateManyCreatedByInputEnvelope = {
    data: OrderCreateManyCreatedByInput | OrderCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutValidatedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    service: ServiceCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    preparedBy?: UserCreateNestedOneWithoutPreparedOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutValidatedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    preparedById?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutValidatedByInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutValidatedByInput, OrderUncheckedCreateWithoutValidatedByInput>
  }

  export type OrderCreateManyValidatedByInputEnvelope = {
    data: OrderCreateManyValidatedByInput | OrderCreateManyValidatedByInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutPreparedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    service: ServiceCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    validatedBy?: UserCreateNestedOneWithoutValidatedOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutPreparedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    validatedById?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutPreparedByInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutPreparedByInput, OrderUncheckedCreateWithoutPreparedByInput>
  }

  export type OrderCreateManyPreparedByInputEnvelope = {
    data: OrderCreateManyPreparedByInput | OrderCreateManyPreparedByInput[]
    skipDuplicates?: boolean
  }

  export type ServiceCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    orders?: OrderUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutUsersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutUsersInput, ServiceUncheckedCreateWithoutUsersInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutCreatedByInput, OrderUncheckedUpdateWithoutCreatedByInput>
    create: XOR<OrderCreateWithoutCreatedByInput, OrderUncheckedCreateWithoutCreatedByInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutCreatedByInput, OrderUncheckedUpdateWithoutCreatedByInput>
  }

  export type OrderUpdateManyWithWhereWithoutCreatedByInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: StringFilter<"Order"> | string
    orderNumber?: StringFilter<"Order"> | string
    status?: EnumOrderStatusFilter<"Order"> | $Enums.OrderStatus
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    validatedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    preparedAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    deliveredAt?: DateTimeNullableFilter<"Order"> | Date | string | null
    notes?: StringNullableFilter<"Order"> | string | null
    serviceId?: StringFilter<"Order"> | string
    createdById?: StringFilter<"Order"> | string
    validatedById?: StringNullableFilter<"Order"> | string | null
    preparedById?: StringNullableFilter<"Order"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutValidatedByInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutValidatedByInput, OrderUncheckedUpdateWithoutValidatedByInput>
    create: XOR<OrderCreateWithoutValidatedByInput, OrderUncheckedCreateWithoutValidatedByInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutValidatedByInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutValidatedByInput, OrderUncheckedUpdateWithoutValidatedByInput>
  }

  export type OrderUpdateManyWithWhereWithoutValidatedByInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutValidatedByInput>
  }

  export type OrderUpsertWithWhereUniqueWithoutPreparedByInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutPreparedByInput, OrderUncheckedUpdateWithoutPreparedByInput>
    create: XOR<OrderCreateWithoutPreparedByInput, OrderUncheckedCreateWithoutPreparedByInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutPreparedByInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutPreparedByInput, OrderUncheckedUpdateWithoutPreparedByInput>
  }

  export type OrderUpdateManyWithWhereWithoutPreparedByInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutPreparedByInput>
  }

  export type ServiceUpsertWithoutUsersInput = {
    update: XOR<ServiceUpdateWithoutUsersInput, ServiceUncheckedUpdateWithoutUsersInput>
    create: XOR<ServiceCreateWithoutUsersInput, ServiceUncheckedCreateWithoutUsersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutUsersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutUsersInput, ServiceUncheckedUpdateWithoutUsersInput>
  }

  export type ServiceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orders?: OrderUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserCreateWithoutServiceInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    validatedOrders?: OrderCreateNestedManyWithoutValidatedByInput
    preparedOrders?: OrderCreateNestedManyWithoutPreparedByInput
  }

  export type UserUncheckedCreateWithoutServiceInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    validatedOrders?: OrderUncheckedCreateNestedManyWithoutValidatedByInput
    preparedOrders?: OrderUncheckedCreateNestedManyWithoutPreparedByInput
  }

  export type UserCreateOrConnectWithoutServiceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput>
  }

  export type UserCreateManyServiceInputEnvelope = {
    data: UserCreateManyServiceInput | UserCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutServiceInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    validatedBy?: UserCreateNestedOneWithoutValidatedOrdersInput
    preparedBy?: UserCreateNestedOneWithoutPreparedOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutServiceInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    createdById: string
    validatedById?: string | null
    preparedById?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
    deliveryNote?: DeliveryNoteUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutServiceInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput>
  }

  export type OrderCreateManyServiceInputEnvelope = {
    data: OrderCreateManyServiceInput | OrderCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutServiceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutServiceInput, UserUncheckedUpdateWithoutServiceInput>
    create: XOR<UserCreateWithoutServiceInput, UserUncheckedCreateWithoutServiceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutServiceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutServiceInput, UserUncheckedUpdateWithoutServiceInput>
  }

  export type UserUpdateManyWithWhereWithoutServiceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutServiceInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    firstName?: StringFilter<"User"> | string
    lastName?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    isActive?: BoolFilter<"User"> | boolean
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    serviceId?: StringNullableFilter<"User"> | string | null
  }

  export type OrderUpsertWithWhereUniqueWithoutServiceInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutServiceInput, OrderUncheckedUpdateWithoutServiceInput>
    create: XOR<OrderCreateWithoutServiceInput, OrderUncheckedCreateWithoutServiceInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutServiceInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutServiceInput, OrderUncheckedUpdateWithoutServiceInput>
  }

  export type OrderUpdateManyWithWhereWithoutServiceInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutServiceInput>
  }

  export type StockEntryCreateWithoutSupplierInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: MedicationBatchCreateNestedOneWithoutStockEntriesInput
  }

  export type StockEntryUncheckedCreateWithoutSupplierInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
  }

  export type StockEntryCreateOrConnectWithoutSupplierInput = {
    where: StockEntryWhereUniqueInput
    create: XOR<StockEntryCreateWithoutSupplierInput, StockEntryUncheckedCreateWithoutSupplierInput>
  }

  export type StockEntryCreateManySupplierInputEnvelope = {
    data: StockEntryCreateManySupplierInput | StockEntryCreateManySupplierInput[]
    skipDuplicates?: boolean
  }

  export type StockEntryUpsertWithWhereUniqueWithoutSupplierInput = {
    where: StockEntryWhereUniqueInput
    update: XOR<StockEntryUpdateWithoutSupplierInput, StockEntryUncheckedUpdateWithoutSupplierInput>
    create: XOR<StockEntryCreateWithoutSupplierInput, StockEntryUncheckedCreateWithoutSupplierInput>
  }

  export type StockEntryUpdateWithWhereUniqueWithoutSupplierInput = {
    where: StockEntryWhereUniqueInput
    data: XOR<StockEntryUpdateWithoutSupplierInput, StockEntryUncheckedUpdateWithoutSupplierInput>
  }

  export type StockEntryUpdateManyWithWhereWithoutSupplierInput = {
    where: StockEntryScalarWhereInput
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyWithoutSupplierInput>
  }

  export type StockEntryScalarWhereInput = {
    AND?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
    OR?: StockEntryScalarWhereInput[]
    NOT?: StockEntryScalarWhereInput | StockEntryScalarWhereInput[]
    id?: StringFilter<"StockEntry"> | string
    quantity?: IntFilter<"StockEntry"> | number
    entryDate?: DateTimeFilter<"StockEntry"> | Date | string
    invoiceNumber?: StringNullableFilter<"StockEntry"> | string | null
    unitPrice?: FloatNullableFilter<"StockEntry"> | number | null
    createdAt?: DateTimeFilter<"StockEntry"> | Date | string
    updatedAt?: DateTimeFilter<"StockEntry"> | Date | string
    batchId?: StringFilter<"StockEntry"> | string
    supplierId?: StringFilter<"StockEntry"> | string
  }

  export type MedicationCreateWithoutTherapeuticClassInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subClass?: SubClassCreateNestedOneWithoutMedicationsInput
    batches?: MedicationBatchCreateNestedManyWithoutMedicationInput
    orderItems?: OrderItemCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutTherapeuticClassInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subClassId?: string | null
    batches?: MedicationBatchUncheckedCreateNestedManyWithoutMedicationInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutTherapeuticClassInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutTherapeuticClassInput, MedicationUncheckedCreateWithoutTherapeuticClassInput>
  }

  export type MedicationCreateManyTherapeuticClassInputEnvelope = {
    data: MedicationCreateManyTherapeuticClassInput | MedicationCreateManyTherapeuticClassInput[]
    skipDuplicates?: boolean
  }

  export type SubClassCreateWithoutTherapeuticClassInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutSubClassInput
  }

  export type SubClassUncheckedCreateWithoutTherapeuticClassInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutSubClassInput
  }

  export type SubClassCreateOrConnectWithoutTherapeuticClassInput = {
    where: SubClassWhereUniqueInput
    create: XOR<SubClassCreateWithoutTherapeuticClassInput, SubClassUncheckedCreateWithoutTherapeuticClassInput>
  }

  export type SubClassCreateManyTherapeuticClassInputEnvelope = {
    data: SubClassCreateManyTherapeuticClassInput | SubClassCreateManyTherapeuticClassInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithWhereUniqueWithoutTherapeuticClassInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutTherapeuticClassInput, MedicationUncheckedUpdateWithoutTherapeuticClassInput>
    create: XOR<MedicationCreateWithoutTherapeuticClassInput, MedicationUncheckedCreateWithoutTherapeuticClassInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutTherapeuticClassInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutTherapeuticClassInput, MedicationUncheckedUpdateWithoutTherapeuticClassInput>
  }

  export type MedicationUpdateManyWithWhereWithoutTherapeuticClassInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutTherapeuticClassInput>
  }

  export type MedicationScalarWhereInput = {
    AND?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    OR?: MedicationScalarWhereInput[]
    NOT?: MedicationScalarWhereInput | MedicationScalarWhereInput[]
    id?: StringFilter<"Medication"> | string
    dci?: StringFilter<"Medication"> | string
    codedci?: StringFilter<"Medication"> | string
    commercialName?: StringFilter<"Medication"> | string
    form?: EnumMedicationFormFilter<"Medication"> | $Enums.MedicationForm
    dosage?: StringFilter<"Medication"> | string
    packagingUnit?: EnumPackagingUnitFilter<"Medication"> | $Enums.PackagingUnit
    unitsPerPackage?: IntFilter<"Medication"> | number
    minStockLevel?: IntFilter<"Medication"> | number
    isActive?: BoolFilter<"Medication"> | boolean
    createdAt?: DateTimeFilter<"Medication"> | Date | string
    updatedAt?: DateTimeFilter<"Medication"> | Date | string
    therapeuticClassId?: StringFilter<"Medication"> | string
    subClassId?: StringNullableFilter<"Medication"> | string | null
  }

  export type SubClassUpsertWithWhereUniqueWithoutTherapeuticClassInput = {
    where: SubClassWhereUniqueInput
    update: XOR<SubClassUpdateWithoutTherapeuticClassInput, SubClassUncheckedUpdateWithoutTherapeuticClassInput>
    create: XOR<SubClassCreateWithoutTherapeuticClassInput, SubClassUncheckedCreateWithoutTherapeuticClassInput>
  }

  export type SubClassUpdateWithWhereUniqueWithoutTherapeuticClassInput = {
    where: SubClassWhereUniqueInput
    data: XOR<SubClassUpdateWithoutTherapeuticClassInput, SubClassUncheckedUpdateWithoutTherapeuticClassInput>
  }

  export type SubClassUpdateManyWithWhereWithoutTherapeuticClassInput = {
    where: SubClassScalarWhereInput
    data: XOR<SubClassUpdateManyMutationInput, SubClassUncheckedUpdateManyWithoutTherapeuticClassInput>
  }

  export type SubClassScalarWhereInput = {
    AND?: SubClassScalarWhereInput | SubClassScalarWhereInput[]
    OR?: SubClassScalarWhereInput[]
    NOT?: SubClassScalarWhereInput | SubClassScalarWhereInput[]
    id?: StringFilter<"SubClass"> | string
    code?: StringFilter<"SubClass"> | string
    name?: StringFilter<"SubClass"> | string
    description?: StringNullableFilter<"SubClass"> | string | null
    isActive?: BoolFilter<"SubClass"> | boolean
    createdAt?: DateTimeFilter<"SubClass"> | Date | string
    updatedAt?: DateTimeFilter<"SubClass"> | Date | string
    therapeuticClassId?: StringFilter<"SubClass"> | string
  }

  export type TherapeuticClassCreateWithoutSubClassesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationCreateNestedManyWithoutTherapeuticClassInput
  }

  export type TherapeuticClassUncheckedCreateWithoutSubClassesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    medications?: MedicationUncheckedCreateNestedManyWithoutTherapeuticClassInput
  }

  export type TherapeuticClassCreateOrConnectWithoutSubClassesInput = {
    where: TherapeuticClassWhereUniqueInput
    create: XOR<TherapeuticClassCreateWithoutSubClassesInput, TherapeuticClassUncheckedCreateWithoutSubClassesInput>
  }

  export type MedicationCreateWithoutSubClassInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClass: TherapeuticClassCreateNestedOneWithoutMedicationsInput
    batches?: MedicationBatchCreateNestedManyWithoutMedicationInput
    orderItems?: OrderItemCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutSubClassInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
    batches?: MedicationBatchUncheckedCreateNestedManyWithoutMedicationInput
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutSubClassInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutSubClassInput, MedicationUncheckedCreateWithoutSubClassInput>
  }

  export type MedicationCreateManySubClassInputEnvelope = {
    data: MedicationCreateManySubClassInput | MedicationCreateManySubClassInput[]
    skipDuplicates?: boolean
  }

  export type TherapeuticClassUpsertWithoutSubClassesInput = {
    update: XOR<TherapeuticClassUpdateWithoutSubClassesInput, TherapeuticClassUncheckedUpdateWithoutSubClassesInput>
    create: XOR<TherapeuticClassCreateWithoutSubClassesInput, TherapeuticClassUncheckedCreateWithoutSubClassesInput>
    where?: TherapeuticClassWhereInput
  }

  export type TherapeuticClassUpdateToOneWithWhereWithoutSubClassesInput = {
    where?: TherapeuticClassWhereInput
    data: XOR<TherapeuticClassUpdateWithoutSubClassesInput, TherapeuticClassUncheckedUpdateWithoutSubClassesInput>
  }

  export type TherapeuticClassUpdateWithoutSubClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutTherapeuticClassNestedInput
  }

  export type TherapeuticClassUncheckedUpdateWithoutSubClassesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutTherapeuticClassNestedInput
  }

  export type MedicationUpsertWithWhereUniqueWithoutSubClassInput = {
    where: MedicationWhereUniqueInput
    update: XOR<MedicationUpdateWithoutSubClassInput, MedicationUncheckedUpdateWithoutSubClassInput>
    create: XOR<MedicationCreateWithoutSubClassInput, MedicationUncheckedCreateWithoutSubClassInput>
  }

  export type MedicationUpdateWithWhereUniqueWithoutSubClassInput = {
    where: MedicationWhereUniqueInput
    data: XOR<MedicationUpdateWithoutSubClassInput, MedicationUncheckedUpdateWithoutSubClassInput>
  }

  export type MedicationUpdateManyWithWhereWithoutSubClassInput = {
    where: MedicationScalarWhereInput
    data: XOR<MedicationUpdateManyMutationInput, MedicationUncheckedUpdateManyWithoutSubClassInput>
  }

  export type TherapeuticClassCreateWithoutMedicationsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subClasses?: SubClassCreateNestedManyWithoutTherapeuticClassInput
  }

  export type TherapeuticClassUncheckedCreateWithoutMedicationsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subClasses?: SubClassUncheckedCreateNestedManyWithoutTherapeuticClassInput
  }

  export type TherapeuticClassCreateOrConnectWithoutMedicationsInput = {
    where: TherapeuticClassWhereUniqueInput
    create: XOR<TherapeuticClassCreateWithoutMedicationsInput, TherapeuticClassUncheckedCreateWithoutMedicationsInput>
  }

  export type SubClassCreateWithoutMedicationsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClass: TherapeuticClassCreateNestedOneWithoutSubClassesInput
  }

  export type SubClassUncheckedCreateWithoutMedicationsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
  }

  export type SubClassCreateOrConnectWithoutMedicationsInput = {
    where: SubClassWhereUniqueInput
    create: XOR<SubClassCreateWithoutMedicationsInput, SubClassUncheckedCreateWithoutMedicationsInput>
  }

  export type MedicationBatchCreateWithoutMedicationInput = {
    id?: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockEntries?: StockEntryCreateNestedManyWithoutBatchInput
    stockExits?: StockExitCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchUncheckedCreateWithoutMedicationInput = {
    id?: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutBatchInput
    stockExits?: StockExitUncheckedCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchCreateOrConnectWithoutMedicationInput = {
    where: MedicationBatchWhereUniqueInput
    create: XOR<MedicationBatchCreateWithoutMedicationInput, MedicationBatchUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationBatchCreateManyMedicationInputEnvelope = {
    data: MedicationBatchCreateManyMedicationInput | MedicationBatchCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type OrderItemCreateWithoutMedicationInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    stockExits?: StockExitCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutMedicationInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    stockExits?: StockExitUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutMedicationInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutMedicationInput, OrderItemUncheckedCreateWithoutMedicationInput>
  }

  export type OrderItemCreateManyMedicationInputEnvelope = {
    data: OrderItemCreateManyMedicationInput | OrderItemCreateManyMedicationInput[]
    skipDuplicates?: boolean
  }

  export type TherapeuticClassUpsertWithoutMedicationsInput = {
    update: XOR<TherapeuticClassUpdateWithoutMedicationsInput, TherapeuticClassUncheckedUpdateWithoutMedicationsInput>
    create: XOR<TherapeuticClassCreateWithoutMedicationsInput, TherapeuticClassUncheckedCreateWithoutMedicationsInput>
    where?: TherapeuticClassWhereInput
  }

  export type TherapeuticClassUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: TherapeuticClassWhereInput
    data: XOR<TherapeuticClassUpdateWithoutMedicationsInput, TherapeuticClassUncheckedUpdateWithoutMedicationsInput>
  }

  export type TherapeuticClassUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subClasses?: SubClassUpdateManyWithoutTherapeuticClassNestedInput
  }

  export type TherapeuticClassUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subClasses?: SubClassUncheckedUpdateManyWithoutTherapeuticClassNestedInput
  }

  export type SubClassUpsertWithoutMedicationsInput = {
    update: XOR<SubClassUpdateWithoutMedicationsInput, SubClassUncheckedUpdateWithoutMedicationsInput>
    create: XOR<SubClassCreateWithoutMedicationsInput, SubClassUncheckedCreateWithoutMedicationsInput>
    where?: SubClassWhereInput
  }

  export type SubClassUpdateToOneWithWhereWithoutMedicationsInput = {
    where?: SubClassWhereInput
    data: XOR<SubClassUpdateWithoutMedicationsInput, SubClassUncheckedUpdateWithoutMedicationsInput>
  }

  export type SubClassUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClass?: TherapeuticClassUpdateOneRequiredWithoutSubClassesNestedInput
  }

  export type SubClassUncheckedUpdateWithoutMedicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationBatchUpsertWithWhereUniqueWithoutMedicationInput = {
    where: MedicationBatchWhereUniqueInput
    update: XOR<MedicationBatchUpdateWithoutMedicationInput, MedicationBatchUncheckedUpdateWithoutMedicationInput>
    create: XOR<MedicationBatchCreateWithoutMedicationInput, MedicationBatchUncheckedCreateWithoutMedicationInput>
  }

  export type MedicationBatchUpdateWithWhereUniqueWithoutMedicationInput = {
    where: MedicationBatchWhereUniqueInput
    data: XOR<MedicationBatchUpdateWithoutMedicationInput, MedicationBatchUncheckedUpdateWithoutMedicationInput>
  }

  export type MedicationBatchUpdateManyWithWhereWithoutMedicationInput = {
    where: MedicationBatchScalarWhereInput
    data: XOR<MedicationBatchUpdateManyMutationInput, MedicationBatchUncheckedUpdateManyWithoutMedicationInput>
  }

  export type MedicationBatchScalarWhereInput = {
    AND?: MedicationBatchScalarWhereInput | MedicationBatchScalarWhereInput[]
    OR?: MedicationBatchScalarWhereInput[]
    NOT?: MedicationBatchScalarWhereInput | MedicationBatchScalarWhereInput[]
    id?: StringFilter<"MedicationBatch"> | string
    medicationId?: StringFilter<"MedicationBatch"> | string
    batchNumber?: StringFilter<"MedicationBatch"> | string
    expirationDate?: DateTimeFilter<"MedicationBatch"> | Date | string
    currentQuantity?: IntFilter<"MedicationBatch"> | number
    initialQuantity?: IntFilter<"MedicationBatch"> | number
    createdAt?: DateTimeFilter<"MedicationBatch"> | Date | string
    updatedAt?: DateTimeFilter<"MedicationBatch"> | Date | string
  }

  export type OrderItemUpsertWithWhereUniqueWithoutMedicationInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutMedicationInput, OrderItemUncheckedUpdateWithoutMedicationInput>
    create: XOR<OrderItemCreateWithoutMedicationInput, OrderItemUncheckedCreateWithoutMedicationInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutMedicationInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutMedicationInput, OrderItemUncheckedUpdateWithoutMedicationInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutMedicationInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutMedicationInput>
  }

  export type OrderItemScalarWhereInput = {
    AND?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    OR?: OrderItemScalarWhereInput[]
    NOT?: OrderItemScalarWhereInput | OrderItemScalarWhereInput[]
    id?: StringFilter<"OrderItem"> | string
    requestedQuantity?: IntFilter<"OrderItem"> | number
    validatedQuantity?: IntNullableFilter<"OrderItem"> | number | null
    preparedQuantity?: IntNullableFilter<"OrderItem"> | number | null
    status?: EnumOrderItemStatusFilter<"OrderItem"> | $Enums.OrderItemStatus
    notes?: StringNullableFilter<"OrderItem"> | string | null
    createdAt?: DateTimeFilter<"OrderItem"> | Date | string
    updatedAt?: DateTimeFilter<"OrderItem"> | Date | string
    orderId?: StringFilter<"OrderItem"> | string
    medicationId?: StringFilter<"OrderItem"> | string
  }

  export type MedicationCreateWithoutBatchesInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClass: TherapeuticClassCreateNestedOneWithoutMedicationsInput
    subClass?: SubClassCreateNestedOneWithoutMedicationsInput
    orderItems?: OrderItemCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutBatchesInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
    subClassId?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutBatchesInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutBatchesInput, MedicationUncheckedCreateWithoutBatchesInput>
  }

  export type StockEntryCreateWithoutBatchInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplier: SupplierCreateNestedOneWithoutStockEntriesInput
  }

  export type StockEntryUncheckedCreateWithoutBatchInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId: string
  }

  export type StockEntryCreateOrConnectWithoutBatchInput = {
    where: StockEntryWhereUniqueInput
    create: XOR<StockEntryCreateWithoutBatchInput, StockEntryUncheckedCreateWithoutBatchInput>
  }

  export type StockEntryCreateManyBatchInputEnvelope = {
    data: StockEntryCreateManyBatchInput | StockEntryCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type StockExitCreateWithoutBatchInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItem?: OrderItemCreateNestedOneWithoutStockExitsInput
  }

  export type StockExitUncheckedCreateWithoutBatchInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItemId?: string | null
  }

  export type StockExitCreateOrConnectWithoutBatchInput = {
    where: StockExitWhereUniqueInput
    create: XOR<StockExitCreateWithoutBatchInput, StockExitUncheckedCreateWithoutBatchInput>
  }

  export type StockExitCreateManyBatchInputEnvelope = {
    data: StockExitCreateManyBatchInput | StockExitCreateManyBatchInput[]
    skipDuplicates?: boolean
  }

  export type MedicationUpsertWithoutBatchesInput = {
    update: XOR<MedicationUpdateWithoutBatchesInput, MedicationUncheckedUpdateWithoutBatchesInput>
    create: XOR<MedicationCreateWithoutBatchesInput, MedicationUncheckedCreateWithoutBatchesInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutBatchesInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutBatchesInput, MedicationUncheckedUpdateWithoutBatchesInput>
  }

  export type MedicationUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClass?: TherapeuticClassUpdateOneRequiredWithoutMedicationsNestedInput
    subClass?: SubClassUpdateOneWithoutMedicationsNestedInput
    orderItems?: OrderItemUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutBatchesInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
    subClassId?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type StockEntryUpsertWithWhereUniqueWithoutBatchInput = {
    where: StockEntryWhereUniqueInput
    update: XOR<StockEntryUpdateWithoutBatchInput, StockEntryUncheckedUpdateWithoutBatchInput>
    create: XOR<StockEntryCreateWithoutBatchInput, StockEntryUncheckedCreateWithoutBatchInput>
  }

  export type StockEntryUpdateWithWhereUniqueWithoutBatchInput = {
    where: StockEntryWhereUniqueInput
    data: XOR<StockEntryUpdateWithoutBatchInput, StockEntryUncheckedUpdateWithoutBatchInput>
  }

  export type StockEntryUpdateManyWithWhereWithoutBatchInput = {
    where: StockEntryScalarWhereInput
    data: XOR<StockEntryUpdateManyMutationInput, StockEntryUncheckedUpdateManyWithoutBatchInput>
  }

  export type StockExitUpsertWithWhereUniqueWithoutBatchInput = {
    where: StockExitWhereUniqueInput
    update: XOR<StockExitUpdateWithoutBatchInput, StockExitUncheckedUpdateWithoutBatchInput>
    create: XOR<StockExitCreateWithoutBatchInput, StockExitUncheckedCreateWithoutBatchInput>
  }

  export type StockExitUpdateWithWhereUniqueWithoutBatchInput = {
    where: StockExitWhereUniqueInput
    data: XOR<StockExitUpdateWithoutBatchInput, StockExitUncheckedUpdateWithoutBatchInput>
  }

  export type StockExitUpdateManyWithWhereWithoutBatchInput = {
    where: StockExitScalarWhereInput
    data: XOR<StockExitUpdateManyMutationInput, StockExitUncheckedUpdateManyWithoutBatchInput>
  }

  export type StockExitScalarWhereInput = {
    AND?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
    OR?: StockExitScalarWhereInput[]
    NOT?: StockExitScalarWhereInput | StockExitScalarWhereInput[]
    id?: StringFilter<"StockExit"> | string
    quantity?: IntFilter<"StockExit"> | number
    exitDate?: DateTimeFilter<"StockExit"> | Date | string
    reason?: EnumExitReasonFilter<"StockExit"> | $Enums.ExitReason
    createdAt?: DateTimeFilter<"StockExit"> | Date | string
    updatedAt?: DateTimeFilter<"StockExit"> | Date | string
    batchId?: StringFilter<"StockExit"> | string
    orderItemId?: StringNullableFilter<"StockExit"> | string | null
  }

  export type MedicationBatchCreateWithoutStockEntriesInput = {
    id?: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutBatchesInput
    stockExits?: StockExitCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchUncheckedCreateWithoutStockEntriesInput = {
    id?: string
    medicationId: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockExits?: StockExitUncheckedCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchCreateOrConnectWithoutStockEntriesInput = {
    where: MedicationBatchWhereUniqueInput
    create: XOR<MedicationBatchCreateWithoutStockEntriesInput, MedicationBatchUncheckedCreateWithoutStockEntriesInput>
  }

  export type SupplierCreateWithoutStockEntriesInput = {
    id?: string
    name: string
    contactName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    nif: string
    rc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierUncheckedCreateWithoutStockEntriesInput = {
    id?: string
    name: string
    contactName?: string | null
    email?: string | null
    phone?: string | null
    address?: string | null
    nif: string
    rc: string
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SupplierCreateOrConnectWithoutStockEntriesInput = {
    where: SupplierWhereUniqueInput
    create: XOR<SupplierCreateWithoutStockEntriesInput, SupplierUncheckedCreateWithoutStockEntriesInput>
  }

  export type MedicationBatchUpsertWithoutStockEntriesInput = {
    update: XOR<MedicationBatchUpdateWithoutStockEntriesInput, MedicationBatchUncheckedUpdateWithoutStockEntriesInput>
    create: XOR<MedicationBatchCreateWithoutStockEntriesInput, MedicationBatchUncheckedCreateWithoutStockEntriesInput>
    where?: MedicationBatchWhereInput
  }

  export type MedicationBatchUpdateToOneWithWhereWithoutStockEntriesInput = {
    where?: MedicationBatchWhereInput
    data: XOR<MedicationBatchUpdateWithoutStockEntriesInput, MedicationBatchUncheckedUpdateWithoutStockEntriesInput>
  }

  export type MedicationBatchUpdateWithoutStockEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutBatchesNestedInput
    stockExits?: StockExitUpdateManyWithoutBatchNestedInput
  }

  export type MedicationBatchUncheckedUpdateWithoutStockEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockExits?: StockExitUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type SupplierUpsertWithoutStockEntriesInput = {
    update: XOR<SupplierUpdateWithoutStockEntriesInput, SupplierUncheckedUpdateWithoutStockEntriesInput>
    create: XOR<SupplierCreateWithoutStockEntriesInput, SupplierUncheckedCreateWithoutStockEntriesInput>
    where?: SupplierWhereInput
  }

  export type SupplierUpdateToOneWithWhereWithoutStockEntriesInput = {
    where?: SupplierWhereInput
    data: XOR<SupplierUpdateWithoutStockEntriesInput, SupplierUncheckedUpdateWithoutStockEntriesInput>
  }

  export type SupplierUpdateWithoutStockEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: StringFieldUpdateOperationsInput | string
    rc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SupplierUncheckedUpdateWithoutStockEntriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    contactName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    nif?: StringFieldUpdateOperationsInput | string
    rc?: StringFieldUpdateOperationsInput | string
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationBatchCreateWithoutStockExitsInput = {
    id?: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutBatchesInput
    stockEntries?: StockEntryCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchUncheckedCreateWithoutStockExitsInput = {
    id?: string
    medicationId: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
    stockEntries?: StockEntryUncheckedCreateNestedManyWithoutBatchInput
  }

  export type MedicationBatchCreateOrConnectWithoutStockExitsInput = {
    where: MedicationBatchWhereUniqueInput
    create: XOR<MedicationBatchCreateWithoutStockExitsInput, MedicationBatchUncheckedCreateWithoutStockExitsInput>
  }

  export type OrderItemCreateWithoutStockExitsInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    order: OrderCreateNestedOneWithoutOrderItemsInput
    medication: MedicationCreateNestedOneWithoutOrderItemsInput
  }

  export type OrderItemUncheckedCreateWithoutStockExitsInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
    medicationId: string
  }

  export type OrderItemCreateOrConnectWithoutStockExitsInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutStockExitsInput, OrderItemUncheckedCreateWithoutStockExitsInput>
  }

  export type MedicationBatchUpsertWithoutStockExitsInput = {
    update: XOR<MedicationBatchUpdateWithoutStockExitsInput, MedicationBatchUncheckedUpdateWithoutStockExitsInput>
    create: XOR<MedicationBatchCreateWithoutStockExitsInput, MedicationBatchUncheckedCreateWithoutStockExitsInput>
    where?: MedicationBatchWhereInput
  }

  export type MedicationBatchUpdateToOneWithWhereWithoutStockExitsInput = {
    where?: MedicationBatchWhereInput
    data: XOR<MedicationBatchUpdateWithoutStockExitsInput, MedicationBatchUncheckedUpdateWithoutStockExitsInput>
  }

  export type MedicationBatchUpdateWithoutStockExitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutBatchesNestedInput
    stockEntries?: StockEntryUpdateManyWithoutBatchNestedInput
  }

  export type MedicationBatchUncheckedUpdateWithoutStockExitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockEntries?: StockEntryUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type OrderItemUpsertWithoutStockExitsInput = {
    update: XOR<OrderItemUpdateWithoutStockExitsInput, OrderItemUncheckedUpdateWithoutStockExitsInput>
    create: XOR<OrderItemCreateWithoutStockExitsInput, OrderItemUncheckedCreateWithoutStockExitsInput>
    where?: OrderItemWhereInput
  }

  export type OrderItemUpdateToOneWithWhereWithoutStockExitsInput = {
    where?: OrderItemWhereInput
    data: XOR<OrderItemUpdateWithoutStockExitsInput, OrderItemUncheckedUpdateWithoutStockExitsInput>
  }

  export type OrderItemUpdateWithoutStockExitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    medication?: MedicationUpdateOneRequiredWithoutOrderItemsNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutStockExitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    medicationId?: StringFieldUpdateOperationsInput | string
  }

  export type ServiceCreateWithoutOrdersInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutServiceInput
  }

  export type ServiceUncheckedCreateWithoutOrdersInput = {
    id?: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServiceCreateOrConnectWithoutOrdersInput = {
    where: ServiceWhereUniqueInput
    create: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
  }

  export type UserCreateWithoutCreatedOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedOrders?: OrderCreateNestedManyWithoutValidatedByInput
    preparedOrders?: OrderCreateNestedManyWithoutPreparedByInput
    service?: ServiceCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutCreatedOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
    validatedOrders?: OrderUncheckedCreateNestedManyWithoutValidatedByInput
    preparedOrders?: OrderUncheckedCreateNestedManyWithoutPreparedByInput
  }

  export type UserCreateOrConnectWithoutCreatedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
  }

  export type UserCreateWithoutValidatedOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    preparedOrders?: OrderCreateNestedManyWithoutPreparedByInput
    service?: ServiceCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutValidatedOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    preparedOrders?: OrderUncheckedCreateNestedManyWithoutPreparedByInput
  }

  export type UserCreateOrConnectWithoutValidatedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutValidatedOrdersInput, UserUncheckedCreateWithoutValidatedOrdersInput>
  }

  export type UserCreateWithoutPreparedOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    createdOrders?: OrderCreateNestedManyWithoutCreatedByInput
    validatedOrders?: OrderCreateNestedManyWithoutValidatedByInput
    service?: ServiceCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateWithoutPreparedOrdersInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    serviceId?: string | null
    createdOrders?: OrderUncheckedCreateNestedManyWithoutCreatedByInput
    validatedOrders?: OrderUncheckedCreateNestedManyWithoutValidatedByInput
  }

  export type UserCreateOrConnectWithoutPreparedOrdersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPreparedOrdersInput, UserUncheckedCreateWithoutPreparedOrdersInput>
  }

  export type OrderItemCreateWithoutOrderInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medication: MedicationCreateNestedOneWithoutOrderItemsInput
    stockExits?: StockExitCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemUncheckedCreateWithoutOrderInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationId: string
    stockExits?: StockExitUncheckedCreateNestedManyWithoutOrderItemInput
  }

  export type OrderItemCreateOrConnectWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemCreateManyOrderInputEnvelope = {
    data: OrderItemCreateManyOrderInput | OrderItemCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type DeliveryNoteCreateWithoutOrderInput = {
    id?: string
    noteNumber: string
    createdAt?: Date | string
    printedAt?: Date | string | null
  }

  export type DeliveryNoteUncheckedCreateWithoutOrderInput = {
    id?: string
    noteNumber: string
    createdAt?: Date | string
    printedAt?: Date | string | null
  }

  export type DeliveryNoteCreateOrConnectWithoutOrderInput = {
    where: DeliveryNoteWhereUniqueInput
    create: XOR<DeliveryNoteCreateWithoutOrderInput, DeliveryNoteUncheckedCreateWithoutOrderInput>
  }

  export type ServiceUpsertWithoutOrdersInput = {
    update: XOR<ServiceUpdateWithoutOrdersInput, ServiceUncheckedUpdateWithoutOrdersInput>
    create: XOR<ServiceCreateWithoutOrdersInput, ServiceUncheckedCreateWithoutOrdersInput>
    where?: ServiceWhereInput
  }

  export type ServiceUpdateToOneWithWhereWithoutOrdersInput = {
    where?: ServiceWhereInput
    data: XOR<ServiceUpdateWithoutOrdersInput, ServiceUncheckedUpdateWithoutOrdersInput>
  }

  export type ServiceUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutServiceNestedInput
  }

  export type ServiceUncheckedUpdateWithoutOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type UserUpsertWithoutCreatedOrdersInput = {
    update: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
    create: XOR<UserCreateWithoutCreatedOrdersInput, UserUncheckedCreateWithoutCreatedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedOrdersInput, UserUncheckedUpdateWithoutCreatedOrdersInput>
  }

  export type UserUpdateWithoutCreatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedOrders?: OrderUpdateManyWithoutValidatedByNestedInput
    preparedOrders?: OrderUpdateManyWithoutPreparedByNestedInput
    service?: ServiceUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    validatedOrders?: OrderUncheckedUpdateManyWithoutValidatedByNestedInput
    preparedOrders?: OrderUncheckedUpdateManyWithoutPreparedByNestedInput
  }

  export type UserUpsertWithoutValidatedOrdersInput = {
    update: XOR<UserUpdateWithoutValidatedOrdersInput, UserUncheckedUpdateWithoutValidatedOrdersInput>
    create: XOR<UserCreateWithoutValidatedOrdersInput, UserUncheckedCreateWithoutValidatedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutValidatedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutValidatedOrdersInput, UserUncheckedUpdateWithoutValidatedOrdersInput>
  }

  export type UserUpdateWithoutValidatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    preparedOrders?: OrderUpdateManyWithoutPreparedByNestedInput
    service?: ServiceUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutValidatedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    preparedOrders?: OrderUncheckedUpdateManyWithoutPreparedByNestedInput
  }

  export type UserUpsertWithoutPreparedOrdersInput = {
    update: XOR<UserUpdateWithoutPreparedOrdersInput, UserUncheckedUpdateWithoutPreparedOrdersInput>
    create: XOR<UserCreateWithoutPreparedOrdersInput, UserUncheckedCreateWithoutPreparedOrdersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPreparedOrdersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPreparedOrdersInput, UserUncheckedUpdateWithoutPreparedOrdersInput>
  }

  export type UserUpdateWithoutPreparedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    validatedOrders?: OrderUpdateManyWithoutValidatedByNestedInput
    service?: ServiceUpdateOneWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateWithoutPreparedOrdersInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    serviceId?: NullableStringFieldUpdateOperationsInput | string | null
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    validatedOrders?: OrderUncheckedUpdateManyWithoutValidatedByNestedInput
  }

  export type OrderItemUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    update: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderItemCreateWithoutOrderInput, OrderItemUncheckedCreateWithoutOrderInput>
  }

  export type OrderItemUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderItemWhereUniqueInput
    data: XOR<OrderItemUpdateWithoutOrderInput, OrderItemUncheckedUpdateWithoutOrderInput>
  }

  export type OrderItemUpdateManyWithWhereWithoutOrderInput = {
    where: OrderItemScalarWhereInput
    data: XOR<OrderItemUpdateManyMutationInput, OrderItemUncheckedUpdateManyWithoutOrderInput>
  }

  export type DeliveryNoteUpsertWithoutOrderInput = {
    update: XOR<DeliveryNoteUpdateWithoutOrderInput, DeliveryNoteUncheckedUpdateWithoutOrderInput>
    create: XOR<DeliveryNoteCreateWithoutOrderInput, DeliveryNoteUncheckedCreateWithoutOrderInput>
    where?: DeliveryNoteWhereInput
  }

  export type DeliveryNoteUpdateToOneWithWhereWithoutOrderInput = {
    where?: DeliveryNoteWhereInput
    data: XOR<DeliveryNoteUpdateWithoutOrderInput, DeliveryNoteUncheckedUpdateWithoutOrderInput>
  }

  export type DeliveryNoteUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type DeliveryNoteUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    noteNumber?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    printedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OrderCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    service: ServiceCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    validatedBy?: UserCreateNestedOneWithoutValidatedOrdersInput
    preparedBy?: UserCreateNestedOneWithoutPreparedOrdersInput
    deliveryNote?: DeliveryNoteCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    validatedById?: string | null
    preparedById?: string | null
    deliveryNote?: DeliveryNoteUncheckedCreateNestedOneWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutOrderItemsInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
  }

  export type MedicationCreateWithoutOrderItemsInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClass: TherapeuticClassCreateNestedOneWithoutMedicationsInput
    subClass?: SubClassCreateNestedOneWithoutMedicationsInput
    batches?: MedicationBatchCreateNestedManyWithoutMedicationInput
  }

  export type MedicationUncheckedCreateWithoutOrderItemsInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
    subClassId?: string | null
    batches?: MedicationBatchUncheckedCreateNestedManyWithoutMedicationInput
  }

  export type MedicationCreateOrConnectWithoutOrderItemsInput = {
    where: MedicationWhereUniqueInput
    create: XOR<MedicationCreateWithoutOrderItemsInput, MedicationUncheckedCreateWithoutOrderItemsInput>
  }

  export type StockExitCreateWithoutOrderItemInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    batch: MedicationBatchCreateNestedOneWithoutStockExitsInput
  }

  export type StockExitUncheckedCreateWithoutOrderItemInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
  }

  export type StockExitCreateOrConnectWithoutOrderItemInput = {
    where: StockExitWhereUniqueInput
    create: XOR<StockExitCreateWithoutOrderItemInput, StockExitUncheckedCreateWithoutOrderItemInput>
  }

  export type StockExitCreateManyOrderItemInputEnvelope = {
    data: StockExitCreateManyOrderItemInput | StockExitCreateManyOrderItemInput[]
    skipDuplicates?: boolean
  }

  export type OrderUpsertWithoutOrderItemsInput = {
    update: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<OrderCreateWithoutOrderItemsInput, OrderUncheckedCreateWithoutOrderItemsInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderItemsInput, OrderUncheckedUpdateWithoutOrderItemsInput>
  }

  export type OrderUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedOrdersNestedInput
    preparedBy?: UserUpdateOneWithoutPreparedOrdersNestedInput
    deliveryNote?: DeliveryNoteUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
    deliveryNote?: DeliveryNoteUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type MedicationUpsertWithoutOrderItemsInput = {
    update: XOR<MedicationUpdateWithoutOrderItemsInput, MedicationUncheckedUpdateWithoutOrderItemsInput>
    create: XOR<MedicationCreateWithoutOrderItemsInput, MedicationUncheckedCreateWithoutOrderItemsInput>
    where?: MedicationWhereInput
  }

  export type MedicationUpdateToOneWithWhereWithoutOrderItemsInput = {
    where?: MedicationWhereInput
    data: XOR<MedicationUpdateWithoutOrderItemsInput, MedicationUncheckedUpdateWithoutOrderItemsInput>
  }

  export type MedicationUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClass?: TherapeuticClassUpdateOneRequiredWithoutMedicationsNestedInput
    subClass?: SubClassUpdateOneWithoutMedicationsNestedInput
    batches?: MedicationBatchUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutOrderItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
    subClassId?: NullableStringFieldUpdateOperationsInput | string | null
    batches?: MedicationBatchUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type StockExitUpsertWithWhereUniqueWithoutOrderItemInput = {
    where: StockExitWhereUniqueInput
    update: XOR<StockExitUpdateWithoutOrderItemInput, StockExitUncheckedUpdateWithoutOrderItemInput>
    create: XOR<StockExitCreateWithoutOrderItemInput, StockExitUncheckedCreateWithoutOrderItemInput>
  }

  export type StockExitUpdateWithWhereUniqueWithoutOrderItemInput = {
    where: StockExitWhereUniqueInput
    data: XOR<StockExitUpdateWithoutOrderItemInput, StockExitUncheckedUpdateWithoutOrderItemInput>
  }

  export type StockExitUpdateManyWithWhereWithoutOrderItemInput = {
    where: StockExitScalarWhereInput
    data: XOR<StockExitUpdateManyMutationInput, StockExitUncheckedUpdateManyWithoutOrderItemInput>
  }

  export type OrderCreateWithoutDeliveryNoteInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    service: ServiceCreateNestedOneWithoutOrdersInput
    createdBy: UserCreateNestedOneWithoutCreatedOrdersInput
    validatedBy?: UserCreateNestedOneWithoutValidatedOrdersInput
    preparedBy?: UserCreateNestedOneWithoutPreparedOrdersInput
    orderItems?: OrderItemCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutDeliveryNoteInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    validatedById?: string | null
    preparedById?: string | null
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutDeliveryNoteInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutDeliveryNoteInput, OrderUncheckedCreateWithoutDeliveryNoteInput>
  }

  export type OrderUpsertWithoutDeliveryNoteInput = {
    update: XOR<OrderUpdateWithoutDeliveryNoteInput, OrderUncheckedUpdateWithoutDeliveryNoteInput>
    create: XOR<OrderCreateWithoutDeliveryNoteInput, OrderUncheckedCreateWithoutDeliveryNoteInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutDeliveryNoteInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutDeliveryNoteInput, OrderUncheckedUpdateWithoutDeliveryNoteInput>
  }

  export type OrderUpdateWithoutDeliveryNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedOrdersNestedInput
    preparedBy?: UserUpdateOneWithoutPreparedOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutDeliveryNoteInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyCreatedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    validatedById?: string | null
    preparedById?: string | null
  }

  export type OrderCreateManyValidatedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    preparedById?: string | null
  }

  export type OrderCreateManyPreparedByInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    serviceId: string
    createdById: string
    validatedById?: string | null
  }

  export type OrderUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedOrdersNestedInput
    preparedBy?: UserUpdateOneWithoutPreparedOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    preparedBy?: UserUpdateOneWithoutPreparedOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutValidatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderUpdateWithoutPreparedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    service?: ServiceUpdateOneRequiredWithoutOrdersNestedInput
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutPreparedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutPreparedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    serviceId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyServiceInput = {
    id?: string
    firstName: string
    lastName: string
    email: string
    passwordHash: string
    role: $Enums.UserRole
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderCreateManyServiceInput = {
    id?: string
    orderNumber: string
    status: $Enums.OrderStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    validatedAt?: Date | string | null
    preparedAt?: Date | string | null
    deliveredAt?: Date | string | null
    notes?: string | null
    createdById: string
    validatedById?: string | null
    preparedById?: string | null
  }

  export type UserUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUpdateManyWithoutCreatedByNestedInput
    validatedOrders?: OrderUpdateManyWithoutValidatedByNestedInput
    preparedOrders?: OrderUpdateManyWithoutPreparedByNestedInput
  }

  export type UserUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOrders?: OrderUncheckedUpdateManyWithoutCreatedByNestedInput
    validatedOrders?: OrderUncheckedUpdateManyWithoutValidatedByNestedInput
    preparedOrders?: OrderUncheckedUpdateManyWithoutPreparedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    firstName?: StringFieldUpdateOperationsInput | string
    lastName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: StringFieldUpdateOperationsInput | string
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdBy?: UserUpdateOneRequiredWithoutCreatedOrdersNestedInput
    validatedBy?: UserUpdateOneWithoutValidatedOrdersNestedInput
    preparedBy?: UserUpdateOneWithoutPreparedOrdersNestedInput
    orderItems?: OrderItemUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
    orderItems?: OrderItemUncheckedUpdateManyWithoutOrderNestedInput
    deliveryNote?: DeliveryNoteUncheckedUpdateOneWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderNumber?: StringFieldUpdateOperationsInput | string
    status?: EnumOrderStatusFieldUpdateOperationsInput | $Enums.OrderStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    validatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    preparedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    deliveredAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    validatedById?: NullableStringFieldUpdateOperationsInput | string | null
    preparedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockEntryCreateManySupplierInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
  }

  export type StockEntryUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: MedicationBatchUpdateOneRequiredWithoutStockEntriesNestedInput
  }

  export type StockEntryUncheckedUpdateWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type StockEntryUncheckedUpdateManyWithoutSupplierInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationCreateManyTherapeuticClassInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    subClassId?: string | null
  }

  export type SubClassCreateManyTherapeuticClassInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type MedicationUpdateWithoutTherapeuticClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subClass?: SubClassUpdateOneWithoutMedicationsNestedInput
    batches?: MedicationBatchUpdateManyWithoutMedicationNestedInput
    orderItems?: OrderItemUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutTherapeuticClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subClassId?: NullableStringFieldUpdateOperationsInput | string | null
    batches?: MedicationBatchUncheckedUpdateManyWithoutMedicationNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutTherapeuticClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    subClassId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SubClassUpdateWithoutTherapeuticClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUpdateManyWithoutSubClassNestedInput
  }

  export type SubClassUncheckedUpdateWithoutTherapeuticClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medications?: MedicationUncheckedUpdateManyWithoutSubClassNestedInput
  }

  export type SubClassUncheckedUpdateManyWithoutTherapeuticClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MedicationCreateManySubClassInput = {
    id?: string
    dci: string
    codedci: string
    commercialName: string
    form: $Enums.MedicationForm
    dosage: string
    packagingUnit: $Enums.PackagingUnit
    unitsPerPackage: number
    minStockLevel: number
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    therapeuticClassId: string
  }

  export type MedicationUpdateWithoutSubClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClass?: TherapeuticClassUpdateOneRequiredWithoutMedicationsNestedInput
    batches?: MedicationBatchUpdateManyWithoutMedicationNestedInput
    orderItems?: OrderItemUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateWithoutSubClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
    batches?: MedicationBatchUncheckedUpdateManyWithoutMedicationNestedInput
    orderItems?: OrderItemUncheckedUpdateManyWithoutMedicationNestedInput
  }

  export type MedicationUncheckedUpdateManyWithoutSubClassInput = {
    id?: StringFieldUpdateOperationsInput | string
    dci?: StringFieldUpdateOperationsInput | string
    codedci?: StringFieldUpdateOperationsInput | string
    commercialName?: StringFieldUpdateOperationsInput | string
    form?: EnumMedicationFormFieldUpdateOperationsInput | $Enums.MedicationForm
    dosage?: StringFieldUpdateOperationsInput | string
    packagingUnit?: EnumPackagingUnitFieldUpdateOperationsInput | $Enums.PackagingUnit
    unitsPerPackage?: IntFieldUpdateOperationsInput | number
    minStockLevel?: IntFieldUpdateOperationsInput | number
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    therapeuticClassId?: StringFieldUpdateOperationsInput | string
  }

  export type MedicationBatchCreateManyMedicationInput = {
    id?: string
    batchNumber: string
    expirationDate: Date | string
    currentQuantity: number
    initialQuantity: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrderItemCreateManyMedicationInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    orderId: string
  }

  export type MedicationBatchUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockEntries?: StockEntryUpdateManyWithoutBatchNestedInput
    stockExits?: StockExitUpdateManyWithoutBatchNestedInput
  }

  export type MedicationBatchUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    stockEntries?: StockEntryUncheckedUpdateManyWithoutBatchNestedInput
    stockExits?: StockExitUncheckedUpdateManyWithoutBatchNestedInput
  }

  export type MedicationBatchUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    batchNumber?: StringFieldUpdateOperationsInput | string
    expirationDate?: DateTimeFieldUpdateOperationsInput | Date | string
    currentQuantity?: IntFieldUpdateOperationsInput | number
    initialQuantity?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderItemUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    order?: OrderUpdateOneRequiredWithoutOrderItemsNestedInput
    stockExits?: StockExitUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
    stockExits?: StockExitUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutMedicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderId?: StringFieldUpdateOperationsInput | string
  }

  export type StockEntryCreateManyBatchInput = {
    id?: string
    quantity: number
    entryDate?: Date | string
    invoiceNumber?: string | null
    unitPrice?: number | null
    createdAt?: Date | string
    updatedAt?: Date | string
    supplierId: string
  }

  export type StockExitCreateManyBatchInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    orderItemId?: string | null
  }

  export type StockEntryUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplier?: SupplierUpdateOneRequiredWithoutStockEntriesNestedInput
  }

  export type StockEntryUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type StockEntryUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    entryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    invoiceNumber?: NullableStringFieldUpdateOperationsInput | string | null
    unitPrice?: NullableFloatFieldUpdateOperationsInput | number | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    supplierId?: StringFieldUpdateOperationsInput | string
  }

  export type StockExitUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItem?: OrderItemUpdateOneWithoutStockExitsNestedInput
  }

  export type StockExitUncheckedUpdateWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StockExitUncheckedUpdateManyWithoutBatchInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    orderItemId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type OrderItemCreateManyOrderInput = {
    id?: string
    requestedQuantity: number
    validatedQuantity?: number | null
    preparedQuantity?: number | null
    status: $Enums.OrderItemStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    medicationId: string
  }

  export type OrderItemUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medication?: MedicationUpdateOneRequiredWithoutOrderItemsNestedInput
    stockExits?: StockExitUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationId?: StringFieldUpdateOperationsInput | string
    stockExits?: StockExitUncheckedUpdateManyWithoutOrderItemNestedInput
  }

  export type OrderItemUncheckedUpdateManyWithoutOrderInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestedQuantity?: IntFieldUpdateOperationsInput | number
    validatedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    preparedQuantity?: NullableIntFieldUpdateOperationsInput | number | null
    status?: EnumOrderItemStatusFieldUpdateOperationsInput | $Enums.OrderItemStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    medicationId?: StringFieldUpdateOperationsInput | string
  }

  export type StockExitCreateManyOrderItemInput = {
    id?: string
    quantity: number
    exitDate?: Date | string
    reason: $Enums.ExitReason
    createdAt?: Date | string
    updatedAt?: Date | string
    batchId: string
  }

  export type StockExitUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batch?: MedicationBatchUpdateOneRequiredWithoutStockExitsNestedInput
  }

  export type StockExitUncheckedUpdateWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
  }

  export type StockExitUncheckedUpdateManyWithoutOrderItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    exitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: EnumExitReasonFieldUpdateOperationsInput | $Enums.ExitReason
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    batchId?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}