export interface LoginStatusProps {
  loggedInStatus: string,
  user: {}
}

export interface UserInputProps {
  email: string,
  password: string,
}

export type UserProps = {
  name: string,
  email: string,
  accounting_id: number
}

export interface LoginProps {
  handleSuccessfulAuth: (data: LoginStatusProps) => void
}

export interface HeaderLoggedProps {
  user: {} | UserProps,
  handleLogout: () => void
}

export interface CompanyProps {
  id: number,
  name: string,
  number: number
}

export interface InvoicesProps {
  id: number,
  access_key: string,
  cofins_base: number,
  cofins_value: number,
  customer: {
    name: string,
  }
  date_departure: Date,
  date_issue: Date,
  discount_value: number,
  expenses_value: number,
  icms_base: number,
  icms_value: number,
  invoice_value: number,
  ipi_base: number,
  ipi_value: number,
  model: string,
  number: number,
  pis_base: number,
  pis_value: number,
  safe_value: number,
  serie: string,
  shipping_value: number,
  sticms_base: number,
  sticms_value: number,
  total_product: number,
  type_movement: string,
  type_record: string
}

export interface InvoiceProductsProps {
  id: number,
  product_id: number,
  invoice_id: number,
  description: string,
  ncm: string,
  cfop: string,
  cest: string,
  quantity: number,
  price_total: number,
  price_unitary: number
}

export interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  dataInvoice: InvoicesProps
  dataProducts: InvoiceProductsProps[]
}

export interface CfopProps {
  cfop: string,
  total_accounting: number,
  total_icms_base: number,
  total_icms_value: number,
  total_icms_free_value: number,
  total_icms_other_value: number
}

export interface PisProps {
  pis_cst: string,
  total_accounting: number,
  total_pis_base: number,
  total_pis_value: number
}

export interface CofinsProps {
  cofins_cst: string,
  total_accounting: number,
  total_cofins_base: number,
  total_cofins_value: number
}