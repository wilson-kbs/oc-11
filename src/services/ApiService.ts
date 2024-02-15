import type { IHousing } from "src/types/models/IHousing.ts";

type FakeData = {
  housings: IHousing[];
};

export default class ApiService {
  private static initialized = false;
  private static fakeData: FakeData = {
    housings: [],
  };

  private static async init() {
    if (ApiService.initialized) {
      return;
    }

    const data = await fetch(import.meta.env.VITE_FAKE_DATA_URL);
    ApiService.fakeData = {
      housings: await data.json(),
    };
    ApiService.initialized = true;
  }

  private static async getFakeData(): Promise<FakeData> {
    await ApiService.init();
    return structuredClone(ApiService.fakeData);
  }

  public static async getAllHousing(): Promise<IHousing[]> {
    const data = await ApiService.getFakeData();
    return data.housings;
  }

  public static async getHousing(id: string): Promise<IHousing | undefined> {
    const data = await ApiService.getFakeData();

    return data.housings.find((housing) => housing.id === id);
  }
}
