
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
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

exports.Prisma.ServiceScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SupplierScalarFieldEnum = {
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

exports.Prisma.TherapeuticClassScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
};

exports.Prisma.SubClassScalarFieldEnum = {
  id: 'id',
  code: 'code',
  name: 'name',
  description: 'description',
  isActive: 'isActive',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  therapeuticClassId: 'therapeuticClassId'
};

exports.Prisma.MedicationScalarFieldEnum = {
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

exports.Prisma.MedicationBatchScalarFieldEnum = {
  id: 'id',
  batchNumber: 'batchNumber',
  expirationDate: 'expirationDate',
  currentQuantity: 'currentQuantity',
  initialQuantity: 'initialQuantity',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  medicationId: 'medicationId'
};

exports.Prisma.StockEntryScalarFieldEnum = {
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

exports.Prisma.StockExitScalarFieldEnum = {
  id: 'id',
  quantity: 'quantity',
  exitDate: 'exitDate',
  reason: 'reason',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  batchId: 'batchId',
  orderItemId: 'orderItemId'
};

exports.Prisma.OrderScalarFieldEnum = {
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

exports.Prisma.OrderItemScalarFieldEnum = {
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

exports.Prisma.DeliveryNoteScalarFieldEnum = {
  id: 'id',
  noteNumber: 'noteNumber',
  createdAt: 'createdAt',
  printedAt: 'printedAt',
  orderId: 'orderId'
};

exports.Prisma.AlertScalarFieldEnum = {
  id: 'id',
  alertType: 'alertType',
  message: 'message',
  isRead: 'isRead',
  createdAt: 'createdAt',
  medicationId: 'medicationId',
  batchId: 'batchId',
  relatedEntityId: 'relatedEntityId'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.UserRole = exports.$Enums.UserRole = {
  ADMIN: 'ADMIN',
  PHARMACIST: 'PHARMACIST',
  SERVICE_COORDINATOR: 'SERVICE_COORDINATOR',
  ORDER_PREPARER: 'ORDER_PREPARER'
};

exports.MedicationForm = exports.$Enums.MedicationForm = {
  TABLET: 'TABLET',
  CAPSULE: 'CAPSULE',
  LIQUID: 'LIQUID',
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

exports.PackagingUnit = exports.$Enums.PackagingUnit = {
  BOX: 'BOX',
  BOTTLE: 'BOTTLE',
  VIAL: 'VIAL',
  AMPOULE: 'AMPOULE',
  TUBE: 'TUBE',
  BLISTER_PACK: 'BLISTER_PACK',
  JAR: 'JAR',
  BAG: 'BAG',
  SACHET: 'SACHET',
  SYRINGE: 'SYRINGE',
  INHALER_DEVICE: 'INHALER_DEVICE',
  OTHER: 'OTHER'
};

exports.ExitReason = exports.$Enums.ExitReason = {
  ORDER_FULFILLMENT: 'ORDER_FULFILLMENT',
  EXPIRATION: 'EXPIRATION',
  DAMAGE: 'DAMAGE',
  RETURN: 'RETURN',
  OTHER: 'OTHER'
};

exports.OrderStatus = exports.$Enums.OrderStatus = {
  DRAFT: 'DRAFT',
  SUBMITTED: 'SUBMITTED',
  VALIDATED: 'VALIDATED',
  PARTIALLY_VALIDATED: 'PARTIALLY_VALIDATED',
  IN_PREPARATION: 'IN_PREPARATION',
  PREPARED: 'PREPARED',
  DELIVERED: 'DELIVERED',
  CANCELLED: 'CANCELLED'
};

exports.OrderItemStatus = exports.$Enums.OrderItemStatus = {
  PENDING: 'PENDING',
  VALIDATED: 'VALIDATED',
  PARTIALLY_VALIDATED: 'PARTIALLY_VALIDATED',
  NOT_AVAILABLE: 'NOT_AVAILABLE',
  PREPARED: 'PREPARED',
  DELIVERED: 'DELIVERED'
};

exports.AlertType = exports.$Enums.AlertType = {
  LOW_STOCK: 'LOW_STOCK',
  EXPIRATION: 'EXPIRATION',
  ORDER_WAITING_VALIDATION: 'ORDER_WAITING_VALIDATION',
  ORDER_READY: 'ORDER_READY',
  SYSTEM: 'SYSTEM'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
