import { Customer } from "./Customer";
import { Product } from "./Procts";

export declare interface Order {
    id: string;
    customer: Customer;
    items: Product[];
    total: number;
    status: string;
    created_at: string;
    updated_at: string;
}
  