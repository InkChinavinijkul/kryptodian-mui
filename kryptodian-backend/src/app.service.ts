// import dotenv from 'dotenv';
// dotenv.config();
import 'dotenv/config';
import { HttpService } from '@nestjs/axios';
import { Injectable, Logger } from '@nestjs/common';
import { AxiosError, AxiosResponse } from 'axios';
import { Observable, catchError, firstValueFrom } from 'rxjs';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);
  constructor(private readonly httpService: HttpService) {}

  async getData(): Promise<AxiosResponse<any, any>> {
    const top100ListingsURL =
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest';

    const coinLogosURL =
      'https://pro-api.coinmarketcap.com/v2/cryptocurrency/info';

    const top100Listings = await firstValueFrom(
      this.httpService
        .get(top100ListingsURL, {
          headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );

    const top100IDs = top100Listings.data.data.map((coinInfo) => coinInfo.id);

    const coinLogosData = await firstValueFrom(
      this.httpService
        .get(coinLogosURL, {
          headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
          },
          params: {
            id: top100IDs.join(','),
          },
        })
        .pipe(
          catchError((error: AxiosError) => {
            this.logger.error(error.response.data);
            throw 'An error happened!';
          }),
        ),
    );
    console.log(coinLogosData.data.data);
    const processedData = top100Listings.data.data.map((coinInfo) => {
      return {
        id: coinInfo.id,
        logo: coinLogosData.data.data[coinInfo.id].logo,
        name: coinInfo.name,
        symbol: coinInfo.symbol,
        maxSupply: coinInfo.max_supply,
        circulatingSupply: coinInfo.circulating_supply,
        platform: coinInfo.platform,
        quote: coinInfo.quote,
        // quote: {
        // 	USD: {
        // 		price: number
        // 		volume24h: number
        // 		volumeChange24h: number
        // 		percentChange1h: number
        // 	}
        // }
      };
    });
    console.log(processedData);

    // const firstValue = await firstValueFrom(rawData)'
    // console.log(rawData);
    // const firstVal = await firstValueFrom(rawData);
    console.log(top100Listings.data.data);
    // return top100Listings.data.data;
    return processedData;
    // return test;
    // return this.httpService.get(
    //   'https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
    // );
  }
  getHello(): string {
    return 'Hello World!';
  }
  getLel(stuff: string): string {
    return stuff;
  }
}
