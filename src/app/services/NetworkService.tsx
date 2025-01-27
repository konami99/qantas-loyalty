import { ProductDetails } from "../models/ProductDetails";

export class NetworkService {

  static async getProducts(): Promise<ProductDetails> {
    return {
      "data": {
        "search": {
          "total": 4,
          "products": [
            {
              "name": "Prohibition Liquor Company",
              "description": "Prohibition Christmas 500ml",
              "image": "https://picsum.photos/200/300?a",
              "tag": "sale",
              "wasPrice": {
                "cashPrice": {
                  "currencyCode": "AUD",
                  "amount": 200
                },
                "pointsPrice": {
                  "amount": 25000
                }
              },
              "currentPrice": {
                "cashPrice": {
                  "currencyCode": "AUD",
                  "amount": 119
                },
                "pointsPrice": {
                  "amount": 15000
                }
              }
            },
            {
              "name": "Royal Salute",
              "description": "Royal Salute 21 Year Old Blended Scotch Whisky Miami Polo Edition 700ml (Gift Box)",
              "imageSrc": "https://picsum.photos/200/300?b",
              "tag": null,
              "currentPrice": {
                "cashPrice": {
                  "currencyCode": "AUD",
                  "amount": 399
                },
                "pointsPrice": {
                  "amount": 79800
                }
              }
            },
            {
              "name": "Houraisen",
              "description": "Houraisen Beshi Tokubetsu Junmai Sake 720ml",
              "image": "https://picsum.photos/200/300?c",
              "tag": "sale",
              "wasPrice": {
                "cashPrice": {
                  "currencyCode": "AUD",
                  "amount": 134
                },
                "pointsPrice": {
                  "amount": 23470
                }
              },
              "currentPrice": {
                "cashPrice": {
                  "currencyCode": "AUD",
                  "amount": 129.99
                },
                "pointsPrice": {
                  "amount": 19900
                }
              }
            },
            {
              "name": "Aberlour",
              "description": "Aberlour 16 Year Old Double Cask Single Malt Scotch Whisky 700ml (Gift Tube)",
              "imageSrc": "https://picsum.photos/200/300?d",
              "tag": null,
              "currentPrice": {
                "cashPrice": {
                  "currencyCode": "AUD",
                  "amount": 199.9
                },
                "pointsPrice": {
                  "amount": 39980
                }
              }
            }
          ]
        }
      }
    }
  }
}