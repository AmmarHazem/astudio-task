export interface GetProductsResponseModel {
  products?: ProductModel[];
  total?: number;
  skip?: number;
  limit?: number;
}

export interface ProductModel {
  id?: number;
  title?: string;
  description?: string;
  category?: string;
  price?: number;
  discountPercentage?: number;
  rating?: number;
  stock?: number;
  tags?: string[];
  brand?: string;
  sku?: string;
  weight?: number;
  warrantyInformation?: string;
  shippingInformation?: string;
  availabilityStatus?: AvailabilityStatus;
  reviews?: ProductReviewModel[];
  returnPolicy?: string;
  minimumOrderQuantity?: number;
  meta?: ProductMetaModel;
  images?: string[];
  thumbnail?: string;
}

export type AvailabilityStatus = "Low Stock" | "In Stock";

export interface ProductMetaModel {
  createdAt?: string;
  updatedAt?: string;
  barcode?: string;
  qrCode?: string;
}

export interface ProductReviewModel {
  rating?: number;
  comment?: string;
  date?: Date;
  reviewerName?: string;
  reviewerEmail?: string;
}
