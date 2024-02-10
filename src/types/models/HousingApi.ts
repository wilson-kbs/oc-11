import { IHost } from "src/types/models/IHost.ts";

export interface IHousing {
  id: string;
  title: string;
  cover: string;
  pictures: string[];
  description: string;
  host: IHost;
  rating: string;
  location: string;
  equipments: string[];
  tags: string[];
}
