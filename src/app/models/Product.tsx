import { CashPrice } from './CashPrice';
import { PointsPrice } from './PointsPrice';

export type Product = {
  name: string,
  description: string,
  image?: string,
  imageSrc?: string,
  tag: string | null,
  wasPrice?: {
    cashPrice: CashPrice,
    pointsPrice: PointsPrice,
  },
  currentPrice: {
    cashPrice: CashPrice,
    pointsPrice: PointsPrice,
  },
}