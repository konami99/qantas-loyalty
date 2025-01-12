import { CashPrice } from './CashPrice';
import { PointsPrice } from './PointsPrice';

export type Product = {
  name: string,
  description: string,
  tag: string | null,
  wasPrice?: {
    cashPrice: CashPrice,
    pointsPrice: PointsPrice,
  },
  currentPrice: {
    cashPrice: CashPrice,
    pointsPrice: PointsPrice,
  },
} & (
  | { image: string; imageSrc?: never }
  | { imageSrc: string; image?: never }
)