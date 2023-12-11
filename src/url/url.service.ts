import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { urlSchema } from 'src/schema/url.schema';

@Injectable()
export class UrlService {
  constructor(
    @InjectModel('url')
    private readonly urlModel: Model<urlSchema>,
  ) {}

  async generateShortId(numOfChars: number): Promise<string> {
    const chars =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    while (true) {
      const ans = Array.from(
        { length: numOfChars },
        () => chars[Math.floor(Math.random() * chars.length)],
      ).join('');
      if ((await this.urlModel.findOne({ shorturl: ans }).exec()) === null) {
        return ans;
      }
    }
  }

  async createShortUrl(url: string) {
    const shorturl = await this.generateShortId(5);
    const created_at = new Date();
    const newUrl = new this.urlModel({ url, shorturl, created_at });
    return newUrl.save();
  }

  async getUrl(shorturl: string) {
    return await this.urlModel.findOne({ shorturl }, { url: 1, _id: 0 }).exec();
  }
}
